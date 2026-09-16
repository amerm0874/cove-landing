#!/usr/bin/env node
/**
 * IndexNow submitter — https://www.indexnow.org/documentation
 *
 *   npm run indexnow                       # every <loc> in the live sitemap
 *   npm run indexnow -- https://www.coveivf.life/blog/some-post   # explicit URLs
 *
 * Plain Node (global fetch, Node 18+), no dependencies.
 *
 * The key file must be live at the site root before submitting: IndexNow
 * fetches https://<host>/<key>.txt and compares it to the `key` field, so a
 * fresh key only works after the site has been deployed.
 */

import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HOST = 'www.coveivf.life';
const ORIGIN = `https://${HOST}`;
const SITEMAP_URL = `${ORIGIN}/sitemap.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const MAX_URLS = 10000; // documented per-request limit

const PUBLIC_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
/** Documented key format: 8-128 chars, a-z A-Z 0-9 and dashes. */
const KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/;

/** The key file in public/ (or INDEXNOW_KEY). Its basename is the key. */
function resolveKey() {
  const fromEnv = process.env.INDEXNOW_KEY?.trim();
  if (fromEnv) {
    if (!KEY_PATTERN.test(fromEnv)) {
      throw new Error(`INDEXNOW_KEY "${fromEnv}" is not 8-128 chars of [A-Za-z0-9-].`);
    }
    return fromEnv;
  }

  const candidates = readdirSync(PUBLIC_DIR)
    .filter((name) => name.endsWith('.txt'))
    .map((name) => ({ name, key: name.slice(0, -4) }))
    .filter(({ name, key }) => {
      if (!KEY_PATTERN.test(key)) return false;
      // The file must contain exactly the key, per the spec.
      return readFileSync(join(PUBLIC_DIR, name), 'utf8').trim() === key;
    });

  if (candidates.length === 0) {
    throw new Error(`No IndexNow key file found in ${PUBLIC_DIR} (expected <key>.txt containing the key).`);
  }
  if (candidates.length > 1) {
    throw new Error(
      `Multiple IndexNow key files found: ${candidates.map((c) => c.name).join(', ')}. Keep one, or set INDEXNOW_KEY.`,
    );
  }
  return candidates[0].key;
}

/** IndexNow validates the key by fetching this file — fail early if it 404s. */
async function verifyKeyIsLive(key) {
  const keyLocation = `${ORIGIN}/${key}.txt`;
  let response;
  try {
    response = await fetch(keyLocation, { redirect: 'follow' });
  } catch (error) {
    throw new Error(`Could not fetch ${keyLocation}: ${error.message}`);
  }
  if (!response.ok) {
    throw new Error(`${keyLocation} returned HTTP ${response.status} — deploy the key file first.`);
  }
  const body = (await response.text()).trim();
  if (body !== key) {
    throw new Error(`${keyLocation} does not contain the key (got ${body.length} chars).`);
  }
  console.log(`Key file OK: ${keyLocation}`);
  return keyLocation;
}

async function urlsFromSitemap() {
  const response = await fetch(SITEMAP_URL);
  if (!response.ok) {
    throw new Error(`${SITEMAP_URL} returned HTTP ${response.status}`);
  }
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
  if (urls.length === 0) {
    throw new Error(`No <loc> entries found in ${SITEMAP_URL}`);
  }
  return urls;
}

/** Documented response codes. */
function explainStatus(status) {
  switch (status) {
    case 200:
      return 'OK — URLs submitted.';
    case 202:
      return 'Accepted — received; key validation pending.';
    case 400:
      return 'Bad request — invalid format.';
    case 403:
      return 'Forbidden — key not valid (not found, or does not match the key file).';
    case 422:
      return 'Unprocessable — URLs do not belong to the host, or the key does not match the schema.';
    case 429:
      return 'Too many requests — treated as potential spam. Retry later.';
    default:
      return 'Unexpected status — see https://www.indexnow.org/documentation';
  }
}

async function main() {
  const key = resolveKey();
  const keyLocation = await verifyKeyIsLive(key);

  const argUrls = process.argv.slice(2).filter((arg) => arg.startsWith('http'));
  const urlList = argUrls.length > 0 ? argUrls : await urlsFromSitemap();

  const offSite = urlList.filter((url) => new URL(url).host !== HOST);
  if (offSite.length > 0) {
    throw new Error(`These URLs are not on ${HOST}: ${offSite.join(', ')}`);
  }
  if (urlList.length > MAX_URLS) {
    throw new Error(`${urlList.length} URLs exceeds the ${MAX_URLS}-URL limit for one request.`);
  }

  console.log(`Submitting ${urlList.length} URL(s) from ${argUrls.length > 0 ? 'arguments' : SITEMAP_URL}:`);
  for (const url of urlList) {
    console.log(`  ${url}`);
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
  });

  const body = (await response.text()).trim();
  console.log(`\nHTTP ${response.status} — ${explainStatus(response.status)}`);
  if (body) {
    console.log(`Response body: ${body.slice(0, 500)}`);
  }

  if (!response.ok) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(`IndexNow submission failed: ${error.message}`);
  process.exitCode = 1;
});
