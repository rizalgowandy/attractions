import{S as s,i as l,s as a,j as t,k as n,m as c,t as e,o as i,p as o,h as r,q as u,r as d,c as $,b as m,u as f,v as p,d as g,e as h,V as v,f as x,g as b,O as C,P as k,Q as j,y as w,K as W,M as y,w as D,x as V,T as E}from"./client.941dfc86.js";import{B as I}from"./button.ca8ecbea.js";import{X as q}from"./x.04b20f88.js";import{c as B}from"./classes.2453fa25.js";const K=s=>({}),M=s=>({}),O=s=>({}),P=s=>({});function Q(s){let l,a;return l=new I({props:{neutral:!0,round:!0,class:"close",$$slots:{default:[S]},$$scope:{ctx:s}}}),l.$on("click",(function(){E(s[3])&&s[3].apply(this,arguments)})),{c(){t(l.$$.fragment)},l(s){n(l.$$.fragment,s)},m(s,t){c(l,s,t),a=!0},p(a,t){s=a;const n={};128&t&&(n.$$scope={dirty:t,ctx:s}),l.$set(n)},i(s){a||(e(l.$$.fragment,s),a=!0)},o(s){i(l.$$.fragment,s),a=!1},d(s){o(l,s)}}}function S(s){let l;const a=s[6]["close-icon"],r=W(a,s,s[7],P),u=r||function(s){let l,a;return l=new q({}),{c(){t(l.$$.fragment)},l(s){n(l.$$.fragment,s)},m(s,t){c(l,s,t),a=!0},i(s){a||(e(l.$$.fragment,s),a=!0)},o(s){i(l.$$.fragment,s),a=!1},d(s){o(l,s)}}}();return{c(){u&&u.c()},l(s){u&&u.l(s)},m(s,a){u&&u.m(s,a),l=!0},p(s,t){r&&r.p&&(!l||128&t)&&C(r,a,s,s[7],l?j(a,s[7],t,O):k(s[7]),P)},i(s){l||(e(u,s),l=!0)},o(s){i(u,s),l=!1},d(s){u&&u.d(s)}}}function T(s){let l,a,t,n,c;const o=s[6]["title-icon"],y=W(o,s,s[7],M);return{c(){l=r("div"),y&&y.c(),a=u(),t=d(s[4]),this.h()},l(n){l=$(n,"DIV",{class:!0});var c=m(l);y&&y.l(c),a=f(c),t=p(c,s[4]),c.forEach(g),this.h()},h(){h(l,"class",n=v(B("title",null!=s[3]&&"close-padded",s[1]))+" svelte-1a6g8xi")},m(s,n){x(s,l,n),y&&y.m(l,null),b(l,a),b(l,t),c=!0},p(s,a){y&&y.p&&(!c||128&a)&&C(y,o,s,s[7],c?j(o,s[7],a,K):k(s[7]),M),(!c||16&a)&&w(t,s[4]),(!c||10&a&&n!==(n=v(B("title",null!=s[3]&&"close-padded",s[1]))+" svelte-1a6g8xi"))&&h(l,"class",n)},i(s){c||(e(y,s),c=!0)},o(s){i(y,s),c=!1},d(s){s&&g(l),y&&y.d(s)}}}function z(s){let l,a,t,n,c,o=null!=s[3]&&Q(s),d=null!=s[4]&&T(s);const p=s[6].default,w=W(p,s,s[7],null);return{c(){l=r("div"),o&&o.c(),a=u(),d&&d.c(),t=u(),w&&w.c(),this.h()},l(s){l=$(s,"DIV",{class:!0});var n=m(l);o&&o.l(n),a=f(n),d&&d.l(n),t=f(n),w&&w.l(n),n.forEach(g),this.h()},h(){h(l,"class",n=v(B("dialog",s[0]))+" svelte-1a6g8xi"),y(l,"danger",s[2]),y(l,"constrain-width",s[5])},m(s,n){x(s,l,n),o&&o.m(l,null),b(l,a),d&&d.m(l,null),b(l,t),w&&w.m(l,null),c=!0},p(s,[r]){null!=s[3]?o?(o.p(s,r),8&r&&e(o,1)):(o=Q(s),o.c(),e(o,1),o.m(l,a)):o&&(D(),i(o,1,1,(()=>{o=null})),V()),null!=s[4]?d?(d.p(s,r),16&r&&e(d,1)):(d=T(s),d.c(),e(d,1),d.m(l,t)):d&&(D(),i(d,1,1,(()=>{d=null})),V()),w&&w.p&&(!c||128&r)&&C(w,p,s,s[7],c?j(p,s[7],r,null):k(s[7]),null),(!c||1&r&&n!==(n=v(B("dialog",s[0]))+" svelte-1a6g8xi"))&&h(l,"class",n),5&r&&y(l,"danger",s[2]),33&r&&y(l,"constrain-width",s[5])},i(s){c||(e(o),e(d),e(w,s),c=!0)},o(s){i(o),i(d),i(w,s),c=!1},d(s){s&&g(l),o&&o.d(),d&&d.d(),w&&w.d(s)}}}function A(s,l,a){let{$$slots:t={},$$scope:n}=l,{class:c=null}=l,{titleClass:e=null}=l,{danger:i=!1}=l,{closeCallback:o=null}=l,{title:r=null}=l,{constrainWidth:u=!1}=l;return s.$$set=s=>{"class"in s&&a(0,c=s.class),"titleClass"in s&&a(1,e=s.titleClass),"danger"in s&&a(2,i=s.danger),"closeCallback"in s&&a(3,o=s.closeCallback),"title"in s&&a(4,r=s.title),"constrainWidth"in s&&a(5,u=s.constrainWidth),"$$scope"in s&&a(7,n=s.$$scope)},[c,e,i,o,r,u,t,n]}var F=class extends s{constructor(s){super(),l(this,s,A,z,a,{class:0,titleClass:1,danger:2,closeCallback:3,title:4,constrainWidth:5})}};export{F as D};
