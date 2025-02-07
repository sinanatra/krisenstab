import{C as L,s as V,e as b,t as S,a as q,c as I,b as C,d as T,f as v,g as H,l as p,S as w,i as E,h as k,n as A,T as X,U as $,V as M,W as Y,x as B,w as ne,r as be,j as le,o as Fe}from"../chunks/scheduler.Bey8wJuq.js";import{t as D,S as U,i as W,a as G,c as Ce,b as z,d as K,m as J,e as Q,g as je}from"../chunks/index.BGHymtFa.js";import{b as Se}from"../chunks/paths.DDzWzIsN.js";function P(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Ie(t,e){t.d(1),e.delete(t.key)}function Ee(t,e,n,i,h,o,r,c,u,g,s,l){let a=t.length,f=o.length,_=a;const d={};for(;_--;)d[t[_].key]=_;const m=[],j=new Map,Z=new Map,x=[];for(_=f;_--;){const F=l(h,o,_),N=n(F);let O=r.get(N);O?x.push(()=>O.p(F,e)):(O=g(N,F),O.c()),j.set(N,m[_]=O),N in d&&Z.set(N,Math.abs(_-d[N]))}const ee=new Set,te=new Set;function y(F){D(F,1),F.m(c,s),r.set(F.key,F),s=F.first,f--}for(;a&&f;){const F=m[f-1],N=t[a-1],O=F.key,R=N.key;F===N?(s=F.first,a--,f--):j.has(R)?!r.has(O)||ee.has(O)?y(F):te.has(R)?a--:Z.get(O)>Z.get(R)?(te.add(O),y(F)):(ee.add(R),a--):(u(N,r),a--)}for(;a--;){const F=t[a];j.has(F.key)||u(F,r)}for(;f;)y(m[f-1]);return L(x),m}function ie(t,e,n){const i=t.slice();return i[13]=e[n],i[15]=n,i}function ae(t,e,n){const i=t.slice();return i[16]=e[n],i[15]=n,i}function se(t){let e,n=t[16]+"",i,h,o=t[15]<t[8].length-1?t[15]===t[8].length-2?" and ":", ":".",r,c,u;function g(...s){return t[10](t[16],...s)}return{c(){e=b("button"),i=S(n),r=S(o),this.h()},l(s){e=I(s,"BUTTON",{class:!0,id:!0,"data-related":!0});var l=C(e);i=T(l,n),l.forEach(v),r=T(s,o),this.h()},h(){p(e,"class","interactive svelte-859rvf"),p(e,"id",t[16]),p(e,"data-related",h=t[0].filter(g).map(oe).join(" ")),w(e,"active",t[1]===t[16]),w(e,"highlighted",t[3].has(t[16]))},m(s,l){E(s,e,l),k(e,i),E(s,r,l),c||(u=[M(e,"click",Y(t[5])),M(e,"mouseover",t[6]),M(e,"mouseout",t[7])],c=!0)},p(s,l){t=s,l&1&&h!==(h=t[0].filter(g).map(oe).join(" "))&&p(e,"data-related",h),l&258&&w(e,"active",t[1]===t[16]),l&264&&w(e,"highlighted",t[3].has(t[16]))},d(s){s&&(v(e),v(r)),c=!1,L(u)}}}function re(t){let e,n=t[13].replace("-"," ")+"",i,h,o=t[15]<t[9].length-1?t[15]===t[9].length-2?" and ":", ":".",r,c,u;function g(...s){return t[11](t[13],...s)}return{c(){e=b("button"),i=S(n),r=S(o),this.h()},l(s){e=I(s,"BUTTON",{class:!0,id:!0,"data-related":!0});var l=C(e);i=T(l,n),l.forEach(v),r=T(s,o),this.h()},h(){p(e,"class","interactive svelte-859rvf"),p(e,"id",t[13]),p(e,"data-related",h=t[0].filter(g).map(fe).join(" ")),w(e,"active",t[1]===t[13]),w(e,"highlighted",t[3].has(t[13]))},m(s,l){E(s,e,l),k(e,i),E(s,r,l),c||(u=[M(e,"click",Y(t[5])),M(e,"mouseover",t[6]),M(e,"mouseout",t[7])],c=!0)},p(s,l){t=s,l&1&&h!==(h=t[0].filter(g).map(fe).join(" "))&&p(e,"data-related",h),l&514&&w(e,"active",t[1]===t[13]),l&520&&w(e,"highlighted",t[3].has(t[13]))},d(s){s&&(v(e),v(r)),c=!1,L(u)}}}function Te(t){let e,n,i,h,o,r,c,u,g=P(t[8]),s=[];for(let f=0;f<g.length;f+=1)s[f]=se(ae(t,g,f));let l=P(t[9]),a=[];for(let f=0;f<l.length;f+=1)a[f]=re(ie(t,l,f));return{c(){e=b("section"),n=b("p"),i=S(t[4]),h=S(","),o=q(),r=b("p"),c=S(`Starting in spring 2025, we are a research and design studio working at the
    intersection of
    `);for(let f=0;f<s.length;f+=1)s[f].c();u=S(`
    We make
`);for(let f=0;f<a.length;f+=1)a[f].c();this.h()},l(f){e=I(f,"SECTION",{class:!0});var _=C(e);n=I(_,"P",{});var d=C(n);i=T(d,t[4]),h=T(d,","),d.forEach(v),o=H(_),r=I(_,"P",{});var m=C(r);c=T(m,`Starting in spring 2025, we are a research and design studio working at the
    intersection of
    `);for(let j=0;j<s.length;j+=1)s[j].l(m);u=T(m,`
    We make
`);for(let j=0;j<a.length;j+=1)a[j].l(m);m.forEach(v),_.forEach(v),this.h()},h(){p(e,"class","intro svelte-859rvf"),w(e,"fading",t[2]),w(e,"filter-active",t[1]!==null)},m(f,_){E(f,e,_),k(e,n),k(n,i),k(n,h),k(e,o),k(e,r),k(r,c);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(r,null);k(r,u);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(r,null)},p(f,[_]){if(_&491){g=P(f[8]);let d;for(d=0;d<g.length;d+=1){const m=ae(f,g,d);s[d]?s[d].p(m,_):(s[d]=se(m),s[d].c(),s[d].m(r,u))}for(;d<s.length;d+=1)s[d].d(1);s.length=g.length}if(_&747){l=P(f[9]);let d;for(d=0;d<l.length;d+=1){const m=ie(f,l,d);a[d]?a[d].p(m,_):(a[d]=re(m),a[d].c(),a[d].m(r,null))}for(;d<a.length;d+=1)a[d].d(1);a.length=l.length}_&4&&w(e,"fading",f[2]),_&2&&w(e,"filter-active",f[1]!==null)},i:A,o:A,d(f){f&&v(e),X(s,f),X(a,f)}}}const oe=t=>`${t.id} ${t.authors.join(" ")}`,fe=t=>`${t.id} ${t.authors.join(" ")}`;function Pe(t,e,n){const i=$();let{data:h=[]}=e,{activeFilter:o}=e,{fading:r}=e,{effectiveItems:c}=e,u=new Date().getHours()<12?"Good morning":new Date().getHours()<18?"Good afternoon":"Good evening";const g=m=>i("filterClick",m),s=m=>i("hover",m),l=m=>i("out",m),a=["technology","journalism","culture"],f=["interactive-experiences","spatial-installations","printed matter"],_=(m,j)=>j.domain.includes(m),d=(m,j)=>j.media.includes(m);return t.$$set=m=>{"data"in m&&n(0,h=m.data),"activeFilter"in m&&n(1,o=m.activeFilter),"fading"in m&&n(2,r=m.fading),"effectiveItems"in m&&n(3,c=m.effectiveItems)},[h,o,r,c,u,g,s,l,a,f,_,d]}class Me extends U{constructor(e){super(),W(this,e,Pe,Te,V,{data:0,activeFilter:1,fading:2,effectiveItems:3})}}function ce(t,e,n){const i=t.slice();return i[4]=e[n],i}function he(t,e,n){const i=t.slice();return i[7]=e[n],i}function ue(t){let e,n,i,h;return{c(){e=b("div"),n=b("img"),h=q(),this.h()},l(o){e=I(o,"DIV",{class:!0});var r=C(e);n=I(r,"IMG",{src:!0,alt:!0,class:!0}),h=H(r),r.forEach(v),this.h()},h(){ne(n.src,i="/media/"+t[7])||p(n,"src",i),p(n,"alt",""),p(n,"class","svelte-1tslagw"),p(e,"class","gallery-item svelte-1tslagw")},m(o,r){E(o,e,r),k(e,n),k(e,h)},p(o,r){r&1&&!ne(n.src,i="/media/"+o[7])&&p(n,"src",i)},d(o){o&&v(e)}}}function de(t,e){let n,i,h=P(e[4].images),o=[];for(let r=0;r<h.length;r+=1)o[r]=ue(he(e,h,r));return{key:t,first:null,c(){n=B();for(let r=0;r<o.length;r+=1)o[r].c();i=B(),this.h()},l(r){n=B();for(let c=0;c<o.length;c+=1)o[c].l(r);i=B(),this.h()},h(){this.first=n},m(r,c){E(r,n,c);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(r,c);E(r,i,c)},p(r,c){if(e=r,c&1){h=P(e[4].images);let u;for(u=0;u<h.length;u+=1){const g=he(e,h,u);o[u]?o[u].p(g,c):(o[u]=ue(g),o[u].c(),o[u].m(i.parentNode,i))}for(;u<o.length;u+=1)o[u].d(1);o.length=h.length}},d(r){r&&(v(n),v(i)),X(o,r)}}}function Ne(t){let e,n,i=[],h=new Map,o=P(t[0].sort(t[3]));const r=c=>c[4].id;for(let c=0;c<o.length;c+=1){let u=ce(t,o,c),g=r(u);h.set(g,i[c]=de(g,u))}return{c(){e=b("section"),n=b("div");for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){e=I(c,"SECTION",{class:!0});var u=C(e);n=I(u,"DIV",{class:!0});var g=C(n);for(let s=0;s<i.length;s+=1)i[s].l(g);g.forEach(v),u.forEach(v),this.h()},h(){p(n,"class","gallery-items svelte-1tslagw"),p(e,"class","gallery svelte-1tslagw")},m(c,u){E(c,e,u),k(e,n);for(let g=0;g<i.length;g+=1)i[g]&&i[g].m(n,null)},p(c,[u]){u&1&&(o=P(c[0].sort(c[3])),i=Ee(i,u,r,1,c,o,h,n,Ie,de,null,ce))},i:A,o:A,d(c){c&&v(e);for(let u=0;u<i.length;u+=1)i[u].d()}}}function Oe(t,e,n){let i,{data:h=[]}=e,{activeFilter:o}=e;const r=()=>.5-Math.random();return t.$$set=c=>{"data"in c&&n(1,h=c.data),"activeFilter"in c&&n(2,o=c.activeFilter)},t.$$.update=()=>{t.$$.dirty&6&&n(0,i=o?h.filter(c=>c.domain&&c.domain.includes(o)||c.media&&c.media.includes(o)||c.authors&&c.authors.includes(o)):h)},[i,h,o,r]}class De extends U{constructor(e){super(),W(this,e,Oe,Ne,V,{data:1,activeFilter:2})}}function ge(t,e,n){const i=t.slice();return i[9]=e[n],i[11]=n,i}function _e(t,e){let n,i=e[9].text+"",h,o,r,c,u,g,s=e[11]<e[0].length-1?", ":".",l,a,f;return{key:t,first:null,c(){n=b("a"),h=S(i),g=b("span"),l=S(s),this.h()},l(_){n=I(_,"A",{href:!0,id:!0,class:!0,"data-related":!0,target:!0});var d=C(n);h=T(d,i),d.forEach(v),g=I(_,"SPAN",{class:!0});var m=C(g);l=T(m,s),m.forEach(v),this.h()},h(){p(n,"href",o=e[9].link.includes("http")?e[9].link:`${e[4]}/${e[9].link}`),p(n,"id",r=e[9].id),p(n,"class","project svelte-ew8cq8"),p(n,"data-related",c=[...e[9].domain,...e[9].media,...e[9].authors].join(" ")),p(n,"target",u=e[9].link.includes("http")?"_blank":"_self"),w(n,"highlighted",e[3].has(e[9].id)),p(g,"class","static svelte-ew8cq8"),this.first=n},m(_,d){E(_,n,d),k(n,h),E(_,g,d),k(g,l),a||(f=[M(n,"click",Y(e[5])),M(n,"mouseover",e[6]),M(n,"mouseout",e[7])],a=!0)},p(_,d){e=_,d&1&&i!==(i=e[9].text+"")&&le(h,i),d&17&&o!==(o=e[9].link.includes("http")?e[9].link:`${e[4]}/${e[9].link}`)&&p(n,"href",o),d&1&&r!==(r=e[9].id)&&p(n,"id",r),d&1&&c!==(c=[...e[9].domain,...e[9].media,...e[9].authors].join(" "))&&p(n,"data-related",c),d&1&&u!==(u=e[9].link.includes("http")?"_blank":"_self")&&p(n,"target",u),d&9&&w(n,"highlighted",e[3].has(e[9].id)),d&1&&s!==(s=e[11]<e[0].length-1?", ":".")&&le(l,s)},d(_){_&&(v(n),v(g)),a=!1,L(f)}}}function qe(t){let e,n,i,h="Before forming Krisenstab, we",o,r=[],c=new Map,u=P(t[0]);const g=s=>s[9].id;for(let s=0;s<u.length;s+=1){let l=ge(t,u,s),a=g(l);c.set(a,r[s]=_e(a,l))}return{c(){e=b("section"),n=b("p"),i=b("span"),i.textContent=h,o=q();for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=I(s,"SECTION",{class:!0});var l=C(e);n=I(l,"P",{});var a=C(n);i=I(a,"SPAN",{class:!0,"data-svelte-h":!0}),be(i)!=="svelte-1hml8dq"&&(i.textContent=h),o=H(a);for(let f=0;f<r.length;f+=1)r[f].l(a);a.forEach(v),l.forEach(v),this.h()},h(){p(i,"class","static svelte-ew8cq8"),p(e,"class","project-list svelte-ew8cq8"),w(e,"fading",t[2]),w(e,"filter-active",t[1]!==null)},m(s,l){E(s,e,l),k(e,n),k(n,i),k(n,o);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(n,null)},p(s,[l]){l&249&&(u=P(s[0]),r=Ee(r,l,g,1,s,u,c,n,Ie,_e,null,ge)),l&4&&w(e,"fading",s[2]),l&2&&w(e,"filter-active",s[1]!==null)},i:A,o:A,d(s){s&&v(e);for(let l=0;l<r.length;l+=1)r[l].d()}}}function He(t,e,n){const i=$();let{data:h=[]}=e,{activeFilter:o}=e,{fading:r}=e,{effectiveItems:c}=e,{base:u}=e;const g=a=>{a.stopPropagation(),i("filterClick",a)},s=a=>i("hover",a),l=a=>i("out",a);return t.$$set=a=>{"data"in a&&n(0,h=a.data),"activeFilter"in a&&n(1,o=a.activeFilter),"fading"in a&&n(2,r=a.fading),"effectiveItems"in a&&n(3,c=a.effectiveItems),"base"in a&&n(4,u=a.base)},[h,o,r,c,u,g,s,l]}class Ae extends U{constructor(e){super(),W(this,e,He,qe,V,{data:0,activeFilter:1,fading:2,effectiveItems:3,base:4})}}function me(t,e,n){const i=t.slice();return i[9]=e[n],i[11]=n,i}function ve(t){let e,n=t[9].charAt(0).toUpperCase()+t[9].slice(1)+"",i,h,o=t[11]<t[6].length-1?t[11]===t[6].length-2?" and ":", ":"",r,c,u;function g(...s){return t[7](t[9],...s)}return{c(){e=b("span"),i=S(n),r=S(o),this.h()},l(s){e=I(s,"SPAN",{id:!0,class:!0,"data-related":!0});var l=C(e);i=T(l,n),l.forEach(v),r=T(s,o),this.h()},h(){p(e,"id",t[9]),p(e,"class","people interactive svelte-1ctfjx3"),p(e,"data-related",h=t[0].filter(g).map(pe).join(" ")),w(e,"active",t[1]===t[9]),w(e,"highlighted",t[2].has(t[9]))},m(s,l){E(s,e,l),k(e,i),E(s,r,l),c||(u=[M(e,"click",Y(t[3])),M(e,"mouseover",t[4]),M(e,"mouseout",t[5])],c=!0)},p(s,l){t=s,l&1&&h!==(h=t[0].filter(g).map(pe).join(" "))&&p(e,"data-related",h),l&66&&w(e,"active",t[1]===t[9]),l&68&&w(e,"highlighted",t[2].has(t[9]))},d(s){s&&(v(e),v(r)),c=!1,L(u)}}}function Be(t){let e,n,i=`We always welcome general inquiries and friendly hellos. Contact us
    <a href="mailto:thometnanni@protonmail.com">here</a>, or find us at our
    favourite spots around Berlin.`,h,o,r,c,u,g=P(t[6]),s=[];for(let l=0;l<g.length;l+=1)s[l]=ve(me(t,g,l));return{c(){e=b("section"),n=b("p"),n.innerHTML=i,h=q(),o=b("p"),r=S("Cheers, "),c=b("br"),u=q();for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=I(l,"SECTION",{class:!0});var a=C(e);n=I(a,"P",{"data-svelte-h":!0}),be(n)!=="svelte-12doxwd"&&(n.innerHTML=i),h=H(a),o=I(a,"P",{});var f=C(o);r=T(f,"Cheers, "),c=I(f,"BR",{}),u=H(f);for(let _=0;_<s.length;_+=1)s[_].l(f);f.forEach(v),a.forEach(v),this.h()},h(){p(e,"class","cheers")},m(l,a){E(l,e,a),k(e,n),k(e,h),k(e,o),k(o,r),k(o,c),k(o,u);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(o,null)},p(l,[a]){if(a&127){g=P(l[6]);let f;for(f=0;f<g.length;f+=1){const _=me(l,g,f);s[f]?s[f].p(_,a):(s[f]=ve(_),s[f].c(),s[f].m(o,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=g.length}},i:A,o:A,d(l){l&&v(e),X(s,l)}}}const pe=t=>`${t.id} ${t.domain.join(" ")} ${t.media.join(" ")}`;function Ge(t,e,n){const i=$();let{data:h=[]}=e,{activeFilter:o}=e,{effectiveItems:r}=e;const c=a=>i("filterClick",a),u=a=>i("hover",a),g=a=>i("out",a),s=["julian","giacomo","fidel"],l=(a,f)=>f.authors.includes(a);return t.$$set=a=>{"data"in a&&n(0,h=a.data),"activeFilter"in a&&n(1,o=a.activeFilter),"effectiveItems"in a&&n(2,r=a.effectiveItems)},[h,o,r,c,u,g,s,l]}class Le extends U{constructor(e){super(),W(this,e,Ge,Be,V,{data:0,activeFilter:1,effectiveItems:2})}}function ke(t){let e,n,i,h,o,r,c,u,g,s;return n=new Me({props:{data:t[1],activeFilter:t[0],fading:t[3],effectiveItems:t[2]}}),n.$on("filterClick",t[4]),n.$on("hover",t[5]),n.$on("out",t[6]),h=new De({props:{data:t[1],activeFilter:t[0]}}),c=new Ae({props:{data:t[1],activeFilter:t[0],fading:t[3],effectiveItems:t[2],base:Se}}),c.$on("filterClick",t[4]),c.$on("hover",t[5]),c.$on("out",t[6]),g=new Le({props:{data:t[1],activeFilter:t[0],effectiveItems:t[2]}}),g.$on("filterClick",t[4]),g.$on("hover",t[5]),g.$on("out",t[6]),{c(){e=b("div"),z(n.$$.fragment),i=q(),z(h.$$.fragment),o=q(),r=b("div"),z(c.$$.fragment),u=q(),z(g.$$.fragment),this.h()},l(l){e=I(l,"DIV",{class:!0});var a=C(e);K(n.$$.fragment,a),a.forEach(v),i=H(l),K(h.$$.fragment,l),o=H(l),r=I(l,"DIV",{class:!0});var f=C(r);K(c.$$.fragment,f),u=H(f),K(g.$$.fragment,f),f.forEach(v),this.h()},h(){p(e,"class","container svelte-1i63cu1"),p(r,"class","container svelte-1i63cu1")},m(l,a){E(l,e,a),J(n,e,null),E(l,i,a),J(h,l,a),E(l,o,a),E(l,r,a),J(c,r,null),k(r,u),J(g,r,null),s=!0},p(l,a){const f={};a&2&&(f.data=l[1]),a&1&&(f.activeFilter=l[0]),a&8&&(f.fading=l[3]),a&4&&(f.effectiveItems=l[2]),n.$set(f);const _={};a&2&&(_.data=l[1]),a&1&&(_.activeFilter=l[0]),h.$set(_);const d={};a&2&&(d.data=l[1]),a&1&&(d.activeFilter=l[0]),a&8&&(d.fading=l[3]),a&4&&(d.effectiveItems=l[2]),c.$set(d);const m={};a&2&&(m.data=l[1]),a&1&&(m.activeFilter=l[0]),a&4&&(m.effectiveItems=l[2]),g.$set(m)},i(l){s||(D(n.$$.fragment,l),D(h.$$.fragment,l),D(c.$$.fragment,l),D(g.$$.fragment,l),s=!0)},o(l){G(n.$$.fragment,l),G(h.$$.fragment,l),G(c.$$.fragment,l),G(g.$$.fragment,l),s=!1},d(l){l&&(v(e),v(i),v(o),v(r)),Q(n),Q(h,l),Q(c),Q(g)}}}function Ve(t){let e,n,i=t[1].length>0&&ke(t);return{c(){i&&i.c(),e=B()},l(h){i&&i.l(h),e=B()},m(h,o){i&&i.m(h,o),E(h,e,o),n=!0},p(h,[o]){h[1].length>0?i?(i.p(h,o),o&2&&D(i,1)):(i=ke(h),i.c(),D(i,1),i.m(e.parentNode,e)):i&&(je(),G(i,1,1,()=>{i=null}),Ce())},i(h){n||(D(i),n=!0)},o(h){G(i),n=!1},d(h){h&&v(e),i&&i.d(h)}}}function we(t){if(!t)return{id:"",related:[]};const e=t.getAttribute("data-related")||"",n=e.trim()?e.trim().split(/\s+/):[];return{id:t.id,related:n}}function Ue(t,e,n){let i=[],h=null,o=new Set,r=new Set,c=!1;function u(a){var d;a.stopPropagation();const f=a.currentTarget||((d=a.detail)==null?void 0:d.currentTarget);if(!f)return;const _=f.id;n(0,h=h===_?null:_)}function g(a){if(h)return;const f=a.currentTarget;if(!f)return;const{id:_,related:d}=we(f);n(7,o=new Set([...d,_]))}function s(){h||n(7,o=new Set)}function l(){n(0,h=null)}return Fe(async()=>{const a=await fetch("projects.json");n(1,i=await a.json());const f=()=>{h&&l()};return document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}}),t.$$.update=()=>{if(t.$$.dirty&129)if(h){const a=typeof document<"u"?document.getElementById(h):null;if(!a)n(2,r=new Set);else{const{id:f,related:_}=we(a);n(2,r=new Set([..._,f]))}}else n(2,r=o);t.$$.dirty&129&&n(3,c=h!==null||o.size>0)},[h,i,r,c,u,g,s,o]}class Ke extends U{constructor(e){super(),W(this,e,Ue,Ve,V,{})}}export{Ke as component};
