import {mkdir,writeFile} from "node:fs/promises";
const base="http://127.0.0.1:3000";
await mkdir("evidence",{recursive:true});
const evidence={runAt:new Date().toISOString(),repository:"Deshan217/ncode-ai-studio-hf26",model:"gemma3:1b",aiSmoke:null,audit:null};
const save=async()=>{await writeFile("evidence/real-ai-test.json",JSON.stringify(evidence,null,2));};
try {
  const r=await fetch("http://127.0.0.1:11434/api/generate",{
    method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({model:"gemma3:1b",prompt:"In one concise sentence, explain why locally running an open-weight model helps freelancers.",stream:false,options:{temperature:0,num_predict:90}}),
    signal:AbortSignal.timeout(90000)
  });
  const d=await r.json();
  if(!r.ok||typeof d.response!=="string"||!d.response.trim())throw Error("Ollama smoke response missing: HTTP "+r.status);
  evidence.aiSmoke={success:true,model:d.model,generatedText:d.response.trim(),totalDurationNanoseconds:d.total_duration,done:d.done};
  console.log("REAL OLLAMA MODEL RESPONSE (gemma3:1b):",d.response.trim());
} catch(err) {
  evidence.aiSmoke={success:false,error:String(err)};
  console.error("Local AI inference failed:",String(err));
  await save();process.exit(1);
}
try {
  const r=await fetch(base+"/api/audit",{
    method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({url:"https://ncodest.com/"}),
    signal:AbortSignal.timeout(145000)
  });
  const d=await r.json();
  if(!r.ok)throw Error("Audit endpoint HTTP "+r.status+": "+JSON.stringify(d));
  const integrated=!!(d.ai?.recommendations?.trim());
  evidence.audit={success:integrated,target:d.target,scores:d.scores,vitals:d.vitals,issues:d.issues?.length,aiModel:d.ai?.model,aiRecommendations:d.ai?.recommendations??null,aiError:d.aiError??null};
  if(!integrated)console.error("Lighthouse completed but integrated AI failed",d.aiError);
  else console.log("REAL LIGHTHOUSE + OLLAMA APPLICATION INTEGRATION COMPLETE",JSON.stringify({target:d.target,scores:d.scores,model:d.ai.model}));
} catch(err) {
  evidence.audit={success:false,error:String(err)};
  console.error("End-to-end website audit incomplete:",String(err));
}
await save();
await writeFile("evidence/REAL_TEST_STATUS.md",`# GitHub Actions real AI evidence

Run timestamp: ${evidence.runAt}

Open-weight model: ${evidence.model}

Gemma local inference: ${evidence.aiSmoke?.success?"PASS (real generated text in JSON artifact)":"FAIL"}

N-CODE STUDIO URL end-to-end audit and model analysis: ${evidence.audit?.success?"PASS":"NOT VERIFIED"}

${evidence.audit?.success?"This is a real response from the checked website and model, not sample data.":"Do not claim the end-to-end app works until a real audit and AI output is captured. See real-ai-test.json for the actual error."}
`);
if(!evidence.audit?.success)process.exitCode=1;
