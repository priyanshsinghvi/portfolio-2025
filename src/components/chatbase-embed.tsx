"use client";

import { useEffect } from "react";

const CHATBASE_AGENT_ID = "dR86fHlsKWsFRJG6s0Fe2";

/**
 * Loads the official Chatbase widget embed (paste from Dashboard → Deploy → Embed).
 * Must run in the browser after <body> exists — do not put this loader in <head>.
 */
export function ChatbaseEmbed() {
  useEffect(() => {
    if (document.getElementById("chatbase-embed-loader")) {
      return;
    }

    const loader = document.createElement("script");
    loader.id = "chatbase-embed-loader";
    loader.textContent = `
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="${CHATBASE_AGENT_ID}";script.setAttribute("domain","www.chatbase.co");document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
    `.trim();
    document.body.appendChild(loader);
  }, []);

  return null;
}
