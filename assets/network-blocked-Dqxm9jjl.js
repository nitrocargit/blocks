import{r as e}from"./main-D62-lkxP.js";import{t}from"./reachability-K1mkPe8s.js";import{n}from"./net-CsyRAM57.js";var r=`https://docs.google.com/forms/d/e/1FAIpQLSdT6DBgBSjDnt9y8orxd3e-peCewWfRS8nslEd7W-ybD2LmNA/formResponse`,i={message:`entry.1011483413`,contact:`entry.246117644`,details:`entry.838000037`},a=4e3;async function o(e){try{let t=new URL(e);return t.protocol=t.protocol===`ws:`?`http:`:`https:`,await fetch(t.origin+`/`,{mode:`no-cors`,cache:`no-store`,credentials:`omit`,signal:AbortSignal.timeout(a)}),!0}catch{return!1}}async function s(e){return typeof navigator<`u`&&navigator.onLine===!1?null:e instanceof n?await o(e.url)?null:`world`:(e instanceof TypeError||e instanceof Error&&/took too long|service is unavailable/.test(e.message))&&!await t()?`lobby`:null}var c=`
#net-blocked{position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(10,11,16,.86);font:15px/1.45 system-ui,sans-serif;color:#f3f5fa}
#net-blocked .nb-card{width:min(460px,100%);max-height:100%;overflow:auto;background:#22252f;border:2px solid #3a3f4e;border-radius:10px;padding:22px}
#net-blocked h2{margin:0 0 8px;font-size:22px}
#net-blocked p{margin:0 0 12px;color:#c9cdd8}
#net-blocked h3{margin:18px 0 6px;font-size:16px}
#net-blocked textarea,#net-blocked input{box-sizing:border-box;width:100%;margin:0 0 8px;padding:8px 10px;border-radius:6px;border:1px solid #4a5062;background:#171922;color:inherit;font:inherit}
#net-blocked textarea{min-height:96px;resize:vertical}
#net-blocked .nb-row{display:flex;gap:8px;flex-wrap:wrap}
#net-blocked button{padding:8px 14px;border-radius:6px;border:0;font:inherit;font-weight:600;cursor:pointer;background:#3a3f4e;color:inherit}
#net-blocked button.nb-primary{background:#7c4dff}
#net-blocked button:disabled{opacity:.6;cursor:default}
#net-blocked .nb-status{min-height:1.4em;margin:6px 0 0;font-size:14px}
`,l=!1;function u(e,t=``){if(l||typeof document>`u`)return;l=!0;let n=document.createElement(`style`);n.textContent=c;let r=document.createElement(`div`);r.id=`net-blocked`,r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-modal`,`true`),r.setAttribute(`aria-labelledby`,`net-blocked-title`),r.innerHTML=`<div class="nb-card">
<h2 id="net-blocked-title">Game blocked on your network</h2>
<p>Your school, work or home network blocks ${e===`lobby`?`the blox.party game servers`:`the game world’s server`}, so the game can’t connect here. Try another network (home Wi‑Fi or mobile data), or ask your network admin to allow <b>blox.party</b> and <b>fly.dev</b>.</p>
<div class="nb-row"><button type="button" class="nb-primary" data-act="retry">Try again</button><button type="button" data-act="dismiss">Play anyway</button></div>
<h3>Contact us</h3>
<p>Tell us what happened, or which school or network you’re on. We read every message.</p>
<form novalidate>
<textarea name="message" maxlength="2000" placeholder="Your message" aria-label="Your message" required></textarea>
<input name="contact" maxlength="200" placeholder="Email or Discord (optional, if you want a reply)" aria-label="Email or Discord (optional)">
<button type="submit" class="nb-primary">Send</button>
<p class="nb-status" aria-live="polite"></p>
</form></div>`,document.head.append(n),document.body.append(r);let i=r.querySelector(`form`),a=r.querySelector(`.nb-status`),o=i.querySelector(`button[type=submit]`);r.querySelector(`[data-act=retry]`).onclick=()=>location.reload(),r.querySelector(`[data-act=dismiss]`).onclick=()=>{r.remove(),n.remove(),l=!1},i.onsubmit=async n=>{n.preventDefault();let r=i.elements.namedItem(`message`).value.trim(),s=i.elements.namedItem(`contact`).value.trim();if(!r){a.textContent=`Please write a message first.`;return}o.disabled=!0,a.textContent=`Sending…`;try{await f(r,s,d(e,t)),a.textContent=`Thanks! Your message was sent.`,i.querySelector(`textarea`).disabled=!0,i.querySelector(`input`).disabled=!0}catch{a.textContent=`This network blocks that too. Please try again from another network.`,o.disabled=!1}},r.querySelector(`textarea`).focus()}function d(t,n){let r=``;try{r=new URL(self.origin).hostname}catch{}return[`blocked: ${t}`,`site: ${r||`unknown`}${e?` (jsDelivr mirror)`:``}`,`time: ${new Date().toISOString()}`,`agent: ${navigator.userAgent}`,n&&`error: ${n.slice(0,300)}`].filter(Boolean).join(`
`)}async function f(e,t,n){let a=new URLSearchParams({[i.message]:e,[i.contact]:t,[i.details]:n});await fetch(r,{method:`POST`,mode:`no-cors`,body:a,credentials:`omit`,signal:AbortSignal.timeout(15e3)})}export{s as blockedPart,u as showNetworkBlocked};