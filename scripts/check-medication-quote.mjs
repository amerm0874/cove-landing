import assert from 'node:assert/strict';
import { calculateQuote as quote, moneyCents, wholeCount } from '../src/lib/medication-quote.ts';

const single = quote('6', {packSize:'1', price:'20', fees:'0'});
const box = quote('6', {packSize:'5', price:'90', fees:'0'});
assert.equal(single.total, 12000);
assert.equal(box.total, 18000);
assert.equal(box.extra, 4);
assert.equal(box.packs, 2);
assert.equal(box.perItem, 1800);
assert.equal(quote('5', {packSize:'5', price:'90', fees:'0'}).packs, 1);
assert.ok(quote('6', {packSize:'1', price:'20', fees:'70'}).total > box.total);
assert.equal(quote('6', {packSize:'1', price:'20', fees:''}), null);
assert.equal(quote('', {packSize:'1', price:'20', fees:'0'}), null);
assert.equal(quote('3', {packSize:'1', price:'0.10', fees:'0.20'}).total, 50);
assert.equal(quote('6', {packSize:'2', price:'40', fees:'0'}).total, single.total);
for (const input of ['', '-1', '1e3', '1.001', 'Infinity', '1,000', '1000001']) assert.equal(moneyCents(input), null);
for (const input of ['', '0', '-1', '1.5', '10001', 'Infinity']) assert.equal(wholeCount(input), null);
assert.equal(moneyCents('0'), 0);
assert.equal(moneyCents('0.10'), 10);
assert.ok(Number.isSafeInteger(quote('10000', {packSize:'1', price:'1000000', fees:'1000000'}).total));
console.log('Quote calculations passed: pack rounding, fees, ties, missing values, decimals and bounds.');

if (process.argv.includes('--ssr')) {
  const {default: app} = await import('../.vercel/output/functions/__server.func/index.mjs');
  const path = '/ivf-medication-cost-calculator';
  const response = await app.fetch(new Request(`https://www.coveivf.life${path}`));
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.equal((html.match(/<h1/g) || []).length, 1);
  assert.ok(html.includes(`rel="canonical" href="https://www.coveivf.life${path}"`));
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
  const graph = schemas.find(schema => schema['@graph'])['@graph'];
  assert.ok(graph.some(schema => schema['@type'] === 'WebApplication'));
  assert.equal(graph.find(schema => schema['@type'] === 'FAQPage').mainEntity.length, 7);
  assert.equal((html.match(/data-store-placement="medication_quote_calculator"/g) || []).length, 1);
  assert.ok(html.includes('shipping'));
  console.log('SSR checks passed: HTTP 200, one H1, canonical, valid JSON-LD, seven FAQs and one app CTA.');
}
