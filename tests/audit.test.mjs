import test from "node:test";
import assert from "node:assert/strict";
import {validateUrl,parseAudit} from "../src/lib/audit.ts";

test("accepts normal HTTPS domains",()=>{
 assert.equal(validateUrl("https://Example.COM/shop?q=1"),"https://example.com/shop?q=1");
});
test("rejects unsafe, local or unsupported URLs",()=>{
 for(const url of ["http://example.com","https://localhost","https://127.0.0.1","https://192.168.1.1","https://[::1]/","https://api.internal","https://example.com:8443","https://user:pass@example.com","file:///etc/passwd","https://example.test"]){
  assert.throws(()=>validateUrl(url),Error,url);
 }
});
test("parses lighthouse scores, vitals and issues",()=>{
 const out=parseAudit({lighthouseResult:{categories:{performance:{score:.56},accessibility:{score:.83},seo:{score:1},"best-practices":{score:.91}},audits:{"largest-contentful-paint":{displayValue:"3.2 s",score:.45,title:"Largest Contentful Paint"},"unused-javascript":{title:"Reduce unused JavaScript",score:.1,description:"Avoid unused code"},"total-blocking-time":{displayValue:"520 ms",score:.6,title:"Total Blocking Time"}}}},"https://example.org/");
 assert.equal(out.scores.performance,56);
 assert.equal(out.vitals.LCP,"3.2 s");
 assert.equal(out.issues[0].id,"unused-javascript");
 assert.equal(out.target,"https://example.org/");
});
test("rejects malformed lighthouse responses",()=>{
 assert.throws(()=>parseAudit({},"https://example.org/"),/Lighthouse/);
});
