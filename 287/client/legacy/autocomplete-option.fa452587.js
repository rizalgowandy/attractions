import{_ as n,a as t,b as c,c as o,i as r,s as u,d as e,S as i,K as a,k as f,h as l,o as s,f as v,g as h,j as d,ad as p,x as m,z as g,l as k,t as y,ae as R,m as $,n as E,M as b,y as x,A as q,D as A}from"./client.c5acf11b.js";function B(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function K(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,u=t(n);if(o){var e=t(this).constructor;r=Reflect.construct(u,arguments,e)}else r=u.apply(this,arguments);return c(this,r)}}function M(n,t,c){var o=n.slice();return o[6]=t[c],o}function N(n,t,c){var o=n.slice();return o[6]=t[c],o}function j(n){var t,c=n[6].content+"";return{c:function(){t=x(c)},l:function(n){t=q(n,c)},m:function(n,c){f(n,t,c)},p:function(n,o){1&o&&c!==(c=n[6].content+"")&&A(t,c)},d:function(n){n&&l(t)}}}function D(n){var t,c,o=n[6].content+"";return{c:function(){t=s("mark"),c=x(o),this.h()},l:function(n){t=v(n,"MARK",{class:!0});var r=h(t);c=q(r,o),r.forEach(l),this.h()},h:function(){d(t,"class","svelte-fkdvgp")},m:function(n,o){f(n,t,o),k(t,c)},p:function(n,t){1&t&&o!==(o=n[6].content+"")&&A(c,o)},d:function(n){n&&l(t)}}}function I(n){var t;function c(n,t){return n[6].marked?D:j}var o=c(n),r=o(n);return{c:function(){r.c(),t=a()},l:function(n){r.l(n),t=a()},m:function(n,c){r.m(n,c),f(n,t,c)},p:function(n,u){o===(o=c(n))&&r?r.p(n,u):(r.d(1),(r=o(n))&&(r.c(),r.m(t.parentNode,t)))},d:function(n){r.d(n),n&&l(t)}}}function O(n){for(var t,c=n[1](n[0].details),o=[],r=0;r<c.length;r+=1)o[r]=z(M(n,c,r));return{c:function(){t=s("div");for(var n=0;n<o.length;n+=1)o[n].c();this.h()},l:function(n){t=v(n,"DIV",{class:!0});for(var c=h(t),r=0;r<o.length;r+=1)o[r].l(c);c.forEach(l),this.h()},h:function(){d(t,"class","subtext svelte-fkdvgp")},m:function(n,c){f(n,t,c);for(var r=0;r<o.length;r+=1)o[r].m(t,null)},p:function(n,r){if(3&r){var u;for(c=n[1](n[0].details),u=0;u<c.length;u+=1){var e=M(n,c,u);o[u]?o[u].p(e,r):(o[u]=z(e),o[u].c(),o[u].m(t,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=c.length}},d:function(n){n&&l(t),p(o,n)}}}function T(n){var t,c=n[6].content+"";return{c:function(){t=x(c)},l:function(n){t=q(n,c)},m:function(n,c){f(n,t,c)},p:function(n,o){1&o&&c!==(c=n[6].content+"")&&A(t,c)},d:function(n){n&&l(t)}}}function w(n){var t,c,o=n[6].content+"";return{c:function(){t=s("mark"),c=x(o),this.h()},l:function(n){t=v(n,"MARK",{class:!0});var r=h(t);c=q(r,o),r.forEach(l),this.h()},h:function(){d(t,"class","svelte-fkdvgp")},m:function(n,o){f(n,t,o),k(t,c)},p:function(n,t){1&t&&o!==(o=n[6].content+"")&&A(c,o)},d:function(n){n&&l(t)}}}function z(n){var t;function c(n,t){return n[6].marked?w:T}var o=c(n),r=o(n);return{c:function(){r.c(),t=a()},l:function(n){r.l(n),t=a()},m:function(n,c){r.m(n,c),f(n,t,c)},p:function(n,u){o===(o=c(n))&&r?r.p(n,u):(r.d(1),(r=o(n))&&(r.c(),r.m(t.parentNode,t)))},d:function(n){r.d(n),n&&l(t)}}}function L(n){for(var t,c,o,r,u,e=n[1](n[0].name),i=[],a=0;a<e.length;a+=1)i[a]=I(N(n,e,a));var b=n[0].details&&O(n);return{c:function(){t=s("li"),c=s("button");for(var n=0;n<i.length;n+=1)i[n].c();o=m(),b&&b.c(),this.h()},l:function(n){t=v(n,"LI",{class:!0});var r=h(t);c=v(r,"BUTTON",{type:!0,class:!0});for(var u=h(c),e=0;e<i.length;e+=1)i[e].l(u);o=g(u),b&&b.l(u),u.forEach(l),r.forEach(l),this.h()},h:function(){d(c,"type","button"),d(c,"class","svelte-fkdvgp"),d(t,"class","svelte-fkdvgp")},m:function(e,a){f(e,t,a),k(t,c);for(var l=0;l<i.length;l+=1)i[l].m(c,null);k(c,o),b&&b.m(c,null),r||(u=y(t,"click",R(n[4])),r=!0)},p:function(n,t){var r=$(t,1)[0];if(3&r){var u;for(e=n[1](n[0].name),u=0;u<e.length;u+=1){var a=N(n,e,u);i[u]?i[u].p(a,r):(i[u]=I(a),i[u].c(),i[u].m(c,o))}for(;u<i.length;u+=1)i[u].d(1);i.length=e.length}n[0].details?b?b.p(n,r):((b=O(n)).c(),b.m(c,null)):b&&(b.d(1),b=null)},i:E,o:E,d:function(n){n&&l(t),p(i,n),b&&b.d(),r=!1,u()}}}function P(n,t,c){var o,r=t.option,u=t.query,e=void 0===u?null:u;var i=b();return n.$$set=function(n){"option"in n&&c(0,r=n.option),"query"in n&&c(3,e=n.query)},n.$$.update=function(){8&n.$$.dirty&&(o=e?new RegExp("(".concat(B(e),")"),"ig"):null)},[r,function(n){return null==o?[{content:n,marked:!1}]:n.split(o).map((function(n,t){return{content:n,marked:t%2!=0}}))},i,e,function(n){return i("click",{nativeEvent:n})}]}var S=function(t){n(a,i);var c=K(a);function a(n){var t;return o(this,a),t=c.call(this),r(e(t),n,P,L,u,{option:0,query:3}),t}return a}();export{S as A,B as e};
