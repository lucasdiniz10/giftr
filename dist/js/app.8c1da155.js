(function(e){function n(n){for(var a,c,u=n[0],i=n[1],d=n[2],h=0,s=[];h<u.length;h++)c=u[h],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&s.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(n);while(s.length)s.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var u=t[c];0!==r[u]&&(a=!1)}a&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},r={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a38ac":"55faeaaa","chunk-2d0ba09d":"17ca1162","chunk-2d0d78d0":"738d9413","chunk-2d2100ba":"235bd9d5","chunk-2d21d885":"3e7e6213","chunk-2d2219f5":"8414ef1b","chunk-2d225bd5":"458cd598","chunk-77e37fec":"6ad539b2","chunk-7d6845d2":"42dd0831","chunk-008dcf3d":"11638650","chunk-2a223d28":"65c2e176","chunk-32a50e98":"c3826a1b","chunk-35148311":"d985ca2f","chunk-441ef5d6":"515a2544","chunk-4b549ed5":"d12471c4","chunk-56195857":"92988140","chunk-6fc7dc96":"86e8282d","chunk-73a54742":"83dfe5cb","chunk-9a0ace8c":"818f6a8c","chunk-ac45b622":"d76596ea","chunk-b597850c":"60818e3e","chunk-e9e720a4":"7d530de0"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-77e37fec":1,"chunk-7d6845d2":1,"chunk-008dcf3d":1,"chunk-2a223d28":1,"chunk-32a50e98":1,"chunk-35148311":1,"chunk-441ef5d6":1,"chunk-4b549ed5":1,"chunk-56195857":1,"chunk-6fc7dc96":1,"chunk-73a54742":1,"chunk-9a0ace8c":1,"chunk-ac45b622":1,"chunk-b597850c":1,"chunk-e9e720a4":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0a38ac":"31d6cfe0","chunk-2d0ba09d":"31d6cfe0","chunk-2d0d78d0":"31d6cfe0","chunk-2d2100ba":"31d6cfe0","chunk-2d21d885":"31d6cfe0","chunk-2d2219f5":"31d6cfe0","chunk-2d225bd5":"31d6cfe0","chunk-77e37fec":"7c702240","chunk-7d6845d2":"a31262b3","chunk-008dcf3d":"ce26defe","chunk-2a223d28":"fee9a2d6","chunk-32a50e98":"ed3644a7","chunk-35148311":"60cc069b","chunk-441ef5d6":"fe080769","chunk-4b549ed5":"48e5cab4","chunk-56195857":"01958555","chunk-6fc7dc96":"8abe9731","chunk-73a54742":"a42c92bb","chunk-9a0ace8c":"d8f1ae78","chunk-ac45b622":"4498f706","chunk-b597850c":"18c77869","chunk-e9e720a4":"f6df54de"}[e]+".css",r=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var d=o[u],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===a||h===r))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){d=s[u],h=d.getAttribute("data-href");if(h===a||h===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],l.parentNode.removeChild(l),t(o)},l.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=o);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=u(e);var s=new Error;d=function(n){h.onerror=h.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",s.name="ChunkLoadError",s.type=a,s.request=c,t[1](s)}r[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=n,d=d.slice();for(var s=0;s<d.length;s++)n(d[s]);var l=h;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("b3c3"),c=t.n(a);c.a},4360:function(e,n,t){"use strict";var a=t("2b0e"),c=t("2f62"),r=t("cd79"),o={auth:r["b"]};a["a"].use(c["a"]);n["a"]=new c["a"].Store({modules:o})},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-layout",{attrs:{view:"lHh Lpr lFf"}},[t("q-page-container",[t("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Quicksand:wght@400;700&display=swap",rel:"stylesheet"}})]),t("q-page-container",[t("router-view")],1)],1)},r=[],o={name:"LayoutDefault",data:function(){return{leftDrawerOpen:!1}}},u=o,i=(t("034f"),t("2877")),d=t("4d5a"),h=t("09e3"),s=t("93dc"),l=t.n(s),f=Object(i["a"])(u,c,r,!1,null,null,null),p=f.exports;l()(f,"components",{QLayout:d["a"],QPageContainer:h["a"]});var m=t("1dce"),k=t.n(m),b=t("4360"),v=(t("a4ac"),t("5c7d"),t("e54f"),t("b05d"));a["a"].use(v["a"],{config:{},plugins:{}});var g=t("8c4f"),y=(t("99af"),t("2909")),O=(t("d3b7"),[{name:"home",path:"/",component:function(){return Promise.all([t.e("chunk-7d6845d2"),t.e("chunk-6fc7dc96")]).then(t.bind(null,"5c28"))}}]),w=[{name:"about us",path:"/AboutUs",component:function(){return Promise.all([t.e("chunk-7d6845d2"),t.e("chunk-4b549ed5")]).then(t.bind(null,"183c"))}}],j=[{name:"acolhimento",path:"/acolhimento",component:function(){return t.e("chunk-2d2100ba").then(t.bind(null,"b5e6"))}}],P=[{name:"arte Cultura",path:"/arte-Cultura",component:function(){return t.e("chunk-2d0ba09d").then(t.bind(null,"3604"))}}],T=[{name:"direitosHumanos",path:"/direitos-humanos",component:function(){return t.e("chunk-2d225bd5").then(t.bind(null,"e64b"))}}],S=[{name:"educacao",path:"/educacao",component:function(){return t.e("chunk-2d0d78d0").then(t.bind(null,"76fa"))}}],A=[{name:"error404",path:"/error404",component:function(){return t.e("chunk-2d0a38ac").then(t.bind(null,"032e"))}}],x=[{name:"esporte",path:"/esporte",component:function(){return t.e("chunk-2d21d885").then(t.bind(null,"d267"))}}],E=[{name:"meioAmbiente",path:"/meio-ambiente",component:function(){return Promise.all([t.e("chunk-7d6845d2"),t.e("chunk-73a54742")]).then(t.bind(null,"bd35"))}}],C=[{name:"ongs",path:"/ongs",component:function(){return t.e("chunk-77e37fec").then(t.bind(null,"1e77"))}}],_=[{name:"protecaoAnimal",path:"/protecao-animal",component:function(){return t.e("chunk-2d2219f5").then(t.bind(null,"caab"))}}],L=[{name:"register",path:"/register",component:function(){return Promise.all([t.e("chunk-7d6845d2"),t.e("chunk-008dcf3d")]).then(t.bind(null,"61d1"))}}],Q=[{name:"saude",path:"/saude",component:function(){return Promise.all([t.e("chunk-7d6845d2"),t.e("chunk-ac45b622")]).then(t.bind(null,"9924"))}}],U=[{name:"user",path:"/user",component:function(){return Promise.all([t.e("chunk-7d6845d2"),t.e("chunk-2a223d28")]).then(t.bind(null,"e36e"))}}],B=[{name:"userHistoric",path:"/user/historic",component:function(){return Promise.all([t.e("chunk-7d6845d2"),t.e("chunk-e9e720a4")]).then(t.bind(null,"fe6a"))}}],H=[{name:"userTotal",path:"/user/total",component:function(){return Promise.all([t.e("chunk-7d6845d2"),t.e("chunk-9a0ace8c")]).then(t.bind(null,"58f7"))}}],I=t("cd79"),N=[{name:"emailValidation",path:"/password-recovery/email-validation",component:function(){return Promise.all([t.e("chunk-7d6845d2"),t.e("chunk-56195857")]).then(t.bind(null,"4154"))}}],q=[{name:"newPassword",path:"/password-recovery/new-password",component:function(){return Promise.all([t.e("chunk-7d6845d2"),t.e("chunk-b597850c")]).then(t.bind(null,"5f4e"))}}],D=[{name:"verificationCode",path:"/password-recovery/verification-code",component:function(){return Promise.all([t.e("chunk-7d6845d2"),t.e("chunk-35148311")]).then(t.bind(null,"9d27"))}}],M=[{name:"userPersonUpdate",path:"/user/person-update",component:function(){return Promise.all([t.e("chunk-7d6845d2"),t.e("chunk-441ef5d6")]).then(t.bind(null,"82e8"))}}],F=[].concat(Object(y["a"])(O),Object(y["a"])(w),Object(y["a"])(j),Object(y["a"])(P),Object(y["a"])(T),Object(y["a"])(S),Object(y["a"])(A),Object(y["a"])(x),Object(y["a"])(E),Object(y["a"])(C),Object(y["a"])(_),Object(y["a"])(L),Object(y["a"])(Q),Object(y["a"])(U),Object(y["a"])(B),Object(y["a"])(H),Object(y["a"])(M),Object(y["a"])(I["a"]),Object(y["a"])(N),Object(y["a"])(q),Object(y["a"])(D)),R=(t("b0c0"),t("96cf"),t("1da1")),$=function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(n,t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(document.title="".concat(n.name),"user"!=n.name||b["a"].getters["auth/hasToken"]){e.next=11;break}return e.prev=2,e.next=5,b["a"].dispatch("auth/ActionCheckToken");case 5:a({name:n.name}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),a({name:"login"});case 11:if(a(),"userTotal"!=n.name||b["a"].getters["auth/hasToken"]){e.next=22;break}return e.prev=13,e.next=16,b["a"].dispatch("auth/ActionCheckToken");case 16:a({name:n.name}),e.next=22;break;case 19:e.prev=19,e.t1=e["catch"](13),a({name:"login"});case 22:if(a(),"userHistoric"!=n.name||b["a"].getters["auth/hasToken"]){e.next=33;break}return e.prev=24,e.next=27,b["a"].dispatch("auth/ActionCheckToken");case 27:a({name:n.name}),e.next=33;break;case 30:e.prev=30,e.t2=e["catch"](24),a({name:"login"});case 33:case"end":return e.stop()}}),e,null,[[2,8],[13,19],[24,30]])})));return function(n,t,a){return e.apply(this,arguments)}}();a["a"].use(g["a"]);var J=new g["a"]({routes:F});J.beforeEach($);var K=J,z=t("068f"),V=t("65c6"),G=t("6ac5"),W=t("27f9"),X=t("0378"),Y=t("f20b"),Z=t("9c40"),ee=t("f13c");a["a"].use(ee),a["a"].use(v["a"],{components:{QImg:z["a"],QToolbar:V["a"],QToolbarTitle:G["a"],QInput:W["a"],QForm:X["a"],QBtnDropdown:Y["a"],QBtn:Z["a"]}}),a["a"].use(k.a),a["a"].config.productionTip=!1,new a["a"]({store:b["a"],render:function(e){return e(p)},router:K}).$mount("#app"),a["a"].prototype.$eventBus=new a["a"]},a4ac:function(e,n,t){},b3c3:function(e,n,t){},cd79:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return j}));var a={};t.r(a),t.d(a,"ActionCheckToken",(function(){return b})),t.d(a,"ActionLoadSession",(function(){return v})),t.d(a,"ActionSetUser",(function(){return g})),t.d(a,"ActionSetToken",(function(){return y})),t.d(a,"ActionSingOut",(function(){return O}));var c={};t.r(c),t.d(c,"hasToken",(function(){return w}));t("d3b7");var r,o=[{name:"login",path:"/login",component:function(){return Promise.all([t.e("chunk-7d6845d2"),t.e("chunk-32a50e98")]).then(t.bind(null,"3551"))}}],u={user:{},token:""},i=t("ade3"),d="AUTH/SET_USER",h="AUTH/SET_TOKEN",s=(r={},Object(i["a"])(r,d,(function(e,n){e.user=n})),Object(i["a"])(r,h,(function(e,n){e.token=n})),r),l=function(){return localStorage.getItem("token")},f=function(){return localStorage.removeItem("token")},p=function(e){return localStorage.setItem("token",e)},m=t("bc3a"),k=t.n(m),b=function(e){var n=e.dispatch,t=e.state;if(t.token)return Promise.resolve(t.token);var a=l();return a?(n("ActionSetToken",a),n("ActionLoadSession",a)):Promise.reject(new Error("token invalido"))},v=function(e,n){var t=e.dispatch;return new Promise((function(e,a){try{var c=n,r="Bearer "+c;k.a.get("https://giftrback.herokuapp.com/loadSession",{headers:{authorization:r}}).then((function(n){t("ActionSetUser",n.data.user),e()})).catch((function(e){console.log(e)}))}catch(o){t("ActionSingOut"),a(o)}}))},g=function(e,n){var t=e.commit;t(d,n)},y=function(e,n){var t=e.commit;p(n),t(h,n)},O=function(e){var n=e.dispatch;p(""),f(),n("ActionSetUser",{}),n("ActionSetToken","")},w=function(e){var n=e.token;return!!n},j={state:u,actions:a,getters:c,mutations:s,namespaced:!0}}});
//# sourceMappingURL=app.8c1da155.js.map