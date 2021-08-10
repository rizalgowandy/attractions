import{S as t,i as e,s as n,a as s,c as a,b as $,d as o,e as r,f as c,g as p,n as l,H as f,j as m,k as i,m as d,O as g,V as u,t as h,o as x,p as k,I as w,q as y,h as v,r as b,u as E,v as D}from"./client.b3364dbf.js";import{L as T,H as B,P as j}from"./layout.54f7f4df.js";import{B as O}from"./button.1d2e48b8.js";import{B as C}from"./badge.b2732349.js";import{S}from"./showcase.d7c9e13b.js";import{C as A}from"./color-preview.762e0f59.js";import{S as N}from"./shadow-preview.3a8a4588.js";import{H}from"./h2.4a9b994d.js";import{H as R}from"./h3.25c309f3.js";import{T as P,a as z,b as F,c as M}from"./table.22ebd0e3.js";import"./classes.2453fa25.js";import"./label.76f885a8.js";import"./copyable-code.fe20e3e1.js";import"./popover.12ec098f.js";function W(t){let e,n,f,m;return{c(){e=s("svg"),n=s("path"),f=s("path"),this.h()},l(t){e=a(t,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var s=$(e);n=a(s,"path",{d:!0},1),$(n).forEach(o),f=a(s,"path",{d:!0},1),$(f).forEach(o),s.forEach(o),this.h()},h(){r(n,"d","M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"),r(f,"d","M13.73 21a2 2 0 0 1-3.46 0"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"width",t[0]),r(e,"height",t[0]),r(e,"fill","none"),r(e,"viewBox","0 0 24 24"),r(e,"stroke","currentColor"),r(e,"stroke-width",t[1]),r(e,"stroke-linecap","round"),r(e,"stroke-linejoin","round"),r(e,"class",m="feather feather-bell "+t[2])},m(t,s){c(t,e,s),p(e,n),p(e,f)},p(t,[n]){1&n&&r(e,"width",t[0]),1&n&&r(e,"height",t[0]),2&n&&r(e,"stroke-width",t[1]),4&n&&m!==(m="feather feather-bell "+t[2])&&r(e,"class",m)},i:l,o:l,d(t){t&&o(e)}}}function I(t,e,n){let{size:s="100%"}=e,{strokeWidth:a=2}=e,{class:$=""}=e;return"100%"!==s&&(s="x"===s.slice(-1)?s.slice(0,s.length-1)+"em":parseInt(s)+"px"),t.$$set=t=>{"size"in t&&n(0,s=t.size),"strokeWidth"in t&&n(1,a=t.strokeWidth),"class"in t&&n(2,$=t.class)},[s,a,$]}class V extends t{constructor(t){super(),e(this,t,I,W,n,{size:0,strokeWidth:1,class:2})}}function G(t){let e;return{c(){e=b("Badge")},l(t){e=D(t,"Badge")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Y(t){let e;return{c(){e=b("A distinctive colored circle to bring attention to an element.")},l(t){e=D(t,"A distinctive colored circle to bring attention to an element.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function L(t){let e;return{c(){e=b("used on some text")},l(t){e=D(t,"used on some text")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function U(t){let e,n;return e=new V({props:{size:"20",class:"icon"}}),{c(){m(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p:l,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function q(t){let e,n;return e=new C({props:{hidden:t[0],$$slots:{default:[U]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.hidden=t[0]),8&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function K(t){let e,n,s,l,f;return n=new C({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),l=new O({props:{round:!0,$$slots:{default:[q]},$$scope:{ctx:t}}}),l.$on("click",t[2]),{c(){e=v("div"),m(n.$$.fragment),s=y(),m(l.$$.fragment),this.h()},l(t){e=a(t,"DIV",{slot:!0,class:!0});var r=$(e);i(n.$$.fragment,r),s=E(r),i(l.$$.fragment,r),r.forEach(o),this.h()},h(){r(e,"slot","showcase"),r(e,"class","padded")},m(t,a){c(t,e,a),d(n,e,null),p(e,s),d(l,e,null),f=!0},p(t,e){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};9&e&&(a.$$scope={dirty:e,ctx:t}),l.$set(a)},i(t){f||(h(n.$$.fragment,t),h(l.$$.fragment,t),f=!0)},o(t){x(n.$$.fragment,t),x(l.$$.fragment,t),f=!1},d(t){t&&o(e),k(n),k(l)}}}function J(t){let e,n;return{c(){e=v("div"),n=v("pre"),this.h()},l(t){e=a(t,"DIV",{slot:!0});var s=$(e);n=a(s,"PRE",{class:!0}),$(n).forEach(o),s.forEach(o),this.h()},h(){r(n,"class","language-svelte"),r(e,"slot","source")},m(t,s){c(t,e,s),p(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> hidden <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span><span class="token punctuation">></span></span>used on some text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">round</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> hidden <span class="token operator">=</span> <span class="token operator">!</span>hidden<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>hidden<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BellIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span></code>'},p:l,d(t){t&&o(e)}}}function Q(t){let e;return{c(){e=b("Properties")},l(t){e=D(t,"Properties")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function X(t){let e;return{c(){e=b("Functional Properties")},l(t){e=D(t,"Functional Properties")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Z(t){let e;return{c(){e=b("Name")},l(t){e=D(t,"Name")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function _(t){let e;return{c(){e=b("Default")},l(t){e=D(t,"Default")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function tt(t){let e;return{c(){e=b("Type")},l(t){e=D(t,"Type")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function et(t){let e;return{c(){e=b("Description")},l(t){e=D(t,"Description")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function nt(t){let e,n,s,a,$,r,p,l;return e=new F({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),s=new F({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),p=new F({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=y(),m(s.$$.fragment),a=y(),m($.$$.fragment),r=y(),m(p.$$.fragment)},l(t){i(e.$$.fragment,t),n=E(t),i(s.$$.fragment,t),a=E(t),i($.$$.fragment,t),r=E(t),i(p.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),c(t,r,o),d(p,t,o),l=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),p.$set(c)},i(t){l||(h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),h(p.$$.fragment,t),l=!0)},o(t){x(e.$$.fragment,t),x(s.$$.fragment,t),x($.$$.fragment,t),x(p.$$.fragment,t),l=!1},d(t){k(e,t),t&&o(n),k(s,t),t&&o(a),k($,t),t&&o(r),k(p,t)}}}function st(t){let e,n,s;return{c(){e=v("strong"),n=v("code"),s=b("hidden")},l(t){e=a(t,"STRONG",{});var r=$(e);n=a(r,"CODE",{});var c=$(n);s=D(c,"hidden"),c.forEach(o),r.forEach(o)},m(t,a){c(t,e,a),p(e,n),p(n,s)},d(t){t&&o(e)}}}function at(t){let e,n;return{c(){e=v("code"),n=b("false")},l(t){e=a(t,"CODE",{});var s=$(e);n=D(s,"false"),s.forEach(o)},m(t,s){c(t,e,s),p(e,n)},d(t){t&&o(e)}}}function $t(t){let e,n;return{c(){e=v("code"),n=b("boolean")},l(t){e=a(t,"CODE",{});var s=$(e);n=D(s,"boolean"),s.forEach(o)},m(t,s){c(t,e,s),p(e,n)},d(t){t&&o(e)}}}function ot(t){let e;return{c(){e=b("Whether the badge is shown or hidden. Useful for controlling its appearance without modifying the DOM tree.")},l(t){e=D(t,"Whether the badge is shown or hidden. Useful for controlling its appearance without modifying the DOM tree.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function rt(t){let e,n,s,a,$,r,p,l;return e=new M({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),p=new M({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=y(),m(s.$$.fragment),a=y(),m($.$$.fragment),r=y(),m(p.$$.fragment)},l(t){i(e.$$.fragment,t),n=E(t),i(s.$$.fragment,t),a=E(t),i($.$$.fragment,t),r=E(t),i(p.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),c(t,r,o),d(p,t,o),l=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),p.$set(c)},i(t){l||(h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),h(p.$$.fragment,t),l=!0)},o(t){x(e.$$.fragment,t),x(s.$$.fragment,t),x($.$$.fragment,t),x(p.$$.fragment,t),l=!1},d(t){k(e,t),t&&o(n),k(s,t),t&&o(a),k($,t),t&&o(r),k(p,t)}}}function ct(t){let e,n,s,r,p,l;return n=new z({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),p=new z({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c(){e=v("thead"),m(n.$$.fragment),s=y(),r=v("tbody"),m(p.$$.fragment)},l(t){e=a(t,"THEAD",{});var c=$(e);i(n.$$.fragment,c),c.forEach(o),s=E(t),r=a(t,"TBODY",{});var l=$(r);i(p.$$.fragment,l),l.forEach(o)},m(t,a){c(t,e,a),d(n,e,null),c(t,s,a),c(t,r,a),d(p,r,null),l=!0},p(t,e){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),p.$set(a)},i(t){l||(h(n.$$.fragment,t),h(p.$$.fragment,t),l=!0)},o(t){x(n.$$.fragment,t),x(p.$$.fragment,t),l=!1},d(t){t&&o(e),k(n),t&&o(s),t&&o(r),k(p)}}}function pt(t){let e;return{c(){e=b("Class Properties")},l(t){e=D(t,"Class Properties")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function lt(t){let e,n,s,r,l,f,m;return{c(){e=b("All "),n=v("code"),s=b("<Badge>"),r=b(" components use the "),l=v("code"),f=b(".badge"),m=b(" class.")},l(t){e=D(t,"All "),n=a(t,"CODE",{});var c=$(n);s=D(c,"<Badge>"),c.forEach(o),r=D(t," components use the "),l=a(t,"CODE",{});var p=$(l);f=D(p,".badge"),p.forEach(o),m=D(t," class.")},m(t,a){c(t,e,a),c(t,n,a),p(n,s),c(t,r,a),c(t,l,a),p(l,f),c(t,m,a)},d(t){t&&o(e),t&&o(n),t&&o(r),t&&o(l),t&&o(m)}}}function ft(t){let e;return{c(){e=b("Falsy values passed to classes will be disregarded.")},l(t){e=D(t,"Falsy values passed to classes will be disregarded.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function mt(t){let e;return{c(){e=b("Name")},l(t){e=D(t,"Name")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function it(t){let e;return{c(){e=b("Default")},l(t){e=D(t,"Default")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function dt(t){let e;return{c(){e=b("Type")},l(t){e=D(t,"Type")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function gt(t){let e;return{c(){e=b("Description")},l(t){e=D(t,"Description")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function ut(t){let e,n,s,a,$,r,p,l;return e=new F({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),s=new F({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),p=new F({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=y(),m(s.$$.fragment),a=y(),m($.$$.fragment),r=y(),m(p.$$.fragment)},l(t){i(e.$$.fragment,t),n=E(t),i(s.$$.fragment,t),a=E(t),i($.$$.fragment,t),r=E(t),i(p.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),c(t,r,o),d(p,t,o),l=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),p.$set(c)},i(t){l||(h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),h(p.$$.fragment,t),l=!0)},o(t){x(e.$$.fragment,t),x(s.$$.fragment,t),x($.$$.fragment,t),x(p.$$.fragment,t),l=!1},d(t){k(e,t),t&&o(n),k(s,t),t&&o(a),k($,t),t&&o(r),k(p,t)}}}function ht(t){let e,n,s;return{c(){e=v("strong"),n=v("code"),s=b("class")},l(t){e=a(t,"STRONG",{});var r=$(e);n=a(r,"CODE",{});var c=$(n);s=D(c,"class"),c.forEach(o),r.forEach(o)},m(t,a){c(t,e,a),p(e,n),p(n,s)},d(t){t&&o(e)}}}function xt(t){let e,n;return{c(){e=v("code"),n=b("null")},l(t){e=a(t,"CODE",{});var s=$(e);n=D(s,"null"),s.forEach(o)},m(t,s){c(t,e,s),p(e,n)},d(t){t&&o(e)}}}function kt(t){let e,n;return{c(){e=v("code"),n=b("string")},l(t){e=a(t,"CODE",{});var s=$(e);n=D(s,"string"),s.forEach(o)},m(t,s){c(t,e,s),p(e,n)},d(t){t&&o(e)}}}function wt(t){let e;return{c(){e=b("A class string to add to the handle.")},l(t){e=D(t,"A class string to add to the handle.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function yt(t){let e,n,s,a,$,r,p,l;return e=new M({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),p=new M({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=y(),m(s.$$.fragment),a=y(),m($.$$.fragment),r=y(),m(p.$$.fragment)},l(t){i(e.$$.fragment,t),n=E(t),i(s.$$.fragment,t),a=E(t),i($.$$.fragment,t),r=E(t),i(p.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),c(t,r,o),d(p,t,o),l=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),p.$set(c)},i(t){l||(h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),h(p.$$.fragment,t),l=!0)},o(t){x(e.$$.fragment,t),x(s.$$.fragment,t),x($.$$.fragment,t),x(p.$$.fragment,t),l=!1},d(t){k(e,t),t&&o(n),k(s,t),t&&o(a),k($,t),t&&o(r),k(p,t)}}}function vt(t){let e,n,s,r,p,l;return n=new z({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),p=new z({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){e=v("thead"),m(n.$$.fragment),s=y(),r=v("tbody"),m(p.$$.fragment)},l(t){e=a(t,"THEAD",{});var c=$(e);i(n.$$.fragment,c),c.forEach(o),s=E(t),r=a(t,"TBODY",{});var l=$(r);i(p.$$.fragment,l),l.forEach(o)},m(t,a){c(t,e,a),d(n,e,null),c(t,s,a),c(t,r,a),d(p,r,null),l=!0},p(t,e){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),p.$set(a)},i(t){l||(h(n.$$.fragment,t),h(p.$$.fragment,t),l=!0)},o(t){x(n.$$.fragment,t),x(p.$$.fragment,t),l=!1},d(t){t&&o(e),k(n),t&&o(s),t&&o(r),k(p)}}}function bt(t){let e;return{c(){e=b("Slots")},l(t){e=D(t,"Slots")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Et(t){let e;return{c(){e=b("Default slot")},l(t){e=D(t,"Default slot")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Dt(t){let e;return{c(){e=b("The element to attach a badge to.")},l(t){e=D(t,"The element to attach a badge to.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Tt(t){let e;return{c(){e=b("SCSS Variables")},l(t){e=D(t,"SCSS Variables")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Bt(t){let e;return{c(){e=b("Name")},l(t){e=D(t,"Name")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function jt(t){let e;return{c(){e=b("Description")},l(t){e=D(t,"Description")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Ot(t){let e;return{c(){e=b("Default")},l(t){e=D(t,"Default")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Ct(t){let e,n,s,a,$,r;return e=new F({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),s=new F({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=y(),m(s.$$.fragment),a=y(),m($.$$.fragment)},l(t){i(e.$$.fragment,t),n=E(t),i(s.$$.fragment,t),a=E(t),i($.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),r=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){r||(h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),r=!0)},o(t){x(e.$$.fragment,t),x(s.$$.fragment,t),x($.$$.fragment,t),r=!1},d(t){k(e,t),t&&o(n),k(s,t),t&&o(a),k($,t)}}}function St(t){let e,n,s;return{c(){e=v("strong"),n=v("code"),s=b("$shadow-raised")},l(t){e=a(t,"STRONG",{});var r=$(e);n=a(r,"CODE",{});var c=$(n);s=D(c,"$shadow-raised"),c.forEach(o),r.forEach(o)},m(t,a){c(t,e,a),p(e,n),p(n,s)},d(t){t&&o(e)}}}function At(t){let e;return{c(){e=b("The shadow of the badge.")},l(t){e=D(t,"The shadow of the badge.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function Nt(t){let e,n;return e=new N({props:{value:Yt}}),{c(){m(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p:l,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Ht(t){let e,n,s,a,$,r;return e=new M({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=y(),m(s.$$.fragment),a=y(),m($.$$.fragment)},l(t){i(e.$$.fragment,t),n=E(t),i(s.$$.fragment,t),a=E(t),i($.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),r=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){r||(h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),r=!0)},o(t){x(e.$$.fragment,t),x(s.$$.fragment,t),x($.$$.fragment,t),r=!1},d(t){k(e,t),t&&o(n),k(s,t),t&&o(a),k($,t)}}}function Rt(t){let e,n,s;return{c(){e=v("strong"),n=v("code"),s=b("$badge-default")},l(t){e=a(t,"STRONG",{});var r=$(e);n=a(r,"CODE",{});var c=$(n);s=D(c,"$badge-default"),c.forEach(o),r.forEach(o)},m(t,a){c(t,e,a),p(e,n),p(n,s)},d(t){t&&o(e)}}}function Pt(t){let e;return{c(){e=b("The default color of the badge.")},l(t){e=D(t,"The default color of the badge.")},m(t,n){c(t,e,n)},d(t){t&&o(e)}}}function zt(t){let e,n;return e=new A({props:{value:"#FF5757"}}),{c(){m(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p:l,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}function Ft(t){let e,n,s,a,$,r;return e=new M({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=y(),m(s.$$.fragment),a=y(),m($.$$.fragment)},l(t){i(e.$$.fragment,t),n=E(t),i(s.$$.fragment,t),a=E(t),i($.$$.fragment,t)},m(t,o){d(e,t,o),c(t,n,o),d(s,t,o),c(t,a,o),d($,t,o),r=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){r||(h(e.$$.fragment,t),h(s.$$.fragment,t),h($.$$.fragment,t),r=!0)},o(t){x(e.$$.fragment,t),x(s.$$.fragment,t),x($.$$.fragment,t),r=!1},d(t){k(e,t),t&&o(n),k(s,t),t&&o(a),k($,t)}}}function Mt(t){let e,n,s,r,l,f,g,u;return n=new z({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),l=new z({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),g=new z({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){e=v("thead"),m(n.$$.fragment),s=y(),r=v("tbody"),m(l.$$.fragment),f=y(),m(g.$$.fragment)},l(t){e=a(t,"THEAD",{});var c=$(e);i(n.$$.fragment,c),c.forEach(o),s=E(t),r=a(t,"TBODY",{});var p=$(r);i(l.$$.fragment,p),f=E(p),i(g.$$.fragment,p),p.forEach(o)},m(t,a){c(t,e,a),d(n,e,null),c(t,s,a),c(t,r,a),d(l,r,null),p(r,f),d(g,r,null),u=!0},p(t,e){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),l.$set(a);const $={};8&e&&($.$$scope={dirty:e,ctx:t}),g.$set($)},i(t){u||(h(n.$$.fragment,t),h(l.$$.fragment,t),h(g.$$.fragment,t),u=!0)},o(t){x(n.$$.fragment,t),x(l.$$.fragment,t),x(g.$$.fragment,t),u=!1},d(t){t&&o(e),k(n),t&&o(s),t&&o(r),k(l),k(g)}}}function Wt(t){let e,n,s,r,l,f,g,u,w,T,O,C,A,N,z,F,M,W,I,V,L,U,q,Z,_,tt,et,nt,st,at,$t,ot,rt;return e=new B({props:{$$slots:{default:[G]},$$scope:{ctx:t}}}),s=new j({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),l=new S({props:{$$slots:{source:[J],showcase:[K]},$$scope:{ctx:t}}}),g=new H({props:{id:"properties",$$slots:{default:[Q]},$$scope:{ctx:t}}}),w=new R({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),O=new P({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),A=new R({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),z=new j({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),M=new j({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),I=new P({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),Z=new H({props:{id:"slots",$$slots:{default:[bt]},$$scope:{ctx:t}}}),tt=new R({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),nt=new j({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),at=new H({props:{id:"scss-variables",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),ot=new P({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){m(e.$$.fragment),n=y(),m(s.$$.fragment),r=y(),m(l.$$.fragment),f=y(),m(g.$$.fragment),u=y(),m(w.$$.fragment),T=y(),m(O.$$.fragment),C=y(),m(A.$$.fragment),N=y(),m(z.$$.fragment),F=y(),m(M.$$.fragment),W=y(),m(I.$$.fragment),V=y(),L=v("mark"),U=b("Bonus"),q=b(": use the `.icon` class for the icons inside the badge to set `display: block` on them and avoid unexpected space at the bottom.\n"),m(Z.$$.fragment),_=y(),m(tt.$$.fragment),et=y(),m(nt.$$.fragment),st=y(),m(at.$$.fragment),$t=y(),m(ot.$$.fragment)},l(t){i(e.$$.fragment,t),n=E(t),i(s.$$.fragment,t),r=E(t),i(l.$$.fragment,t),f=E(t),i(g.$$.fragment,t),u=E(t),i(w.$$.fragment,t),T=E(t),i(O.$$.fragment,t),C=E(t),i(A.$$.fragment,t),N=E(t),i(z.$$.fragment,t),F=E(t),i(M.$$.fragment,t),W=E(t),i(I.$$.fragment,t),V=E(t),L=a(t,"MARK",{});var c=$(L);U=D(c,"Bonus"),c.forEach(o),q=D(t,": use the `.icon` class for the icons inside the badge to set `display: block` on them and avoid unexpected space at the bottom.\n"),i(Z.$$.fragment,t),_=E(t),i(tt.$$.fragment,t),et=E(t),i(nt.$$.fragment,t),st=E(t),i(at.$$.fragment,t),$t=E(t),i(ot.$$.fragment,t)},m(t,a){d(e,t,a),c(t,n,a),d(s,t,a),c(t,r,a),d(l,t,a),c(t,f,a),d(g,t,a),c(t,u,a),d(w,t,a),c(t,T,a),d(O,t,a),c(t,C,a),d(A,t,a),c(t,N,a),d(z,t,a),c(t,F,a),d(M,t,a),c(t,W,a),d(I,t,a),c(t,V,a),c(t,L,a),p(L,U),c(t,q,a),d(Z,t,a),c(t,_,a),d(tt,t,a),c(t,et,a),d(nt,t,a),c(t,st,a),d(at,t,a),c(t,$t,a),d(ot,t,a),rt=!0},p(t,n){const a={};8&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const $={};8&n&&($.$$scope={dirty:n,ctx:t}),s.$set($);const o={};9&n&&(o.$$scope={dirty:n,ctx:t}),l.$set(o);const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r);const c={};8&n&&(c.$$scope={dirty:n,ctx:t}),w.$set(c);const p={};8&n&&(p.$$scope={dirty:n,ctx:t}),O.$set(p);const f={};8&n&&(f.$$scope={dirty:n,ctx:t}),A.$set(f);const m={};8&n&&(m.$$scope={dirty:n,ctx:t}),z.$set(m);const i={};8&n&&(i.$$scope={dirty:n,ctx:t}),M.$set(i);const d={};8&n&&(d.$$scope={dirty:n,ctx:t}),I.$set(d);const u={};8&n&&(u.$$scope={dirty:n,ctx:t}),Z.$set(u);const h={};8&n&&(h.$$scope={dirty:n,ctx:t}),tt.$set(h);const x={};8&n&&(x.$$scope={dirty:n,ctx:t}),nt.$set(x);const k={};8&n&&(k.$$scope={dirty:n,ctx:t}),at.$set(k);const y={};8&n&&(y.$$scope={dirty:n,ctx:t}),ot.$set(y)},i(t){rt||(h(e.$$.fragment,t),h(s.$$.fragment,t),h(l.$$.fragment,t),h(g.$$.fragment,t),h(w.$$.fragment,t),h(O.$$.fragment,t),h(A.$$.fragment,t),h(z.$$.fragment,t),h(M.$$.fragment,t),h(I.$$.fragment,t),h(Z.$$.fragment,t),h(tt.$$.fragment,t),h(nt.$$.fragment,t),h(at.$$.fragment,t),h(ot.$$.fragment,t),rt=!0)},o(t){x(e.$$.fragment,t),x(s.$$.fragment,t),x(l.$$.fragment,t),x(g.$$.fragment,t),x(w.$$.fragment,t),x(O.$$.fragment,t),x(A.$$.fragment,t),x(z.$$.fragment,t),x(M.$$.fragment,t),x(I.$$.fragment,t),x(Z.$$.fragment,t),x(tt.$$.fragment,t),x(nt.$$.fragment,t),x(at.$$.fragment,t),x(ot.$$.fragment,t),rt=!1},d(t){k(e,t),t&&o(n),k(s,t),t&&o(r),k(l,t),t&&o(f),k(g,t),t&&o(u),k(w,t),t&&o(T),k(O,t),t&&o(C),k(A,t),t&&o(N),k(z,t),t&&o(F),k(M,t),t&&o(W),k(I,t),t&&o(V),t&&o(L),t&&o(q),k(Z,t),t&&o(_),k(tt,t),t&&o(et),k(nt,t),t&&o(st),k(at,t),t&&o($t),k(ot,t)}}}function It(t){let e,n;const s=[t[1],Vt];let a={$$slots:{default:[Wt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)a=f(a,s[t]);return e=new T({props:a}),{c(){m(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){d(e,t,s),n=!0},p(t,[n]){const a=2&n?g(s,[2&n&&u(t[1]),0&n&&u(Vt)]):{};9&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){k(e,t)}}}const Vt={name:"Badge",shadowRaised:"0 2px 4px -1px rgba(0, 0, 0, .2), 0 3px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);"},{name:Gt,shadowRaised:Yt}=Vt;function Lt(t,e,n){let s=!1;return t.$$set=t=>{n(1,e=f(f({},e),w(t)))},e=w(e),[s,e,()=>n(0,s=!s)]}export default class extends t{constructor(t){super(),e(this,t,Lt,It,n,{})}}export{Vt as metadata};
