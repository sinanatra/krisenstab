import{r as Q,s as fe,n as Y,c as ve,o as ge}from"../chunks/scheduler.CtbWrGNo.js";import{l as me,S as pe,i as _e,e as I,t as E,s as H,c as T,a as G,b as C,d as b,f as K,o as te,k as y,z as W,g as L,h as k,A as ne,B as q,v as ke,w as we,x as be,m as je,y as ye}from"../chunks/index.Dy2Y5QOO.js";import{b as $e,w as Ee}from"../chunks/paths.SROSyT7f.js";function U(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ie(t,e){t.d(1),e.delete(t.key)}function ae(t,e,n,i,p,g,o,v,_,r,s,m){let d=t.length,P=g.length,$=d;const A={};for(;$--;)A[t[$].key]=$;const z=[],N=new Map,M=new Map,J=[];for($=P;$--;){const c=m(p,g,$),w=n(c);let f=o.get(w);f?J.push(()=>f.p(c,e)):(f=r(w,c),f.c()),N.set(w,z[$]=f),w in A&&M.set(w,Math.abs($-A[w]))}const D=new Set,B=new Set;function h(c){me(c,1),c.m(v,s),o.set(c.key,c),s=c.first,P--}for(;d&&P;){const c=z[P-1],w=t[d-1],f=c.key,O=w.key;c===w?(s=c.first,d--,P--):N.has(O)?!o.has(f)||D.has(f)?h(c):B.has(O)?d--:M.get(f)>M.get(O)?(B.add(f),h(c)):(D.add(O),d--):(_(w,o),d--)}for(;d--;){const c=t[d];N.has(c.key)||_(c,o)}for(;P;)h(z[P-1]);return Q(J),z}function le(t,e,n){const i=t.slice();return i[19]=e[n],i[21]=n,i}function oe(t,e,n){const i=t.slice();return i[22]=e[n],i[21]=n,i}function se(t,e,n){const i=t.slice();return i[24]=e[n],i[21]=n,i}function re(t,e,n){const i=t.slice();return i[26]=e[n],i[21]=n,i}function ue(t){let e,n,i,p=t[21]<2?t[21]===1?" and ":", ":".",g,o,v;function _(...r){return t[7](t[26],...r)}return{c(){e=I("button"),n=E(t[26]),i=H(),g=E(p),this.h()},l(r){e=T(r,"BUTTON",{class:!0,id:!0,"data-related":!0});var s=G(e);n=C(s,t[26]),i=K(s),s.forEach(b),g=C(r,p),this.h()},h(){y(e,"class","interactive"),y(e,"id",t[26]),y(e,"data-related",t[2].filter(_).map(Pe).join(" ")),W(e,"active",t[0]===t[26])},m(r,s){L(r,e,s),k(e,n),k(e,i),L(r,g,s),o||(v=[q(e,"click",t[4]),q(e,"mouseover",t[8]),q(e,"mouseout",t[9])],o=!0)},p(r,s){t=r,s&1&&W(e,"active",t[0]===t[26])},d(r){r&&(b(e),b(g)),o=!1,Q(v)}}}function ce(t){let e,n=t[24].replace("-"," ")+"",i,p,g=t[21]<2?t[21]===1?" and ":", ":".",o,v,_;function r(...s){return t[10](t[24],...s)}return{c(){e=I("button"),i=E(n),p=H(),o=E(g),this.h()},l(s){e=T(s,"BUTTON",{class:!0,id:!0,"data-related":!0});var m=G(e);i=C(m,n),p=K(m),m.forEach(b),o=C(s,g),this.h()},h(){y(e,"class","interactive"),y(e,"id",t[24]),y(e,"data-related",t[2].filter(r).map(Ae).join(" ")),W(e,"active",t[0]===t[24])},m(s,m){L(s,e,m),k(e,i),k(e,p),L(s,o,m),v||(_=[q(e,"click",t[4]),q(e,"mouseover",t[11]),q(e,"mouseout",t[12])],v=!0)},p(s,m){t=s,m&1&&W(e,"active",t[0]===t[24])},d(s){s&&(b(e),b(o)),v=!1,Q(_)}}}function de(t,e){let n,i=e[22].text+"",p,g=e[21]<e[2].length-1?", ":".",o,v,_;return{key:t,first:null,c(){n=I("a"),p=E(i),o=E(g),this.h()},l(r){n=T(r,"A",{href:!0,id:!0,class:!0,"data-related":!0,target:!0});var s=G(n);p=C(s,i),s.forEach(b),o=C(r,g),this.h()},h(){y(n,"href",e[22].link.includes("http")?e[22].link:`${$e}/${e[22].link}`),y(n,"id",e[22].id),y(n,"class","project"),y(n,"data-related",[...e[22].domain,...e[22].media,...e[22].authors].join(" ")),y(n,"target",e[22].link.includes("http")?"_blank":"_self"),this.first=n},m(r,s){L(r,n,s),k(n,p),L(r,o,s),v||(_=[q(n,"mouseover",e[13]),q(n,"mouseout",e[14])],v=!0)},p(r,s){e=r},d(r){r&&(b(n),b(o)),v=!1,Q(_)}}}function he(t,e){let n,i=e[19].charAt(0).toUpperCase()+e[19].slice(1)+"",p,g=e[21]<2?e[21]===1?" and ":", ":".",o,v,_;function r(...m){return e[15](e[19],...m)}function s(){return e[16](e[19])}return{key:t,first:null,c(){n=I("span"),p=E(i),o=E(g),this.h()},l(m){n=T(m,"SPAN",{id:!0,class:!0,"data-related":!0});var d=G(n);p=C(d,i),d.forEach(b),o=C(m,g),this.h()},h(){y(n,"id",e[19]),y(n,"class","people interactive"),y(n,"data-related",e[2].filter(r).map(Me).join(" ")),W(n,"active",e[0]===e[19]),this.first=n},m(m,d){L(m,n,d),k(n,p),L(m,o,d),v||(_=[q(n,"click",s),q(n,"mouseover",e[17]),q(n,"mouseout",e[18])],v=!0)},p(m,d){e=m,d&1&&W(n,"active",e[0]===e[19])},d(m){m&&(b(n),b(o)),v=!1,Q(_)}}}function Ce(t){let e,n,i,p,g,o,v,_,r,s,m,d=[],P=new Map,$,A,z=`We always welcome general inquiries and friendly hellos. Contact us
        here, or find us at our favourite spots around the city.`,N,M,J="Cheers,",D,B,h=[],c=new Map,w=U(["technology","journalism","culture"]),f=[];for(let l=0;l<3;l+=1)f[l]=ue(re(t,w,l));let O=U(["interactive-experiences","spatial-installations","printed matter"]),S=[];for(let l=0;l<3;l+=1)S[l]=ce(se(t,O,l));let R=U(t[2]);const Z=l=>l[22].id;for(let l=0;l<R.length;l+=1){let u=oe(t,R,l),a=Z(u);P.set(a,d[l]=de(a,u))}let V=U(["julian","giacomo","fidel"]);const x=l=>l[19];for(let l=0;l<3;l+=1){let u=le(t,V,l),a=x(u);c.set(a,h[l]=he(a,u))}return{c(){e=I("section"),n=I("p"),i=E(t[1]),p=E(","),g=H(),o=I("p"),v=E(`Starting in spring 2025, we are a research and design studio working at
        the intersection of
        `);for(let l=0;l<3;l+=1)f[l].c();_=E(`
        We make
        `);for(let l=0;l<3;l+=1)S[l].c();r=H(),s=I("p"),m=E(`Before forming Krisenstab, we
        `);for(let l=0;l<d.length;l+=1)d[l].c();$=H(),A=I("p"),A.textContent=z,N=H(),M=I("p"),M.textContent=J,D=H(),B=I("p");for(let l=0;l<3;l+=1)h[l].c();this.h()},l(l){e=T(l,"SECTION",{class:!0});var u=G(e);n=T(u,"P",{});var a=G(n);i=C(a,t[1]),p=C(a,","),a.forEach(b),g=K(u),o=T(u,"P",{});var F=G(o);v=C(F,`Starting in spring 2025, we are a research and design studio working at
        the intersection of
        `);for(let j=0;j<3;j+=1)f[j].l(F);_=C(F,`
        We make
        `);for(let j=0;j<3;j+=1)S[j].l(F);F.forEach(b),r=K(u),s=T(u,"P",{});var X=G(s);m=C(X,`Before forming Krisenstab, we
        `);for(let j=0;j<d.length;j+=1)d[j].l(X);X.forEach(b),$=K(u),A=T(u,"P",{"data-svelte-h":!0}),te(A)!=="svelte-1h24mnv"&&(A.textContent=z),N=K(u),M=T(u,"P",{"data-svelte-h":!0}),te(M)!=="svelte-1qbr4s2"&&(M.textContent=J),D=K(u),B=T(u,"P",{});var ee=G(B);for(let j=0;j<3;j+=1)h[j].l(ee);ee.forEach(b),u.forEach(b),this.h()},h(){y(e,"class","intro svelte-1er8e3c"),W(e,"filter-active",t[0]!==null)},m(l,u){L(l,e,u),k(e,n),k(n,i),k(n,p),k(e,g),k(e,o),k(o,v);for(let a=0;a<3;a+=1)f[a]&&f[a].m(o,null);k(o,_);for(let a=0;a<3;a+=1)S[a]&&S[a].m(o,null);k(e,r),k(e,s),k(s,m);for(let a=0;a<d.length;a+=1)d[a]&&d[a].m(s,null);k(e,$),k(e,A),k(e,N),k(e,M),k(e,D),k(e,B);for(let a=0;a<3;a+=1)h[a]&&h[a].m(B,null)},p(l,[u]){if(u&117){w=U(["technology","journalism","culture"]);let a;for(a=0;a<3;a+=1){const F=re(l,w,a);f[a]?f[a].p(F,u):(f[a]=ue(F),f[a].c(),f[a].m(o,_))}for(;a<3;a+=1)f[a].d(1)}if(u&117){O=U(["interactive-experiences","spatial-installations","printed matter"]);let a;for(a=0;a<3;a+=1){const F=se(l,O,a);S[a]?S[a].p(F,u):(S[a]=ce(F),S[a].c(),S[a].m(o,null))}for(;a<3;a+=1)S[a].d(1)}u&101&&(R=U(l[2]),d=ae(d,u,Z,1,l,R,P,s,ie,de,null,oe)),u&117&&(V=U(["julian","giacomo","fidel"]),h=ae(h,u,x,1,l,V,c,B,ie,he,null,le)),u&1&&W(e,"filter-active",l[0]!==null)},i:Y,o:Y,d(l){l&&b(e),ne(f,l),ne(S,l);for(let u=0;u<d.length;u+=1)d[u].d();for(let u=0;u<3;u+=1)h[u].d()}}}function Se(){const t=new Date().getHours();return t<12?"Good morning":t<18?"Good afternoon":"Good evening"}const Pe=t=>`${t.id} ${t.authors.join(" ")}`,Ae=t=>`${t.id} ${t.authors.join(" ")}`,Me=t=>`${t.id} ${t.domain.join(" ")} ${t.media.join(" ")}`;function Fe(t,e,n){let i,p=Se();const g=[{id:"vantage",text:"democratised investigative photo matching",domain:["journalism","technology"],media:["interactive-experiences"],authors:["giacomo","fidel"],link:"https://vantage.thometnanni.net/"},{id:"modes-of-perception",text:"reconstructed and narrated the role of satellites surveillance for EU border protection",domain:["technology","journalism"],media:["spatial-installations"],authors:["julian"],link:"https://www.youtube.com/watch?v=Wji2Ic4ciOc"},{id:"Teaching",text:"taught students in coding, data work, and design",domain:[],media:[],authors:["giacomo","julian","fidel"],link:"teaching"},{id:"dither",text:"brought fast dithering to the web",domain:["technology"],media:["interactive-experiences"],authors:["fidel"],link:"https://fidelthomet.github.io/dither-dither/"},{id:"Planet",text:"visualised data of humanitarian conflicts and climate disasters for global news coverage",domain:["journalism"],media:["interactive-experiences"],authors:["julian"],link:"planet"},{id:"xingu",text:"told the entangled stories of the Kuikuro",domain:["culture"],media:["interactive-experiences","spatial-installations"],authors:["fidel"],link:"https://amazoniafuturelab.fh-potsdam.de/"},{id:"airwars",text:"analysed IDF tweets during the Gaza conflict",domain:["journalism"],media:["interactive-experiences"],authors:["giacomo"],link:"https://idf-tweets-gaza.airwars.org/"},{id:"not-a-network",text:"wrote dispersive poetry",domain:["culture"],media:["interactive-experiences"],authors:["fidel","giacomo"],link:"https://not-a-network.thometnanni.net/"},{id:"tracing",text:"explained the technology behind covid tracing",domain:["technology","journalism"],media:["interactive-experiences"],authors:["fidel"],link:"https://tracing.ft0.ch/#/"},{id:"refa",text:"juxtaposed essaying to graph-based representations",domain:["culture"],media:["interactive-experiences"],authors:["giacomo"],link:"https://refareader.fh-potsdam.de/"},{id:"ashes",text:"curated and visualised the Smithsonian Institution’s main database of active volcanoes around the world",domain:["culture"],media:["printed matter"],authors:["julian"],link:"ashes"},{id:"oceanic",text:"georeferenced the space junk that fell into the Spacecraft Cemetery",domain:["culture","journalism"],media:["spatial-installations","interactive-experiences"],authors:["julian","giacomo"],link:"oceanic-pole"},{id:"archives",text:"structured and visualised cultural archives",domain:["culture"],media:["interactive-experiences"],authors:["giacomo","julian"],link:"archives"},{id:"new-normal",text:"invited people to speculate on local futures",domain:["culture"],media:["interactive-experiences"],authors:["fidel"],link:"https://newnormalneighbourhood.org/"}];let o=Ee(null);ve(t,o,h=>n(0,i=h));function v(h){const c=h.target.id;o.update(w=>w===c?null:c)}function _(h){o.subscribe(c=>{if(c)return;const w=h.target.getAttribute("data-related").split(" ");document.querySelectorAll(".intro *").forEach(f=>{w.includes(f.id)||f===h.target?(f.classList.add("highlighted"),f.classList.remove("faded")):f.classList.add("faded")})})()}function r(){o.subscribe(h=>{h||document.querySelectorAll(".intro *").forEach(c=>{c.classList.remove("highlighted","faded")})})()}return ge(()=>{document.addEventListener("click",h=>{h.target.closest(".interactive")||(o.set(null),r())})}),[i,p,g,o,v,_,r,(h,c)=>c.domain.includes(h),()=>i===null&&_(event),()=>i===null&&r(),(h,c)=>c.media.includes(h),()=>i===null&&_(event),()=>i===null&&r(),()=>i===null&&_(event),()=>i===null&&r(),(h,c)=>c.authors.includes(h),h=>v({target:{id:h}}),()=>i===null&&_(event),()=>i===null&&r()]}class Ie extends pe{constructor(e){super(),_e(this,e,Fe,Ce,fe,{})}}function Te(t){let e,n;return e=new Ie({}),{c(){ke(e.$$.fragment)},l(i){we(e.$$.fragment,i)},m(i,p){be(e,i,p),n=!0},p:Y,i(i){n||(me(e.$$.fragment,i),n=!0)},o(i){je(e.$$.fragment,i),n=!1},d(i){ye(e,i)}}}class Le extends pe{constructor(e){super(),_e(this,e,null,Te,fe,{})}}export{Le as component};
