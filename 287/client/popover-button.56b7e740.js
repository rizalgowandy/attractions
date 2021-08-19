import{S as t,i as e,s as n,I as $,j as s,k as a,m as o,R as r,Y as c,t as p,o as f,p as l,J as m,q as u,u as g,f as i,d,r as x,v as h,h as w,c as v,b as y,e as k,g as E,n as b}from"./client.941dfc86.js";import{L as D,H as T,P as O}from"./layout.eeb0d691.js";import{B as P}from"./button.ca8ecbea.js";import{P as C,a as j}from"./popover.1a88cc67.js";import{P as S}from"./popover-button.af3ce370.js";import{S as B}from"./showcase.bd717cc0.js";import{S as N}from"./shadow-preview.dd023ee2.js";import{R as A}from"./related-components.5a7ef636.js";import{H as R}from"./h2.5e9862b6.js";import{H}from"./h3.90f01afd.js";import{T as F,a as G,b as V,c as Y}from"./table.5c609d84.js";import"./classes.2453fa25.js";import"./label.6082aa1d.js";import"./copyable-code.f43c1a27.js";import"./card.dcb17a2f.js";function I(t){let e;return{c(){e=x("PopoverButton")},l(t){e=h(t,"PopoverButton")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function M(t){let e,n,$,s,a,o;return{c(){e=x("A button designed to be used as the "),n=w("a"),$=w("mark"),s=w("code"),a=x("Popover"),o=x(" content."),this.h()},l(t){e=h(t,"A button designed to be used as the "),n=v(t,"A",{href:!0});var r=y(n);$=v(r,"MARK",{});var c=y($);s=v(c,"CODE",{});var p=y(s);a=h(p,"Popover"),p.forEach(d),c.forEach(d),r.forEach(d),o=h(t," content."),this.h()},h(){k(n,"href","./docs/components/popover")},m(t,r){i(t,e,r),i(t,n,r),E(n,$),E($,s),E(s,a),i(t,o,r)},d(t){t&&d(e),t&&d(n),t&&d(o)}}}function L(t){let e;return{c(){e=x("hover or focus me")},l(t){e=h(t,"hover or focus me")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function U(t){let e,n;return e=new P({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function q(t){let e;return{c(){e=x("copy")},l(t){e=h(t,"copy")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function J(t){let e,n,$;return n=new S({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){e=w("div"),s(n.$$.fragment),this.h()},l(t){e=v(t,"DIV",{slot:!0});var $=y(e);a(n.$$.fragment,$),$.forEach(d),this.h()},h(){k(e,"slot","popover-content")},m(t,s){i(t,e,s),o(n,e,null),$=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($)},i(t){$||(p(n.$$.fragment,t),$=!0)},o(t){f(n.$$.fragment,t),$=!1},d(t){t&&d(e),l(n)}}}function K(t){let e,n,$;return n=new C({props:{position:j.BOTTOM,$$slots:{"popover-content":[J],default:[U]},$$scope:{ctx:t}}}),{c(){e=w("div"),s(n.$$.fragment),this.h()},l(t){e=v(t,"DIV",{slot:!0,class:!0});var $=y(e);a(n.$$.fragment,$),$.forEach(d),this.h()},h(){k(e,"slot","showcase"),k(e,"class","padded")},m(t,s){i(t,e,s),o(n,e,null),$=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($)},i(t){$||(p(n.$$.fragment,t),$=!0)},o(t){f(n.$$.fragment,t),$=!1},d(t){t&&d(e),l(n)}}}function z(t){let e,n;return{c(){e=w("div"),n=w("pre"),this.h()},l(t){e=v(t,"DIV",{slot:!0});var $=y(e);n=v($,"PRE",{class:!0}),y(n).forEach(d),$.forEach(d),this.h()},h(){k(n,"class","language-svelte"),k(e,"slot","source")},m(t,$){i(t,e,$),E(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PopoverPositions <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">\'attractions/popover\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popover</span> <span class="token attr-name">position=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>PopoverPositions<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>hover or focus me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>popover-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PopoverButton</span><span class="token punctuation">></span></span>copy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PopoverButton</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span></code>'},p:b,d(t){t&&d(e)}}}function Q(t){let e;return{c(){e=x("Properties")},l(t){e=h(t,"Properties")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function W(t){let e;return{c(){e=x("Functional Properties")},l(t){e=h(t,"Functional Properties")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function X(t){let e;return{c(){e=x("Name")},l(t){e=h(t,"Name")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function Z(t){let e;return{c(){e=x("Default")},l(t){e=h(t,"Default")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function _(t){let e;return{c(){e=x("Type")},l(t){e=h(t,"Type")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function tt(t){let e;return{c(){e=x("Description")},l(t){e=h(t,"Description")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function et(t){let e,n,$,r,c,m,x,h;return e=new V({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),$=new V({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),x=new V({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),r=u(),s(c.$$.fragment),m=u(),s(x.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),r=g(t),a(c.$$.fragment,t),m=g(t),a(x.$$.fragment,t)},m(t,s){o(e,t,s),i(t,n,s),o($,t,s),i(t,r,s),o(c,t,s),i(t,m,s),o(x,t,s),h=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),x.$set(r)},i(t){h||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),h=!1},d(t){l(e,t),t&&d(n),l($,t),t&&d(r),l(c,t),t&&d(m),l(x,t)}}}function nt(t){let e,n,$;return{c(){e=w("strong"),n=w("code"),$=x("...")},l(t){e=v(t,"STRONG",{});var s=y(e);n=v(s,"CODE",{});var a=y(n);$=h(a,"..."),a.forEach(d),s.forEach(d)},m(t,s){i(t,e,s),E(e,n),E(n,$)},d(t){t&&d(e)}}}function $t(t){let e,n;return{c(){e=w("code"),n=x("any")},l(t){e=v(t,"CODE",{});var $=y(e);n=h($,"any"),$.forEach(d)},m(t,$){i(t,e,$),E(e,n)},d(t){t&&d(e)}}}function st(t){let e,n,$,s;return{c(){e=x("Everything will be passed to the underlying "),n=w("code"),$=x("<button>"),s=x(" element.")},l(t){e=h(t,"Everything will be passed to the underlying "),n=v(t,"CODE",{});var a=y(n);$=h(a,"<button>"),a.forEach(d),s=h(t," element.")},m(t,a){i(t,e,a),i(t,n,a),E(n,$),i(t,s,a)},d(t){t&&d(e),t&&d(n),t&&d(s)}}}function at(t){let e,n,$,r,c,m,x,h;return e=new Y({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),$=new Y({}),c=new Y({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),x=new Y({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),r=u(),s(c.$$.fragment),m=u(),s(x.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),r=g(t),a(c.$$.fragment,t),m=g(t),a(x.$$.fragment,t)},m(t,s){o(e,t,s),i(t,n,s),o($,t,s),i(t,r,s),o(c,t,s),i(t,m,s),o(x,t,s),h=!0},p(t,n){const $={};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),c.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),x.$set(a)},i(t){h||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),h=!1},d(t){l(e,t),t&&d(n),l($,t),t&&d(r),l(c,t),t&&d(m),l(x,t)}}}function ot(t){let e,n,$,r,c,m;return n=new G({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){e=w("thead"),s(n.$$.fragment),$=u(),r=w("tbody"),s(c.$$.fragment)},l(t){e=v(t,"THEAD",{});var s=y(e);a(n.$$.fragment,s),s.forEach(d),$=g(t),r=v(t,"TBODY",{});var o=y(r);a(c.$$.fragment,o),o.forEach(d)},m(t,s){i(t,e,s),o(n,e,null),i(t,$,s),i(t,r,s),o(c,r,null),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){t&&d(e),l(n),t&&d($),t&&d(r),l(c)}}}function rt(t){let e;return{c(){e=x("Class Properties")},l(t){e=h(t,"Class Properties")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function ct(t){let e,n,$,s,a,o,r;return{c(){e=x("All "),n=w("code"),$=x("<PopoverButton>"),s=x(" components use the "),a=w("code"),o=x(".popover-button"),r=x(" class.")},l(t){e=h(t,"All "),n=v(t,"CODE",{});var c=y(n);$=h(c,"<PopoverButton>"),c.forEach(d),s=h(t," components use the "),a=v(t,"CODE",{});var p=y(a);o=h(p,".popover-button"),p.forEach(d),r=h(t," class.")},m(t,c){i(t,e,c),i(t,n,c),E(n,$),i(t,s,c),i(t,a,c),E(a,o),i(t,r,c)},d(t){t&&d(e),t&&d(n),t&&d(s),t&&d(a),t&&d(r)}}}function pt(t){let e;return{c(){e=x("Falsy values passed to classes will be disregarded.")},l(t){e=h(t,"Falsy values passed to classes will be disregarded.")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function ft(t){let e;return{c(){e=x("Name")},l(t){e=h(t,"Name")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function lt(t){let e;return{c(){e=x("Default")},l(t){e=h(t,"Default")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function mt(t){let e;return{c(){e=x("Type")},l(t){e=h(t,"Type")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function ut(t){let e;return{c(){e=x("Description")},l(t){e=h(t,"Description")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function gt(t){let e,n,$,r,c,m,x,h;return e=new V({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),$=new V({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),x=new V({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),r=u(),s(c.$$.fragment),m=u(),s(x.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),r=g(t),a(c.$$.fragment,t),m=g(t),a(x.$$.fragment,t)},m(t,s){o(e,t,s),i(t,n,s),o($,t,s),i(t,r,s),o(c,t,s),i(t,m,s),o(x,t,s),h=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),x.$set(r)},i(t){h||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),h=!1},d(t){l(e,t),t&&d(n),l($,t),t&&d(r),l(c,t),t&&d(m),l(x,t)}}}function it(t){let e,n,$;return{c(){e=w("strong"),n=w("code"),$=x("class")},l(t){e=v(t,"STRONG",{});var s=y(e);n=v(s,"CODE",{});var a=y(n);$=h(a,"class"),a.forEach(d),s.forEach(d)},m(t,s){i(t,e,s),E(e,n),E(n,$)},d(t){t&&d(e)}}}function dt(t){let e,n;return{c(){e=w("code"),n=x("null")},l(t){e=v(t,"CODE",{});var $=y(e);n=h($,"null"),$.forEach(d)},m(t,$){i(t,e,$),E(e,n)},d(t){t&&d(e)}}}function xt(t){let e,n;return{c(){e=w("code"),n=x("string")},l(t){e=v(t,"CODE",{});var $=y(e);n=h($,"string"),$.forEach(d)},m(t,$){i(t,e,$),E(e,n)},d(t){t&&d(e)}}}function ht(t){let e;return{c(){e=x("A class string to add to the component.")},l(t){e=h(t,"A class string to add to the component.")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function wt(t){let e,n,$,r,c,m,x,h;return e=new Y({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),$=new Y({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),x=new Y({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),r=u(),s(c.$$.fragment),m=u(),s(x.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),r=g(t),a(c.$$.fragment,t),m=g(t),a(x.$$.fragment,t)},m(t,s){o(e,t,s),i(t,n,s),o($,t,s),i(t,r,s),o(c,t,s),i(t,m,s),o(x,t,s),h=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),x.$set(r)},i(t){h||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),h=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),h=!1},d(t){l(e,t),t&&d(n),l($,t),t&&d(r),l(c,t),t&&d(m),l(x,t)}}}function vt(t){let e,n,$,r,c,m;return n=new G({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){e=w("thead"),s(n.$$.fragment),$=u(),r=w("tbody"),s(c.$$.fragment)},l(t){e=v(t,"THEAD",{});var s=y(e);a(n.$$.fragment,s),s.forEach(d),$=g(t),r=v(t,"TBODY",{});var o=y(r);a(c.$$.fragment,o),o.forEach(d)},m(t,s){i(t,e,s),o(n,e,null),i(t,$,s),i(t,r,s),o(c,r,null),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){t&&d(e),l(n),t&&d($),t&&d(r),l(c)}}}function yt(t){let e;return{c(){e=x("Events")},l(t){e=h(t,"Events")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function kt(t){let e;return{c(){e=x("Name")},l(t){e=h(t,"Name")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function Et(t){let e;return{c(){e=x("Event Detail")},l(t){e=h(t,"Event Detail")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function bt(t){let e;return{c(){e=x("Description")},l(t){e=h(t,"Description")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function Dt(t){let e,n,$,r,c,m;return e=new V({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),$=new V({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),r=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),r=g(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),i(t,n,s),o($,t,s),i(t,r,s),o(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&d(n),l($,t),t&&d(r),l(c,t)}}}function Tt(t){let e,n,$;return{c(){e=w("strong"),n=w("code"),$=x("click")},l(t){e=v(t,"STRONG",{});var s=y(e);n=v(s,"CODE",{});var a=y(n);$=h(a,"click"),a.forEach(d),s.forEach(d)},m(t,s){i(t,e,s),E(e,n),E(n,$)},d(t){t&&d(e)}}}function Ot(t){let e,n;return{c(){e=w("code"),n=x("{ nativeEvent }")},l(t){e=v(t,"CODE",{});var $=y(e);n=h($,"{ nativeEvent }"),$.forEach(d)},m(t,$){i(t,e,$),E(e,n)},d(t){t&&d(e)}}}function Pt(t){let e;return{c(){e=x("Fired when the button is clicked.")},l(t){e=h(t,"Fired when the button is clicked.")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function Ct(t){let e,n,$,r,c,m;return e=new Y({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),$=new Y({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),r=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),r=g(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),i(t,n,s),o($,t,s),i(t,r,s),o(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&d(n),l($,t),t&&d(r),l(c,t)}}}function jt(t){let e,n,$,r,c,m;return n=new G({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){e=w("thead"),s(n.$$.fragment),$=u(),r=w("tbody"),s(c.$$.fragment)},l(t){e=v(t,"THEAD",{});var s=y(e);a(n.$$.fragment,s),s.forEach(d),$=g(t),r=v(t,"TBODY",{});var o=y(r);a(c.$$.fragment,o),o.forEach(d)},m(t,s){i(t,e,s),o(n,e,null),i(t,$,s),i(t,r,s),o(c,r,null),m=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){m||(p(n.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){t&&d(e),l(n),t&&d($),t&&d(r),l(c)}}}function St(t){let e;return{c(){e=x("Slots")},l(t){e=h(t,"Slots")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function Bt(t){let e;return{c(){e=x("Default slot")},l(t){e=h(t,"Default slot")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function Nt(t){let e;return{c(){e=x("The content of the button.")},l(t){e=h(t,"The content of the button.")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function At(t){let e;return{c(){e=x("SCSS Variables")},l(t){e=h(t,"SCSS Variables")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function Rt(t){let e;return{c(){e=x("Name")},l(t){e=h(t,"Name")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function Ht(t){let e;return{c(){e=x("Description")},l(t){e=h(t,"Description")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function Ft(t){let e;return{c(){e=x("Default")},l(t){e=h(t,"Default")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function Gt(t){let e,n,$,r,c,m;return e=new V({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),$=new V({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),c=new V({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),r=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),r=g(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),i(t,n,s),o($,t,s),i(t,r,s),o(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&d(n),l($,t),t&&d(r),l(c,t)}}}function Vt(t){let e,n,$;return{c(){e=w("strong"),n=w("code"),$=x("$font")},l(t){e=v(t,"STRONG",{});var s=y(e);n=v(s,"CODE",{});var a=y(n);$=h(a,"$font"),a.forEach(d),s.forEach(d)},m(t,s){i(t,e,s),E(e,n),E(n,$)},d(t){t&&d(e)}}}function Yt(t){let e;return{c(){e=x("The font family used for the button.")},l(t){e=h(t,"The font family used for the button.")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function It(t){let e,n;return{c(){e=w("code"),n=x("'Ubuntu'")},l(t){e=v(t,"CODE",{});var $=y(e);n=h($,"'Ubuntu'"),$.forEach(d)},m(t,$){i(t,e,$),E(e,n)},d(t){t&&d(e)}}}function Mt(t){let e,n,$,r,c,m;return e=new Y({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),$=new Y({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),r=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),r=g(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),i(t,n,s),o($,t,s),i(t,r,s),o(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&d(n),l($,t),t&&d(r),l(c,t)}}}function Lt(t){let e,n,$;return{c(){e=w("strong"),n=w("code"),$=x("$shadow-raised")},l(t){e=v(t,"STRONG",{});var s=y(e);n=v(s,"CODE",{});var a=y(n);$=h(a,"$shadow-raised"),a.forEach(d),s.forEach(d)},m(t,s){i(t,e,s),E(e,n),E(n,$)},d(t){t&&d(e)}}}function Ut(t){let e;return{c(){e=x("The shadow of the button.")},l(t){e=h(t,"The shadow of the button.")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function qt(t){let e,n;return e=new N({props:{value:$e}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p:b,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function Jt(t){let e,n,$,r,c,m;return e=new Y({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),$=new Y({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),r=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),r=g(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),i(t,n,s),o($,t,s),i(t,r,s),o(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&d(n),l($,t),t&&d(r),l(c,t)}}}function Kt(t){let e,n,$;return{c(){e=w("strong"),n=w("code"),$=x("$bold-font-weight")},l(t){e=v(t,"STRONG",{});var s=y(e);n=v(s,"CODE",{});var a=y(n);$=h(a,"$bold-font-weight"),a.forEach(d),s.forEach(d)},m(t,s){i(t,e,s),E(e,n),E(n,$)},d(t){t&&d(e)}}}function zt(t){let e;return{c(){e=x("The bold font weight of the button.")},l(t){e=h(t,"The bold font weight of the button.")},m(t,n){i(t,e,n)},d(t){t&&d(e)}}}function Qt(t){let e,n;return{c(){e=w("code"),n=x("500")},l(t){e=v(t,"CODE",{});var $=y(e);n=h($,"500"),$.forEach(d)},m(t,$){i(t,e,$),E(e,n)},d(t){t&&d(e)}}}function Wt(t){let e,n,$,r,c,m;return e=new Y({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),$=new Y({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),c=new Y({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),r=u(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),r=g(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),i(t,n,s),o($,t,s),i(t,r,s),o(c,t,s),m=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){m||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),m=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),m=!1},d(t){l(e,t),t&&d(n),l($,t),t&&d(r),l(c,t)}}}function Xt(t){let e,n,$,r,c,m,x,h,k,b;return n=new G({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),x=new G({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),k=new G({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){e=w("thead"),s(n.$$.fragment),$=u(),r=w("tbody"),s(c.$$.fragment),m=u(),s(x.$$.fragment),h=u(),s(k.$$.fragment)},l(t){e=v(t,"THEAD",{});var s=y(e);a(n.$$.fragment,s),s.forEach(d),$=g(t),r=v(t,"TBODY",{});var o=y(r);a(c.$$.fragment,o),m=g(o),a(x.$$.fragment,o),h=g(o),a(k.$$.fragment,o),o.forEach(d)},m(t,s){i(t,e,s),o(n,e,null),i(t,$,s),i(t,r,s),o(c,r,null),E(r,m),o(x,r,null),E(r,h),o(k,r,null),b=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),x.$set(a);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),k.$set(o)},i(t){b||(p(n.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),p(k.$$.fragment,t),b=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),f(k.$$.fragment,t),b=!1},d(t){t&&d(e),l(n),t&&d($),t&&d(r),l(c),l(x),l(k)}}}function Zt(t){let e,n,$,r,c,m,x,h,w,v,y,k,E,b,D,P,C,j,S,N,G,V,Y,L,U,q,J,X,Z,_,tt,et,nt,$t,st,at;return e=new T({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),$=new O({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),c=new A({props:{components:ne}}),x=new B({props:{$$slots:{source:[z],showcase:[K]},$$scope:{ctx:t}}}),w=new R({props:{id:"properties",$$slots:{default:[Q]},$$scope:{ctx:t}}}),y=new H({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),E=new F({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),D=new H({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),C=new O({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),S=new O({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),G=new F({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),Y=new R({props:{id:"events",$$slots:{default:[yt]},$$scope:{ctx:t}}}),U=new F({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),J=new R({props:{id:"slots",$$slots:{default:[St]},$$scope:{ctx:t}}}),Z=new H({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),tt=new O({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),nt=new R({props:{id:"scss-variables",$$slots:{default:[At]},$$scope:{ctx:t}}}),st=new F({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=u(),s($.$$.fragment),r=u(),s(c.$$.fragment),m=u(),s(x.$$.fragment),h=u(),s(w.$$.fragment),v=u(),s(y.$$.fragment),k=u(),s(E.$$.fragment),b=u(),s(D.$$.fragment),P=u(),s(C.$$.fragment),j=u(),s(S.$$.fragment),N=u(),s(G.$$.fragment),V=u(),s(Y.$$.fragment),L=u(),s(U.$$.fragment),q=u(),s(J.$$.fragment),X=u(),s(Z.$$.fragment),_=u(),s(tt.$$.fragment),et=u(),s(nt.$$.fragment),$t=u(),s(st.$$.fragment)},l(t){a(e.$$.fragment,t),n=g(t),a($.$$.fragment,t),r=g(t),a(c.$$.fragment,t),m=g(t),a(x.$$.fragment,t),h=g(t),a(w.$$.fragment,t),v=g(t),a(y.$$.fragment,t),k=g(t),a(E.$$.fragment,t),b=g(t),a(D.$$.fragment,t),P=g(t),a(C.$$.fragment,t),j=g(t),a(S.$$.fragment,t),N=g(t),a(G.$$.fragment,t),V=g(t),a(Y.$$.fragment,t),L=g(t),a(U.$$.fragment,t),q=g(t),a(J.$$.fragment,t),X=g(t),a(Z.$$.fragment,t),_=g(t),a(tt.$$.fragment,t),et=g(t),a(nt.$$.fragment,t),$t=g(t),a(st.$$.fragment,t)},m(t,s){o(e,t,s),i(t,n,s),o($,t,s),i(t,r,s),o(c,t,s),i(t,m,s),o(x,t,s),i(t,h,s),o(w,t,s),i(t,v,s),o(y,t,s),i(t,k,s),o(E,t,s),i(t,b,s),o(D,t,s),i(t,P,s),o(C,t,s),i(t,j,s),o(S,t,s),i(t,N,s),o(G,t,s),i(t,V,s),o(Y,t,s),i(t,L,s),o(U,t,s),i(t,q,s),o(J,t,s),i(t,X,s),o(Z,t,s),i(t,_,s),o(tt,t,s),i(t,et,s),o(nt,t,s),i(t,$t,s),o(st,t,s),at=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),x.$set(o);const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),w.$set(r);const c={};2&n&&(c.$$scope={dirty:n,ctx:t}),y.$set(c);const p={};2&n&&(p.$$scope={dirty:n,ctx:t}),E.$set(p);const f={};2&n&&(f.$$scope={dirty:n,ctx:t}),D.$set(f);const l={};2&n&&(l.$$scope={dirty:n,ctx:t}),C.$set(l);const m={};2&n&&(m.$$scope={dirty:n,ctx:t}),S.$set(m);const u={};2&n&&(u.$$scope={dirty:n,ctx:t}),G.$set(u);const g={};2&n&&(g.$$scope={dirty:n,ctx:t}),Y.$set(g);const i={};2&n&&(i.$$scope={dirty:n,ctx:t}),U.$set(i);const d={};2&n&&(d.$$scope={dirty:n,ctx:t}),J.$set(d);const h={};2&n&&(h.$$scope={dirty:n,ctx:t}),Z.$set(h);const v={};2&n&&(v.$$scope={dirty:n,ctx:t}),tt.$set(v);const k={};2&n&&(k.$$scope={dirty:n,ctx:t}),nt.$set(k);const b={};2&n&&(b.$$scope={dirty:n,ctx:t}),st.$set(b)},i(t){at||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),p(w.$$.fragment,t),p(y.$$.fragment,t),p(E.$$.fragment,t),p(D.$$.fragment,t),p(C.$$.fragment,t),p(S.$$.fragment,t),p(G.$$.fragment,t),p(Y.$$.fragment,t),p(U.$$.fragment,t),p(J.$$.fragment,t),p(Z.$$.fragment,t),p(tt.$$.fragment,t),p(nt.$$.fragment,t),p(st.$$.fragment,t),at=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),f(w.$$.fragment,t),f(y.$$.fragment,t),f(E.$$.fragment,t),f(D.$$.fragment,t),f(C.$$.fragment,t),f(S.$$.fragment,t),f(G.$$.fragment,t),f(Y.$$.fragment,t),f(U.$$.fragment,t),f(J.$$.fragment,t),f(Z.$$.fragment,t),f(tt.$$.fragment,t),f(nt.$$.fragment,t),f(st.$$.fragment,t),at=!1},d(t){l(e,t),t&&d(n),l($,t),t&&d(r),l(c,t),t&&d(m),l(x,t),t&&d(h),l(w,t),t&&d(v),l(y,t),t&&d(k),l(E,t),t&&d(b),l(D,t),t&&d(P),l(C,t),t&&d(j),l(S,t),t&&d(N),l(G,t),t&&d(V),l(Y,t),t&&d(L),l(U,t),t&&d(q),l(J,t),t&&d(X),l(Z,t),t&&d(_),l(tt,t),t&&d(et),l(nt,t),t&&d($t),l(st,t)}}}function _t(t){let e,n;const m=[t[0],te];let u={$$slots:{default:[Zt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)u=$(u,m[t]);return e=new D({props:u}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p(t,[n]){const $=1&n?r(m,[1&n&&c(t[0]),0&n&&c(te)]):{};2&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}const te={name:"PopoverButton",relatedComponents:[{name:"Popover",link:"./docs/components/popover"}],shadowRaised:"0 2px 4px -1px rgba(0, 0, 0, .2), 0 3px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);"},{name:ee,relatedComponents:ne,shadowRaised:$e}=te;function se(t,e,n){return t.$$set=t=>{n(0,e=$($({},e),m(t)))},[e=m(e)]}class ae extends t{constructor(t){super(),e(this,t,se,_t,n,{})}}export{ae as default,te as metadata};
