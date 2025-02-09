import{C as L,s as V,e as b,t as S,a as D,c as I,b as C,d as T,f as v,g as A,p,S as w,i as E,h as k,n as H,T as X,U as $,V as P,W as Y,l as B,B as ne,A as be,j as le,o as Fe}from"../chunks/scheduler.C_NuW-zo.js";import{a as O,S as U,i as W,t as G,c as Ce,b as z,d as K,m as J,e as Q,g as je}from"../chunks/index.Ch5Tid0H.js";import{b as Se}from"../chunks/paths.DpwZVd_j.js";function q(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Ie(t,e){t.d(1),e.delete(t.key)}function Ee(t,e,n,i,h,f,o,c,u,g,s,l){let a=t.length,r=f.length,_=a;const d={};for(;_--;)d[t[_].key]=_;const m=[],j=new Map,Z=new Map,x=[];for(_=r;_--;){const F=l(h,f,_),M=n(F);let N=o.get(M);N?x.push(()=>N.p(F,e)):(N=g(M,F),N.c()),j.set(M,m[_]=N),M in d&&Z.set(M,Math.abs(_-d[M]))}const ee=new Set,te=new Set;function y(F){O(F,1),F.m(c,s),o.set(F.key,F),s=F.first,r--}for(;a&&r;){const F=m[r-1],M=t[a-1],N=F.key,R=M.key;F===M?(s=F.first,a--,r--):j.has(R)?!o.has(N)||ee.has(N)?y(F):te.has(R)?a--:Z.get(N)>Z.get(R)?(te.add(N),y(F)):(ee.add(R),a--):(u(M,o),a--)}for(;a--;){const F=t[a];j.has(F.key)||u(F,o)}for(;r;)y(m[r-1]);return L(x),m}function ie(t,e,n){const i=t.slice();return i[13]=e[n],i[15]=n,i}function ae(t,e,n){const i=t.slice();return i[16]=e[n],i[15]=n,i}function se(t){let e,n=t[16]+"",i,h,f=t[15]<t[8].length-1?t[15]===t[8].length-2?" and ":", ":".",o,c,u;function g(...s){return t[10](t[16],...s)}return{c(){e=b("button"),i=S(n),o=S(f),this.h()},l(s){e=I(s,"BUTTON",{class:!0,id:!0,"data-related":!0});var l=C(e);i=T(l,n),l.forEach(v),o=T(s,f),this.h()},h(){p(e,"class","interactive svelte-n1cd0a"),p(e,"id",t[16]),p(e,"data-related",h=t[0].filter(g).map(re).join(" ")),w(e,"active",t[1]===t[16]),w(e,"highlighted",t[3].has(t[16]))},m(s,l){E(s,e,l),k(e,i),E(s,o,l),c||(u=[P(e,"click",Y(t[5])),P(e,"mouseover",t[6]),P(e,"mouseout",t[7])],c=!0)},p(s,l){t=s,l&1&&h!==(h=t[0].filter(g).map(re).join(" "))&&p(e,"data-related",h),l&258&&w(e,"active",t[1]===t[16]),l&264&&w(e,"highlighted",t[3].has(t[16]))},d(s){s&&(v(e),v(o)),c=!1,L(u)}}}function oe(t){let e,n=t[13].replace("-"," ")+"",i,h,f=t[15]<t[9].length-1?t[15]===t[9].length-2?" and ":", ":".",o,c,u;function g(...s){return t[11](t[13],...s)}return{c(){e=b("button"),i=S(n),o=S(f),this.h()},l(s){e=I(s,"BUTTON",{class:!0,id:!0,"data-related":!0});var l=C(e);i=T(l,n),l.forEach(v),o=T(s,f),this.h()},h(){p(e,"class","interactive svelte-n1cd0a"),p(e,"id",t[13]),p(e,"data-related",h=t[0].filter(g).map(fe).join(" ")),w(e,"active",t[1]===t[13]),w(e,"highlighted",t[3].has(t[13]))},m(s,l){E(s,e,l),k(e,i),E(s,o,l),c||(u=[P(e,"click",Y(t[5])),P(e,"mouseover",t[6]),P(e,"mouseout",t[7])],c=!0)},p(s,l){t=s,l&1&&h!==(h=t[0].filter(g).map(fe).join(" "))&&p(e,"data-related",h),l&514&&w(e,"active",t[1]===t[13]),l&520&&w(e,"highlighted",t[3].has(t[13]))},d(s){s&&(v(e),v(o)),c=!1,L(u)}}}function Te(t){let e,n,i,h,f,o,c,u,g=q(t[8]),s=[];for(let r=0;r<g.length;r+=1)s[r]=se(ae(t,g,r));let l=q(t[9]),a=[];for(let r=0;r<l.length;r+=1)a[r]=oe(ie(t,l,r));return{c(){e=b("section"),n=b("p"),i=S(t[4]),h=S(","),f=D(),o=b("p"),c=S(`Starting in spring 2025, we are a research and design studio working at the
    intersection of
    `);for(let r=0;r<s.length;r+=1)s[r].c();u=S(`
    We make
`);for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=I(r,"SECTION",{class:!0});var _=C(e);n=I(_,"P",{});var d=C(n);i=T(d,t[4]),h=T(d,","),d.forEach(v),f=A(_),o=I(_,"P",{});var m=C(o);c=T(m,`Starting in spring 2025, we are a research and design studio working at the
    intersection of
    `);for(let j=0;j<s.length;j+=1)s[j].l(m);u=T(m,`
    We make
`);for(let j=0;j<a.length;j+=1)a[j].l(m);m.forEach(v),_.forEach(v),this.h()},h(){p(e,"class","intro svelte-n1cd0a"),w(e,"fading",t[2]),w(e,"filter-active",t[1]!==null)},m(r,_){E(r,e,_),k(e,n),k(n,i),k(n,h),k(e,f),k(e,o),k(o,c);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(o,null);k(o,u);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(o,null)},p(r,[_]){if(_&491){g=q(r[8]);let d;for(d=0;d<g.length;d+=1){const m=ae(r,g,d);s[d]?s[d].p(m,_):(s[d]=se(m),s[d].c(),s[d].m(o,u))}for(;d<s.length;d+=1)s[d].d(1);s.length=g.length}if(_&747){l=q(r[9]);let d;for(d=0;d<l.length;d+=1){const m=ie(r,l,d);a[d]?a[d].p(m,_):(a[d]=oe(m),a[d].c(),a[d].m(o,null))}for(;d<a.length;d+=1)a[d].d(1);a.length=l.length}_&4&&w(e,"fading",r[2]),_&2&&w(e,"filter-active",r[1]!==null)},i:H,o:H,d(r){r&&v(e),X(s,r),X(a,r)}}}const re=t=>`${t.id} ${t.authors.join(" ")}`,fe=t=>`${t.id} ${t.authors.join(" ")}`;function qe(t,e,n){const i=$();let{data:h=[]}=e,{activeFilter:f}=e,{fading:o}=e,{effectiveItems:c}=e,u=new Date().getHours()<12?"Good morning":new Date().getHours()<18?"Good afternoon":"Good evening";const g=m=>i("filterClick",m),s=m=>i("hover",m),l=m=>i("out",m),a=["technology","journalism","culture"],r=["interactive-experiences","spatial-installations","printed matter"],_=(m,j)=>j.domain.includes(m),d=(m,j)=>j.media.includes(m);return t.$$set=m=>{"data"in m&&n(0,h=m.data),"activeFilter"in m&&n(1,f=m.activeFilter),"fading"in m&&n(2,o=m.fading),"effectiveItems"in m&&n(3,c=m.effectiveItems)},[h,f,o,c,u,g,s,l,a,r,_,d]}class Pe extends U{constructor(e){super(),W(this,e,qe,Te,V,{data:0,activeFilter:1,fading:2,effectiveItems:3})}}function ce(t,e,n){const i=t.slice();return i[4]=e[n],i}function he(t,e,n){const i=t.slice();return i[7]=e[n],i}function ue(t){let e,n,i,h;return{c(){e=b("div"),n=b("img"),h=D(),this.h()},l(f){e=I(f,"DIV",{class:!0});var o=C(e);n=I(o,"IMG",{src:!0,alt:!0,class:!0}),h=A(o),o.forEach(v),this.h()},h(){ne(n.src,i="/media/"+t[7])||p(n,"src",i),p(n,"alt",""),p(n,"class","svelte-o42r5q"),p(e,"class","gallery-item svelte-o42r5q")},m(f,o){E(f,e,o),k(e,n),k(e,h)},p(f,o){o&1&&!ne(n.src,i="/media/"+f[7])&&p(n,"src",i)},d(f){f&&v(e)}}}function de(t,e){let n,i,h=q(e[4].images),f=[];for(let o=0;o<h.length;o+=1)f[o]=ue(he(e,h,o));return{key:t,first:null,c(){n=B();for(let o=0;o<f.length;o+=1)f[o].c();i=B(),this.h()},l(o){n=B();for(let c=0;c<f.length;c+=1)f[c].l(o);i=B(),this.h()},h(){this.first=n},m(o,c){E(o,n,c);for(let u=0;u<f.length;u+=1)f[u]&&f[u].m(o,c);E(o,i,c)},p(o,c){if(e=o,c&1){h=q(e[4].images);let u;for(u=0;u<h.length;u+=1){const g=he(e,h,u);f[u]?f[u].p(g,c):(f[u]=ue(g),f[u].c(),f[u].m(i.parentNode,i))}for(;u<f.length;u+=1)f[u].d(1);f.length=h.length}},d(o){o&&(v(n),v(i)),X(f,o)}}}function Me(t){let e,n,i=[],h=new Map,f=q(t[0]);const o=c=>c[4].id;for(let c=0;c<f.length;c+=1){let u=ce(t,f,c),g=o(u);h.set(g,i[c]=de(g,u))}return{c(){e=b("section"),n=b("div");for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){e=I(c,"SECTION",{class:!0});var u=C(e);n=I(u,"DIV",{class:!0});var g=C(n);for(let s=0;s<i.length;s+=1)i[s].l(g);g.forEach(v),u.forEach(v),this.h()},h(){p(n,"class","gallery-items svelte-o42r5q"),p(e,"class","gallery svelte-o42r5q")},m(c,u){E(c,e,u),k(e,n);for(let g=0;g<i.length;g+=1)i[g]&&i[g].m(n,null)},p(c,[u]){u&1&&(f=q(c[0]),i=Ee(i,u,o,1,c,f,h,n,Ie,de,null,ce))},i:H,o:H,d(c){c&&v(e);for(let u=0;u<i.length;u+=1)i[u].d()}}}function Ne(t,e,n){let i,h,{data:f=[]}=e,{activeFilter:o}=e;return t.$$set=c=>{"data"in c&&n(1,f=c.data),"activeFilter"in c&&n(2,o=c.activeFilter)},t.$$.update=()=>{t.$$.dirty&6&&n(3,i=o?f.filter(c=>c.domain&&c.domain.includes(o)||c.media&&c.media.includes(o)||c.authors&&c.authors.includes(o)):f),t.$$.dirty&8&&n(0,h=[...i].sort(()=>.5-Math.random()))},[h,f,o,i]}class Oe extends U{constructor(e){super(),W(this,e,Ne,Me,V,{data:1,activeFilter:2})}}function ge(t,e,n){const i=t.slice();return i[9]=e[n],i[11]=n,i}function _e(t,e){let n,i=e[9].text+"",h,f,o,c,u,g,s=e[11]<e[0].length-1?", ":".",l,a,r;return{key:t,first:null,c(){n=b("a"),h=S(i),g=b("span"),l=S(s),this.h()},l(_){n=I(_,"A",{href:!0,id:!0,class:!0,"data-related":!0,target:!0});var d=C(n);h=T(d,i),d.forEach(v),g=I(_,"SPAN",{class:!0});var m=C(g);l=T(m,s),m.forEach(v),this.h()},h(){p(n,"href",f=e[9].link.includes("http")?e[9].link:`${e[4]}/${e[9].link}`),p(n,"id",o=e[9].id),p(n,"class","project svelte-ew8cq8"),p(n,"data-related",c=[...e[9].domain,...e[9].media,...e[9].authors].join(" ")),p(n,"target",u=e[9].link.includes("http")?"_blank":"_self"),w(n,"highlighted",e[3].has(e[9].id)),p(g,"class","static svelte-ew8cq8"),this.first=n},m(_,d){E(_,n,d),k(n,h),E(_,g,d),k(g,l),a||(r=[P(n,"click",Y(e[5])),P(n,"mouseover",e[6]),P(n,"mouseout",e[7])],a=!0)},p(_,d){e=_,d&1&&i!==(i=e[9].text+"")&&le(h,i),d&17&&f!==(f=e[9].link.includes("http")?e[9].link:`${e[4]}/${e[9].link}`)&&p(n,"href",f),d&1&&o!==(o=e[9].id)&&p(n,"id",o),d&1&&c!==(c=[...e[9].domain,...e[9].media,...e[9].authors].join(" "))&&p(n,"data-related",c),d&1&&u!==(u=e[9].link.includes("http")?"_blank":"_self")&&p(n,"target",u),d&9&&w(n,"highlighted",e[3].has(e[9].id)),d&1&&s!==(s=e[11]<e[0].length-1?", ":".")&&le(l,s)},d(_){_&&(v(n),v(g)),a=!1,L(r)}}}function De(t){let e,n,i,h="Before forming Krisenstab, we",f,o=[],c=new Map,u=q(t[0]);const g=s=>s[9].id;for(let s=0;s<u.length;s+=1){let l=ge(t,u,s),a=g(l);c.set(a,o[s]=_e(a,l))}return{c(){e=b("section"),n=b("p"),i=b("span"),i.textContent=h,f=D();for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){e=I(s,"SECTION",{class:!0});var l=C(e);n=I(l,"P",{});var a=C(n);i=I(a,"SPAN",{class:!0,"data-svelte-h":!0}),be(i)!=="svelte-1hml8dq"&&(i.textContent=h),f=A(a);for(let r=0;r<o.length;r+=1)o[r].l(a);a.forEach(v),l.forEach(v),this.h()},h(){p(i,"class","static svelte-ew8cq8"),p(e,"class","project-list svelte-ew8cq8"),w(e,"fading",t[2]),w(e,"filter-active",t[1]!==null)},m(s,l){E(s,e,l),k(e,n),k(n,i),k(n,f);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(n,null)},p(s,[l]){l&249&&(u=q(s[0]),o=Ee(o,l,g,1,s,u,c,n,Ie,_e,null,ge)),l&4&&w(e,"fading",s[2]),l&2&&w(e,"filter-active",s[1]!==null)},i:H,o:H,d(s){s&&v(e);for(let l=0;l<o.length;l+=1)o[l].d()}}}function Ae(t,e,n){const i=$();let{data:h=[]}=e,{activeFilter:f}=e,{fading:o}=e,{effectiveItems:c}=e,{base:u}=e;const g=a=>{a.stopPropagation(),i("filterClick",a)},s=a=>i("hover",a),l=a=>i("out",a);return t.$$set=a=>{"data"in a&&n(0,h=a.data),"activeFilter"in a&&n(1,f=a.activeFilter),"fading"in a&&n(2,o=a.fading),"effectiveItems"in a&&n(3,c=a.effectiveItems),"base"in a&&n(4,u=a.base)},[h,f,o,c,u,g,s,l]}class He extends U{constructor(e){super(),W(this,e,Ae,De,V,{data:0,activeFilter:1,fading:2,effectiveItems:3,base:4})}}function me(t,e,n){const i=t.slice();return i[9]=e[n],i[11]=n,i}function ve(t){let e,n=t[9].charAt(0).toUpperCase()+t[9].slice(1)+"",i,h,f=t[11]<t[6].length-1?t[11]===t[6].length-2?" and ":", ":"",o,c,u;function g(...s){return t[7](t[9],...s)}return{c(){e=b("span"),i=S(n),o=S(f),this.h()},l(s){e=I(s,"SPAN",{id:!0,class:!0,"data-related":!0});var l=C(e);i=T(l,n),l.forEach(v),o=T(s,f),this.h()},h(){p(e,"id",t[9]),p(e,"class","people interactive svelte-ujeo0n"),p(e,"data-related",h=t[0].filter(g).map(pe).join(" ")),w(e,"active",t[1]===t[9]),w(e,"highlighted",t[2].has(t[9]))},m(s,l){E(s,e,l),k(e,i),E(s,o,l),c||(u=[P(e,"click",Y(t[3])),P(e,"mouseover",t[4]),P(e,"mouseout",t[5])],c=!0)},p(s,l){t=s,l&1&&h!==(h=t[0].filter(g).map(pe).join(" "))&&p(e,"data-related",h),l&66&&w(e,"active",t[1]===t[9]),l&68&&w(e,"highlighted",t[2].has(t[9]))},d(s){s&&(v(e),v(o)),c=!1,L(u)}}}function Be(t){let e,n,i=`We always welcome general inquiries and friendly hellos. Contact us
    <a href="mailto:thometnanni@protonmail.com">here</a>, or find us at our
    favourite spots around Berlin.`,h,f,o,c,u,g=q(t[6]),s=[];for(let l=0;l<g.length;l+=1)s[l]=ve(me(t,g,l));return{c(){e=b("section"),n=b("p"),n.innerHTML=i,h=D(),f=b("p"),o=S("Cheers, "),c=b("br"),u=D();for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=I(l,"SECTION",{class:!0});var a=C(e);n=I(a,"P",{"data-svelte-h":!0}),be(n)!=="svelte-12doxwd"&&(n.innerHTML=i),h=A(a),f=I(a,"P",{});var r=C(f);o=T(r,"Cheers, "),c=I(r,"BR",{}),u=A(r);for(let _=0;_<s.length;_+=1)s[_].l(r);r.forEach(v),a.forEach(v),this.h()},h(){p(e,"class","cheers")},m(l,a){E(l,e,a),k(e,n),k(e,h),k(e,f),k(f,o),k(f,c),k(f,u);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(f,null)},p(l,[a]){if(a&127){g=q(l[6]);let r;for(r=0;r<g.length;r+=1){const _=me(l,g,r);s[r]?s[r].p(_,a):(s[r]=ve(_),s[r].c(),s[r].m(f,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=g.length}},i:H,o:H,d(l){l&&v(e),X(s,l)}}}const pe=t=>`${t.id} ${t.domain.join(" ")} ${t.media.join(" ")}`;function Ge(t,e,n){const i=$();let{data:h=[]}=e,{activeFilter:f}=e,{effectiveItems:o}=e;const c=a=>i("filterClick",a),u=a=>i("hover",a),g=a=>i("out",a),s=["julian","giacomo","fidel"],l=(a,r)=>r.authors.includes(a);return t.$$set=a=>{"data"in a&&n(0,h=a.data),"activeFilter"in a&&n(1,f=a.activeFilter),"effectiveItems"in a&&n(2,o=a.effectiveItems)},[h,f,o,c,u,g,s,l]}class Le extends U{constructor(e){super(),W(this,e,Ge,Be,V,{data:0,activeFilter:1,effectiveItems:2})}}function ke(t){let e,n,i,h,f,o,c,u,g,s;return n=new Pe({props:{data:t[1],activeFilter:t[0],fading:t[3],effectiveItems:t[2]}}),n.$on("filterClick",t[4]),n.$on("hover",t[5]),n.$on("out",t[6]),h=new Oe({props:{data:t[1],activeFilter:t[0]}}),c=new He({props:{data:t[1],activeFilter:t[0],fading:t[3],effectiveItems:t[2],base:Se}}),c.$on("filterClick",t[4]),c.$on("hover",t[5]),c.$on("out",t[6]),g=new Le({props:{data:t[1],activeFilter:t[0],effectiveItems:t[2]}}),g.$on("filterClick",t[4]),g.$on("hover",t[5]),g.$on("out",t[6]),{c(){e=b("div"),z(n.$$.fragment),i=D(),z(h.$$.fragment),f=D(),o=b("div"),z(c.$$.fragment),u=D(),z(g.$$.fragment),this.h()},l(l){e=I(l,"DIV",{class:!0});var a=C(e);K(n.$$.fragment,a),a.forEach(v),i=A(l),K(h.$$.fragment,l),f=A(l),o=I(l,"DIV",{class:!0});var r=C(o);K(c.$$.fragment,r),u=A(r),K(g.$$.fragment,r),r.forEach(v),this.h()},h(){p(e,"class","container svelte-1i63cu1"),p(o,"class","container svelte-1i63cu1")},m(l,a){E(l,e,a),J(n,e,null),E(l,i,a),J(h,l,a),E(l,f,a),E(l,o,a),J(c,o,null),k(o,u),J(g,o,null),s=!0},p(l,a){const r={};a&2&&(r.data=l[1]),a&1&&(r.activeFilter=l[0]),a&8&&(r.fading=l[3]),a&4&&(r.effectiveItems=l[2]),n.$set(r);const _={};a&2&&(_.data=l[1]),a&1&&(_.activeFilter=l[0]),h.$set(_);const d={};a&2&&(d.data=l[1]),a&1&&(d.activeFilter=l[0]),a&8&&(d.fading=l[3]),a&4&&(d.effectiveItems=l[2]),c.$set(d);const m={};a&2&&(m.data=l[1]),a&1&&(m.activeFilter=l[0]),a&4&&(m.effectiveItems=l[2]),g.$set(m)},i(l){s||(O(n.$$.fragment,l),O(h.$$.fragment,l),O(c.$$.fragment,l),O(g.$$.fragment,l),s=!0)},o(l){G(n.$$.fragment,l),G(h.$$.fragment,l),G(c.$$.fragment,l),G(g.$$.fragment,l),s=!1},d(l){l&&(v(e),v(i),v(f),v(o)),Q(n),Q(h,l),Q(c),Q(g)}}}function Ve(t){let e,n,i=t[1].length>0&&ke(t);return{c(){i&&i.c(),e=B()},l(h){i&&i.l(h),e=B()},m(h,f){i&&i.m(h,f),E(h,e,f),n=!0},p(h,[f]){h[1].length>0?i?(i.p(h,f),f&2&&O(i,1)):(i=ke(h),i.c(),O(i,1),i.m(e.parentNode,e)):i&&(je(),G(i,1,1,()=>{i=null}),Ce())},i(h){n||(O(i),n=!0)},o(h){G(i),n=!1},d(h){h&&v(e),i&&i.d(h)}}}function we(t){if(!t)return{id:"",related:[]};const e=t.getAttribute("data-related")||"",n=e.trim()?e.trim().split(/\s+/):[];return{id:t.id,related:n}}function Ue(t,e,n){let i=[],h=null,f=new Set,o=new Set,c=!1;function u(a){var d;a.stopPropagation();const r=a.currentTarget||((d=a.detail)==null?void 0:d.currentTarget);if(!r)return;const _=r.id;n(0,h=h===_?null:_)}function g(a){if(h)return;const r=a.currentTarget;if(!r)return;const{id:_,related:d}=we(r);n(7,f=new Set([...d,_]))}function s(){h||n(7,f=new Set)}function l(){n(0,h=null)}return Fe(async()=>{const a=await fetch("projects.json");n(1,i=await a.json());const r=()=>{h&&l()};return document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}}),t.$$.update=()=>{if(t.$$.dirty&129)if(h){const a=typeof document<"u"?document.getElementById(h):null;if(!a)n(2,o=new Set);else{const{id:r,related:_}=we(a);n(2,o=new Set([..._,r]))}}else n(2,o=f);t.$$.dirty&129&&n(3,c=h!==null||f.size>0)},[h,i,o,c,u,g,s,f]}class Ke extends U{constructor(e){super(),W(this,e,Ue,Ve,V,{})}}export{Ke as component};
