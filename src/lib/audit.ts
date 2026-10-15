export type Issue={id:string;title:string;detail:string;score:number;severity:"critical"|"high"|"medium"};
export type Report={target:string;fetchedAt:string;scores:Record<string,number|null>;vitals:Record<string,string|null>;issues:Issue[];ai?:{model:string;recommendations:string};aiUnavailable?:boolean;aiError?:string};
type AuditEntry={score?:number;title?:string;displayValue?:string;description?:string;scoreDisplayMode?:string};
type LighthouseResult={categories?:Record<string,{score?:number}>;audits?:Record<string,AuditEntry>;runtimeError?:{message?:string}};
type PageSpeedData={lighthouseResult?:LighthouseResult};
export function validateUrl(input:string):string{
 if(input.length>2048)throw Error("URL too long");
 let u:URL;
 try{u=new URL(input.trim())}catch{throw Error("Enter a valid HTTPS website URL")}
 if(u.protocol!=="https:"||u.username||u.password||u.port||u.hash)throw Error("Public HTTPS URLs without credentials or custom ports only");
 const h=u.hostname.toLowerCase().replace(/\.$/,"");
 if(!h.includes(".")||/^(?:\d+\.)*\d+$/.test(h)||h.includes(":")||(!h.startsWith("xn--")&&/[^a-z0-9.-]/.test(h))||/(?:^|\.)(?:localhost|local|internal|test|invalid|home|lan)$/.test(h))throw Error("A public domain is required");
 return u.toString();
}
export function parseAudit(data:PageSpeedData,target:string):Report{
 const r=data?.lighthouseResult;
 if(!r?.categories||r.runtimeError?.message)throw Error(r?.runtimeError?.message||"No Lighthouse data returned");
 const pct=(v:unknown)=>typeof v==="number"&&Number.isFinite(v)?Math.round(v*100):null;
 const a=r.audits||{},c=r.categories;
 const issues:Issue[]=Object.entries(a)
 .filter(([,q])=>typeof q?.score==="number"&&q.score<.9&&typeof q.title==="string"&&!["informative","notApplicable","manual"].includes(q.scoreDisplayMode||""))
 .map(([id,q])=>{
 const score=q.score??1;
 return {id,title:(q.title||"").slice(0,130),detail:String(q.displayValue||q.description||"Needs improvement").replace(/<[^>]+>/g,"").slice(0,240),score:Math.round(score*100),severity:score<.5?"critical":score<.75?"high":"medium"} as Issue;
 }).sort((x,y)=>x.score-y.score).slice(0,10);
 const vital=(key:string)=>a[key]?.displayValue??null;
 return {target,fetchedAt:new Date().toISOString(),scores:{performance:pct(c.performance?.score),accessibility:pct(c.accessibility?.score),seo:pct(c.seo?.score),bestPractices:pct(c["best-practices"]?.score)},vitals:{LCP:vital("largest-contentful-paint"),CLS:vital("cumulative-layout-shift"),TBT:vital("total-blocking-time"),FCP:vital("first-contentful-paint")},issues};
}