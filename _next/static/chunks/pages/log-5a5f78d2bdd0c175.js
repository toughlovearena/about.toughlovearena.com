(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{4644:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/log",function(){return r(8753)}])},7487:function(n,e,r){"use strict";r.d(e,{s:function(){return o}});var s,a=r(5893),t=r(852),i=r.n(t),o=function(n){return(0,a.jsx)("div",{className:i().column,style:{maxWidth:"".concat(null!==(s=n.width)&&void 0!==s?s:800,"px")},children:n.children})}},6488:function(n,e,r){"use strict";r.d(e,{Z:function(){return j}});var s=r(5893),a=(r(7294),r(9008)),t=r.n(a),i=r(4570),o=r.n(i),c=r(7487),l=r(1664),h=r.n(l),v=r(55),u=r.n(v);function d(n){var e=n.currentHref,r=n.links;return(0,s.jsxs)("div",{className:u().container,children:[(0,s.jsx)("div",{className:u().spacer}),(0,s.jsxs)("nav",{className:u().nav,children:[(0,s.jsx)("div",{className:u().navLeft,children:(0,s.jsx)(h(),{href:"/",children:(0,s.jsx)("img",{src:"/logo_v01.png"})})}),(0,s.jsxs)("div",{className:u().navRight,children:[r.map((function(n,r){return(0,s.jsx)(h(),{href:n.href,children:(0,s.jsx)("div",{className:u().navLink,children:e===n.href?(0,s.jsx)("b",{children:n.label}):(0,s.jsx)("span",{children:n.label})})},r)})),(0,s.jsx)("a",{className:u().navAnchor,href:"https://toughlovearena.com",children:(0,s.jsx)("div",{className:u().navLink,children:"Play Now!"})})]})]})]})}var _=r(656),f=r.n(_);function x(n){var e=n.currentHref,r=n.links;return(0,s.jsxs)("nav",{className:f().container,children:[(0,s.jsx)("div",{className:f().navLogo,children:(0,s.jsx)(h(),{href:"/",children:(0,s.jsx)("img",{src:"/logo_v01.png"})})}),(0,s.jsx)("div",{className:f().navLinks,children:r.map((function(n,r){return(0,s.jsx)(h(),{href:n.href,children:(0,s.jsx)("div",{className:f().navLink,children:e===n.href?(0,s.jsx)("b",{children:n.label}):(0,s.jsx)("span",{children:n.label})})},r)}))})]})}var p=r(5299),j=function(n){var e=n.title,r=n.page,a=n.children;return(0,s.jsxs)("div",{children:[(0,s.jsxs)(t(),{children:[(0,s.jsx)("title",{children:e||(null===r||void 0===r?void 0:r.label)&&"".concat(r.label," | Tough Love Arena")||"Tough Love Arena"}),(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,s.jsx)("link",{rel:"stylesheet",href:"/styles.css"})]}),(0,s.jsxs)("header",{className:o().header,children:[(0,s.jsx)(d,{currentHref:null===r||void 0===r?void 0:r.href,links:p.k}),(0,s.jsx)(x,{currentHref:null===r||void 0===r?void 0:r.href,links:p.k})]}),(0,s.jsx)("section",{className:o().section,children:a}),(0,s.jsx)(c.s,{width:400,children:(0,s.jsx)("footer",{className:o().footer,children:"\xa9 2022 M. Paul Weeks & Amy Xu"})})]})}},5299:function(n,e,r){"use strict";r.d(e,{U:function(){return s},k:function(){return a}});var s={About:{href:"/",label:""},PatchNotes:{href:"/log",label:"Patch Notes"},Gallery:{href:"/gallery",label:"Gallery"},Press:{href:"/press",label:"Press"}},a=[s.PatchNotes,s.Gallery,s.Press]},8753:function(n,e,r){"use strict";r.r(e);var s=r(4051),a=r.n(s),t=r(5893),i=r(7294),o=r(3731),c=r(6488),l=r(8388),h=r(6218),v=r.n(h),u=r(5299);function d(n,e,r,s,a,t,i){try{var o=n[t](i),c=o.value}catch(l){return void r(l)}o.done?e(c):Promise.resolve(c).then(s,a)}function _(n){var e,r=n.log,s=r.v,a="0"===r.v.split(".").pop();return(0,t.jsxs)("div",{children:[(0,t.jsx)("a",{className:v().anchor,id:s}),(0,t.jsxs)("div",{className:v().version,children:[(0,t.jsx)("a",{href:"#"+r.v,className:a?v().minor:v().patch,children:r.v}),r.date&&(0,t.jsx)("span",{className:v().date,children:r.date})]}),(e=r.notes,(0,t.jsx)("ul",{children:e.map((function(n,e){return(0,t.jsx)("li",{children:(0,t.jsx)(o.Z,{children:n})},e)}))}))]})}e.default=function(){var n=(0,i.useState)(),e=n[0],r=n[1];return(0,i.useEffect)((function(){var n;(n=a().mark((function n(){var e,s,t,i,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,fetch("https://us-central1-fighter-api.cloudfunctions.net/webApi/api/v1/proxy/changelog.yaml");case 3:return e=n.sent,n.next=6,e.text();case 6:s=n.sent,t=l.ZP.parse(s),r(t),(i=window.location.hash)&&(o=i.slice(1),setTimeout((function(){var n;return null===(n=document.getElementById(o))||void 0===n?void 0:n.scrollIntoView()}),500));case 11:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(s,a){var t=n.apply(e,r);function i(n){d(t,s,a,i,o,"next",n)}function o(n){d(t,s,a,i,o,"throw",n)}i(void 0)}))})()}),[r]),(0,t.jsxs)(c.Z,{page:u.U.PatchNotes,children:[(0,t.jsx)("h1",{children:"Patch Notes"}),(0,t.jsx)("div",{className:v().log,children:e?e.versions.map((function(n){return(0,t.jsx)(_,{log:n},n.v)})):"loading..."})]})}},852:function(n){n.exports={column:"Column_column__hsgB_"}},4570:function(n){n.exports={header:"Layout_header__sF3Nx",section:"Layout_section__mlfzh",footer:"Layout_footer__MGyga"}},55:function(n){n.exports={container:"NavDesktop_container__HagvL",spacer:"NavDesktop_spacer__C6J_C",nav:"NavDesktop_nav__ygGvS",navRight:"NavDesktop_navRight__halBB",navLink:"NavDesktop_navLink__0BpUy",navAnchor:"NavDesktop_navAnchor__etWHQ"}},656:function(n){n.exports={container:"NavMobile_container__t_DcE",navLogo:"NavMobile_navLogo__Wehq0",navLinks:"NavMobile_navLinks__IXWpY",navLink:"NavMobile_navLink__xipGd",navAnchor:"NavMobile_navAnchor__plG91"}},6218:function(n){n.exports={log:"log_log__4vOdz",anchor:"log_anchor__svfkj",version:"log_version__k_uzd",minor:"log_minor__4NYiI",patch:"log_patch__qNNtn",date:"log_date__HIIJL",notes:"log_notes__2Xrg4"}}},function(n){n.O(0,[996,870,774,888,179],(function(){return e=4644,n(n.s=e);var e}));var e=n.O();_N_E=e}]);