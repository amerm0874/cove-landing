import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function load(file, dependencies = {}, globals = {}) {
 const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
 const exports = {};
 vm.runInNewContext(source, {exports, require:(name)=>{if(!(name in dependencies)) throw Error(name);return dependencies[name];}, URL, URLSearchParams, ...globals});
 return exports;
}
const pure = load('src/lib/store-click.ts');
for(const href of ['https://apps.apple.com/app/id6788749556','https://apps.apple.com/us/app/cove-ivf-tracker-injections/id6788749556','https://cove.onelink.me/lzsv/web']) assert.equal(pure.storePlatform(href),'ios');
assert.equal(pure.storePlatform('https://play.google.com/store/apps/details?id=com.mohamedamer.cove'),'android');
for(const href of ['https://apps.apple.com.evil.test/app/id6788749556','https://apps.apple.com/app/id123','javascript:alert(1)','https://play.google.com/store/apps/details?id=other']) assert.equal(pure.storePlatform(href),null);
assert.equal(pure.campaignTag('launch_october-2026'),'launch_october-2026');
for(const value of ['person@example.com','Bearer token','https://example.com',null,'a'.repeat(65)]) assert.equal(pure.campaignTag(value),undefined);
const config = load('src/i18n/config.ts');
const handlers = new Map();
const captured = [];
class Element { constructor(link){this.link=link;} closest(){return this.link;} }
const location = {pathname:'/ar/blog/example',search:'?utm_source=google&utm_campaign=launch&email=private@example.com'};
const listener = load('src/lib/store-click-tracking.ts', {'@/i18n/config':config,'./store-click':pure,'./posthog':{captureStoreClick:(props)=>captured.push(props)}}, {window:{location},document:{addEventListener:(name,fn)=>handlers.set(name,fn),removeEventListener:(name)=>handlers.delete(name)},Element});
const cleanup = listener.listenForStoreClicks();
const link={href:'https://play.google.com/store/apps/details?id=com.mohamedamer.cove',dataset:{storePlacement:'article_end'},closest:()=>null};
handlers.get('click')({type:'click',button:0,target:new Element(link)});
assert.equal(captured.length,1);
assert.equal(captured[0].platform,'android');
assert.equal(captured[0].page,'/blog/example');
assert.equal(captured[0].locale,'ar');
assert.equal(captured[0].placement,'article_end');
assert.equal(captured[0].utm_source,'google');
assert.equal('email' in captured[0],false);
link.dataset.storePurpose='review';
handlers.get('click')({type:'click',button:0,target:new Element(link)});
assert.equal(captured.length,1);
delete link.dataset.storePurpose;
location.pathname='/features';
handlers.get('auxclick')({type:'auxclick',button:2,target:new Element(link)});
assert.equal(captured.length,1);
handlers.get('auxclick')({type:'auxclick',button:1,target:new Element(link)});
assert.equal(captured.length,2);
assert.equal(captured[1].page,'/features');
cleanup();
assert.equal(handlers.size,0);
console.log('Store destination, campaign privacy, locale, navigation, review exclusion, middle-click and cleanup checks passed.');
