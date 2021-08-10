import{S as e,i as t,s as l,E as n,f as s,w as a,o as i,x as o,t as r,d,F as c,G as u,H as p,I as f,J as h,h as m,c as b,b as g,K as y,L as v,l as x,M as R,N as E,O as L,P as T,Q as $}from"./client.b3364dbf.js";import{c as C}from"./classes.2453fa25.js";function N(e,t={}){const l={event:t.event||"click",transition:t.transition||150,zIndex:t.zIndex||"100",bg:t.rippleColor||null,disabled:t.disabled||!1},n=t=>function(e,t,{bg:l,zIndex:n,transition:s}){const a=parseInt(getComputedStyle(t).borderWidth.replace("px","")),i=t.getBoundingClientRect(),o=i.left,r=i.top,d=t.offsetWidth,c=t.offsetHeight,u=e.clientX-o,p=e.clientY-r,f=Math.max(u,d-u),h=Math.max(p,c-p),m=window.getComputedStyle(t),b=Math.sqrt(f*f+h*h),g=a>0?a:0,y=document.createElement("div"),v=document.createElement("div");v.className="ripple-container",y.className="ripple",y.style.marginTop="0px",y.style.marginLeft="0px",y.style.width="1px",y.style.height="1px",y.style.transition=`all ${s}ms cubic-bezier(0.4, 0, 0.2, 1)`,y.style.borderRadius="50%",y.style.pointerEvents="none",y.style.position="relative",y.style.zIndex=n,null!==l&&(y.style.backgroundColor=l);v.style.position="absolute",v.style.left=0-g+"px",v.style.top=0-g+"px",v.style.height="0",v.style.width="0",v.style.pointerEvents="none",v.style.overflow="hidden";const x=t.style.position.length>0?t.style.position:getComputedStyle(t).position;"relative"!==x&&"absolute"!==x&&(t.style.position="relative");function R(){setTimeout((()=>{y.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((()=>{v.parentNode.removeChild(v)}),s+250),setTimeout((()=>{let e=!0;for(let l=0;l<t.childNodes.length;l++)"ripple-container"===t.childNodes[l].className&&(e=!1);e&&(t.style.position="static"!==x?x:"")}),s+250)}v.appendChild(y),t.appendChild(v),y.style.marginLeft=u+"px",y.style.marginTop=p+"px",v.style.width=d+"px",v.style.height=c+"px",v.style.borderTopLeftRadius=m.borderTopLeftRadius,v.style.borderTopRightRadius=m.borderTopRightRadius,v.style.borderBottomLeftRadius=m.borderBottomLeftRadius,v.style.borderBottomRightRadius=m.borderBottomRightRadius,v.style.direction="ltr",setTimeout((()=>{y.style.width=2*b+"px",y.style.height=2*b+"px",y.style.marginLeft=u-b+"px",y.style.marginTop=p-b+"px"}),0),R()}(t,e,l);return l.disabled||e.addEventListener(l.event,n),{destroy(){e.removeEventListener(l.event,n)},update(t={}){t.disabled?e.removeEventListener(l.event,n):e.addEventListener(l.event,n)}}}function w(e,t){if(null!=t)for(const l of t)e.addEventListener(l.name,l.handler);return{destroy(){if(null!=t)for(const l of t)e.removeEventListener(l.name,l.handler)}}}function k(e){let t,l,n,a,o,c,u;const f=e[17].default,k=h(f,e,e[16],null);let B=[{type:"button"},{disabled:e[10]},{class:l=C("btn",e[0])},e[15]],I={};for(let e=0;e<B.length;e+=1)I=p(I,B[e]);return{c(){t=m("button"),k&&k.c(),this.h()},l(e){t=b(e,"BUTTON",{type:!0,disabled:!0,class:!0});var l=g(t);k&&k.l(l),l.forEach(d),this.h()},h(){y(t,I),v(t,"filled",e[1]),v(t,"outline",e[2]),v(t,"danger",e[3]),v(t,"round",e[5]),v(t,"neutral",e[4]),v(t,"rectangle",e[6]),v(t,"small",e[7]),v(t,"selected",e[8]),v(t,"svelte-s5dc6b",!0)},m(l,i){s(l,t,i),k&&k.m(t,null),o=!0,c||(u=[x(t,"click",e[19]),R(n=N.call(null,t,{disabled:e[9]||e[10]})),R(a=w.call(null,t,e[13]))],c=!0)},p(e,s){k&&k.p&&(!o||65536&s)&&E(k,f,e,e[16],s,null,null),y(t,I=L(B,[{type:"button"},(!o||1024&s)&&{disabled:e[10]},(!o||1&s&&l!==(l=C("btn",e[0])))&&{class:l},32768&s&&e[15]])),n&&T(n.update)&&1536&s&&n.update.call(null,{disabled:e[9]||e[10]}),a&&T(a.update)&&8192&s&&a.update.call(null,e[13]),v(t,"filled",e[1]),v(t,"outline",e[2]),v(t,"danger",e[3]),v(t,"round",e[5]),v(t,"neutral",e[4]),v(t,"rectangle",e[6]),v(t,"small",e[7]),v(t,"selected",e[8]),v(t,"svelte-s5dc6b",!0)},i(e){o||(r(k,e),o=!0)},o(e){i(k,e),o=!1},d(e){e&&d(t),k&&k.d(e),c=!1,$(u)}}}function B(e){let t,l,n,a,o,c,u,f,k,B,I;const P=e[17].default,z=h(P,e,e[16],null);let A=[{href:l=e[10]?null:e[11]},{rel:n=e[12]?null:"prefetch"},{"sapper:prefetch":a=!e[12]||null},{disabled:o=!!e[10]||null},{class:c=C("btn",e[0])},e[15]],M={};for(let e=0;e<A.length;e+=1)M=p(M,A[e]);return{c(){t=m("a"),z&&z.c(),this.h()},l(e){t=b(e,"A",{href:!0,rel:!0,"sapper:prefetch":!0,disabled:!0,class:!0});var l=g(t);z&&z.l(l),l.forEach(d),this.h()},h(){y(t,M),v(t,"filled",e[1]),v(t,"outline",e[2]),v(t,"danger",e[3]),v(t,"round",e[5]),v(t,"neutral",e[4]),v(t,"rectangle",e[6]),v(t,"small",e[7]),v(t,"selected",e[8]),v(t,"svelte-s5dc6b",!0)},m(l,n){s(l,t,n),z&&z.m(t,null),k=!0,B||(I=[x(t,"click",e[18]),R(u=w.call(null,t,e[13])),R(f=N.call(null,t,{disabled:e[9]||e[10]}))],B=!0)},p(e,s){z&&z.p&&(!k||65536&s)&&E(z,P,e,e[16],s,null,null),y(t,M=L(A,[(!k||3072&s&&l!==(l=e[10]?null:e[11]))&&{href:l},(!k||4096&s&&n!==(n=e[12]?null:"prefetch"))&&{rel:n},(!k||4096&s&&a!==(a=!e[12]||null))&&{"sapper:prefetch":a},(!k||1024&s&&o!==(o=!!e[10]||null))&&{disabled:o},(!k||1&s&&c!==(c=C("btn",e[0])))&&{class:c},32768&s&&e[15]])),u&&T(u.update)&&8192&s&&u.update.call(null,e[13]),f&&T(f.update)&&1536&s&&f.update.call(null,{disabled:e[9]||e[10]}),v(t,"filled",e[1]),v(t,"outline",e[2]),v(t,"danger",e[3]),v(t,"round",e[5]),v(t,"neutral",e[4]),v(t,"rectangle",e[6]),v(t,"small",e[7]),v(t,"selected",e[8]),v(t,"svelte-s5dc6b",!0)},i(e){k||(r(z,e),k=!0)},o(e){i(z,e),k=!1},d(e){e&&d(t),z&&z.d(e),B=!1,$(I)}}}function I(e){let t,l,c,u;const p=[B,k],f=[];function h(e,t){return e[11]?0:1}return t=h(e),l=f[t]=p[t](e),{c(){l.c(),c=n()},l(e){l.l(e),c=n()},m(e,l){f[t].m(e,l),s(e,c,l),u=!0},p(e,[n]){let s=t;t=h(e),t===s?f[t].p(e,n):(a(),i(f[s],1,1,(()=>{f[s]=null})),o(),l=f[t],l?l.p(e,n):(l=f[t]=p[t](e),l.c()),r(l,1),l.m(c.parentNode,c))},i(e){u||(r(l),u=!0)},o(e){i(l),u=!1},d(e){f[t].d(e),e&&d(c)}}}function P(e,t,l){const n=["class","filled","outline","danger","neutral","round","rectangle","small","selected","noRipple","disabled","href","noPrefetch","events"];let s=c(t,n),{$$slots:a={},$$scope:i}=t,{class:o=null}=t,{filled:r=!1}=t,{outline:d=!1}=t,{danger:h=!1}=t,{neutral:m=!1}=t,{round:b=!1}=t,{rectangle:g=!1}=t,{small:y=!1}=t,{selected:v=!1}=t,{noRipple:x=!1}=t,{disabled:R=!1}=t,{href:E=null}=t,{noPrefetch:L=!1}=t,{events:T=[]}=t;r&&d&&console.error("A button may not be filled and outlined at the same time"),h&&m&&console.error("A button may not be danger and neutral at the same time"),r&&v&&console.error("A button may not be filled and selected at the same time");const $=u();return e.$$set=e=>{t=p(p({},t),f(e)),l(15,s=c(t,n)),"class"in e&&l(0,o=e.class),"filled"in e&&l(1,r=e.filled),"outline"in e&&l(2,d=e.outline),"danger"in e&&l(3,h=e.danger),"neutral"in e&&l(4,m=e.neutral),"round"in e&&l(5,b=e.round),"rectangle"in e&&l(6,g=e.rectangle),"small"in e&&l(7,y=e.small),"selected"in e&&l(8,v=e.selected),"noRipple"in e&&l(9,x=e.noRipple),"disabled"in e&&l(10,R=e.disabled),"href"in e&&l(11,E=e.href),"noPrefetch"in e&&l(12,L=e.noPrefetch),"events"in e&&l(13,T=e.events),"$$scope"in e&&l(16,i=e.$$scope)},[o,r,d,h,m,b,g,y,v,x,R,E,L,T,$,s,i,a,e=>$("click",{nativeEvent:e}),e=>$("click",{nativeEvent:e})]}class z extends e{constructor(e){super(),t(this,e,P,I,l,{class:0,filled:1,outline:2,danger:3,neutral:4,round:5,rectangle:6,small:7,selected:8,noRipple:9,disabled:10,href:11,noPrefetch:12,events:13})}}export{z as B,w as e,N as r};
