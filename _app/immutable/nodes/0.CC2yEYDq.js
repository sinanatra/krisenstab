import{s as z,e as h,c as m,b as g,f as c,l as u,i as v,k as O,o as T,m as V,a as I,g as U,h as k,u as A,p as G,q as H,t as F,r as P,d as N,v as w,j as R,n as B,w as $}from"../chunks/scheduler.Bey8wJuq.js";import{S as J,i as K,t as C,a as S,c as Q,g as W}from"../chunks/index.BGHymtFa.js";import{b as X}from"../chunks/paths.DDzWzIsN.js";import{p as Y}from"../chunks/stores.BLI7toFS.js";const Z=!0,x="always",_e=Object.freeze(Object.defineProperty({__proto__:null,prerender:Z,trailingSlash:x},Symbol.toStringTag,{value:"Module"}));function M(n){let e,s,t,l,o,i,a;function _(r,d){return r[1].url.pathname!=="/"?te:ee}let b=_(n),p=b(n);function q(r,d){return new Date().getHours()>9&&new Date().getHours()<18?le:se}let y=q()(n);const j=n[3].default,f=V(j,n,n[2],null);return{c(){e=h("a"),s=h("div"),p.c(),t=I(),l=h("div"),y.c(),o=I(),i=h("section"),f&&f.c(),this.h()},l(r){e=m(r,"A",{href:!0,class:!0});var d=g(e);s=m(d,"DIV",{class:!0});var E=g(s);p.l(E),t=U(E),l=m(E,"DIV",{class:!0});var D=g(l);y.l(D),D.forEach(c),E.forEach(c),d.forEach(c),o=U(r),i=m(r,"SECTION",{class:!0});var L=g(i);f&&f.l(L),L.forEach(c),this.h()},h(){u(l,"class","title svelte-8ul163"),u(s,"class","meta svelte-8ul163"),u(e,"href","/"),u(e,"class","svelte-8ul163"),u(i,"class","svelte-8ul163")},m(r,d){v(r,e,d),k(e,s),p.m(s,null),k(s,t),k(s,l),y.m(l,null),v(r,o,d),v(r,i,d),f&&f.m(i,null),a=!0},p(r,d){b===(b=_(r))&&p?p.p(r,d):(p.d(1),p=b(r),p&&(p.c(),p.m(s,t))),f&&f.p&&(!a||d&4)&&A(f,j,r,r[2],a?H(j,r[2],d,null):G(r[2]),null)},i(r){a||(C(f,r),a=!0)},o(r){S(f,r),a=!1},d(r){r&&(c(e),c(o),c(i)),p.d(),y.d(),f&&f.d(r)}}}function ee(n){let e,s,t="Last Updated:",l,o,i;return{c(){e=h("div"),s=h("p"),s.textContent=t,l=I(),o=h("p"),i=F(n[0]),this.h()},l(a){e=m(a,"DIV",{class:!0,style:!0});var _=g(e);s=m(_,"P",{class:!0,"data-svelte-h":!0}),P(s)!=="svelte-15sfjs7"&&(s.textContent=t),l=U(_),o=m(_,"P",{class:!0});var b=g(o);i=N(b,n[0]),b.forEach(c),_.forEach(c),this.h()},h(){u(s,"class","svelte-8ul163"),u(o,"class","svelte-8ul163"),u(e,"class","time svelte-8ul163"),w(e,"margin-bottom","1rem")},m(a,_){v(a,e,_),k(e,s),k(e,l),k(e,o),k(o,i)},p(a,_){_&1&&R(i,a[0])},d(a){a&&c(e)}}}function te(n){let e,s="←";return{c(){e=h("p"),e.textContent=s,this.h()},l(t){e=m(t,"P",{style:!0,"data-svelte-h":!0}),P(e)!=="svelte-wdz471"&&(e.textContent=s),this.h()},h(){w(e,"font-weight","bold"),w(e,"font-size","1em"),w(e,"margin-bottom","1rem")},m(t,l){v(t,e,l)},p:B,d(t){t&&c(e)}}}function se(n){let e,s;return{c(){e=h("img"),this.h()},l(t){e=m(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){$(e.src,s="/krisenstab_leisure.svg")||u(e,"src",s),u(e,"alt",""),u(e,"class","svelte-8ul163")},m(t,l){v(t,e,l)},d(t){t&&c(e)}}}function le(n){let e,s;return{c(){e=h("img"),this.h()},l(t){e=m(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){$(e.src,s="/krisenstab_work.svg")||u(e,"src",s),u(e,"alt",""),u(e,"class","svelte-8ul163")},m(t,l){v(t,e,l)},d(t){t&&c(e)}}}function ae(n){let e,s,t=n[0]&&M(n);return{c(){e=h("article"),t&&t.c(),this.h()},l(l){e=m(l,"ARTICLE",{class:!0});var o=g(e);t&&t.l(o),o.forEach(c),this.h()},h(){u(e,"class","svelte-8ul163")},m(l,o){v(l,e,o),t&&t.m(e,null),s=!0},p(l,[o]){l[0]?t?(t.p(l,o),o&1&&C(t,1)):(t=M(l),t.c(),C(t,1),t.m(e,null)):t&&(W(),S(t,1,1,()=>{t=null}),Q())},i(l){s||(C(t),s=!0)},o(l){S(t),s=!1},d(l){l&&c(e),t&&t.d()}}}function re(n,e,s){let t;O(n,Y,a=>s(1,t=a));let{$$slots:l={},$$scope:o}=e,i="";return T(async()=>{try{const a=await fetch(`${X}/lastUpdated.json`);if(a.ok){const _=await a.json();s(0,i=_.lastUpdated),console.log("Last Updated:",i)}else console.error("Failed to fetch lastUpdated.json:",a.status)}catch(a){console.error("Error fetching lastUpdated.json:",a)}}),n.$$set=a=>{"$$scope"in a&&s(2,o=a.$$scope)},[i,t,o,l]}class fe extends J{constructor(e){super(),K(this,e,re,ae,z,{})}}export{fe as component,_e as universal};
