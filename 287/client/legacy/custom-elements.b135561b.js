import{S as n,i as s,s as a,N as t,p,q as o,r as e,X as c,a2 as l,u,v as i,w as k,O as r,x as g,o as m,z as d,f as $,g as h,h as f,j as y,k as w,y as v,A as b,l as x}from"./client.c5acf11b.js";import{L as E,H as C,P as A}from"./layout.b6543d7a.js";function q(n){let s;return{c(){s=v("Custom Elements")},l(n){s=b(n,"Custom Elements")},m(n,a){w(n,s,a)},d(n){n&&f(s)}}}function L(n){let s,a,t,p,o,e,c;return{c(){s=v("Attractions components can also be used as Web Components directly using the "),a=m("a"),t=v("Custom Elements API"),p=v(". This use case is most convenient when a quick prototype is needed without including any frameworks or bundlers, where you just need to include a "),o=m("code"),e=v("script"),c=v(" tag and then use the components right away.\nAn example usage is as follows:"),this.h()},l(n){s=b(n,"Attractions components can also be used as Web Components directly using the "),a=$(n,"A",{href:!0,rel:!0});var l=h(a);t=b(l,"Custom Elements API"),l.forEach(f),p=b(n,". This use case is most convenient when a quick prototype is needed without including any frameworks or bundlers, where you just need to include a "),o=$(n,"CODE",{});var u=h(o);e=b(u,"script"),u.forEach(f),c=b(n," tag and then use the components right away.\nAn example usage is as follows:"),this.h()},h(){y(a,"href","https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"),y(a,"rel","nofollow")},m(n,l){w(n,s,l),w(n,a,l),x(a,t),w(n,p,l),w(n,o,l),x(o,e),w(n,c,l)},d(n){n&&f(s),n&&f(a),n&&f(p),n&&f(o),n&&f(c)}}}function O(n){let s,a,t,p,o,e,c,l,u,i;return{c(){s=v("As shown in the example above, events must be listened to using "),a=m("code"),t=v("$on"),p=v(" and not "),o=m("code"),e=v("addEventListener"),c=v(". Additionally, props that are passed in the HTML are only limited to props with lowercase string names. For any other props, use "),l=m("code"),u=v("$$set"),i=v(".")},l(n){s=b(n,"As shown in the example above, events must be listened to using "),a=$(n,"CODE",{});var k=h(a);t=b(k,"$on"),k.forEach(f),p=b(n," and not "),o=$(n,"CODE",{});var r=h(o);e=b(r,"addEventListener"),r.forEach(f),c=b(n,". Additionally, props that are passed in the HTML are only limited to props with lowercase string names. For any other props, use "),l=$(n,"CODE",{});var g=h(l);u=b(g,"$$set"),g.forEach(f),i=b(n,".")},m(n,k){w(n,s,k),w(n,a,k),x(a,t),w(n,p,k),w(n,o,k),x(o,e),w(n,c,k),w(n,l,k),x(l,u),w(n,i,k)},d(n){n&&f(s),n&&f(a),n&&f(p),n&&f(o),n&&f(c),n&&f(l),n&&f(i)}}}function j(n){let s,a,t,c,l,r,v,b;return s=new C({props:{$$slots:{default:[q]},$$scope:{ctx:n}}}),t=new A({props:{$$slots:{default:[L]},$$scope:{ctx:n}}}),v=new A({props:{$$slots:{default:[O]},$$scope:{ctx:n}}}),{c(){p(s.$$.fragment),a=g(),p(t.$$.fragment),c=g(),l=m("pre"),r=g(),p(v.$$.fragment),this.h()},l(n){o(s.$$.fragment,n),a=d(n),o(t.$$.fragment,n),c=d(n),l=$(n,"PRE",{class:!0}),h(l).forEach(f),r=d(n),o(v.$$.fragment,n),this.h()},h(){y(l,"class","language-html")},m(n,p){e(s,n,p),w(n,a,p),e(t,n,p),w(n,c,p),w(n,l,p),l.innerHTML='<code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/attractions<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-card</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">filled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">danger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      Alert\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-dot</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">attention</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>attention<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>\n\n    <span class="token comment">&lt;!-- camelCase props do not work (HTML is case-insensitive) --\x3e</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-switch</span> <span class="token attr-name">slotLeft</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      On?\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-switch</span><span class="token punctuation">></span></span>\n\n    <span class="token comment">&lt;!-- Cannot use the self-closing syntax! --\x3e</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-divider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-calendar</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>calendar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-calendar</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-card</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- more elements will be injected here --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n    <span class="token comment">// Or using the normal constructor</span>\n    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> Button <span class="token punctuation">&#125;</span> <span class="token operator">=</span> attractions<span class="token punctuation">;</span>\n    <span class="token keyword">new</span> <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n      target<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'container\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      props<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n        filled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> calendar <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'calendar\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// Setting props that aren\'t string</span>\n    calendar<span class="token punctuation">.</span><span class="token function">$$set</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n      year<span class="token operator">:</span> <span class="token number">2020</span><span class="token punctuation">,</span>\n      month<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Listening to events</span>\n    calendar<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">\'day-select\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You selected </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>e<span class="token punctuation">.</span>detail<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Utils are also exposed</span>\n    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> range <span class="token punctuation">&#125;</span> <span class="token operator">=</span> attractions<span class="token punctuation">.</span>utils<span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> val <span class="token keyword">of</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">&#125;</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code>',w(n,r,p),e(v,n,p),b=!0},p(n,a){const p={};2&a&&(p.$$scope={dirty:a,ctx:n}),s.$set(p);const o={};2&a&&(o.$$scope={dirty:a,ctx:n}),t.$set(o);const e={};2&a&&(e.$$scope={dirty:a,ctx:n}),v.$set(e)},i(n){b||(u(s.$$.fragment,n),u(t.$$.fragment,n),u(v.$$.fragment,n),b=!0)},o(n){i(s.$$.fragment,n),i(t.$$.fragment,n),i(v.$$.fragment,n),b=!1},d(n){k(s,n),n&&f(a),k(t,n),n&&f(c),n&&f(l),n&&f(r),k(v,n)}}}function T(n){let s,a;const r=[n[0],D];let g={$$slots:{default:[j]},$$scope:{ctx:n}};for(let n=0;n<r.length;n+=1)g=t(g,r[n]);return s=new E({props:g}),{c(){p(s.$$.fragment)},l(n){o(s.$$.fragment,n)},m(n,t){e(s,n,t),a=!0},p(n,[a]){const t=1&a?c(r,[1&a&&l(n[0]),0&a&&l(D)]):{};2&a&&(t.$$scope={dirty:a,ctx:n}),s.$set(t)},i(n){a||(u(s.$$.fragment,n),a=!0)},o(n){i(s.$$.fragment,n),a=!1},d(n){k(s,n)}}}const D={name:"Custom Elements"};function H(n,s,a){return n.$$set=n=>{a(0,s=t(t({},s),r(n)))},[s=r(s)]}class B extends n{constructor(n){super(),s(this,n,H,T,a,{})}}export{B as default,D as metadata};
