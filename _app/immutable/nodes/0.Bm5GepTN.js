import{s as P,c as $,o as D,e as O,u as V,g as q,f as z,n as A}from"../chunks/scheduler.BfJEPAwo.js";import{S as H,i as F,e as h,c as m,a as b,d as u,l as d,g,q as E,o as L,p as N,s as S,f as I,k as T,h as v,r as R,t as B,b as G,m as j,j as J}from"../chunks/index.KOKD80le.js";import{b as K}from"../chunks/paths.BoBYenVh.js";import{p as Q}from"../chunks/stores.DEdbfwXt.js";const W=!0,X="always",oe=Object.freeze(Object.defineProperty({__proto__:null,prerender:W,trailingSlash:X},Symbol.toStringTag,{value:"Module"}));function M(i){let e,s,t,a,r='<img src="/logo.png" alt="" class="svelte-134p7af"/>',c,l,n;function y(o,_){return o[1].url.pathname!=="/"?Z:Y}let k=y(i),p=k(i);const U=i[3].default,f=O(U,i,i[2],null);return{c(){e=h("a"),s=h("div"),p.c(),t=S(),a=h("div"),a.innerHTML=r,c=S(),l=h("section"),f&&f.c(),this.h()},l(o){e=m(o,"A",{href:!0,class:!0});var _=b(e);s=m(_,"DIV",{class:!0});var C=b(s);p.l(C),t=I(C),a=m(C,"DIV",{class:!0,"data-svelte-h":!0}),T(a)!=="svelte-tb094h"&&(a.innerHTML=r),C.forEach(u),_.forEach(u),c=I(o),l=m(o,"SECTION",{class:!0});var w=b(l);f&&f.l(w),w.forEach(u),this.h()},h(){d(a,"class","title svelte-134p7af"),d(s,"class","meta svelte-134p7af"),d(e,"href","/"),d(e,"class","svelte-134p7af"),d(l,"class","svelte-134p7af")},m(o,_){g(o,e,_),v(e,s),p.m(s,null),v(s,t),v(s,a),g(o,c,_),g(o,l,_),f&&f.m(l,null),n=!0},p(o,_){k===(k=y(o))&&p?p.p(o,_):(p.d(1),p=k(o),p&&(p.c(),p.m(s,t))),f&&f.p&&(!n||_&4)&&V(f,U,o,o[2],n?z(U,o[2],_,null):q(o[2]),null)},i(o){n||(E(f,o),n=!0)},o(o){L(f,o),n=!1},d(o){o&&(u(e),u(c),u(l)),p.d(),f&&f.d(o)}}}function Y(i){let e,s,t="Last Updated:",a,r,c;return{c(){e=h("div"),s=h("p"),s.textContent=t,a=S(),r=h("p"),c=B(i[0]),this.h()},l(l){e=m(l,"DIV",{class:!0,style:!0});var n=b(e);s=m(n,"P",{class:!0,"data-svelte-h":!0}),T(s)!=="svelte-15sfjs7"&&(s.textContent=t),a=I(n),r=m(n,"P",{class:!0});var y=b(r);c=G(y,i[0]),y.forEach(u),n.forEach(u),this.h()},h(){d(s,"class","svelte-134p7af"),d(r,"class","svelte-134p7af"),d(e,"class","time svelte-134p7af"),j(e,"margin-bottom","1rem")},m(l,n){g(l,e,n),v(e,s),v(e,a),v(e,r),v(r,c)},p(l,n){n&1&&J(c,l[0])},d(l){l&&u(e)}}}function Z(i){let e,s="←";return{c(){e=h("p"),e.textContent=s,this.h()},l(t){e=m(t,"P",{style:!0,"data-svelte-h":!0}),T(e)!=="svelte-p4tcat"&&(e.textContent=s),this.h()},h(){j(e,"font-weight","bold"),j(e,"font-size","1em"),j(e,"margin-bottom","1rem")},m(t,a){g(t,e,a)},p:A,d(t){t&&u(e)}}}function x(i){let e,s,t=i[0]&&M(i);return{c(){e=h("article"),t&&t.c(),this.h()},l(a){e=m(a,"ARTICLE",{class:!0});var r=b(e);t&&t.l(r),r.forEach(u),this.h()},h(){d(e,"class","svelte-134p7af")},m(a,r){g(a,e,r),t&&t.m(e,null),s=!0},p(a,[r]){a[0]?t?(t.p(a,r),r&1&&E(t,1)):(t=M(a),t.c(),E(t,1),t.m(e,null)):t&&(R(),L(t,1,1,()=>{t=null}),N())},i(a){s||(E(t),s=!0)},o(a){L(t),s=!1},d(a){a&&u(e),t&&t.d()}}}function ee(i,e,s){let t;$(i,Q,l=>s(1,t=l));let{$$slots:a={},$$scope:r}=e,c="";return D(async()=>{try{const l=await fetch(`${K}/lastUpdated.json`);if(l.ok){const n=await l.json();s(0,c=n.lastUpdated),console.log("Last Updated:",c)}else console.error("Failed to fetch lastUpdated.json:",l.status)}catch(l){console.error("Error fetching lastUpdated.json:",l)}}),i.$$set=l=>{"$$scope"in l&&s(2,r=l.$$scope)},[c,t,r,a]}class re extends H{constructor(e){super(),F(this,e,ee,x,P,{})}}export{re as component,oe as universal};
