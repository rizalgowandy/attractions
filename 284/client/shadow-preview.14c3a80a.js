import{S as s,i as e,s as t,j as a,k as o,m as n,t as r,o as l,p as c,C as i,h as p,r as u,c as h,b as v,v as f,d as $,e as m,f as d,g,n as b,y as x,W as j}from"./client.8835cd12.js";import{P as w,a as y}from"./popover.bbb37b61.js";function E(s){let e,t;return{c(){e=p("div"),t=u("hover me"),this.h()},l(s){e=h(s,"DIV",{class:!0});var a=v(e);t=f(a,"hover me"),a.forEach($),this.h()},h(){m(e,"class","preview svelte-u8lznm")},m(a,o){d(a,e,o),g(e,t),s[2](e)},p:b,d(t){t&&$(e),s[2](null)}}}function S(s){let e,t,a=s[0].replace(/\), /g,"),\n")+"";return{c(){e=p("div"),t=u(a),this.h()},l(s){e=h(s,"DIV",{slot:!0,class:!0});var o=v(e);t=f(o,a),o.forEach($),this.h()},h(){m(e,"slot","popover-content"),m(e,"class","value-popover svelte-u8lznm")},m(s,a){d(s,e,a),g(e,t)},p(s,e){1&e&&a!==(a=s[0].replace(/\), /g,"),\n")+"")&&x(t,a)},d(s){s&&$(e)}}}function z(s){let e,t;return e=new w({props:{position:y.LEFT,$$slots:{"popover-content":[S],default:[E]},$$scope:{ctx:s}}}),{c(){a(e.$$.fragment)},l(s){o(e.$$.fragment,s)},m(s,a){n(e,s,a),t=!0},p(s,[t]){const a={};11&t&&(a.$$scope={dirty:t,ctx:s}),e.$set(a)},i(s){t||(r(e.$$.fragment,s),t=!0)},o(s){l(e.$$.fragment,s),t=!1},d(s){c(e,s)}}}function D(s,e,t){let a,{value:o}=e;return i((function(){t(1,a.style.boxShadow=o.slice(0,-1),a)})),s.$$set=s=>{"value"in s&&t(0,o=s.value)},[o,a,function(s){j[s?"unshift":"push"]((()=>{a=s,t(1,a)}))}]}class I extends s{constructor(s){super(),e(this,s,D,z,t,{value:0})}}export{I as S};
