import{S as e,i as l,s,h as a,c as t,b as c,d as n,e as o,V as r,f as i,w as u,X as d,x as h,t as m,o as f,F as p,G as b,I as $,J as k,j as x,k as g,m as v,R as C,Y as y,Z as L,p as j,_ as w,W as R,$ as T,a0 as N,q as S,u as q,r as E,v as I,y as M,g as V}from"./client.b859d0a0.js";import{c as _}from"./classes.2453fa25.js";import{g as A}from"./color-picker-styles.7cf55314.js";import{p as D}from"./plural-s.31bb9da9.js";import{C as F}from"./checkbox.78f8dae5.js";function G(e,l,s){const a=e.slice();return a[14]=l[s],a[15]=l,a[16]=s,a}function J(e){let l,s,p,b=[],$=new Map,k=e[0];const x=e=>e[14].value;for(let l=0;l<k.length;l+=1){let s=G(e,k,l),a=x(s);$.set(a,b[l]=Z(a,s))}return{c(){l=a("div");for(let e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){l=t(e,"DIV",{class:!0,role:!0});var s=c(l);for(let e=0;e<b.length;e+=1)b[e].l(s);s.forEach(n),this.h()},h(){o(l,"class",s=r(_(e[1]))+" svelte-197wca9"),o(l,"role","group")},m(e,s){i(e,l,s);for(let e=0;e<b.length;e+=1)b[e].m(l,null);p=!0},p(e,a){2045&a&&(k=e[0],u(),b=d(b,a,x,1,e,k,$,l,w,Z,null,G),h()),(!p||2&a&&s!==(s=r(_(e[1]))+" svelte-197wca9"))&&o(l,"class",s)},i(e){if(!p){for(let e=0;e<k.length;e+=1)m(b[e]);p=!0}},o(e){for(let e=0;e<b.length;e+=1)f(b[e]);p=!1},d(e){e&&n(l);for(let e=0;e<b.length;e+=1)b[e].d()}}}function P(e){let l;function s(e,l){return null!=e[3]?X:W}let a=s(e),t=a(e);return{c(){t.c(),l=p()},l(e){t.l(e),l=p()},m(e,s){t.m(e,s),i(e,l,s)},p(e,c){a===(a=s(e))&&t?t.p(e,c):(t.d(1),t=a(e),t&&(t.c(),t.m(l.parentNode,l)))},d(e){t.d(e),e&&n(l)}}}function W(e){let l,s=(e[14].label||e[14].value)+"";return{c(){l=E(s)},l(e){l=I(e,s)},m(e,s){i(e,l,s)},p(e,a){1&a&&s!==(s=(e[14].label||e[14].value)+"")&&M(l,s)},d(e){e&&n(l)}}}function X(e){let l,s,r,u=(e[14].label||e[14].value)+"";return{c(){l=a("span"),s=E(u),this.h()},l(e){l=t(e,"SPAN",{class:!0});var a=c(l);s=I(a,u),a.forEach(n),this.h()},h(){o(l,"class",r=_(e[3]))},m(e,a){i(e,l,a),V(l,s)},p(e,a){1&a&&u!==(u=(e[14].label||e[14].value)+"")&&M(s,u),8&a&&r!==(r=_(e[3]))&&o(l,"class",r)},d(e){e&&n(l)}}}function Y(e){let l,s=!e[4]&&P(e);return{c(){s&&s.c(),l=S()},l(e){s&&s.l(e),l=q(e)},m(e,a){s&&s.m(e,a),i(e,l,a)},p(e,a){e[4]?s&&(s.d(1),s=null):s?s.p(e,a):(s=P(e),s.c(),s.m(l.parentNode,l))},d(e){s&&s.d(e),e&&n(l)}}}function Z(e,l){let s,a,t,c;const o=[{name:l[5]},{slotLeft:l[6]},{selectorStyle:l[4]?A(l[14].value):null},{value:l[14].value},{disabled:l[14].disabled||!l[14].checked&&l[8]>=l[7]},{class:_(l[4]&&"colored",l[2])},{title:!l[14].disabled&&!l[14].checked&&l[8]>=l[7]?l[9]:null},l[10]];function r(e){l[12](e,l[14])}let u={$$slots:{default:[Y]},$$scope:{ctx:l}};for(let e=0;e<o.length;e+=1)u=$(u,o[e]);return void 0!==l[14].checked&&(u.checked=l[14].checked),a=new F({props:u}),R.push((()=>T(a,"checked",r))),a.$on("change",l[13]),{key:e,first:null,c(){s=p(),x(a.$$.fragment),this.h()},l(e){s=p(),g(a.$$.fragment,e),this.h()},h(){this.first=s},m(e,l){i(e,s,l),v(a,e,l),c=!0},p(e,s){l=e;const c=2037&s?C(o,[32&s&&{name:l[5]},64&s&&{slotLeft:l[6]},17&s&&{selectorStyle:l[4]?A(l[14].value):null},1&s&&{value:l[14].value},385&s&&{disabled:l[14].disabled||!l[14].checked&&l[8]>=l[7]},20&s&&{class:_(l[4]&&"colored",l[2])},897&s&&{title:!l[14].disabled&&!l[14].checked&&l[8]>=l[7]?l[9]:null},1024&s&&y(l[10])]):{};131097&s&&(c.$$scope={dirty:s,ctx:l}),!t&&1&s&&(t=!0,c.checked=l[14].checked,L((()=>t=!1))),a.$set(c)},i(e){c||(m(a.$$.fragment,e),c=!0)},o(e){f(a.$$.fragment,e),c=!1},d(e){e&&n(s),j(a,e)}}}function z(e){let l,s,a=null!=e[0]&&0!==e[0].length&&J(e);return{c(){a&&a.c(),l=p()},l(e){a&&a.l(e),l=p()},m(e,t){a&&a.m(e,t),i(e,l,t),s=!0},p(e,[s]){null!=e[0]&&0!==e[0].length?a?(a.p(e,s),1&s&&m(a,1)):(a=J(e),a.c(),m(a,1),a.m(l.parentNode,l)):a&&(u(),f(a,1,1,(()=>{a=null})),h())},i(e){s||(m(a),s=!0)},o(e){f(a),s=!1},d(e){a&&a.d(e),e&&n(l)}}}function B(e,l,s){let a,t;const c=["class","checkboxClass","labelClass","color","items","name","labelsLeft","max","maxReachedTooltip"];let n=b(l,c),{class:o=null}=l,{checkboxClass:r=null}=l,{labelClass:i=null}=l,{color:u=!1}=l,{items:d}=l,{name:h}=l,{labelsLeft:m=!1}=l,{max:f=1/0}=l,{maxReachedTooltip:p=null}=l;return d&&0!==d.length||console.error("Must have at least one item in the checkbox group"),u&&null!=i&&console.warn("labelClass has no effect: labels are not rendered for color checkbox groups"),e.$$set=e=>{l=$($({},l),k(e)),s(10,n=b(l,c)),"class"in e&&s(1,o=e.class),"checkboxClass"in e&&s(2,r=e.checkboxClass),"labelClass"in e&&s(3,i=e.labelClass),"color"in e&&s(4,u=e.color),"items"in e&&s(0,d=e.items),"name"in e&&s(5,h=e.name),"labelsLeft"in e&&s(6,m=e.labelsLeft),"max"in e&&s(7,f=e.max),"maxReachedTooltip"in e&&s(11,p=e.maxReachedTooltip)},e.$$.update=()=>{2176&e.$$.dirty&&s(9,a=p??`Can only select ${f} value${D(f)}.`),1&e.$$.dirty&&s(8,t=d.reduce(((e,l)=>e+l.checked),0))},[d,o,r,i,u,h,m,f,t,a,n,p,function(l,a){e.$$.not_equal(a.checked,l)&&(a.checked=l,s(0,d))},function(l){N.call(this,e,l)}]}var H=class extends e{constructor(e){super(),l(this,e,B,z,s,{class:1,checkboxClass:2,labelClass:3,color:4,items:0,name:5,labelsLeft:6,max:7,maxReachedTooltip:11})}};export{H as C};
