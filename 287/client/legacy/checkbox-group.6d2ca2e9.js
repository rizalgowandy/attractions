import{_ as n,a as e,b as t,c as a,i as c,s as l,d as o,S as s,o as i,f as r,g as u,h as f,j as d,$ as h,k as v,B as m,a1 as p,C as b,u as $,v as k,K as x,m as g,L as y,N as C,O as R,p as L,q as j,r as w,X as N,a2 as T,a3 as S,w as B,a4 as q,a0 as A,a5 as D,a6 as E,x as M,z as O,y as P,A as _,D as z,l as I}from"./client.284dc1b8.js";import{c as K}from"./classes.7d86155b.js";import{g as V}from"./color-picker-styles.a2a9eff8.js";import{p as X}from"./plural-s.31bb9da9.js";import{C as F}from"./checkbox.9f65db3c.js";function G(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,l=e(n);if(a){var o=e(this).constructor;c=Reflect.construct(l,arguments,o)}else c=l.apply(this,arguments);return t(this,c)}}function H(n,e,t){var a=n.slice();return a[14]=e[t],a[15]=e,a[16]=t,a}function J(n){for(var e,t,a,c=[],l=new Map,o=n[0],s=function(n){return n[14].value},x=0;x<o.length;x+=1){var g=H(n,o,x),y=s(g);l.set(y,c[x]=Z(y,g))}return{c:function(){e=i("div");for(var n=0;n<c.length;n+=1)c[n].c();this.h()},l:function(n){e=r(n,"DIV",{class:!0,role:!0});for(var t=u(e),a=0;a<c.length;a+=1)c[a].l(t);t.forEach(f),this.h()},h:function(){d(e,"class",t=h(K(n[1]))+" svelte-197wca9"),d(e,"role","group")},m:function(n,t){v(n,e,t);for(var l=0;l<c.length;l+=1)c[l].m(e,null);a=!0},p:function(n,i){2045&i&&(o=n[0],m(),c=p(c,i,s,1,n,o,l,e,q,Z,null,H),b()),(!a||2&i&&t!==(t=h(K(n[1]))+" svelte-197wca9"))&&d(e,"class",t)},i:function(n){if(!a){for(var e=0;e<o.length;e+=1)$(c[e]);a=!0}},o:function(n){for(var e=0;e<c.length;e+=1)k(c[e]);a=!1},d:function(n){n&&f(e);for(var t=0;t<c.length;t+=1)c[t].d()}}}function Q(n){var e;function t(n,e){return null!=n[3]?W:U}var a=t(n),c=a(n);return{c:function(){c.c(),e=x()},l:function(n){c.l(n),e=x()},m:function(n,t){c.m(n,t),v(n,e,t)},p:function(n,l){a===(a=t(n))&&c?c.p(n,l):(c.d(1),(c=a(n))&&(c.c(),c.m(e.parentNode,e)))},d:function(n){c.d(n),n&&f(e)}}}function U(n){var e,t=(n[14].label||n[14].value)+"";return{c:function(){e=P(t)},l:function(n){e=_(n,t)},m:function(n,t){v(n,e,t)},p:function(n,a){1&a&&t!==(t=(n[14].label||n[14].value)+"")&&z(e,t)},d:function(n){n&&f(e)}}}function W(n){var e,t,a,c=(n[14].label||n[14].value)+"";return{c:function(){e=i("span"),t=P(c),this.h()},l:function(n){e=r(n,"SPAN",{class:!0});var a=u(e);t=_(a,c),a.forEach(f),this.h()},h:function(){d(e,"class",a=K(n[3]))},m:function(n,a){v(n,e,a),I(e,t)},p:function(n,l){1&l&&c!==(c=(n[14].label||n[14].value)+"")&&z(t,c),8&l&&a!==(a=K(n[3]))&&d(e,"class",a)},d:function(n){n&&f(e)}}}function Y(n){var e,t=!n[4]&&Q(n);return{c:function(){t&&t.c(),e=M()},l:function(n){t&&t.l(n),e=O(n)},m:function(n,a){t&&t.m(n,a),v(n,e,a)},p:function(n,a){n[4]?t&&(t.d(1),t=null):t?t.p(n,a):((t=Q(n)).c(),t.m(e.parentNode,e))},d:function(n){t&&t.d(n),n&&f(e)}}}function Z(n,e){var t,a,c,l,o=[{name:e[5]},{slotLeft:e[6]},{selectorStyle:e[4]?V(e[14].value):null},{value:e[14].value},{disabled:e[14].disabled||!e[14].checked&&e[8]>=e[7]},{class:K(e[4]&&"colored",e[2])},{title:!e[14].disabled&&!e[14].checked&&e[8]>=e[7]?e[9]:null},e[10]];function s(n){e[12](n,e[14])}for(var i={$$slots:{default:[Y]},$$scope:{ctx:e}},r=0;r<o.length;r+=1)i=C(i,o[r]);return void 0!==e[14].checked&&(i.checked=e[14].checked),a=new F({props:i}),A.push((function(){return D(a,"checked",s)})),a.$on("change",e[13]),{key:n,first:null,c:function(){t=x(),L(a.$$.fragment),this.h()},l:function(n){t=x(),j(a.$$.fragment,n),this.h()},h:function(){this.first=t},m:function(n,e){v(n,t,e),w(a,n,e),l=!0},p:function(n,t){e=n;var l=2037&t?N(o,[32&t&&{name:e[5]},64&t&&{slotLeft:e[6]},17&t&&{selectorStyle:e[4]?V(e[14].value):null},1&t&&{value:e[14].value},385&t&&{disabled:e[14].disabled||!e[14].checked&&e[8]>=e[7]},20&t&&{class:K(e[4]&&"colored",e[2])},897&t&&{title:!e[14].disabled&&!e[14].checked&&e[8]>=e[7]?e[9]:null},1024&t&&T(e[10])]):{};131097&t&&(l.$$scope={dirty:t,ctx:e}),!c&&1&t&&(c=!0,l.checked=e[14].checked,S((function(){return c=!1}))),a.$set(l)},i:function(n){l||($(a.$$.fragment,n),l=!0)},o:function(n){k(a.$$.fragment,n),l=!1},d:function(n){n&&f(t),B(a,n)}}}function nn(n){var e,t,a=null!=n[0]&&0!==n[0].length&&J(n);return{c:function(){a&&a.c(),e=x()},l:function(n){a&&a.l(n),e=x()},m:function(n,c){a&&a.m(n,c),v(n,e,c),t=!0},p:function(n,t){var c=g(t,1)[0];null!=n[0]&&0!==n[0].length?a?(a.p(n,c),1&c&&$(a,1)):((a=J(n)).c(),$(a,1),a.m(e.parentNode,e)):a&&(m(),k(a,1,1,(function(){a=null})),b())},i:function(n){t||($(a),t=!0)},o:function(n){k(a),t=!1},d:function(n){a&&a.d(n),n&&f(e)}}}function en(n,e,t){var a,c,l=["class","checkboxClass","labelClass","color","items","name","labelsLeft","max","maxReachedTooltip"],o=y(e,l),s=e.class,i=void 0===s?null:s,r=e.checkboxClass,u=void 0===r?null:r,f=e.labelClass,d=void 0===f?null:f,h=e.color,v=void 0!==h&&h,m=e.items,p=e.name,b=e.labelsLeft,$=void 0!==b&&b,k=e.max,x=void 0===k?1/0:k,g=e.maxReachedTooltip,L=void 0===g?null:g;return m&&0!==m.length||console.error("Must have at least one item in the checkbox group"),v&&null!=d&&console.warn("labelClass has no effect: labels are not rendered for color checkbox groups"),n.$$set=function(n){e=C(C({},e),R(n)),t(10,o=y(e,l)),"class"in n&&t(1,i=n.class),"checkboxClass"in n&&t(2,u=n.checkboxClass),"labelClass"in n&&t(3,d=n.labelClass),"color"in n&&t(4,v=n.color),"items"in n&&t(0,m=n.items),"name"in n&&t(5,p=n.name),"labelsLeft"in n&&t(6,$=n.labelsLeft),"max"in n&&t(7,x=n.max),"maxReachedTooltip"in n&&t(11,L=n.maxReachedTooltip)},n.$$.update=function(){var e;2176&n.$$.dirty&&t(9,a=null!==(e=L)&&void 0!==e?e:"Can only select ".concat(x," value").concat(X(x),"."));1&n.$$.dirty&&t(8,c=m.reduce((function(n,e){return n+e.checked}),0))},[m,i,u,d,v,p,$,x,c,a,o,L,function(e,a){n.$$.not_equal(a.checked,e)&&(a.checked=e,t(0,m))},function(e){E.call(this,n,e)}]}var tn=function(e){n(i,s);var t=G(i);function i(n){var e;return a(this,i),e=t.call(this),c(o(e),n,en,nn,l,{class:1,checkboxClass:2,labelClass:3,color:4,items:0,name:5,labelsLeft:6,max:7,maxReachedTooltip:11}),e}return i}();export{tn as C};
