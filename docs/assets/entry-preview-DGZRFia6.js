const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-18-CdbX7kl_.js","./index-P7CUG52Y.js","./index-BYF75vwM.js"])))=>i.map(i=>d[i]);
import{_ as Te}from"./iframe-CdQeF2SM.js";import{r as Pe,a as M,R as Y}from"./index-P7CUG52Y.js";var Ce=Object.create,me=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,Se=Object.getOwnPropertyNames,De=Object.getPrototypeOf,qe=Object.prototype.hasOwnProperty,N=(c,t)=>function(){return t||(0,c[Se(c)[0]])((t={exports:{}}).exports,t),t.exports},Ge=(c,t)=>{for(var r in t)me(c,r,{get:t[r],enumerable:!0})},Fe=(c,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Se(t))!qe.call(c,a)&&a!==r&&me(c,a,{get:()=>t[a],enumerable:!(o=ye(t,a))||o.enumerable});return c},Ue=(c,t,r)=>(r=c!=null?Ce(De(c)):{},Fe(!c||!c.__esModule?me(r,"default",{value:c,enumerable:!0}):r,c)),oe={exports:{}},le={};/**
 * @license React
 * react-dom-test-utils.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie;function be(){if(Ie)return le;Ie=1;var c=Pe(),t=!1;return le.act=function(r){return t===!1&&(t=!0,console.error("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")),c.act(r)},le}var _e;function Ve(){return _e||(_e=1,oe.exports=be()),oe.exports}Ve();var ue={};const{global:Xe}=__STORYBOOK_MODULE_GLOBAL__;var Z=N({"../../node_modules/semver/internal/constants.js"(c,t){var r="2.0.0",o=Number.MAX_SAFE_INTEGER||9007199254740991,a=16,i=250,u=["major","premajor","minor","preminor","patch","prepatch","prerelease"];t.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:a,MAX_SAFE_BUILD_LENGTH:i,MAX_SAFE_INTEGER:o,RELEASE_TYPES:u,SEMVER_SPEC_VERSION:r,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}}}),J=N({"../../node_modules/semver/internal/debug.js"(c,t){var r=typeof process=="object"&&ue&&ue.NODE_DEBUG&&/\bsemver\b/i.test(ue.NODE_DEBUG)?(...o)=>console.error("SEMVER",...o):()=>{};t.exports=r}}),z=N({"../../node_modules/semver/internal/re.js"(c,t){var{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:o,MAX_LENGTH:a}=Z(),i=J();c=t.exports={};var u=c.re=[],h=c.safeRe=[],e=c.src=[],v=c.safeSrc=[],n=c.t={},f=0,s="[a-zA-Z0-9-]",p=[["\\s",1],["\\d",a],[s,o]],E=I=>{for(let[S,g]of p)I=I.split(`${S}*`).join(`${S}{0,${g}}`).split(`${S}+`).join(`${S}{1,${g}}`);return I},l=(I,S,g)=>{let y=E(S),D=f++;i(I,D,S),n[I]=D,e[D]=S,v[D]=y,u[D]=new RegExp(S,g?"g":void 0),h[D]=new RegExp(y,g?"g":void 0)};l("NUMERICIDENTIFIER","0|[1-9]\\d*"),l("NUMERICIDENTIFIERLOOSE","\\d+"),l("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${s}*`),l("MAINVERSION",`(${e[n.NUMERICIDENTIFIER]})\\.(${e[n.NUMERICIDENTIFIER]})\\.(${e[n.NUMERICIDENTIFIER]})`),l("MAINVERSIONLOOSE",`(${e[n.NUMERICIDENTIFIERLOOSE]})\\.(${e[n.NUMERICIDENTIFIERLOOSE]})\\.(${e[n.NUMERICIDENTIFIERLOOSE]})`),l("PRERELEASEIDENTIFIER",`(?:${e[n.NUMERICIDENTIFIER]}|${e[n.NONNUMERICIDENTIFIER]})`),l("PRERELEASEIDENTIFIERLOOSE",`(?:${e[n.NUMERICIDENTIFIERLOOSE]}|${e[n.NONNUMERICIDENTIFIER]})`),l("PRERELEASE",`(?:-(${e[n.PRERELEASEIDENTIFIER]}(?:\\.${e[n.PRERELEASEIDENTIFIER]})*))`),l("PRERELEASELOOSE",`(?:-?(${e[n.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${e[n.PRERELEASEIDENTIFIERLOOSE]})*))`),l("BUILDIDENTIFIER",`${s}+`),l("BUILD",`(?:\\+(${e[n.BUILDIDENTIFIER]}(?:\\.${e[n.BUILDIDENTIFIER]})*))`),l("FULLPLAIN",`v?${e[n.MAINVERSION]}${e[n.PRERELEASE]}?${e[n.BUILD]}?`),l("FULL",`^${e[n.FULLPLAIN]}$`),l("LOOSEPLAIN",`[v=\\s]*${e[n.MAINVERSIONLOOSE]}${e[n.PRERELEASELOOSE]}?${e[n.BUILD]}?`),l("LOOSE",`^${e[n.LOOSEPLAIN]}$`),l("GTLT","((?:<|>)?=?)"),l("XRANGEIDENTIFIERLOOSE",`${e[n.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),l("XRANGEIDENTIFIER",`${e[n.NUMERICIDENTIFIER]}|x|X|\\*`),l("XRANGEPLAIN",`[v=\\s]*(${e[n.XRANGEIDENTIFIER]})(?:\\.(${e[n.XRANGEIDENTIFIER]})(?:\\.(${e[n.XRANGEIDENTIFIER]})(?:${e[n.PRERELEASE]})?${e[n.BUILD]}?)?)?`),l("XRANGEPLAINLOOSE",`[v=\\s]*(${e[n.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[n.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[n.XRANGEIDENTIFIERLOOSE]})(?:${e[n.PRERELEASELOOSE]})?${e[n.BUILD]}?)?)?`),l("XRANGE",`^${e[n.GTLT]}\\s*${e[n.XRANGEPLAIN]}$`),l("XRANGELOOSE",`^${e[n.GTLT]}\\s*${e[n.XRANGEPLAINLOOSE]}$`),l("COERCEPLAIN",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),l("COERCE",`${e[n.COERCEPLAIN]}(?:$|[^\\d])`),l("COERCEFULL",e[n.COERCEPLAIN]+`(?:${e[n.PRERELEASE]})?(?:${e[n.BUILD]})?(?:$|[^\\d])`),l("COERCERTL",e[n.COERCE],!0),l("COERCERTLFULL",e[n.COERCEFULL],!0),l("LONETILDE","(?:~>?)"),l("TILDETRIM",`(\\s*)${e[n.LONETILDE]}\\s+`,!0),c.tildeTrimReplace="$1~",l("TILDE",`^${e[n.LONETILDE]}${e[n.XRANGEPLAIN]}$`),l("TILDELOOSE",`^${e[n.LONETILDE]}${e[n.XRANGEPLAINLOOSE]}$`),l("LONECARET","(?:\\^)"),l("CARETTRIM",`(\\s*)${e[n.LONECARET]}\\s+`,!0),c.caretTrimReplace="$1^",l("CARET",`^${e[n.LONECARET]}${e[n.XRANGEPLAIN]}$`),l("CARETLOOSE",`^${e[n.LONECARET]}${e[n.XRANGEPLAINLOOSE]}$`),l("COMPARATORLOOSE",`^${e[n.GTLT]}\\s*(${e[n.LOOSEPLAIN]})$|^$`),l("COMPARATOR",`^${e[n.GTLT]}\\s*(${e[n.FULLPLAIN]})$|^$`),l("COMPARATORTRIM",`(\\s*)${e[n.GTLT]}\\s*(${e[n.LOOSEPLAIN]}|${e[n.XRANGEPLAIN]})`,!0),c.comparatorTrimReplace="$1$2$3",l("HYPHENRANGE",`^\\s*(${e[n.XRANGEPLAIN]})\\s+-\\s+(${e[n.XRANGEPLAIN]})\\s*$`),l("HYPHENRANGELOOSE",`^\\s*(${e[n.XRANGEPLAINLOOSE]})\\s+-\\s+(${e[n.XRANGEPLAINLOOSE]})\\s*$`),l("STAR","(<|>)?=?\\s*\\*"),l("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),l("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")}}),he=N({"../../node_modules/semver/internal/parse-options.js"(c,t){var r=Object.freeze({loose:!0}),o=Object.freeze({}),a=i=>i?typeof i!="object"?r:i:o;t.exports=a}}),ge=N({"../../node_modules/semver/internal/identifiers.js"(c,t){var r=/^[0-9]+$/,o=(i,u)=>{let h=r.test(i),e=r.test(u);return h&&e&&(i=+i,u=+u),i===u?0:h&&!e?-1:e&&!h?1:i<u?-1:1},a=(i,u)=>o(u,i);t.exports={compareIdentifiers:o,rcompareIdentifiers:a}}}),G=N({"../../node_modules/semver/classes/semver.js"(c,t){var r=J(),{MAX_LENGTH:o,MAX_SAFE_INTEGER:a}=Z(),{safeRe:i,safeSrc:u,t:h}=z(),e=he(),{compareIdentifiers:v}=ge(),n=class V{constructor(s,p){if(p=e(p),s instanceof V){if(s.loose===!!p.loose&&s.includePrerelease===!!p.includePrerelease)return s;s=s.version}else if(typeof s!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof s}".`);if(s.length>o)throw new TypeError(`version is longer than ${o} characters`);r("SemVer",s,p),this.options=p,this.loose=!!p.loose,this.includePrerelease=!!p.includePrerelease;let E=s.trim().match(p.loose?i[h.LOOSE]:i[h.FULL]);if(!E)throw new TypeError(`Invalid Version: ${s}`);if(this.raw=s,this.major=+E[1],this.minor=+E[2],this.patch=+E[3],this.major>a||this.major<0)throw new TypeError("Invalid major version");if(this.minor>a||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>a||this.patch<0)throw new TypeError("Invalid patch version");E[4]?this.prerelease=E[4].split(".").map(l=>{if(/^[0-9]+$/.test(l)){let I=+l;if(I>=0&&I<a)return I}return l}):this.prerelease=[],this.build=E[5]?E[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(s){if(r("SemVer.compare",this.version,this.options,s),!(s instanceof V)){if(typeof s=="string"&&s===this.version)return 0;s=new V(s,this.options)}return s.version===this.version?0:this.compareMain(s)||this.comparePre(s)}compareMain(s){return s instanceof V||(s=new V(s,this.options)),v(this.major,s.major)||v(this.minor,s.minor)||v(this.patch,s.patch)}comparePre(s){if(s instanceof V||(s=new V(s,this.options)),this.prerelease.length&&!s.prerelease.length)return-1;if(!this.prerelease.length&&s.prerelease.length)return 1;if(!this.prerelease.length&&!s.prerelease.length)return 0;let p=0;do{let E=this.prerelease[p],l=s.prerelease[p];if(r("prerelease compare",p,E,l),E===void 0&&l===void 0)return 0;if(l===void 0)return 1;if(E===void 0)return-1;if(E!==l)return v(E,l)}while(++p)}compareBuild(s){s instanceof V||(s=new V(s,this.options));let p=0;do{let E=this.build[p],l=s.build[p];if(r("build compare",p,E,l),E===void 0&&l===void 0)return 0;if(l===void 0)return 1;if(E===void 0)return-1;if(E!==l)return v(E,l)}while(++p)}inc(s,p,E){if(s.startsWith("pre")){if(!p&&E===!1)throw new Error("invalid increment argument: identifier is empty");if(p){let l=new RegExp(`^${this.options.loose?u[h.PRERELEASELOOSE]:u[h.PRERELEASE]}$`),I=`-${p}`.match(l);if(!I||I[1]!==p)throw new Error(`invalid identifier: ${p}`)}}switch(s){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",p,E);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",p,E);break;case"prepatch":this.prerelease.length=0,this.inc("patch",p,E),this.inc("pre",p,E);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",p,E),this.inc("pre",p,E);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let l=Number(E)?1:0;if(this.prerelease.length===0)this.prerelease=[l];else{let I=this.prerelease.length;for(;--I>=0;)typeof this.prerelease[I]=="number"&&(this.prerelease[I]++,I=-2);if(I===-1){if(p===this.prerelease.join(".")&&E===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(l)}}if(p){let I=[p,l];E===!1&&(I=[p]),v(this.prerelease[0],p)===0?isNaN(this.prerelease[1])&&(this.prerelease=I):this.prerelease=I}break}default:throw new Error(`invalid increment argument: ${s}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};t.exports=n}}),H=N({"../../node_modules/semver/functions/parse.js"(c,t){var r=G(),o=(a,i,u=!1)=>{if(a instanceof r)return a;try{return new r(a,i)}catch(h){if(!u)return null;throw h}};t.exports=o}}),Me=N({"../../node_modules/semver/functions/valid.js"(c,t){var r=H(),o=(a,i)=>{let u=r(a,i);return u?u.version:null};t.exports=o}}),ke=N({"../../node_modules/semver/functions/clean.js"(c,t){var r=H(),o=(a,i)=>{let u=r(a.trim().replace(/^[=v]+/,""),i);return u?u.version:null};t.exports=o}}),He=N({"../../node_modules/semver/functions/inc.js"(c,t){var r=G(),o=(a,i,u,h,e)=>{typeof u=="string"&&(e=h,h=u,u=void 0);try{return new r(a instanceof r?a.version:a,u).inc(i,h,e).version}catch{return null}};t.exports=o}}),We=N({"../../node_modules/semver/functions/diff.js"(c,t){var r=H(),o=(a,i)=>{let u=r(a,null,!0),h=r(i,null,!0),e=u.compare(h);if(e===0)return null;let v=e>0,n=v?u:h,f=v?h:u,s=!!n.prerelease.length;if(f.prerelease.length&&!s){if(!f.patch&&!f.minor)return"major";if(f.compareMain(n)===0)return f.minor&&!f.patch?"minor":"patch"}let p=s?"pre":"";return u.major!==h.major?p+"major":u.minor!==h.minor?p+"minor":u.patch!==h.patch?p+"patch":"prerelease"};t.exports=o}}),Be=N({"../../node_modules/semver/functions/major.js"(c,t){var r=G(),o=(a,i)=>new r(a,i).major;t.exports=o}}),Ye=N({"../../node_modules/semver/functions/minor.js"(c,t){var r=G(),o=(a,i)=>new r(a,i).minor;t.exports=o}}),ze=N({"../../node_modules/semver/functions/patch.js"(c,t){var r=G(),o=(a,i)=>new r(a,i).patch;t.exports=o}}),Ke=N({"../../node_modules/semver/functions/prerelease.js"(c,t){var r=H(),o=(a,i)=>{let u=r(a,i);return u&&u.prerelease.length?u.prerelease:null};t.exports=o}}),U=N({"../../node_modules/semver/functions/compare.js"(c,t){var r=G(),o=(a,i,u)=>new r(a,u).compare(new r(i,u));t.exports=o}}),Qe=N({"../../node_modules/semver/functions/rcompare.js"(c,t){var r=U(),o=(a,i,u)=>r(i,a,u);t.exports=o}}),Ze=N({"../../node_modules/semver/functions/compare-loose.js"(c,t){var r=U(),o=(a,i)=>r(a,i,!0);t.exports=o}}),fe=N({"../../node_modules/semver/functions/compare-build.js"(c,t){var r=G(),o=(a,i,u)=>{let h=new r(a,u),e=new r(i,u);return h.compare(e)||h.compareBuild(e)};t.exports=o}}),Je=N({"../../node_modules/semver/functions/sort.js"(c,t){var r=fe(),o=(a,i)=>a.sort((u,h)=>r(u,h,i));t.exports=o}}),er=N({"../../node_modules/semver/functions/rsort.js"(c,t){var r=fe(),o=(a,i)=>a.sort((u,h)=>r(h,u,i));t.exports=o}}),ee=N({"../../node_modules/semver/functions/gt.js"(c,t){var r=U(),o=(a,i,u)=>r(a,i,u)>0;t.exports=o}}),ve=N({"../../node_modules/semver/functions/lt.js"(c,t){var r=U(),o=(a,i,u)=>r(a,i,u)<0;t.exports=o}}),Ae=N({"../../node_modules/semver/functions/eq.js"(c,t){var r=U(),o=(a,i,u)=>r(a,i,u)===0;t.exports=o}}),we=N({"../../node_modules/semver/functions/neq.js"(c,t){var r=U(),o=(a,i,u)=>r(a,i,u)!==0;t.exports=o}}),de=N({"../../node_modules/semver/functions/gte.js"(c,t){var r=U(),o=(a,i,u)=>r(a,i,u)>=0;t.exports=o}}),Re=N({"../../node_modules/semver/functions/lte.js"(c,t){var r=U(),o=(a,i,u)=>r(a,i,u)<=0;t.exports=o}}),xe=N({"../../node_modules/semver/functions/cmp.js"(c,t){var r=Ae(),o=we(),a=ee(),i=de(),u=ve(),h=Re(),e=(v,n,f,s)=>{switch(n){case"===":return typeof v=="object"&&(v=v.version),typeof f=="object"&&(f=f.version),v===f;case"!==":return typeof v=="object"&&(v=v.version),typeof f=="object"&&(f=f.version),v!==f;case"":case"=":case"==":return r(v,f,s);case"!=":return o(v,f,s);case">":return a(v,f,s);case">=":return i(v,f,s);case"<":return u(v,f,s);case"<=":return h(v,f,s);default:throw new TypeError(`Invalid operator: ${n}`)}};t.exports=e}}),rr=N({"../../node_modules/semver/functions/coerce.js"(c,t){var r=G(),o=H(),{safeRe:a,t:i}=z(),u=(h,e)=>{if(h instanceof r)return h;if(typeof h=="number"&&(h=String(h)),typeof h!="string")return null;e=e||{};let v=null;if(!e.rtl)v=h.match(e.includePrerelease?a[i.COERCEFULL]:a[i.COERCE]);else{let l=e.includePrerelease?a[i.COERCERTLFULL]:a[i.COERCERTL],I;for(;(I=l.exec(h))&&(!v||v.index+v[0].length!==h.length);)(!v||I.index+I[0].length!==v.index+v[0].length)&&(v=I),l.lastIndex=I.index+I[1].length+I[2].length;l.lastIndex=-1}if(v===null)return null;let n=v[2],f=v[3]||"0",s=v[4]||"0",p=e.includePrerelease&&v[5]?`-${v[5]}`:"",E=e.includePrerelease&&v[6]?`+${v[6]}`:"";return o(`${n}.${f}.${s}${p}${E}`,e)};t.exports=u}}),tr=N({"../../node_modules/semver/internal/lrucache.js"(c,t){var r=class{constructor(){this.max=1e3,this.map=new Map}get(o){let a=this.map.get(o);if(a!==void 0)return this.map.delete(o),this.map.set(o,a),a}delete(o){return this.map.delete(o)}set(o,a){if(!this.delete(o)&&a!==void 0){if(this.map.size>=this.max){let i=this.map.keys().next().value;this.delete(i)}this.map.set(o,a)}return this}};t.exports=r}}),b=N({"../../node_modules/semver/classes/range.js"(c,t){var r=/\s+/g,o=class K{constructor(m,_){if(_=u(_),m instanceof K)return m.loose===!!_.loose&&m.includePrerelease===!!_.includePrerelease?m:new K(m.raw,_);if(m instanceof h)return this.raw=m.value,this.set=[[m]],this.formatted=void 0,this;if(this.options=_,this.loose=!!_.loose,this.includePrerelease=!!_.includePrerelease,this.raw=m.trim().replace(r," "),this.set=this.raw.split("||").map(R=>this.parseRange(R.trim())).filter(R=>R.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let R=this.set[0];if(this.set=this.set.filter(O=>!S(O[0])),this.set.length===0)this.set=[R];else if(this.set.length>1){for(let O of this.set)if(O.length===1&&g(O[0])){this.set=[O];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let m=0;m<this.set.length;m++){m>0&&(this.formatted+="||");let _=this.set[m];for(let R=0;R<_.length;R++)R>0&&(this.formatted+=" "),this.formatted+=_[R].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(m){let _=((this.options.includePrerelease&&l)|(this.options.loose&&I))+":"+m,R=i.get(_);if(R)return R;let O=this.options.loose,$=O?n[f.HYPHENRANGELOOSE]:n[f.HYPHENRANGE];m=m.replace($,ie(this.options.includePrerelease)),e("hyphen replace",m),m=m.replace(n[f.COMPARATORTRIM],s),e("comparator trim",m),m=m.replace(n[f.TILDETRIM],p),e("tilde trim",m),m=m.replace(n[f.CARETTRIM],E),e("caret trim",m);let L=m.split(" ").map(j=>D(j,this.options)).join(" ").split(/\s+/).map(j=>ae(j,this.options));O&&(L=L.filter(j=>(e("loose invalid filter",j,this.options),!!j.match(n[f.COMPARATORLOOSE])))),e("range list",L);let w=new Map,A=L.map(j=>new h(j,this.options));for(let j of A){if(S(j))return[j];w.set(j.value,j)}w.size>1&&w.has("")&&w.delete("");let x=[...w.values()];return i.set(_,x),x}intersects(m,_){if(!(m instanceof K))throw new TypeError("a Range is required");return this.set.some(R=>y(R,_)&&m.set.some(O=>y(O,_)&&R.every($=>O.every(L=>$.intersects(L,_)))))}test(m){if(!m)return!1;if(typeof m=="string")try{m=new v(m,this.options)}catch{return!1}for(let _=0;_<this.set.length;_++)if(ne(this.set[_],m,this.options))return!0;return!1}};t.exports=o;var a=tr(),i=new a,u=he(),h=re(),e=J(),v=G(),{safeRe:n,t:f,comparatorTrimReplace:s,tildeTrimReplace:p,caretTrimReplace:E}=z(),{FLAG_INCLUDE_PRERELEASE:l,FLAG_LOOSE:I}=Z(),S=d=>d.value==="<0.0.0-0",g=d=>d.value==="",y=(d,m)=>{let _=!0,R=d.slice(),O=R.pop();for(;_&&R.length;)_=R.every($=>O.intersects($,m)),O=R.pop();return _},D=(d,m)=>(e("comp",d,m),d=C(d,m),e("caret",d),d=X(d,m),e("tildes",d),d=T(d,m),e("xrange",d),d=se(d,m),e("stars",d),d),P=d=>!d||d.toLowerCase()==="x"||d==="*",X=(d,m)=>d.trim().split(/\s+/).map(_=>F(_,m)).join(" "),F=(d,m)=>{let _=m.loose?n[f.TILDELOOSE]:n[f.TILDE];return d.replace(_,(R,O,$,L,w)=>{e("tilde",d,R,O,$,L,w);let A;return P(O)?A="":P($)?A=`>=${O}.0.0 <${+O+1}.0.0-0`:P(L)?A=`>=${O}.${$}.0 <${O}.${+$+1}.0-0`:w?(e("replaceTilde pr",w),A=`>=${O}.${$}.${L}-${w} <${O}.${+$+1}.0-0`):A=`>=${O}.${$}.${L} <${O}.${+$+1}.0-0`,e("tilde return",A),A})},C=(d,m)=>d.trim().split(/\s+/).map(_=>q(_,m)).join(" "),q=(d,m)=>{e("caret",d,m);let _=m.loose?n[f.CARETLOOSE]:n[f.CARET],R=m.includePrerelease?"-0":"";return d.replace(_,(O,$,L,w,A)=>{e("caret",d,O,$,L,w,A);let x;return P($)?x="":P(L)?x=`>=${$}.0.0${R} <${+$+1}.0.0-0`:P(w)?$==="0"?x=`>=${$}.${L}.0${R} <${$}.${+L+1}.0-0`:x=`>=${$}.${L}.0${R} <${+$+1}.0.0-0`:A?(e("replaceCaret pr",A),$==="0"?L==="0"?x=`>=${$}.${L}.${w}-${A} <${$}.${L}.${+w+1}-0`:x=`>=${$}.${L}.${w}-${A} <${$}.${+L+1}.0-0`:x=`>=${$}.${L}.${w}-${A} <${+$+1}.0.0-0`):(e("no pr"),$==="0"?L==="0"?x=`>=${$}.${L}.${w}${R} <${$}.${L}.${+w+1}-0`:x=`>=${$}.${L}.${w}${R} <${$}.${+L+1}.0-0`:x=`>=${$}.${L}.${w} <${+$+1}.0.0-0`),e("caret return",x),x})},T=(d,m)=>(e("replaceXRanges",d,m),d.split(/\s+/).map(_=>W(_,m)).join(" ")),W=(d,m)=>{d=d.trim();let _=m.loose?n[f.XRANGELOOSE]:n[f.XRANGE];return d.replace(_,(R,O,$,L,w,A)=>{e("xRange",d,R,O,$,L,w,A);let x=P($),j=x||P(L),k=j||P(w),B=k;return O==="="&&B&&(O=""),A=m.includePrerelease?"-0":"",x?O===">"||O==="<"?R="<0.0.0-0":R="*":O&&B?(j&&(L=0),w=0,O===">"?(O=">=",j?($=+$+1,L=0,w=0):(L=+L+1,w=0)):O==="<="&&(O="<",j?$=+$+1:L=+L+1),O==="<"&&(A="-0"),R=`${O+$}.${L}.${w}${A}`):j?R=`>=${$}.0.0${A} <${+$+1}.0.0-0`:k&&(R=`>=${$}.${L}.0${A} <${$}.${+L+1}.0-0`),e("xRange return",R),R})},se=(d,m)=>(e("replaceStars",d,m),d.trim().replace(n[f.STAR],"")),ae=(d,m)=>(e("replaceGTE0",d,m),d.trim().replace(n[m.includePrerelease?f.GTE0PRE:f.GTE0],"")),ie=d=>(m,_,R,O,$,L,w,A,x,j,k,B)=>(P(R)?_="":P(O)?_=`>=${R}.0.0${d?"-0":""}`:P($)?_=`>=${R}.${O}.0${d?"-0":""}`:L?_=`>=${_}`:_=`>=${_}${d?"-0":""}`,P(x)?A="":P(j)?A=`<${+x+1}.0.0-0`:P(k)?A=`<${x}.${+j+1}.0-0`:B?A=`<=${x}.${j}.${k}-${B}`:d?A=`<${x}.${j}.${+k+1}-0`:A=`<=${A}`,`${_} ${A}`.trim()),ne=(d,m,_)=>{for(let R=0;R<d.length;R++)if(!d[R].test(m))return!1;if(m.prerelease.length&&!_.includePrerelease){for(let R=0;R<d.length;R++)if(e(d[R].semver),d[R].semver!==h.ANY&&d[R].semver.prerelease.length>0){let O=d[R].semver;if(O.major===m.major&&O.minor===m.minor&&O.patch===m.patch)return!0}return!1}return!0}}}),re=N({"../../node_modules/semver/classes/comparator.js"(c,t){var r=Symbol("SemVer ANY"),o=class ce{static get ANY(){return r}constructor(s,p){if(p=a(p),s instanceof ce){if(s.loose===!!p.loose)return s;s=s.value}s=s.trim().split(/\s+/).join(" "),e("comparator",s,p),this.options=p,this.loose=!!p.loose,this.parse(s),this.semver===r?this.value="":this.value=this.operator+this.semver.version,e("comp",this)}parse(s){let p=this.options.loose?i[u.COMPARATORLOOSE]:i[u.COMPARATOR],E=s.match(p);if(!E)throw new TypeError(`Invalid comparator: ${s}`);this.operator=E[1]!==void 0?E[1]:"",this.operator==="="&&(this.operator=""),E[2]?this.semver=new v(E[2],this.options.loose):this.semver=r}toString(){return this.value}test(s){if(e("Comparator.test",s,this.options.loose),this.semver===r||s===r)return!0;if(typeof s=="string")try{s=new v(s,this.options)}catch{return!1}return h(s,this.operator,this.semver,this.options)}intersects(s,p){if(!(s instanceof ce))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new n(s.value,p).test(this.value):s.operator===""?s.value===""?!0:new n(this.value,p).test(s.semver):(p=a(p),p.includePrerelease&&(this.value==="<0.0.0-0"||s.value==="<0.0.0-0")||!p.includePrerelease&&(this.value.startsWith("<0.0.0")||s.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&s.operator.startsWith(">")||this.operator.startsWith("<")&&s.operator.startsWith("<")||this.semver.version===s.semver.version&&this.operator.includes("=")&&s.operator.includes("=")||h(this.semver,"<",s.semver,p)&&this.operator.startsWith(">")&&s.operator.startsWith("<")||h(this.semver,">",s.semver,p)&&this.operator.startsWith("<")&&s.operator.startsWith(">")))}};t.exports=o;var a=he(),{safeRe:i,t:u}=z(),h=xe(),e=J(),v=G(),n=b()}}),te=N({"../../node_modules/semver/functions/satisfies.js"(c,t){var r=b(),o=(a,i,u)=>{try{i=new r(i,u)}catch{return!1}return i.test(a)};t.exports=o}}),sr=N({"../../node_modules/semver/ranges/to-comparators.js"(c,t){var r=b(),o=(a,i)=>new r(a,i).set.map(u=>u.map(h=>h.value).join(" ").trim().split(" "));t.exports=o}}),ar=N({"../../node_modules/semver/ranges/max-satisfying.js"(c,t){var r=G(),o=b(),a=(i,u,h)=>{let e=null,v=null,n=null;try{n=new o(u,h)}catch{return null}return i.forEach(f=>{n.test(f)&&(!e||v.compare(f)===-1)&&(e=f,v=new r(e,h))}),e};t.exports=a}}),ir=N({"../../node_modules/semver/ranges/min-satisfying.js"(c,t){var r=G(),o=b(),a=(i,u,h)=>{let e=null,v=null,n=null;try{n=new o(u,h)}catch{return null}return i.forEach(f=>{n.test(f)&&(!e||v.compare(f)===1)&&(e=f,v=new r(e,h))}),e};t.exports=a}}),nr=N({"../../node_modules/semver/ranges/min-version.js"(c,t){var r=G(),o=b(),a=ee(),i=(u,h)=>{u=new o(u,h);let e=new r("0.0.0");if(u.test(e)||(e=new r("0.0.0-0"),u.test(e)))return e;e=null;for(let v=0;v<u.set.length;++v){let n=u.set[v],f=null;n.forEach(s=>{let p=new r(s.semver.version);switch(s.operator){case">":p.prerelease.length===0?p.patch++:p.prerelease.push(0),p.raw=p.format();case"":case">=":(!f||a(p,f))&&(f=p);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${s.operator}`)}}),f&&(!e||a(e,f))&&(e=f)}return e&&u.test(e)?e:null};t.exports=i}}),or=N({"../../node_modules/semver/ranges/valid.js"(c,t){var r=b(),o=(a,i)=>{try{return new r(a,i).range||"*"}catch{return null}};t.exports=o}}),$e=N({"../../node_modules/semver/ranges/outside.js"(c,t){var r=G(),o=re(),{ANY:a}=o,i=b(),u=te(),h=ee(),e=ve(),v=Re(),n=de(),f=(s,p,E,l)=>{s=new r(s,l),p=new i(p,l);let I,S,g,y,D;switch(E){case">":I=h,S=v,g=e,y=">",D=">=";break;case"<":I=e,S=n,g=h,y="<",D="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(u(s,p,l))return!1;for(let P=0;P<p.set.length;++P){let X=p.set[P],F=null,C=null;if(X.forEach(q=>{q.semver===a&&(q=new o(">=0.0.0")),F=F||q,C=C||q,I(q.semver,F.semver,l)?F=q:g(q.semver,C.semver,l)&&(C=q)}),F.operator===y||F.operator===D||(!C.operator||C.operator===y)&&S(s,C.semver)||C.operator===D&&g(s,C.semver))return!1}return!0};t.exports=f}}),lr=N({"../../node_modules/semver/ranges/gtr.js"(c,t){var r=$e(),o=(a,i,u)=>r(a,i,">",u);t.exports=o}}),ur=N({"../../node_modules/semver/ranges/ltr.js"(c,t){var r=$e(),o=(a,i,u)=>r(a,i,"<",u);t.exports=o}}),pr=N({"../../node_modules/semver/ranges/intersects.js"(c,t){var r=b(),o=(a,i,u)=>(a=new r(a,u),i=new r(i,u),a.intersects(i,u));t.exports=o}}),cr=N({"../../node_modules/semver/ranges/simplify.js"(c,t){var r=te(),o=U();t.exports=(a,i,u)=>{let h=[],e=null,v=null,n=a.sort((E,l)=>o(E,l,u));for(let E of n)r(E,i,u)?(v=E,e||(e=E)):(v&&h.push([e,v]),v=null,e=null);e&&h.push([e,null]);let f=[];for(let[E,l]of h)E===l?f.push(E):!l&&E===n[0]?f.push("*"):l?E===n[0]?f.push(`<=${l}`):f.push(`${E} - ${l}`):f.push(`>=${E}`);let s=f.join(" || "),p=typeof i.raw=="string"?i.raw:String(i);return s.length<p.length?s:i}}}),Er=N({"../../node_modules/semver/ranges/subset.js"(c,t){var r=b(),o=re(),{ANY:a}=o,i=te(),u=U(),h=(p,E,l={})=>{if(p===E)return!0;p=new r(p,l),E=new r(E,l);let I=!1;e:for(let S of p.set){for(let g of E.set){let y=n(S,g,l);if(I=I||y!==null,y)continue e}if(I)return!1}return!0},e=[new o(">=0.0.0-0")],v=[new o(">=0.0.0")],n=(p,E,l)=>{if(p===E)return!0;if(p.length===1&&p[0].semver===a){if(E.length===1&&E[0].semver===a)return!0;l.includePrerelease?p=e:p=v}if(E.length===1&&E[0].semver===a){if(l.includePrerelease)return!0;E=v}let I=new Set,S,g;for(let T of p)T.operator===">"||T.operator===">="?S=f(S,T,l):T.operator==="<"||T.operator==="<="?g=s(g,T,l):I.add(T.semver);if(I.size>1)return null;let y;if(S&&g&&(y=u(S.semver,g.semver,l),y>0||y===0&&(S.operator!==">="||g.operator!=="<=")))return null;for(let T of I){if(S&&!i(T,String(S),l)||g&&!i(T,String(g),l))return null;for(let W of E)if(!i(T,String(W),l))return!1;return!0}let D,P,X,F,C=g&&!l.includePrerelease&&g.semver.prerelease.length?g.semver:!1,q=S&&!l.includePrerelease&&S.semver.prerelease.length?S.semver:!1;C&&C.prerelease.length===1&&g.operator==="<"&&C.prerelease[0]===0&&(C=!1);for(let T of E){if(F=F||T.operator===">"||T.operator===">=",X=X||T.operator==="<"||T.operator==="<=",S){if(q&&T.semver.prerelease&&T.semver.prerelease.length&&T.semver.major===q.major&&T.semver.minor===q.minor&&T.semver.patch===q.patch&&(q=!1),T.operator===">"||T.operator===">="){if(D=f(S,T,l),D===T&&D!==S)return!1}else if(S.operator===">="&&!i(S.semver,String(T),l))return!1}if(g){if(C&&T.semver.prerelease&&T.semver.prerelease.length&&T.semver.major===C.major&&T.semver.minor===C.minor&&T.semver.patch===C.patch&&(C=!1),T.operator==="<"||T.operator==="<="){if(P=s(g,T,l),P===T&&P!==g)return!1}else if(g.operator==="<="&&!i(g.semver,String(T),l))return!1}if(!T.operator&&(g||S)&&y!==0)return!1}return!(S&&X&&!g&&y!==0||g&&F&&!S&&y!==0||q||C)},f=(p,E,l)=>{if(!p)return E;let I=u(p.semver,E.semver,l);return I>0?p:I<0||E.operator===">"&&p.operator===">="?E:p},s=(p,E,l)=>{if(!p)return E;let I=u(p.semver,E.semver,l);return I<0?p:I>0||E.operator==="<"&&p.operator==="<="?E:p};t.exports=h}}),mr=N({"../../node_modules/semver/index.js"(c,t){var r=z(),o=Z(),a=G(),i=ge(),u=H(),h=Me(),e=ke(),v=He(),n=We(),f=Be(),s=Ye(),p=ze(),E=Ke(),l=U(),I=Qe(),S=Ze(),g=fe(),y=Je(),D=er(),P=ee(),X=ve(),F=Ae(),C=we(),q=de(),T=Re(),W=xe(),se=rr(),ae=re(),ie=b(),ne=te(),d=sr(),m=ar(),_=ir(),R=nr(),O=or(),$=$e(),L=lr(),w=ur(),A=pr(),x=cr(),j=Er();t.exports={parse:u,valid:h,clean:e,inc:v,diff:n,major:f,minor:s,patch:p,prerelease:E,compare:l,rcompare:I,compareLoose:S,compareBuild:g,sort:y,rsort:D,gt:P,lt:X,eq:F,neq:C,gte:q,lte:T,cmp:W,coerce:se,Comparator:ae,Range:ie,satisfies:ne,toComparators:d,maxSatisfying:m,minSatisfying:_,minVersion:R,validRange:O,outside:$,gtr:L,ltr:w,intersects:A,simplifyRange:x,subset:j,SemVer:a,re:r.re,src:r.src,tokens:r.t,SEMVER_SPEC_VERSION:o.SEMVER_SPEC_VERSION,RELEASE_TYPES:o.RELEASE_TYPES,compareIdentifiers:i.compareIdentifiers,rcompareIdentifiers:i.rcompareIdentifiers}}}),hr={};Ge(hr,{beforeAll:()=>Lr,decorators:()=>Or,mount:()=>Ir,parameters:()=>_r,render:()=>vr,renderToCanvas:()=>$r});var Oe=Ue(mr());function Le(c){globalThis.IS_REACT_ACT_ENVIRONMENT=c}function fr(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var Q=c=>c(),vr=(c,t)=>{let{id:r,component:o}=t;if(!o)throw new Error(`Unable to render story ${r} as the component annotation is missing from the default export`);return Y.createElement(o,{...c})},{FRAMEWORK_OPTIONS:dr}=Xe,Rr=class extends M.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:c}=this.state,{showMain:t}=this.props;c||t()}componentDidCatch(c){let{showException:t}=this.props;t(c)}render(){let{hasError:c}=this.state,{children:t}=this.props;return c?null:t}},Ne=dr?.strictMode?M.StrictMode:M.Fragment,Ee=[],pe=!1,je=async()=>{if(pe||Ee.length===0)return;pe=!0;let c=Ee.shift();c&&await c(),pe=!1,je()};async function $r({storyContext:c,unboundStoryFn:t,showMain:r,showException:o,forceRemount:a},i){let{renderElement:u,unmountElement:h}=await Te(async()=>{const{renderElement:f,unmountElement:s}=await import("./react-18-CdbX7kl_.js");return{renderElement:f,unmountElement:s}},__vite__mapDeps([0,1,2]),import.meta.url),e=t,v=c.parameters.__isPortableStory?Y.createElement(e,{...c}):Y.createElement(Rr,{showMain:r,showException:o},Y.createElement(e,{...c})),n=Ne?Y.createElement(Ne,null,v):v;return a&&h(i),await new Promise(async(f,s)=>{Ee.push(async()=>{try{await Q(async()=>{await u(n,i,c?.parameters?.react?.rootOptions)}),f()}catch(p){s(p)}}),je()}),async()=>{await Q(()=>{h(i)})}}var Ir=c=>async t=>(t!=null&&(c.originalStoryFn=()=>t),await c.renderToCanvas(),c.canvas),_r={renderer:"react"},Or=[(c,t)=>{if(!t.parameters?.react?.rsc)return c();let r=Oe.default.major(M.version),o=Oe.default.minor(M.version);if(r<18||r===18&&o<3)throw new Error("React Server Components require React >= 18.3");return M.createElement(M.Suspense,null,c())}],Lr=async()=>{try{let{configure:c}=await Te(async()=>{const{configure:t}=await import("./index-CagAc-LW.js");return{configure:t}},[],import.meta.url);c({unstable_advanceTimersWrapper:t=>Q(t),asyncWrapper:async t=>{let r=fr();Le(!1);try{let o=await t();return await new Promise(a=>{setTimeout(()=>{a()},0),Nr()&&jest.advanceTimersByTime(0)}),o}finally{Le(r)}},eventWrapper:t=>{let r;return Q(()=>(r=t(),r)),r}})}catch{}};function Nr(){return typeof jest<"u"&&jest!==null?setTimeout._isMockFunction===!0||Object.prototype.hasOwnProperty.call(setTimeout,"clock"):!1}export{Lr as beforeAll,Or as decorators,Ir as mount,_r as parameters,vr as render,$r as renderToCanvas};
