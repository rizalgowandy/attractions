import{S as t,i as n,s,j as e,k as o,m as a,t as c,o as l,p as r,I as i,W as m,$ as f,h as $,q as p,c as u,b as h,u as d,d as g,e as v,V as x,M as y,f as b,g as L,w as O,x as j,R as Q,Y as w,Z as S,a5 as I,G as E,H as M,J as k,a0 as V,r as D,v as C,y as T,K as A,O as B,P,Q as q,N as G,T as H}from"./client.b859d0a0.js";import{B as J}from"./button.feeccfec.js";import{C as K}from"./chip.8346b853.js";import{A as N,c as R,M as W}from"./autocomplete-field.d005a1fa.js";import{X as Y}from"./x.1652ceff.js";import{L as Z}from"./loading.951f8fb1.js";import{c as z}from"./classes.2453fa25.js";import{p as F}from"./plural-s.31bb9da9.js";const U=t=>({}),X=t=>({slot:"too-many-options"}),_=t=>({}),tt=t=>({slot:"not-enough-input"}),nt=t=>({}),st=t=>({slot:"loading-options"}),et=t=>({loadMoreOptions:131072&t}),ot=t=>({loadMoreOptions:t[17]});function at(t,n,s){const e=t.slice();return e[18]=n[s],e}function ct(t){let n,s;return n=new Y({}),{c(){e(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,e){a(n,t,e),s=!0},i(t){s||(c(n.$$.fragment,t),s=!0)},o(t){l(n.$$.fragment,t),s=!1},d(t){r(n,t)}}}function lt(t){let n,s,i,m,f=t[18].name+"";return i=new J({props:{neutral:!0,round:!0,small:!0,$$slots:{default:[ct]},$$scope:{ctx:t}}}),i.$on("click",(function(){return t[10](t[18])})),{c(){n=D(f),s=p(),e(i.$$.fragment)},l(t){n=C(t,f),s=d(t),o(i.$$.fragment,t)},m(t,e){b(t,n,e),b(t,s,e),a(i,t,e),m=!0},p(s,e){t=s,(!m||1&e)&&f!==(f=t[18].name+"")&&T(n,f);const o={};32768&e&&(o.$$scope={dirty:e,ctx:t}),i.$set(o)},i(t){m||(c(i.$$.fragment,t),m=!0)},o(t){l(i.$$.fragment,t),m=!1},d(t){t&&g(n),t&&g(s),r(i,t)}}}function rt(t){let n,s;return n=new K({props:{noPadding:!0,$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){e(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,e){a(n,t,e),s=!0},p(t,s){const e={};32769&s&&(e.$$scope={dirty:s,ctx:t}),n.$set(e)},i(t){s||(c(n.$$.fragment,t),s=!0)},o(t){l(n.$$.fragment,t),s=!1},d(t){r(n,t)}}}function it(t){let n;const s=t[9]["too-many-options"],e=A(s,t,t[15],X),o=e||function(t){let n,s,e,o,a,c=F(t[4])+"";return{c(){n=$("div"),s=D("Cannot select more than\n        "),e=D(t[4]),o=D("\n        option"),a=D(c),this.h()},l(l){n=u(l,"DIV",{class:!0});var r=h(n);s=C(r,"Cannot select more than\n        "),e=C(r,t[4]),o=C(r,"\n        option"),a=C(r,c),r.forEach(g),this.h()},h(){v(n,"class","notice svelte-1503aum")},m(t,c){b(t,n,c),L(n,s),L(n,e),L(n,o),L(n,a)},p(t,n){16&n&&T(e,t[4]),16&n&&c!==(c=F(t[4])+"")&&T(a,c)},d(t){t&&g(n)}}}(t);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,s){o&&o.m(t,s),n=!0},p(t,a){e?e.p&&(!n||32768&a)&&B(e,s,t,t[15],n?q(s,t[15],a,U):P(t[15]),X):o&&o.p&&(!n||16&a)&&o.p(t,n?a:-1)},i(t){n||(c(o,t),n=!0)},o(t){l(o,t),n=!1},d(t){o&&o.d(t)}}}function mt(t){let n;const s=t[9]["not-enough-input"],e=A(s,t,t[15],tt),o=e||function(t){let n,s,e,o,a,c,l=F(t[3])+"";return{c(){n=$("div"),s=D("Type\n        "),e=D(t[3]),o=D("\n        character"),a=D(l),c=D("\n        to search"),this.h()},l(r){n=u(r,"DIV",{class:!0});var i=h(n);s=C(i,"Type\n        "),e=C(i,t[3]),o=C(i,"\n        character"),a=C(i,l),c=C(i,"\n        to search"),i.forEach(g),this.h()},h(){v(n,"class","notice svelte-1503aum")},m(t,l){b(t,n,l),L(n,s),L(n,e),L(n,o),L(n,a),L(n,c)},p(t,n){8&n&&T(e,t[3]),8&n&&l!==(l=F(t[3])+"")&&T(a,l)},d(t){t&&g(n)}}}(t);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,s){o&&o.m(t,s),n=!0},p(t,a){e?e.p&&(!n||32768&a)&&B(e,s,t,t[15],n?q(s,t[15],a,_):P(t[15]),tt):o&&o.p&&(!n||8&a)&&o.p(t,n?a:-1)},i(t){n||(c(o,t),n=!0)},o(t){l(o,t),n=!1},d(t){o&&o.d(t)}}}function ft(t){let n;const s=t[9]["loading-options"],i=A(s,t,t[15],st),m=i||function(t){let n,s,i,m;return s=new Z({}),{c(){n=$("li"),e(s.$$.fragment),i=D("\n        Loading..."),this.h()},l(t){n=u(t,"LI",{class:!0});var e=h(n);o(s.$$.fragment,e),i=C(e,"\n        Loading..."),e.forEach(g),this.h()},h(){v(n,"class","loading-options svelte-1503aum")},m(t,e){b(t,n,e),a(s,n,null),L(n,i),m=!0},i(t){m||(c(s.$$.fragment,t),m=!0)},o(t){l(s.$$.fragment,t),m=!1},d(t){t&&g(n),r(s)}}}();return{c(){m&&m.c()},l(t){m&&m.l(t)},m(t,s){m&&m.m(t,s),n=!0},p(t,e){i&&i.p&&(!n||32768&e)&&B(i,s,t,t[15],n?q(s,t[15],e,nt):P(t[15]),st)},i(t){n||(c(m,t),n=!0)},o(t){l(m,t),n=!1},d(t){m&&m.d(t)}}}function $t(t){let n,s,i;return n=new W({}),{c(){e(n.$$.fragment),s=D("\n            load more options")},l(t){o(n.$$.fragment,t),s=C(t,"\n            load more options")},m(t,e){a(n,t,e),b(t,s,e),i=!0},i(t){i||(c(n.$$.fragment,t),i=!0)},o(t){l(n.$$.fragment,t),i=!1},d(t){r(n,t),t&&g(s)}}}function pt(t){let n,s;const i=t[9]["more-options"],m=A(i,t,t[15],ot),f=m||function(t){let n,s,i,m,f,p;return s=new J({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),s.$on("click",(function(){H(t[17])&&t[17].apply(this,arguments)})),{c(){n=$("div"),e(s.$$.fragment)},l(t){n=u(t,"DIV",{});var e=h(n);o(s.$$.fragment,e),e.forEach(g)},m(e,o){b(e,n,o),a(s,n,null),m=!0,f||(p=G(i=R.call(null,n,{callback:t[17]})),f=!0)},p(n,e){t=n;const o={};32768&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o),i&&H(i.update)&&131072&e&&i.update.call(null,{callback:t[17]})},i(t){m||(c(s.$$.fragment,t),m=!0)},o(t){l(s.$$.fragment,t),m=!1},d(t){t&&g(n),r(s),f=!1,p()}}}(t);return{c(){n=$("li"),f&&f.c(),this.h()},l(t){n=u(t,"LI",{class:!0,slot:!0});var s=h(n);f&&f.l(s),s.forEach(g),this.h()},h(){v(n,"class","more-options svelte-1503aum"),v(n,"slot","more-options")},m(t,e){b(t,n,e),f&&f.m(n,null),s=!0},p(t,n){m?m.p&&(!s||163840&n)&&B(m,i,t,t[15],s?q(i,t[15],n,et):P(t[15]),ot):f&&f.p&&(!s||131072&n)&&f.p(t,s?n:-1)},i(t){s||(c(f,t),s=!0)},o(t){l(f,t),s=!1},d(t){t&&g(n),f&&f.d(t)}}}function ut(t){let n,s,E,M,k,V,D,C,T=t[0],A=[];for(let n=0;n<T.length;n+=1)A[n]=rt(at(t,T,n));const B=t=>l(A[t],1,1,(()=>{A[t]=null})),P=[{minSearchLength:t[3]},{maxOptions:t[4]},{disabled:t[5]},t[8]];function q(n){t[11](n)}function G(n){t[12](n)}function H(n){t[13](n)}let J={$$slots:{"more-options":[pt,({loadMoreOptions:t})=>({17:t}),({loadMoreOptions:t})=>t?131072:0],"loading-options":[ft],"not-enough-input":[mt],"too-many-options":[it]},$$scope:{ctx:t}};for(let t=0;t<P.length;t+=1)J=i(J,P[t]);return void 0!==t[0]&&(J.selection=t[0]),void 0!==t[1]&&(J.searchQuery=t[1]),void 0!==t[6]&&(J.focus=t[6]),E=new N({props:J}),m.push((()=>f(E,"selection",q))),m.push((()=>f(E,"searchQuery",G))),m.push((()=>f(E,"focus",H))),E.$on("change",t[14]),{c(){n=$("div");for(let t=0;t<A.length;t+=1)A[t].c();s=p(),e(E.$$.fragment),this.h()},l(t){n=u(t,"DIV",{class:!0});var e=h(n);for(let t=0;t<A.length;t+=1)A[t].l(e);s=d(e),o(E.$$.fragment,e),e.forEach(g),this.h()},h(){v(n,"class",D=x(z("autocomplete",t[2]))+" svelte-1503aum"),y(n,"focus",t[6]),y(n,"disabled",t[5])},m(t,e){b(t,n,e);for(let t=0;t<A.length;t+=1)A[t].m(n,null);L(n,s),a(E,n,null),C=!0},p(t,[e]){if(129&e){let o;for(T=t[0],o=0;o<T.length;o+=1){const a=at(t,T,o);A[o]?(A[o].p(a,e),c(A[o],1)):(A[o]=rt(a),A[o].c(),c(A[o],1),A[o].m(n,s))}for(O(),o=T.length;o<A.length;o+=1)B(o);j()}const o=312&e?Q(P,[8&e&&{minSearchLength:t[3]},16&e&&{maxOptions:t[4]},32&e&&{disabled:t[5]},256&e&&w(t[8])]):{};163864&e&&(o.$$scope={dirty:e,ctx:t}),!M&&1&e&&(M=!0,o.selection=t[0],S((()=>M=!1))),!k&&2&e&&(k=!0,o.searchQuery=t[1],S((()=>k=!1))),!V&&64&e&&(V=!0,o.focus=t[6],S((()=>V=!1))),E.$set(o),(!C||4&e&&D!==(D=x(z("autocomplete",t[2]))+" svelte-1503aum"))&&v(n,"class",D),68&e&&y(n,"focus",t[6]),36&e&&y(n,"disabled",t[5])},i(t){if(!C){for(let t=0;t<T.length;t+=1)c(A[t]);c(E.$$.fragment,t),C=!0}},o(t){A=A.filter(Boolean);for(let t=0;t<A.length;t+=1)l(A[t]);l(E.$$.fragment,t),C=!1},d(t){t&&g(n),I(A,t),r(E)}}}function ht(t,n,s){const e=["class","selection","minSearchLength","maxOptions","searchQuery","disabled"];let o=E(n,e),{$$slots:a={},$$scope:c}=n,{class:l=null}=n,{selection:r=[]}=n,{minSearchLength:m=3}=n,{maxOptions:f=1/0}=n,{searchQuery:$=""}=n,{disabled:p=!1}=n,u=!1;function h(t){s(0,r=r.filter((n=>n!==t))),d("change",{value:r})}const d=M();return t.$$set=t=>{n=i(i({},n),k(t)),s(8,o=E(n,e)),"class"in t&&s(2,l=t.class),"selection"in t&&s(0,r=t.selection),"minSearchLength"in t&&s(3,m=t.minSearchLength),"maxOptions"in t&&s(4,f=t.maxOptions),"searchQuery"in t&&s(1,$=t.searchQuery),"disabled"in t&&s(5,p=t.disabled),"$$scope"in t&&s(15,c=t.$$scope)},[r,$,l,m,f,p,u,h,o,a,t=>h(t),function(t){r=t,s(0,r)},function(t){$=t,s(1,$)},function(t){u=t,s(6,u)},function(n){V.call(this,t,n)},c]}var dt=class extends t{constructor(t){super(),n(this,t,ht,ut,s,{class:2,selection:0,minSearchLength:3,maxOptions:4,searchQuery:1,disabled:5})}};export{dt as A};
