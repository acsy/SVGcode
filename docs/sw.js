if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const f={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return f;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-a59a8da5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/colorworker.6b60ebaa.js",revision:"c1582d4548b084d9530de0c7f3d86aa0"},{url:"assets/de.58feef74.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/directory-open.3e65b783.js",revision:"982f22e64de59daf2e3a8507b4f82fc5"},{url:"assets/directory-open.50884122.js",revision:"ff4fc4b5676c121225f74a153b4a3071"},{url:"assets/en-US.d8d32229.js",revision:"77ffe4733cacd4b7d0bf6aa865f4ea77"},{url:"assets/file-open.0c34edcf.js",revision:"97f00860044f1d47c08b58971febca3c"},{url:"assets/file-open.73377f9f.js",revision:"111a4bbca60275a76e86ba82d0c4b573"},{url:"assets/file-save.1c3d3b86.js",revision:"38924faf7e0fc59a92cf205db37a8108"},{url:"assets/file-save.e8805cf5.js",revision:"83283e9f805d0d595d8edc59f475f419"},{url:"assets/filehandling.a7b7ad84.js",revision:"fae031ed86c7ea50abbfb6fe8d4d0903"},{url:"assets/index.686e4cbb.css",revision:"6501411d3cd74e1ac0ee005f15bf7b3a"},{url:"assets/index.df7defc1.js",revision:"2d382d2c145aa256420a43442f215c15"},{url:"assets/monochromeworker.a07b995d.js",revision:"6fdb1de9bf1460e1d8e0b3f681761f74"},{url:"assets/svgoworker.b2e746cf.js",revision:"69b11eec461cd6d2c9fd76d597e12526"},{url:"assets/vendor.e3820820.js",revision:"afa03dd295991fb8f61bf12107345a4d"},{url:"index.html",revision:"607ec9cabc8d70dad61e14177b1915e3"},{url:"./favicon.svg",revision:"97e6ab4d1284cb42c4a130684ca805a0"},{url:"./favicon.png",revision:"2e55ffb100a97caa1372b725a7752fac"},{url:"manifest.webmanifest",revision:"bbf354ad85499620f888fce22072a053"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
