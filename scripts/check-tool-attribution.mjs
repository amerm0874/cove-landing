import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import * as attribution from '../src/lib/tool-attribution.ts';
import * as store from '../src/lib/store-click.ts';

for (const [path, code] of Object.entries(attribution.TOOL_CAMPAIGNS)) {
  const link = new URL(attribution.toolDownloadUrl(path));
  assert.equal(link.origin, 'https://cove.onelink.me');
  assert.equal(link.pathname, '/lzsv');
  assert.deepEqual([...link.searchParams.keys()], ['pid','c','af_channel']);
  assert.equal(link.searchParams.get('pid'), 'cove_tools');
  assert.equal(link.searchParams.get('c'), code);
  const qaLink = new URL(attribution.toolDownloadUrl(path, true));
  assert.equal(qaLink.searchParams.get('c'), 'codex_verification');
  assert.equal(qaLink.searchParams.get('af_adset'), code);
  assert.equal(store.storePlatform(link.href), 'ios');
  const props = attribution.toolEventProperties(path, '?email=patient@example.com&transferDate=2026-10-01&utm_campaign=patient_name');
  assert.equal(props.is_test, false);
  assert.equal(props.tool_id, code);
  assert.equal(JSON.stringify(props).includes('patient'), false);
  assert.equal(attribution.toolEventProperties(path, '?utm_campaign=codex_verification').is_test, true);
}
assert.equal(attribution.toolEventProperties('/unknown/patient'), null);
assert.equal(attribution.toolCampaign('toString'), undefined);
assert.throws(()=>attribution.toolDownloadUrl('/unknown'));
const events = [];
let options;
const sdk = { init:(_,o)=>{options=o;}, register:()=>{}, capture:(event,properties)=>events.push({event,properties}) };
let source=fs.readFileSync('src/lib/posthog.ts','utf8').replaceAll('import.meta.env.VITE_POSTHOG_KEY','"test-key"').replaceAll('import.meta.env.VITE_POSTHOG_HOST','"https://us.i.posthog.com"');
source=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const exports={};
vm.runInNewContext(source,{exports,require:n=>n==='posthog-js'?{default:sdk}:n==='./store-click'?store:attribution,window:{location:{hostname:'www.coveivf.life',search:'?patient=private&utm_campaign=codex_verification'}}});
exports.initPostHog();
for(const k of ['autocapture','capture_pageview','capture_pageleave','capture_exceptions','capture_performance','enable_heatmaps','capture_dead_clicks','ip']) assert.equal(options[k],false,k);
assert.equal(options.persistence,'memory');
assert.equal(options.person_profiles,'never');
assert.equal(options.disable_session_recording,true);
exports.captureToolView('/days-past-embryo-transfer-calculator');
exports.captureToolView('/days-past-embryo-transfer-calculator');
assert.equal(events.length,1,'Rerender/StrictMode must not double count');
exports.captureToolView('/features');
exports.captureToolView('/days-past-embryo-transfer-calculator');
exports.captureToolDownload('/days-past-embryo-transfer-calculator');
assert.equal(events.length,3);
for(const event of events){
  const safe=options.before_send({...event,properties:{...event.properties,token:'token',distinct_id:'ephemeral',$current_url:'https://test/?patient=private',$referrer:'https://private',email:'private',result:42,$set:{name:'private'},$session_id:'unwanted'}});
  assert.equal(JSON.stringify(safe).includes('private'),false);
  assert.equal('$session_id' in safe.properties,false);
  assert.equal(safe.properties.$geoip_disable,true);
  assert.equal(safe.properties.is_test,true);
}
assert.equal(options.before_send({event:'$autocapture',properties:{}}),null);
console.log('Tool attribution, sensitive-property removal, no persistence, QA separation and navigation deduplication passed.');
