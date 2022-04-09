(function(){"use strict";var e={6519:function(e,t,r){var n=r(9242),a=r(3396);const o={id:"app",class:"bg-cover bg-repeat bg-center bg-origin-border bg-clip-border bg-[url('../images/bg-dots.png')] font-body"};function i(e,t,r,n,i,s){const l=(0,a.up)("HeaderComponent"),c=(0,a.up)("HeroComponent"),u=(0,a.up)("AboutComponent"),d=(0,a.up)("ProjectsComponent"),p=(0,a.up)("ContactComponent"),m=(0,a.up)("FooterComponent");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(l),(0,a.Wm)(c),(0,a.Wm)(u),(0,a.Wm)(d),(0,a.Wm)(p),(0,a.Wm)(m)])}var s=r(4427);const l={class:"w-full mx-auto py-9 px-2 sm:w-3/5"},c=(0,a.uE)('<div class="flex flex-row"><div class="basis-1/2"><a href="/" alt="IR4 logo"><img src="'+s+'" class="w-12"></a></div><div class="basis-1/2 text-right"><a href="#contact-us" type="button" class="text-primary hover:text-primary border border-gray-200 hover:bg-transparent hover:border-primary focus:ring-4 focus:ring-purple-300 font-light rounded-full text-sm px-5 py-2.5 text-center font-heading text-upperase"> Contact Us </a></div></div>',1),u=[c];function d(e,t,r,n,o,i){return(0,a.wg)(),(0,a.iD)("header",l,u)}var p={name:"HeaderComponent"},m=r(89);const g=(0,m.Z)(p,[["render",d]]);var f=g;const h={class:"w-full mx-auto py-12 px-2 sm:w-3/5 text-center"},b=(0,a._)("h5",{class:"text-base mb-8 mt-12 uppercase text-primary"}," Building Web3 Community owned protocols ",-1),w=(0,a._)("h2",{class:"text-7xl mb-9 font-sora text-dark-navy"}," Technology, Simplified. ",-1),y=(0,a._)("p",{class:"text-lg mb-10 font-base text-light-navy"}," Distributed community owned protocols can now be built to be secure, reliable, resilient and fast with instant finality. ",-1),v={href:"#projects",class:"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 rounded-full px-9 py-3.5 text-center uppercase font-heading text-xl font-light my-5"},x=(0,a.Uk)(" Our Work ");function k(e,t,r,n,o,i){const s=(0,a.up)("ArrowNarrowRightIcon");return(0,a.wg)(),(0,a.iD)("section",h,[b,w,y,(0,a._)("a",v,[x,(0,a.Wm)(s,{class:"w-5 inline mb-1 ml-3"})])])}var _=r(652),C={name:"HeroComponent",components:{ArrowNarrowRightIcon:_.Z}};const j=(0,m.Z)(C,[["render",k]]);var I=j,E=r(7139),D=r(1648);const S={class:"w-full mx-auto py-10 mt-8 px-2 sm:w-3/5"},Z=(0,a.uE)('<div class="flex flex-wrap"><div class="sm:w-2/3 w-full"><hr class="w-10 h-6 mb-6 bg-primary"><h2 class="text-heading text-5xl text-dark-navy font-dark mb-6"> About Us </h2><p class="text-light-navy"> We leverage emerging technology to build bespoke protocols. Thanks to innovations in distributed computing, decentralised and leaderless virtual machines can now rival the power of centralised leadered services run in large data centres. User owned protocols with the right incentive models can even provide far greater availability and redundancy levels that centralised services. </p></div><div class="sm:w-1/3 w-full"><img src="'+D+'" class="object-contain w-56 sm:ml-auto mx-auto mt-8"></div></div>',1),O={class:"flex flex-wrap pt-12"},A={class:"text-dark-navy text-xl font-heading mt-6 font-light"},R={class:"text-light-navy text-sm mt-3"};function W(e,t,r,n,o,i){const s=(0,a.up)("ChartSquareBarIcon"),l=(0,a.up)("ChipIcon"),c=(0,a.up)("CreditCardIcon"),u=(0,a.up)("EyeOffIcon"),d=(0,a.up)("HandIcon"),p=(0,a.up)("LibraryIcon");return(0,a.wg)(),(0,a.iD)("section",S,[Z,(0,a._)("div",O,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.projects,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"sm:w-1/3 w-full mb-12 mt-6 pr-5",key:e.id},["chart"==e.type?((0,a.wg)(),(0,a.j4)(s,{key:0,class:"bg-primary text-white w-10 p-1 rounded-full"})):"chip"==e.type?((0,a.wg)(),(0,a.j4)(l,{key:1,class:"bg-primary text-white w-10 p-1 rounded-full"})):"credit"==e.type?((0,a.wg)(),(0,a.j4)(c,{key:2,class:"bg-primary text-white w-10 p-1 rounded-full"})):"eye"==e.type?((0,a.wg)(),(0,a.j4)(u,{key:3,class:"bg-primary text-white w-10 p-1 rounded-full"})):"hand"==e.type?((0,a.wg)(),(0,a.j4)(d,{key:4,class:"bg-primary text-white w-10 p-1 rounded-full"})):((0,a.wg)(),(0,a.j4)(p,{key:5,class:"bg-primary text-white w-10 p-1 rounded-full"})),(0,a._)("h4",A,(0,E.zw)(e.title),1),(0,a._)("p",R,(0,E.zw)(e.blurb),1)])))),128))])])}var H=r(8775),q=r(9962),N=r(9144),F=r(6456),P=r(2638),T=r(2012),U={name:"AboutComponent",components:{ChartSquareBarIcon:H.Z,ChipIcon:q.Z,CreditCardIcon:N.Z,EyeOffIcon:F.Z,HandIcon:P.Z,LibraryIcon:T.Z},data:function(){return{projects:[{id:1,title:"Infinite Replication",type:"chart",blurb:"Scaling up and down to thousands or tens of thousands of nodes without the need for cluster rebalancing or sharding"},{id:2,title:"Highly Available",type:"chip",blurb:"Not bound by just where you can source data centres, open participation allows truly global service infrastructure"},{id:3,title:"Quiescence",type:"credit",blurb:"Our protocols are Green. They only work when you have work to do"},{id:5,title:"Leaderless",type:"eye",blurb:"Don't stop work if your leader node stops responding. Leaderless protocols allow you to always generate work when it is required"},{id:4,title:"Decentralised",type:"hand",blurb:"Reliance on centralisation adds a maintaince burden. Decentralised services take on a life of their own and can become self-healing."},{id:6,title:"Auditability",type:"library",blurb:"Be reassured that your data is correct and auditable through its entire history"}]}}};const z=(0,m.Z)(U,[["render",W]]);var B=z,G=r(7441);const L={class:"w-full mx-auto py-10 mt-3 px-2 sm:w-3/5",id:"projects"},Y=(0,a._)("div",{class:"w-full"},[(0,a._)("hr",{class:"w-10 h-6 mb-6 bg-primary"}),(0,a._)("h2",{class:"text-heading text-5xl text-dark-navy font-dark mb-6"}," Projects ")],-1),$={class:"flex flex-wrap mt-10"},M={class:"rounded-lg shadow-lg bg-white"},J=(0,a._)("a",{href:"#",target:"_blank"},[(0,a._)("img",{class:"rounded-t-lg",src:G,alt:""})],-1),K={class:"p-6"},Q={class:"text-dark-navy text-xl text-heading font-dark mb-2"},V={class:"text-light-navy text-sm mb-4"},X={class:"text-center w-full py-5"},ee=["href"],te=(0,a.Uk)(" View project ");function re(e,t,r,n,o,i){const s=(0,a.up)("ArrowNarrowRightIcon");return(0,a.wg)(),(0,a.iD)("section",L,[Y,(0,a._)("div",$,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.projects,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"basis-full sm:basis-1/3 px-1.5 mb-6",key:e.name},[(0,a._)("div",M,[J,(0,a._)("div",K,[(0,a._)("h5",Q,(0,E.zw)(e.name),1),(0,a._)("p",V,(0,E.zw)(e.taglink),1),(0,a._)("div",X,[(0,a._)("a",{href:e.link,class:"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 rounded-full px-4 py-3 text-center uppercase font-heading text-sm font-light"},[te,(0,a.Wm)(s,{class:"w-5 inline mb-0.5 ml-3"})],8,ee)])])])])))),128))])])}var ne={name:"ProjectsComponent",components:{ArrowNarrowRightIcon:_.Z},data(){return{projects:[{name:"Jurassic Jiu-jitsu",taglink:"NFT Tokenised game with beautiful art and fun mechanics",link:"https://raptor.farm"}]}}};const ae=(0,m.Z)(ne,[["render",re]]);var oe=ae,ie=r(7751),se=r(6002);const le=(0,a._)("hr",{class:"w-10 h-6 mt-5 mb-12 bg-primary mx-auto"},null,-1),ce={class:"w-full mx-auto py-10 mt-3 px-2 sm:w-3/5 bg-purple-50 rounded-lg p-10",id:"contact-us"},ue={class:"flex flex-wrap p-8"},de=(0,a.uE)('<div class="basis-full sm:basis-1/2 p-3"><h2 class="text-heading text-5xl text-dark-navy font-dark mb-6">Contact Us</h2><p class="text-base text-light-navy">Drop us an email or find us through our social media.</p><div class="flex flex-row flex-wrap justify-start mt-6"><a href="https://twitter.com/IR4_Tech" class="w-10 p-2 bg-purple-200 rounded-full mr-3"><img src="'+ie+'" alt="IR4 Official Twitter account"></a><a href="https://github.com/ir4tech" class="w-10 p-2 bg-purple-200 rounded-full mr-3"><img src="'+se+'" alt="IR4 Official GitHub"></a></div></div>',1),pe={class:"basis-full sm:basis-1/2 p-3"},me={class:"block mb-3"},ge={ref:"sender_name",name:"from_name",type:"text",placeholder:"Name",class:"form-input w-full rounded-lg border-gray-200 bg-transparent text-dark-navy focus:border-purple-100 placeholder:text-light-navy placeholder:font-light",required:""},fe={class:"block mb-3"},he={ref:"sender_email",name:"reply_to",type:"email",placeholder:"Email",class:"form-input w-full rounded-lg border-gray-200 bg-transparent text-dark-navy focus:border-purple-100 placeholder:text-light-navy placeholder:font-light",required:""},be={class:"block mb-3"},we={ref:"message",name:"message",rows:"6",placeholder:"Describe your project...",class:"form-textarea w-full rounded-lg border-gray-200 bg-transparent text-dark-navy focus:border-purple-100 placeholder:text-light-navy placeholder:font-light",required:""},ye={class:"block text-center"},ve=["disabled"],xe=(0,a.Uk)(" Send"),ke={key:0},_e={key:1},Ce={key:2},je={key:0,class:"mt-6 p-4 rounded-lg bg-green-300 text-dark-navy font-heading"},Ie={key:1,class:"mt-6 p-4 rounded-lg bg-red-300 text-dark-navy font-heading"};function Ee(e,t,r,o,i,s){const l=(0,a.up)("ArrowNarrowRightIcon"),c=(0,a.up)("CogIcon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[le,(0,a._)("section",ce,[(0,a._)("div",ue,[de,(0,a._)("div",pe,[(0,a._)("form",{class:"mt-12",ref:"form",onSubmit:t[0]||(t[0]=(0,n.iM)(((...e)=>s.sendEmail&&s.sendEmail(...e)),["prevent"]))},[(0,a._)("label",me,[(0,a._)("input",ge,null,512)]),(0,a._)("label",fe,[(0,a._)("input",he,null,512)]),(0,a._)("label",be,[(0,a._)("textarea",we,null,512)]),(0,a._)("label",ye,[(0,a._)("button",{disabled:this.isSendingEmail,type:"submit",class:"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 rounded-full px-8 pb-2.5 pt-3 text-center uppercase font-heading text-sm font-light disabled:bg-gray-200 disabled:text-gray-300 disabled:hover:background-gray-200 disabled:from-transparent disabled:to-transparent"},[xe,this.isSendingEmail?((0,a.wg)(),(0,a.iD)("span",ke,"ing...")):(0,a.kq)("",!0),this.isSendingEmail?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("i",_e,[(0,a.Wm)(l,{class:"w-5 inline mb-0.5 ml-3"})])),this.isSendingEmail?((0,a.wg)(),(0,a.iD)("i",Ce,[(0,a.Wm)(c,{class:"w-5 inline mb-0.5 ml-3 animate-spin"})])):(0,a.kq)("",!0)],8,ve)]),this.hasEmailSucceeded?((0,a.wg)(),(0,a.iD)("div",je," Your email has been sent! ")):(0,a.kq)("",!0),this.hasEmailFailed?((0,a.wg)(),(0,a.iD)("div",Ie," Error sending your email. Please try again. ")):(0,a.kq)("",!0)],544)])])])],64)}var De=r(3745),Se=r(3079);const Ze="service_2678qpg",Oe="template_ebmk7jp",Ae="user_h8GNuDX8GRn1MWw0jp2S8";var Re={name:"ContactComponent",components:{ArrowNarrowRightIcon:_.Z,CogIcon:De.Z},data(){return{isSendingEmail:!1,hasEmailSucceeded:!1,hasEmailFailed:!1}},methods:{sendEmail(){let e=this.$refs.sender_name.value.trim(),t=this.$refs.sender_email.value.trim(),r=this.$refs.message.value.trim();e&&t&&r?(this.isSendingEmail=!0,Se.ZP.sendForm(Ze,Oe,this.$refs.form,Ae).then((e=>{console.log("success",e.text),this.hasEmailSucceeded=!0,this.isSendingEmail=!1})).catch((e=>{console.log("error",e),this.hasEmailFailed=!0,this.isSendingEmail=!1}))):alert("Plase provide valid inputs!")}}};const We=(0,m.Z)(Re,[["render",Ee]]);var He=We;const qe={class:"mt-12 pt-12 pb-6"},Ne=(0,a._)("hr",null,null,-1),Fe=(0,a._)("p",{class:"text-sm text-light-navy text-light text-center mt-6"},"© 2022 IR4. All rights reserved.",-1),Pe=[Ne,Fe];function Te(e,t,r,n,o,i){return(0,a.wg)(),(0,a.iD)("footer",qe,Pe)}var Ue={name:"FooterComponent"};const ze=(0,m.Z)(Ue,[["render",Te]]);var Be=ze,Ge={name:"App",components:{HeaderComponent:f,HeroComponent:I,AboutComponent:B,ProjectsComponent:oe,ContactComponent:He,FooterComponent:Be}};const Le=(0,m.Z)(Ge,[["render",i]]);var Ye=Le;(0,n.ri)(Ye).mount("#app")},6002:function(e,t,r){e.exports=r.p+"img/github.5009cda0.svg"},7751:function(e,t,r){e.exports=r.p+"img/twitter.c2e5ac74.svg"},1648:function(e,t,r){e.exports=r.p+"img/blockchain.122d7377.png"},4427:function(e,t,r){e.exports=r.p+"img/logo.9b58c560.png"},7441:function(e,t,r){e.exports=r.p+"img/raptr.344d0301.png"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,o){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],o=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var u=l(r)}for(t&&t(n);c<i.length;c++)o=i[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self["webpackChunkir4_website"]=self["webpackChunkir4_website"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(6519)}));n=r.O(n)})();
//# sourceMappingURL=app.e3a39f22.js.map