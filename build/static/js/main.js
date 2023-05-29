!function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={1:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+"static/js/"+({}[e]||e)+"."+{3:"5ddbfccb"}[e]+".chunk.js"}(e);var s=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=this["webpackJsonpchrome-react-seo-extension"]=this["webpackJsonpchrome-react-seo-extension"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;o.push([74,2]),n()}({145:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(54),c=n.n(o),i=(n(79),n(11)),s=(n(80),n(55)),l=n(67),u=n(180),f=n(179),d=n(0);localStorage.clear();var b=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),b=Object(i.a)(c,2),p=b[0],j=b[1],m=Object(r.useState)([]),h=Object(i.a)(m,2),v=h[0],g=h[1],O=Object(r.useState)(localStorage.getItem("apiKey")||""),y=Object(i.a)(O,2),x=y[0],S=y[1],C=Object(r.useState)(),k=Object(i.a)(C,2),w=k[0],P=k[1],A=Object(r.useCallback)((function(){var e=new s.MemClient({apiAccessToken:x});P(e),localStorage.setItem("apiKey",x)}),[x]);a.a.useEffect((function(){localStorage.getItem("apiKey")&&A(),chrome.tabs&&chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.sendMessage(e[0].id||0,{type:"GET_DOM"},(function(e){var t;j(e.url),o((null===(t=localStorage.getItem(e.url))||void 0===t?void 0:t.slice(1,-1))||e.content)}))}))}),[A]);var M=/\B(?<!#)(#[a-zA-Z0-9_]+\b)/g;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"titlebar",children:[Object(d.jsx)("h1",{children:"Mem Chrome Extension"}),w&&Object(d.jsx)(u.a,{variant:"danger",onClick:function(){w&&w.createMem({content:n||""}),localStorage.setItem(p,JSON.stringify(n))},children:"Add to Mem"})]}),w?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"editor",children:Object(d.jsx)(l.a,{value:n,onChange:function(e){var t=Array.from(e.matchAll(M));o(e),g(t)},className:"markdown"})}),Object(d.jsx)("div",{className:"tags",children:null===v||void 0===v?void 0:v.map((function(e){var t=e[0],n=e[0].slice(1);return Object(d.jsx)(u.a,{size:"sm",href:"https://mem.ai/s?filter=%7B%22type%22%3A%22HasTag%22%2C%22tag%22%3A%22".concat(n.toLowerCase(),"%22%2C%22displayName%22%3A%22").concat(n,"%22%7D"),target:"_blank",children:t})}))})]}):Object(d.jsxs)("div",{className:"form",children:[Object(d.jsxs)("div",{className:"key",children:[Object(d.jsx)(f.a.Label,{children:"API Key"}),Object(d.jsx)(f.a.Control,{onChange:function(e){return S(e.target.value)}})]}),Object(d.jsx)(u.a,{onClick:A,className:"float-end",children:"Submit"})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,181)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};n(142);c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),p()},74:function(e,t,n){e.exports=n(145)},79:function(e,t,n){},80:function(e,t,n){}});
//# sourceMappingURL=main.js.map