(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{6812:function(e,t,n){Promise.resolve().then(n.bind(n,5791))},2143:function(e,t,n){"use strict";n.d(t,{BU:function(){return i},av:function(){return c},bN:function(){return o},dy:function(){return l},oG:function(){return u},oX:function(){return a}});let r=(0,n(9730).oM)({name:"user",initialState:{user:null,selectedPackages:[],totalAmount:0},reducers:{setUser:(e,t)=>{e.user=t.payload},clearUser:e=>{e.user=null},selectPackage:(e,t)=>{e.selectedPackages.push(t.payload),e.totalAmount+=t.payload.price},deselectPackage:(e,t)=>{let n=e.selectedPackages.find(e=>e._id===t.payload);n&&(e.totalAmount-=n.price,e.selectedPackages=e.selectedPackages.filter(e=>e._id!==t.payload))}}}),{setUser:c,clearUser:s,selectPackage:a,deselectPackage:i}=r.actions,l=e=>e.user.user,o=e=>e.user.selectedPackages,u=e=>e.user.totalAmount;t.ZP=r.reducer},5791:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(7437),c=n(2265),s=n(3046),a=n(3918),i=n(2826),l=n(8870),o=n(467),u=n(1351),d=n(3305),h=n(762),p=n(2143),f=n(6438);let g=async()=>{try{return(await (0,f.p)("/api/packages")).allPackages}catch(e){throw console.error("Error fetching package-selection:",e),Error("Error fetching package-selection")}};var k=n(4033),j=()=>{let e=(0,k.useRouter)(),t=(0,s.I0)();(0,s.v9)(p.dy);let n=(0,s.v9)(p.bN),f=(0,s.v9)(p.oG),[j,x]=(0,c.useState)([]);(0,c.useEffect)(()=>{(async()=>{try{let e=await g();x(e)}catch(e){console.error("Error fetching packages:",e)}})()},[]);let y=e=>{let r=j.find(t=>t._id===e);r&&(n.includes(r)?t((0,p.BU)(e)):t((0,p.oX)(r)))},m=()=>{console.log("Selected Packages:",n),e.push("/checkout")};return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.Z,{gutter:16,children:j.map(e=>(0,r.jsx)(i.Z,{className:"mb-3",span:8,children:(0,r.jsx)(l.Z,{bordered:!1,children:(0,r.jsxs)(a.Z,{gutter:16,children:[(0,r.jsx)(i.Z,{span:6,children:(0,r.jsx)("img",{src:e.imagePath,alt:"Package Image",width:120,height:"100%"})}),(0,r.jsxs)(i.Z,{span:18,children:[(0,r.jsxs)(a.Z,{gutter:16,align:"middle",children:[(0,r.jsx)(i.Z,{span:16,children:(0,r.jsx)(o.Z.Title,{level:4,style:{marginBottom:0},children:e.name})}),(0,r.jsx)(i.Z,{span:8,style:{textAlign:"right"},children:(0,r.jsxs)(o.Z.Text,{style:{fontSize:"1.2rem"},children:[e.price," ",e.currency]})})]}),(0,r.jsxs)(u.Z,{direction:"vertical",children:[(0,r.jsx)("p",{children:e.details.join(", ")}),(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,r.jsx)(d.Z,{checked:n.includes(e),onChange:()=>y(e._id),children:"Select Package"})})]})]})]})})},e._id))}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"16px"},children:[(0,r.jsxs)(o.Z,{children:["Se\xe7ilen Paket Tutarı: ",(0,r.jsxs)("b",{children:[f," TL"]})]}),(0,r.jsx)(h.ZP,{onClick:()=>m(),type:"primary",children:"Devam Et"})]})]})}},6438:function(e,t,n){"use strict";n.d(t,{p:function(){return c}});var r=n(9338);let c=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,r.bW)(),c={"Content-Type":"application/json"};n&&(c.Authorization="Bearer ".concat(n));let s={...t,headers:c},a=await fetch("".concat("https://caseapi-fe.paramtech.com.tr").concat(e),s);if(!a.ok)throw Error("Network response was not ok");return a.json()}},9338:function(e,t,n){"use strict";n.d(t,{bW:function(){return r},uB:function(){return c}});let r=()=>localStorage.getItem("authToken"),c=e=>{localStorage.setItem("authToken",e)}}},function(e){e.O(0,[697,579,890,851,971,938,744],function(){return e(e.s=6812)}),_N_E=e.O()}]);