import{_ as n,a as t,b as o,c,i as a,s,d as i,S as u,J as e,k as r,m as l,B as f,v,C as p,u as d,h,L as m,O as y,o as $,f as k,g as C,j as R,X as b,Q as q,T as w,t as j,a5 as B}from"./client.43476f57.js";import{c as g}from"./classes.7d86155b.js";function x(n){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var a,s=t(n);if(c){var i=t(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return o(this,a)}}var D=function(n){return{}},E=function(n){return{closeCallback:n[3]}},I=function(n){return{}},O=function(n){return{closeCallback:n[3]}};function V(n){var t,o,c,a=n[5].default,s=y(a,n,n[4],E);return{c:function(){t=$("div"),s&&s.c(),this.h()},l:function(n){t=k(n,"DIV",{class:!0});var o=C(t);s&&s.l(o),o.forEach(h),this.h()},h:function(){R(t,"class",o=b(g("modal-overlay",n[1]))+" svelte-ln570q"),q(t,"open",n[0])},m:function(n,o){r(n,t,o),s&&s.m(t,null),c=!0},p:function(n,i){s&&s.p&&(!c||16&i)&&w(s,a,n,n[4],i,D,E),(!c||2&i&&o!==(o=b(g("modal-overlay",n[1]))+" svelte-ln570q"))&&R(t,"class",o),3&i&&q(t,"open",n[0])},i:function(n){c||(d(s,n),c=!0)},o:function(n){v(s,n),c=!1},d:function(n){n&&h(t),s&&s.d(n)}}}function J(n){var t,o,c,a,s,i=n[5].default,u=y(i,n,n[4],O);return{c:function(){t=$("div"),u&&u.c(),this.h()},l:function(n){t=k(n,"DIV",{class:!0});var o=C(t);u&&u.l(o),o.forEach(h),this.h()},h:function(){R(t,"class",o=b(g("modal-overlay",n[1]))+" svelte-ln570q"),q(t,"open",n[0])},m:function(o,i){r(o,t,i),u&&u.m(t,null),c=!0,a||(s=j(t,"click",B(n[3])),a=!0)},p:function(n,a){u&&u.p&&(!c||16&a)&&w(u,i,n,n[4],a,I,O),(!c||2&a&&o!==(o=b(g("modal-overlay",n[1]))+" svelte-ln570q"))&&R(t,"class",o),3&a&&q(t,"open",n[0])},i:function(n){c||(d(u,n),c=!0)},o:function(n){v(u,n),c=!1},d:function(n){n&&h(t),u&&u.d(n),a=!1,s()}}}function L(n){var t,o,c,a,s=[J,V],i=[];function u(n,t){return n[2]?1:0}return t=u(n),o=i[t]=s[t](n),{c:function(){o.c(),c=e()},l:function(n){o.l(n),c=e()},m:function(n,o){i[t].m(n,o),r(n,c,o),a=!0},p:function(n,a){var e=l(a,1)[0],r=t;(t=u(n))===r?i[t].p(n,e):(f(),v(i[r],1,1,(function(){i[r]=null})),p(),(o=i[t])?o.p(n,e):(o=i[t]=s[t](n)).c(),d(o,1),o.m(c.parentNode,c))},i:function(n){a||(d(o),a=!0)},o:function(n){v(o),a=!1},d:function(n){i[t].d(n),n&&h(c)}}}function M(n,t,o){var c=t.$$slots,a=void 0===c?{}:c,s=t.$$scope,i=t.class,u=void 0===i?null:i,e=t.open,r=void 0!==e&&e,l=t.noClickaway,f=void 0!==l&&l;var v=m();return n.$$set=function(n){"class"in n&&o(1,u=n.class),"open"in n&&o(0,r=n.open),"noClickaway"in n&&o(2,f=n.noClickaway),"$$scope"in n&&o(4,s=n.$$scope)},n.$$.update=function(){1&n.$$.dirty&&v("change",{value:r})},[r,u,f,function(){o(0,r=!1)},s,a]}var N=function(t){n(e,u);var o=x(e);function e(n){var t;return c(this,e),t=o.call(this),a(i(t),n,M,L,s,{class:1,open:0,noClickaway:2}),t}return e}();export{N as M};
