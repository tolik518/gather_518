script      = document.createElement("script");
script.src  = chrome.runtime.getURL("contentScript.js");

console.log("--------------------------------------------------------------------------------------");
console.log("+++++ inject.js: INJECT LOADED -------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------");

(document.head || document.documentElement).appendChild(script);

