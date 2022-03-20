script      = document.createElement("script");
script.src  = chrome.runtime.getURL("inject.js");

console.log("--------------------------------------------------------------------------------------");
console.log("+++++ injector.js: INJECTOR LOADED ---------------------------------------------------");
console.log("--------------------------------------------------------------------------------------");

(document.head || document.documentElement).appendChild(script);