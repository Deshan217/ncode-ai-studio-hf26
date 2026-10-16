import type {Metadata} from "next";
import Link from "next/link";
export const metadata:Metadata={title:"Verified Lighthouse + Gemma Case Study | N-CODE AI Studio",description:"A genuine audit of ncodest.com and real open-weight Gemma inference captured in GitHub Actions."};
const metrics=[["Performance",57],["Accessibility",78],["SEO",100],["Best Practices",100]] as const;
const suggestions=[
 {title:"Improve semantic HTML and accessible names",description:"The captured Gemma response prioritized ARIA usage, accessible button names, and correctly labelled controls. Review the actual affected elements before applying changes."},
 {title:"Investigate contrast and labeling",description:"Check text contrast, link and button labels, and relationships between visual labels and their accessible names. Confirm each Lighthouse issue manually."},
 {title:"Review JavaScript workload and third-party cost",description:"Gemma flagged main-thread work and third-party scripts for investigation. Profile the page and test changes with repeat Lighthouse runs rather than assuming a root cause."},
];
export default function CaseStudy(){
 return <main style={{minHeight:"100vh",background:"#090b13",color:"#e7eafa",fontFamily:"system-ui,sans-serif",padding:"min(7vw,64px) 24px"}}>
 <div style={{maxWidth:990,margin:"0 auto"}}>
 <Link href="/" style={{color:"#aaa3ff",textDecoration:"none"}}>← N-CODE AI Studio</Link>
 <p style={{letterSpacing:3,fontSize:12,color:"#aba0ff",marginTop:54}}>HACKTOBERFEST 2026 · WEEK 2 · VERIFIED PROOF OF CONCEPT</p>
 <h1 style={{fontSize:"clamp(35px,6vw,65px)",lineHeight:1.09,margin:"14px 0"}}>Real Lighthouse data.<br/><span style={{color:"#a39aff"}}>Real open-weight AI.</span></h1>
 <p style={{color:"#b6bfd1",maxWidth:720,fontSize:17,lineHeight:1.8}}>This is a recorded proof of concept: GitHub Actions ran headless Chrome Lighthouse against ncodest.com, then generated actual website-advice text using a locally hosted Ollama Gemma 3 1B model.</p>
 <div style={{background:"#171b2a",border:"1px solid #343a57",borderRadius:18,padding:"22px 28px",margin:"30px 0"}}>
 <b style={{color:"#52d6ae"}}>● VERIFIED IN CI — NOT A LIVE VERCEL AI INFERENCE</b>
 <p style={{color:"#b0b9cf",lineHeight:1.7}}>Measured October 15, 2026, on a GitHub-hosted Linux runner. These are single-run mobile lab metrics, not current or real-user scores. The live Vercel analyzer may still need PageSpeed API quota and privately hosted AI inference configuration.</p>
 <a href="https://github.com/Deshan217/ncode-ai-studio-hf26/actions/runs/38784847640" target="_blank" rel="noreferrer" style={{color:"#c2bdff"}}>Open actual successful test and downloadable evidence artifact ↗</a>
 </div>
 <h2 style={{fontSize:27,marginTop:46}}>Observed mobile Lighthouse scores</h2>
 <p style={{color:"#abb4cb"}}>Website: <a href="https://ncodest.com/" style={{color:"#aaa6ff"}}>https://ncodest.com/</a></p>
 <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:14,margin:"24px 0 44px"}}>
 {metrics.map(([name,score])=><div key={name} style={{border:"1px solid #30374a",background:"#151a29",borderRadius:16,padding:24}}><p style={{color:"#adb7ce"}}>{name}</p><b style={{fontSize:44,color:score>=90?"#5dd5a5":score>=70?"#f3c675":"#ee8b86"}}>{score}</b><span style={{color:"#778199"}}> /100</span></div>)}</div>
 <h2 style={{fontSize:27}}>Gemma-generated suggestions — reviewed summary</h2>
 <p style={{color:"#aeb8c9",lineHeight:1.75}}>The suggestions below summarize the real Gemma output in the CI log; they are not independent proof that any specific fix is needed. The model also invented a possible service price; that price was not evidence-based and is deliberately omitted here.</p>
 <div style={{display:"grid",gap:14,marginTop:22}}>{suggestions.map((x,i)=><section key={x.title} style={{background:"#151928",border:"1px solid #30364a",borderRadius:16,padding:23}}><span style={{fontSize:12,color:"#9c94fc"}}>RECOMMENDATION {i+1}</span><h3 style={{fontSize:20}}>{x.title}</h3><p style={{color:"#adb5c9",lineHeight:1.75}}>{x.description}</p></section>)}</div>
 <h2 style={{fontSize:27,marginTop:48}}>How this works</h2>
 <p style={{color:"#aeb8cf",lineHeight:1.8}}>A public URL is audited with Lighthouse. Selected scores and issues become a structured prompt for an open-weight language model running in Ollama, producing an advisory report that a freelancer can review and adapt. For this verified run we used the Lighthouse CLI, avoiding Google PageSpeed API quota. The deployed web UI uses a different audit endpoint, so the two environments must not be conflated.</p>
 <p style={{color:"#aeb8cf",lineHeight:1.8}}>Potential side hustle: a transparent, affordable starter audit with optional paid human-led accessibility, SEO and performance improvements. The commercial model has not been validated with paying clients.</p>
 <div style={{display:"flex",gap:15,flexWrap:"wrap",margin:"35px 0 55px"}}>
 <a href="https://github.com/Deshan217/ncode-ai-studio-hf26" style={{border:"1px solid #7065dc",color:"white",padding:"14px 21px",borderRadius:10,textDecoration:"none"}}>View source code ↗</a>
 <a href="https://github.com/Deshan217/ncode-ai-studio-hf26/actions/runs/38784847640/artifacts/11998425425" style={{background:"#776bf5",color:"white",padding:"14px 21px",borderRadius:10,textDecoration:"none"}}>Download raw test evidence ↗</a>
 </div>
 <footer style={{borderTop:"1px solid #303548",paddingTop:24,color:"#8b95aa",fontSize:13}}>N-CODE STUDIO · MIT open source · Hacktoberfest 2026</footer>
 </div>
 </main>;
}
