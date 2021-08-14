import{S as s,i as n,s as a,I as t,j as e,k as o,m as r,R as c,Y as p,t as i,o as l,p as u,J as $,q as m,h as f,u as d,c as g,b as k,d as h,e as y,f as v,r as x,v as w,g as S}from"./client.8835cd12.js";import{H as E,P as b,L as A}from"./layout.6274daa2.js";import{L as O}from"./layout-no-head.da9a5bf4.js";import{H as j}from"./h2.e065a139.js";function P(s){let n;return{c(){n=x("Migration Guide")},l(s){n=w(s,"Migration Guide")},m(s,a){v(s,n,a)},d(s){s&&h(n)}}}function H(s){let n;return{c(){n=x("Here you may find guidance on upgrading Attractions from one major version to another.")},l(s){n=w(s,"Here you may find guidance on upgrading Attractions from one major version to another.")},m(s,a){v(s,n,a)},d(s){s&&h(n)}}}function D(s){let n;return{c(){n=x("From v2.x to v3.x")},l(s){n=w(s,"From v2.x to v3.x")},m(s,a){v(s,n,a)},d(s){s&&h(n)}}}function M(s){let n;return{c(){n=x("The main change in version 3 is the migration to Sass modules.")},l(s){n=w(s,"The main change in version 3 is the migration to Sass modules.")},m(s,a){v(s,n,a)},d(s){s&&h(n)}}}function C(s){let n,a,t,e,o,r,c;return{c(){n=x("If you have existing code that used Sass for styling and was using the old "),a=f("code"),t=x("@import"),e=x(" statements, consider using the automatic "),o=f("a"),r=x("Sass Migrator"),c=x(" tool first."),this.h()},l(s){n=w(s,"If you have existing code that used Sass for styling and was using the old "),a=g(s,"CODE",{});var p=k(a);t=w(p,"@import"),p.forEach(h),e=w(s," statements, consider using the automatic "),o=g(s,"A",{href:!0,rel:!0});var i=k(o);r=w(i,"Sass Migrator"),i.forEach(h),c=w(s," tool first."),this.h()},h(){y(o,"href","https://sass-lang.com/documentation/cli/migrator"),y(o,"rel","nofollow")},m(s,p){v(s,n,p),v(s,a,p),S(a,t),v(s,e,p),v(s,o,p),S(o,r),v(s,c,p)},d(s){s&&h(n),s&&h(a),s&&h(e),s&&h(o),s&&h(c)}}}function T(s){let n,a,t,e,o,r,c,p,i,l,u,$;return{c(){n=f("strong"),a=x("Heads up"),t=x(": if your styles used imports that relied on "),e=f("code"),o=x("includePaths"),r=x(", you can still make Sass Migrator understand them by setting the "),c=f("code"),p=x("SASS_PATH"),i=x(" environment variable to the path that you previously had in your "),l=f("code"),u=x("includePaths"),$=x(" Sass compiler option.")},l(s){n=g(s,"STRONG",{});var m=k(n);a=w(m,"Heads up"),m.forEach(h),t=w(s,": if your styles used imports that relied on "),e=g(s,"CODE",{});var f=k(e);o=w(f,"includePaths"),f.forEach(h),r=w(s,", you can still make Sass Migrator understand them by setting the "),c=g(s,"CODE",{});var d=k(c);p=w(d,"SASS_PATH"),d.forEach(h),i=w(s," environment variable to the path that you previously had in your "),l=g(s,"CODE",{});var y=k(l);u=w(y,"includePaths"),y.forEach(h),$=w(s," Sass compiler option.")},m(s,m){v(s,n,m),S(n,a),v(s,t,m),v(s,e,m),S(e,o),v(s,r,m),v(s,c,m),S(c,p),v(s,i,m),v(s,l,m),S(l,u),v(s,$,m)},d(s){s&&h(n),s&&h(t),s&&h(e),s&&h(r),s&&h(c),s&&h(i),s&&h(l),s&&h($)}}}function I(s){let n,a,t,e,o,r,c;return{c(){n=x("Once your code is ready for Sass modules, replace Node Sass ("),a=f("code"),t=x("node-sass"),e=x(") with Dart Sass ("),o=f("code"),r=x("sass"),c=x(").")},l(s){n=w(s,"Once your code is ready for Sass modules, replace Node Sass ("),a=g(s,"CODE",{});var p=k(a);t=w(p,"node-sass"),p.forEach(h),e=w(s,") with Dart Sass ("),o=g(s,"CODE",{});var i=k(o);r=w(i,"sass"),i.forEach(h),c=w(s,").")},m(s,p){v(s,n,p),v(s,a,p),S(a,t),v(s,e,p),v(s,o,p),S(o,r),v(s,c,p)},d(s){s&&h(n),s&&h(a),s&&h(e),s&&h(o),s&&h(c)}}}function L(s){let n,a,t,e;return{c(){n=x("Update your "),a=f("code"),t=x("rollup.config.js"),e=x(" to use the new Attractions importers:")},l(s){n=w(s,"Update your "),a=g(s,"CODE",{});var o=k(a);t=w(o,"rollup.config.js"),o.forEach(h),e=w(s," to use the new Attractions importers:")},m(s,o){v(s,n,o),v(s,a,o),S(a,t),v(s,e,o)},d(s){s&&h(n),s&&h(a),s&&h(e)}}}function _(s){let n,a,t,e;return{c(){n=x("Lastly, if your "),a=f("code"),t=x("_attractions-theme.scss"),e=x(" had any variable overrides, move them to the module configuration.")},l(s){n=w(s,"Lastly, if your "),a=g(s,"CODE",{});var o=k(a);t=w(o,"_attractions-theme.scss"),o.forEach(h),e=w(s," had any variable overrides, move them to the module configuration.")},m(s,o){v(s,n,o),v(s,a,o),S(a,t),v(s,e,o)},d(s){s&&h(n),s&&h(a),s&&h(e)}}}function R(s){let n;return{c(){n=x("Before:")},l(s){n=w(s,"Before:")},m(s,a){v(s,n,a)},d(s){s&&h(n)}}}function G(s){let n;return{c(){n=x("After:")},l(s){n=w(s,"After:")},m(s,a){v(s,n,a)},d(s){s&&h(n)}}}function F(s){let n,a,t,c,p,$,x,w,S,A,O,F,N,B,U,q,J,Y,z,K,Q,V,W,X,Z,ss,ns,as;return n=new E({props:{$$slots:{default:[P]},$$scope:{ctx:s}}}),t=new b({props:{$$slots:{default:[H]},$$scope:{ctx:s}}}),p=new j({props:{$$slots:{default:[D]},$$scope:{ctx:s}}}),x=new b({props:{$$slots:{default:[M]},$$scope:{ctx:s}}}),S=new b({props:{$$slots:{default:[C]},$$scope:{ctx:s}}}),O=new b({props:{$$slots:{default:[T]},$$scope:{ctx:s}}}),N=new b({props:{$$slots:{default:[I]},$$scope:{ctx:s}}}),U=new b({props:{$$slots:{default:[L]},$$scope:{ctx:s}}}),z=new b({props:{$$slots:{default:[_]},$$scope:{ctx:s}}}),Q=new b({props:{$$slots:{default:[R]},$$scope:{ctx:s}}}),Z=new b({props:{$$slots:{default:[G]},$$scope:{ctx:s}}}),{c(){e(n.$$.fragment),a=m(),e(t.$$.fragment),c=m(),e(p.$$.fragment),$=m(),e(x.$$.fragment),w=m(),e(S.$$.fragment),A=m(),e(O.$$.fragment),F=m(),e(N.$$.fragment),B=m(),e(U.$$.fragment),q=m(),J=f("pre"),Y=m(),e(z.$$.fragment),K=m(),e(Q.$$.fragment),V=m(),W=f("pre"),X=m(),e(Z.$$.fragment),ss=m(),ns=f("pre"),this.h()},l(s){o(n.$$.fragment,s),a=d(s),o(t.$$.fragment,s),c=d(s),o(p.$$.fragment,s),$=d(s),o(x.$$.fragment,s),w=d(s),o(S.$$.fragment,s),A=d(s),o(O.$$.fragment,s),F=d(s),o(N.$$.fragment,s),B=d(s),o(U.$$.fragment,s),q=d(s),J=g(s,"PRE",{class:!0}),k(J).forEach(h),Y=d(s),o(z.$$.fragment,s),K=d(s),o(Q.$$.fragment,s),V=d(s),W=g(s,"PRE",{class:!0}),k(W).forEach(h),X=d(s),o(Z.$$.fragment,s),ss=d(s),ns=g(s,"PRE",{class:!0}),k(ns).forEach(h),this.h()},h(){y(J,"class","language-js"),y(W,"class","language-scss"),y(ns,"class","language-scss")},m(s,e){r(n,s,e),v(s,a,e),r(t,s,e),v(s,c,e),r(p,s,e),v(s,$,e),r(x,s,e),v(s,w,e),r(S,s,e),v(s,A,e),r(O,s,e),v(s,F,e),r(N,s,e),v(s,B,e),r(U,s,e),v(s,q,e),v(s,J,e),J.innerHTML='<code class="language-js"><span class="token keyword">import</span> autoPreprocess <span class="token keyword">from</span> <span class="token string">\'svelte-preprocess\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> makeAttractionsImporter <span class="token keyword">from</span> <span class="token string">\'attractions/importer.js\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> preprocessChain <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token function">autoPreprocess</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n    scss<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n      importer<span class="token operator">:</span> <span class="token function">makeAttractionsImporter</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n        <span class="token comment">// If you previously had a file that was overriding Attractions variables,</span>\n        <span class="token comment">//   provide the path to it here.</span>\n        <span class="token comment">// If it was empty, you may delete it, omit this parameter</span>\n        <span class="token comment">//   and call the function with no arguments.</span>\n        themeFile<span class="token operator">:</span> <span class="token string">\'./static/css/_attractions-theme.scss\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n      includePaths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./static/css\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span></code>',v(s,Y,e),r(z,s,e),v(s,K,e),r(Q,s,e),v(s,V,e),v(s,W,e),W.innerHTML='<code class="language-scss"><span class="token keyword">@import</span> <span class="token string">\'_attractions-theme.scss\'</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$font</span></span><span class="token punctuation">:</span> <span class="token string">\'Open Sans\'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$main</span></span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$my-custom-variable</span></span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></code>',v(s,X,e),r(Z,s,e),v(s,ss,e),v(s,ns,e),ns.innerHTML='<code class="language-scss"><span class="token keyword">@forward</span> <span class="token string">"~attractions/_variables"</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>\n  <span class="token property"><span class="token variable">$font</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">\'Open Sans\'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token property"><span class="token variable">$main</span></span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token property"><span class="token variable">$my-custom-variable</span></span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></code>',as=!0},p(s,a){const e={};2&a&&(e.$$scope={dirty:a,ctx:s}),n.$set(e);const o={};2&a&&(o.$$scope={dirty:a,ctx:s}),t.$set(o);const r={};2&a&&(r.$$scope={dirty:a,ctx:s}),p.$set(r);const c={};2&a&&(c.$$scope={dirty:a,ctx:s}),x.$set(c);const i={};2&a&&(i.$$scope={dirty:a,ctx:s}),S.$set(i);const l={};2&a&&(l.$$scope={dirty:a,ctx:s}),O.$set(l);const u={};2&a&&(u.$$scope={dirty:a,ctx:s}),N.$set(u);const $={};2&a&&($.$$scope={dirty:a,ctx:s}),U.$set($);const m={};2&a&&(m.$$scope={dirty:a,ctx:s}),z.$set(m);const f={};2&a&&(f.$$scope={dirty:a,ctx:s}),Q.$set(f);const d={};2&a&&(d.$$scope={dirty:a,ctx:s}),Z.$set(d)},i(s){as||(i(n.$$.fragment,s),i(t.$$.fragment,s),i(p.$$.fragment,s),i(x.$$.fragment,s),i(S.$$.fragment,s),i(O.$$.fragment,s),i(N.$$.fragment,s),i(U.$$.fragment,s),i(z.$$.fragment,s),i(Q.$$.fragment,s),i(Z.$$.fragment,s),as=!0)},o(s){l(n.$$.fragment,s),l(t.$$.fragment,s),l(p.$$.fragment,s),l(x.$$.fragment,s),l(S.$$.fragment,s),l(O.$$.fragment,s),l(N.$$.fragment,s),l(U.$$.fragment,s),l(z.$$.fragment,s),l(Q.$$.fragment,s),l(Z.$$.fragment,s),as=!1},d(s){u(n,s),s&&h(a),u(t,s),s&&h(c),u(p,s),s&&h($),u(x,s),s&&h(w),u(S,s),s&&h(A),u(O,s),s&&h(F),u(N,s),s&&h(B),u(U,s),s&&h(q),s&&h(J),s&&h(Y),u(z,s),s&&h(K),u(Q,s),s&&h(V),s&&h(W),s&&h(X),u(Z,s),s&&h(ss),s&&h(ns)}}}function N(s){let n,a;const $=[s[0]];let m={$$slots:{default:[F]},$$scope:{ctx:s}};for(let s=0;s<$.length;s+=1)m=t(m,$[s]);return n=new O({props:m}),{c(){e(n.$$.fragment)},l(s){o(n.$$.fragment,s)},m(s,t){r(n,s,t),a=!0},p(s,[a]){const t=1&a?c($,[p(s[0])]):{};2&a&&(t.$$scope={dirty:a,ctx:s}),n.$set(t)},i(s){a||(i(n.$$.fragment,s),a=!0)},o(s){l(n.$$.fragment,s),a=!1},d(s){u(n,s)}}}function B(s,n,a){return s.$$set=s=>{a(0,n=t(t({},n),$(s)))},[n=$(n)]}class U extends s{constructor(s){super(),n(this,s,B,N,a,{})}}function q(s){let n,a;return n=new U({}),{c(){e(n.$$.fragment)},l(s){o(n.$$.fragment,s)},m(s,t){r(n,s,t),a=!0},i(s){a||(i(n.$$.fragment,s),a=!0)},o(s){l(n.$$.fragment,s),a=!1},d(s){u(n,s)}}}function J(s){let n,a;const $=[s[0],Y];let m={$$slots:{default:[q]},$$scope:{ctx:s}};for(let s=0;s<$.length;s+=1)m=t(m,$[s]);return n=new A({props:m}),{c(){e(n.$$.fragment)},l(s){o(n.$$.fragment,s)},m(s,t){r(n,s,t),a=!0},p(s,[a]){const t=1&a?c($,[1&a&&p(s[0]),0&a&&p(Y)]):{};2&a&&(t.$$scope={dirty:a,ctx:s}),n.$set(t)},i(s){a||(i(n.$$.fragment,s),a=!0)},o(s){l(n.$$.fragment,s),a=!1},d(s){u(n,s)}}}const Y={name:"Migration Guide"};function z(s,n,a){return s.$$set=s=>{a(0,n=t(t({},n),$(s)))},[n=$(n)]}class K extends s{constructor(s){super(),n(this,s,z,J,a,{})}}export{K as default,Y as metadata};
