(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},621:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(482),a=r(9108),n=r(2563),i=r.n(n),o=r(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1136)),"/Users/betuldemir/Documents/param-case/src/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,6511)),"/Users/betuldemir/Documents/param-case/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/betuldemir/Documents/param-case/src/app/page.tsx"],u="/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4318:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},7340:(e,t,r)=>{Promise.resolve().then(r.bind(r,3044)),Promise.resolve().then(r.bind(r,6690))},4529:(e,t,r)=>{Promise.resolve().then(r.bind(r,1532))},3044:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(2295);r(3729);var a=r(9289),n=r(7929),i=r(7385),o=r(6013),l=r(1224);let{Header:c}=a.default,d=()=>{let e=(0,o.v9)(l.dy);return s.jsx(c,{className:"header",children:s.jsx("div",{style:{float:"right",color:"white"},children:e?(0,s.jsxs)("p",{children:[s.jsx(i.Z,{}),e.email]}):s.jsx(n.ZP,{type:"primary",href:"/login",children:"Giriş Yap"})})})}},1224:(e,t,r)=>{"use strict";r.d(t,{BU:()=>o,ZP:()=>u,av:()=>a,bN:()=>c,dy:()=>l,oG:()=>d,oX:()=>i});let s=(0,r(448).oM)({name:"user",initialState:{user:null,selectedPackages:[],totalAmount:0},reducers:{setUser:(e,t)=>{e.user=t.payload},clearUser:e=>{e.user=null},selectPackage:(e,t)=>{e.selectedPackages.push(t.payload),e.totalAmount+=t.payload.price},deselectPackage:(e,t)=>{let r=e.selectedPackages.find(e=>e._id===t.payload);r&&(e.totalAmount-=r.price,e.selectedPackages=e.selectedPackages.filter(e=>e._id!==t.payload))}}}),{setUser:a,clearUser:n,selectPackage:i,deselectPackage:o}=s.actions,l=e=>e.user.user,c=e=>e.user.selectedPackages,d=e=>e.user.totalAmount,u=s.reducer},1532:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(2295);function a(){return s.jsx("main",{})}},6690:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(2295),a=r(6013),n=r(448),i=r(1224);let o=(0,n.xC)({reducer:{user:i.ZP}});function l({children:e}){return s.jsx(a.zt,{store:o,children:e})}function c({children:e}){return s.jsx(l,{children:e})}},6511:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(5036);r(2);var a=r(6843);let n=(0,a.createProxy)(String.raw`/Users/betuldemir/Documents/param-case/src/app/provider.tsx`),{__esModule:i,$$typeof:o}=n,l=n.default;r(5023);let c=(0,a.createProxy)(String.raw`/Users/betuldemir/Documents/param-case/src/app/components/common/AuthHeader.tsx`),{__esModule:d,$$typeof:u}=c,p=c.default;function m({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{children:(0,s.jsxs)(l,{children:[s.jsx(p,{}),s.jsx("div",{style:{margin:"30px 40px"},children:e})]})})})}},1136:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>i});let s=(0,r(6843).createProxy)(String.raw`/Users/betuldemir/Documents/param-case/src/app/page.tsx`),{__esModule:a,$$typeof:n}=s,i=s.default},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[50],()=>r(621));module.exports=s})();