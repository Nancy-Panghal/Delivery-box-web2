(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function ZA(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var cp={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function JA(){if(X_)return Ml;X_=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:n,type:r,key:h,ref:o!==void 0?o:null,props:u}}return Ml.Fragment=e,Ml.jsx=i,Ml.jsxs=i,Ml}var Q_;function eC(){return Q_||(Q_=1,cp.exports=JA()),cp.exports}var w=eC(),fp={exports:{}},Ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function tC(){if(Z_)return Ee;Z_=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.iterator;function N(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,$={};function V(x,te,oe){this.props=x,this.context=te,this.refs=$,this.updater=oe||L}V.prototype.isReactComponent={},V.prototype.setState=function(x,te){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,te,"setState")},V.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function J(){}J.prototype=V.prototype;function Z(x,te,oe){this.props=x,this.context=te,this.refs=$,this.updater=oe||L}var ee=Z.prototype=new J;ee.constructor=Z,H(ee,V.prototype),ee.isPureReactComponent=!0;var ce=Array.isArray,ne={H:null,A:null,T:null,S:null,V:null},be=Object.prototype.hasOwnProperty;function D(x,te,oe,se,pe,Te){return oe=Te.ref,{$$typeof:n,type:x,key:te,ref:oe!==void 0?oe:null,props:Te}}function A(x,te){return D(x.type,te,void 0,void 0,void 0,x.props)}function C(x){return typeof x=="object"&&x!==null&&x.$$typeof===n}function k(x){var te={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(oe){return te[oe]})}var M=/\/+/g;function U(x,te){return typeof x=="object"&&x!==null&&x.key!=null?k(""+x.key):te.toString(36)}function I(){}function Ot(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(I,I):(x.status="pending",x.then(function(te){x.status==="pending"&&(x.status="fulfilled",x.value=te)},function(te){x.status==="pending"&&(x.status="rejected",x.reason=te)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function ot(x,te,oe,se,pe){var Te=typeof x;(Te==="undefined"||Te==="boolean")&&(x=null);var _e=!1;if(x===null)_e=!0;else switch(Te){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(x.$$typeof){case n:case e:_e=!0;break;case b:return _e=x._init,ot(_e(x._payload),te,oe,se,pe)}}if(_e)return pe=pe(x),_e=se===""?"."+U(x,0):se,ce(pe)?(oe="",_e!=null&&(oe=_e.replace(M,"$&/")+"/"),ot(pe,te,oe,"",function(ei){return ei})):pe!=null&&(C(pe)&&(pe=A(pe,oe+(pe.key==null||x&&x.key===pe.key?"":(""+pe.key).replace(M,"$&/")+"/")+_e)),te.push(pe)),1;_e=0;var Et=se===""?".":se+":";if(ce(x))for(var Xe=0;Xe<x.length;Xe++)se=x[Xe],Te=Et+U(se,Xe),_e+=ot(se,te,oe,Te,pe);else if(Xe=N(x),typeof Xe=="function")for(x=Xe.call(x),Xe=0;!(se=x.next()).done;)se=se.value,Te=Et+U(se,Xe++),_e+=ot(se,te,oe,Te,pe);else if(Te==="object"){if(typeof x.then=="function")return ot(Ot(x),te,oe,se,pe);throw te=String(x),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return _e}function K(x,te,oe){if(x==null)return x;var se=[],pe=0;return ot(x,se,"","",function(Te){return te.call(oe,Te,pe++)}),se}function ae(x){if(x._status===-1){var te=x._result;te=te(),te.then(function(oe){(x._status===0||x._status===-1)&&(x._status=1,x._result=oe)},function(oe){(x._status===0||x._status===-1)&&(x._status=2,x._result=oe)}),x._status===-1&&(x._status=0,x._result=te)}if(x._status===1)return x._result.default;throw x._result}var he=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function Le(){}return Ee.Children={map:K,forEach:function(x,te,oe){K(x,function(){te.apply(this,arguments)},oe)},count:function(x){var te=0;return K(x,function(){te++}),te},toArray:function(x){return K(x,function(te){return te})||[]},only:function(x){if(!C(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Ee.Component=V,Ee.Fragment=i,Ee.Profiler=o,Ee.PureComponent=Z,Ee.StrictMode=r,Ee.Suspense=m,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(x){return ne.H.useMemoCache(x)}},Ee.cache=function(x){return function(){return x.apply(null,arguments)}},Ee.cloneElement=function(x,te,oe){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var se=H({},x.props),pe=x.key,Te=void 0;if(te!=null)for(_e in te.ref!==void 0&&(Te=void 0),te.key!==void 0&&(pe=""+te.key),te)!be.call(te,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&te.ref===void 0||(se[_e]=te[_e]);var _e=arguments.length-2;if(_e===1)se.children=oe;else if(1<_e){for(var Et=Array(_e),Xe=0;Xe<_e;Xe++)Et[Xe]=arguments[Xe+2];se.children=Et}return D(x.type,pe,void 0,void 0,Te,se)},Ee.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:u,_context:x},x},Ee.createElement=function(x,te,oe){var se,pe={},Te=null;if(te!=null)for(se in te.key!==void 0&&(Te=""+te.key),te)be.call(te,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(pe[se]=te[se]);var _e=arguments.length-2;if(_e===1)pe.children=oe;else if(1<_e){for(var Et=Array(_e),Xe=0;Xe<_e;Xe++)Et[Xe]=arguments[Xe+2];pe.children=Et}if(x&&x.defaultProps)for(se in _e=x.defaultProps,_e)pe[se]===void 0&&(pe[se]=_e[se]);return D(x,Te,void 0,void 0,null,pe)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(x){return{$$typeof:p,render:x}},Ee.isValidElement=C,Ee.lazy=function(x){return{$$typeof:b,_payload:{_status:-1,_result:x},_init:ae}},Ee.memo=function(x,te){return{$$typeof:g,type:x,compare:te===void 0?null:te}},Ee.startTransition=function(x){var te=ne.T,oe={};ne.T=oe;try{var se=x(),pe=ne.S;pe!==null&&pe(oe,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(Le,he)}catch(Te){he(Te)}finally{ne.T=te}},Ee.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()},Ee.use=function(x){return ne.H.use(x)},Ee.useActionState=function(x,te,oe){return ne.H.useActionState(x,te,oe)},Ee.useCallback=function(x,te){return ne.H.useCallback(x,te)},Ee.useContext=function(x){return ne.H.useContext(x)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(x,te){return ne.H.useDeferredValue(x,te)},Ee.useEffect=function(x,te,oe){var se=ne.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(x,te)},Ee.useId=function(){return ne.H.useId()},Ee.useImperativeHandle=function(x,te,oe){return ne.H.useImperativeHandle(x,te,oe)},Ee.useInsertionEffect=function(x,te){return ne.H.useInsertionEffect(x,te)},Ee.useLayoutEffect=function(x,te){return ne.H.useLayoutEffect(x,te)},Ee.useMemo=function(x,te){return ne.H.useMemo(x,te)},Ee.useOptimistic=function(x,te){return ne.H.useOptimistic(x,te)},Ee.useReducer=function(x,te,oe){return ne.H.useReducer(x,te,oe)},Ee.useRef=function(x){return ne.H.useRef(x)},Ee.useState=function(x){return ne.H.useState(x)},Ee.useSyncExternalStore=function(x,te,oe){return ne.H.useSyncExternalStore(x,te,oe)},Ee.useTransition=function(){return ne.H.useTransition()},Ee.version="19.1.1",Ee}var J_;function xm(){return J_||(J_=1,fp.exports=tC()),fp.exports}var Y=xm();const Om=ZA(Y);var hp={exports:{}},Ll={},dp={exports:{}},pp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function nC(){return e0||(e0=1,(function(n){function e(K,ae){var he=K.length;K.push(ae);e:for(;0<he;){var Le=he-1>>>1,x=K[Le];if(0<o(x,ae))K[Le]=ae,K[he]=x,he=Le;else break e}}function i(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var ae=K[0],he=K.pop();if(he!==ae){K[0]=he;e:for(var Le=0,x=K.length,te=x>>>1;Le<te;){var oe=2*(Le+1)-1,se=K[oe],pe=oe+1,Te=K[pe];if(0>o(se,he))pe<x&&0>o(Te,se)?(K[Le]=Te,K[pe]=he,Le=pe):(K[Le]=se,K[oe]=he,Le=oe);else if(pe<x&&0>o(Te,he))K[Le]=Te,K[pe]=he,Le=pe;else break e}}return ae}function o(K,ae){var he=K.sortIndex-ae.sortIndex;return he!==0?he:K.id-ae.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();n.unstable_now=function(){return h.now()-p}}var m=[],g=[],b=1,S=null,N=3,L=!1,H=!1,$=!1,V=!1,J=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function ce(K){for(var ae=i(g);ae!==null;){if(ae.callback===null)r(g);else if(ae.startTime<=K)r(g),ae.sortIndex=ae.expirationTime,e(m,ae);else break;ae=i(g)}}function ne(K){if($=!1,ce(K),!H)if(i(m)!==null)H=!0,be||(be=!0,U());else{var ae=i(g);ae!==null&&ot(ne,ae.startTime-K)}}var be=!1,D=-1,A=5,C=-1;function k(){return V?!0:!(n.unstable_now()-C<A)}function M(){if(V=!1,be){var K=n.unstable_now();C=K;var ae=!0;try{e:{H=!1,$&&($=!1,Z(D),D=-1),L=!0;var he=N;try{t:{for(ce(K),S=i(m);S!==null&&!(S.expirationTime>K&&k());){var Le=S.callback;if(typeof Le=="function"){S.callback=null,N=S.priorityLevel;var x=Le(S.expirationTime<=K);if(K=n.unstable_now(),typeof x=="function"){S.callback=x,ce(K),ae=!0;break t}S===i(m)&&r(m),ce(K)}else r(m);S=i(m)}if(S!==null)ae=!0;else{var te=i(g);te!==null&&ot(ne,te.startTime-K),ae=!1}}break e}finally{S=null,N=he,L=!1}ae=void 0}}finally{ae?U():be=!1}}}var U;if(typeof ee=="function")U=function(){ee(M)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Ot=I.port2;I.port1.onmessage=M,U=function(){Ot.postMessage(null)}}else U=function(){J(M,0)};function ot(K,ae){D=J(function(){K(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return N},n.unstable_next=function(K){switch(N){case 1:case 2:case 3:var ae=3;break;default:ae=N}var he=N;N=ae;try{return K()}finally{N=he}},n.unstable_requestPaint=function(){V=!0},n.unstable_runWithPriority=function(K,ae){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var he=N;N=K;try{return ae()}finally{N=he}},n.unstable_scheduleCallback=function(K,ae,he){var Le=n.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?Le+he:Le):he=Le,K){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=he+x,K={id:b++,callback:ae,priorityLevel:K,startTime:he,expirationTime:x,sortIndex:-1},he>Le?(K.sortIndex=he,e(g,K),i(m)===null&&K===i(g)&&($?(Z(D),D=-1):$=!0,ot(ne,he-Le))):(K.sortIndex=x,e(m,K),H||L||(H=!0,be||(be=!0,U()))),K},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(K){var ae=N;return function(){var he=N;N=ae;try{return K.apply(this,arguments)}finally{N=he}}}})(pp)),pp}var t0;function iC(){return t0||(t0=1,dp.exports=nC()),dp.exports}var mp={exports:{}},Bt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function sC(){if(n0)return Bt;n0=1;var n=xm();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,b){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:m,containerInfo:g,implementation:b}}var h=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Bt.createPortal=function(m,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,b)},Bt.flushSync=function(m){var g=h.T,b=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=g,r.p=b,r.d.f()}},Bt.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(m,g))},Bt.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Bt.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var b=g.as,S=p(b,g.crossOrigin),N=typeof g.integrity=="string"?g.integrity:void 0,L=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?r.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:N,fetchPriority:L}):b==="script"&&r.d.X(m,{crossOrigin:S,integrity:N,fetchPriority:L,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Bt.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=p(g.as,g.crossOrigin);r.d.M(m,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(m)},Bt.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,S=p(b,g.crossOrigin);r.d.L(m,b,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Bt.preloadModule=function(m,g){if(typeof m=="string")if(g){var b=p(g.as,g.crossOrigin);r.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(m)},Bt.requestFormReset=function(m){r.d.r(m)},Bt.unstable_batchedUpdates=function(m,g){return m(g)},Bt.useFormState=function(m,g,b){return h.H.useFormState(m,g,b)},Bt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Bt.version="19.1.1",Bt}var i0;function rC(){if(i0)return mp.exports;i0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),mp.exports=sC(),mp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function aC(){if(s0)return Ll;s0=1;var n=iC(),e=xm(),i=rC();function r(t){var s="https://react.dev/errors/"+t;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var s=t,a=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(a=s.return),t=s.return;while(t)}return s.tag===3?a:null}function h(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(r(188))}function m(t){var s=t.alternate;if(!s){if(s=u(t),s===null)throw Error(r(188));return s!==t?null:t}for(var a=t,l=s;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return p(f),t;if(d===l)return p(f),s;d=d.sibling}throw Error(r(188))}if(a.return!==l.return)a=f,l=d;else{for(var _=!1,E=f.child;E;){if(E===a){_=!0,a=f,l=d;break}if(E===l){_=!0,l=f,a=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===a){_=!0,a=d,l=f;break}if(E===l){_=!0,l=d,a=f;break}E=E.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:s}function g(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t;for(t=t.child;t!==null;){if(s=g(t),s!==null)return s;t=t.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function U(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var I=Symbol.for("react.client.reference");function Ot(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case V:return"Profiler";case $:return"StrictMode";case ne:return"Suspense";case be:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case L:return"Portal";case ee:return(t.displayName||"Context")+".Provider";case Z:return(t._context.displayName||"Context")+".Consumer";case ce:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case D:return s=t.displayName||null,s!==null?s:Ot(t.type)||"Memo";case A:s=t._payload,t=t._init;try{return Ot(t(s))}catch{}}return null}var ot=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},Le=[],x=-1;function te(t){return{current:t}}function oe(t){0>x||(t.current=Le[x],Le[x]=null,x--)}function se(t,s){x++,Le[x]=t.current,t.current=s}var pe=te(null),Te=te(null),_e=te(null),Et=te(null);function Xe(t,s){switch(se(_e,s),se(Te,t),se(pe,null),s.nodeType){case 9:case 11:t=(t=s.documentElement)&&(t=t.namespaceURI)?w_(t):0;break;default:if(t=s.tagName,s=s.namespaceURI)s=w_(s),t=A_(s,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}oe(pe),se(pe,t)}function ei(){oe(pe),oe(Te),oe(_e)}function ms(t){t.memoizedState!==null&&se(Et,t);var s=pe.current,a=A_(s,t.type);s!==a&&(se(Te,t),se(pe,a))}function Ti(t){Te.current===t&&(oe(pe),oe(Te)),Et.current===t&&(oe(Et),Il._currentValue=he)}var rr=Object.prototype.hasOwnProperty,ar=n.unstable_scheduleCallback,or=n.unstable_cancelCallback,No=n.unstable_shouldYield,Iu=n.unstable_requestPaint,En=n.unstable_now,ch=n.unstable_getCurrentPriorityLevel,Io=n.unstable_ImmediatePriority,ca=n.unstable_UserBlockingPriority,lr=n.unstable_NormalPriority,fh=n.unstable_LowPriority,fa=n.unstable_IdlePriority,xo=n.log,xu=n.unstable_setDisableYieldValue,lt=null,He=null;function on(t){if(typeof xo=="function"&&xu(t),He&&typeof He.setStrictMode=="function")try{He.setStrictMode(lt,t)}catch{}}var zt=Math.clz32?Math.clz32:ur,Ou=Math.log,hh=Math.LN2;function ur(t){return t>>>=0,t===0?32:31-(Ou(t)/hh|0)|0}var cr=256,fr=4194304;function zn(t){var s=t&42;if(s!==0)return s;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ha(t,s,a){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?f=zn(l):(_&=E,_!==0?f=zn(_):a||(a=E&~t,a!==0&&(f=zn(a))))):(E=l&~d,E!==0?f=zn(E):_!==0?f=zn(_):a||(a=l&~t,a!==0&&(f=zn(a)))),f===0?0:s!==0&&s!==f&&(s&d)===0&&(d=f&-f,a=s&-s,d>=a||d===32&&(a&4194048)!==0)?s:f}function hr(t,s){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&s)===0}function Oo(t,s){switch(t){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ko(){var t=cr;return cr<<=1,(cr&4194048)===0&&(cr=256),t}function ku(){var t=fr;return fr<<=1,(fr&62914560)===0&&(fr=4194304),t}function wi(t){for(var s=[],a=0;31>a;a++)s.push(t);return s}function Ai(t,s){t.pendingLanes|=s,s!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Do(t,s,a,l,f,d){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,R=t.expirationTimes,B=t.hiddenUpdates;for(a=_&~a;0<a;){var W=31-zt(a),Q=1<<W;E[W]=0,R[W]=-1;var F=B[W];if(F!==null)for(B[W]=null,W=0;W<F.length;W++){var q=F[W];q!==null&&(q.lane&=-536870913)}a&=~Q}l!==0&&Ci(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~s))}function Ci(t,s,a){t.pendingLanes|=s,t.suspendedLanes&=~s;var l=31-zt(s);t.entangledLanes|=s,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Mo(t,s){var a=t.entangledLanes|=s;for(t=t.entanglements;a;){var l=31-zt(a),f=1<<l;f&s|t[l]&s&&(t[l]|=s),a&=~f}}function dr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function da(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function gs(){var t=ae.p;return t!==0?t:(t=window.event,t===void 0?32:V_(t.type))}function Du(t,s){var a=ae.p;try{return ae.p=t,s()}finally{ae.p=a}}var nt=Math.random().toString(36).slice(2),yt="__reactFiber$"+nt,pt="__reactProps$"+nt,Sn="__reactContainer$"+nt,Lo="__reactEvents$"+nt,dh="__reactListeners$"+nt,vs="__reactHandles$"+nt,Mu="__reactResources$"+nt,pr="__reactMarker$"+nt;function mr(t){delete t[yt],delete t[pt],delete t[Lo],delete t[dh],delete t[vs]}function ys(t){var s=t[yt];if(s)return s;for(var a=t.parentNode;a;){if(s=a[Sn]||a[yt]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(t=I_(t);t!==null;){if(a=t[yt])return a;t=I_(t)}return s}t=a,a=t.parentNode}return null}function ti(t){if(t=t[yt]||t[Sn]){var s=t.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return t}return null}function ni(t){var s=t.tag;if(s===5||s===26||s===27||s===6)return t.stateNode;throw Error(r(33))}function Yt(t){var s=t[Mu];return s||(s=t[Mu]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function ft(t){t[pr]=!0}var Po=new Set,pa={};function Hn(t,s){Ri(t,s),Ri(t+"Capture",s)}function Ri(t,s){for(pa[t]=s,t=0;t<s.length;t++)Po.add(s[t])}var Lu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pu={},gr={};function Uu(t){return rr.call(gr,t)?!0:rr.call(Pu,t)?!1:Lu.test(t)?gr[t]=!0:(Pu[t]=!0,!1)}function _s(t,s,a){if(Uu(s))if(a===null)t.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(s);return;case"boolean":var l=s.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(s);return}}t.setAttribute(s,""+a)}}function ii(t,s,a){if(a===null)t.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttribute(s,""+a)}}function kt(t,s,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(s,a,""+l)}}var vr,ju;function Ni(t){if(vr===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);vr=s&&s[1]||"",ju=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vr+t+ju}var ma=!1;function ga(t,s){if(!t||ma)return"";ma=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(s){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(q){var F=q}Reflect.construct(t,[],Q)}else{try{Q.call()}catch(q){F=q}t.call(Q.prototype)}}else{try{throw Error()}catch(q){F=q}(Q=t())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(q){if(q&&F&&typeof q.stack=="string")return[q.stack,F.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var R=_.split(`
`),B=E.split(`
`);for(f=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(l===R.length||f===B.length)for(l=R.length-1,f=B.length-1;1<=l&&0<=f&&R[l]!==B[f];)f--;for(;1<=l&&0<=f;l--,f--)if(R[l]!==B[f]){if(l!==1||f!==1)do if(l--,f--,0>f||R[l]!==B[f]){var W=`
`+R[l].replace(" at new "," at ");return t.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",t.displayName)),W}while(1<=l&&0<=f);break}}}finally{ma=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ni(a):""}function Uo(t){switch(t.tag){case 26:case 27:case 5:return Ni(t.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 15:return ga(t.type,!1);case 11:return ga(t.type.render,!1);case 1:return ga(t.type,!0);case 31:return Ni("Activity");default:return""}}function va(t){try{var s="";do s+=Uo(t),t=t.return;while(t);return s}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jo(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ph(t){var s=jo(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,s),l=""+t[s];if(!t.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return f.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(t,s,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function ya(t){t._valueTracker||(t._valueTracker=ph(t))}function zo(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var a=s.getValue(),l="";return t&&(l=jo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(s.setValue(t),!0):!1}function yr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var mh=/[\n"\\]/g;function mt(t){return t.replace(mh,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function ln(t,s,a,l,f,d,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),s!=null?_==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+$t(s)):t.value!==""+$t(s)&&(t.value=""+$t(s)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),s!=null?bs(t,_,$t(s)):a!=null?bs(t,_,$t(a)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+$t(E):t.removeAttribute("name")}function _r(t,s,a,l,f,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),s!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||s!=null))return;a=a!=null?""+$t(a):"",s=s!=null?""+$t(s):a,E||s===t.value||(t.value=s),t.defaultValue=s}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=E?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_)}function bs(t,s,a){s==="number"&&yr(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ii(t,s,a,l){if(t=t.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=s.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+$t(a),s=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}s!==null||t[f].disabled||(s=t[f])}s!==null&&(s.selected=!0)}}function Ve(t,s,a){if(s!=null&&(s=""+$t(s),s!==t.value&&(t.value=s),a==null)){t.defaultValue!==s&&(t.defaultValue=s);return}t.defaultValue=a!=null?""+$t(a):""}function br(t,s,a,l){if(s==null){if(l!=null){if(a!=null)throw Error(r(92));if(ot(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),s=a}a=$t(s),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Tn(t,s){if(s){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=s;return}}t.textContent=s}var Er=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zu(t,s,a){var l=s.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="":l?t.setProperty(s,a):typeof a!="number"||a===0||Er.has(s)?s==="float"?t.cssFloat=a:t[s]=(""+a).trim():t[s]=a+"px"}function Ho(t,s,a){if(s!=null&&typeof s!="object")throw Error(r(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||s!=null&&s.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in s)l=s[f],s.hasOwnProperty(f)&&a[f]!==l&&zu(t,f,l)}else for(var d in s)s.hasOwnProperty(d)&&zu(t,d,s[d])}function Bo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _a(t){return vh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var xi=null;function wn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oi=null,ki=null;function Fo(t){var s=ti(t);if(s&&(t=s.stateNode)){var a=t[pt]||null;e:switch(t=s.stateNode,s.type){case"input":if(ln(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),s=a.name,a.type==="radio"&&s!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mt(""+s)+'"][type="radio"]'),s=0;s<a.length;s++){var l=a[s];if(l!==t&&l.form===t.form){var f=l[pt]||null;if(!f)throw Error(r(90));ln(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<a.length;s++)l=a[s],l.form===t.form&&zo(l)}break e;case"textarea":Ve(t,a.value,a.defaultValue);break e;case"select":s=a.value,s!=null&&Ii(t,!!a.multiple,s,!1)}}}var si=!1;function Hu(t,s,a){if(si)return t(s,a);si=!0;try{var l=t(s);return l}finally{if(si=!1,(Oi!==null||ki!==null)&&(Dc(),Oi&&(s=Oi,t=ki,ki=Oi=null,Fo(s),t)))for(s=0;s<t.length;s++)Fo(t[s])}}function Sr(t,s){var a=t.stateNode;if(a===null)return null;var l=a[pt]||null;if(l===null)return null;a=l[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,s,typeof a));return a}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),An=!1;if(Bn)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){An=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{An=!1}var ri=null,Es=null,Di=null;function qo(){if(Di)return Di;var t,s=Es,a=s.length,l,f="value"in ri?ri.value:ri.textContent,d=f.length;for(t=0;t<a&&s[t]===f[t];t++);var _=a-t;for(l=1;l<=_&&s[a-l]===f[d-l];l++);return Di=f.slice(t,1<l?1-l:void 0)}function ai(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function oi(){return!0}function Vo(){return!1}function St(t){function s(a,l,f,d,_){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?oi:Vo,this.isPropagationStopped=Vo,this}return b(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=oi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=oi)},persist:function(){},isPersistent:oi}),s}var Be={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=St(Be),wr=b({},Be,{view:0,detail:0}),Bu=St(wr),Ea,Sa,li,Ar=b({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==li&&(li&&t.type==="mousemove"?(Ea=t.screenX-li.screenX,Sa=t.screenY-li.screenY):Sa=Ea=0,li=t),Ea)},movementY:function(t){return"movementY"in t?t.movementY:Sa}}),Cn=St(Ar),Fu=b({},Ar,{dataTransfer:0}),yh=St(Fu),Cr=b({},wr,{relatedTarget:0}),Ta=St(Cr),Go=b({},Be,{animationName:0,elapsedTime:0,pseudoElement:0}),wa=St(Go),qu=b({},Be,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Aa=St(qu),_h=b({},Be,{data:0}),Yo=St(_h),Rr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $o(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=Gu[t])?!!s[t]:!1}function Nr(){return $o}var Yu=b({},wr,{key:function(t){if(t.key){var s=Rr[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=ai(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nr,charCode:function(t){return t.type==="keypress"?ai(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ai(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ca=St(Yu),$u=b({},Ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=St($u),Mi=b({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nr}),Ku=St(Mi),Wu=b({},Be,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xu=St(Wu),Qu=b({},Ar,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qt=St(Qu),Zu=b({},Be,{newState:0,oldState:0}),Ju=St(Zu),Ss=[9,13,27,32],c=Bn&&"CompositionEvent"in window,v=null;Bn&&"documentMode"in document&&(v=document.documentMode);var y=Bn&&"TextEvent"in window&&!v,T=Bn&&(!c||v&&8<v&&11>=v),j=" ",G=!1;function re(t,s){switch(t){case"keyup":return Ss.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function je(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var it=!1;function Ie(t,s){switch(t){case"compositionend":return je(s);case"keypress":return s.which!==32?null:(G=!0,j);case"textInput":return t=s.data,t===j&&G?null:t;default:return null}}function Tt(t,s){if(it)return t==="compositionend"||!c&&re(t,s)?(t=qo(),Di=Es=ri=null,it=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return T&&s.locale!=="ko"?null:s.data;default:return null}}var wt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Li(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!wt[t.type]:s==="textarea"}function Zt(t,s,a,l){Oi?ki?ki.push(l):ki=[l]:Oi=l,s=zc(s,"onChange"),0<s.length&&(a=new ba("onChange","change",null,a,l),t.push({event:a,listeners:s}))}var ui=null,Pi=null;function Rw(t){__(t,0)}function ec(t){var s=ni(t);if(zo(s))return t}function Hg(t,s){if(t==="change")return s}var Bg=!1;if(Bn){var bh;if(Bn){var Eh="oninput"in document;if(!Eh){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),Eh=typeof Fg.oninput=="function"}bh=Eh}else bh=!1;Bg=bh&&(!document.documentMode||9<document.documentMode)}function qg(){ui&&(ui.detachEvent("onpropertychange",Vg),Pi=ui=null)}function Vg(t){if(t.propertyName==="value"&&ec(Pi)){var s=[];Zt(s,Pi,t,wn(t)),Hu(Rw,s)}}function Nw(t,s,a){t==="focusin"?(qg(),ui=s,Pi=a,ui.attachEvent("onpropertychange",Vg)):t==="focusout"&&qg()}function Iw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(Pi)}function xw(t,s){if(t==="click")return ec(s)}function Ow(t,s){if(t==="input"||t==="change")return ec(s)}function kw(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var un=typeof Object.is=="function"?Object.is:kw;function Wo(t,s){if(un(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var a=Object.keys(t),l=Object.keys(s);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!rr.call(s,f)||!un(t[f],s[f]))return!1}return!0}function Gg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yg(t,s){var a=Gg(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=s&&l>=s)return{node:a,offset:s-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gg(a)}}function $g(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?$g(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function Kg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var s=yr(t.document);s instanceof t.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)t=s.contentWindow;else break;s=yr(t.document)}return s}function Sh(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}var Dw=Bn&&"documentMode"in document&&11>=document.documentMode,Ra=null,Th=null,Xo=null,wh=!1;function Wg(t,s,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wh||Ra==null||Ra!==yr(l)||(l=Ra,"selectionStart"in l&&Sh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xo&&Wo(Xo,l)||(Xo=l,l=zc(Th,"onSelect"),0<l.length&&(s=new ba("onSelect","select",null,s,a),t.push({event:s,listeners:l}),s.target=Ra)))}function Ir(t,s){var a={};return a[t.toLowerCase()]=s.toLowerCase(),a["Webkit"+t]="webkit"+s,a["Moz"+t]="moz"+s,a}var Na={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionrun:Ir("Transition","TransitionRun"),transitionstart:Ir("Transition","TransitionStart"),transitioncancel:Ir("Transition","TransitionCancel"),transitionend:Ir("Transition","TransitionEnd")},Ah={},Xg={};Bn&&(Xg=document.createElement("div").style,"AnimationEvent"in window||(delete Na.animationend.animation,delete Na.animationiteration.animation,delete Na.animationstart.animation),"TransitionEvent"in window||delete Na.transitionend.transition);function xr(t){if(Ah[t])return Ah[t];if(!Na[t])return t;var s=Na[t],a;for(a in s)if(s.hasOwnProperty(a)&&a in Xg)return Ah[t]=s[a];return t}var Qg=xr("animationend"),Zg=xr("animationiteration"),Jg=xr("animationstart"),Mw=xr("transitionrun"),Lw=xr("transitionstart"),Pw=xr("transitioncancel"),ev=xr("transitionend"),tv=new Map,Ch="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ch.push("scrollEnd");function Fn(t,s){tv.set(t,s),Hn(s,[t])}var nv=new WeakMap;function Rn(t,s){if(typeof t=="object"&&t!==null){var a=nv.get(t);return a!==void 0?a:(s={value:t,source:s,stack:va(s)},nv.set(t,s),s)}return{value:t,source:s,stack:va(s)}}var Nn=[],Ia=0,Rh=0;function tc(){for(var t=Ia,s=Rh=Ia=0;s<t;){var a=Nn[s];Nn[s++]=null;var l=Nn[s];Nn[s++]=null;var f=Nn[s];Nn[s++]=null;var d=Nn[s];if(Nn[s++]=null,l!==null&&f!==null){var _=l.pending;_===null?f.next=f:(f.next=_.next,_.next=f),l.pending=f}d!==0&&iv(a,f,d)}}function nc(t,s,a,l){Nn[Ia++]=t,Nn[Ia++]=s,Nn[Ia++]=a,Nn[Ia++]=l,Rh|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Nh(t,s,a,l){return nc(t,s,a,l),ic(t)}function xa(t,s){return nc(t,null,null,s),ic(t)}function iv(t,s,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&s!==null&&(f=31-zt(a),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[s]:l.push(s),s.lane=a|536870912),d):null}function ic(t){if(50<El)throw El=0,Md=null,Error(r(185));for(var s=t.return;s!==null;)t=s,s=t.return;return t.tag===3?t.stateNode:null}var Oa={};function Uw(t,s,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(t,s,a,l){return new Uw(t,s,a,l)}function Ih(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ui(t,s){var a=t.alternate;return a===null?(a=cn(t.tag,s,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=s,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,s=t.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function sv(t,s){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=s,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,s=a.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),t}function sc(t,s,a,l,f,d){var _=0;if(l=t,typeof t=="function")Ih(t)&&(_=1);else if(typeof t=="string")_=zA(t,a,pe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=cn(31,a,s,f),t.elementType=C,t.lanes=d,t;case H:return Or(a.children,f,d,s);case $:_=8,f|=24;break;case V:return t=cn(12,a,s,f|2),t.elementType=V,t.lanes=d,t;case ne:return t=cn(13,a,s,f),t.elementType=ne,t.lanes=d,t;case be:return t=cn(19,a,s,f),t.elementType=be,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J:case ee:_=10;break e;case Z:_=9;break e;case ce:_=11;break e;case D:_=14;break e;case A:_=16,l=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),l=null}return s=cn(_,a,s,f),s.elementType=t,s.type=l,s.lanes=d,s}function Or(t,s,a,l){return t=cn(7,t,l,s),t.lanes=a,t}function xh(t,s,a){return t=cn(6,t,null,s),t.lanes=a,t}function Oh(t,s,a){return s=cn(4,t.children!==null?t.children:[],t.key,s),s.lanes=a,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}var ka=[],Da=0,rc=null,ac=0,In=[],xn=0,kr=null,ji=1,zi="";function Dr(t,s){ka[Da++]=ac,ka[Da++]=rc,rc=t,ac=s}function rv(t,s,a){In[xn++]=ji,In[xn++]=zi,In[xn++]=kr,kr=t;var l=ji;t=zi;var f=32-zt(l)-1;l&=~(1<<f),a+=1;var d=32-zt(s)+f;if(30<d){var _=f-f%5;d=(l&(1<<_)-1).toString(32),l>>=_,f-=_,ji=1<<32-zt(s)+f|a<<f|l,zi=d+t}else ji=1<<d|a<<f|l,zi=t}function kh(t){t.return!==null&&(Dr(t,1),rv(t,1,0))}function Dh(t){for(;t===rc;)rc=ka[--Da],ka[Da]=null,ac=ka[--Da],ka[Da]=null;for(;t===kr;)kr=In[--xn],In[xn]=null,zi=In[--xn],In[xn]=null,ji=In[--xn],In[xn]=null}var Kt=null,ut=null,Pe=!1,Mr=null,ci=!1,Mh=Error(r(519));function Lr(t){var s=Error(r(418,""));throw Jo(Rn(s,t)),Mh}function av(t){var s=t.stateNode,a=t.type,l=t.memoizedProps;switch(s[yt]=t,s[pt]=l,a){case"dialog":Ce("cancel",s),Ce("close",s);break;case"iframe":case"object":case"embed":Ce("load",s);break;case"video":case"audio":for(a=0;a<Tl.length;a++)Ce(Tl[a],s);break;case"source":Ce("error",s);break;case"img":case"image":case"link":Ce("error",s),Ce("load",s);break;case"details":Ce("toggle",s);break;case"input":Ce("invalid",s),_r(s,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ya(s);break;case"select":Ce("invalid",s);break;case"textarea":Ce("invalid",s),br(s,l.value,l.defaultValue,l.children),ya(s)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||s.textContent===""+a||l.suppressHydrationWarning===!0||T_(s.textContent,a)?(l.popover!=null&&(Ce("beforetoggle",s),Ce("toggle",s)),l.onScroll!=null&&Ce("scroll",s),l.onScrollEnd!=null&&Ce("scrollend",s),l.onClick!=null&&(s.onclick=Hc),s=!0):s=!1,s||Lr(t)}function ov(t){for(Kt=t.return;Kt;)switch(Kt.tag){case 5:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Kt=Kt.return}}function Qo(t){if(t!==Kt)return!1;if(!Pe)return ov(t),Pe=!0,!1;var s=t.tag,a;if((a=s!==3&&s!==27)&&((a=s===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Xd(t.type,t.memoizedProps)),a=!a),a&&ut&&Lr(t),ov(t),s===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,s=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(s===0){ut=Vn(t.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++;t=t.nextSibling}ut=null}}else s===27?(s=ut,js(t.type)?(t=ep,ep=null,ut=t):ut=s):ut=Kt?Vn(t.stateNode.nextSibling):null;return!0}function Zo(){ut=Kt=null,Pe=!1}function lv(){var t=Mr;return t!==null&&(tn===null?tn=t:tn.push.apply(tn,t),Mr=null),t}function Jo(t){Mr===null?Mr=[t]:Mr.push(t)}var Lh=te(null),Pr=null,Hi=null;function Ts(t,s,a){se(Lh,s._currentValue),s._currentValue=a}function Bi(t){t._currentValue=Lh.current,oe(Lh)}function Ph(t,s,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,l!==null&&(l.childLanes|=s)):l!==null&&(l.childLanes&s)!==s&&(l.childLanes|=s),t===a)break;t=t.return}}function Uh(t,s,a,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var _=f.child;d=d.firstContext;e:for(;d!==null;){var E=d;d=f;for(var R=0;R<s.length;R++)if(E.context===s[R]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),Ph(d.return,a,t),l||(_=null);break e}d=E.next}}else if(f.tag===18){if(_=f.return,_===null)throw Error(r(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),Ph(_,a,t),_=null}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===t){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}}function el(t,s,a,l){t=null;for(var f=s,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var _=f.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=f.type;un(f.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(f===Et.current){if(_=f.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Il):t=[Il])}f=f.return}t!==null&&Uh(s,t,a,l),s.flags|=262144}function oc(t){for(t=t.firstContext;t!==null;){if(!un(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ur(t){Pr=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ht(t){return uv(Pr,t)}function lc(t,s){return Pr===null&&Ur(t),uv(t,s)}function uv(t,s){var a=s._currentValue;if(s={context:s,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(r(308));Hi=s,t.dependencies={lanes:0,firstContext:s},t.flags|=524288}else Hi=Hi.next=s;return a}var jw=typeof AbortController<"u"?AbortController:function(){var t=[],s=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){s.aborted=!0,t.forEach(function(a){return a()})}},zw=n.unstable_scheduleCallback,Hw=n.unstable_NormalPriority,_t={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jh(){return{controller:new jw,data:new Map,refCount:0}}function tl(t){t.refCount--,t.refCount===0&&zw(Hw,function(){t.controller.abort()})}var nl=null,zh=0,Ma=0,La=null;function Bw(t,s){if(nl===null){var a=nl=[];zh=0,Ma=Bd(),La={status:"pending",value:void 0,then:function(l){a.push(l)}}}return zh++,s.then(cv,cv),s}function cv(){if(--zh===0&&nl!==null){La!==null&&(La.status="fulfilled");var t=nl;nl=null,Ma=0,La=null;for(var s=0;s<t.length;s++)(0,t[s])()}}function Fw(t,s){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return t.then(function(){l.status="fulfilled",l.value=s;for(var f=0;f<a.length;f++)(0,a[f])(s)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var fv=K.S;K.S=function(t,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&Bw(t,s),fv!==null&&fv(t,s)};var jr=te(null);function Hh(){var t=jr.current;return t!==null?t:Qe.pooledCache}function uc(t,s){s===null?se(jr,jr.current):se(jr,s.pool)}function hv(){var t=Hh();return t===null?null:{parent:_t._currentValue,pool:t}}var il=Error(r(460)),dv=Error(r(474)),cc=Error(r(542)),Bh={then:function(){}};function pv(t){return t=t.status,t==="fulfilled"||t==="rejected"}function fc(){}function mv(t,s,a){switch(a=t[a],a===void 0?t.push(s):a!==s&&(s.then(fc,fc),s=a),s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,vv(t),t;default:if(typeof s.status=="string")s.then(fc,fc);else{if(t=Qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=s,t.status="pending",t.then(function(l){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=l}},function(l){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=l}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw t=s.reason,vv(t),t}throw sl=s,il}}var sl=null;function gv(){if(sl===null)throw Error(r(459));var t=sl;return sl=null,t}function vv(t){if(t===il||t===cc)throw Error(r(483))}var ws=!1;function Fh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qh(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function As(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Cs(t,s,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Fe&2)!==0){var f=l.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),l.pending=s,s=ic(t),iv(t,null,a),s}return nc(t,l,s,a),ic(t)}function rl(t,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194048)!==0)){var l=s.lanes;l&=t.pendingLanes,a|=l,s.lanes=a,Mo(t,a)}}function Vh(t,s){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?f=d=s:d=d.next=s}else f=d=s;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=s:t.next=s,a.lastBaseUpdate=s}var Gh=!1;function al(){if(Gh){var t=La;if(t!==null)throw t}}function ol(t,s,a,l){Gh=!1;var f=t.updateQueue;ws=!1;var d=f.firstBaseUpdate,_=f.lastBaseUpdate,E=f.shared.pending;if(E!==null){f.shared.pending=null;var R=E,B=R.next;R.next=null,_===null?d=B:_.next=B,_=R;var W=t.alternate;W!==null&&(W=W.updateQueue,E=W.lastBaseUpdate,E!==_&&(E===null?W.firstBaseUpdate=B:E.next=B,W.lastBaseUpdate=R))}if(d!==null){var Q=f.baseState;_=0,W=B=R=null,E=d;do{var F=E.lane&-536870913,q=F!==E.lane;if(q?(xe&F)===F:(l&F)===F){F!==0&&F===Ma&&(Gh=!0),W!==null&&(W=W.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ve=t,me=E;F=s;var $e=a;switch(me.tag){case 1:if(ve=me.payload,typeof ve=="function"){Q=ve.call($e,Q,F);break e}Q=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=me.payload,F=typeof ve=="function"?ve.call($e,Q,F):ve,F==null)break e;Q=b({},Q,F);break e;case 2:ws=!0}}F=E.callback,F!==null&&(t.flags|=64,q&&(t.flags|=8192),q=f.callbacks,q===null?f.callbacks=[F]:q.push(F))}else q={lane:F,tag:E.tag,payload:E.payload,callback:E.callback,next:null},W===null?(B=W=q,R=Q):W=W.next=q,_|=F;if(E=E.next,E===null){if(E=f.shared.pending,E===null)break;q=E,E=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);W===null&&(R=Q),f.baseState=R,f.firstBaseUpdate=B,f.lastBaseUpdate=W,d===null&&(f.shared.lanes=0),Ms|=_,t.lanes=_,t.memoizedState=Q}}function yv(t,s){if(typeof t!="function")throw Error(r(191,t));t.call(s)}function _v(t,s){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)yv(a[t],s)}var Pa=te(null),hc=te(0);function bv(t,s){t=Ki,se(hc,t),se(Pa,s),Ki=t|s.baseLanes}function Yh(){se(hc,Ki),se(Pa,Pa.current)}function $h(){Ki=hc.current,oe(Pa),oe(hc)}var Rs=0,Se=null,Ge=null,gt=null,dc=!1,Ua=!1,zr=!1,pc=0,ll=0,ja=null,qw=0;function ht(){throw Error(r(321))}function Kh(t,s){if(s===null)return!1;for(var a=0;a<s.length&&a<t.length;a++)if(!un(t[a],s[a]))return!1;return!0}function Wh(t,s,a,l,f,d){return Rs=d,Se=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,K.H=t===null||t.memoizedState===null?iy:sy,zr=!1,d=a(l,f),zr=!1,Ua&&(d=Sv(s,a,l,f)),Ev(t),d}function Ev(t){K.H=bc;var s=Ge!==null&&Ge.next!==null;if(Rs=0,gt=Ge=Se=null,dc=!1,ll=0,ja=null,s)throw Error(r(300));t===null||At||(t=t.dependencies,t!==null&&oc(t)&&(At=!0))}function Sv(t,s,a,l){Se=t;var f=0;do{if(Ua&&(ja=null),ll=0,Ua=!1,25<=f)throw Error(r(301));if(f+=1,gt=Ge=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}K.H=Xw,d=s(a,l)}while(Ua);return d}function Vw(){var t=K.H,s=t.useState()[0];return s=typeof s.then=="function"?ul(s):s,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(Se.flags|=1024),s}function Xh(){var t=pc!==0;return pc=0,t}function Qh(t,s,a){s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~a}function Zh(t){if(dc){for(t=t.memoizedState;t!==null;){var s=t.queue;s!==null&&(s.pending=null),t=t.next}dc=!1}Rs=0,gt=Ge=Se=null,Ua=!1,ll=pc=0,ja=null}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Se.memoizedState=gt=t:gt=gt.next=t,gt}function vt(){if(Ge===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var s=gt===null?Se.memoizedState:gt.next;if(s!==null)gt=s,Ge=t;else{if(t===null)throw Se.alternate===null?Error(r(467)):Error(r(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},gt===null?Se.memoizedState=gt=t:gt=gt.next=t}return gt}function Jh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(t){var s=ll;return ll+=1,ja===null&&(ja=[]),t=mv(ja,t,s),s=Se,(gt===null?s.memoizedState:gt.next)===null&&(s=s.alternate,K.H=s===null||s.memoizedState===null?iy:sy),t}function mc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ul(t);if(t.$$typeof===ee)return Ht(t)}throw Error(r(438,String(t)))}function ed(t){var s=null,a=Se.updateQueue;if(a!==null&&(s=a.memoCache),s==null){var l=Se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(s={data:l.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),a===null&&(a=Jh(),Se.updateQueue=a),a.memoCache=s,a=s.data[s.index],a===void 0)for(a=s.data[s.index]=Array(t),l=0;l<t;l++)a[l]=k;return s.index++,a}function Fi(t,s){return typeof s=="function"?s(t):s}function gc(t){var s=vt();return td(s,Ge,t)}function td(t,s,a){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var _=f.next;f.next=d.next,d.next=_}s.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{s=f.next;var E=_=null,R=null,B=s,W=!1;do{var Q=B.lane&-536870913;if(Q!==B.lane?(xe&Q)===Q:(Rs&Q)===Q){var F=B.revertLane;if(F===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Q===Ma&&(W=!0);else if((Rs&F)===F){B=B.next,F===Ma&&(W=!0);continue}else Q={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},R===null?(E=R=Q,_=d):R=R.next=Q,Se.lanes|=F,Ms|=F;Q=B.action,zr&&a(d,Q),d=B.hasEagerState?B.eagerState:a(d,Q)}else F={lane:Q,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},R===null?(E=R=F,_=d):R=R.next=F,Se.lanes|=Q,Ms|=Q;B=B.next}while(B!==null&&B!==s);if(R===null?_=d:R.next=E,!un(d,t.memoizedState)&&(At=!0,W&&(a=La,a!==null)))throw a;t.memoizedState=d,t.baseState=_,t.baseQueue=R,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function nd(t){var s=vt(),a=s.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,d=s.memoizedState;if(f!==null){a.pending=null;var _=f=f.next;do d=t(d,_.action),_=_.next;while(_!==f);un(d,s.memoizedState)||(At=!0),s.memoizedState=d,s.baseQueue===null&&(s.baseState=d),a.lastRenderedState=d}return[d,l]}function Tv(t,s,a){var l=Se,f=vt(),d=Pe;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=s();var _=!un((Ge||f).memoizedState,a);_&&(f.memoizedState=a,At=!0),f=f.queue;var E=Cv.bind(null,l,f,t);if(cl(2048,8,E,[t]),f.getSnapshot!==s||_||gt!==null&&gt.memoizedState.tag&1){if(l.flags|=2048,za(9,vc(),Av.bind(null,l,f,a,s),null),Qe===null)throw Error(r(349));d||(Rs&124)!==0||wv(l,s,a)}return a}function wv(t,s,a){t.flags|=16384,t={getSnapshot:s,value:a},s=Se.updateQueue,s===null?(s=Jh(),Se.updateQueue=s,s.stores=[t]):(a=s.stores,a===null?s.stores=[t]:a.push(t))}function Av(t,s,a,l){s.value=a,s.getSnapshot=l,Rv(s)&&Nv(t)}function Cv(t,s,a){return a(function(){Rv(s)&&Nv(t)})}function Rv(t){var s=t.getSnapshot;t=t.value;try{var a=s();return!un(t,a)}catch{return!0}}function Nv(t){var s=xa(t,2);s!==null&&mn(s,t,2)}function id(t){var s=Jt();if(typeof t=="function"){var a=t;if(t=a(),zr){on(!0);try{a()}finally{on(!1)}}}return s.memoizedState=s.baseState=t,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},s}function Iv(t,s,a,l){return t.baseState=a,td(t,Ge,typeof l=="function"?l:Fi)}function Gw(t,s,a,l,f){if(_c(t))throw Error(r(485));if(t=s.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};K.T!==null?a(!0):d.isTransition=!1,l(d),a=s.pending,a===null?(d.next=s.pending=d,xv(s,d)):(d.next=a.next,s.pending=a.next=d)}}function xv(t,s){var a=s.action,l=s.payload,f=t.state;if(s.isTransition){var d=K.T,_={};K.T=_;try{var E=a(f,l),R=K.S;R!==null&&R(_,E),Ov(t,s,E)}catch(B){sd(t,s,B)}finally{K.T=d}}else try{d=a(f,l),Ov(t,s,d)}catch(B){sd(t,s,B)}}function Ov(t,s,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){kv(t,s,l)},function(l){return sd(t,s,l)}):kv(t,s,a)}function kv(t,s,a){s.status="fulfilled",s.value=a,Dv(s),t.state=a,s=t.pending,s!==null&&(a=s.next,a===s?t.pending=null:(a=a.next,s.next=a,xv(t,a)))}function sd(t,s,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do s.status="rejected",s.reason=a,Dv(s),s=s.next;while(s!==l)}t.action=null}function Dv(t){t=t.listeners;for(var s=0;s<t.length;s++)(0,t[s])()}function Mv(t,s){return s}function Lv(t,s){if(Pe){var a=Qe.formState;if(a!==null){e:{var l=Se;if(Pe){if(ut){t:{for(var f=ut,d=ci;f.nodeType!==8;){if(!d){f=null;break t}if(f=Vn(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){ut=Vn(f.nextSibling),l=f.data==="F!";break e}}Lr(l)}l=!1}l&&(s=a[0])}}return a=Jt(),a.memoizedState=a.baseState=s,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mv,lastRenderedState:s},a.queue=l,a=ey.bind(null,Se,l),l.dispatch=a,l=id(!1),d=ud.bind(null,Se,!1,l.queue),l=Jt(),f={state:s,dispatch:null,action:t,pending:null},l.queue=f,a=Gw.bind(null,Se,f,d,a),f.dispatch=a,l.memoizedState=t,[s,a,!1]}function Pv(t){var s=vt();return Uv(s,Ge,t)}function Uv(t,s,a){if(s=td(t,s,Mv)[0],t=gc(Fi)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var l=ul(s)}catch(_){throw _===il?cc:_}else l=s;s=vt();var f=s.queue,d=f.dispatch;return a!==s.memoizedState&&(Se.flags|=2048,za(9,vc(),Yw.bind(null,f,a),null)),[l,d,t]}function Yw(t,s){t.action=s}function jv(t){var s=vt(),a=Ge;if(a!==null)return Uv(s,a,t);vt(),s=s.memoizedState,a=vt();var l=a.queue.dispatch;return a.memoizedState=t,[s,l,!1]}function za(t,s,a,l){return t={tag:t,create:a,deps:l,inst:s,next:null},s=Se.updateQueue,s===null&&(s=Jh(),Se.updateQueue=s),a=s.lastEffect,a===null?s.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,s.lastEffect=t),t}function vc(){return{destroy:void 0,resource:void 0}}function zv(){return vt().memoizedState}function yc(t,s,a,l){var f=Jt();l=l===void 0?null:l,Se.flags|=t,f.memoizedState=za(1|s,vc(),a,l)}function cl(t,s,a,l){var f=vt();l=l===void 0?null:l;var d=f.memoizedState.inst;Ge!==null&&l!==null&&Kh(l,Ge.memoizedState.deps)?f.memoizedState=za(s,d,a,l):(Se.flags|=t,f.memoizedState=za(1|s,d,a,l))}function Hv(t,s){yc(8390656,8,t,s)}function Bv(t,s){cl(2048,8,t,s)}function Fv(t,s){return cl(4,2,t,s)}function qv(t,s){return cl(4,4,t,s)}function Vv(t,s){if(typeof s=="function"){t=t();var a=s(t);return function(){typeof a=="function"?a():s(null)}}if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function Gv(t,s,a){a=a!=null?a.concat([t]):null,cl(4,4,Vv.bind(null,s,t),a)}function rd(){}function Yv(t,s){var a=vt();s=s===void 0?null:s;var l=a.memoizedState;return s!==null&&Kh(s,l[1])?l[0]:(a.memoizedState=[t,s],t)}function $v(t,s){var a=vt();s=s===void 0?null:s;var l=a.memoizedState;if(s!==null&&Kh(s,l[1]))return l[0];if(l=t(),zr){on(!0);try{t()}finally{on(!1)}}return a.memoizedState=[l,s],l}function ad(t,s,a){return a===void 0||(Rs&1073741824)!==0?t.memoizedState=s:(t.memoizedState=a,t=Xy(),Se.lanes|=t,Ms|=t,a)}function Kv(t,s,a,l){return un(a,s)?a:Pa.current!==null?(t=ad(t,a,l),un(t,s)||(At=!0),t):(Rs&42)===0?(At=!0,t.memoizedState=a):(t=Xy(),Se.lanes|=t,Ms|=t,s)}function Wv(t,s,a,l,f){var d=ae.p;ae.p=d!==0&&8>d?d:8;var _=K.T,E={};K.T=E,ud(t,!1,s,a);try{var R=f(),B=K.S;if(B!==null&&B(E,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var W=Fw(R,l);fl(t,s,W,pn(t))}else fl(t,s,l,pn(t))}catch(Q){fl(t,s,{then:function(){},status:"rejected",reason:Q},pn())}finally{ae.p=d,K.T=_}}function $w(){}function od(t,s,a,l){if(t.tag!==5)throw Error(r(476));var f=Xv(t).queue;Wv(t,f,s,he,a===null?$w:function(){return Qv(t),a(l)})}function Xv(t){var s=t.memoizedState;if(s!==null)return s;s={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:he},next:null};var a={};return s.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=s,t=t.alternate,t!==null&&(t.memoizedState=s),s}function Qv(t){var s=Xv(t).next.queue;fl(t,s,{},pn())}function ld(){return Ht(Il)}function Zv(){return vt().memoizedState}function Jv(){return vt().memoizedState}function Kw(t){for(var s=t.return;s!==null;){switch(s.tag){case 24:case 3:var a=pn();t=As(a);var l=Cs(s,t,a);l!==null&&(mn(l,s,a),rl(l,s,a)),s={cache:jh()},t.payload=s;return}s=s.return}}function Ww(t,s,a){var l=pn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},_c(t)?ty(s,a):(a=Nh(t,s,a,l),a!==null&&(mn(a,t,l),ny(a,s,l)))}function ey(t,s,a){var l=pn();fl(t,s,a,l)}function fl(t,s,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(_c(t))ty(s,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=s.lastRenderedReducer,d!==null))try{var _=s.lastRenderedState,E=d(_,a);if(f.hasEagerState=!0,f.eagerState=E,un(E,_))return nc(t,s,f,0),Qe===null&&tc(),!1}catch{}finally{}if(a=Nh(t,s,f,l),a!==null)return mn(a,t,l),ny(a,s,l),!0}return!1}function ud(t,s,a,l){if(l={lane:2,revertLane:Bd(),action:l,hasEagerState:!1,eagerState:null,next:null},_c(t)){if(s)throw Error(r(479))}else s=Nh(t,a,l,2),s!==null&&mn(s,t,2)}function _c(t){var s=t.alternate;return t===Se||s!==null&&s===Se}function ty(t,s){Ua=dc=!0;var a=t.pending;a===null?s.next=s:(s.next=a.next,a.next=s),t.pending=s}function ny(t,s,a){if((a&4194048)!==0){var l=s.lanes;l&=t.pendingLanes,a|=l,s.lanes=a,Mo(t,a)}}var bc={readContext:Ht,use:mc,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht},iy={readContext:Ht,use:mc,useCallback:function(t,s){return Jt().memoizedState=[t,s===void 0?null:s],t},useContext:Ht,useEffect:Hv,useImperativeHandle:function(t,s,a){a=a!=null?a.concat([t]):null,yc(4194308,4,Vv.bind(null,s,t),a)},useLayoutEffect:function(t,s){return yc(4194308,4,t,s)},useInsertionEffect:function(t,s){yc(4,2,t,s)},useMemo:function(t,s){var a=Jt();s=s===void 0?null:s;var l=t();if(zr){on(!0);try{t()}finally{on(!1)}}return a.memoizedState=[l,s],l},useReducer:function(t,s,a){var l=Jt();if(a!==void 0){var f=a(s);if(zr){on(!0);try{a(s)}finally{on(!1)}}}else f=s;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=Ww.bind(null,Se,t),[l.memoizedState,t]},useRef:function(t){var s=Jt();return t={current:t},s.memoizedState=t},useState:function(t){t=id(t);var s=t.queue,a=ey.bind(null,Se,s);return s.dispatch=a,[t.memoizedState,a]},useDebugValue:rd,useDeferredValue:function(t,s){var a=Jt();return ad(a,t,s)},useTransition:function(){var t=id(!1);return t=Wv.bind(null,Se,t.queue,!0,!1),Jt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,s,a){var l=Se,f=Jt();if(Pe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=s(),Qe===null)throw Error(r(349));(xe&124)!==0||wv(l,s,a)}f.memoizedState=a;var d={value:a,getSnapshot:s};return f.queue=d,Hv(Cv.bind(null,l,d,t),[t]),l.flags|=2048,za(9,vc(),Av.bind(null,l,d,a,s),null),a},useId:function(){var t=Jt(),s=Qe.identifierPrefix;if(Pe){var a=zi,l=ji;a=(l&~(1<<32-zt(l)-1)).toString(32)+a,s="«"+s+"R"+a,a=pc++,0<a&&(s+="H"+a.toString(32)),s+="»"}else a=qw++,s="«"+s+"r"+a.toString(32)+"»";return t.memoizedState=s},useHostTransitionStatus:ld,useFormState:Lv,useActionState:Lv,useOptimistic:function(t){var s=Jt();s.memoizedState=s.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=a,s=ud.bind(null,Se,!0,a),a.dispatch=s,[t,s]},useMemoCache:ed,useCacheRefresh:function(){return Jt().memoizedState=Kw.bind(null,Se)}},sy={readContext:Ht,use:mc,useCallback:Yv,useContext:Ht,useEffect:Bv,useImperativeHandle:Gv,useInsertionEffect:Fv,useLayoutEffect:qv,useMemo:$v,useReducer:gc,useRef:zv,useState:function(){return gc(Fi)},useDebugValue:rd,useDeferredValue:function(t,s){var a=vt();return Kv(a,Ge.memoizedState,t,s)},useTransition:function(){var t=gc(Fi)[0],s=vt().memoizedState;return[typeof t=="boolean"?t:ul(t),s]},useSyncExternalStore:Tv,useId:Zv,useHostTransitionStatus:ld,useFormState:Pv,useActionState:Pv,useOptimistic:function(t,s){var a=vt();return Iv(a,Ge,t,s)},useMemoCache:ed,useCacheRefresh:Jv},Xw={readContext:Ht,use:mc,useCallback:Yv,useContext:Ht,useEffect:Bv,useImperativeHandle:Gv,useInsertionEffect:Fv,useLayoutEffect:qv,useMemo:$v,useReducer:nd,useRef:zv,useState:function(){return nd(Fi)},useDebugValue:rd,useDeferredValue:function(t,s){var a=vt();return Ge===null?ad(a,t,s):Kv(a,Ge.memoizedState,t,s)},useTransition:function(){var t=nd(Fi)[0],s=vt().memoizedState;return[typeof t=="boolean"?t:ul(t),s]},useSyncExternalStore:Tv,useId:Zv,useHostTransitionStatus:ld,useFormState:jv,useActionState:jv,useOptimistic:function(t,s){var a=vt();return Ge!==null?Iv(a,Ge,t,s):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ed,useCacheRefresh:Jv},Ha=null,hl=0;function Ec(t){var s=hl;return hl+=1,Ha===null&&(Ha=[]),mv(Ha,t,s)}function dl(t,s){s=s.props.ref,t.ref=s!==void 0?s:null}function Sc(t,s){throw s.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(s),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t)))}function ry(t){var s=t._init;return s(t._payload)}function ay(t){function s(P,O){if(t){var z=P.deletions;z===null?(P.deletions=[O],P.flags|=16):z.push(O)}}function a(P,O){if(!t)return null;for(;O!==null;)s(P,O),O=O.sibling;return null}function l(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function f(P,O){return P=Ui(P,O),P.index=0,P.sibling=null,P}function d(P,O,z){return P.index=z,t?(z=P.alternate,z!==null?(z=z.index,z<O?(P.flags|=67108866,O):z):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function _(P){return t&&P.alternate===null&&(P.flags|=67108866),P}function E(P,O,z,X){return O===null||O.tag!==6?(O=xh(z,P.mode,X),O.return=P,O):(O=f(O,z),O.return=P,O)}function R(P,O,z,X){var ue=z.type;return ue===H?W(P,O,z.props.children,X,z.key):O!==null&&(O.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===A&&ry(ue)===O.type)?(O=f(O,z.props),dl(O,z),O.return=P,O):(O=sc(z.type,z.key,z.props,null,P.mode,X),dl(O,z),O.return=P,O)}function B(P,O,z,X){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=Oh(z,P.mode,X),O.return=P,O):(O=f(O,z.children||[]),O.return=P,O)}function W(P,O,z,X,ue){return O===null||O.tag!==7?(O=Or(z,P.mode,X,ue),O.return=P,O):(O=f(O,z),O.return=P,O)}function Q(P,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=xh(""+O,P.mode,z),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case N:return z=sc(O.type,O.key,O.props,null,P.mode,z),dl(z,O),z.return=P,z;case L:return O=Oh(O,P.mode,z),O.return=P,O;case A:var X=O._init;return O=X(O._payload),Q(P,O,z)}if(ot(O)||U(O))return O=Or(O,P.mode,z,null),O.return=P,O;if(typeof O.then=="function")return Q(P,Ec(O),z);if(O.$$typeof===ee)return Q(P,lc(P,O),z);Sc(P,O)}return null}function F(P,O,z,X){var ue=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ue!==null?null:E(P,O,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case N:return z.key===ue?R(P,O,z,X):null;case L:return z.key===ue?B(P,O,z,X):null;case A:return ue=z._init,z=ue(z._payload),F(P,O,z,X)}if(ot(z)||U(z))return ue!==null?null:W(P,O,z,X,null);if(typeof z.then=="function")return F(P,O,Ec(z),X);if(z.$$typeof===ee)return F(P,O,lc(P,z),X);Sc(P,z)}return null}function q(P,O,z,X,ue){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return P=P.get(z)||null,E(O,P,""+X,ue);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case N:return P=P.get(X.key===null?z:X.key)||null,R(O,P,X,ue);case L:return P=P.get(X.key===null?z:X.key)||null,B(O,P,X,ue);case A:var we=X._init;return X=we(X._payload),q(P,O,z,X,ue)}if(ot(X)||U(X))return P=P.get(z)||null,W(O,P,X,ue,null);if(typeof X.then=="function")return q(P,O,z,Ec(X),ue);if(X.$$typeof===ee)return q(P,O,z,lc(O,X),ue);Sc(O,X)}return null}function ve(P,O,z,X){for(var ue=null,we=null,fe=O,ge=O=0,Rt=null;fe!==null&&ge<z.length;ge++){fe.index>ge?(Rt=fe,fe=null):Rt=fe.sibling;var Me=F(P,fe,z[ge],X);if(Me===null){fe===null&&(fe=Rt);break}t&&fe&&Me.alternate===null&&s(P,fe),O=d(Me,O,ge),we===null?ue=Me:we.sibling=Me,we=Me,fe=Rt}if(ge===z.length)return a(P,fe),Pe&&Dr(P,ge),ue;if(fe===null){for(;ge<z.length;ge++)fe=Q(P,z[ge],X),fe!==null&&(O=d(fe,O,ge),we===null?ue=fe:we.sibling=fe,we=fe);return Pe&&Dr(P,ge),ue}for(fe=l(fe);ge<z.length;ge++)Rt=q(fe,P,ge,z[ge],X),Rt!==null&&(t&&Rt.alternate!==null&&fe.delete(Rt.key===null?ge:Rt.key),O=d(Rt,O,ge),we===null?ue=Rt:we.sibling=Rt,we=Rt);return t&&fe.forEach(function(qs){return s(P,qs)}),Pe&&Dr(P,ge),ue}function me(P,O,z,X){if(z==null)throw Error(r(151));for(var ue=null,we=null,fe=O,ge=O=0,Rt=null,Me=z.next();fe!==null&&!Me.done;ge++,Me=z.next()){fe.index>ge?(Rt=fe,fe=null):Rt=fe.sibling;var qs=F(P,fe,Me.value,X);if(qs===null){fe===null&&(fe=Rt);break}t&&fe&&qs.alternate===null&&s(P,fe),O=d(qs,O,ge),we===null?ue=qs:we.sibling=qs,we=qs,fe=Rt}if(Me.done)return a(P,fe),Pe&&Dr(P,ge),ue;if(fe===null){for(;!Me.done;ge++,Me=z.next())Me=Q(P,Me.value,X),Me!==null&&(O=d(Me,O,ge),we===null?ue=Me:we.sibling=Me,we=Me);return Pe&&Dr(P,ge),ue}for(fe=l(fe);!Me.done;ge++,Me=z.next())Me=q(fe,P,ge,Me.value,X),Me!==null&&(t&&Me.alternate!==null&&fe.delete(Me.key===null?ge:Me.key),O=d(Me,O,ge),we===null?ue=Me:we.sibling=Me,we=Me);return t&&fe.forEach(function(QA){return s(P,QA)}),Pe&&Dr(P,ge),ue}function $e(P,O,z,X){if(typeof z=="object"&&z!==null&&z.type===H&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case N:e:{for(var ue=z.key;O!==null;){if(O.key===ue){if(ue=z.type,ue===H){if(O.tag===7){a(P,O.sibling),X=f(O,z.props.children),X.return=P,P=X;break e}}else if(O.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===A&&ry(ue)===O.type){a(P,O.sibling),X=f(O,z.props),dl(X,z),X.return=P,P=X;break e}a(P,O);break}else s(P,O);O=O.sibling}z.type===H?(X=Or(z.props.children,P.mode,X,z.key),X.return=P,P=X):(X=sc(z.type,z.key,z.props,null,P.mode,X),dl(X,z),X.return=P,P=X)}return _(P);case L:e:{for(ue=z.key;O!==null;){if(O.key===ue)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){a(P,O.sibling),X=f(O,z.children||[]),X.return=P,P=X;break e}else{a(P,O);break}else s(P,O);O=O.sibling}X=Oh(z,P.mode,X),X.return=P,P=X}return _(P);case A:return ue=z._init,z=ue(z._payload),$e(P,O,z,X)}if(ot(z))return ve(P,O,z,X);if(U(z)){if(ue=U(z),typeof ue!="function")throw Error(r(150));return z=ue.call(z),me(P,O,z,X)}if(typeof z.then=="function")return $e(P,O,Ec(z),X);if(z.$$typeof===ee)return $e(P,O,lc(P,z),X);Sc(P,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,O!==null&&O.tag===6?(a(P,O.sibling),X=f(O,z),X.return=P,P=X):(a(P,O),X=xh(z,P.mode,X),X.return=P,P=X),_(P)):a(P,O)}return function(P,O,z,X){try{hl=0;var ue=$e(P,O,z,X);return Ha=null,ue}catch(fe){if(fe===il||fe===cc)throw fe;var we=cn(29,fe,null,P.mode);return we.lanes=X,we.return=P,we}finally{}}}var Ba=ay(!0),oy=ay(!1),On=te(null),fi=null;function Ns(t){var s=t.alternate;se(bt,bt.current&1),se(On,t),fi===null&&(s===null||Pa.current!==null||s.memoizedState!==null)&&(fi=t)}function ly(t){if(t.tag===22){if(se(bt,bt.current),se(On,t),fi===null){var s=t.alternate;s!==null&&s.memoizedState!==null&&(fi=t)}}else Is()}function Is(){se(bt,bt.current),se(On,On.current)}function qi(t){oe(On),fi===t&&(fi=null),oe(bt)}var bt=te(0);function Tc(t){for(var s=t;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Jd(a)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function cd(t,s,a,l){s=t.memoizedState,a=a(l,s),a=a==null?s:b({},s,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var fd={enqueueSetState:function(t,s,a){t=t._reactInternals;var l=pn(),f=As(l);f.payload=s,a!=null&&(f.callback=a),s=Cs(t,f,l),s!==null&&(mn(s,t,l),rl(s,t,l))},enqueueReplaceState:function(t,s,a){t=t._reactInternals;var l=pn(),f=As(l);f.tag=1,f.payload=s,a!=null&&(f.callback=a),s=Cs(t,f,l),s!==null&&(mn(s,t,l),rl(s,t,l))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var a=pn(),l=As(a);l.tag=2,s!=null&&(l.callback=s),s=Cs(t,l,a),s!==null&&(mn(s,t,a),rl(s,t,a))}};function uy(t,s,a,l,f,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,_):s.prototype&&s.prototype.isPureReactComponent?!Wo(a,l)||!Wo(f,d):!0}function cy(t,s,a,l){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,l),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,l),s.state!==t&&fd.enqueueReplaceState(s,s.state,null)}function Hr(t,s){var a=s;if("ref"in s){a={};for(var l in s)l!=="ref"&&(a[l]=s[l])}if(t=t.defaultProps){a===s&&(a=b({},a));for(var f in t)a[f]===void 0&&(a[f]=t[f])}return a}var wc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function fy(t){wc(t)}function hy(t){console.error(t)}function dy(t){wc(t)}function Ac(t,s){try{var a=t.onUncaughtError;a(s.value,{componentStack:s.stack})}catch(l){setTimeout(function(){throw l})}}function py(t,s,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function hd(t,s,a){return a=As(a),a.tag=3,a.payload={element:null},a.callback=function(){Ac(t,s)},a}function my(t){return t=As(t),t.tag=3,t}function gy(t,s,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){py(s,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){py(s,a,l),typeof f!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function Qw(t,s,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(s=a.alternate,s!==null&&el(s,a,f,!0),a=On.current,a!==null){switch(a.tag){case 13:return fi===null?Pd():a.alternate===null&&ct===0&&(ct=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Bh?a.flags|=16384:(s=a.updateQueue,s===null?a.updateQueue=new Set([l]):s.add(l),jd(t,l,f)),!1;case 22:return a.flags|=65536,l===Bh?a.flags|=16384:(s=a.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=s):(a=s.retryQueue,a===null?s.retryQueue=new Set([l]):a.add(l)),jd(t,l,f)),!1}throw Error(r(435,a.tag))}return jd(t,l,f),Pd(),!1}if(Pe)return s=On.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,l!==Mh&&(t=Error(r(422),{cause:l}),Jo(Rn(t,a)))):(l!==Mh&&(s=Error(r(423),{cause:l}),Jo(Rn(s,a))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Rn(l,a),f=hd(t.stateNode,l,f),Vh(t,f),ct!==4&&(ct=2)),!1;var d=Error(r(520),{cause:l});if(d=Rn(d,a),bl===null?bl=[d]:bl.push(d),ct!==4&&(ct=2),s===null)return!0;l=Rn(l,a),a=s;do{switch(a.tag){case 3:return a.flags|=65536,t=f&-f,a.lanes|=t,t=hd(a.stateNode,l,t),Vh(a,t),!1;case 1:if(s=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ls===null||!Ls.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=my(f),gy(f,t,a,l),Vh(a,f),!1}a=a.return}while(a!==null);return!1}var vy=Error(r(461)),At=!1;function Dt(t,s,a,l){s.child=t===null?oy(s,null,a,l):Ba(s,t.child,a,l)}function yy(t,s,a,l,f){a=a.render;var d=s.ref;if("ref"in l){var _={};for(var E in l)E!=="ref"&&(_[E]=l[E])}else _=l;return Ur(s),l=Wh(t,s,a,_,d,f),E=Xh(),t!==null&&!At?(Qh(t,s,f),Vi(t,s,f)):(Pe&&E&&kh(s),s.flags|=1,Dt(t,s,l,f),s.child)}function _y(t,s,a,l,f){if(t===null){var d=a.type;return typeof d=="function"&&!Ih(d)&&d.defaultProps===void 0&&a.compare===null?(s.tag=15,s.type=d,by(t,s,d,l,f)):(t=sc(a.type,null,l,s,s.mode,f),t.ref=s.ref,t.return=s,s.child=t)}if(d=t.child,!bd(t,f)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:Wo,a(_,l)&&t.ref===s.ref)return Vi(t,s,f)}return s.flags|=1,t=Ui(d,l),t.ref=s.ref,t.return=s,s.child=t}function by(t,s,a,l,f){if(t!==null){var d=t.memoizedProps;if(Wo(d,l)&&t.ref===s.ref)if(At=!1,s.pendingProps=l=d,bd(t,f))(t.flags&131072)!==0&&(At=!0);else return s.lanes=t.lanes,Vi(t,s,f)}return dd(t,s,a,l,f)}function Ey(t,s,a){var l=s.pendingProps,f=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((s.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(f=s.child=t.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;s.childLanes=d&~l}else s.childLanes=0,s.child=null;return Sy(t,s,l,a)}if((a&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},t!==null&&uc(s,d!==null?d.cachePool:null),d!==null?bv(s,d):Yh(),ly(s);else return s.lanes=s.childLanes=536870912,Sy(t,s,d!==null?d.baseLanes|a:a,a)}else d!==null?(uc(s,d.cachePool),bv(s,d),Is(),s.memoizedState=null):(t!==null&&uc(s,null),Yh(),Is());return Dt(t,s,f,a),s.child}function Sy(t,s,a,l){var f=Hh();return f=f===null?null:{parent:_t._currentValue,pool:f},s.memoizedState={baseLanes:a,cachePool:f},t!==null&&uc(s,null),Yh(),ly(s),t!==null&&el(t,s,l,!0),null}function Cc(t,s){var a=s.ref;if(a===null)t!==null&&t.ref!==null&&(s.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(s.flags|=4194816)}}function dd(t,s,a,l,f){return Ur(s),a=Wh(t,s,a,l,void 0,f),l=Xh(),t!==null&&!At?(Qh(t,s,f),Vi(t,s,f)):(Pe&&l&&kh(s),s.flags|=1,Dt(t,s,a,f),s.child)}function Ty(t,s,a,l,f,d){return Ur(s),s.updateQueue=null,a=Sv(s,l,a,f),Ev(t),l=Xh(),t!==null&&!At?(Qh(t,s,d),Vi(t,s,d)):(Pe&&l&&kh(s),s.flags|=1,Dt(t,s,a,d),s.child)}function wy(t,s,a,l,f){if(Ur(s),s.stateNode===null){var d=Oa,_=a.contextType;typeof _=="object"&&_!==null&&(d=Ht(_)),d=new a(l,d),s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=fd,s.stateNode=d,d._reactInternals=s,d=s.stateNode,d.props=l,d.state=s.memoizedState,d.refs={},Fh(s),_=a.contextType,d.context=typeof _=="object"&&_!==null?Ht(_):Oa,d.state=s.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(cd(s,a,_,l),d.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&fd.enqueueReplaceState(d,d.state,null),ol(s,l,d,f),al(),d.state=s.memoizedState),typeof d.componentDidMount=="function"&&(s.flags|=4194308),l=!0}else if(t===null){d=s.stateNode;var E=s.memoizedProps,R=Hr(a,E);d.props=R;var B=d.context,W=a.contextType;_=Oa,typeof W=="object"&&W!==null&&(_=Ht(W));var Q=a.getDerivedStateFromProps;W=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=s.pendingProps!==E,W||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||B!==_)&&cy(s,d,l,_),ws=!1;var F=s.memoizedState;d.state=F,ol(s,l,d,f),al(),B=s.memoizedState,E||F!==B||ws?(typeof Q=="function"&&(cd(s,a,Q,l),B=s.memoizedState),(R=ws||uy(s,a,R,l,F,B,_))?(W||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=l,s.memoizedState=B),d.props=l,d.state=B,d.context=_,l=R):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),l=!1)}else{d=s.stateNode,qh(t,s),_=s.memoizedProps,W=Hr(a,_),d.props=W,Q=s.pendingProps,F=d.context,B=a.contextType,R=Oa,typeof B=="object"&&B!==null&&(R=Ht(B)),E=a.getDerivedStateFromProps,(B=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==Q||F!==R)&&cy(s,d,l,R),ws=!1,F=s.memoizedState,d.state=F,ol(s,l,d,f),al();var q=s.memoizedState;_!==Q||F!==q||ws||t!==null&&t.dependencies!==null&&oc(t.dependencies)?(typeof E=="function"&&(cd(s,a,E,l),q=s.memoizedState),(W=ws||uy(s,a,W,l,F,q,R)||t!==null&&t.dependencies!==null&&oc(t.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,q,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,q,R)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&F===t.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&F===t.memoizedState||(s.flags|=1024),s.memoizedProps=l,s.memoizedState=q),d.props=l,d.state=q,d.context=R,l=W):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&F===t.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&F===t.memoizedState||(s.flags|=1024),l=!1)}return d=l,Cc(t,s),l=(s.flags&128)!==0,d||l?(d=s.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),s.flags|=1,t!==null&&l?(s.child=Ba(s,t.child,null,f),s.child=Ba(s,null,a,f)):Dt(t,s,a,f),s.memoizedState=d.state,t=s.child):t=Vi(t,s,f),t}function Ay(t,s,a,l){return Zo(),s.flags|=256,Dt(t,s,a,l),s.child}var pd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function md(t){return{baseLanes:t,cachePool:hv()}}function gd(t,s,a){return t=t!==null?t.childLanes&~a:0,s&&(t|=kn),t}function Cy(t,s,a){var l=s.pendingProps,f=!1,d=(s.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(bt.current&2)!==0),_&&(f=!0,s.flags&=-129),_=(s.flags&32)!==0,s.flags&=-33,t===null){if(Pe){if(f?Ns(s):Is(),Pe){var E=ut,R;if(R=E){e:{for(R=E,E=ci;R.nodeType!==8;){if(!E){E=null;break e}if(R=Vn(R.nextSibling),R===null){E=null;break e}}E=R}E!==null?(s.memoizedState={dehydrated:E,treeContext:kr!==null?{id:ji,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},R=cn(18,null,null,0),R.stateNode=E,R.return=s,s.child=R,Kt=s,ut=null,R=!0):R=!1}R||Lr(s)}if(E=s.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Jd(E)?s.lanes=32:s.lanes=536870912,null;qi(s)}return E=l.children,l=l.fallback,f?(Is(),f=s.mode,E=Rc({mode:"hidden",children:E},f),l=Or(l,f,a,null),E.return=s,l.return=s,E.sibling=l,s.child=E,f=s.child,f.memoizedState=md(a),f.childLanes=gd(t,_,a),s.memoizedState=pd,l):(Ns(s),vd(s,E))}if(R=t.memoizedState,R!==null&&(E=R.dehydrated,E!==null)){if(d)s.flags&256?(Ns(s),s.flags&=-257,s=yd(t,s,a)):s.memoizedState!==null?(Is(),s.child=t.child,s.flags|=128,s=null):(Is(),f=l.fallback,E=s.mode,l=Rc({mode:"visible",children:l.children},E),f=Or(f,E,a,null),f.flags|=2,l.return=s,f.return=s,l.sibling=f,s.child=l,Ba(s,t.child,null,a),l=s.child,l.memoizedState=md(a),l.childLanes=gd(t,_,a),s.memoizedState=pd,s=f);else if(Ns(s),Jd(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var B=_.dgst;_=B,l=Error(r(419)),l.stack="",l.digest=_,Jo({value:l,source:null,stack:null}),s=yd(t,s,a)}else if(At||el(t,s,a,!1),_=(a&t.childLanes)!==0,At||_){if(_=Qe,_!==null&&(l=a&-a,l=(l&42)!==0?1:dr(l),l=(l&(_.suspendedLanes|a))!==0?0:l,l!==0&&l!==R.retryLane))throw R.retryLane=l,xa(t,l),mn(_,t,l),vy;E.data==="$?"||Pd(),s=yd(t,s,a)}else E.data==="$?"?(s.flags|=192,s.child=t.child,s=null):(t=R.treeContext,ut=Vn(E.nextSibling),Kt=s,Pe=!0,Mr=null,ci=!1,t!==null&&(In[xn++]=ji,In[xn++]=zi,In[xn++]=kr,ji=t.id,zi=t.overflow,kr=s),s=vd(s,l.children),s.flags|=4096);return s}return f?(Is(),f=l.fallback,E=s.mode,R=t.child,B=R.sibling,l=Ui(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&65011712,B!==null?f=Ui(B,f):(f=Or(f,E,a,null),f.flags|=2),f.return=s,l.return=s,l.sibling=f,s.child=l,l=f,f=s.child,E=t.child.memoizedState,E===null?E=md(a):(R=E.cachePool,R!==null?(B=_t._currentValue,R=R.parent!==B?{parent:B,pool:B}:R):R=hv(),E={baseLanes:E.baseLanes|a,cachePool:R}),f.memoizedState=E,f.childLanes=gd(t,_,a),s.memoizedState=pd,l):(Ns(s),a=t.child,t=a.sibling,a=Ui(a,{mode:"visible",children:l.children}),a.return=s,a.sibling=null,t!==null&&(_=s.deletions,_===null?(s.deletions=[t],s.flags|=16):_.push(t)),s.child=a,s.memoizedState=null,a)}function vd(t,s){return s=Rc({mode:"visible",children:s},t.mode),s.return=t,t.child=s}function Rc(t,s){return t=cn(22,t,null,s),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function yd(t,s,a){return Ba(s,t.child,null,a),t=vd(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function Ry(t,s,a){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s),Ph(t.return,s,a)}function _d(t,s,a,l,f){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=s,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function Ny(t,s,a){var l=s.pendingProps,f=l.revealOrder,d=l.tail;if(Dt(t,s,l.children,a),l=bt.current,(l&2)!==0)l=l&1|2,s.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ry(t,a,s);else if(t.tag===19)Ry(t,a,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(se(bt,l),f){case"forwards":for(a=s.child,f=null;a!==null;)t=a.alternate,t!==null&&Tc(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),_d(s,!1,f,a,d);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(t=f.alternate,t!==null&&Tc(t)===null){s.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}_d(s,!0,a,null,d);break;case"together":_d(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Vi(t,s,a){if(t!==null&&(s.dependencies=t.dependencies),Ms|=s.lanes,(a&s.childLanes)===0)if(t!==null){if(el(t,s,a,!1),(a&s.childLanes)===0)return null}else return null;if(t!==null&&s.child!==t.child)throw Error(r(153));if(s.child!==null){for(t=s.child,a=Ui(t,t.pendingProps),s.child=a,a.return=s;t.sibling!==null;)t=t.sibling,a=a.sibling=Ui(t,t.pendingProps),a.return=s;a.sibling=null}return s.child}function bd(t,s){return(t.lanes&s)!==0?!0:(t=t.dependencies,!!(t!==null&&oc(t)))}function Zw(t,s,a){switch(s.tag){case 3:Xe(s,s.stateNode.containerInfo),Ts(s,_t,t.memoizedState.cache),Zo();break;case 27:case 5:ms(s);break;case 4:Xe(s,s.stateNode.containerInfo);break;case 10:Ts(s,s.type,s.memoizedProps.value);break;case 13:var l=s.memoizedState;if(l!==null)return l.dehydrated!==null?(Ns(s),s.flags|=128,null):(a&s.child.childLanes)!==0?Cy(t,s,a):(Ns(s),t=Vi(t,s,a),t!==null?t.sibling:null);Ns(s);break;case 19:var f=(t.flags&128)!==0;if(l=(a&s.childLanes)!==0,l||(el(t,s,a,!1),l=(a&s.childLanes)!==0),f){if(l)return Ny(t,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(bt,bt.current),l)break;return null;case 22:case 23:return s.lanes=0,Ey(t,s,a);case 24:Ts(s,_t,t.memoizedState.cache)}return Vi(t,s,a)}function Iy(t,s,a){if(t!==null)if(t.memoizedProps!==s.pendingProps)At=!0;else{if(!bd(t,a)&&(s.flags&128)===0)return At=!1,Zw(t,s,a);At=(t.flags&131072)!==0}else At=!1,Pe&&(s.flags&1048576)!==0&&rv(s,ac,s.index);switch(s.lanes=0,s.tag){case 16:e:{t=s.pendingProps;var l=s.elementType,f=l._init;if(l=f(l._payload),s.type=l,typeof l=="function")Ih(l)?(t=Hr(l,t),s.tag=1,s=wy(null,s,l,t,a)):(s.tag=0,s=dd(null,s,l,t,a));else{if(l!=null){if(f=l.$$typeof,f===ce){s.tag=11,s=yy(null,s,l,t,a);break e}else if(f===D){s.tag=14,s=_y(null,s,l,t,a);break e}}throw s=Ot(l)||l,Error(r(306,s,""))}}return s;case 0:return dd(t,s,s.type,s.pendingProps,a);case 1:return l=s.type,f=Hr(l,s.pendingProps),wy(t,s,l,f,a);case 3:e:{if(Xe(s,s.stateNode.containerInfo),t===null)throw Error(r(387));l=s.pendingProps;var d=s.memoizedState;f=d.element,qh(t,s),ol(s,l,null,a);var _=s.memoizedState;if(l=_.cache,Ts(s,_t,l),l!==d.cache&&Uh(s,[_t],a,!0),al(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},s.updateQueue.baseState=d,s.memoizedState=d,s.flags&256){s=Ay(t,s,l,a);break e}else if(l!==f){f=Rn(Error(r(424)),s),Jo(f),s=Ay(t,s,l,a);break e}else{switch(t=s.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ut=Vn(t.firstChild),Kt=s,Pe=!0,Mr=null,ci=!0,a=oy(s,null,l,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zo(),l===f){s=Vi(t,s,a);break e}Dt(t,s,l,a)}s=s.child}return s;case 26:return Cc(t,s),t===null?(a=D_(s.type,null,s.pendingProps,null))?s.memoizedState=a:Pe||(a=s.type,t=s.pendingProps,l=Bc(_e.current).createElement(a),l[yt]=s,l[pt]=t,Lt(l,a,t),ft(l),s.stateNode=l):s.memoizedState=D_(s.type,t.memoizedProps,s.pendingProps,t.memoizedState),null;case 27:return ms(s),t===null&&Pe&&(l=s.stateNode=x_(s.type,s.pendingProps,_e.current),Kt=s,ci=!0,f=ut,js(s.type)?(ep=f,ut=Vn(l.firstChild)):ut=f),Dt(t,s,s.pendingProps.children,a),Cc(t,s),t===null&&(s.flags|=4194304),s.child;case 5:return t===null&&Pe&&((f=l=ut)&&(l=CA(l,s.type,s.pendingProps,ci),l!==null?(s.stateNode=l,Kt=s,ut=Vn(l.firstChild),ci=!1,f=!0):f=!1),f||Lr(s)),ms(s),f=s.type,d=s.pendingProps,_=t!==null?t.memoizedProps:null,l=d.children,Xd(f,d)?l=null:_!==null&&Xd(f,_)&&(s.flags|=32),s.memoizedState!==null&&(f=Wh(t,s,Vw,null,null,a),Il._currentValue=f),Cc(t,s),Dt(t,s,l,a),s.child;case 6:return t===null&&Pe&&((t=a=ut)&&(a=RA(a,s.pendingProps,ci),a!==null?(s.stateNode=a,Kt=s,ut=null,t=!0):t=!1),t||Lr(s)),null;case 13:return Cy(t,s,a);case 4:return Xe(s,s.stateNode.containerInfo),l=s.pendingProps,t===null?s.child=Ba(s,null,l,a):Dt(t,s,l,a),s.child;case 11:return yy(t,s,s.type,s.pendingProps,a);case 7:return Dt(t,s,s.pendingProps,a),s.child;case 8:return Dt(t,s,s.pendingProps.children,a),s.child;case 12:return Dt(t,s,s.pendingProps.children,a),s.child;case 10:return l=s.pendingProps,Ts(s,s.type,l.value),Dt(t,s,l.children,a),s.child;case 9:return f=s.type._context,l=s.pendingProps.children,Ur(s),f=Ht(f),l=l(f),s.flags|=1,Dt(t,s,l,a),s.child;case 14:return _y(t,s,s.type,s.pendingProps,a);case 15:return by(t,s,s.type,s.pendingProps,a);case 19:return Ny(t,s,a);case 31:return l=s.pendingProps,a=s.mode,l={mode:l.mode,children:l.children},t===null?(a=Rc(l,a),a.ref=s.ref,s.child=a,a.return=s,s=a):(a=Ui(t.child,l),a.ref=s.ref,s.child=a,a.return=s,s=a),s;case 22:return Ey(t,s,a);case 24:return Ur(s),l=Ht(_t),t===null?(f=Hh(),f===null&&(f=Qe,d=jh(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),s.memoizedState={parent:l,cache:f},Fh(s),Ts(s,_t,f)):((t.lanes&a)!==0&&(qh(t,s),ol(s,null,null,a),al()),f=t.memoizedState,d=s.memoizedState,f.parent!==l?(f={parent:l,cache:l},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Ts(s,_t,l)):(l=d.cache,Ts(s,_t,l),l!==f.cache&&Uh(s,[_t],a,!0))),Dt(t,s,s.pendingProps.children,a),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}function Gi(t){t.flags|=4}function xy(t,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!j_(s)){if(s=On.current,s!==null&&((xe&4194048)===xe?fi!==null:(xe&62914560)!==xe&&(xe&536870912)===0||s!==fi))throw sl=Bh,dv;t.flags|=8192}}function Nc(t,s){s!==null&&(t.flags|=4),t.flags&16384&&(s=t.tag!==22?ku():536870912,t.lanes|=s,Ga|=s)}function pl(t,s){if(!Pe)switch(t.tailMode){case"hidden":s=t.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function rt(t){var s=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(s)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,s}function Jw(t,s,a){var l=s.pendingProps;switch(Dh(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(s),null;case 1:return rt(s),null;case 3:return a=s.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),Bi(_t),ei(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Qo(s)?Gi(s):t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,lv())),rt(s),null;case 26:return a=s.memoizedState,t===null?(Gi(s),a!==null?(rt(s),xy(s,a)):(rt(s),s.flags&=-16777217)):a?a!==t.memoizedState?(Gi(s),rt(s),xy(s,a)):(rt(s),s.flags&=-16777217):(t.memoizedProps!==l&&Gi(s),rt(s),s.flags&=-16777217),null;case 27:Ti(s),a=_e.current;var f=s.type;if(t!==null&&s.stateNode!=null)t.memoizedProps!==l&&Gi(s);else{if(!l){if(s.stateNode===null)throw Error(r(166));return rt(s),null}t=pe.current,Qo(s)?av(s):(t=x_(f,l,a),s.stateNode=t,Gi(s))}return rt(s),null;case 5:if(Ti(s),a=s.type,t!==null&&s.stateNode!=null)t.memoizedProps!==l&&Gi(s);else{if(!l){if(s.stateNode===null)throw Error(r(166));return rt(s),null}if(t=pe.current,Qo(s))av(s);else{switch(f=Bc(_e.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}t[yt]=s,t[pt]=l;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=t;e:switch(Lt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Gi(s)}}return rt(s),s.flags&=-16777217,null;case 6:if(t&&s.stateNode!=null)t.memoizedProps!==l&&Gi(s);else{if(typeof l!="string"&&s.stateNode===null)throw Error(r(166));if(t=_e.current,Qo(s)){if(t=s.stateNode,a=s.memoizedProps,l=null,f=Kt,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[yt]=s,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||T_(t.nodeValue,a)),t||Lr(s)}else t=Bc(t).createTextNode(l),t[yt]=s,s.stateNode=t}return rt(s),null;case 13:if(l=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Qo(s),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[yt]=s}else Zo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;rt(s),f=!1}else f=lv(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(qi(s),s):(qi(s),null)}if(qi(s),(s.flags&128)!==0)return s.lanes=a,s;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=s.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return a!==t&&a&&(s.child.flags|=8192),Nc(s,s.updateQueue),rt(s),null;case 4:return ei(),t===null&&Gd(s.stateNode.containerInfo),rt(s),null;case 10:return Bi(s.type),rt(s),null;case 19:if(oe(bt),f=s.memoizedState,f===null)return rt(s),null;if(l=(s.flags&128)!==0,d=f.rendering,d===null)if(l)pl(f,!1);else{if(ct!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(d=Tc(t),d!==null){for(s.flags|=128,pl(f,!1),t=d.updateQueue,s.updateQueue=t,Nc(s,t),s.subtreeFlags=0,t=a,a=s.child;a!==null;)sv(a,t),a=a.sibling;return se(bt,bt.current&1|2),s.child}t=t.sibling}f.tail!==null&&En()>Oc&&(s.flags|=128,l=!0,pl(f,!1),s.lanes=4194304)}else{if(!l)if(t=Tc(d),t!==null){if(s.flags|=128,l=!0,t=t.updateQueue,s.updateQueue=t,Nc(s,t),pl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Pe)return rt(s),null}else 2*En()-f.renderingStartTime>Oc&&a!==536870912&&(s.flags|=128,l=!0,pl(f,!1),s.lanes=4194304);f.isBackwards?(d.sibling=s.child,s.child=d):(t=f.last,t!==null?t.sibling=d:s.child=d,f.last=d)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=En(),s.sibling=null,t=bt.current,se(bt,l?t&1|2:t&1),s):(rt(s),null);case 22:case 23:return qi(s),$h(),l=s.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(s.flags|=8192):l&&(s.flags|=8192),l?(a&536870912)!==0&&(s.flags&128)===0&&(rt(s),s.subtreeFlags&6&&(s.flags|=8192)):rt(s),a=s.updateQueue,a!==null&&Nc(s,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),l!==a&&(s.flags|=2048),t!==null&&oe(jr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),s.memoizedState.cache!==a&&(s.flags|=2048),Bi(_t),rt(s),null;case 25:return null;case 30:return null}throw Error(r(156,s.tag))}function eA(t,s){switch(Dh(s),s.tag){case 1:return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return Bi(_t),ei(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 26:case 27:case 5:return Ti(s),null;case 13:if(qi(s),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(r(340));Zo()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return oe(bt),null;case 4:return ei(),null;case 10:return Bi(s.type),null;case 22:case 23:return qi(s),$h(),t!==null&&oe(jr),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 24:return Bi(_t),null;case 25:return null;default:return null}}function Oy(t,s){switch(Dh(s),s.tag){case 3:Bi(_t),ei();break;case 26:case 27:case 5:Ti(s);break;case 4:ei();break;case 13:qi(s);break;case 19:oe(bt);break;case 10:Bi(s.type);break;case 22:case 23:qi(s),$h(),t!==null&&oe(jr);break;case 24:Bi(_t)}}function ml(t,s){try{var a=s.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&t)===t){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==f)}}catch(E){We(s,s.return,E)}}function xs(t,s,a){try{var l=s.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var _=l.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,f=s;var R=a,B=E;try{B()}catch(W){We(f,R,W)}}}l=l.next}while(l!==d)}}catch(W){We(s,s.return,W)}}function ky(t){var s=t.updateQueue;if(s!==null){var a=t.stateNode;try{_v(s,a)}catch(l){We(t,t.return,l)}}}function Dy(t,s,a){a.props=Hr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){We(t,s,l)}}function gl(t,s){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(f){We(t,s,f)}}function hi(t,s){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){We(t,s,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){We(t,s,f)}else a.current=null}function My(t){var s=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){We(t,t.return,f)}}function Ed(t,s,a){try{var l=t.stateNode;EA(l,t.type,a,s),l[pt]=s}catch(f){We(t,t.return,f)}}function Ly(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&js(t.type)||t.tag===4}function Sd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ly(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&js(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Td(t,s,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,s?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,s):(s=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.appendChild(t),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Hc));else if(l!==4&&(l===27&&js(t.type)&&(a=t.stateNode,s=null),t=t.child,t!==null))for(Td(t,s,a),t=t.sibling;t!==null;)Td(t,s,a),t=t.sibling}function Ic(t,s,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,s?a.insertBefore(t,s):a.appendChild(t);else if(l!==4&&(l===27&&js(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ic(t,s,a),t=t.sibling;t!==null;)Ic(t,s,a),t=t.sibling}function Py(t){var s=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);Lt(s,l,a),s[yt]=t,s[pt]=a}catch(d){We(t,t.return,d)}}var Yi=!1,dt=!1,wd=!1,Uy=typeof WeakSet=="function"?WeakSet:Set,Ct=null;function tA(t,s){if(t=t.containerInfo,Kd=$c,t=Kg(t),Sh(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,E=-1,R=-1,B=0,W=0,Q=t,F=null;t:for(;;){for(var q;Q!==a||f!==0&&Q.nodeType!==3||(E=_+f),Q!==d||l!==0&&Q.nodeType!==3||(R=_+l),Q.nodeType===3&&(_+=Q.nodeValue.length),(q=Q.firstChild)!==null;)F=Q,Q=q;for(;;){if(Q===t)break t;if(F===a&&++B===f&&(E=_),F===d&&++W===l&&(R=_),(q=Q.nextSibling)!==null)break;Q=F,F=Q.parentNode}Q=q}a=E===-1||R===-1?null:{start:E,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wd={focusedElem:t,selectionRange:a},$c=!1,Ct=s;Ct!==null;)if(s=Ct,t=s.child,(s.subtreeFlags&1024)!==0&&t!==null)t.return=s,Ct=t;else for(;Ct!==null;){switch(s=Ct,d=s.alternate,t=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=s,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ve=Hr(a.type,f,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(ve,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(me){We(a,a.return,me)}}break;case 3:if((t&1024)!==0){if(t=s.stateNode.containerInfo,a=t.nodeType,a===9)Zd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=s.sibling,t!==null){t.return=s.return,Ct=t;break}Ct=s.return}}function jy(t,s,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Os(t,a),l&4&&ml(5,a);break;case 1:if(Os(t,a),l&4)if(t=a.stateNode,s===null)try{t.componentDidMount()}catch(_){We(a,a.return,_)}else{var f=Hr(a.type,s.memoizedProps);s=s.memoizedState;try{t.componentDidUpdate(f,s,t.__reactInternalSnapshotBeforeUpdate)}catch(_){We(a,a.return,_)}}l&64&&ky(a),l&512&&gl(a,a.return);break;case 3:if(Os(t,a),l&64&&(t=a.updateQueue,t!==null)){if(s=null,a.child!==null)switch(a.child.tag){case 27:case 5:s=a.child.stateNode;break;case 1:s=a.child.stateNode}try{_v(t,s)}catch(_){We(a,a.return,_)}}break;case 27:s===null&&l&4&&Py(a);case 26:case 5:Os(t,a),s===null&&l&4&&My(a),l&512&&gl(a,a.return);break;case 12:Os(t,a);break;case 13:Os(t,a),l&4&&By(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=cA.bind(null,a),NA(t,a))));break;case 22:if(l=a.memoizedState!==null||Yi,!l){s=s!==null&&s.memoizedState!==null||dt,f=Yi;var d=dt;Yi=l,(dt=s)&&!d?ks(t,a,(a.subtreeFlags&8772)!==0):Os(t,a),Yi=f,dt=d}break;case 30:break;default:Os(t,a)}}function zy(t){var s=t.alternate;s!==null&&(t.alternate=null,zy(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&mr(s)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var st=null,en=!1;function $i(t,s,a){for(a=a.child;a!==null;)Hy(t,s,a),a=a.sibling}function Hy(t,s,a){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(lt,a)}catch{}switch(a.tag){case 26:dt||hi(a,s),$i(t,s,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dt||hi(a,s);var l=st,f=en;js(a.type)&&(st=a.stateNode,en=!1),$i(t,s,a),Al(a.stateNode),st=l,en=f;break;case 5:dt||hi(a,s);case 6:if(l=st,f=en,st=null,$i(t,s,a),st=l,en=f,st!==null)if(en)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(a.stateNode)}catch(d){We(a,s,d)}else try{st.removeChild(a.stateNode)}catch(d){We(a,s,d)}break;case 18:st!==null&&(en?(t=st,N_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Dl(t)):N_(st,a.stateNode));break;case 4:l=st,f=en,st=a.stateNode.containerInfo,en=!0,$i(t,s,a),st=l,en=f;break;case 0:case 11:case 14:case 15:dt||xs(2,a,s),dt||xs(4,a,s),$i(t,s,a);break;case 1:dt||(hi(a,s),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Dy(a,s,l)),$i(t,s,a);break;case 21:$i(t,s,a);break;case 22:dt=(l=dt)||a.memoizedState!==null,$i(t,s,a),dt=l;break;default:$i(t,s,a)}}function By(t,s){if(s.memoizedState===null&&(t=s.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Dl(t)}catch(a){We(s,s.return,a)}}function nA(t){switch(t.tag){case 13:case 19:var s=t.stateNode;return s===null&&(s=t.stateNode=new Uy),s;case 22:return t=t.stateNode,s=t._retryCache,s===null&&(s=t._retryCache=new Uy),s;default:throw Error(r(435,t.tag))}}function Ad(t,s){var a=nA(t);s.forEach(function(l){var f=fA.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}function fn(t,s){var a=s.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=t,_=s,E=_;e:for(;E!==null;){switch(E.tag){case 27:if(js(E.type)){st=E.stateNode,en=!1;break e}break;case 5:st=E.stateNode,en=!1;break e;case 3:case 4:st=E.stateNode.containerInfo,en=!0;break e}E=E.return}if(st===null)throw Error(r(160));Hy(d,_,f),st=null,en=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)Fy(s,t),s=s.sibling}var qn=null;function Fy(t,s){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:fn(s,t),hn(t),l&4&&(xs(3,t,t.return),ml(3,t),xs(5,t,t.return));break;case 1:fn(s,t),hn(t),l&512&&(dt||a===null||hi(a,a.return)),l&64&&Yi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=qn;if(fn(s,t),hn(t),l&512&&(dt||a===null||hi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[pr]||d[yt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Lt(d,l,a),d[yt]=t,ft(d),l=d;break e;case"link":var _=P_("link","href",f).get(l+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break t}}d=f.createElement(l),Lt(d,l,a),f.head.appendChild(d);break;case"meta":if(_=P_("meta","content",f).get(l+(a.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break t}}d=f.createElement(l),Lt(d,l,a),f.head.appendChild(d);break;default:throw Error(r(468,l))}d[yt]=t,ft(d),l=d}t.stateNode=l}else U_(f,t.type,t.stateNode);else t.stateNode=L_(f,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?U_(f,t.type,t.stateNode):L_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ed(t,t.memoizedProps,a.memoizedProps)}break;case 27:fn(s,t),hn(t),l&512&&(dt||a===null||hi(a,a.return)),a!==null&&l&4&&Ed(t,t.memoizedProps,a.memoizedProps);break;case 5:if(fn(s,t),hn(t),l&512&&(dt||a===null||hi(a,a.return)),t.flags&32){f=t.stateNode;try{Tn(f,"")}catch(q){We(t,t.return,q)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Ed(t,f,a!==null?a.memoizedProps:f)),l&1024&&(wd=!0);break;case 6:if(fn(s,t),hn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(q){We(t,t.return,q)}}break;case 3:if(Vc=null,f=qn,qn=Fc(s.containerInfo),fn(s,t),qn=f,hn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Dl(s.containerInfo)}catch(q){We(t,t.return,q)}wd&&(wd=!1,qy(t));break;case 4:l=qn,qn=Fc(t.stateNode.containerInfo),fn(s,t),hn(t),qn=l;break;case 12:fn(s,t),hn(t);break;case 13:fn(s,t),hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Od=En()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ad(t,l)));break;case 22:f=t.memoizedState!==null;var R=a!==null&&a.memoizedState!==null,B=Yi,W=dt;if(Yi=B||f,dt=W||R,fn(s,t),dt=W,Yi=B,hn(t),l&8192)e:for(s=t.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(a===null||R||Yi||dt||Br(t)),a=null,s=t;;){if(s.tag===5||s.tag===26){if(a===null){R=a=s;try{if(d=R.stateNode,f)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=R.stateNode;var Q=R.memoizedProps.style,F=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;E.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(q){We(R,R.return,q)}}}else if(s.tag===6){if(a===null){R=s;try{R.stateNode.nodeValue=f?"":R.memoizedProps}catch(q){We(R,R.return,q)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===t)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;a===s&&(a=null),s=s.return}a===s&&(a=null),s.sibling.return=s.return,s=s.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ad(t,a))));break;case 19:fn(s,t),hn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ad(t,l)));break;case 30:break;case 21:break;default:fn(s,t),hn(t)}}function hn(t){var s=t.flags;if(s&2){try{for(var a,l=t.return;l!==null;){if(Ly(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var f=a.stateNode,d=Sd(t);Ic(t,d,f);break;case 5:var _=a.stateNode;a.flags&32&&(Tn(_,""),a.flags&=-33);var E=Sd(t);Ic(t,E,_);break;case 3:case 4:var R=a.stateNode.containerInfo,B=Sd(t);Td(t,B,R);break;default:throw Error(r(161))}}catch(W){We(t,t.return,W)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function qy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var s=t;qy(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),t=t.sibling}}function Os(t,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)jy(t,s.alternate,s),s=s.sibling}function Br(t){for(t=t.child;t!==null;){var s=t;switch(s.tag){case 0:case 11:case 14:case 15:xs(4,s,s.return),Br(s);break;case 1:hi(s,s.return);var a=s.stateNode;typeof a.componentWillUnmount=="function"&&Dy(s,s.return,a),Br(s);break;case 27:Al(s.stateNode);case 26:case 5:hi(s,s.return),Br(s);break;case 22:s.memoizedState===null&&Br(s);break;case 30:Br(s);break;default:Br(s)}t=t.sibling}}function ks(t,s,a){for(a=a&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var l=s.alternate,f=t,d=s,_=d.flags;switch(d.tag){case 0:case 11:case 15:ks(f,d,a),ml(4,d);break;case 1:if(ks(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){We(l,l.return,B)}if(l=d,f=l.updateQueue,f!==null){var E=l.stateNode;try{var R=f.shared.hiddenCallbacks;if(R!==null)for(f.shared.hiddenCallbacks=null,f=0;f<R.length;f++)yv(R[f],E)}catch(B){We(l,l.return,B)}}a&&_&64&&ky(d),gl(d,d.return);break;case 27:Py(d);case 26:case 5:ks(f,d,a),a&&l===null&&_&4&&My(d),gl(d,d.return);break;case 12:ks(f,d,a);break;case 13:ks(f,d,a),a&&_&4&&By(f,d);break;case 22:d.memoizedState===null&&ks(f,d,a),gl(d,d.return);break;case 30:break;default:ks(f,d,a)}s=s.sibling}}function Cd(t,s){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(t=s.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&tl(a))}function Rd(t,s){t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&tl(t))}function di(t,s,a,l){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Vy(t,s,a,l),s=s.sibling}function Vy(t,s,a,l){var f=s.flags;switch(s.tag){case 0:case 11:case 15:di(t,s,a,l),f&2048&&ml(9,s);break;case 1:di(t,s,a,l);break;case 3:di(t,s,a,l),f&2048&&(t=null,s.alternate!==null&&(t=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==t&&(s.refCount++,t!=null&&tl(t)));break;case 12:if(f&2048){di(t,s,a,l),t=s.stateNode;try{var d=s.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,s.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(R){We(s,s.return,R)}}else di(t,s,a,l);break;case 13:di(t,s,a,l);break;case 23:break;case 22:d=s.stateNode,_=s.alternate,s.memoizedState!==null?d._visibility&2?di(t,s,a,l):vl(t,s):d._visibility&2?di(t,s,a,l):(d._visibility|=2,Fa(t,s,a,l,(s.subtreeFlags&10256)!==0)),f&2048&&Cd(_,s);break;case 24:di(t,s,a,l),f&2048&&Rd(s.alternate,s);break;default:di(t,s,a,l)}}function Fa(t,s,a,l,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var d=t,_=s,E=a,R=l,B=_.flags;switch(_.tag){case 0:case 11:case 15:Fa(d,_,E,R,f),ml(8,_);break;case 23:break;case 22:var W=_.stateNode;_.memoizedState!==null?W._visibility&2?Fa(d,_,E,R,f):vl(d,_):(W._visibility|=2,Fa(d,_,E,R,f)),f&&B&2048&&Cd(_.alternate,_);break;case 24:Fa(d,_,E,R,f),f&&B&2048&&Rd(_.alternate,_);break;default:Fa(d,_,E,R,f)}s=s.sibling}}function vl(t,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var a=t,l=s,f=l.flags;switch(l.tag){case 22:vl(a,l),f&2048&&Cd(l.alternate,l);break;case 24:vl(a,l),f&2048&&Rd(l.alternate,l);break;default:vl(a,l)}s=s.sibling}}var yl=8192;function qa(t){if(t.subtreeFlags&yl)for(t=t.child;t!==null;)Gy(t),t=t.sibling}function Gy(t){switch(t.tag){case 26:qa(t),t.flags&yl&&t.memoizedState!==null&&BA(qn,t.memoizedState,t.memoizedProps);break;case 5:qa(t);break;case 3:case 4:var s=qn;qn=Fc(t.stateNode.containerInfo),qa(t),qn=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=yl,yl=16777216,qa(t),yl=s):qa(t));break;default:qa(t)}}function Yy(t){var s=t.alternate;if(s!==null&&(t=s.child,t!==null)){s.child=null;do s=t.sibling,t.sibling=null,t=s;while(t!==null)}}function _l(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var l=s[a];Ct=l,Ky(l,t)}Yy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$y(t),t=t.sibling}function $y(t){switch(t.tag){case 0:case 11:case 15:_l(t),t.flags&2048&&xs(9,t,t.return);break;case 3:_l(t);break;case 12:_l(t);break;case 22:var s=t.stateNode;t.memoizedState!==null&&s._visibility&2&&(t.return===null||t.return.tag!==13)?(s._visibility&=-3,xc(t)):_l(t);break;default:_l(t)}}function xc(t){var s=t.deletions;if((t.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var l=s[a];Ct=l,Ky(l,t)}Yy(t)}for(t=t.child;t!==null;){switch(s=t,s.tag){case 0:case 11:case 15:xs(8,s,s.return),xc(s);break;case 22:a=s.stateNode,a._visibility&2&&(a._visibility&=-3,xc(s));break;default:xc(s)}t=t.sibling}}function Ky(t,s){for(;Ct!==null;){var a=Ct;switch(a.tag){case 0:case 11:case 15:xs(8,a,s);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ct=l;else e:for(a=t;Ct!==null;){l=Ct;var f=l.sibling,d=l.return;if(zy(l),l===a){Ct=null;break e}if(f!==null){f.return=d,Ct=f;break e}Ct=d}}}var iA={getCacheForType:function(t){var s=Ht(_t),a=s.data.get(t);return a===void 0&&(a=t(),s.data.set(t,a)),a}},sA=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Qe=null,Ae=null,xe=0,qe=0,dn=null,Ds=!1,Va=!1,Nd=!1,Ki=0,ct=0,Ms=0,Fr=0,Id=0,kn=0,Ga=0,bl=null,tn=null,xd=!1,Od=0,Oc=1/0,kc=null,Ls=null,Mt=0,Ps=null,Ya=null,$a=0,kd=0,Dd=null,Wy=null,El=0,Md=null;function pn(){if((Fe&2)!==0&&xe!==0)return xe&-xe;if(K.T!==null){var t=Ma;return t!==0?t:Bd()}return gs()}function Xy(){kn===0&&(kn=(xe&536870912)===0||Pe?ko():536870912);var t=On.current;return t!==null&&(t.flags|=32),kn}function mn(t,s,a){(t===Qe&&(qe===2||qe===9)||t.cancelPendingCommit!==null)&&(Ka(t,0),Us(t,xe,kn,!1)),Ai(t,a),((Fe&2)===0||t!==Qe)&&(t===Qe&&((Fe&2)===0&&(Fr|=a),ct===4&&Us(t,xe,kn,!1)),pi(t))}function Qy(t,s,a){if((Fe&6)!==0)throw Error(r(327));var l=!a&&(s&124)===0&&(s&t.expiredLanes)===0||hr(t,s),f=l?oA(t,s):Ud(t,s,!0),d=l;do{if(f===0){Va&&!l&&Us(t,s,0,!1);break}else{if(a=t.current.alternate,d&&!rA(a)){f=Ud(t,s,!1),d=!1;continue}if(f===2){if(d=s,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){s=_;e:{var E=t;f=bl;var R=E.current.memoizedState.isDehydrated;if(R&&(Ka(E,_).flags|=256),_=Ud(E,_,!1),_!==2){if(Nd&&!R){E.errorRecoveryDisabledLanes|=d,Fr|=d,f=4;break e}d=tn,tn=f,d!==null&&(tn===null?tn=d:tn.push.apply(tn,d))}f=_}if(d=!1,f!==2)continue}}if(f===1){Ka(t,0),Us(t,s,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((s&4194048)!==s)break;case 6:Us(l,s,kn,!Ds);break e;case 2:tn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((s&62914560)===s&&(f=Od+300-En(),10<f)){if(Us(l,s,kn,!Ds),ha(l,0,!0)!==0)break e;l.timeoutHandle=C_(Zy.bind(null,l,a,tn,kc,xd,s,kn,Fr,Ga,Ds,d,2,-0,0),f);break e}Zy(l,a,tn,kc,xd,s,kn,Fr,Ga,Ds,d,0,-0,0)}}break}while(!0);pi(t)}function Zy(t,s,a,l,f,d,_,E,R,B,W,Q,F,q){if(t.timeoutHandle=-1,Q=s.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(Nl={stylesheets:null,count:0,unsuspend:HA},Gy(s),Q=FA(),Q!==null)){t.cancelPendingCommit=Q(r_.bind(null,t,s,d,a,l,f,_,E,R,W,1,F,q)),Us(t,d,_,!B);return}r_(t,s,d,a,l,f,_,E,R)}function rA(t){for(var s=t;;){var a=s.tag;if((a===0||a===11||a===15)&&s.flags&16384&&(a=s.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!un(d(),f))return!1}catch{return!1}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Us(t,s,a,l){s&=~Id,s&=~Fr,t.suspendedLanes|=s,t.pingedLanes&=~s,l&&(t.warmLanes|=s),l=t.expirationTimes;for(var f=s;0<f;){var d=31-zt(f),_=1<<d;l[d]=-1,f&=~_}a!==0&&Ci(t,a,s)}function Dc(){return(Fe&6)===0?(Sl(0),!1):!0}function Ld(){if(Ae!==null){if(qe===0)var t=Ae.return;else t=Ae,Hi=Pr=null,Zh(t),Ha=null,hl=0,t=Ae;for(;t!==null;)Oy(t.alternate,t),t=t.return;Ae=null}}function Ka(t,s){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,TA(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ld(),Qe=t,Ae=a=Ui(t.current,null),xe=s,qe=0,dn=null,Ds=!1,Va=hr(t,s),Nd=!1,Ga=kn=Id=Fr=Ms=ct=0,tn=bl=null,xd=!1,(s&8)!==0&&(s|=s&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=s;0<l;){var f=31-zt(l),d=1<<f;s|=t[f],l&=~d}return Ki=s,tc(),a}function Jy(t,s){Se=null,K.H=bc,s===il||s===cc?(s=gv(),qe=3):s===dv?(s=gv(),qe=4):qe=s===vy?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,dn=s,Ae===null&&(ct=1,Ac(t,Rn(s,t.current)))}function e_(){var t=K.H;return K.H=bc,t===null?bc:t}function t_(){var t=K.A;return K.A=iA,t}function Pd(){ct=4,Ds||(xe&4194048)!==xe&&On.current!==null||(Va=!0),(Ms&134217727)===0&&(Fr&134217727)===0||Qe===null||Us(Qe,xe,kn,!1)}function Ud(t,s,a){var l=Fe;Fe|=2;var f=e_(),d=t_();(Qe!==t||xe!==s)&&(kc=null,Ka(t,s)),s=!1;var _=ct;e:do try{if(qe!==0&&Ae!==null){var E=Ae,R=dn;switch(qe){case 8:Ld(),_=6;break e;case 3:case 2:case 9:case 6:On.current===null&&(s=!0);var B=qe;if(qe=0,dn=null,Wa(t,E,R,B),a&&Va){_=0;break e}break;default:B=qe,qe=0,dn=null,Wa(t,E,R,B)}}aA(),_=ct;break}catch(W){Jy(t,W)}while(!0);return s&&t.shellSuspendCounter++,Hi=Pr=null,Fe=l,K.H=f,K.A=d,Ae===null&&(Qe=null,xe=0,tc()),_}function aA(){for(;Ae!==null;)n_(Ae)}function oA(t,s){var a=Fe;Fe|=2;var l=e_(),f=t_();Qe!==t||xe!==s?(kc=null,Oc=En()+500,Ka(t,s)):Va=hr(t,s);e:do try{if(qe!==0&&Ae!==null){s=Ae;var d=dn;t:switch(qe){case 1:qe=0,dn=null,Wa(t,s,d,1);break;case 2:case 9:if(pv(d)){qe=0,dn=null,i_(s);break}s=function(){qe!==2&&qe!==9||Qe!==t||(qe=7),pi(t)},d.then(s,s);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:pv(d)?(qe=0,dn=null,i_(s)):(qe=0,dn=null,Wa(t,s,d,7));break;case 5:var _=null;switch(Ae.tag){case 26:_=Ae.memoizedState;case 5:case 27:var E=Ae;if(!_||j_(_)){qe=0,dn=null;var R=E.sibling;if(R!==null)Ae=R;else{var B=E.return;B!==null?(Ae=B,Mc(B)):Ae=null}break t}}qe=0,dn=null,Wa(t,s,d,5);break;case 6:qe=0,dn=null,Wa(t,s,d,6);break;case 8:Ld(),ct=6;break e;default:throw Error(r(462))}}lA();break}catch(W){Jy(t,W)}while(!0);return Hi=Pr=null,K.H=l,K.A=f,Fe=a,Ae!==null?0:(Qe=null,xe=0,tc(),ct)}function lA(){for(;Ae!==null&&!No();)n_(Ae)}function n_(t){var s=Iy(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,s===null?Mc(t):Ae=s}function i_(t){var s=t,a=s.alternate;switch(s.tag){case 15:case 0:s=Ty(a,s,s.pendingProps,s.type,void 0,xe);break;case 11:s=Ty(a,s,s.pendingProps,s.type.render,s.ref,xe);break;case 5:Zh(s);default:Oy(a,s),s=Ae=sv(s,Ki),s=Iy(a,s,Ki)}t.memoizedProps=t.pendingProps,s===null?Mc(t):Ae=s}function Wa(t,s,a,l){Hi=Pr=null,Zh(s),Ha=null,hl=0;var f=s.return;try{if(Qw(t,f,s,a,xe)){ct=1,Ac(t,Rn(a,t.current)),Ae=null;return}}catch(d){if(f!==null)throw Ae=f,d;ct=1,Ac(t,Rn(a,t.current)),Ae=null;return}s.flags&32768?(Pe||l===1?t=!0:Va||(xe&536870912)!==0?t=!1:(Ds=t=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),s_(s,t)):Mc(s)}function Mc(t){var s=t;do{if((s.flags&32768)!==0){s_(s,Ds);return}t=s.return;var a=Jw(s.alternate,s,Ki);if(a!==null){Ae=a;return}if(s=s.sibling,s!==null){Ae=s;return}Ae=s=t}while(s!==null);ct===0&&(ct=5)}function s_(t,s){do{var a=eA(t.alternate,t);if(a!==null){a.flags&=32767,Ae=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!s&&(t=t.sibling,t!==null)){Ae=t;return}Ae=t=a}while(t!==null);ct=6,Ae=null}function r_(t,s,a,l,f,d,_,E,R){t.cancelPendingCommit=null;do Lc();while(Mt!==0);if((Fe&6)!==0)throw Error(r(327));if(s!==null){if(s===t.current)throw Error(r(177));if(d=s.lanes|s.childLanes,d|=Rh,Do(t,a,d,_,E,R),t===Qe&&(Ae=Qe=null,xe=0),Ya=s,Ps=t,$a=a,kd=d,Dd=f,Wy=l,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,hA(lr,function(){return c_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||l){l=K.T,K.T=null,f=ae.p,ae.p=2,_=Fe,Fe|=4;try{tA(t,s,a)}finally{Fe=_,ae.p=f,K.T=l}}Mt=1,a_(),o_(),l_()}}function a_(){if(Mt===1){Mt=0;var t=Ps,s=Ya,a=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||a){a=K.T,K.T=null;var l=ae.p;ae.p=2;var f=Fe;Fe|=4;try{Fy(s,t);var d=Wd,_=Kg(t.containerInfo),E=d.focusedElem,R=d.selectionRange;if(_!==E&&E&&E.ownerDocument&&$g(E.ownerDocument.documentElement,E)){if(R!==null&&Sh(E)){var B=R.start,W=R.end;if(W===void 0&&(W=B),"selectionStart"in E)E.selectionStart=B,E.selectionEnd=Math.min(W,E.value.length);else{var Q=E.ownerDocument||document,F=Q&&Q.defaultView||window;if(F.getSelection){var q=F.getSelection(),ve=E.textContent.length,me=Math.min(R.start,ve),$e=R.end===void 0?me:Math.min(R.end,ve);!q.extend&&me>$e&&(_=$e,$e=me,me=_);var P=Yg(E,me),O=Yg(E,$e);if(P&&O&&(q.rangeCount!==1||q.anchorNode!==P.node||q.anchorOffset!==P.offset||q.focusNode!==O.node||q.focusOffset!==O.offset)){var z=Q.createRange();z.setStart(P.node,P.offset),q.removeAllRanges(),me>$e?(q.addRange(z),q.extend(O.node,O.offset)):(z.setEnd(O.node,O.offset),q.addRange(z))}}}}for(Q=[],q=E;q=q.parentNode;)q.nodeType===1&&Q.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Q.length;E++){var X=Q[E];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}$c=!!Kd,Wd=Kd=null}finally{Fe=f,ae.p=l,K.T=a}}t.current=s,Mt=2}}function o_(){if(Mt===2){Mt=0;var t=Ps,s=Ya,a=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||a){a=K.T,K.T=null;var l=ae.p;ae.p=2;var f=Fe;Fe|=4;try{jy(t,s.alternate,s)}finally{Fe=f,ae.p=l,K.T=a}}Mt=3}}function l_(){if(Mt===4||Mt===3){Mt=0,Iu();var t=Ps,s=Ya,a=$a,l=Wy;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Mt=5:(Mt=0,Ya=Ps=null,u_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ls=null),da(a),s=s.stateNode,He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(lt,s,void 0,(s.current.flags&128)===128)}catch{}if(l!==null){s=K.T,f=ae.p,ae.p=2,K.T=null;try{for(var d=t.onRecoverableError,_=0;_<l.length;_++){var E=l[_];d(E.value,{componentStack:E.stack})}}finally{K.T=s,ae.p=f}}($a&3)!==0&&Lc(),pi(t),f=t.pendingLanes,(a&4194090)!==0&&(f&42)!==0?t===Md?El++:(El=0,Md=t):El=0,Sl(0)}}function u_(t,s){(t.pooledCacheLanes&=s)===0&&(s=t.pooledCache,s!=null&&(t.pooledCache=null,tl(s)))}function Lc(t){return a_(),o_(),l_(),c_()}function c_(){if(Mt!==5)return!1;var t=Ps,s=kd;kd=0;var a=da($a),l=K.T,f=ae.p;try{ae.p=32>a?32:a,K.T=null,a=Dd,Dd=null;var d=Ps,_=$a;if(Mt=0,Ya=Ps=null,$a=0,(Fe&6)!==0)throw Error(r(331));var E=Fe;if(Fe|=4,$y(d.current),Vy(d,d.current,_,a),Fe=E,Sl(0,!1),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(lt,d)}catch{}return!0}finally{ae.p=f,K.T=l,u_(t,s)}}function f_(t,s,a){s=Rn(a,s),s=hd(t.stateNode,s,2),t=Cs(t,s,2),t!==null&&(Ai(t,2),pi(t))}function We(t,s,a){if(t.tag===3)f_(t,t,a);else for(;s!==null;){if(s.tag===3){f_(s,t,a);break}else if(s.tag===1){var l=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ls===null||!Ls.has(l))){t=Rn(a,t),a=my(2),l=Cs(s,a,2),l!==null&&(gy(a,l,s,t),Ai(l,2),pi(l));break}}s=s.return}}function jd(t,s,a){var l=t.pingCache;if(l===null){l=t.pingCache=new sA;var f=new Set;l.set(s,f)}else f=l.get(s),f===void 0&&(f=new Set,l.set(s,f));f.has(a)||(Nd=!0,f.add(a),t=uA.bind(null,t,s,a),s.then(t,t))}function uA(t,s,a){var l=t.pingCache;l!==null&&l.delete(s),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qe===t&&(xe&a)===a&&(ct===4||ct===3&&(xe&62914560)===xe&&300>En()-Od?(Fe&2)===0&&Ka(t,0):Id|=a,Ga===xe&&(Ga=0)),pi(t)}function h_(t,s){s===0&&(s=ku()),t=xa(t,s),t!==null&&(Ai(t,s),pi(t))}function cA(t){var s=t.memoizedState,a=0;s!==null&&(a=s.retryLane),h_(t,a)}function fA(t,s){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(s),h_(t,a)}function hA(t,s){return ar(t,s)}var Pc=null,Xa=null,zd=!1,Uc=!1,Hd=!1,qr=0;function pi(t){t!==Xa&&t.next===null&&(Xa===null?Pc=Xa=t:Xa=Xa.next=t),Uc=!0,zd||(zd=!0,pA())}function Sl(t,s){if(!Hd&&Uc){Hd=!0;do for(var a=!1,l=Pc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var _=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-zt(42|t)+1)-1,d&=f&~(_&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,g_(l,d))}else d=xe,d=ha(l,l===Qe?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||hr(l,d)||(a=!0,g_(l,d));l=l.next}while(a);Hd=!1}}function dA(){d_()}function d_(){Uc=zd=!1;var t=0;qr!==0&&(SA()&&(t=qr),qr=0);for(var s=En(),a=null,l=Pc;l!==null;){var f=l.next,d=p_(l,s);d===0?(l.next=null,a===null?Pc=f:a.next=f,f===null&&(Xa=a)):(a=l,(t!==0||(d&3)!==0)&&(Uc=!0)),l=f}Sl(t)}function p_(t,s){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-zt(d),E=1<<_,R=f[_];R===-1?((E&a)===0||(E&l)!==0)&&(f[_]=Oo(E,s)):R<=s&&(t.expiredLanes|=E),d&=~E}if(s=Qe,a=xe,a=ha(t,t===s?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===s&&(qe===2||qe===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&or(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||hr(t,a)){if(s=a&-a,s===t.callbackPriority)return s;switch(l!==null&&or(l),da(a)){case 2:case 8:a=ca;break;case 32:a=lr;break;case 268435456:a=fa;break;default:a=lr}return l=m_.bind(null,t),a=ar(a,l),t.callbackPriority=s,t.callbackNode=a,s}return l!==null&&l!==null&&or(l),t.callbackPriority=2,t.callbackNode=null,2}function m_(t,s){if(Mt!==0&&Mt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Lc()&&t.callbackNode!==a)return null;var l=xe;return l=ha(t,t===Qe?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Qy(t,l,s),p_(t,En()),t.callbackNode!=null&&t.callbackNode===a?m_.bind(null,t):null)}function g_(t,s){if(Lc())return null;Qy(t,s,!0)}function pA(){wA(function(){(Fe&6)!==0?ar(Io,dA):d_()})}function Bd(){return qr===0&&(qr=ko()),qr}function v_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_a(""+t)}function y_(t,s){var a=s.ownerDocument.createElement("input");return a.name=s.name,a.value=s.value,t.id&&a.setAttribute("form",t.id),s.parentNode.insertBefore(a,s),t=new FormData(t),a.parentNode.removeChild(a),t}function mA(t,s,a,l,f){if(s==="submit"&&a&&a.stateNode===f){var d=v_((f[pt]||null).action),_=l.submitter;_&&(s=(s=_[pt]||null)?v_(s.formAction):_.getAttribute("formAction"),s!==null&&(d=s,_=null));var E=new ba("action","action",null,l,f);t.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qr!==0){var R=_?y_(f,_):new FormData(f);od(a,{pending:!0,data:R,method:f.method,action:d},null,R)}}else typeof d=="function"&&(E.preventDefault(),R=_?y_(f,_):new FormData(f),od(a,{pending:!0,data:R,method:f.method,action:d},d,R))},currentTarget:f}]})}}for(var Fd=0;Fd<Ch.length;Fd++){var qd=Ch[Fd],gA=qd.toLowerCase(),vA=qd[0].toUpperCase()+qd.slice(1);Fn(gA,"on"+vA)}Fn(Qg,"onAnimationEnd"),Fn(Zg,"onAnimationIteration"),Fn(Jg,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(Mw,"onTransitionRun"),Fn(Lw,"onTransitionStart"),Fn(Pw,"onTransitionCancel"),Fn(ev,"onTransitionEnd"),Ri("onMouseEnter",["mouseout","mouseover"]),Ri("onMouseLeave",["mouseout","mouseover"]),Ri("onPointerEnter",["pointerout","pointerover"]),Ri("onPointerLeave",["pointerout","pointerover"]),Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function __(t,s){s=(s&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var d=void 0;if(s)for(var _=l.length-1;0<=_;_--){var E=l[_],R=E.instance,B=E.currentTarget;if(E=E.listener,R!==d&&f.isPropagationStopped())break e;d=E,f.currentTarget=B;try{d(f)}catch(W){wc(W)}f.currentTarget=null,d=R}else for(_=0;_<l.length;_++){if(E=l[_],R=E.instance,B=E.currentTarget,E=E.listener,R!==d&&f.isPropagationStopped())break e;d=E,f.currentTarget=B;try{d(f)}catch(W){wc(W)}f.currentTarget=null,d=R}}}}function Ce(t,s){var a=s[Lo];a===void 0&&(a=s[Lo]=new Set);var l=t+"__bubble";a.has(l)||(b_(s,t,2,!1),a.add(l))}function Vd(t,s,a){var l=0;s&&(l|=4),b_(a,t,l,s)}var jc="_reactListening"+Math.random().toString(36).slice(2);function Gd(t){if(!t[jc]){t[jc]=!0,Po.forEach(function(a){a!=="selectionchange"&&(yA.has(a)||Vd(a,!1,t),Vd(a,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[jc]||(s[jc]=!0,Vd("selectionchange",!1,s))}}function b_(t,s,a,l){switch(V_(s)){case 2:var f=GA;break;case 8:f=YA;break;default:f=rp}a=f.bind(null,s,a,t),f=void 0,!An||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(s,a,{capture:!0,passive:f}):t.addEventListener(s,a,!0):f!==void 0?t.addEventListener(s,a,{passive:f}):t.addEventListener(s,a,!1)}function Yd(t,s,a,l,f){var d=l;if((s&1)===0&&(s&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var E=l.stateNode.containerInfo;if(E===f)break;if(_===4)for(_=l.return;_!==null;){var R=_.tag;if((R===3||R===4)&&_.stateNode.containerInfo===f)return;_=_.return}for(;E!==null;){if(_=ys(E),_===null)return;if(R=_.tag,R===5||R===6||R===26||R===27){l=d=_;continue e}E=E.parentNode}}l=l.return}Hu(function(){var B=d,W=wn(a),Q=[];e:{var F=tv.get(t);if(F!==void 0){var q=ba,ve=t;switch(t){case"keypress":if(ai(a)===0)break e;case"keydown":case"keyup":q=Ca;break;case"focusin":ve="focus",q=Ta;break;case"focusout":ve="blur",q=Ta;break;case"beforeblur":case"afterblur":q=Ta;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=yh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Ku;break;case Qg:case Zg:case Jg:q=wa;break;case ev:q=Xu;break;case"scroll":case"scrollend":q=Bu;break;case"wheel":q=Qt;break;case"copy":case"cut":case"paste":q=Aa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Ko;break;case"toggle":case"beforetoggle":q=Ju}var me=(s&4)!==0,$e=!me&&(t==="scroll"||t==="scrollend"),P=me?F!==null?F+"Capture":null:F;me=[];for(var O=B,z;O!==null;){var X=O;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||P===null||(X=Sr(O,P),X!=null&&me.push(wl(O,X,z))),$e)break;O=O.return}0<me.length&&(F=new q(F,ve,null,a,W),Q.push({event:F,listeners:me}))}}if((s&7)===0){e:{if(F=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",F&&a!==xi&&(ve=a.relatedTarget||a.fromElement)&&(ys(ve)||ve[Sn]))break e;if((q||F)&&(F=W.window===W?W:(F=W.ownerDocument)?F.defaultView||F.parentWindow:window,q?(ve=a.relatedTarget||a.toElement,q=B,ve=ve?ys(ve):null,ve!==null&&($e=u(ve),me=ve.tag,ve!==$e||me!==5&&me!==27&&me!==6)&&(ve=null)):(q=null,ve=B),q!==ve)){if(me=Cn,X="onMouseLeave",P="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(me=Ko,X="onPointerLeave",P="onPointerEnter",O="pointer"),$e=q==null?F:ni(q),z=ve==null?F:ni(ve),F=new me(X,O+"leave",q,a,W),F.target=$e,F.relatedTarget=z,X=null,ys(W)===B&&(me=new me(P,O+"enter",ve,a,W),me.target=z,me.relatedTarget=$e,X=me),$e=X,q&&ve)t:{for(me=q,P=ve,O=0,z=me;z;z=Qa(z))O++;for(z=0,X=P;X;X=Qa(X))z++;for(;0<O-z;)me=Qa(me),O--;for(;0<z-O;)P=Qa(P),z--;for(;O--;){if(me===P||P!==null&&me===P.alternate)break t;me=Qa(me),P=Qa(P)}me=null}else me=null;q!==null&&E_(Q,F,q,me,!1),ve!==null&&$e!==null&&E_(Q,$e,ve,me,!0)}}e:{if(F=B?ni(B):window,q=F.nodeName&&F.nodeName.toLowerCase(),q==="select"||q==="input"&&F.type==="file")var ue=Hg;else if(Li(F))if(Bg)ue=Ow;else{ue=Iw;var we=Nw}else q=F.nodeName,!q||q.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?B&&Bo(B.elementType)&&(ue=Hg):ue=xw;if(ue&&(ue=ue(t,B))){Zt(Q,ue,a,W);break e}we&&we(t,F,B),t==="focusout"&&B&&F.type==="number"&&B.memoizedProps.value!=null&&bs(F,"number",F.value)}switch(we=B?ni(B):window,t){case"focusin":(Li(we)||we.contentEditable==="true")&&(Ra=we,Th=B,Xo=null);break;case"focusout":Xo=Th=Ra=null;break;case"mousedown":wh=!0;break;case"contextmenu":case"mouseup":case"dragend":wh=!1,Wg(Q,a,W);break;case"selectionchange":if(Dw)break;case"keydown":case"keyup":Wg(Q,a,W)}var fe;if(c)e:{switch(t){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else it?re(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(T&&a.locale!=="ko"&&(it||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&it&&(fe=qo()):(ri=W,Es="value"in ri?ri.value:ri.textContent,it=!0)),we=zc(B,ge),0<we.length&&(ge=new Yo(ge,t,null,a,W),Q.push({event:ge,listeners:we}),fe?ge.data=fe:(fe=je(a),fe!==null&&(ge.data=fe)))),(fe=y?Ie(t,a):Tt(t,a))&&(ge=zc(B,"onBeforeInput"),0<ge.length&&(we=new Yo("onBeforeInput","beforeinput",null,a,W),Q.push({event:we,listeners:ge}),we.data=fe)),mA(Q,t,B,a,W)}__(Q,s)})}function wl(t,s,a){return{instance:t,listener:s,currentTarget:a}}function zc(t,s){for(var a=s+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Sr(t,a),f!=null&&l.unshift(wl(t,f,d)),f=Sr(t,s),f!=null&&l.push(wl(t,f,d))),t.tag===3)return l;t=t.return}return[]}function Qa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function E_(t,s,a,l,f){for(var d=s._reactName,_=[];a!==null&&a!==l;){var E=a,R=E.alternate,B=E.stateNode;if(E=E.tag,R!==null&&R===l)break;E!==5&&E!==26&&E!==27||B===null||(R=B,f?(B=Sr(a,d),B!=null&&_.unshift(wl(a,B,R))):f||(B=Sr(a,d),B!=null&&_.push(wl(a,B,R)))),a=a.return}_.length!==0&&t.push({event:s,listeners:_})}var _A=/\r\n?/g,bA=/\u0000|\uFFFD/g;function S_(t){return(typeof t=="string"?t:""+t).replace(_A,`
`).replace(bA,"")}function T_(t,s){return s=S_(s),S_(t)===s}function Hc(){}function Ye(t,s,a,l,f,d){switch(a){case"children":typeof l=="string"?s==="body"||s==="textarea"&&l===""||Tn(t,l):(typeof l=="number"||typeof l=="bigint")&&s!=="body"&&Tn(t,""+l);break;case"className":ii(t,"class",l);break;case"tabIndex":ii(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ii(t,a,l);break;case"style":Ho(t,l,d);break;case"data":if(s!=="object"){ii(t,"data",l);break}case"src":case"href":if(l===""&&(s!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=_a(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(s!=="input"&&Ye(t,s,"name",f.name,f,null),Ye(t,s,"formEncType",f.formEncType,f,null),Ye(t,s,"formMethod",f.formMethod,f,null),Ye(t,s,"formTarget",f.formTarget,f,null)):(Ye(t,s,"encType",f.encType,f,null),Ye(t,s,"method",f.method,f,null),Ye(t,s,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=_a(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Hc);break;case"onScroll":l!=null&&Ce("scroll",t);break;case"onScrollEnd":l!=null&&Ce("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=_a(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Ce("beforetoggle",t),Ce("toggle",t),_s(t,"popover",l);break;case"xlinkActuate":kt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":kt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":kt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":kt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":kt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":kt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":kt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":kt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":kt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":_s(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gh.get(a)||a,_s(t,a,l))}}function $d(t,s,a,l,f,d){switch(a){case"style":Ho(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Tn(t,l):(typeof l=="number"||typeof l=="bigint")&&Tn(t,""+l);break;case"onScroll":l!=null&&Ce("scroll",t);break;case"onScrollEnd":l!=null&&Ce("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Hc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pa.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),s=a.slice(2,f?a.length-7:void 0),d=t[pt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(s,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(s,l,f);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):_s(t,a,l)}}}function Lt(t,s,a){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",t),Ce("load",t);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Ye(t,s,d,_,a,null)}}f&&Ye(t,s,"srcSet",a.srcSet,a,null),l&&Ye(t,s,"src",a.src,a,null);return;case"input":Ce("invalid",t);var E=d=_=f=null,R=null,B=null;for(l in a)if(a.hasOwnProperty(l)){var W=a[l];if(W!=null)switch(l){case"name":f=W;break;case"type":_=W;break;case"checked":R=W;break;case"defaultChecked":B=W;break;case"value":d=W;break;case"defaultValue":E=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(r(137,s));break;default:Ye(t,s,l,W,a,null)}}_r(t,d,E,R,B,_,f,!1),ya(t);return;case"select":Ce("invalid",t),l=_=d=null;for(f in a)if(a.hasOwnProperty(f)&&(E=a[f],E!=null))switch(f){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":l=E;default:Ye(t,s,f,E,a,null)}s=d,a=_,t.multiple=!!l,s!=null?Ii(t,!!l,s,!1):a!=null&&Ii(t,!!l,a,!0);return;case"textarea":Ce("invalid",t),d=f=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":l=E;break;case"defaultValue":f=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ye(t,s,_,E,a,null)}br(t,l,f,d),ya(t);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ye(t,s,R,l,a,null)}return;case"dialog":Ce("beforetoggle",t),Ce("toggle",t),Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":Ce("load",t);break;case"video":case"audio":for(l=0;l<Tl.length;l++)Ce(Tl[l],t);break;case"image":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"embed":case"source":case"link":Ce("error",t),Ce("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(l=a[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Ye(t,s,B,l,a,null)}return;default:if(Bo(s)){for(W in a)a.hasOwnProperty(W)&&(l=a[W],l!==void 0&&$d(t,s,W,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&Ye(t,s,E,l,a,null))}function EA(t,s,a,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,_=null,E=null,R=null,B=null,W=null;for(q in a){var Q=a[q];if(a.hasOwnProperty(q)&&Q!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":R=Q;default:l.hasOwnProperty(q)||Ye(t,s,q,null,l,Q)}}for(var F in l){var q=l[F];if(Q=a[F],l.hasOwnProperty(F)&&(q!=null||Q!=null))switch(F){case"type":d=q;break;case"name":f=q;break;case"checked":B=q;break;case"defaultChecked":W=q;break;case"value":_=q;break;case"defaultValue":E=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,s));break;default:q!==Q&&Ye(t,s,F,q,l,Q)}}ln(t,_,E,R,B,W,d,f);return;case"select":q=_=E=F=null;for(d in a)if(R=a[d],a.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":q=R;default:l.hasOwnProperty(d)||Ye(t,s,d,null,l,R)}for(f in l)if(d=l[f],R=a[f],l.hasOwnProperty(f)&&(d!=null||R!=null))switch(f){case"value":F=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==R&&Ye(t,s,f,d,l,R)}s=E,a=_,l=q,F!=null?Ii(t,!!a,F,!1):!!l!=!!a&&(s!=null?Ii(t,!!a,s,!0):Ii(t,!!a,a?[]:"",!1));return;case"textarea":q=F=null;for(E in a)if(f=a[E],a.hasOwnProperty(E)&&f!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ye(t,s,E,null,l,f)}for(_ in l)if(f=l[_],d=a[_],l.hasOwnProperty(_)&&(f!=null||d!=null))switch(_){case"value":F=f;break;case"defaultValue":q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Ye(t,s,_,f,l,d)}Ve(t,F,q);return;case"option":for(var ve in a)if(F=a[ve],a.hasOwnProperty(ve)&&F!=null&&!l.hasOwnProperty(ve))switch(ve){case"selected":t.selected=!1;break;default:Ye(t,s,ve,null,l,F)}for(R in l)if(F=l[R],q=a[R],l.hasOwnProperty(R)&&F!==q&&(F!=null||q!=null))switch(R){case"selected":t.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:Ye(t,s,R,F,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in a)F=a[me],a.hasOwnProperty(me)&&F!=null&&!l.hasOwnProperty(me)&&Ye(t,s,me,null,l,F);for(B in l)if(F=l[B],q=a[B],l.hasOwnProperty(B)&&F!==q&&(F!=null||q!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r(137,s));break;default:Ye(t,s,B,F,l,q)}return;default:if(Bo(s)){for(var $e in a)F=a[$e],a.hasOwnProperty($e)&&F!==void 0&&!l.hasOwnProperty($e)&&$d(t,s,$e,void 0,l,F);for(W in l)F=l[W],q=a[W],!l.hasOwnProperty(W)||F===q||F===void 0&&q===void 0||$d(t,s,W,F,l,q);return}}for(var P in a)F=a[P],a.hasOwnProperty(P)&&F!=null&&!l.hasOwnProperty(P)&&Ye(t,s,P,null,l,F);for(Q in l)F=l[Q],q=a[Q],!l.hasOwnProperty(Q)||F===q||F==null&&q==null||Ye(t,s,Q,F,l,q)}var Kd=null,Wd=null;function Bc(t){return t.nodeType===9?t:t.ownerDocument}function w_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A_(t,s){if(t===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&s==="foreignObject"?0:t}function Xd(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Qd=null;function SA(){var t=window.event;return t&&t.type==="popstate"?t===Qd?!1:(Qd=t,!0):(Qd=null,!1)}var C_=typeof setTimeout=="function"?setTimeout:void 0,TA=typeof clearTimeout=="function"?clearTimeout:void 0,R_=typeof Promise=="function"?Promise:void 0,wA=typeof queueMicrotask=="function"?queueMicrotask:typeof R_<"u"?function(t){return R_.resolve(null).then(t).catch(AA)}:C_;function AA(t){setTimeout(function(){throw t})}function js(t){return t==="head"}function N_(t,s){var a=s,l=0,f=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var _=t.ownerDocument;if(a&1&&Al(_.documentElement),a&2&&Al(_.body),a&4)for(a=_.head,Al(a),_=a.firstChild;_;){var E=_.nextSibling,R=_.nodeName;_[pr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&_.rel.toLowerCase()==="stylesheet"||a.removeChild(_),_=E}}if(f===0){t.removeChild(d),Dl(s);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Dl(s)}function Zd(t){var s=t.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var a=s;switch(s=s.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zd(a),mr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function CA(t,s,a,l){for(;t.nodeType===1;){var f=a;if(t.nodeName.toLowerCase()!==s.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[pr])switch(s){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(s==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Vn(t.nextSibling),t===null)break}return null}function RA(t,s,a){if(s==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Vn(t.nextSibling),t===null))return null;return t}function Jd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function NA(t,s){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")s();else{var l=function(){s(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Vn(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return t}var ep=null;function I_(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return t;s--}else a==="/$"&&s++}t=t.previousSibling}return null}function x_(t,s,a){switch(s=Bc(a),t){case"html":if(t=s.documentElement,!t)throw Error(r(452));return t;case"head":if(t=s.head,!t)throw Error(r(453));return t;case"body":if(t=s.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Al(t){for(var s=t.attributes;s.length;)t.removeAttributeNode(s[0]);mr(t)}var Dn=new Map,O_=new Set;function Fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Wi=ae.d;ae.d={f:IA,r:xA,D:OA,C:kA,L:DA,m:MA,X:PA,S:LA,M:UA};function IA(){var t=Wi.f(),s=Dc();return t||s}function xA(t){var s=ti(t);s!==null&&s.tag===5&&s.type==="form"?Qv(s):Wi.r(t)}var Za=typeof document>"u"?null:document;function k_(t,s,a){var l=Za;if(l&&typeof s=="string"&&s){var f=mt(s);f='link[rel="'+t+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),O_.has(f)||(O_.add(f),t={rel:t,crossOrigin:a,href:s},l.querySelector(f)===null&&(s=l.createElement("link"),Lt(s,"link",t),ft(s),l.head.appendChild(s)))}}function OA(t){Wi.D(t),k_("dns-prefetch",t,null)}function kA(t,s){Wi.C(t,s),k_("preconnect",t,s)}function DA(t,s,a){Wi.L(t,s,a);var l=Za;if(l&&t&&s){var f='link[rel="preload"][as="'+mt(s)+'"]';s==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+mt(a.imageSizes)+'"]')):f+='[href="'+mt(t)+'"]';var d=f;switch(s){case"style":d=Ja(t);break;case"script":d=eo(t)}Dn.has(d)||(t=b({rel:"preload",href:s==="image"&&a&&a.imageSrcSet?void 0:t,as:s},a),Dn.set(d,t),l.querySelector(f)!==null||s==="style"&&l.querySelector(Cl(d))||s==="script"&&l.querySelector(Rl(d))||(s=l.createElement("link"),Lt(s,"link",t),ft(s),l.head.appendChild(s)))}}function MA(t,s){Wi.m(t,s);var a=Za;if(a&&t){var l=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+mt(l)+'"][href="'+mt(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=eo(t)}if(!Dn.has(d)&&(t=b({rel:"modulepreload",href:t},s),Dn.set(d,t),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Rl(d)))return}l=a.createElement("link"),Lt(l,"link",t),ft(l),a.head.appendChild(l)}}}function LA(t,s,a){Wi.S(t,s,a);var l=Za;if(l&&t){var f=Yt(l).hoistableStyles,d=Ja(t);s=s||"default";var _=f.get(d);if(!_){var E={loading:0,preload:null};if(_=l.querySelector(Cl(d)))E.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":s},a),(a=Dn.get(d))&&tp(t,a);var R=_=l.createElement("link");ft(R),Lt(R,"link",t),R._p=new Promise(function(B,W){R.onload=B,R.onerror=W}),R.addEventListener("load",function(){E.loading|=1}),R.addEventListener("error",function(){E.loading|=2}),E.loading|=4,qc(_,s,l)}_={type:"stylesheet",instance:_,count:1,state:E},f.set(d,_)}}}function PA(t,s){Wi.X(t,s);var a=Za;if(a&&t){var l=Yt(a).hoistableScripts,f=eo(t),d=l.get(f);d||(d=a.querySelector(Rl(f)),d||(t=b({src:t,async:!0},s),(s=Dn.get(f))&&np(t,s),d=a.createElement("script"),ft(d),Lt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function UA(t,s){Wi.M(t,s);var a=Za;if(a&&t){var l=Yt(a).hoistableScripts,f=eo(t),d=l.get(f);d||(d=a.querySelector(Rl(f)),d||(t=b({src:t,async:!0,type:"module"},s),(s=Dn.get(f))&&np(t,s),d=a.createElement("script"),ft(d),Lt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function D_(t,s,a,l){var f=(f=_e.current)?Fc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(s=Ja(a.href),a=Yt(f).hoistableStyles,l=a.get(s),l||(l={type:"style",instance:null,count:0,state:null},a.set(s,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ja(a.href);var d=Yt(f).hoistableStyles,_=d.get(t);if(_||(f=f.ownerDocument||f,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=f.querySelector(Cl(t)))&&!d._p&&(_.instance=d,_.state.loading=5),Dn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Dn.set(t,a),d||jA(f,t,a,_.state))),s&&l===null)throw Error(r(528,""));return _}if(s&&l!==null)throw Error(r(529,""));return null;case"script":return s=a.async,a=a.src,typeof a=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=eo(a),a=Yt(f).hoistableScripts,l=a.get(s),l||(l={type:"script",instance:null,count:0,state:null},a.set(s,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ja(t){return'href="'+mt(t)+'"'}function Cl(t){return'link[rel="stylesheet"]['+t+"]"}function M_(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function jA(t,s,a,l){t.querySelector('link[rel="preload"][as="style"]['+s+"]")?l.loading=1:(s=t.createElement("link"),l.preload=s,s.addEventListener("load",function(){return l.loading|=1}),s.addEventListener("error",function(){return l.loading|=2}),Lt(s,"link",a),ft(s),t.head.appendChild(s))}function eo(t){return'[src="'+mt(t)+'"]'}function Rl(t){return"script[async]"+t}function L_(t,s,a){if(s.count++,s.instance===null)switch(s.type){case"style":var l=t.querySelector('style[data-href~="'+mt(a.href)+'"]');if(l)return s.instance=l,ft(l),l;var f=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ft(l),Lt(l,"style",f),qc(l,a.precedence,t),s.instance=l;case"stylesheet":f=Ja(a.href);var d=t.querySelector(Cl(f));if(d)return s.state.loading|=4,s.instance=d,ft(d),d;l=M_(a),(f=Dn.get(f))&&tp(l,f),d=(t.ownerDocument||t).createElement("link"),ft(d);var _=d;return _._p=new Promise(function(E,R){_.onload=E,_.onerror=R}),Lt(d,"link",l),s.state.loading|=4,qc(d,a.precedence,t),s.instance=d;case"script":return d=eo(a.src),(f=t.querySelector(Rl(d)))?(s.instance=f,ft(f),f):(l=a,(f=Dn.get(d))&&(l=b({},a),np(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),ft(f),Lt(f,"link",l),t.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(l=s.instance,s.state.loading|=4,qc(l,a.precedence,t));return s.instance}function qc(t,s,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,_=0;_<l.length;_++){var E=l[_];if(E.dataset.precedence===s)d=E;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(s=a.nodeType===9?a.head:a,s.insertBefore(t,s.firstChild))}function tp(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.title==null&&(t.title=s.title)}function np(t,s){t.crossOrigin==null&&(t.crossOrigin=s.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=s.referrerPolicy),t.integrity==null&&(t.integrity=s.integrity)}var Vc=null;function P_(t,s,a){if(Vc===null){var l=new Map,f=Vc=new Map;f.set(a,l)}else f=Vc,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),f=0;f<a.length;f++){var d=a[f];if(!(d[pr]||d[yt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(s)||"";_=t+_;var E=l.get(_);E?E.push(d):l.set(_,[d])}}return l}function U_(t,s,a){t=t.ownerDocument||t,t.head.insertBefore(a,s==="title"?t.querySelector("head > title"):null)}function zA(t,s,a){if(a===1||s.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return t=s.disabled,typeof s.precedence=="string"&&t==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function j_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Nl=null;function HA(){}function BA(t,s,a){if(Nl===null)throw Error(r(475));var l=Nl;if(s.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Ja(a.href),d=t.querySelector(Cl(f));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Gc.bind(l),t.then(l,l)),s.state.loading|=4,s.instance=d,ft(d);return}d=t.ownerDocument||t,a=M_(a),(f=Dn.get(f))&&tp(a,f),d=d.createElement("link"),ft(d);var _=d;_._p=new Promise(function(E,R){_.onload=E,_.onerror=R}),Lt(d,"link",a),s.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(s,t),(t=s.state.preload)&&(s.state.loading&3)===0&&(l.count++,s=Gc.bind(l),t.addEventListener("load",s),t.addEventListener("error",s))}}function FA(){if(Nl===null)throw Error(r(475));var t=Nl;return t.stylesheets&&t.count===0&&ip(t,t.stylesheets),0<t.count?function(s){var a=setTimeout(function(){if(t.stylesheets&&ip(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Gc(){if(this.count--,this.count===0){if(this.stylesheets)ip(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yc=null;function ip(t,s){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yc=new Map,s.forEach(qA,t),Yc=null,Gc.call(t))}function qA(t,s){if(!(s.state.loading&4)){var a=Yc.get(t);if(a)var l=a.get(null);else{a=new Map,Yc.set(t,a);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var _=f[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}f=s.instance,_=f.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,f),a.set(_,f),this.count++,l=Gc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),s.state.loading|=4}}var Il={$$typeof:ee,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function VA(t,s,a,l,f,d,_,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wi(0),this.hiddenUpdates=wi(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function z_(t,s,a,l,f,d,_,E,R,B,W,Q){return t=new VA(t,s,a,_,E,R,B,Q),s=1,d===!0&&(s|=24),d=cn(3,null,null,s),t.current=d,d.stateNode=t,s=jh(),s.refCount++,t.pooledCache=s,s.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:s},Fh(d),t}function H_(t){return t?(t=Oa,t):Oa}function B_(t,s,a,l,f,d){f=H_(f),l.context===null?l.context=f:l.pendingContext=f,l=As(s),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Cs(t,l,s),a!==null&&(mn(a,t,s),rl(a,t,s))}function F_(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<s?a:s}}function sp(t,s){F_(t,s),(t=t.alternate)&&F_(t,s)}function q_(t){if(t.tag===13){var s=xa(t,67108864);s!==null&&mn(s,t,67108864),sp(t,67108864)}}var $c=!0;function GA(t,s,a,l){var f=K.T;K.T=null;var d=ae.p;try{ae.p=2,rp(t,s,a,l)}finally{ae.p=d,K.T=f}}function YA(t,s,a,l){var f=K.T;K.T=null;var d=ae.p;try{ae.p=8,rp(t,s,a,l)}finally{ae.p=d,K.T=f}}function rp(t,s,a,l){if($c){var f=ap(l);if(f===null)Yd(t,s,l,Kc,a),G_(t,l);else if(KA(f,t,s,a,l))l.stopPropagation();else if(G_(t,l),s&4&&-1<$A.indexOf(t)){for(;f!==null;){var d=ti(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=zn(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var R=1<<31-zt(_);E.entanglements[1]|=R,_&=~R}pi(d),(Fe&6)===0&&(Oc=En()+500,Sl(0))}}break;case 13:E=xa(d,2),E!==null&&mn(E,d,2),Dc(),sp(d,2)}if(d=ap(l),d===null&&Yd(t,s,l,Kc,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else Yd(t,s,l,null,a)}}function ap(t){return t=wn(t),op(t)}var Kc=null;function op(t){if(Kc=null,t=ys(t),t!==null){var s=u(t);if(s===null)t=null;else{var a=s.tag;if(a===13){if(t=h(s),t!==null)return t;t=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null)}}return Kc=t,null}function V_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ch()){case Io:return 2;case ca:return 8;case lr:case fh:return 32;case fa:return 268435456;default:return 32}default:return 32}}var lp=!1,zs=null,Hs=null,Bs=null,xl=new Map,Ol=new Map,Fs=[],$A="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G_(t,s){switch(t){case"focusin":case"focusout":zs=null;break;case"dragenter":case"dragleave":Hs=null;break;case"mouseover":case"mouseout":Bs=null;break;case"pointerover":case"pointerout":xl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(s.pointerId)}}function kl(t,s,a,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:s,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},s!==null&&(s=ti(s),s!==null&&q_(s)),t):(t.eventSystemFlags|=l,s=t.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),t)}function KA(t,s,a,l,f){switch(s){case"focusin":return zs=kl(zs,t,s,a,l,f),!0;case"dragenter":return Hs=kl(Hs,t,s,a,l,f),!0;case"mouseover":return Bs=kl(Bs,t,s,a,l,f),!0;case"pointerover":var d=f.pointerId;return xl.set(d,kl(xl.get(d)||null,t,s,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Ol.set(d,kl(Ol.get(d)||null,t,s,a,l,f)),!0}return!1}function Y_(t){var s=ys(t.target);if(s!==null){var a=u(s);if(a!==null){if(s=a.tag,s===13){if(s=h(a),s!==null){t.blockedOn=s,Du(t.priority,function(){if(a.tag===13){var l=pn();l=dr(l);var f=xa(a,l);f!==null&&mn(f,a,l),sp(a,l)}});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wc(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var a=ap(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);xi=l,a.target.dispatchEvent(l),xi=null}else return s=ti(a),s!==null&&q_(s),t.blockedOn=a,!1;s.shift()}return!0}function $_(t,s,a){Wc(t)&&a.delete(s)}function WA(){lp=!1,zs!==null&&Wc(zs)&&(zs=null),Hs!==null&&Wc(Hs)&&(Hs=null),Bs!==null&&Wc(Bs)&&(Bs=null),xl.forEach($_),Ol.forEach($_)}function Xc(t,s){t.blockedOn===s&&(t.blockedOn=null,lp||(lp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,WA)))}var Qc=null;function K_(t){Qc!==t&&(Qc=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Qc===t&&(Qc=null);for(var s=0;s<t.length;s+=3){var a=t[s],l=t[s+1],f=t[s+2];if(typeof l!="function"){if(op(l||a)===null)continue;break}var d=ti(a);d!==null&&(t.splice(s,3),s-=3,od(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function Dl(t){function s(R){return Xc(R,t)}zs!==null&&Xc(zs,t),Hs!==null&&Xc(Hs,t),Bs!==null&&Xc(Bs,t),xl.forEach(s),Ol.forEach(s);for(var a=0;a<Fs.length;a++){var l=Fs[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Fs.length&&(a=Fs[0],a.blockedOn===null);)Y_(a),a.blockedOn===null&&Fs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],_=f[pt]||null;if(typeof d=="function")_||K_(a);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(f=d,_=d[pt]||null)E=_.formAction;else if(op(f)!==null)continue}else E=_.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),K_(a)}}}function up(t){this._internalRoot=t}Zc.prototype.render=up.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(r(409));var a=s.current,l=pn();B_(a,l,t,s,null,null)},Zc.prototype.unmount=up.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;B_(t.current,2,null,t,null,null),Dc(),s[Sn]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var s=gs();t={blockedOn:null,target:t,priority:s};for(var a=0;a<Fs.length&&s!==0&&s<Fs[a].priority;a++);Fs.splice(a,0,t),a===0&&Y_(t)}};var W_=e.version;if(W_!=="19.1.1")throw Error(r(527,W_,"19.1.1"));ae.findDOMNode=function(t){var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(s),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var XA={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jc.isDisabled&&Jc.supportsFiber)try{lt=Jc.inject(XA),He=Jc}catch{}}return Ll.createRoot=function(t,s){if(!o(t))throw Error(r(299));var a=!1,l="",f=fy,d=hy,_=dy,E=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(_=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(E=s.unstable_transitionCallbacks)),s=z_(t,1,!1,null,null,a,l,f,d,_,E,null),t[Sn]=s.current,Gd(t),new up(s)},Ll.hydrateRoot=function(t,s,a){if(!o(t))throw Error(r(299));var l=!1,f="",d=fy,_=hy,E=dy,R=null,B=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks),a.formState!==void 0&&(B=a.formState)),s=z_(t,1,!0,s,a??null,l,f,d,_,E,R,B),s.context=H_(null),a=s.current,l=pn(),l=dr(l),f=As(l),f.callback=null,Cs(a,f,l),a=l,s.current.lanes=a,Ai(s,a),pi(s),t[Sn]=s.current,Gd(t),new Zc(s)},Ll.version="19.1.1",Ll}var r0;function oC(){if(r0)return hp.exports;r0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),hp.exports=aC(),hp.exports}var lC=oC();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var a0="popstate";function uC(n={}){function e(o,u){let{pathname:h="/",search:p="",hash:m=""}=sa(o.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Vp("",{pathname:h,search:p,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(o,u){let h=o.document.querySelector("base"),p="";if(h&&h.getAttribute("href")){let m=o.location.href,g=m.indexOf("#");p=g===-1?m:m.slice(0,g)}return p+"#"+(typeof u=="string"?u:eu(u))}function r(o,u){Qn(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return fC(e,i,r,n)}function at(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Qn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cC(){return Math.random().toString(36).substring(2,10)}function o0(n,e){return{usr:n.state,key:n.key,idx:e}}function Vp(n,e,i=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?sa(e):e,state:i,key:e&&e.key||r||cC()}}function eu({pathname:n="/",search:e="",hash:i=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function sa(n){let e={};if(n){let i=n.indexOf("#");i>=0&&(e.hash=n.substring(i),n=n.substring(0,i));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function fC(n,e,i,r={}){let{window:o=document.defaultView,v5Compat:u=!1}=r,h=o.history,p="POP",m=null,g=b();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function b(){return(h.state||{idx:null}).idx}function S(){p="POP";let V=b(),J=V==null?null:V-g;g=V,m&&m({action:p,location:$.location,delta:J})}function N(V,J){p="PUSH";let Z=Vp($.location,V,J);i&&i(Z,V),g=b()+1;let ee=o0(Z,g),ce=$.createHref(Z);try{h.pushState(ee,"",ce)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;o.location.assign(ce)}u&&m&&m({action:p,location:$.location,delta:1})}function L(V,J){p="REPLACE";let Z=Vp($.location,V,J);i&&i(Z,V),g=b();let ee=o0(Z,g),ce=$.createHref(Z);h.replaceState(ee,"",ce),u&&m&&m({action:p,location:$.location,delta:0})}function H(V){return hC(V)}let $={get action(){return p},get location(){return n(o,h)},listen(V){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(a0,S),m=V,()=>{o.removeEventListener(a0,S),m=null}},createHref(V){return e(o,V)},createURL:H,encodeLocation(V){let J=H(V);return{pathname:J.pathname,search:J.search,hash:J.hash}},push:N,replace:L,go(V){return h.go(V)}};return $}function hC(n,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),at(i,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:eu(n);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function SE(n,e,i="/"){return dC(n,e,i,!1)}function dC(n,e,i,r){let o=typeof e=="string"?sa(e):e,u=rs(o.pathname||"/",i);if(u==null)return null;let h=TE(n);pC(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let g=AC(u);p=TC(h[m],g,r)}return p}function TE(n,e=[],i=[],r="",o=!1){let u=(h,p,m=o,g)=>{let b={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(r)&&m)return;at(b.relativePath.startsWith(r),`Absolute route path "${b.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(r.length)}let S=ns([r,b.relativePath]),N=i.concat(b);h.children&&h.children.length>0&&(at(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),TE(h.children,e,N,S,m)),!(h.path==null&&!h.index)&&e.push({path:S,score:EC(S,h.index),routesMeta:N})};return n.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))u(h,p);else for(let m of wE(h.path))u(h,p,!0,m)}),e}function wE(n){let e=n.split("/");if(e.length===0)return[];let[i,...r]=e,o=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return o?[u,""]:[u];let h=wE(r.join("/")),p=[];return p.push(...h.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...h),p.map(m=>n.startsWith("/")&&m===""?"/":m)}function pC(n){n.sort((e,i)=>e.score!==i.score?i.score-e.score:SC(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var mC=/^:[\w-]+$/,gC=3,vC=2,yC=1,_C=10,bC=-2,l0=n=>n==="*";function EC(n,e){let i=n.split("/"),r=i.length;return i.some(l0)&&(r+=bC),e&&(r+=vC),i.filter(o=>!l0(o)).reduce((o,u)=>o+(mC.test(u)?gC:u===""?yC:_C),r)}function SC(n,e){return n.length===e.length&&n.slice(0,-1).every((r,o)=>r===e[o])?n[n.length-1]-e[e.length-1]:0}function TC(n,e,i=!1){let{routesMeta:r}=n,o={},u="/",h=[];for(let p=0;p<r.length;++p){let m=r[p],g=p===r.length-1,b=u==="/"?e:e.slice(u.length)||"/",S=_f({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},b),N=m.route;if(!S&&g&&i&&!r[r.length-1].route.index&&(S=_f({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},b)),!S)return null;Object.assign(o,S.params),h.push({params:o,pathname:ns([u,S.pathname]),pathnameBase:IC(ns([u,S.pathnameBase])),route:N}),S.pathnameBase!=="/"&&(u=ns([u,S.pathnameBase]))}return h}function _f(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,r]=wC(n.path,n.caseSensitive,n.end),o=e.match(i);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:r.reduce((g,{paramName:b,isOptional:S},N)=>{if(b==="*"){let H=p[N]||"";h=u.slice(0,u.length-H.length).replace(/(.)\/+$/,"$1")}const L=p[N];return S&&!L?g[b]=void 0:g[b]=(L||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:n}}function wC(n,e=!1,i=!0){Qn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m)=>(r.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(r.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function AC(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function rs(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=n.charAt(i);return r&&r!=="/"?null:n.slice(i)||"/"}function CC(n,e="/"){let{pathname:i,search:r="",hash:o=""}=typeof n=="string"?sa(n):n;return{pathname:i?i.startsWith("/")?i:RC(i,e):e,search:xC(r),hash:OC(o)}}function RC(n,e){let i=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function gp(n,e,i,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function NC(n){return n.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function AE(n){let e=NC(n);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function CE(n,e,i,r=!1){let o;typeof n=="string"?o=sa(n):(o={...n},at(!o.pathname||!o.pathname.includes("?"),gp("?","pathname","search",o)),at(!o.pathname||!o.pathname.includes("#"),gp("#","pathname","hash",o)),at(!o.search||!o.search.includes("#"),gp("#","search","hash",o)));let u=n===""||o.pathname==="",h=u?"/":o.pathname,p;if(h==null)p=i;else{let S=e.length-1;if(!r&&h.startsWith("..")){let N=h.split("/");for(;N[0]==="..";)N.shift(),S-=1;o.pathname=N.join("/")}p=S>=0?e[S]:"/"}let m=CC(o,p),g=h&&h!=="/"&&h.endsWith("/"),b=(u||h===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(g||b)&&(m.pathname+="/"),m}var ns=n=>n.join("/").replace(/\/\/+/g,"/"),IC=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),xC=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,OC=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function kC(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var RE=["POST","PUT","PATCH","DELETE"];new Set(RE);var DC=["GET",...RE];new Set(DC);var bo=Y.createContext(null);bo.displayName="DataRouter";var Gf=Y.createContext(null);Gf.displayName="DataRouterState";Y.createContext(!1);var NE=Y.createContext({isTransitioning:!1});NE.displayName="ViewTransition";var MC=Y.createContext(new Map);MC.displayName="Fetchers";var LC=Y.createContext(null);LC.displayName="Await";var Ei=Y.createContext(null);Ei.displayName="Navigation";var uu=Y.createContext(null);uu.displayName="Location";var fs=Y.createContext({outlet:null,matches:[],isDataRoute:!1});fs.displayName="Route";var km=Y.createContext(null);km.displayName="RouteError";function PC(n,{relative:e}={}){at(cu(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=Y.useContext(Ei),{hash:o,pathname:u,search:h}=hu(n,{relative:e}),p=u;return i!=="/"&&(p=u==="/"?i:ns([i,u])),r.createHref({pathname:p,search:h,hash:o})}function cu(){return Y.useContext(uu)!=null}function ra(){return at(cu(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(uu).location}var IE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xE(n){Y.useContext(Ei).static||Y.useLayoutEffect(n)}function fu(){let{isDataRoute:n}=Y.useContext(fs);return n?WC():UC()}function UC(){at(cu(),"useNavigate() may be used only in the context of a <Router> component.");let n=Y.useContext(bo),{basename:e,navigator:i}=Y.useContext(Ei),{matches:r}=Y.useContext(fs),{pathname:o}=ra(),u=JSON.stringify(AE(r)),h=Y.useRef(!1);return xE(()=>{h.current=!0}),Y.useCallback((m,g={})=>{if(Qn(h.current,IE),!h.current)return;if(typeof m=="number"){i.go(m);return}let b=CE(m,JSON.parse(u),o,g.relative==="path");n==null&&e!=="/"&&(b.pathname=b.pathname==="/"?e:ns([e,b.pathname])),(g.replace?i.replace:i.push)(b,g.state,g)},[e,i,u,o,n])}Y.createContext(null);function hu(n,{relative:e}={}){let{matches:i}=Y.useContext(fs),{pathname:r}=ra(),o=JSON.stringify(AE(i));return Y.useMemo(()=>CE(n,JSON.parse(o),r,e==="path"),[n,o,r,e])}function jC(n,e){return OE(n,e)}function OE(n,e,i,r,o){at(cu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=Y.useContext(Ei),{matches:h}=Y.useContext(fs),p=h[h.length-1],m=p?p.params:{},g=p?p.pathname:"/",b=p?p.pathnameBase:"/",S=p&&p.route;{let Z=S&&S.path||"";kE(g,!S||Z.endsWith("*")||Z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z==="/"?"*":`${Z}/*`}">.`)}let N=ra(),L;if(e){let Z=typeof e=="string"?sa(e):e;at(b==="/"||Z.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Z.pathname}" was given in the \`location\` prop.`),L=Z}else L=N;let H=L.pathname||"/",$=H;if(b!=="/"){let Z=b.replace(/^\//,"").split("/");$="/"+H.replace(/^\//,"").split("/").slice(Z.length).join("/")}let V=SE(n,{pathname:$});Qn(S||V!=null,`No routes matched location "${L.pathname}${L.search}${L.hash}" `),Qn(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${L.pathname}${L.search}${L.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let J=qC(V&&V.map(Z=>Object.assign({},Z,{params:Object.assign({},m,Z.params),pathname:ns([b,u.encodeLocation?u.encodeLocation(Z.pathname).pathname:Z.pathname]),pathnameBase:Z.pathnameBase==="/"?b:ns([b,u.encodeLocation?u.encodeLocation(Z.pathnameBase).pathname:Z.pathnameBase])})),h,i,r,o);return e&&J?Y.createElement(uu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...L},navigationType:"POP"}},J):J}function zC(){let n=KC(),e=kC(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:u},"ErrorBoundary")," or"," ",Y.createElement("code",{style:u},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),i?Y.createElement("pre",{style:o},i):null,h)}var HC=Y.createElement(zC,null),BC=class extends Y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.unstable_onError?this.props.unstable_onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?Y.createElement(fs.Provider,{value:this.props.routeContext},Y.createElement(km.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function FC({routeContext:n,match:e,children:i}){let r=Y.useContext(bo);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(fs.Provider,{value:n},i)}function qC(n,e=[],i=null,r=null,o=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let u=n,h=i?.errors;if(h!=null){let g=u.findIndex(b=>b.route.id&&h?.[b.route.id]!==void 0);at(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let p=!1,m=-1;if(i)for(let g=0;g<u.length;g++){let b=u[g];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(m=g),b.route.id){let{loaderData:S,errors:N}=i,L=b.route.loader&&!S.hasOwnProperty(b.route.id)&&(!N||N[b.route.id]===void 0);if(b.route.lazy||L){p=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((g,b,S)=>{let N,L=!1,H=null,$=null;i&&(N=h&&b.route.id?h[b.route.id]:void 0,H=b.route.errorElement||HC,p&&(m<0&&S===0?(kE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,$=null):m===S&&(L=!0,$=b.route.hydrateFallbackElement||null)));let V=e.concat(u.slice(0,S+1)),J=()=>{let Z;return N?Z=H:L?Z=$:b.route.Component?Z=Y.createElement(b.route.Component,null):b.route.element?Z=b.route.element:Z=g,Y.createElement(FC,{match:b,routeContext:{outlet:g,matches:V,isDataRoute:i!=null},children:Z})};return i&&(b.route.ErrorBoundary||b.route.errorElement||S===0)?Y.createElement(BC,{location:i.location,revalidation:i.revalidation,component:H,error:N,children:J(),routeContext:{outlet:null,matches:V,isDataRoute:!0},unstable_onError:r}):J()},null)}function Dm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function VC(n){let e=Y.useContext(bo);return at(e,Dm(n)),e}function GC(n){let e=Y.useContext(Gf);return at(e,Dm(n)),e}function YC(n){let e=Y.useContext(fs);return at(e,Dm(n)),e}function Mm(n){let e=YC(n),i=e.matches[e.matches.length-1];return at(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function $C(){return Mm("useRouteId")}function KC(){let n=Y.useContext(km),e=GC("useRouteError"),i=Mm("useRouteError");return n!==void 0?n:e.errors?.[i]}function WC(){let{router:n}=VC("useNavigate"),e=Mm("useNavigate"),i=Y.useRef(!1);return xE(()=>{i.current=!0}),Y.useCallback(async(o,u={})=>{Qn(i.current,IE),i.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...u}))},[n,e])}var u0={};function kE(n,e,i){!e&&!u0[n]&&(u0[n]=!0,Qn(!1,i))}Y.memo(XC);function XC({routes:n,future:e,state:i,unstable_onError:r}){return OE(n,void 0,i,r,e)}function Pt(n){at(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function QC({basename:n="/",children:e=null,location:i,navigationType:r="POP",navigator:o,static:u=!1}){at(!cu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),p=Y.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof i=="string"&&(i=sa(i));let{pathname:m="/",search:g="",hash:b="",state:S=null,key:N="default"}=i,L=Y.useMemo(()=>{let H=rs(m,h);return H==null?null:{location:{pathname:H,search:g,hash:b,state:S,key:N},navigationType:r}},[h,m,g,b,S,N,r]);return Qn(L!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${b}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:Y.createElement(Ei.Provider,{value:p},Y.createElement(uu.Provider,{children:e,value:L}))}function ZC({children:n,location:e}){return jC(Gp(n),e)}function Gp(n,e=[]){let i=[];return Y.Children.forEach(n,(r,o)=>{if(!Y.isValidElement(r))return;let u=[...e,o];if(r.type===Y.Fragment){i.push.apply(i,Gp(r.props.children,u));return}at(r.type===Pt,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),at(!r.props.index||!r.props.children,"An index route cannot have child routes.");let h={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=Gp(r.props.children,u)),i.push(h)}),i}var uf="get",cf="application/x-www-form-urlencoded";function Yf(n){return n!=null&&typeof n.tagName=="string"}function JC(n){return Yf(n)&&n.tagName.toLowerCase()==="button"}function eR(n){return Yf(n)&&n.tagName.toLowerCase()==="form"}function tR(n){return Yf(n)&&n.tagName.toLowerCase()==="input"}function nR(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function iR(n,e){return n.button===0&&(!e||e==="_self")&&!nR(n)}var ef=null;function sR(){if(ef===null)try{new FormData(document.createElement("form"),0),ef=!1}catch{ef=!0}return ef}var rR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vp(n){return n!=null&&!rR.has(n)?(Qn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cf}"`),null):n}function aR(n,e){let i,r,o,u,h;if(eR(n)){let p=n.getAttribute("action");r=p?rs(p,e):null,i=n.getAttribute("method")||uf,o=vp(n.getAttribute("enctype"))||cf,u=new FormData(n)}else if(JC(n)||tR(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||p.getAttribute("action");if(r=m?rs(m,e):null,i=n.getAttribute("formmethod")||p.getAttribute("method")||uf,o=vp(n.getAttribute("formenctype"))||vp(p.getAttribute("enctype"))||cf,u=new FormData(p,n),!sR()){let{name:g,type:b,value:S}=n;if(b==="image"){let N=g?`${g}.`:"";u.append(`${N}x`,"0"),u.append(`${N}y`,"0")}else g&&u.append(g,S)}}else{if(Yf(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=uf,r=null,o=cf,h=n}return u&&o==="text/plain"&&(h=u,u=void 0),{action:r,method:i.toLowerCase(),encType:o,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Lm(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function oR(n,e,i){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&rs(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function lR(n,e){if(n.id in e)return e[n.id];try{let i=await import(n.module);return e[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function uR(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function cR(n,e,i){let r=await Promise.all(n.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await lR(u,i);return h.links?h.links():[]}return[]}));return pR(r.flat(1).filter(uR).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function c0(n,e,i,r,o,u){let h=(m,g)=>i[g]?m.route.id!==i[g].route.id:!0,p=(m,g)=>i[g].pathname!==m.pathname||i[g].route.path?.endsWith("*")&&i[g].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,g)=>h(m,g)||p(m,g)):u==="data"?e.filter((m,g)=>{let b=r.routes[m.route.id];if(!b||!b.hasLoader)return!1;if(h(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let S=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function fR(n,e,{includeHydrateFallback:i}={}){return hR(n.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function hR(n){return[...new Set(n)]}function dR(n){let e={},i=Object.keys(n).sort();for(let r of i)e[r]=n[r];return e}function pR(n,e){let i=new Set;return new Set(e),n.reduce((r,o)=>{let u=JSON.stringify(dR(o));return i.has(u)||(i.add(u),r.push({key:u,link:o})),r},[])}function DE(){let n=Y.useContext(bo);return Lm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function mR(){let n=Y.useContext(Gf);return Lm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Pm=Y.createContext(void 0);Pm.displayName="FrameworkContext";function ME(){let n=Y.useContext(Pm);return Lm(n,"You must render this element inside a <HydratedRouter> element"),n}function gR(n,e){let i=Y.useContext(Pm),[r,o]=Y.useState(!1),[u,h]=Y.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:b,onTouchStart:S}=e,N=Y.useRef(null);Y.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let $=J=>{J.forEach(Z=>{h(Z.isIntersecting)})},V=new IntersectionObserver($,{threshold:.5});return N.current&&V.observe(N.current),()=>{V.disconnect()}}},[n]),Y.useEffect(()=>{if(r){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[r]);let L=()=>{o(!0)},H=()=>{o(!1),h(!1)};return i?n!=="intent"?[u,N,{}]:[u,N,{onFocus:Pl(p,L),onBlur:Pl(m,H),onMouseEnter:Pl(g,L),onMouseLeave:Pl(b,H),onTouchStart:Pl(S,L)}]:[!1,N,{}]}function Pl(n,e){return i=>{n&&n(i),i.defaultPrevented||e(i)}}function vR({page:n,...e}){let{router:i}=DE(),r=Y.useMemo(()=>SE(i.routes,n,i.basename),[i.routes,n,i.basename]);return r?Y.createElement(_R,{page:n,matches:r,...e}):null}function yR(n){let{manifest:e,routeModules:i}=ME(),[r,o]=Y.useState([]);return Y.useEffect(()=>{let u=!1;return cR(n,e,i).then(h=>{u||o(h)}),()=>{u=!0}},[n,e,i]),r}function _R({page:n,matches:e,...i}){let r=ra(),{manifest:o,routeModules:u}=ME(),{basename:h}=DE(),{loaderData:p,matches:m}=mR(),g=Y.useMemo(()=>c0(n,e,m,o,r,"data"),[n,e,m,o,r]),b=Y.useMemo(()=>c0(n,e,m,o,r,"assets"),[n,e,m,o,r]),S=Y.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let H=new Set,$=!1;if(e.forEach(J=>{let Z=o.routes[J.route.id];!Z||!Z.hasLoader||(!g.some(ee=>ee.route.id===J.route.id)&&J.route.id in p&&u[J.route.id]?.shouldRevalidate||Z.hasClientLoader?$=!0:H.add(J.route.id))}),H.size===0)return[];let V=oR(n,h,"data");return $&&H.size>0&&V.searchParams.set("_routes",e.filter(J=>H.has(J.route.id)).map(J=>J.route.id).join(",")),[V.pathname+V.search]},[h,p,r,o,g,e,n,u]),N=Y.useMemo(()=>fR(b,o),[b,o]),L=yR(b);return Y.createElement(Y.Fragment,null,S.map(H=>Y.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...i})),N.map(H=>Y.createElement("link",{key:H,rel:"modulepreload",href:H,...i})),L.map(({key:H,link:$})=>Y.createElement("link",{key:H,nonce:i.nonce,...$})))}function bR(...n){return e=>{n.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var LE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{LE&&(window.__reactRouterVersion="7.9.1")}catch{}function ER({basename:n,children:e,window:i}){let r=Y.useRef();r.current==null&&(r.current=uC({window:i,v5Compat:!0}));let o=r.current,[u,h]=Y.useState({action:o.action,location:o.location}),p=Y.useCallback(m=>{Y.startTransition(()=>h(m))},[h]);return Y.useLayoutEffect(()=>o.listen(p),[o,p]),Y.createElement(QC,{basename:n,children:e,location:u.location,navigationType:u.action,navigator:o})}var PE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$f=Y.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:o,reloadDocument:u,replace:h,state:p,target:m,to:g,preventScrollReset:b,viewTransition:S,...N},L){let{basename:H}=Y.useContext(Ei),$=typeof g=="string"&&PE.test(g),V,J=!1;if(typeof g=="string"&&$&&(V=g,LE))try{let C=new URL(window.location.href),k=g.startsWith("//")?new URL(C.protocol+g):new URL(g),M=rs(k.pathname,H);k.origin===C.origin&&M!=null?g=M+k.search+k.hash:J=!0}catch{Qn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=PC(g,{relative:o}),[ee,ce,ne]=gR(r,N),be=AR(g,{replace:h,state:p,target:m,preventScrollReset:b,relative:o,viewTransition:S});function D(C){e&&e(C),C.defaultPrevented||be(C)}let A=Y.createElement("a",{...N,...ne,href:V||Z,onClick:J||u?e:D,ref:bR(L,ce),target:m,"data-discover":!$&&i==="render"?"true":void 0});return ee&&!$?Y.createElement(Y.Fragment,null,A,Y.createElement(vR,{page:Z})):A});$f.displayName="Link";var SR=Y.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:o=!1,style:u,to:h,viewTransition:p,children:m,...g},b){let S=hu(h,{relative:g.relative}),N=ra(),L=Y.useContext(Gf),{navigator:H,basename:$}=Y.useContext(Ei),V=L!=null&&xR(S)&&p===!0,J=H.encodeLocation?H.encodeLocation(S).pathname:S.pathname,Z=N.pathname,ee=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;i||(Z=Z.toLowerCase(),ee=ee?ee.toLowerCase():null,J=J.toLowerCase()),ee&&$&&(ee=rs(ee,$)||ee);const ce=J!=="/"&&J.endsWith("/")?J.length-1:J.length;let ne=Z===J||!o&&Z.startsWith(J)&&Z.charAt(ce)==="/",be=ee!=null&&(ee===J||!o&&ee.startsWith(J)&&ee.charAt(J.length)==="/"),D={isActive:ne,isPending:be,isTransitioning:V},A=ne?e:void 0,C;typeof r=="function"?C=r(D):C=[r,ne?"active":null,be?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let k=typeof u=="function"?u(D):u;return Y.createElement($f,{...g,"aria-current":A,className:C,ref:b,style:k,to:h,viewTransition:p},typeof m=="function"?m(D):m)});SR.displayName="NavLink";var TR=Y.forwardRef(({discover:n="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:o,state:u,method:h=uf,action:p,onSubmit:m,relative:g,preventScrollReset:b,viewTransition:S,...N},L)=>{let H=NR(),$=IR(p,{relative:g}),V=h.toLowerCase()==="get"?"get":"post",J=typeof p=="string"&&PE.test(p),Z=ee=>{if(m&&m(ee),ee.defaultPrevented)return;ee.preventDefault();let ce=ee.nativeEvent.submitter,ne=ce?.getAttribute("formmethod")||h;H(ce||ee.currentTarget,{fetcherKey:e,method:ne,navigate:i,replace:o,state:u,relative:g,preventScrollReset:b,viewTransition:S})};return Y.createElement("form",{ref:L,method:V,action:$,onSubmit:r?m:Z,...N,"data-discover":!J&&n==="render"?"true":void 0})});TR.displayName="Form";function wR(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function UE(n){let e=Y.useContext(bo);return at(e,wR(n)),e}function AR(n,{target:e,replace:i,state:r,preventScrollReset:o,relative:u,viewTransition:h}={}){let p=fu(),m=ra(),g=hu(n,{relative:u});return Y.useCallback(b=>{if(iR(b,e)){b.preventDefault();let S=i!==void 0?i:eu(m)===eu(g);p(n,{replace:S,state:r,preventScrollReset:o,relative:u,viewTransition:h})}},[m,p,g,i,r,e,n,o,u,h])}var CR=0,RR=()=>`__${String(++CR)}__`;function NR(){let{router:n}=UE("useSubmit"),{basename:e}=Y.useContext(Ei),i=$C();return Y.useCallback(async(r,o={})=>{let{action:u,method:h,encType:p,formData:m,body:g}=aR(r,e);if(o.navigate===!1){let b=o.fetcherKey||RR();await n.fetch(b,i,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:i,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,i])}function IR(n,{relative:e}={}){let{basename:i}=Y.useContext(Ei),r=Y.useContext(fs);at(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),u={...hu(n||".",{relative:e})},h=ra();if(n==null){u.search=h.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(b=>b==="")){p.delete("index"),m.filter(S=>S).forEach(S=>p.append("index",S));let b=p.toString();u.search=b?`?${b}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ns([i,u.pathname])),eu(u)}function xR(n,{relative:e}={}){let i=Y.useContext(NE);at(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=UE("useViewTransitionState"),o=hu(n,{relative:e});if(!i.isTransitioning)return!1;let u=rs(i.currentLocation.pathname,r)||i.currentLocation.pathname,h=rs(i.nextLocation.pathname,r)||i.nextLocation.pathname;return _f(o.pathname,h)!=null||_f(o.pathname,u)!=null}const OR="/Delivery-box-web2/assets/icon-CoOTgtnl.png",kR="/Delivery-box-web2/assets/CompanyName-nI6uOon3.png",DR=()=>{const n=fu(),[e,i]=Y.useState("Home"),[r,o]=Y.useState(!1),[u,h]=Y.useState(!1),p=(b,S)=>{i(b),n(S),h(!1)},m=()=>{n(r?"/account":"/signin")},g=()=>{h(!u)};return w.jsxs("div",{className:"header-container",children:[w.jsx("div",{className:"top-header",children:w.jsxs("div",{className:"contact-info",children:[w.jsx("ion-icon",{name:"call-outline",className:"icon"}),w.jsx("span",{className:"contact-text-header",children:"+91 9306385029"}),w.jsx("ion-icon",{name:"mail-outline",className:"mail-icon"}),w.jsx("span",{className:"contact-text-header",children:"nancypanghal13@gmail.com"})]})}),w.jsxs("div",{className:"main-header",children:[w.jsxs("div",{className:"header-left",children:[w.jsx("img",{src:OR,alt:"Logo",className:"logo-image"}),w.jsx("img",{src:kR,alt:"Company Name",className:"company-name-image"})]}),w.jsx("button",{className:"mobile-menu-button",onClick:g,children:w.jsx("ion-icon",{name:u?"close-outline":"menu-outline"})}),w.jsxs("div",{className:`tabs-container ${u?"mobile-open":""}`,children:[w.jsx("button",{className:`tab ${e==="Home"?"active-tab":""}`,onClick:()=>p("Home","/"),children:"Home"}),w.jsx("button",{className:`tab ${e==="Shop"?"active-tab":""}`,onClick:()=>p("Shop","/products"),children:"Shop"}),w.jsx("button",{className:`tab ${e==="About Us"?"active-tab":""}`,onClick:()=>p("About Us","/about"),children:"About Us"}),w.jsx("button",{className:`tab ${e==="About Product"?"active-tab":""}`,onClick:()=>p("About Product","/about-product"),children:"About Product"}),w.jsx("button",{className:`tab ${e==="FAQs"?"active-tab":""}`,onClick:()=>p("FAQs","/faqs"),children:"FAQs"})]}),w.jsxs("div",{className:"header-right",children:[w.jsx("button",{className:"sign-in-text1",onClick:()=>n("/signin"),children:"LOG IN"}),w.jsx("button",{className:"icon-button",children:w.jsx("ion-icon",{name:"cart-outline",className:"icon"})}),w.jsx("button",{className:"icon-button",onClick:m,children:w.jsx("ion-icon",{name:"person-outline",className:"icon"})})]})]})]})};/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Yp(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,r=Array(e);i<e;i++)r[i]=n[i];return r}function MR(n){if(Array.isArray(n))return n}function LR(n){if(Array.isArray(n))return Yp(n)}function PR(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function UR(n,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,jE(r.key),r)}}function jR(n,e,i){return e&&UR(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function ff(n,e){var i=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!i){if(Array.isArray(n)||(i=Um(n))||e){i&&(n=i);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(m){throw m},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u,h=!0,p=!1;return{s:function(){i=i.call(n)},n:function(){var m=i.next();return h=m.done,m},e:function(m){p=!0,u=m},f:function(){try{h||i.return==null||i.return()}finally{if(p)throw u}}}}function Re(n,e,i){return(e=jE(e))in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function zR(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function HR(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var r,o,u,h,p=[],m=!0,g=!1;try{if(u=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;m=!1}else for(;!(m=(r=u.call(i)).done)&&(p.push(r.value),p.length!==e);m=!0);}catch(b){g=!0,o=b}finally{try{if(!m&&i.return!=null&&(h=i.return(),Object(h)!==h))return}finally{if(g)throw o}}return p}}function BR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f0(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),i.push.apply(i,r)}return i}function ie(n){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?f0(Object(i),!0).forEach(function(r){Re(n,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):f0(Object(i)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(i,r))})}return n}function Kf(n,e){return MR(n)||HR(n,e)||Um(n,e)||BR()}function Zn(n){return LR(n)||zR(n)||Um(n)||FR()}function qR(n,e){if(typeof n!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var r=i.call(n,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function jE(n){var e=qR(n,"string");return typeof e=="symbol"?e:e+""}function bf(n){"@babel/helpers - typeof";return bf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bf(n)}function Um(n,e){if(n){if(typeof n=="string")return Yp(n,e);var i={}.toString.call(n).slice(8,-1);return i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set"?Array.from(n):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Yp(n,e):void 0}}var h0=function(){},jm={},zE={},HE=null,BE={mark:h0,measure:h0};try{typeof window<"u"&&(jm=window),typeof document<"u"&&(zE=document),typeof MutationObserver<"u"&&(HE=MutationObserver),typeof performance<"u"&&(BE=performance)}catch{}var VR=jm.navigator||{},d0=VR.userAgent,p0=d0===void 0?"":d0,Zs=jm,et=zE,m0=HE,tf=BE;Zs.document;var hs=!!et.documentElement&&!!et.head&&typeof et.addEventListener=="function"&&typeof et.createElement=="function",FE=~p0.indexOf("MSIE")||~p0.indexOf("Trident/"),yp,GR=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,YR=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,qE={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},$R={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},VE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],jt="classic",du="duotone",GE="sharp",YE="sharp-duotone",$E="chisel",KE="etch",WE="jelly",XE="jelly-duo",QE="jelly-fill",ZE="notdog",JE="notdog-duo",eS="slab",tS="slab-press",nS="thumbprint",iS="whiteboard",KR="Classic",WR="Duotone",XR="Sharp",QR="Sharp Duotone",ZR="Chisel",JR="Etch",eN="Jelly",tN="Jelly Duo",nN="Jelly Fill",iN="Notdog",sN="Notdog Duo",rN="Slab",aN="Slab Press",oN="Thumbprint",lN="Whiteboard",sS=[jt,du,GE,YE,$E,KE,WE,XE,QE,ZE,JE,eS,tS,nS,iS];yp={},Re(Re(Re(Re(Re(Re(Re(Re(Re(Re(yp,jt,KR),du,WR),GE,XR),YE,QR),$E,ZR),KE,JR),WE,eN),XE,tN),QE,nN),ZE,iN),Re(Re(Re(Re(Re(yp,JE,sN),eS,rN),tS,aN),nS,oN),iS,lN);var uN={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},cN={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},fN=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),hN={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},rS=["fak","fa-kit","fakd","fa-kit-duotone"],g0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},dN=["kit"],pN="kit",mN="kit-duotone",gN="Kit",vN="Kit Duotone";Re(Re({},pN,gN),mN,vN);var yN={kit:{"fa-kit":"fak"}},_N={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},bN={kit:{fak:"fa-kit"}},v0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},_p,nf={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},EN=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],SN="classic",TN="duotone",wN="sharp",AN="sharp-duotone",CN="chisel",RN="etch",NN="jelly",IN="jelly-duo",xN="jelly-fill",ON="notdog",kN="notdog-duo",DN="slab",MN="slab-press",LN="thumbprint",PN="whiteboard",UN="Classic",jN="Duotone",zN="Sharp",HN="Sharp Duotone",BN="Chisel",FN="Etch",qN="Jelly",VN="Jelly Duo",GN="Jelly Fill",YN="Notdog",$N="Notdog Duo",KN="Slab",WN="Slab Press",XN="Thumbprint",QN="Whiteboard";_p={},Re(Re(Re(Re(Re(Re(Re(Re(Re(Re(_p,SN,UN),TN,jN),wN,zN),AN,HN),CN,BN),RN,FN),NN,qN),IN,VN),xN,GN),ON,YN),Re(Re(Re(Re(Re(_p,kN,$N),DN,KN),MN,WN),LN,XN),PN,QN);var ZN="kit",JN="kit-duotone",e2="Kit",t2="Kit Duotone";Re(Re({},ZN,e2),JN,t2);var n2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},i2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},$p={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},s2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],aS=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(EN,s2),r2=["solid","regular","light","thin","duotone","brands","semibold"],oS=[1,2,3,4,5,6,7,8,9,10],a2=oS.concat([11,12,13,14,15,16,17,18,19,20]),o2=["aw","fw","pull-left","pull-right"],l2=[].concat(Zn(Object.keys(i2)),r2,o2,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",nf.GROUP,nf.SWAP_OPACITY,nf.PRIMARY,nf.SECONDARY]).concat(oS.map(function(n){return"".concat(n,"x")})).concat(a2.map(function(n){return"w-".concat(n)})),u2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},as="___FONT_AWESOME___",Kp=16,lS="fa",uS="svg-inline--fa",Wr="data-fa-i2svg",Wp="data-fa-pseudo-element",c2="data-fa-pseudo-element-pending",zm="data-prefix",Hm="data-icon",y0="fontawesome-i2svg",f2="async",h2=["HTML","HEAD","STYLE","SCRIPT"],cS=["::before","::after",":before",":after"],fS=(function(){try{return!0}catch{return!1}})();function pu(n){return new Proxy(n,{get:function(i,r){return r in i?i[r]:i[jt]}})}var hS=ie({},qE);hS[jt]=ie(ie(ie(ie({},{"fa-duotone":"duotone"}),qE[jt]),g0.kit),g0["kit-duotone"]);var d2=pu(hS),Xp=ie({},hN);Xp[jt]=ie(ie(ie(ie({},{duotone:"fad"}),Xp[jt]),v0.kit),v0["kit-duotone"]);var _0=pu(Xp),Qp=ie({},$p);Qp[jt]=ie(ie({},Qp[jt]),bN.kit);var Bm=pu(Qp),Zp=ie({},n2);Zp[jt]=ie(ie({},Zp[jt]),yN.kit);pu(Zp);var p2=GR,dS="fa-layers-text",m2=YR,g2=ie({},uN);pu(g2);var v2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bp=$R,y2=[].concat(Zn(dN),Zn(l2)),Vl=Zs.FontAwesomeConfig||{};function _2(n){var e=et.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function b2(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(et&&typeof et.querySelector=="function"){var E2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];E2.forEach(function(n){var e=Kf(n,2),i=e[0],r=e[1],o=b2(_2(i));o!=null&&(Vl[r]=o)})}var pS={styleDefault:"solid",familyDefault:jt,cssPrefix:lS,replacementClass:uS,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vl.familyPrefix&&(Vl.cssPrefix=Vl.familyPrefix);var mo=ie(ie({},pS),Vl);mo.autoReplaceSvg||(mo.observeMutations=!1);var de={};Object.keys(pS).forEach(function(n){Object.defineProperty(de,n,{enumerable:!0,set:function(i){mo[n]=i,Gl.forEach(function(r){return r(de)})},get:function(){return mo[n]}})});Object.defineProperty(de,"familyPrefix",{enumerable:!0,set:function(e){mo.cssPrefix=e,Gl.forEach(function(i){return i(de)})},get:function(){return mo.cssPrefix}});Zs.FontAwesomeConfig=de;var Gl=[];function S2(n){return Gl.push(n),function(){Gl.splice(Gl.indexOf(n),1)}}var to=Kp,mi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function T2(n){if(!(!n||!hs)){var e=et.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var i=et.head.childNodes,r=null,o=i.length-1;o>-1;o--){var u=i[o],h=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(r=u)}return et.head.insertBefore(e,r),n}}var w2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function b0(){for(var n=12,e="";n-- >0;)e+=w2[Math.random()*62|0];return e}function Eo(n){for(var e=[],i=(n||[]).length>>>0;i--;)e[i]=n[i];return e}function Fm(n){return n.classList?Eo(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function mS(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function A2(n){return Object.keys(n||{}).reduce(function(e,i){return e+"".concat(i,'="').concat(mS(n[i]),'" ')},"").trim()}function Wf(n){return Object.keys(n||{}).reduce(function(e,i){return e+"".concat(i,": ").concat(n[i].trim(),";")},"")}function qm(n){return n.size!==mi.size||n.x!==mi.x||n.y!==mi.y||n.rotate!==mi.rotate||n.flipX||n.flipY}function C2(n){var e=n.transform,i=n.containerWidth,r=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},u="translate(".concat(e.x*32,", ").concat(e.y*32,") "),h="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),p="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(u," ").concat(h," ").concat(p)},g={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:m,path:g}}function R2(n){var e=n.transform,i=n.width,r=i===void 0?Kp:i,o=n.height,u=o===void 0?Kp:o,h="";return FE?h+="translate(".concat(e.x/to-r/2,"em, ").concat(e.y/to-u/2,"em) "):h+="translate(calc(-50% + ".concat(e.x/to,"em), calc(-50% + ").concat(e.y/to,"em)) "),h+="scale(".concat(e.size/to*(e.flipX?-1:1),", ").concat(e.size/to*(e.flipY?-1:1),") "),h+="rotate(".concat(e.rotate,"deg) "),h}var N2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function gS(){var n=lS,e=uS,i=de.cssPrefix,r=de.replacementClass,o=N2;if(i!==n||r!==e){var u=new RegExp("\\.".concat(n,"\\-"),"g"),h=new RegExp("\\--".concat(n,"\\-"),"g"),p=new RegExp("\\.".concat(e),"g");o=o.replace(u,".".concat(i,"-")).replace(h,"--".concat(i,"-")).replace(p,".".concat(r))}return o}var E0=!1;function Ep(){de.autoAddCss&&!E0&&(T2(gS()),E0=!0)}var I2={mixout:function(){return{dom:{css:gS,insertCss:Ep}}},hooks:function(){return{beforeDOMElementCreation:function(){Ep()},beforeI2svg:function(){Ep()}}}},os=Zs||{};os[as]||(os[as]={});os[as].styles||(os[as].styles={});os[as].hooks||(os[as].hooks={});os[as].shims||(os[as].shims=[]);var Yn=os[as],vS=[],yS=function(){et.removeEventListener("DOMContentLoaded",yS),Ef=1,vS.map(function(e){return e()})},Ef=!1;hs&&(Ef=(et.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(et.readyState),Ef||et.addEventListener("DOMContentLoaded",yS));function x2(n){hs&&(Ef?setTimeout(n,0):vS.push(n))}function mu(n){var e=n.tag,i=n.attributes,r=i===void 0?{}:i,o=n.children,u=o===void 0?[]:o;return typeof n=="string"?mS(n):"<".concat(e," ").concat(A2(r),">").concat(u.map(mu).join(""),"</").concat(e,">")}function S0(n,e,i){if(n&&n[e]&&n[e][i])return{prefix:e,iconName:i,icon:n[e][i]}}var Sp=function(e,i,r,o){var u=Object.keys(e),h=u.length,p=i,m,g,b;for(r===void 0?(m=1,b=e[u[0]]):(m=0,b=r);m<h;m++)g=u[m],b=p(b,e[g],g,e);return b};function _S(n){return Zn(n).length!==1?null:n.codePointAt(0).toString(16)}function T0(n){return Object.keys(n).reduce(function(e,i){var r=n[i],o=!!r.icon;return o?e[r.iconName]=r.icon:e[i]=r,e},{})}function Jp(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.skipHooks,o=r===void 0?!1:r,u=T0(e);typeof Yn.hooks.addPack=="function"&&!o?Yn.hooks.addPack(n,T0(e)):Yn.styles[n]=ie(ie({},Yn.styles[n]||{}),u),n==="fas"&&Jp("fa",e)}var tu=Yn.styles,O2=Yn.shims,bS=Object.keys(Bm),k2=bS.reduce(function(n,e){return n[e]=Object.keys(Bm[e]),n},{}),Vm=null,ES={},SS={},TS={},wS={},AS={};function D2(n){return~y2.indexOf(n)}function M2(n,e){var i=e.split("-"),r=i[0],o=i.slice(1).join("-");return r===n&&o!==""&&!D2(o)?o:null}var CS=function(){var e=function(u){return Sp(tu,function(h,p,m){return h[m]=Sp(p,u,{}),h},{})};ES=e(function(o,u,h){if(u[3]&&(o[u[3]]=h),u[2]){var p=u[2].filter(function(m){return typeof m=="number"});p.forEach(function(m){o[m.toString(16)]=h})}return o}),SS=e(function(o,u,h){if(o[h]=h,u[2]){var p=u[2].filter(function(m){return typeof m=="string"});p.forEach(function(m){o[m]=h})}return o}),AS=e(function(o,u,h){var p=u[2];return o[h]=h,p.forEach(function(m){o[m]=h}),o});var i="far"in tu||de.autoFetchSvg,r=Sp(O2,function(o,u){var h=u[0],p=u[1],m=u[2];return p==="far"&&!i&&(p="fas"),typeof h=="string"&&(o.names[h]={prefix:p,iconName:m}),typeof h=="number"&&(o.unicodes[h.toString(16)]={prefix:p,iconName:m}),o},{names:{},unicodes:{}});TS=r.names,wS=r.unicodes,Vm=Xf(de.styleDefault,{family:de.familyDefault})};S2(function(n){Vm=Xf(n.styleDefault,{family:de.familyDefault})});CS();function Gm(n,e){return(ES[n]||{})[e]}function L2(n,e){return(SS[n]||{})[e]}function Yr(n,e){return(AS[n]||{})[e]}function RS(n){return TS[n]||{prefix:null,iconName:null}}function P2(n){var e=wS[n],i=Gm("fas",n);return e||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function Js(){return Vm}var NS=function(){return{prefix:null,iconName:null,rest:[]}};function U2(n){var e=jt,i=bS.reduce(function(r,o){return r[o]="".concat(de.cssPrefix,"-").concat(o),r},{});return sS.forEach(function(r){(n.includes(i[r])||n.some(function(o){return k2[r].includes(o)}))&&(e=r)}),e}function Xf(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.family,r=i===void 0?jt:i,o=d2[r][n];if(r===du&&!n)return"fad";var u=_0[r][n]||_0[r][o],h=n in Yn.styles?n:null,p=u||h||null;return p}function j2(n){var e=[],i=null;return n.forEach(function(r){var o=M2(de.cssPrefix,r);o?i=o:r&&e.push(r)}),{iconName:i,rest:e}}function w0(n){return n.sort().filter(function(e,i,r){return r.indexOf(e)===i})}var A0=aS.concat(rS);function Qf(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.skipLookups,r=i===void 0?!1:i,o=null,u=w0(n.filter(function(L){return A0.includes(L)})),h=w0(n.filter(function(L){return!A0.includes(L)})),p=u.filter(function(L){return o=L,!VE.includes(L)}),m=Kf(p,1),g=m[0],b=g===void 0?null:g,S=U2(u),N=ie(ie({},j2(h)),{},{prefix:Xf(b,{family:S})});return ie(ie(ie({},N),F2({values:n,family:S,styles:tu,config:de,canonical:N,givenPrefix:o})),z2(r,o,N))}function z2(n,e,i){var r=i.prefix,o=i.iconName;if(n||!r||!o)return{prefix:r,iconName:o};var u=e==="fa"?RS(o):{},h=Yr(r,o);return o=u.iconName||h||o,r=u.prefix||r,r==="far"&&!tu.far&&tu.fas&&!de.autoFetchSvg&&(r="fas"),{prefix:r,iconName:o}}var H2=sS.filter(function(n){return n!==jt||n!==du}),B2=Object.keys($p).filter(function(n){return n!==jt}).map(function(n){return Object.keys($p[n])}).flat();function F2(n){var e=n.values,i=n.family,r=n.canonical,o=n.givenPrefix,u=o===void 0?"":o,h=n.styles,p=h===void 0?{}:h,m=n.config,g=m===void 0?{}:m,b=i===du,S=e.includes("fa-duotone")||e.includes("fad"),N=g.familyDefault==="duotone",L=r.prefix==="fad"||r.prefix==="fa-duotone";if(!b&&(S||N||L)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&H2.includes(i)){var H=Object.keys(p).find(function(V){return B2.includes(V)});if(H||g.autoFetchSvg){var $=fN.get(i).defaultShortPrefixId;r.prefix=$,r.iconName=Yr(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||u==="fa")&&(r.prefix=Js()||"fas"),r}var q2=(function(){function n(){PR(this,n),this.definitions={}}return jR(n,[{key:"add",value:function(){for(var i=this,r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];var h=o.reduce(this._pullDefinitions,{});Object.keys(h).forEach(function(p){i.definitions[p]=ie(ie({},i.definitions[p]||{}),h[p]),Jp(p,h[p]);var m=Bm[jt][p];m&&Jp(m,h[p]),CS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,r){var o=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(o).map(function(u){var h=o[u],p=h.prefix,m=h.iconName,g=h.icon,b=g[2];i[p]||(i[p]={}),b.length>0&&b.forEach(function(S){typeof S=="string"&&(i[p][S]=g)}),i[p][m]=g}),i}}])})(),C0=[],so={},lo={},V2=Object.keys(lo);function G2(n,e){var i=e.mixoutsTo;return C0=n,so={},Object.keys(lo).forEach(function(r){V2.indexOf(r)===-1&&delete lo[r]}),C0.forEach(function(r){var o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(function(h){typeof o[h]=="function"&&(i[h]=o[h]),bf(o[h])==="object"&&Object.keys(o[h]).forEach(function(p){i[h]||(i[h]={}),i[h][p]=o[h][p]})}),r.hooks){var u=r.hooks();Object.keys(u).forEach(function(h){so[h]||(so[h]=[]),so[h].push(u[h])})}r.provides&&r.provides(lo)}),i}function em(n,e){for(var i=arguments.length,r=new Array(i>2?i-2:0),o=2;o<i;o++)r[o-2]=arguments[o];var u=so[n]||[];return u.forEach(function(h){e=h.apply(null,[e].concat(r))}),e}function Xr(n){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];var o=so[n]||[];o.forEach(function(u){u.apply(null,i)})}function er(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return lo[n]?lo[n].apply(null,e):void 0}function tm(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,i=n.prefix||Js();if(e)return e=Yr(i,e)||e,S0(IS.definitions,i,e)||S0(Yn.styles,i,e)}var IS=new q2,Y2=function(){de.autoReplaceSvg=!1,de.observeMutations=!1,Xr("noAuto")},$2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return hs?(Xr("beforeI2svg",e),er("pseudoElements2svg",e),er("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot;de.autoReplaceSvg===!1&&(de.autoReplaceSvg=!0),de.observeMutations=!0,x2(function(){W2({autoReplaceSvgRoot:i}),Xr("watch",e)})}},K2={icon:function(e){if(e===null)return null;if(bf(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Yr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var i=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Xf(e[0]);return{prefix:r,iconName:Yr(r,i)||i}}if(typeof e=="string"&&(e.indexOf("".concat(de.cssPrefix,"-"))>-1||e.match(p2))){var o=Qf(e.split(" "),{skipLookups:!0});return{prefix:o.prefix||Js(),iconName:Yr(o.prefix,o.iconName)||o.iconName}}if(typeof e=="string"){var u=Js();return{prefix:u,iconName:Yr(u,e)||e}}}},_n={noAuto:Y2,config:de,dom:$2,parse:K2,library:IS,findIconDefinition:tm,toHtml:mu},W2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot,r=i===void 0?et:i;(Object.keys(Yn.styles).length>0||de.autoFetchSvg)&&hs&&de.autoReplaceSvg&&_n.dom.i2svg({node:r})};function Zf(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(r){return mu(r)})}}),Object.defineProperty(n,"node",{get:function(){if(hs){var r=et.createElement("div");return r.innerHTML=n.html,r.children}}}),n}function X2(n){var e=n.children,i=n.main,r=n.mask,o=n.attributes,u=n.styles,h=n.transform;if(qm(h)&&i.found&&!r.found){var p=i.width,m=i.height,g={x:p/m/2,y:.5};o.style=Wf(ie(ie({},u),{},{"transform-origin":"".concat(g.x+h.x/16,"em ").concat(g.y+h.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function Q2(n){var e=n.prefix,i=n.iconName,r=n.children,o=n.attributes,u=n.symbol,h=u===!0?"".concat(e,"-").concat(de.cssPrefix,"-").concat(i):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ie(ie({},o),{},{id:h}),children:r}]}]}function Z2(n){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(i){return i in n})}function Ym(n){var e=n.icons,i=e.main,r=e.mask,o=n.prefix,u=n.iconName,h=n.transform,p=n.symbol,m=n.maskId,g=n.extra,b=n.watchable,S=b===void 0?!1:b,N=r.found?r:i,L=N.width,H=N.height,$=[de.replacementClass,u?"".concat(de.cssPrefix,"-").concat(u):""].filter(function(ne){return g.classes.indexOf(ne)===-1}).filter(function(ne){return ne!==""||!!ne}).concat(g.classes).join(" "),V={children:[],attributes:ie(ie({},g.attributes),{},{"data-prefix":o,"data-icon":u,class:$,role:g.attributes.role||"img",viewBox:"0 0 ".concat(L," ").concat(H)})};!Z2(g.attributes)&&!g.attributes["aria-hidden"]&&(V.attributes["aria-hidden"]="true"),S&&(V.attributes[Wr]="");var J=ie(ie({},V),{},{prefix:o,iconName:u,main:i,mask:r,maskId:m,transform:h,symbol:p,styles:ie({},g.styles)}),Z=r.found&&i.found?er("generateAbstractMask",J)||{children:[],attributes:{}}:er("generateAbstractIcon",J)||{children:[],attributes:{}},ee=Z.children,ce=Z.attributes;return J.children=ee,J.attributes=ce,p?Q2(J):X2(J)}function R0(n){var e=n.content,i=n.width,r=n.height,o=n.transform,u=n.extra,h=n.watchable,p=h===void 0?!1:h,m=ie(ie({},u.attributes),{},{class:u.classes.join(" ")});p&&(m[Wr]="");var g=ie({},u.styles);qm(o)&&(g.transform=R2({transform:o,width:i,height:r}),g["-webkit-transform"]=g.transform);var b=Wf(g);b.length>0&&(m.style=b);var S=[];return S.push({tag:"span",attributes:m,children:[e]}),S}function J2(n){var e=n.content,i=n.extra,r=ie(ie({},i.attributes),{},{class:i.classes.join(" ")}),o=Wf(i.styles);o.length>0&&(r.style=o);var u=[];return u.push({tag:"span",attributes:r,children:[e]}),u}var Tp=Yn.styles;function nm(n){var e=n[0],i=n[1],r=n.slice(4),o=Kf(r,1),u=o[0],h=null;return Array.isArray(u)?h={tag:"g",attributes:{class:"".concat(de.cssPrefix,"-").concat(bp.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(bp.SECONDARY),fill:"currentColor",d:u[0]}},{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(bp.PRIMARY),fill:"currentColor",d:u[1]}}]}:h={tag:"path",attributes:{fill:"currentColor",d:u}},{found:!0,width:e,height:i,icon:h}}var eI={found:!1,width:512,height:512};function tI(n,e){!fS&&!de.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function im(n,e){var i=e;return e==="fa"&&de.styleDefault!==null&&(e=Js()),new Promise(function(r,o){if(i==="fa"){var u=RS(n)||{};n=u.iconName||n,e=u.prefix||e}if(n&&e&&Tp[e]&&Tp[e][n]){var h=Tp[e][n];return r(nm(h))}tI(n,e),r(ie(ie({},eI),{},{icon:de.showMissingIcons&&n?er("missingIconAbstract")||{}:{}}))})}var N0=function(){},sm=de.measurePerformance&&tf&&tf.mark&&tf.measure?tf:{mark:N0,measure:N0},Bl='FA "7.0.1"',nI=function(e){return sm.mark("".concat(Bl," ").concat(e," begins")),function(){return xS(e)}},xS=function(e){sm.mark("".concat(Bl," ").concat(e," ends")),sm.measure("".concat(Bl," ").concat(e),"".concat(Bl," ").concat(e," begins"),"".concat(Bl," ").concat(e," ends"))},$m={begin:nI,end:xS},hf=function(){};function I0(n){var e=n.getAttribute?n.getAttribute(Wr):null;return typeof e=="string"}function iI(n){var e=n.getAttribute?n.getAttribute(zm):null,i=n.getAttribute?n.getAttribute(Hm):null;return e&&i}function sI(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(de.replacementClass)}function rI(){if(de.autoReplaceSvg===!0)return df.replace;var n=df[de.autoReplaceSvg];return n||df.replace}function aI(n){return et.createElementNS("http://www.w3.org/2000/svg",n)}function oI(n){return et.createElement(n)}function OS(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.ceFn,r=i===void 0?n.tag==="svg"?aI:oI:i;if(typeof n=="string")return et.createTextNode(n);var o=r(n.tag);Object.keys(n.attributes||[]).forEach(function(h){o.setAttribute(h,n.attributes[h])});var u=n.children||[];return u.forEach(function(h){o.appendChild(OS(h,{ceFn:r}))}),o}function lI(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var df={replace:function(e){var i=e[0];if(i.parentNode)if(e[1].forEach(function(o){i.parentNode.insertBefore(OS(o),i)}),i.getAttribute(Wr)===null&&de.keepOriginalSource){var r=et.createComment(lI(i));i.parentNode.replaceChild(r,i)}else i.remove()},nest:function(e){var i=e[0],r=e[1];if(~Fm(i).indexOf(de.replacementClass))return df.replace(e);var o=new RegExp("".concat(de.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var u=r[0].attributes.class.split(" ").reduce(function(p,m){return m===de.replacementClass||m.match(o)?p.toSvg.push(m):p.toNode.push(m),p},{toNode:[],toSvg:[]});r[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",u.toNode.join(" "))}var h=r.map(function(p){return mu(p)}).join(`
`);i.setAttribute(Wr,""),i.innerHTML=h}};function x0(n){n()}function kS(n,e){var i=typeof e=="function"?e:hf;if(n.length===0)i();else{var r=x0;de.mutateApproach===f2&&(r=Zs.requestAnimationFrame||x0),r(function(){var o=rI(),u=$m.begin("mutate");n.map(o),u(),i()})}}var Km=!1;function DS(){Km=!0}function rm(){Km=!1}var Sf=null;function O0(n){if(m0&&de.observeMutations){var e=n.treeCallback,i=e===void 0?hf:e,r=n.nodeCallback,o=r===void 0?hf:r,u=n.pseudoElementsCallback,h=u===void 0?hf:u,p=n.observeMutationsRoot,m=p===void 0?et:p;Sf=new m0(function(g){if(!Km){var b=Js();Eo(g).forEach(function(S){if(S.type==="childList"&&S.addedNodes.length>0&&!I0(S.addedNodes[0])&&(de.searchPseudoElements&&h(S.target),i(S.target)),S.type==="attributes"&&S.target.parentNode&&de.searchPseudoElements&&h([S.target],!0),S.type==="attributes"&&I0(S.target)&&~v2.indexOf(S.attributeName))if(S.attributeName==="class"&&iI(S.target)){var N=Qf(Fm(S.target)),L=N.prefix,H=N.iconName;S.target.setAttribute(zm,L||b),H&&S.target.setAttribute(Hm,H)}else sI(S.target)&&o(S.target)})}}),hs&&Sf.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function uI(){Sf&&Sf.disconnect()}function cI(n){var e=n.getAttribute("style"),i=[];return e&&(i=e.split(";").reduce(function(r,o){var u=o.split(":"),h=u[0],p=u.slice(1);return h&&p.length>0&&(r[h]=p.join(":").trim()),r},{})),i}function fI(n){var e=n.getAttribute("data-prefix"),i=n.getAttribute("data-icon"),r=n.innerText!==void 0?n.innerText.trim():"",o=Qf(Fm(n));return o.prefix||(o.prefix=Js()),e&&i&&(o.prefix=e,o.iconName=i),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=L2(o.prefix,n.innerText)||Gm(o.prefix,_S(n.innerText))),!o.iconName&&de.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=n.firstChild.data)),o}function hI(n){var e=Eo(n.attributes).reduce(function(i,r){return i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i},{});return e}function dI(){return{iconName:null,prefix:null,transform:mi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k0(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=fI(n),r=i.iconName,o=i.prefix,u=i.rest,h=hI(n),p=em("parseNodeAttributes",{},n),m=e.styleParser?cI(n):[];return ie({iconName:r,prefix:o,transform:mi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:m,attributes:h}},p)}var pI=Yn.styles;function MS(n){var e=de.autoReplaceSvg==="nest"?k0(n,{styleParser:!1}):k0(n);return~e.extra.classes.indexOf(dS)?er("generateLayersText",n,e):er("generateSvgReplacementMutation",n,e)}function mI(){return[].concat(Zn(rS),Zn(aS))}function D0(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!hs)return Promise.resolve();var i=et.documentElement.classList,r=function(S){return i.add("".concat(y0,"-").concat(S))},o=function(S){return i.remove("".concat(y0,"-").concat(S))},u=de.autoFetchSvg?mI():VE.concat(Object.keys(pI));u.includes("fa")||u.push("fa");var h=[".".concat(dS,":not([").concat(Wr,"])")].concat(u.map(function(b){return".".concat(b,":not([").concat(Wr,"])")})).join(", ");if(h.length===0)return Promise.resolve();var p=[];try{p=Eo(n.querySelectorAll(h))}catch{}if(p.length>0)r("pending"),o("complete");else return Promise.resolve();var m=$m.begin("onTree"),g=p.reduce(function(b,S){try{var N=MS(S);N&&b.push(N)}catch(L){fS||L.name==="MissingIcon"&&console.error(L)}return b},[]);return new Promise(function(b,S){Promise.all(g).then(function(N){kS(N,function(){r("active"),r("complete"),o("pending"),typeof e=="function"&&e(),m(),b()})}).catch(function(N){m(),S(N)})})}function gI(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;MS(n).then(function(i){i&&kS([i],e)})}function vI(n){return function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:tm(e||{}),o=i.mask;return o&&(o=(o||{}).icon?o:tm(o||{})),n(r,ie(ie({},i),{},{mask:o}))}}var yI=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,o=r===void 0?mi:r,u=i.symbol,h=u===void 0?!1:u,p=i.mask,m=p===void 0?null:p,g=i.maskId,b=g===void 0?null:g,S=i.classes,N=S===void 0?[]:S,L=i.attributes,H=L===void 0?{}:L,$=i.styles,V=$===void 0?{}:$;if(e){var J=e.prefix,Z=e.iconName,ee=e.icon;return Zf(ie({type:"icon"},e),function(){return Xr("beforeDOMElementCreation",{iconDefinition:e,params:i}),Ym({icons:{main:nm(ee),mask:m?nm(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:J,iconName:Z,transform:ie(ie({},mi),o),symbol:h,maskId:b,extra:{attributes:H,styles:V,classes:N}})})}},_I={mixout:function(){return{icon:vI(yI)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=D0,i.nodeCallback=gI,i}}},provides:function(e){e.i2svg=function(i){var r=i.node,o=r===void 0?et:r,u=i.callback,h=u===void 0?function(){}:u;return D0(o,h)},e.generateSvgReplacementMutation=function(i,r){var o=r.iconName,u=r.prefix,h=r.transform,p=r.symbol,m=r.mask,g=r.maskId,b=r.extra;return new Promise(function(S,N){Promise.all([im(o,u),m.iconName?im(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var H=Kf(L,2),$=H[0],V=H[1];S([i,Ym({icons:{main:$,mask:V},prefix:u,iconName:o,transform:h,symbol:p,maskId:g,extra:b,watchable:!0})])}).catch(N)})},e.generateAbstractIcon=function(i){var r=i.children,o=i.attributes,u=i.main,h=i.transform,p=i.styles,m=Wf(p);m.length>0&&(o.style=m);var g;return qm(h)&&(g=er("generateAbstractTransformGrouping",{main:u,transform:h,containerWidth:u.width,iconWidth:u.width})),r.push(g||u.icon),{children:r,attributes:o}}}},bI={mixout:function(){return{layer:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.classes,u=o===void 0?[]:o;return Zf({type:"layer"},function(){Xr("beforeDOMElementCreation",{assembler:i,params:r});var h=[];return i(function(p){Array.isArray(p)?p.map(function(m){h=h.concat(m.abstract)}):h=h.concat(p.abstract)}),[{tag:"span",attributes:{class:["".concat(de.cssPrefix,"-layers")].concat(Zn(u)).join(" ")},children:h}]})}}}},EI={mixout:function(){return{counter:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var o=r.classes,u=o===void 0?[]:o,h=r.attributes,p=h===void 0?{}:h,m=r.styles,g=m===void 0?{}:m;return Zf({type:"counter",content:i},function(){return Xr("beforeDOMElementCreation",{content:i,params:r}),J2({content:i.toString(),extra:{attributes:p,styles:g,classes:["".concat(de.cssPrefix,"-layers-counter")].concat(Zn(u))}})})}}}},SI={mixout:function(){return{text:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,u=o===void 0?mi:o,h=r.classes,p=h===void 0?[]:h,m=r.attributes,g=m===void 0?{}:m,b=r.styles,S=b===void 0?{}:b;return Zf({type:"text",content:i},function(){return Xr("beforeDOMElementCreation",{content:i,params:r}),R0({content:i,transform:ie(ie({},mi),u),extra:{attributes:g,styles:S,classes:["".concat(de.cssPrefix,"-layers-text")].concat(Zn(p))}})})}}},provides:function(e){e.generateLayersText=function(i,r){var o=r.transform,u=r.extra,h=null,p=null;if(FE){var m=parseInt(getComputedStyle(i).fontSize,10),g=i.getBoundingClientRect();h=g.width/m,p=g.height/m}return Promise.resolve([i,R0({content:i.innerHTML,width:h,height:p,transform:o,extra:u,watchable:!0})])}}},LS=new RegExp('"',"ug"),M0=[1105920,1112319],L0=ie(ie(ie(ie({},{FontAwesome:{normal:"fas",400:"fas"}}),cN),u2),_N),am=Object.keys(L0).reduce(function(n,e){return n[e.toLowerCase()]=L0[e],n},{}),TI=Object.keys(am).reduce(function(n,e){var i=am[e];return n[e]=i[900]||Zn(Object.entries(i))[0][1],n},{});function wI(n){var e=n.replace(LS,"");return _S(Zn(e)[0]||"")}function AI(n){var e=n.getPropertyValue("font-feature-settings").includes("ss01"),i=n.getPropertyValue("content"),r=i.replace(LS,""),o=r.codePointAt(0),u=o>=M0[0]&&o<=M0[1],h=r.length===2?r[0]===r[1]:!1;return u||h||e}function CI(n,e){var i=n.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),o=isNaN(r)?"normal":r;return(am[i]||{})[o]||TI[i]}function P0(n,e){var i="".concat(c2).concat(e.replace(":","-"));return new Promise(function(r,o){if(n.getAttribute(i)!==null)return r();var u=Eo(n.children),h=u.filter(function(be){return be.getAttribute(Wp)===e})[0],p=Zs.getComputedStyle(n,e),m=p.getPropertyValue("font-family"),g=m.match(m2),b=p.getPropertyValue("font-weight"),S=p.getPropertyValue("content");if(h&&!g)return n.removeChild(h),r();if(g&&S!=="none"&&S!==""){var N=p.getPropertyValue("content"),L=CI(m,b),H=wI(N),$=g[0].startsWith("FontAwesome"),V=AI(p),J=Gm(L,H),Z=J;if($){var ee=P2(H);ee.iconName&&ee.prefix&&(J=ee.iconName,L=ee.prefix)}if(J&&!V&&(!h||h.getAttribute(zm)!==L||h.getAttribute(Hm)!==Z)){n.setAttribute(i,Z),h&&n.removeChild(h);var ce=dI(),ne=ce.extra;ne.attributes[Wp]=e,im(J,L).then(function(be){var D=Ym(ie(ie({},ce),{},{icons:{main:be,mask:NS()},prefix:L,iconName:Z,extra:ne,watchable:!0})),A=et.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(A,n.firstChild):n.appendChild(A),A.outerHTML=D.map(function(C){return mu(C)}).join(`
`),n.removeAttribute(i),r()}).catch(o)}else r()}else r()})}function RI(n){return Promise.all([P0(n,"::before"),P0(n,"::after")])}function NI(n){return n.parentNode!==document.head&&!~h2.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Wp)&&(!n.parentNode||n.parentNode.tagName!=="svg")}var II=function(e){return!!e&&cS.some(function(i){return e.includes(i)})},xI=function(e){if(!e)return[];var i=new Set,r=e.split(/,(?![^()]*\))/).map(function(m){return m.trim()});r=r.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(g){return g.trim()})});var o=ff(r),u;try{for(o.s();!(u=o.n()).done;){var h=u.value;if(II(h)){var p=cS.reduce(function(m,g){return m.replace(g,"")},h);p!==""&&p!=="*"&&i.add(p)}}}catch(m){o.e(m)}finally{o.f()}return i};function U0(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(hs){var i;if(e)i=n;else if(de.searchPseudoElementsFullScan)i=n.querySelectorAll("*");else{var r=new Set,o=ff(document.styleSheets),u;try{for(o.s();!(u=o.n()).done;){var h=u.value;try{var p=ff(h.cssRules),m;try{for(p.s();!(m=p.n()).done;){var g=m.value,b=xI(g.selectorText),S=ff(b),N;try{for(S.s();!(N=S.n()).done;){var L=N.value;r.add(L)}}catch($){S.e($)}finally{S.f()}}}catch($){p.e($)}finally{p.f()}}catch($){de.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(h.href," (").concat($.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch($){o.e($)}finally{o.f()}if(!r.size)return;var H=Array.from(r).join(", ");try{i=n.querySelectorAll(H)}catch{}}return new Promise(function($,V){var J=Eo(i).filter(NI).map(RI),Z=$m.begin("searchPseudoElements");DS(),Promise.all(J).then(function(){Z(),rm(),$()}).catch(function(){Z(),rm(),V()})})}}var OI={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=U0,i}}},provides:function(e){e.pseudoElements2svg=function(i){var r=i.node,o=r===void 0?et:r;de.searchPseudoElements&&U0(o)}}},j0=!1,kI={mixout:function(){return{dom:{unwatch:function(){DS(),j0=!0}}}},hooks:function(){return{bootstrap:function(){O0(em("mutationObserverCallbacks",{}))},noAuto:function(){uI()},watch:function(i){var r=i.observeMutationsRoot;j0?rm():O0(em("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},z0=function(e){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,o){var u=o.toLowerCase().split("-"),h=u[0],p=u.slice(1).join("-");if(h&&p==="h")return r.flipX=!0,r;if(h&&p==="v")return r.flipY=!0,r;if(p=parseFloat(p),isNaN(p))return r;switch(h){case"grow":r.size=r.size+p;break;case"shrink":r.size=r.size-p;break;case"left":r.x=r.x-p;break;case"right":r.x=r.x+p;break;case"up":r.y=r.y-p;break;case"down":r.y=r.y+p;break;case"rotate":r.rotate=r.rotate+p;break}return r},i)},DI={mixout:function(){return{parse:{transform:function(i){return z0(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,r){var o=r.getAttribute("data-fa-transform");return o&&(i.transform=z0(o)),i}}},provides:function(e){e.generateAbstractTransformGrouping=function(i){var r=i.main,o=i.transform,u=i.containerWidth,h=i.iconWidth,p={transform:"translate(".concat(u/2," 256)")},m="translate(".concat(o.x*32,", ").concat(o.y*32,") "),g="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),b="rotate(".concat(o.rotate," 0 0)"),S={transform:"".concat(m," ").concat(g," ").concat(b)},N={transform:"translate(".concat(h/2*-1," -256)")},L={outer:p,inner:S,path:N};return{tag:"g",attributes:ie({},L.outer),children:[{tag:"g",attributes:ie({},L.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:ie(ie({},r.icon.attributes),L.path)}]}]}}}},wp={x:0,y:0,width:"100%",height:"100%"};function H0(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function MI(n){return n.tag==="g"?n.children:[n]}var LI={hooks:function(){return{parseNodeAttributes:function(i,r){var o=r.getAttribute("data-fa-mask"),u=o?Qf(o.split(" ").map(function(h){return h.trim()})):NS();return u.prefix||(u.prefix=Js()),i.mask=u,i.maskId=r.getAttribute("data-fa-mask-id"),i}}},provides:function(e){e.generateAbstractMask=function(i){var r=i.children,o=i.attributes,u=i.main,h=i.mask,p=i.maskId,m=i.transform,g=u.width,b=u.icon,S=h.width,N=h.icon,L=C2({transform:m,containerWidth:S,iconWidth:g}),H={tag:"rect",attributes:ie(ie({},wp),{},{fill:"white"})},$=b.children?{children:b.children.map(H0)}:{},V={tag:"g",attributes:ie({},L.inner),children:[H0(ie({tag:b.tag,attributes:ie(ie({},b.attributes),L.path)},$))]},J={tag:"g",attributes:ie({},L.outer),children:[V]},Z="mask-".concat(p||b0()),ee="clip-".concat(p||b0()),ce={tag:"mask",attributes:ie(ie({},wp),{},{id:Z,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[H,J]},ne={tag:"defs",children:[{tag:"clipPath",attributes:{id:ee},children:MI(N)},ce]};return r.push(ne,{tag:"rect",attributes:ie({fill:"currentColor","clip-path":"url(#".concat(ee,")"),mask:"url(#".concat(Z,")")},wp)}),{children:r,attributes:o}}}},PI={provides:function(e){var i=!1;Zs.matchMedia&&(i=Zs.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],o={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:ie(ie({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var h=ie(ie({},u),{},{attributeName:"opacity"}),p={tag:"circle",attributes:ie(ie({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||p.children.push({tag:"animate",attributes:ie(ie({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ie(ie({},h),{},{values:"1;0;1;1;0;1;"})}),r.push(p),r.push({tag:"path",attributes:ie(ie({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:ie(ie({},h),{},{values:"1;0;0;0;0;1;"})}]}),i||r.push({tag:"path",attributes:ie(ie({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ie(ie({},h),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},UI={hooks:function(){return{parseNodeAttributes:function(i,r){var o=r.getAttribute("data-fa-symbol"),u=o===null?!1:o===""?!0:o;return i.symbol=u,i}}}},jI=[I2,_I,bI,EI,SI,OI,kI,DI,LI,PI,UI];G2(jI,{mixoutsTo:_n});_n.noAuto;var zI=_n.config;_n.library;_n.dom;var PS=_n.parse;_n.findIconDefinition;_n.toHtml;var HI=_n.icon;_n.layer;_n.text;_n.counter;function BI(n){return n=n-0,n===n}function US(n){return BI(n)?n:(n=n.replaceAll(/[_-]+(.)?/g,(e,i)=>i?i.toUpperCase():""),n.charAt(0).toLowerCase()+n.slice(1))}function FI(n){return n.charAt(0).toUpperCase()+n.slice(1)}var no=new Map,qI=1e3;function VI(n){if(no.has(n))return no.get(n);const e={};let i=0;const r=n.length;for(;i<r;){const o=n.indexOf(";",i),u=o===-1?r:o,h=n.slice(i,u).trim();if(h){const p=h.indexOf(":");if(p>0){const m=h.slice(0,p).trim(),g=h.slice(p+1).trim();if(m&&g){const b=US(m);e[b.startsWith("webkit")?FI(b):b]=g}}}i=u+1}if(no.size===qI){const o=no.keys().next().value;o&&no.delete(o)}return no.set(n,e),e}function jS(n,e,i={}){if(typeof e=="string")return e;const r=(e.children||[]).map(g=>jS(n,g)),o=e.attributes||{},u={};for(const[g,b]of Object.entries(o))switch(!0){case g==="class":{u.className=b,delete o.class;break}case g==="style":{u.style=VI(String(b));break}case g.startsWith("aria-"):case g.startsWith("data-"):{u[g.toLowerCase()]=b;break}default:u[US(g)]=b}const{style:h,"aria-label":p,...m}=i;return h&&(u.style=u.style?{...u.style,...h}:h),p&&(u["aria-label"]=p,u["aria-hidden"]="false"),n(e.tag,{...m,...u},...r)}var B0=(n,e)=>{const i=Y.useId();return n||(e?i:void 0)},GI=class{constructor(e="react-fontawesome"){this.enabled=!1;let i=!1;try{i=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=i}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},YI="searchPseudoElementsFullScan"in zI?"7.0.0":"6.0.0",$I=Number.parseInt(YI)>=7,Xi={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},KI={left:"fa-pull-left",right:"fa-pull-right"},WI={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},XI={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Qi={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function QI(n){const{beat:e,fade:i,beatFade:r,bounce:o,shake:u,spin:h,spinPulse:p,spinReverse:m,pulse:g,fixedWidth:b,inverse:S,border:N,flip:L,size:H,rotation:$,pull:V,swapOpacity:J,rotateBy:Z,widthAuto:ee,className:ce}=n,ne=[];return ce&&ne.push(...ce.split(" ")),e&&ne.push(Xi.beat),i&&ne.push(Xi.fade),r&&ne.push(Xi.beatFade),o&&ne.push(Xi.bounce),u&&ne.push(Xi.shake),h&&ne.push(Xi.spin),m&&ne.push(Xi.spinReverse),p&&ne.push(Xi.spinPulse),g&&ne.push(Xi.pulse),b&&ne.push(Qi.fixedWidth),S&&ne.push(Qi.inverse),N&&ne.push(Qi.border),L===!0&&ne.push(Qi.flip),(L==="horizontal"||L==="both")&&ne.push(Qi.flipHorizontal),(L==="vertical"||L==="both")&&ne.push(Qi.flipVertical),H!=null&&ne.push(XI[H]),$!=null&&$!==0&&ne.push(WI[$]),V!=null&&ne.push(KI[V]),J&&ne.push(Qi.swapOpacity),$I&&(Z&&ne.push(Qi.rotateBy),ee&&ne.push(Qi.widthAuto)),ne}var ZI=n=>typeof n=="object"&&"icon"in n&&!!n.icon;function F0(n){if(n)return ZI(n)?n:PS.icon(n)}function JI(n){return Object.keys(n)}var q0=new GI("FontAwesomeIcon"),zS={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},ex=new Set(Object.keys(zS)),HS=Om.forwardRef((n,e)=>{const i={...zS,...n},{icon:r,mask:o,symbol:u,title:h,titleId:p,maskId:m,transform:g}=i,b=B0(m,!!o),S=B0(p,!!h),N=F0(r);if(!N)return q0.error("Icon lookup is undefined",r),null;const L=QI(i),H=typeof g=="string"?PS.transform(g):g,$=F0(o),V=HI(N,{...L.length>0&&{classes:L},...H&&{transform:H},...$&&{mask:$},symbol:u,title:h,titleId:S,maskId:b});if(!V)return q0.error("Could not find icon",N),null;const{abstract:J}=V,Z={ref:e};for(const ee of JI(i))ex.has(ee)||(Z[ee]=i[ee]);return tx(J[0],Z)});HS.displayName="FontAwesomeIcon";var tx=jS.bind(null,Om.createElement);/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var nx={prefix:"fab",iconName:"x-twitter",icon:[448,512,[],"e61b","M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z"]};const bn=()=>{const n=fu(),[e,i]=Y.useState(null),r=u=>{n(u)},o=u=>{window.open(u,"_blank")};return w.jsxs("footer",{className:"footer",children:[w.jsxs("div",{className:"main-content",children:[w.jsxs("div",{className:"footer-column contact-column",children:[w.jsx("h3",{className:"column-title",children:"Contact Info"}),w.jsxs("div",{className:"contact-item",children:[w.jsx("ion-icon",{name:"location-outline",className:"contact-icon"}),w.jsx("span",{className:"contact-text",children:"Rohtak, NCR, Haryana"})]}),w.jsxs("div",{className:"contact-item",children:[w.jsx("ion-icon",{name:"mail-outline",className:"contact-icon"}),w.jsx("span",{className:"contact-text",children:"nancypanghal13@gmail.com"})]}),w.jsxs("div",{className:"contact-item",children:[w.jsx("ion-icon",{name:"call-outline",className:"contact-icon"}),w.jsx("span",{className:"contact-text",children:"+91 9306385029"})]})]}),w.jsxs("div",{className:"footer-column solutions-column",children:[w.jsx("h3",{className:"column-title",children:"Solutions"}),w.jsx("button",{className:`footer-link ${e==="aboutProduct"?"link-hover":""}`,onClick:()=>r("/about-product"),onMouseEnter:()=>i("aboutProduct"),onMouseLeave:()=>i(null),children:"Models"}),w.jsx("button",{className:`footer-link ${e==="faqs"?"link-hover":""}`,onClick:()=>r("/faqs"),onMouseEnter:()=>i("faqs"),onMouseLeave:()=>i(null),children:"FAQs"}),w.jsx("button",{className:`footer-link ${e==="about"?"link-hover":""}`,onClick:()=>r("/about"),onMouseEnter:()=>i("about"),onMouseLeave:()=>i(null),children:"About"})]}),w.jsxs("div",{className:"footer-column legal-column",children:[w.jsx("h3",{className:"column-title",children:"Legal"}),w.jsx("button",{className:`footer-link ${e==="installationRequest"?"link-hover":""}`,onClick:()=>r("/installation-request"),onMouseEnter:()=>i("installationRequest"),onMouseLeave:()=>i(null),children:"Installation request"}),w.jsx("button",{className:`footer-link ${e==="warrantyRegistration"?"link-hover":""}`,onClick:()=>r("/warranty-registration"),onMouseEnter:()=>i("warrantyRegistration"),onMouseLeave:()=>i(null),children:"Warranty registration"}),w.jsx("button",{className:`footer-link ${e==="shippingPolicy"?"link-hover":""}`,onClick:()=>r("/shipping-policy"),onMouseEnter:()=>i("shippingPolicy"),onMouseLeave:()=>i(null),children:"Shipping Policy"}),w.jsx("button",{className:`footer-link ${e==="serviceRequest"?"link-hover":""}`,onClick:()=>r("/service-request"),onMouseEnter:()=>i("serviceRequest"),onMouseLeave:()=>i(null),children:"Service request"})]}),w.jsxs("div",{className:"footer-column policies-column",children:[w.jsx("h3",{className:"column-title",children:"Policies"}),w.jsx("button",{className:`footer-link ${e==="Terms&Conditions"?"link-hover":""}`,onClick:()=>r("/terms-and-conditions"),onMouseEnter:()=>i("Terms&Conditions"),onMouseLeave:()=>i(null),children:"Terms and conditions"}),w.jsx("button",{className:`footer-link ${e==="PrivacyPolicy"?"link-hover":""}`,onClick:()=>r("/privacy-policy"),onMouseEnter:()=>i("PrivacyPolicy"),onMouseLeave:()=>i(null),children:"Privacy policy"}),w.jsx("button",{className:`footer-link ${e==="Return&Refund"?"link-hover":""}`,onClick:()=>r("/return-and-refund"),onMouseEnter:()=>i("Return&Refund"),onMouseLeave:()=>i(null),children:"Return & Refund"}),w.jsx("button",{className:`footer-link ${e==="Support"?"link-hover":""}`,onClick:()=>r("/support"),onMouseEnter:()=>i("Support"),onMouseLeave:()=>i(null),children:"Support"})]}),w.jsxs("div",{className:"footer-column company-column",children:[w.jsx("h3",{className:"column-title",children:"IoTCloud"}),w.jsx("p",{className:"company-description",children:"We provide innovative home technology solutions that make your life easier, smarter, and more connected. Our products are designed with cutting-edge technology and user experience in mind."})]})]}),w.jsxs("div",{className:"bottom-section",children:[w.jsx("span",{className:"copyright",children:"Copyright © 2025 IoTCloud Corporation. All rights reserved."}),w.jsxs("div",{className:"social-links",children:[w.jsx("button",{className:"social-icon-x",onClick:()=>o("https://x.com/PanghalNancy"),children:w.jsx(HS,{icon:nx,"aria-label":"X"})}),w.jsx("button",{className:"social-icon-whatsapp",onClick:()=>o("https://wa.me/919306385029"),children:w.jsx("ion-icon",{name:"logo-whatsapp"})})]})]})]})},ix=()=>w.jsxs("div",{className:"container-header",children:[w.jsx("div",{className:"header-container"}),w.jsx("div",{className:"marketing-container",children:w.jsxs("p",{className:"marketing",children:["Automate pre-paid deliveries!",w.jsx("span",{className:"icon1",children:w.jsx("ion-icon",{name:"sparkles-outline"})}),"Stop theft, automate receiving with smart boxes."]})}),w.jsxs("div",{className:"features-container",children:[w.jsx("p",{className:"features",children:"Prevent package theft and damage, control via mobile app, real-time notifications,"}),w.jsx("p",{className:"features",children:"models - wall-mounted and floor-mounted, easy to install!"})]}),w.jsxs("div",{className:"working-container",children:[w.jsx("h2",{className:"working-header",children:"Working"}),w.jsxs("div",{className:"columns-container",children:[w.jsxs("div",{className:"column-box",children:[w.jsx("h3",{className:"working-subheader",children:"User Side"}),w.jsx("p",{className:"working-text",children:"1. Copy the order ID from e-commerce site."}),w.jsx("p",{className:"working-text",children:'2. Open our app, go to "New Order," and paste the order ID.'}),w.jsx("p",{className:"working-text",children:"3. Select the e-commerce platform and add any order name for simplicity."}),w.jsx("p",{className:"working-text",children:"4. Submit, and you're done! Your smart box is ready to receive."})]}),w.jsxs("div",{className:"column-box",children:[w.jsx("h3",{className:"working-subheader",children:"Delivery Person Side"}),w.jsx("p",{className:"working-text",children:"1. Scan the QR code on the smart box."}),w.jsx("p",{className:"working-text",children:"2. Enter the order ID and select the delivery company."}),w.jsx("p",{className:"working-text",children:"3. The box unlocks automatically for secure package placement."})]})]})]}),w.jsx(bn,{})]}),sx=()=>{const n=()=>{window.open("mailto:nancypanghal13@gmail.com","_self")};return w.jsxs("div",{className:"products-page",children:[w.jsx("div",{className:"products-container",children:w.jsxs("div",{className:"products-content",children:[w.jsx("h1",{className:"products-title",children:"Products Not Available"}),w.jsx("p",{className:"products-message",children:"We're currently updating our product inventory. Please check back later or contact us for more information."}),w.jsx("p",{className:"products-message",children:"Please email us if you are interested, cost will be under 7k INR!"}),w.jsx("button",{className:"email-button",onClick:n,children:"Email Us"})]})}),w.jsx(bn,{})]})},rx=()=>{const n=()=>{window.open("mailto:nancypanghal13@gmail.com","_blank")},e=()=>{window.open("tel:+919306385029","_blank")};return w.jsxs("div",{className:"about-us-container",children:[w.jsxs("div",{className:"content",children:[w.jsx("h1",{className:"header",children:"About Us"}),w.jsxs("div",{className:"section",children:[w.jsx("h2",{className:"sub-header",children:"Our Story"}),w.jsx("p",{className:"text",children:"Founded by Nancy Panghal, IoTCloud emerged from personal experiences with package theft, damage, and missed deliveries. We understand the frustration of waiting for an important package only to not find it missing or damaged. Our journey began when we realized that these challenges were not isolated incidents but common problems affecting countless online shoppers."})]}),w.jsxs("div",{className:"section",children:[w.jsx("h2",{className:"sub-header",children:"Our Mission"}),w.jsx("p",{className:"text",children:"We are dedicated to revolutionizing the last mile of delivery through innovative IoT technology. Our mission is to create seamless, secure, and reliable delivery experiences that eliminate the worries associated with online shopping. No worries if the delivery package arrive and no one at home our product will receive and secure your package."})]}),w.jsxs("div",{className:"section",children:[w.jsx("h2",{className:"sub-header",children:"Our Technology"}),w.jsx("p",{className:"text",children:"Using cutting-edge IoT sensors and edge-computing, our smart delivery solutions provide real-time notifications to app, secure authentication. Our products are designed with both security and convenience in mind, ensuring that your packages remain safe until you're ready to retrieve them."})]}),w.jsxs("div",{className:"section",children:[w.jsx("h2",{className:"sub-header",children:"Our Vision"}),w.jsx("p",{className:"text",children:"Our Vision is to create home automation related vision AI models and robots which will help you in daily chores and will add a unique value and convenience in your life and make you productive. Accroding to Indian homes environment too, at affordable price."})]}),w.jsxs("div",{className:"section",children:[w.jsx("h2",{className:"sub-header",children:"Our Commitment"}),w.jsx("p",{className:"text",children:"We stand behind our products with comprehensive customer support, warranty protection, and continuous software updates. Our commitment extends beyond just selling products - we're building a community of satisfied customers who can shop online with confidence, knowing their deliveries are protected by IoTCloud's innovative technology."})]}),w.jsxs("div",{className:"section feedback-section",children:[w.jsx("h2",{className:"sub-header",children:"Your Feedback Matters"}),w.jsx("p",{className:"text",children:"We are constantly striving to improve our products and services. If you have any feedback, suggestions for improvement, or ideas for customization, we would love to hear from you. Your input helps us create better solutions tailored to your needs."}),w.jsx("p",{className:"text",children:"We offer customized products and services based on customer requirements and feedback. You can provide feedback directly through our app, via email, or by contacting us directly."}),w.jsxs("div",{className:"contact-options",children:[w.jsxs("button",{className:"contact-button",onClick:n,children:[w.jsx("ion-icon",{name:"mail-outline",className:"contact-icon"}),w.jsx("span",{className:"contact-button-text",children:"Email Us"})]}),w.jsxs("button",{className:"contact-button",onClick:e,children:[w.jsx("ion-icon",{name:"call-outline",className:"contact-icon"}),w.jsx("span",{className:"contact-button-text",children:"Call Us"})]}),w.jsxs("button",{className:"contact-button",onClick:()=>window.open("https://wa.me/919306385029","_blank"),children:[w.jsx("ion-icon",{name:"logo-whatsapp",className:"contact-icon whatsapp"}),w.jsx("span",{className:"contact-button-text",children:"WhatsApp"})]})]})]}),w.jsx("p",{className:"closing",children:"Join us in transforming the delivery experience."})]}),w.jsx(bn,{})]})},ax="/Delivery-box-web2/assets/web-new-order-CVBM4IYr.jpg",ox="/Delivery-box-web2/assets/web-open-box-CWvG4VkF.jpg",lx="/Delivery-box-web2/assets/delivery-scan-PqM9173t.jpg",ux=()=>w.jsx("div",{className:"container-about-product",children:w.jsxs("div",{className:"scroll-container",children:[w.jsx("h1",{className:"title-about-product",children:"About Our Products"}),w.jsxs("div",{className:"models-container",children:[w.jsx("h2",{className:"models-title",children:"Models"}),w.jsx("p",{className:"models-text",children:"Our product comes in two models : Wall Mounted and Floor Mounted. The working mechanism is the same for both, with the only difference being in the installation process."})]}),w.jsx("h2",{className:"section-title",children:"User Setup and Usage"}),w.jsx("div",{className:"section-container",children:w.jsxs("div",{className:"text-box",children:[w.jsx("p",{className:"text",children:"Install our app if you have purchased the product. Then, scan the QR code that is on the paper included in the box."}),w.jsx("p",{className:"warning",children:"Note: Do not scan the QR code on the box itself—that is for delivery persons only."})]})}),w.jsxs("div",{className:"section-container",children:[w.jsxs("div",{className:"text-box",children:[w.jsx("p",{className:"text",children:"After scanning the QR code, enter your name, email, and password. You are now ready to use the app."}),w.jsx("p",{className:"text",children:"Each time you order something from an e-commerce site, copy the order ID and paste it into the app's Orders → New Order section. Add any order name for your convenience and select the e-commerce platform (company) from where you are ordering the package."}),w.jsx("p",{className:"warning",children:"Note: Delivery receiving will fail if you entered the wrong order ID or selected the wrong delivery company. If you did so, scroll down and delete the order."}),w.jsx("p",{className:"text",children:"You can add this info in the app anytime before the delivery person reaches your home. The good thing is to add it right after ordering so you don't need to remember."})]}),w.jsx("img",{src:ax,alt:"New Order",className:"image1 product-image"})]}),w.jsxs("div",{className:"section-container",children:[w.jsxs("div",{className:"text-box",children:[w.jsx("h3",{className:"sub-section-title",children:"Opening Via app"}),w.jsx("p",{className:"text",children:"You can open the box via the app if you are within a 30-meter range of the box, or you can also use mechanical keys."}),w.jsx("p",{className:"warning",children:"Note: To use our box automation, you have to pay the order price while ordering, no cash on delivery."})]}),w.jsx("img",{src:ox,alt:"Open Box",className:"image product-image"})]}),w.jsxs("div",{className:"section-container",children:[w.jsxs("div",{className:"text-box",children:[w.jsx("h3",{className:"sub-section-title",children:"Delivery Person Side"}),w.jsx("p",{className:"text",children:"The delivery person will reach your home, then scan the QR code on the box and enter the order ID and e-commerce site. After validation, the box's lock will be unlocked and then lock again in some seconds."}),w.jsx("p",{className:"text",children:"If the delivery failed, check that the battery is charged or inside the box."})]}),w.jsx("img",{src:lx,alt:"Delivery Scan",className:"image product-image"})]}),w.jsx("div",{className:"section-container",children:w.jsxs("div",{className:"text-box",children:[w.jsx("h3",{className:"sub-section-title",children:"Wall Mounted Model"}),w.jsx("p",{className:"text",children:"The wall-mounted box stand will be drilled on the wall with 4 small holes and then screwed up. You can easily reinstall it."})]})}),w.jsx("div",{className:"section-container",children:w.jsxs("div",{className:"text-box",children:[w.jsx("h3",{className:"sub-section-title",children:"Floor Mounted Model"}),w.jsx("p",{className:"text",children:"On a solid surface two holes will be created and the center leg of the stand will be screwed up , you can also use it without drilling. Easy to reinstall."})]})}),w.jsx(bn,{})]})}),cx=()=>{const[n,e]=Om.useState({}),i=[{question:"What is the difference between Wall Mounted and Floor Mounted models?",answer:"Both models have the same working mechanism, but they differ in installation. The Wall Mounted model is drilled into a wall with 4 small holes and screwed up, while the Floor Mounted model is drilled into a concrete or stable surface (excluding mud or sand) and screwed into four holes."},{question:"How do I set up the app for the delivery box?",answer:"Install the app, then scan the QR code on the paper included in the box (not the QR code on the box itself, which is for delivery persons). After scanning, enter your name, email, and password to complete setup."},{question:"What should I do if I enter the wrong order ID or delivery company?",answer:"If you enter the wrong order ID or select the wrong delivery company, delivery will fail. You can scroll down in the app's Orders → New Order section to delete the incorrect order and re-enter the correct details."},{question:"When should I add order details to the app?",answer:"You can add order details anytime before the delivery person arrives. For convenience, it's best to add them right after ordering to avoid forgetting."},{question:"How does the delivery person interact with the box?",answer:"The delivery person scans the QR code on the box, enters the order ID and e-commerce site, and after validation, the box's lock will unlock briefly and then lock again after a few seconds."},{question:"What happens if the delivery fails?",answer:"If delivery fails, check if the box's battery is charged or properly inserted. Ensure the correct order ID and delivery company are entered in the app."},{question:"Can I open the box without the app?",answer:"Yes, you can open the box using mechanical keys if you are unable to use the app. The app allows opening within a 30-meter range of the box."},{question:"What surfaces are suitable for the Floor Mounted model?",answer:"The Floor Mounted model requires a concrete or stable surface for installation. It should not be installed on raw surfaces like mud or sand."}],r=o=>{e(u=>({...u,[o]:!u[o]}))};return w.jsxs("div",{className:"faqs-container",children:[w.jsx("h1",{className:"faqs-title",children:"Frequently Asked Questions"}),i.map((o,u)=>w.jsxs("div",{className:"faq-container",children:[w.jsxs("div",{className:"faqs-question-container",children:[w.jsx("p",{className:"faqs-question-text",children:o.question}),w.jsx("button",{onClick:()=>r(u),className:"faqs-toggle-button",children:w.jsx("span",{className:"faqs-icon-toggle-button",children:w.jsx("ion-icon",{name:n[u]?"chevron-up":"chevron-down"})})})]}),n[u]&&w.jsx("div",{className:"faqs-answer-container",children:w.jsx("p",{className:"faqs-answer-text",children:o.answer})})]},u)),w.jsx(bn,{})]})},fx=()=>w.jsx("div",{className:"container",children:w.jsxs("div",{className:"content",children:[w.jsx("h1",{className:"title",children:"Account"}),w.jsx("p",{className:"message",children:"Welcome to your account"}),w.jsx("button",{className:"email-button",children:w.jsx("span",{className:"email-button-text",children:"Contact Us"})})]})});var V0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=function(n,e){if(!n)throw So(e)},So=function(n){return new Error("Firebase Database ("+BS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=function(n){const e=[];let i=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},hx=function(n){const e=[];let i=0,r=0;for(;i<n.length;){const o=n[i++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[i++];e[r++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[i++],h=n[i++],p=n[i++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(m>>10)),e[r++]=String.fromCharCode(56320+(m&1023))}else{const u=n[i++],h=n[i++];e[r++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Wm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const u=n[o],h=o+1<n.length,p=h?n[o+1]:0,m=o+2<n.length,g=m?n[o+2]:0,b=u>>2,S=(u&3)<<4|p>>4;let N=(p&15)<<2|g>>6,L=g&63;m||(L=64,h||(N=64)),r.push(i[b],i[S],i[N],i[L])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(FS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hx(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const u=i[n.charAt(o++)],p=o<n.length?i[n.charAt(o)]:0;++o;const g=o<n.length?i[n.charAt(o)]:64;++o;const S=o<n.length?i[n.charAt(o)]:64;if(++o,u==null||p==null||g==null||S==null)throw new dx;const N=u<<2|p>>4;if(r.push(N),g!==64){const L=p<<4&240|g>>2;if(r.push(L),S!==64){const H=g<<6&192|S;r.push(H)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qS=function(n){const e=FS(n);return Wm.encodeByteArray(e,!0)},Tf=function(n){return qS(n).replace(/\./g,"")},wf=function(n){try{return Wm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(n){return VS(void 0,n)}function VS(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const i=e;return new Date(i.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const i in e)!e.hasOwnProperty(i)||!mx(i)||(n[i]=VS(n[i],e[i]));return n}function mx(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=()=>gx().__FIREBASE_DEFAULTS__,yx=()=>{if(typeof process>"u"||typeof V0>"u")return;const n=V0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_x=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&wf(n[1]);return e&&JSON.parse(e)},Xm=()=>{try{return vx()||yx()||_x()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},GS=n=>{var e,i;return(i=(e=Xm())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[n]},Qm=n=>{const e=GS(n);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},YS=()=>{var n;return(n=Xm())===null||n===void 0?void 0:n.config},$S=n=>{var e;return(e=Xm())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Tf(JSON.stringify(i)),Tf(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function bx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function WS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ex(){const n=Xt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Sx(){return BS.NODE_ADMIN===!0}function XS(){try{return typeof indexedDB=="object"}catch{return!1}}function QS(){return new Promise((n,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(i){e(i)}})}function Tx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx="FirebaseError";class Un extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=wx,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,aa.prototype.create)}}class aa{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Ax(u,r):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Un(o,p,r)}}function Ax(n,e){return n.replace(Cx,(i,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const Cx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(n){return JSON.parse(n)}function Ut(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=function(n){let e={},i={},r={},o="";try{const u=n.split(".");e=nu(wf(u[0])||""),i=nu(wf(u[1])||""),o=u[2],r=i.d||{},delete i.d}catch{}return{header:e,claims:i,data:r,signature:o}},Rx=function(n){const e=ZS(n),i=e.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},Nx=function(n){const e=ZS(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function go(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function om(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Af(n,e,i){const r={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=e.call(i,n[o],o,n));return r}function iu(n,e){if(n===e)return!0;const i=Object.keys(n),r=Object.keys(e);for(const o of i){if(!r.includes(o))return!1;const u=n[o],h=e[o];if(G0(u)&&G0(h)){if(!iu(u,h))return!1}else if(u!==h)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function G0(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n){const e=[];for(const[i,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,u]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function ql(n){const e=n.indexOf("?");if(!e)return"";const i=n.indexOf("#",e);return n.substring(e,i>0?i:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,i){i||(i=0);const r=this.W_;if(typeof e=="string")for(let S=0;S<16;S++)r[S]=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3),i+=4;else for(let S=0;S<16;S++)r[S]=e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3],i+=4;for(let S=16;S<80;S++){const N=r[S-3]^r[S-8]^r[S-14]^r[S-16];r[S]=(N<<1|N>>>31)&4294967295}let o=this.chain_[0],u=this.chain_[1],h=this.chain_[2],p=this.chain_[3],m=this.chain_[4],g,b;for(let S=0;S<80;S++){S<40?S<20?(g=p^u&(h^p),b=1518500249):(g=u^h^p,b=1859775393):S<60?(g=u&h|p&(u|h),b=2400959708):(g=u^h^p,b=3395469782);const N=(o<<5|o>>>27)+g+m+b+r[S]&4294967295;m=p,p=h,h=(u<<30|u>>>2)&4294967295,u=o,o=N}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,i){if(e==null)return;i===void 0&&(i=e.length);const r=i-this.blockSize;let o=0;const u=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=r;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<i;)if(u[h]=e.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(u),h=0;break}}else for(;o<i;)if(u[h]=e[o],++h,++o,h===this.blockSize){this.compress_(u),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const e=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let u=24;u>=0;u-=8)e[r]=this.chain_[o]>>u&255,++r;return e}}function xx(n,e){const i=new Ox(n,e);return i.subscribe.bind(i)}class Ox{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let o;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");kx(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:r},o.next===void 0&&(o.next=Ap),o.error===void 0&&(o.error=Ap),o.complete===void 0&&(o.complete=Ap);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kx(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function Ap(){}function Dx(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=function(n){const e=[];let i=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);if(o>=55296&&o<=56319){const u=o-55296;r++,le(r<n.length,"Surrogate pair missing trail surrogate.");const h=n.charCodeAt(r)-56320;o=65536+(u<<10)+h}o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):o<65536?(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},Jf=function(n){let e=0;for(let i=0;i<n.length;i++){const r=n.charCodeAt(i);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,i++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=1e3,Px=2,Ux=14400*1e3,jx=.5;function Y0(n,e=Lx,i=Px){const r=e*Math.pow(i,n),o=Math.round(jx*r*(Math.random()-.5)*2);return Math.min(Ux,r+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(n){return n&&n._delegate?n._delegate:n}class yn{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new Zm;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e?.identifier),o=(i=e?.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bx(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:o});r.resolve(u)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);r===p&&h.resolve(o)}return o}onInit(e,i){var r;const o=this.normalizeInstanceIdentifier(i),u=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hx(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hx(n){return n===Vr?void 0:n}function Bx(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new zx(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ue||(Ue={}));const qx={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},Vx=Ue.INFO,Gx={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},Yx=(n,e,...i)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=Gx[e];if(o)console[o](`[${r}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gu{constructor(e){this.name=e,this._logLevel=Vx,this._logHandler=Yx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const $x=(n,e)=>e.some(i=>n instanceof i);let $0,K0;function Kx(){return $0||($0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wx(){return K0||(K0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const JS=new WeakMap,lm=new WeakMap,eT=new WeakMap,Cp=new WeakMap,tg=new WeakMap;function Xx(n){const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",h)},u=()=>{i(Ws(n.result)),o()},h=()=>{r(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",h)});return e.then(i=>{i instanceof IDBCursor&&JS.set(i,n)}).catch(()=>{}),tg.set(e,n),e}function Qx(n){if(lm.has(n))return;const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",h),n.removeEventListener("abort",h)},u=()=>{i(),o()},h=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",h),n.addEventListener("abort",h)});lm.set(n,e)}let um={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return lm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||eT.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Ws(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zx(n){um=n(um)}function Jx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=n.call(Rp(this),e,...i);return eT.set(r,e.sort?e.sort():[e]),Ws(r)}:Wx().includes(n)?function(...e){return n.apply(Rp(this),e),Ws(JS.get(this))}:function(...e){return Ws(n.apply(Rp(this),e))}}function eO(n){return typeof n=="function"?Jx(n):(n instanceof IDBTransaction&&Qx(n),$x(n,Kx())?new Proxy(n,um):n)}function Ws(n){if(n instanceof IDBRequest)return Xx(n);if(Cp.has(n))return Cp.get(n);const e=eO(n);return e!==n&&(Cp.set(n,e),tg.set(e,n)),e}const Rp=n=>tg.get(n);function tT(n,e,{blocked:i,upgrade:r,blocking:o,terminated:u}={}){const h=indexedDB.open(n,e),p=Ws(h);return r&&h.addEventListener("upgradeneeded",m=>{r(Ws(h.result),m.oldVersion,m.newVersion,Ws(h.transaction),m)}),i&&h.addEventListener("blocked",m=>i(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const tO=["get","getKey","getAll","getAllKeys","count"],nO=["put","add","delete","clear"],Np=new Map;function W0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Np.get(e))return Np.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,o=nO.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||tO.includes(i)))return;const u=async function(h,...p){const m=this.transaction(h,o?"readwrite":"readonly");let g=m.store;return r&&(g=g.index(p.shift())),(await Promise.all([g[i](...p),o&&m.done]))[0]};return Np.set(e,u),u}Zx(n=>({...n,get:(e,i,r)=>W0(e,i)||n.get(e,i,r),has:(e,i)=>!!W0(e,i)||n.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(sO(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function sO(n){const e=n.getComponent();return e?.type==="VERSION"}const cm="@firebase/app",X0="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new gu("@firebase/app"),rO="@firebase/app-compat",aO="@firebase/analytics-compat",oO="@firebase/analytics",lO="@firebase/app-check-compat",uO="@firebase/app-check",cO="@firebase/auth",fO="@firebase/auth-compat",hO="@firebase/database",dO="@firebase/data-connect",pO="@firebase/database-compat",mO="@firebase/functions",gO="@firebase/functions-compat",vO="@firebase/installations",yO="@firebase/installations-compat",_O="@firebase/messaging",bO="@firebase/messaging-compat",EO="@firebase/performance",SO="@firebase/performance-compat",TO="@firebase/remote-config",wO="@firebase/remote-config-compat",AO="@firebase/storage",CO="@firebase/storage-compat",RO="@firebase/firestore",NO="@firebase/vertexai-preview",IO="@firebase/firestore-compat",xO="firebase",OO="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="[DEFAULT]",kO={[cm]:"fire-core",[rO]:"fire-core-compat",[oO]:"fire-analytics",[aO]:"fire-analytics-compat",[uO]:"fire-app-check",[lO]:"fire-app-check-compat",[cO]:"fire-auth",[fO]:"fire-auth-compat",[hO]:"fire-rtdb",[dO]:"fire-data-connect",[pO]:"fire-rtdb-compat",[mO]:"fire-fn",[gO]:"fire-fn-compat",[vO]:"fire-iid",[yO]:"fire-iid-compat",[_O]:"fire-fcm",[bO]:"fire-fcm-compat",[EO]:"fire-perf",[SO]:"fire-perf-compat",[TO]:"fire-rc",[wO]:"fire-rc-compat",[AO]:"fire-gcs",[CO]:"fire-gcs-compat",[RO]:"fire-fst",[IO]:"fire-fst-compat",[NO]:"fire-vertex","fire-js":"fire-js",[xO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=new Map,DO=new Map,hm=new Map;function Q0(n,e){try{n.container.addComponent(e)}catch(i){ls.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function Ln(n){const e=n.name;if(hm.has(e))return ls.debug(`There were multiple attempts to register component ${e}.`),!1;hm.set(e,n);for(const i of Cf.values())Q0(i,n);for(const i of DO.values())Q0(i,n);return!0}function ps(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function gi(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xs=new aa("app","Firebase",MO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=OO;function nT(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fm,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw Xs.create("bad-app-name",{appName:String(o)});if(i||(i=YS()),!i)throw Xs.create("no-options");const u=Cf.get(o);if(u){if(iu(i,u.options)&&iu(r,u.config))return u;throw Xs.create("duplicate-app",{appName:o})}const h=new Fx(o);for(const m of hm.values())h.addComponent(m);const p=new LO(i,r,h);return Cf.set(o,p),p}function vu(n=fm){const e=Cf.get(n);if(!e&&n===fm&&YS())return nT();if(!e)throw Xs.create("no-app",{appName:n});return e}function Gt(n,e,i){var r;let o=(r=kO[n])!==null&&r!==void 0?r:n;i&&(o+=`-${i}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const p=[`Unable to register library "${o}" with version "${e}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ls.warn(p.join(" "));return}Ln(new yn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO="firebase-heartbeat-database",UO=1,su="firebase-heartbeat-store";let Ip=null;function iT(){return Ip||(Ip=tT(PO,UO,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(su)}catch(i){console.warn(i)}}}}).catch(n=>{throw Xs.create("idb-open",{originalErrorMessage:n.message})})),Ip}async function jO(n){try{const i=(await iT()).transaction(su),r=await i.objectStore(su).get(sT(n));return await i.done,r}catch(e){if(e instanceof Un)ls.warn(e.message);else{const i=Xs.create("idb-get",{originalErrorMessage:e?.message});ls.warn(i.message)}}}async function Z0(n,e){try{const r=(await iT()).transaction(su,"readwrite");await r.objectStore(su).put(e,sT(n)),await r.done}catch(i){if(i instanceof Un)ls.warn(i.message);else{const r=Xs.create("idb-set",{originalErrorMessage:i?.message});ls.warn(r.message)}}}function sT(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=1024,HO=720*60*60*1e3;class BO{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new qO(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=J0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const p=new Date(h.date).valueOf();return Date.now()-p<=HO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ls.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=J0(),{heartbeatsToSend:r,unsentEntries:o}=FO(this._heartbeatsCache.heartbeats),u=Tf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(i){return ls.warn(i),""}}}function J0(){return new Date().toISOString().substring(0,10)}function FO(n,e=zO){const i=[];let r=n.slice();for(const o of n){const u=i.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),eb(i)>e){u.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),eb(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class qO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XS()?QS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await jO(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Z0(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Z0(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function eb(n){return Tf(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(n){Ln(new yn("platform-logger",e=>new iO(e),"PRIVATE")),Ln(new yn("heartbeat",e=>new BO(e),"PRIVATE")),Gt(cm,X0,n),Gt(cm,X0,"esm2017"),Gt("fire-js","")}VO("");var GO="firebase",YO="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(GO,YO,"app");const rT="@firebase/installations",ng="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=1e4,oT=`w:${ng}`,lT="FIS_v2",$O="https://firebaseinstallations.googleapis.com/v1",KO=3600*1e3,WO="installations",XO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qr=new aa(WO,XO,QO);function uT(n){return n instanceof Un&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT({projectId:n}){return`${$O}/projects/${n}/installations`}function fT(n){return{token:n.token,requestStatus:2,expiresIn:JO(n.expiresIn),creationTime:Date.now()}}async function hT(n,e){const r=(await e.json()).error;return Qr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dT({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ZO(n,{refreshToken:e}){const i=dT(n);return i.append("Authorization",ek(e)),i}async function pT(n){const e=await n();return e.status>=500&&e.status<600?n():e}function JO(n){return Number(n.replace("s","000"))}function ek(n){return`${lT} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk({appConfig:n,heartbeatServiceProvider:e},{fid:i}){const r=cT(n),o=dT(n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const h={fid:i,authVersion:lT,appId:n.appId,sdkVersion:oT},p={method:"POST",headers:o,body:JSON.stringify(h)},m=await pT(()=>fetch(r,p));if(m.ok){const g=await m.json();return{fid:g.fid||i,registrationStatus:2,refreshToken:g.refreshToken,authToken:fT(g.authToken)}}else throw await hT("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=/^[cdef][\w-]{21}$/,dm="";function sk(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const i=rk(n);return ik.test(i)?i:dm}catch{return dm}}function rk(n){return nk(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=new Map;function vT(n,e){const i=eh(n);yT(i,e),ak(i,e)}function yT(n,e){const i=gT.get(n);if(i)for(const r of i)r(e)}function ak(n,e){const i=ok();i&&i.postMessage({key:n,fid:e}),lk()}let $r=null;function ok(){return!$r&&"BroadcastChannel"in self&&($r=new BroadcastChannel("[Firebase] FID Change"),$r.onmessage=n=>{yT(n.data.key,n.data.fid)}),$r}function lk(){gT.size===0&&$r&&($r.close(),$r=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="firebase-installations-database",ck=1,Zr="firebase-installations-store";let xp=null;function ig(){return xp||(xp=tT(uk,ck,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Zr)}}})),xp}async function Rf(n,e){const i=eh(n),o=(await ig()).transaction(Zr,"readwrite"),u=o.objectStore(Zr),h=await u.get(i);return await u.put(e,i),await o.done,(!h||h.fid!==e.fid)&&vT(n,e.fid),e}async function _T(n){const e=eh(n),r=(await ig()).transaction(Zr,"readwrite");await r.objectStore(Zr).delete(e),await r.done}async function th(n,e){const i=eh(n),o=(await ig()).transaction(Zr,"readwrite"),u=o.objectStore(Zr),h=await u.get(i),p=e(h);return p===void 0?await u.delete(i):await u.put(p,i),await o.done,p&&(!h||h.fid!==p.fid)&&vT(n,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(n){let e;const i=await th(n.appConfig,r=>{const o=fk(r),u=hk(n,o);return e=u.registrationPromise,u.installationEntry});return i.fid===dm?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function fk(n){const e=n||{fid:sk(),registrationStatus:0};return bT(e)}function hk(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Qr.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=dk(n,i);return{installationEntry:i,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pk(n)}:{installationEntry:e}}async function dk(n,e){try{const i=await tk(n,e);return Rf(n.appConfig,i)}catch(i){throw uT(i)&&i.customData.serverCode===409?await _T(n.appConfig):await Rf(n.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function pk(n){let e=await tb(n.appConfig);for(;e.registrationStatus===1;)await mT(100),e=await tb(n.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:r}=await sg(n);return r||i}return e}function tb(n){return th(n,e=>{if(!e)throw Qr.create("installation-not-found");return bT(e)})}function bT(n){return mk(n)?{fid:n.fid,registrationStatus:0}:n}function mk(n){return n.registrationStatus===1&&n.registrationTime+aT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk({appConfig:n,heartbeatServiceProvider:e},i){const r=vk(n,i),o=ZO(n,i),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const h={installation:{sdkVersion:oT,appId:n.appId}},p={method:"POST",headers:o,body:JSON.stringify(h)},m=await pT(()=>fetch(r,p));if(m.ok){const g=await m.json();return fT(g)}else throw await hT("Generate Auth Token",m)}function vk(n,{fid:e}){return`${cT(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(n,e=!1){let i;const r=await th(n.appConfig,u=>{if(!ET(u))throw Qr.create("not-registered");const h=u.authToken;if(!e&&bk(h))return u;if(h.requestStatus===1)return i=yk(n,e),u;{if(!navigator.onLine)throw Qr.create("app-offline");const p=Sk(u);return i=_k(n,p),p}});return i?await i:r.authToken}async function yk(n,e){let i=await nb(n.appConfig);for(;i.authToken.requestStatus===1;)await mT(100),i=await nb(n.appConfig);const r=i.authToken;return r.requestStatus===0?rg(n,e):r}function nb(n){return th(n,e=>{if(!ET(e))throw Qr.create("not-registered");const i=e.authToken;return Tk(i)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function _k(n,e){try{const i=await gk(n,e),r=Object.assign(Object.assign({},e),{authToken:i});return await Rf(n.appConfig,r),i}catch(i){if(uT(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await _T(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Rf(n.appConfig,r)}throw i}}function ET(n){return n!==void 0&&n.registrationStatus===2}function bk(n){return n.requestStatus===2&&!Ek(n)}function Ek(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+KO}function Sk(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Tk(n){return n.requestStatus===1&&n.requestTime+aT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(n){const e=n,{installationEntry:i,registrationPromise:r}=await sg(e);return r?r.catch(console.error):rg(e).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(n,e=!1){const i=n;return await Ck(i),(await rg(i,e)).token}async function Ck(n){const{registrationPromise:e}=await sg(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(n){if(!n||!n.options)throw Op("App Configuration");if(!n.name)throw Op("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!n.options[i])throw Op(i);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Op(n){return Qr.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="installations",Nk="installations-internal",Ik=n=>{const e=n.getProvider("app").getImmediate(),i=Rk(e),r=ps(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},xk=n=>{const e=n.getProvider("app").getImmediate(),i=ps(e,ST).getImmediate();return{getId:()=>wk(i),getToken:o=>Ak(i,o)}};function Ok(){Ln(new yn(ST,Ik,"PUBLIC")),Ln(new yn(Nk,xk,"PRIVATE"))}Ok();Gt(rT,ng);Gt(rT,ng,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="analytics",kk="firebase_id",Dk="origin",Mk=60*1e3,Lk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ag="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new gu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gn=new aa("analytics","Analytics",Pk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(n){if(!n.startsWith(ag)){const e=gn.create("invalid-gtag-resource",{gtagURL:n});return an.warn(e.message),""}return n}function TT(n){return Promise.all(n.map(e=>e.catch(i=>i)))}function jk(n,e){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(n,e)),i}function zk(n,e){const i=jk("firebase-js-sdk-policy",{createScriptURL:Uk}),r=document.createElement("script"),o=`${ag}?l=${n}&id=${e}`;r.src=i?i?.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function Hk(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Bk(n,e,i,r,o,u){const h=r[o];try{if(h)await e[h];else{const m=(await TT(i)).find(g=>g.measurementId===o);m&&await e[m.appId]}}catch(p){an.error(p)}n("config",o,u)}async function Fk(n,e,i,r,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const p=await TT(i);for(const m of h){const g=p.find(S=>S.measurementId===m),b=g&&e[g.appId];if(b)u.push(b);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),n("event",r,o||{})}catch(u){an.error(u)}}function qk(n,e,i,r){async function o(u,...h){try{if(u==="event"){const[p,m]=h;await Fk(n,e,i,p,m)}else if(u==="config"){const[p,m]=h;await Bk(n,e,i,r,p,m)}else if(u==="consent"){const[p,m]=h;n("consent",p,m)}else if(u==="get"){const[p,m,g]=h;n("get",p,m,g)}else if(u==="set"){const[p]=h;n("set",p)}else n(u,...h)}catch(p){an.error(p)}}return o}function Vk(n,e,i,r,o){let u=function(...h){window[r].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=qk(u,n,e,i),{gtagCore:u,wrappedGtag:window[o]}}function Gk(n){const e=window.document.getElementsByTagName("script");for(const i of Object.values(e))if(i.src&&i.src.includes(ag)&&i.src.includes(n))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=30,$k=1e3;class Kk{constructor(e={},i=$k){this.throttleMetadata=e,this.intervalMillis=i}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,i){this.throttleMetadata[e]=i}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wT=new Kk;function Wk(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Xk(n){var e;const{appId:i,apiKey:r}=n,o={method:"GET",headers:Wk(r)},u=Lk.replace("{app-id}",i),h=await fetch(u,o);if(h.status!==200&&h.status!==304){let p="";try{const m=await h.json();!((e=m.error)===null||e===void 0)&&e.message&&(p=m.error.message)}catch{}throw gn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:p})}return h.json()}async function Qk(n,e=wT,i){const{appId:r,apiKey:o,measurementId:u}=n.options;if(!r)throw gn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:r};throw gn.create("no-api-key")}const h=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new eD;return setTimeout(async()=>{p.abort()},Mk),AT({appId:r,apiKey:o,measurementId:u},h,p,e)}async function AT(n,{throttleEndTimeMillis:e,backoffCount:i},r,o=wT){var u;const{appId:h,measurementId:p}=n;try{await Zk(r,e)}catch(m){if(p)return an.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:h,measurementId:p};throw m}try{const m=await Xk(n);return o.deleteThrottleMetadata(h),m}catch(m){const g=m;if(!Jk(g)){if(o.deleteThrottleMetadata(h),p)return an.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:h,measurementId:p};throw m}const b=Number((u=g?.customData)===null||u===void 0?void 0:u.httpStatus)===503?Y0(i,o.intervalMillis,Yk):Y0(i,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+b,backoffCount:i+1};return o.setThrottleMetadata(h,S),an.debug(`Calling attemptFetch again in ${b} millis`),AT(n,S,r,o)}}function Zk(n,e){return new Promise((i,r)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(i,o);n.addEventListener(()=>{clearTimeout(u),r(gn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Jk(n){if(!(n instanceof Un)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class eD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tD(n,e,i,r,o){if(o&&o.global){n("event",i,r);return}else{const u=await e,h=Object.assign(Object.assign({},r),{send_to:u});n("event",i,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nD(){if(XS())try{await QS()}catch(n){return an.warn(gn.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return an.warn(gn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function iD(n,e,i,r,o,u,h){var p;const m=Qk(n);m.then(L=>{i[L.measurementId]=L.appId,n.options.measurementId&&L.measurementId!==n.options.measurementId&&an.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${L.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(L=>an.error(L)),e.push(m);const g=nD().then(L=>{if(L)return r.getId()}),[b,S]=await Promise.all([m,g]);Gk(u)||zk(u,b.measurementId),o("js",new Date);const N=(p=h?.config)!==null&&p!==void 0?p:{};return N[Dk]="firebase",N.update=!0,S!=null&&(N[kk]=S),o("config",b.measurementId,N),b.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.app=e}_delete(){return delete Yl[this.app.options.appId],Promise.resolve()}}let Yl={},ib=[];const sb={};let kp="dataLayer",rD="gtag",rb,CT,ab=!1;function aD(){const n=[];if(KS()&&n.push("This is a browser extension environment."),Tx()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,o)=>`(${o+1}) ${r}`).join(" "),i=gn.create("invalid-analytics-context",{errorInfo:e});an.warn(i.message)}}function oD(n,e,i){aD();const r=n.options.appId;if(!r)throw gn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)an.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gn.create("no-api-key");if(Yl[r]!=null)throw gn.create("already-exists",{id:r});if(!ab){Hk(kp);const{wrappedGtag:u,gtagCore:h}=Vk(Yl,ib,sb,kp,rD);CT=u,rb=h,ab=!0}return Yl[r]=iD(n,ib,sb,e,rb,kp,i),new sD(n)}function lD(n=vu()){n=jn(n);const e=ps(n,Nf);return e.isInitialized()?e.getImmediate():uD(n)}function uD(n,e={}){const i=ps(n,Nf);if(i.isInitialized()){const o=i.getImmediate();if(iu(e,i.getOptions()))return o;throw gn.create("already-initialized")}return i.initialize({options:e})}function cD(n,e,i,r){n=jn(n),tD(CT,Yl[n.app.options.appId],e,i,r).catch(o=>an.error(o))}const ob="@firebase/analytics",lb="0.10.8";function fD(){Ln(new yn(Nf,(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return oD(r,o,i)},"PUBLIC")),Ln(new yn("analytics-internal",n,"PRIVATE")),Gt(ob,lb),Gt(ob,lb,"esm2017");function n(e){try{const i=e.getProvider(Nf).getImmediate();return{logEvent:(r,o,u)=>cD(i,r,o,u)}}catch(i){throw gn.create("interop-component-reg-failed",{reason:i})}}}fD();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="firebasestorage.googleapis.com",hD="storageBucket",dD=120*1e3,pD=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Un{constructor(e,i,r=0){super(Dp(e),`Firebase Storage: ${i} (${Dp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Si.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Dp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var bi;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(bi||(bi={}));function Dp(n){return"storage/"+n}function mD(){const n="An unknown error occurred, please check the error payload for server response.";return new Si(bi.UNKNOWN,n)}function gD(){return new Si(bi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vD(){return new Si(bi.CANCELED,"User canceled the upload/download.")}function yD(n){return new Si(bi.INVALID_URL,"Invalid URL '"+n+"'.")}function _D(n){return new Si(bi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ub(n){return new Si(bi.INVALID_ARGUMENT,n)}function NT(){return new Si(bi.APP_DELETED,"The Firebase app was deleted.")}function bD(n){return new Si(bi.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,i){this.bucket=e,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,i){let r;try{r=$n.makeFromUrl(e,i)}catch{return new $n(e,"")}if(r.path==="")return r;throw _D(e)}static makeFromUrl(e,i){let r=null;const o="([A-Za-z0-9.\\-_]+)";function u(ce){ce.path.charAt(ce.path.length-1)==="/"&&(ce.path_=ce.path_.slice(0,-1))}const h="(/(.*))?$",p=new RegExp("^gs://"+o+h,"i"),m={bucket:1,path:3};function g(ce){ce.path_=decodeURIComponent(ce.path)}const b="v[A-Za-z0-9_]+",S=i.replace(/[.]/g,"\\."),N="(/([^?#]*).*)?$",L=new RegExp(`^https?://${S}/${b}/b/${o}/o${N}`,"i"),H={bucket:1,path:3},$=i===RT?"(?:storage.googleapis.com|storage.cloud.google.com)":i,V="([^?#]*)",J=new RegExp(`^https?://${$}/${o}/${V}`,"i"),ee=[{regex:p,indices:m,postModify:u},{regex:L,indices:H,postModify:g},{regex:J,indices:{bucket:1,path:2},postModify:g}];for(let ce=0;ce<ee.length;ce++){const ne=ee[ce],be=ne.regex.exec(e);if(be){const D=be[ne.indices.bucket];let A=be[ne.indices.path];A||(A=""),r=new $n(D,A),ne.postModify(r);break}}if(r==null)throw yD(e);return r}}class ED{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(n,e,i){let r=1,o=null,u=null,h=!1,p=0;function m(){return p===2}let g=!1;function b(...V){g||(g=!0,e.apply(null,V))}function S(V){o=setTimeout(()=>{o=null,n(L,m())},V)}function N(){u&&clearTimeout(u)}function L(V,...J){if(g){N();return}if(V){N(),b.call(null,V,...J);return}if(m()||h){N(),b.call(null,V,...J);return}r<64&&(r*=2);let ee;p===1?(p=2,ee=0):ee=(r+Math.random())*1e3,S(ee)}let H=!1;function $(V){H||(H=!0,N(),!g&&(o!==null?(V||(p=2),clearTimeout(o),S(0)):V||(p=1)))}return S(0),u=setTimeout(()=>{h=!0,$(!0)},i),$}function TD(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(n){return n!==void 0}function cb(n,e,i,r){if(r<e)throw ub(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>i)throw ub(`Invalid value for '${n}'. Expected ${i} or less.`)}function AD(n){const e=encodeURIComponent;let i="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);i=i+o+"&"}return i=i.slice(0,-1),i}var If;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(If||(If={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(n,e){const i=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,u=e.indexOf(n)!==-1;return i||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,i,r,o,u,h,p,m,g,b,S,N=!0){this.url_=e,this.method_=i,this.headers_=r,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=h,this.callback_=p,this.errorCallback_=m,this.timeout_=g,this.progressCallback_=b,this.connectionFactory_=S,this.retry=N,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((L,H)=>{this.resolve_=L,this.reject_=H,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new sf(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const h=p=>{const m=p.loaded,g=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,g)};this.progressCallback_!==null&&u.addUploadProgressListener(h),u.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(h),this.pendingConnection_=null;const p=u.getErrorCode()===If.NO_ERROR,m=u.getStatus();if(!p||CD(m,this.additionalRetryCodes_)&&this.retry){const b=u.getErrorCode()===If.ABORT;r(!1,new sf(!1,null,b));return}const g=this.successCodes_.indexOf(m)!==-1;r(!0,new sf(g,u))})},i=(r,o)=>{const u=this.resolve_,h=this.reject_,p=o.connection;if(o.wasSuccessCode)try{const m=this.callback_(p,p.getResponse());wD(m)?u(m):u()}catch(m){h(m)}else if(p!==null){const m=mD();m.serverResponse=p.getErrorText(),this.errorCallback_?h(this.errorCallback_(p,m)):h(m)}else if(o.canceled){const m=this.appDelete_?NT():vD();h(m)}else{const m=gD();h(m)}};this.canceled_?i(!1,new sf(!1,null,!0)):this.backoffId_=SD(e,i,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&TD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class sf{constructor(e,i,r){this.wasSuccessCode=e,this.connection=i,this.canceled=!!r}}function ND(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function ID(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xD(n,e){e&&(n["X-Firebase-GMPID"]=e)}function OD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function kD(n,e,i,r,o,u,h=!0){const p=AD(n.urlParams),m=n.url+p,g=Object.assign({},n.headers);return xD(g,e),ND(g,i),ID(g,u),OD(g,r),new RD(m,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function MD(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,i){this._service=e,i instanceof $n?this._location=i:this._location=$n.makeFromUrl(i,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,i){return new xf(e,i)}get root(){const e=new $n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return MD(this._location.path)}get storage(){return this._service}get parent(){const e=DD(this._location.path);if(e===null)return null;const i=new $n(this._location.bucket,e);return new xf(this._service,i)}_throwIfRoot(e){if(this._location.path==="")throw bD(e)}}function fb(n,e){const i=e?.[hD];return i==null?null:$n.makeFromBucketSpec(i,n)}function LD(n,e,i,r={}){n.host=`${e}:${i}`,n._protocol="http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:Jm(o,n.app.options.projectId))}class PD{constructor(e,i,r,o,u){this.app=e,this._authProvider=i,this._appCheckProvider=r,this._url=o,this._firebaseVersion=u,this._bucket=null,this._host=RT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dD,this._maxUploadRetryTime=pD,this._requests=new Set,o!=null?this._bucket=$n.makeFromBucketSpec(o,this._host):this._bucket=fb(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$n.makeFromBucketSpec(this._url,e):this._bucket=fb(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cb("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cb("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const i=await e.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xf(this,e)}_makeRequest(e,i,r,o,u=!0){if(this._deleted)return new ED(NT());{const h=kD(e,this._appId,r,o,i,this._firebaseVersion,u);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,i){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,i,r,o).getPromise()}}const hb="@firebase/storage",db="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="storage";function UD(n=vu(),e){n=jn(n);const r=ps(n,IT).getImmediate({identifier:e}),o=Qm("storage");return o&&jD(r,...o),r}function jD(n,e,i,r={}){LD(n,e,i,r)}function zD(n,{instanceIdentifier:e}){const i=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new PD(i,r,o,e,nr)}function HD(){Ln(new yn(IT,zD,"PUBLIC").setMultipleInstances(!0)),Gt(hb,db,""),Gt(hb,db,"esm2017")}HD();var pb={};const mb="@firebase/database",gb="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xT="";function BD(n){xT=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,i){i==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ut(i))}get(e){const i=this.domStorage_.getItem(this.prefixedName_(e));return i==null?null:nu(i)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,i){i==null?delete this.cache_[e]:this.cache_[e]=i}get(e){return ds(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new FD(e)}}catch{}return new qD},Kr=OT("localStorage"),VD=OT("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new gu("@firebase/database"),GD=(function(){let n=1;return function(){return n++}})(),kT=function(n){const e=Mx(n),i=new Ix;i.update(e);const r=i.digest();return Wm.encodeByteArray(r)},yu=function(...n){let e="";for(let i=0;i<n.length;i++){const r=n[i];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=yu.apply(null,r):typeof r=="object"?e+=Ut(r):e+=r,e+=" "}return e};let $l=null,vb=!0;const YD=function(n,e){le(!0,"Can't turn on custom loggers persistently."),uo.logLevel=Ue.VERBOSE,$l=uo.log.bind(uo)},Ft=function(...n){if(vb===!0&&(vb=!1,$l===null&&VD.get("logging_enabled")===!0&&YD()),$l){const e=yu.apply(null,n);$l(e)}},_u=function(n){return function(...e){Ft(n,...e)}},pm=function(...n){const e="FIREBASE INTERNAL ERROR: "+yu(...n);uo.error(e)},us=function(...n){const e=`FIREBASE FATAL ERROR: ${yu(...n)}`;throw uo.error(e),new Error(e)},vn=function(...n){const e="FIREBASE WARNING: "+yu(...n);uo.warn(e)},$D=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&vn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},DT=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},KD=function(n){if(document.readyState==="complete")n();else{let e=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},vo="[MIN_NAME]",Jr="[MAX_NAME]",wo=function(n,e){if(n===e)return 0;if(n===vo||e===Jr)return-1;if(e===vo||n===Jr)return 1;{const i=yb(n),r=yb(e);return i!==null?r!==null?i-r===0?n.length-e.length:i-r:-1:r!==null?1:n<e?-1:1}},WD=function(n,e){return n===e?0:n<e?-1:1},Ul=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ut(e))},og=function(n){if(typeof n!="object"||n===null)return Ut(n);const e=[];for(const r in n)e.push(r);e.sort();let i="{";for(let r=0;r<e.length;r++)r!==0&&(i+=","),i+=Ut(e[r]),i+=":",i+=og(n[e[r]]);return i+="}",i},MT=function(n,e){const i=n.length;if(i<=e)return[n];const r=[];for(let o=0;o<i;o+=e)o+e>i?r.push(n.substring(o,i)):r.push(n.substring(o,o+e));return r};function Pn(n,e){for(const i in n)n.hasOwnProperty(i)&&e(i,n[i])}const LT=function(n){le(!DT(n),"Invalid JSON number");const e=11,i=52,r=(1<<e-1)-1;let o,u,h,p,m;n===0?(u=0,h=0,o=1/n===-1/0?1:0):(o=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(p=Math.min(Math.floor(Math.log(n)/Math.LN2),r),u=p+r,h=Math.round(n*Math.pow(2,i-p)-Math.pow(2,i))):(u=0,h=Math.round(n/Math.pow(2,1-r-i))));const g=[];for(m=i;m;m-=1)g.push(h%2?1:0),h=Math.floor(h/2);for(m=e;m;m-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(o?1:0),g.reverse();const b=g.join("");let S="";for(m=0;m<64;m+=8){let N=parseInt(b.substr(m,8),2).toString(16);N.length===1&&(N="0"+N),S=S+N}return S.toLowerCase()},XD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},QD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},ZD=new RegExp("^-?(0*)\\d{1,10}$"),JD=-2147483648,eM=2147483647,yb=function(n){if(ZD.test(n)){const e=Number(n);if(e>=JD&&e<=eM)return e}return null},bu=function(n){try{n()}catch(e){setTimeout(()=>{const i=e.stack||"";throw vn("Exception was thrown by user callback.",i),e},Math.floor(0))}},tM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Kl=function(n,e){const i=setTimeout(n,e);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,i){this.appName_=e,this.appCheckProvider=i,this.appCheck=i?.getImmediate({optional:!0}),this.appCheck||i?.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((i,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(i,r):i(null)},0)})}addTokenChangeListener(e){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){vn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,i,r){this.appName_=e,this.firebaseOptions_=i,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(i=>i&&i.code==="auth/token-not-initialized"?(Ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(i,r):i(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(i=>i.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(i=>i.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',vn(e)}}class pf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="5",PT="v",UT="s",jT="r",zT="f",HT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,BT="ls",FT="p",mm="ac",qT="websocket",VT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,i,r,o,u=!1,h="",p=!1,m=!1){this.secure=i,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=u,this.persistenceKey=h,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${i}`}}function sM(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function YT(n,e,i){le(typeof e=="string","typeof type must == string"),le(typeof i=="object","typeof params must == object");let r;if(e===qT)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===VT)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sM(n)&&(i.ns=n.namespace);const o=[];return Pn(i,(u,h)=>{o.push(u+"="+h)}),r+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(){this.counters_={}}incrementCounter(e,i=1){ds(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=i}get(){return px(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp={},Lp={};function ug(n){const e=n.toString();return Mp[e]||(Mp[e]=new rM),Mp[e]}function aM(n,e){const i=n.toString();return Lp[i]||(Lp[i]=e()),Lp[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,i){this.closeAfterResponse=e,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,i){for(this.pendingResponses[e]=i;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&bu(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="start",lM="close",uM="pLPCommand",cM="pRTLPCB",$T="id",KT="pw",WT="ser",fM="cb",hM="seg",dM="ts",pM="d",mM="dframe",XT=1870,QT=30,gM=XT-QT,vM=25e3,yM=3e4;class ro{constructor(e,i,r,o,u,h,p){this.connId=e,this.repoInfo=i,this.applicationId=r,this.appCheckToken=o,this.authToken=u,this.transportSessionId=h,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_u(e),this.stats_=ug(i),this.urlFn=m=>(this.appCheckToken&&(m[mm]=this.appCheckToken),YT(i,VT,m))}open(e,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new oM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yM)),KD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cg((...u)=>{const[h,p,m,g,b]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===_b)this.id=p,this.password=m;else if(h===lM)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...u)=>{const[h,p]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(h,p)},()=>{this.onClosed_()},this.urlFn);const r={};r[_b]="t",r[WT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[fM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[PT]=lg,this.transportSessionId&&(r[UT]=this.transportSessionId),this.lastSessionId&&(r[BT]=this.lastSessionId),this.applicationId&&(r[FT]=this.applicationId),this.appCheckToken&&(r[mm]=this.appCheckToken),typeof location<"u"&&location.hostname&&HT.test(location.hostname)&&(r[jT]=zT);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ro.forceAllow_=!0}static forceDisallow(){ro.forceDisallow_=!0}static isAvailable(){return ro.forceAllow_?!0:!ro.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!XD()&&!QD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const i=Ut(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=qS(i),o=MT(r,gM);for(let u=0;u<o.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[u]),this.curSegmentNum++}addDisconnectPingFrame(e,i){this.myDisconnFrame=document.createElement("iframe");const r={};r[mM]="t",r[$T]=e,r[KT]=i,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const i=Ut(e).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class cg{constructor(e,i,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=GD(),window[uM+this.uniqueCallbackIdentifier]=e,window[cM+this.uniqueCallbackIdentifier]=i,this.myIFrame=cg.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(p){Ft("frame writing exception"),p.stack&&Ft(p.stack),Ft(p)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ft("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,i){for(this.myID=e,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$T]=this.myID,e[KT]=this.myPW,e[WT]=this.currentSerial;let i=this.urlFn(e),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+QT+r.length<=XT;){const h=this.pendingSegs.shift();r=r+"&"+hM+o+"="+h.seg+"&"+dM+o+"="+h.ts+"&"+pM+o+"="+h.d,o++}return i=i+r,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(e,i,r){this.pendingSegs.push({seg:e,ts:i,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,i){this.outstandingRequests.add(i);const r=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(r,Math.floor(vM)),u=()=>{clearTimeout(o),r()};this.addTag(e,u)}addTag(e,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),i())},r.onerror=()=>{Ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=16384,bM=45e3;let Of=null;typeof MozWebSocket<"u"?Of=MozWebSocket:typeof WebSocket<"u"&&(Of=WebSocket);class Gn{constructor(e,i,r,o,u,h,p){this.connId=e,this.applicationId=r,this.appCheckToken=o,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_u(this.connId),this.stats_=ug(i),this.connURL=Gn.connectionURL_(i,h,p,o,r),this.nodeAdmin=i.nodeAdmin}static connectionURL_(e,i,r,o,u){const h={};return h[PT]=lg,typeof location<"u"&&location.hostname&&HT.test(location.hostname)&&(h[jT]=zT),i&&(h[UT]=i),r&&(h[BT]=r),o&&(h[mm]=o),u&&(h[FT]=u),YT(e,qT,h)}open(e,i){this.onDisconnect=i,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kr.set("previous_websocket_failure",!0);try{let r;Sx(),this.mySock=new Of(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Gn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(i);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Of!==null&&!Gn.forceDisallow_}static previouslyFailed(){return Kr.isInMemoryStorage||Kr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const r=nu(i);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(le(this.frames===null,"We already have a frame buffer"),e.length<=6){const i=Number(e);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const i=e.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const r=this.extractFrameCount_(i);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const i=Ut(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=MT(i,_M);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bM))}sendString_(e){try{this.mySock.send(e)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gn.responsesRequiredToBeHealthy=2;Gn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ro,Gn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const i=Gn&&Gn.isAvailable();let r=i&&!Gn.previouslyFailed();if(e.webSocketOnly&&(i||vn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Gn];else{const o=this.transports_=[];for(const u of ru.ALL_TRANSPORTS)u&&u.isAvailable()&&o.push(u);ru.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ru.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM=6e4,SM=5e3,TM=10*1024,wM=100*1024,Pp="t",bb="d",AM="s",Eb="r",CM="e",Sb="o",Tb="a",wb="n",Ab="p",RM="h";class NM{constructor(e,i,r,o,u,h,p,m,g,b){this.id=e,this.repoInfo_=i,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=u,this.onMessage_=h,this.onReady_=p,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=b,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_u("c:"+this.id+":"),this.transportManager_=new ru(i),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,r)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Kl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return i=>{e===this.conn_?this.onConnectionLost_(i):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return i=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(i):e===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(e){const i={t:"d",d:e};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pp in e){const i=e[Pp];i===Tb?this.upgradeIfSecondaryHealthy_():i===Eb?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===Sb&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const i=Ul("t",e),r=Ul("d",e);if(i==="c")this.onSecondaryControl_(r);else if(i==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ab,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Tb,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wb,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const i=Ul("t",e),r=Ul("d",e);i==="c"?this.onControl_(r):i==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const i=Ul(Pp,e);if(bb in e){const r=e[bb];if(i===RM){const o=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===wb){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===AM?this.onConnectionShutdown_(r):i===Eb?this.onReset_(r):i===CM?pm("Server Error: "+r):i===Sb?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pm("Unknown control packet command: "+i)}}onHandshake_(e){const i=e.ts,r=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),lg!==r&&vn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,r),Kl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,i){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Kl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ab,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{put(e,i,r,o){}merge(e,i,r,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,i,r){}onDisconnectMerge(e,i,r){}onDisconnectCancel(e,i){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.allowedEvents_=e,this.listeners_={},le(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...i){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,i)}}on(e,i,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:i,context:r});const o=this.getInitialEvent(e);o&&i.apply(r,o)}off(e,i,r){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let u=0;u<o.length;u++)if(o[u].callback===i&&(!r||r===o[u].context)){o.splice(u,1);return}}validateEventType_(e){le(this.allowedEvents_.find(i=>i===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf extends JT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!eg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new kf}getInitialEvent(e){return le(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=32,Rb=768;class tt{constructor(e,i){if(i===void 0){this.pieces_=e.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=i}toString(){let e="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(e+="/"+this.pieces_[i]);return e||"/"}}function Ke(){return new tt("")}function ke(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function tr(n){return n.pieces_.length-n.pieceNum_}function Je(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new tt(n.pieces_,e)}function e1(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function IM(n){let e="";for(let i=n.pieceNum_;i<n.pieces_.length;i++)n.pieces_[i]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[i])));return e||"/"}function t1(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function n1(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let i=n.pieceNum_;i<n.pieces_.length-1;i++)e.push(n.pieces_[i]);return new tt(e,0)}function xt(n,e){const i=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)i.push(n.pieces_[r]);if(e instanceof tt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)i.push(e.pieces_[r]);else{const r=e.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&i.push(r[o])}return new tt(i,0)}function Ne(n){return n.pieceNum_>=n.pieces_.length}function Mn(n,e){const i=ke(n),r=ke(e);if(i===null)return e;if(i===r)return Mn(Je(n),Je(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function i1(n,e){if(tr(n)!==tr(e))return!1;for(let i=n.pieceNum_,r=e.pieceNum_;i<=n.pieces_.length;i++,r++)if(n.pieces_[i]!==e.pieces_[r])return!1;return!0}function Kn(n,e){let i=n.pieceNum_,r=e.pieceNum_;if(tr(n)>tr(e))return!1;for(;i<n.pieces_.length;){if(n.pieces_[i]!==e.pieces_[r])return!1;++i,++r}return!0}class xM{constructor(e,i){this.errorPrefix_=i,this.parts_=t1(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Jf(this.parts_[r]);s1(this)}}function OM(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Jf(e),s1(n)}function kM(n){const e=n.parts_.pop();n.byteLength_-=Jf(e),n.parts_.length>0&&(n.byteLength_-=1)}function s1(n){if(n.byteLength_>Rb)throw new Error(n.errorPrefix_+"has a key path longer than "+Rb+" bytes ("+n.byteLength_+").");if(n.parts_.length>Cb)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cb+") or object contains a cycle "+Gr(n))}function Gr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg extends JT{constructor(){super(["visible"]);let e,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new fg}getInitialEvent(e){return le(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=1e3,DM=300*1e3,Nb=30*1e3,MM=1.3,LM=3e4,PM="server_kill",Ib=3;class is extends ZT{constructor(e,i,r,o,u,h,p,m){if(super(),this.repoInfo_=e,this.applicationId_=i,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=u,this.authTokenProvider_=h,this.appCheckTokenProvider_=p,this.authOverride_=m,this.id=is.nextPersistentConnectionId_++,this.log_=_u("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jl,this.maxReconnectDelay_=DM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,i,r){const o=++this.requestNumber_,u={r:o,a:e,b:i};this.log_(Ut(u)),le(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),r&&(this.requestCBHash_[o]=r)}get(e){this.initConnection_();const i=new Zm,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const p=h.d;h.s==="ok"?i.resolve(p):i.reject(p)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),i.promise}listen(e,i,r,o){this.initConnection_();const u=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+u),this.listens.has(h)||this.listens.set(h,new Map),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),le(!this.listens.get(h).has(u),"listen() called twice for same path/queryId.");const p={onComplete:o,hashFn:i,query:e,tag:r};this.listens.get(h).set(u,p),this.connected_&&this.sendListen_(p)}sendGet_(e){const i=this.outstandingGets_[e];this.sendRequest("g",i.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(r)})}sendListen_(e){const i=e.query,r=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+r+" for "+o);const u={p:r},h="q";e.tag&&(u.q=i._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(h,u,p=>{const m=p.d,g=p.s;is.warnOnListenWarnings_(m,i),(this.listens.get(r)&&this.listens.get(r).get(o))===e&&(this.log_("listen response",p),g!=="ok"&&this.removeListen_(r,o),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,i){if(e&&typeof e=="object"&&ds(e,"w")){const r=go(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',u=i._path.toString();vn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Nx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nb)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,i=Rx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(i,r,o=>{const u=o.s,h=o.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const i=e.s,r=e.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,r)})}unlisten(e,i){const r=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,e._queryObject,i)}sendUnlisten_(e,i,r,o){this.log_("Unlisten on "+e+" for "+i);const u={p:e},h="n";o&&(u.q=r,u.t=o),this.sendRequest(h,u)}onDisconnectPut(e,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,i,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:i,onComplete:r})}onDisconnectMerge(e,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,i,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:i,onComplete:r})}onDisconnectCancel(e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(e,i,r,o){const u={p:i,d:r};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(e,i,r,o){this.putInternal("p",e,i,r,o)}merge(e,i,r,o){this.putInternal("m",e,i,r,o)}putInternal(e,i,r,o,u){this.initConnection_();const h={p:i,d:r};u!==void 0&&(h.h=u),this.outstandingPuts_.push({action:e,request:h,onComplete:o}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+i)}sendPut_(e){const i=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(i,r,u=>{this.log_(i+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(u.s,u.d)})}reportStats(e){if(this.connected_){const i={c:e};this.log_("reportStats",i),this.sendRequest("s",i,r=>{if(r.s!=="ok"){const u=r.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ut(e));const i=e.r,r=this.requestCBHash_[i];r&&(delete this.requestCBHash_[i],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,i){this.log_("handleServerMessage",e,i),e==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):e==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):e==="c"?this.onListenRevoked_(i.p,i.q):e==="ac"?this.onAuthRevoked_(i.s,i.d):e==="apc"?this.onAppCheckRevoked_(i.s,i.d):e==="sd"?this.onSecurityDebugPacket_(i):pm("Unrecognized action received from server: "+Ut(e)+`
Are you using the latest client?`)}onReady_(e,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){le(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>LM&&(this.reconnectDelay_=jl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let i=Math.max(0,this.reconnectDelay_-e);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*MM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+is.nextConnectionId_++,u=this.lastSessionId;let h=!1,p=null;const m=function(){p?p.close():(h=!0,r())},g=function(S){le(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(S)};this.realtime_={close:m,sendRequest:g};const b=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[S,N]=await Promise.all([this.authTokenProvider_.getToken(b),this.appCheckTokenProvider_.getToken(b)]);h?Ft("getToken() completed but was canceled"):(Ft("getToken() completed. Creating connection."),this.authToken_=S&&S.accessToken,this.appCheckToken_=N&&N.token,p=new NM(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,i,r,L=>{vn(L+" ("+this.repoInfo_.toString()+")"),this.interrupt(PM)},u))}catch(S){this.log_("Failed to get token: "+S),h||(this.repoInfo_.nodeAdmin&&vn(S),m())}}}interrupt(e){Ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],om(this.interruptReasons_)&&(this.reconnectDelay_=jl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const i=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const i=this.outstandingPuts_[e];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,i){let r;i?r=i.map(u=>og(u)).join("$"):r="default";const o=this.removeListen_(e,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,i){const r=new tt(e).toString();let o;if(this.listens.has(r)){const u=this.listens.get(r);o=u.get(i),u.delete(i),u.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(e,i){Ft("Auth token revoked: "+e+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ib&&(this.reconnectDelay_=Nb,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,i){Ft("App check token revoked: "+e+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ib&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const i of e.values())this.sendListen_(i);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let i="js";e["sdk."+i+"."+xT.replace(/\./g,"-")]=1,eg()?e["framework.cordova"]=1:WS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kf.getInstance().currentlyOnline();return om(this.interruptReasons_)&&e}}is.nextPersistentConnectionId_=0;is.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,i){this.name=e,this.node=i}static Wrap(e,i){return new De(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,i){const r=new De(vo,e),o=new De(vo,i);return this.compare(r,o)!==0}minPost(){return De.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rf;class r1 extends nh{static get __EMPTY_NODE(){return rf}static set __EMPTY_NODE(e){rf=e}compare(e,i){return wo(e.name,i.name)}isDefinedOn(e){throw So("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,i){return!1}minPost(){return De.MIN}maxPost(){return new De(Jr,rf)}makePost(e,i){return le(typeof e=="string","KeyIndex indexValue must always be a string."),new De(e,rf)}toString(){return".key"}}const co=new r1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,i,r,o,u=null){this.isReverse_=o,this.resultGenerator_=u,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=i?r(e.key,i):1,o&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(e.key,e.value):i={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class It{constructor(e,i,r,o,u){this.key=e,this.value=i,this.color=r??It.RED,this.left=o??rn.EMPTY_NODE,this.right=u??rn.EMPTY_NODE}copy(e,i,r,o,u){return new It(e??this.key,i??this.value,r??this.color,o??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,r){let o=this;const u=r(e,o.key);return u<0?o=o.copy(null,null,null,o.left.insert(e,i,r),null):u===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,i,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return rn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,i){let r,o;if(r=this,i(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,i),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),i(e,r.key)===0){if(r.right.isEmpty())return rn.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,i))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}It.RED=!0;It.BLACK=!1;class UM{copy(e,i,r,o,u){return this}insert(e,i,r){return new It(e,i,null)}remove(e,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rn{constructor(e,i=rn.EMPTY_NODE){this.comparator_=e,this.root_=i}insert(e,i){return new rn(this.comparator_,this.root_.insert(e,i,this.comparator_).copy(null,null,It.BLACK,null,null))}remove(e){return new rn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,It.BLACK,null,null))}get(e){let i,r=this.root_;for(;!r.isEmpty();){if(i=this.comparator_(e,r.key),i===0)return r.value;i<0?r=r.left:i>0&&(r=r.right)}return null}getPredecessorKey(e){let i,r=this.root_,o=null;for(;!r.isEmpty();)if(i=this.comparator_(e,r.key),i===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else i<0?r=r.left:i>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new af(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,i){return new af(this.root_,e,this.comparator_,!1,i)}getReverseIteratorFrom(e,i){return new af(this.root_,e,this.comparator_,!0,i)}getReverseIterator(e){return new af(this.root_,null,this.comparator_,!0,e)}}rn.EMPTY_NODE=new UM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(n,e){return wo(n.name,e.name)}function hg(n,e){return wo(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gm;function zM(n){gm=n}const a1=function(n){return typeof n=="number"?"number:"+LT(n):"string:"+n},o1=function(n){if(n.isLeafNode()){const e=n.val();le(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ds(e,".sv"),"Priority must be a string or number.")}else le(n===gm||n.isEmpty(),"priority of unexpected type.");le(n===gm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xb;class Nt{constructor(e,i=Nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=i,this.lazyHash_=null,le(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),o1(this.priorityNode_)}static set __childrenNodeConstructor(e){xb=e}static get __childrenNodeConstructor(){return xb}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Nt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Nt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ne(e)?this:ke(e)===".priority"?this.priorityNode_:Nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,i){return null}updateImmediateChild(e,i){return e===".priority"?this.updatePriority(i):i.isEmpty()&&e!==".priority"?this:Nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,i).updatePriority(this.priorityNode_)}updateChild(e,i){const r=ke(e);return r===null?i:i.isEmpty()&&r!==".priority"?this:(le(r!==".priority"||tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Je(e),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,i){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+a1(this.priorityNode_.val())+":");const i=typeof this.value_;e+=i+":",i==="number"?e+=LT(this.value_):e+=this.value_,this.lazyHash_=kT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Nt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Nt.__childrenNodeConstructor?-1:(le(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const i=typeof e.value_,r=typeof this.value_,o=Nt.VALUE_TYPE_ORDER.indexOf(i),u=Nt.VALUE_TYPE_ORDER.indexOf(r);return le(o>=0,"Unknown leaf type: "+i),le(u>=0,"Unknown leaf type: "+r),o===u?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const i=e;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}Nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l1,u1;function HM(n){l1=n}function BM(n){u1=n}class FM extends nh{compare(e,i){const r=e.node.getPriority(),o=i.node.getPriority(),u=r.compareTo(o);return u===0?wo(e.name,i.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,i){return!e.getPriority().equals(i.getPriority())}minPost(){return De.MIN}maxPost(){return new De(Jr,new Nt("[PRIORITY-POST]",u1))}makePost(e,i){const r=l1(e);return new De(i,new Nt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Vt=new FM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=Math.log(2);class VM{constructor(e){const i=u=>parseInt(Math.log(u)/qM,10),r=u=>parseInt(Array(u+1).join("1"),2);this.count=i(e+1),this.current_=this.count-1;const o=r(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Df=function(n,e,i,r){n.sort(e);const o=function(m,g){const b=g-m;let S,N;if(b===0)return null;if(b===1)return S=n[m],N=i?i(S):S,new It(N,S.node,It.BLACK,null,null);{const L=parseInt(b/2,10)+m,H=o(m,L),$=o(L+1,g);return S=n[L],N=i?i(S):S,new It(N,S.node,It.BLACK,H,$)}},u=function(m){let g=null,b=null,S=n.length;const N=function(H,$){const V=S-H,J=S;S-=H;const Z=o(V+1,J),ee=n[V],ce=i?i(ee):ee;L(new It(ce,ee.node,$,null,Z))},L=function(H){g?(g.left=H,g=H):(b=H,g=H)};for(let H=0;H<m.count;++H){const $=m.nextBitIsOne(),V=Math.pow(2,m.count-(H+1));$?N(V,It.BLACK):(N(V,It.BLACK),N(V,It.RED))}return b},h=new VM(n.length),p=u(h);return new rn(r||e,p)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Up;const io={};class Zi{constructor(e,i){this.indexes_=e,this.indexSet_=i}static get Default(){return le(io&&Vt,"ChildrenNode.ts has not been loaded"),Up=Up||new Zi({".priority":io},{".priority":Vt}),Up}get(e){const i=go(this.indexes_,e);if(!i)throw new Error("No index defined for "+e);return i instanceof rn?i:null}hasIndex(e){return ds(this.indexSet_,e.toString())}addIndex(e,i){le(e!==co,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const u=i.getIterator(De.Wrap);let h=u.getNext();for(;h;)o=o||e.isDefinedOn(h.node),r.push(h),h=u.getNext();let p;o?p=Df(r,e.getCompare()):p=io;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const b=Object.assign({},this.indexes_);return b[m]=p,new Zi(b,g)}addToIndexes(e,i){const r=Af(this.indexes_,(o,u)=>{const h=go(this.indexSet_,u);if(le(h,"Missing index implementation for "+u),o===io)if(h.isDefinedOn(e.node)){const p=[],m=i.getIterator(De.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&p.push(g),g=m.getNext();return p.push(e),Df(p,h.getCompare())}else return io;else{const p=i.get(e.name);let m=o;return p&&(m=m.remove(new De(e.name,p))),m.insert(e,e.node)}});return new Zi(r,this.indexSet_)}removeFromIndexes(e,i){const r=Af(this.indexes_,o=>{if(o===io)return o;{const u=i.get(e.name);return u?o.remove(new De(e.name,u)):o}});return new Zi(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl;class ze{constructor(e,i,r){this.children_=e,this.priorityNode_=i,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&o1(this.priorityNode_),this.children_.isEmpty()&&le(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zl||(zl=new ze(new rn(hg),null,Zi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zl}updatePriority(e){return this.children_.isEmpty()?this:new ze(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const i=this.children_.get(e);return i===null?zl:i}}getChild(e){const i=ke(e);return i===null?this:this.getImmediateChild(i).getChild(Je(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,i){if(le(i,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(i);{const r=new De(e,i);let o,u;i.isEmpty()?(o=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(e,i),u=this.indexMap_.addToIndexes(r,this.children_));const h=o.isEmpty()?zl:this.priorityNode_;return new ze(o,h,u)}}updateChild(e,i){const r=ke(e);if(r===null)return i;{le(ke(e)!==".priority"||tr(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(Je(e),i);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const i={};let r=0,o=0,u=!0;if(this.forEachChild(Vt,(h,p)=>{i[h]=p.val(e),r++,u&&ze.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):u=!1}),!e&&u&&o<2*r){const h=[];for(const p in i)h[p]=i[p];return h}else return e&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+a1(this.getPriority().val())+":"),this.forEachChild(Vt,(i,r)=>{const o=r.hash();o!==""&&(e+=":"+i+":"+o)}),this.lazyHash_=e===""?"":kT(e)}return this.lazyHash_}getPredecessorChildName(e,i,r){const o=this.resolveIndex_(r);if(o){const u=o.getPredecessorKey(new De(e,i));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const i=this.resolveIndex_(e);if(i){const r=i.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const i=this.getFirstChildName(e);return i?new De(i,this.children_.get(i)):null}getLastChildName(e){const i=this.resolveIndex_(e);if(i){const r=i.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const i=this.getLastChildName(e);return i?new De(i,this.children_.get(i)):null}forEachChild(e,i){const r=this.resolveIndex_(e);return r?r.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,i){const r=this.resolveIndex_(i);if(r)return r.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,De.Wrap);let u=o.peek();for(;u!=null&&i.compare(u,e)<0;)o.getNext(),u=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,i){const r=this.resolveIndex_(i);if(r)return r.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,De.Wrap);let u=o.peek();for(;u!=null&&i.compare(u,e)>0;)o.getNext(),u=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Eu?-1:0}withIndex(e){if(e===co||this.indexMap_.hasIndex(e))return this;{const i=this.indexMap_.addIndex(e,this.children_);return new ze(this.children_,this.priorityNode_,i)}}isIndexed(e){return e===co||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const i=e;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const r=this.getIterator(Vt),o=i.getIterator(Vt);let u=r.getNext(),h=o.getNext();for(;u&&h;){if(u.name!==h.name||!u.node.equals(h.node))return!1;u=r.getNext(),h=o.getNext()}return u===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===co?null:this.indexMap_.get(e.toString())}}ze.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class GM extends ze{constructor(){super(new rn(hg),ze.EMPTY_NODE,Zi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ze.EMPTY_NODE}isEmpty(){return!1}}const Eu=new GM;Object.defineProperties(De,{MIN:{value:new De(vo,ze.EMPTY_NODE)},MAX:{value:new De(Jr,Eu)}});r1.__EMPTY_NODE=ze.EMPTY_NODE;Nt.__childrenNodeConstructor=ze;zM(Eu);BM(Eu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM=!0;function qt(n,e=null){if(n===null)return ze.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),le(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const i=n;return new Nt(i,qt(e))}if(!(n instanceof Array)&&YM){const i=[];let r=!1;if(Pn(n,(h,p)=>{if(h.substring(0,1)!=="."){const m=qt(p);m.isEmpty()||(r=r||!m.getPriority().isEmpty(),i.push(new De(h,m)))}}),i.length===0)return ze.EMPTY_NODE;const u=Df(i,jM,h=>h.name,hg);if(r){const h=Df(i,Vt.getCompare());return new ze(u,qt(e),new Zi({".priority":h},{".priority":Vt}))}else return new ze(u,qt(e),Zi.Default)}else{let i=ze.EMPTY_NODE;return Pn(n,(r,o)=>{if(ds(n,r)&&r.substring(0,1)!=="."){const u=qt(o);(u.isLeafNode()||!u.isEmpty())&&(i=i.updateImmediateChild(r,u))}}),i.updatePriority(qt(e))}}HM(qt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M extends nh{constructor(e){super(),this.indexPath_=e,le(!Ne(e)&&ke(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,i){const r=this.extractChild(e.node),o=this.extractChild(i.node),u=r.compareTo(o);return u===0?wo(e.name,i.name):u}makePost(e,i){const r=qt(e),o=ze.EMPTY_NODE.updateChild(this.indexPath_,r);return new De(i,o)}maxPost(){const e=ze.EMPTY_NODE.updateChild(this.indexPath_,Eu);return new De(Jr,e)}toString(){return t1(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM extends nh{compare(e,i){const r=e.node.compareTo(i.node);return r===0?wo(e.name,i.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,i){return!e.equals(i)}minPost(){return De.MIN}maxPost(){return De.MAX}makePost(e,i){const r=qt(e);return new De(i,r)}toString(){return".value"}}const WM=new KM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XM(n){return{type:"value",snapshotNode:n}}function QM(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ZM(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ob(n,e,i){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:i}}function JM(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Vt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return le(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return le(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vo}hasEnd(){return this.endSet_}getIndexEndValue(){return le(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return le(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return le(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Vt}copy(){const e=new dg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kb(n){const e={};if(n.isDefault())return e;let i;if(n.index_===Vt?i="$priority":n.index_===WM?i="$value":n.index_===co?i="$key":(le(n.index_ instanceof $M,"Unrecognized index type!"),i=n.index_.toString()),e.orderBy=Ut(i),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Ut(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Ut(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Ut(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Ut(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Db(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let i=n.viewFrom_;i===""&&(n.isViewFromLeft()?i="l":i="r"),e.vf=i}return n.index_!==Vt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf extends ZT{constructor(e,i,r,o){super(),this.repoInfo_=e,this.onDataUpdate_=i,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=_u("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,i){return i!==void 0?"tag$"+i:(le(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,i,r,o){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const h=Mf.getListenId_(e,r),p={};this.listens_[h]=p;const m=kb(e._queryParams);this.restRequest_(u+".json",m,(g,b)=>{let S=b;if(g===404&&(S=null,g=null),g===null&&this.onDataUpdate_(u,S,!1,r),go(this.listens_,h)===p){let N;g?g===401?N="permission_denied":N="rest_error:"+g:N="ok",o(N,null)}})}unlisten(e,i){const r=Mf.getListenId_(e,i);delete this.listens_[r]}get(e){const i=kb(e._queryParams),r=e._path.toString(),o=new Zm;return this.restRequest_(r+".json",i,(u,h)=>{let p=h;u===404&&(p=null,u=null),u===null?(this.onDataUpdate_(r,p,!1,null),o.resolve(p)):o.reject(new Error(p))}),o.promise}refreshAuthToken(e){}restRequest_(e,i={},r){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,u])=>{o&&o.accessToken&&(i.auth=o.accessToken),u&&u.token&&(i.ac=u.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+To(i);this.log_("Sending REST request for "+h);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(r&&p.readyState===4){this.log_("REST Response for "+h+" received. status:",p.status,"response:",p.responseText);let m=null;if(p.status>=200&&p.status<300){try{m=nu(p.responseText)}catch{vn("Failed to parse JSON response for "+h+": "+p.responseText)}r(null,m)}else p.status!==401&&p.status!==404&&vn("Got unsuccessful REST response for "+h+" Status: "+p.status),r(p.status);r=null}},p.open("GET",h,!0),p.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(){this.rootNode_=ze.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,i){this.rootNode_=this.rootNode_.updateChild(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(){return{value:null,children:new Map}}function c1(n,e,i){if(Ne(e))n.value=i,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,i);else{const r=ke(e);n.children.has(r)||n.children.set(r,Lf());const o=n.children.get(r);e=Je(e),c1(o,e,i)}}function vm(n,e,i){n.value!==null?i(e,n.value):t4(n,(r,o)=>{const u=new tt(e.toString()+"/"+r);vm(o,u,i)})}function t4(n,e){n.children.forEach((i,r)=>{e(r,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),i=Object.assign({},e);return this.last_&&Pn(this.last_,(r,o)=>{i[r]=i[r]-o}),this.last_=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=10*1e3,i4=30*1e3,s4=300*1e3;class r4{constructor(e,i){this.server_=i,this.statsToReport_={},this.statsListener_=new n4(e);const r=Mb+(i4-Mb)*Math.random();Kl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),i={};let r=!1;Pn(e,(o,u)=>{u>0&&ds(this.statsToReport_,o)&&(i[o]=u,r=!0)}),r&&this.server_.reportStats(i),Kl(this.reportStats_.bind(this),Math.floor(Math.random()*2*s4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vi||(vi={}));function f1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function h1(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function d1(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,i,r){this.path=e,this.affectedTree=i,this.revert=r,this.type=vi.ACK_USER_WRITE,this.source=f1()}operationForChild(e){if(Ne(this.path)){if(this.affectedTree.value!=null)return le(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new tt(e));return new Pf(Ke(),i,this.revert)}}else return le(ke(this.path)===e,"operationForChild called for unrelated child."),new Pf(Je(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,i,r){this.source=e,this.path=i,this.snap=r,this.type=vi.OVERWRITE}operationForChild(e){return Ne(this.path)?new ea(this.source,Ke(),this.snap.getImmediateChild(e)):new ea(this.source,Je(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,i,r){this.source=e,this.path=i,this.children=r,this.type=vi.MERGE}operationForChild(e){if(Ne(this.path)){const i=this.children.subtree(new tt(e));return i.isEmpty()?null:i.value?new ea(this.source,Ke(),i.value):new au(this.source,Ke(),i)}else return le(ke(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new au(this.source,Je(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,i,r){this.node_=e,this.fullyInitialized_=i,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ne(e))return this.isFullyInitialized()&&!this.filtered_;const i=ke(e);return this.isCompleteForChild(i)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function a4(n,e,i,r){const o=[],u=[];return e.forEach(h=>{h.type==="child_changed"&&n.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&u.push(JM(h.childName,h.snapshotNode))}),Hl(n,o,"child_removed",e,r,i),Hl(n,o,"child_added",e,r,i),Hl(n,o,"child_moved",u,r,i),Hl(n,o,"child_changed",e,r,i),Hl(n,o,"value",e,r,i),o}function Hl(n,e,i,r,o,u){const h=r.filter(p=>p.type===i);h.sort((p,m)=>l4(n,p,m)),h.forEach(p=>{const m=o4(n,p,u);o.forEach(g=>{g.respondsTo(p.type)&&e.push(g.createEvent(m,n.query_))})})}function o4(n,e,i){return e.type==="value"||e.type==="child_removed"||(e.prevName=i.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function l4(n,e,i){if(e.childName==null||i.childName==null)throw So("Should only compare child_ events.");const r=new De(e.childName,e.snapshotNode),o=new De(i.childName,i.snapshotNode);return n.index_.compare(r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(n,e){return{eventCache:n,serverCache:e}}function Wl(n,e,i,r){return p1(new pg(e,i,r),n.serverCache)}function m1(n,e,i,r){return p1(n.eventCache,new pg(e,i,r))}function ym(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ta(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jp;const u4=()=>(jp||(jp=new rn(WD)),jp);class Ze{constructor(e,i=u4()){this.value=e,this.children=i}static fromObject(e){let i=new Ze(null);return Pn(e,(r,o)=>{i=i.set(new tt(r),o)}),i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,i){if(this.value!=null&&i(this.value))return{path:Ke(),value:this.value};if(Ne(e))return null;{const r=ke(e),o=this.children.get(r);if(o!==null){const u=o.findRootMostMatchingPathAndValue(Je(e),i);return u!=null?{path:xt(new tt(r),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ne(e))return this;{const i=ke(e),r=this.children.get(i);return r!==null?r.subtree(Je(e)):new Ze(null)}}set(e,i){if(Ne(e))return new Ze(i,this.children);{const r=ke(e),u=(this.children.get(r)||new Ze(null)).set(Je(e),i),h=this.children.insert(r,u);return new Ze(this.value,h)}}remove(e){if(Ne(e))return this.children.isEmpty()?new Ze(null):new Ze(null,this.children);{const i=ke(e),r=this.children.get(i);if(r){const o=r.remove(Je(e));let u;return o.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,o),this.value===null&&u.isEmpty()?new Ze(null):new Ze(this.value,u)}else return this}}get(e){if(Ne(e))return this.value;{const i=ke(e),r=this.children.get(i);return r?r.get(Je(e)):null}}setTree(e,i){if(Ne(e))return i;{const r=ke(e),u=(this.children.get(r)||new Ze(null)).setTree(Je(e),i);let h;return u.isEmpty()?h=this.children.remove(r):h=this.children.insert(r,u),new Ze(this.value,h)}}fold(e){return this.fold_(Ke(),e)}fold_(e,i){const r={};return this.children.inorderTraversal((o,u)=>{r[o]=u.fold_(xt(e,o),i)}),i(e,this.value,r)}findOnPath(e,i){return this.findOnPath_(e,Ke(),i)}findOnPath_(e,i,r){const o=this.value?r(i,this.value):!1;if(o)return o;if(Ne(e))return null;{const u=ke(e),h=this.children.get(u);return h?h.findOnPath_(Je(e),xt(i,u),r):null}}foreachOnPath(e,i){return this.foreachOnPath_(e,Ke(),i)}foreachOnPath_(e,i,r){if(Ne(e))return this;{this.value&&r(i,this.value);const o=ke(e),u=this.children.get(o);return u?u.foreachOnPath_(Je(e),xt(i,o),r):new Ze(null)}}foreach(e){this.foreach_(Ke(),e)}foreach_(e,i){this.children.inorderTraversal((r,o)=>{o.foreach_(xt(e,r),i)}),this.value&&i(e,this.value)}foreachChild(e){this.children.inorderTraversal((i,r)=>{r.value&&e(i,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.writeTree_=e}static empty(){return new Xn(new Ze(null))}}function Xl(n,e,i){if(Ne(e))return new Xn(new Ze(i));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const o=r.path;let u=r.value;const h=Mn(o,e);return u=u.updateChild(h,i),new Xn(n.writeTree_.set(o,u))}else{const o=new Ze(i),u=n.writeTree_.setTree(e,o);return new Xn(u)}}}function Lb(n,e,i){let r=n;return Pn(i,(o,u)=>{r=Xl(r,xt(e,o),u)}),r}function Pb(n,e){if(Ne(e))return Xn.empty();{const i=n.writeTree_.setTree(e,new Ze(null));return new Xn(i)}}function _m(n,e){return oa(n,e)!=null}function oa(n,e){const i=n.writeTree_.findRootMostValueAndPath(e);return i!=null?n.writeTree_.get(i.path).getChild(Mn(i.path,e)):null}function Ub(n){const e=[],i=n.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Vt,(r,o)=>{e.push(new De(r,o))}):n.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&e.push(new De(r,o.value))}),e}function Qs(n,e){if(Ne(e))return n;{const i=oa(n,e);return i!=null?new Xn(new Ze(i)):new Xn(n.writeTree_.subtree(e))}}function bm(n){return n.writeTree_.isEmpty()}function yo(n,e){return g1(Ke(),n.writeTree_,e)}function g1(n,e,i){if(e.value!=null)return i.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((o,u)=>{o===".priority"?(le(u.value!==null,"Priority writes must always be leaf nodes"),r=u.value):i=g1(xt(n,o),u,i)}),!i.getChild(n).isEmpty()&&r!==null&&(i=i.updateChild(xt(n,".priority"),r)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(n,e){return S1(e,n)}function c4(n,e,i,r,o){le(r>n.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),n.allWrites.push({path:e,snap:i,writeId:r,visible:o}),o&&(n.visibleWrites=Xl(n.visibleWrites,e,i)),n.lastWriteId=r}function f4(n,e){for(let i=0;i<n.allWrites.length;i++){const r=n.allWrites[i];if(r.writeId===e)return r}return null}function h4(n,e){const i=n.allWrites.findIndex(p=>p.writeId===e);le(i>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[i];n.allWrites.splice(i,1);let o=r.visible,u=!1,h=n.allWrites.length-1;for(;o&&h>=0;){const p=n.allWrites[h];p.visible&&(h>=i&&d4(p,r.path)?o=!1:Kn(r.path,p.path)&&(u=!0)),h--}if(o){if(u)return p4(n),!0;if(r.snap)n.visibleWrites=Pb(n.visibleWrites,r.path);else{const p=r.children;Pn(p,m=>{n.visibleWrites=Pb(n.visibleWrites,xt(r.path,m))})}return!0}else return!1}function d4(n,e){if(n.snap)return Kn(n.path,e);for(const i in n.children)if(n.children.hasOwnProperty(i)&&Kn(xt(n.path,i),e))return!0;return!1}function p4(n){n.visibleWrites=y1(n.allWrites,m4,Ke()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function m4(n){return n.visible}function y1(n,e,i){let r=Xn.empty();for(let o=0;o<n.length;++o){const u=n[o];if(e(u)){const h=u.path;let p;if(u.snap)Kn(i,h)?(p=Mn(i,h),r=Xl(r,p,u.snap)):Kn(h,i)&&(p=Mn(h,i),r=Xl(r,Ke(),u.snap.getChild(p)));else if(u.children){if(Kn(i,h))p=Mn(i,h),r=Lb(r,p,u.children);else if(Kn(h,i))if(p=Mn(h,i),Ne(p))r=Lb(r,Ke(),u.children);else{const m=go(u.children,ke(p));if(m){const g=m.getChild(Je(p));r=Xl(r,Ke(),g)}}}else throw So("WriteRecord should have .snap or .children")}}return r}function _1(n,e,i,r,o){if(!r&&!o){const u=oa(n.visibleWrites,e);if(u!=null)return u;{const h=Qs(n.visibleWrites,e);if(bm(h))return i;if(i==null&&!_m(h,Ke()))return null;{const p=i||ze.EMPTY_NODE;return yo(h,p)}}}else{const u=Qs(n.visibleWrites,e);if(!o&&bm(u))return i;if(!o&&i==null&&!_m(u,Ke()))return null;{const h=function(g){return(g.visible||o)&&(!r||!~r.indexOf(g.writeId))&&(Kn(g.path,e)||Kn(e,g.path))},p=y1(n.allWrites,h,e),m=i||ze.EMPTY_NODE;return yo(p,m)}}}function g4(n,e,i){let r=ze.EMPTY_NODE;const o=oa(n.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Vt,(u,h)=>{r=r.updateImmediateChild(u,h)}),r;if(i){const u=Qs(n.visibleWrites,e);return i.forEachChild(Vt,(h,p)=>{const m=yo(Qs(u,new tt(h)),p);r=r.updateImmediateChild(h,m)}),Ub(u).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}else{const u=Qs(n.visibleWrites,e);return Ub(u).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}}function v4(n,e,i,r,o){le(r||o,"Either existingEventSnap or existingServerSnap must exist");const u=xt(e,i);if(_m(n.visibleWrites,u))return null;{const h=Qs(n.visibleWrites,u);return bm(h)?o.getChild(i):yo(h,o.getChild(i))}}function y4(n,e,i,r){const o=xt(e,i),u=oa(n.visibleWrites,o);if(u!=null)return u;if(r.isCompleteForChild(i)){const h=Qs(n.visibleWrites,o);return yo(h,r.getNode().getImmediateChild(i))}else return null}function _4(n,e){return oa(n.visibleWrites,e)}function b4(n,e,i,r,o,u,h){let p;const m=Qs(n.visibleWrites,e),g=oa(m,Ke());if(g!=null)p=g;else if(i!=null)p=yo(m,i);else return[];if(p=p.withIndex(h),!p.isEmpty()&&!p.isLeafNode()){const b=[],S=h.getCompare(),N=u?p.getReverseIteratorFrom(r,h):p.getIteratorFrom(r,h);let L=N.getNext();for(;L&&b.length<o;)S(L,r)!==0&&b.push(L),L=N.getNext();return b}else return[]}function E4(){return{visibleWrites:Xn.empty(),allWrites:[],lastWriteId:-1}}function Em(n,e,i,r){return _1(n.writeTree,n.treePath,e,i,r)}function b1(n,e){return g4(n.writeTree,n.treePath,e)}function jb(n,e,i,r){return v4(n.writeTree,n.treePath,e,i,r)}function Uf(n,e){return _4(n.writeTree,xt(n.treePath,e))}function S4(n,e,i,r,o,u){return b4(n.writeTree,n.treePath,e,i,r,o,u)}function mg(n,e,i){return y4(n.writeTree,n.treePath,e,i)}function E1(n,e){return S1(xt(n.treePath,e),n.writeTree)}function S1(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(){this.changeMap=new Map}trackChildChange(e){const i=e.type,r=e.childName;le(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),le(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const u=o.type;if(i==="child_added"&&u==="child_removed")this.changeMap.set(r,Ob(r,e.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&u==="child_added")this.changeMap.delete(r);else if(i==="child_removed"&&u==="child_changed")this.changeMap.set(r,ZM(r,o.oldSnap));else if(i==="child_changed"&&u==="child_added")this.changeMap.set(r,QM(r,e.snapshotNode));else if(i==="child_changed"&&u==="child_changed")this.changeMap.set(r,Ob(r,e.snapshotNode,o.oldSnap));else throw So("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{getCompleteChild(e){return null}getChildAfterChild(e,i,r){return null}}const T1=new w4;class gg{constructor(e,i,r=null){this.writes_=e,this.viewCache_=i,this.optCompleteServerCache_=r}getCompleteChild(e){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(e))return i.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new pg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mg(this.writes_,e,r)}}getChildAfterChild(e,i,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ta(this.viewCache_),u=S4(this.writes_,o,i,1,r,e);return u.length===0?null:u[0]}}function A4(n,e){le(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),le(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function C4(n,e,i,r,o){const u=new T4;let h,p;if(i.type===vi.OVERWRITE){const g=i;g.source.fromUser?h=Sm(n,e,g.path,g.snap,r,o,u):(le(g.source.fromServer,"Unknown source."),p=g.source.tagged||e.serverCache.isFiltered()&&!Ne(g.path),h=jf(n,e,g.path,g.snap,r,o,p,u))}else if(i.type===vi.MERGE){const g=i;g.source.fromUser?h=N4(n,e,g.path,g.children,r,o,u):(le(g.source.fromServer,"Unknown source."),p=g.source.tagged||e.serverCache.isFiltered(),h=Tm(n,e,g.path,g.children,r,o,p,u))}else if(i.type===vi.ACK_USER_WRITE){const g=i;g.revert?h=O4(n,e,g.path,r,o,u):h=I4(n,e,g.path,g.affectedTree,r,o,u)}else if(i.type===vi.LISTEN_COMPLETE)h=x4(n,e,i.path,r,u);else throw So("Unknown operation type: "+i.type);const m=u.getChanges();return R4(e,h,m),{viewCache:h,changes:m}}function R4(n,e,i){const r=e.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),u=ym(n);(i.length>0||!n.eventCache.isFullyInitialized()||o&&!r.getNode().equals(u)||!r.getNode().getPriority().equals(u.getPriority()))&&i.push(XM(ym(e)))}}function w1(n,e,i,r,o,u){const h=e.eventCache;if(Uf(r,i)!=null)return e;{let p,m;if(Ne(i))if(le(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=ta(e),b=g instanceof ze?g:ze.EMPTY_NODE,S=b1(r,b);p=n.filter.updateFullNode(e.eventCache.getNode(),S,u)}else{const g=Em(r,ta(e));p=n.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=ke(i);if(g===".priority"){le(tr(i)===1,"Can't have a priority with additional path components");const b=h.getNode();m=e.serverCache.getNode();const S=jb(r,i,b,m);S!=null?p=n.filter.updatePriority(b,S):p=h.getNode()}else{const b=Je(i);let S;if(h.isCompleteForChild(g)){m=e.serverCache.getNode();const N=jb(r,i,h.getNode(),m);N!=null?S=h.getNode().getImmediateChild(g).updateChild(b,N):S=h.getNode().getImmediateChild(g)}else S=mg(r,g,e.serverCache);S!=null?p=n.filter.updateChild(h.getNode(),g,S,b,o,u):p=h.getNode()}}return Wl(e,p,h.isFullyInitialized()||Ne(i),n.filter.filtersNodes())}}function jf(n,e,i,r,o,u,h,p){const m=e.serverCache;let g;const b=h?n.filter:n.filter.getIndexedFilter();if(Ne(i))g=b.updateFullNode(m.getNode(),r,null);else if(b.filtersNodes()&&!m.isFiltered()){const L=m.getNode().updateChild(i,r);g=b.updateFullNode(m.getNode(),L,null)}else{const L=ke(i);if(!m.isCompleteForPath(i)&&tr(i)>1)return e;const H=Je(i),V=m.getNode().getImmediateChild(L).updateChild(H,r);L===".priority"?g=b.updatePriority(m.getNode(),V):g=b.updateChild(m.getNode(),L,V,H,T1,null)}const S=m1(e,g,m.isFullyInitialized()||Ne(i),b.filtersNodes()),N=new gg(o,S,u);return w1(n,S,i,o,N,p)}function Sm(n,e,i,r,o,u,h){const p=e.eventCache;let m,g;const b=new gg(o,e,u);if(Ne(i))g=n.filter.updateFullNode(e.eventCache.getNode(),r,h),m=Wl(e,g,!0,n.filter.filtersNodes());else{const S=ke(i);if(S===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),r),m=Wl(e,g,p.isFullyInitialized(),p.isFiltered());else{const N=Je(i),L=p.getNode().getImmediateChild(S);let H;if(Ne(N))H=r;else{const $=b.getCompleteChild(S);$!=null?e1(N)===".priority"&&$.getChild(n1(N)).isEmpty()?H=$:H=$.updateChild(N,r):H=ze.EMPTY_NODE}if(L.equals(H))m=e;else{const $=n.filter.updateChild(p.getNode(),S,H,N,b,h);m=Wl(e,$,p.isFullyInitialized(),n.filter.filtersNodes())}}}return m}function zb(n,e){return n.eventCache.isCompleteForChild(e)}function N4(n,e,i,r,o,u,h){let p=e;return r.foreach((m,g)=>{const b=xt(i,m);zb(e,ke(b))&&(p=Sm(n,p,b,g,o,u,h))}),r.foreach((m,g)=>{const b=xt(i,m);zb(e,ke(b))||(p=Sm(n,p,b,g,o,u,h))}),p}function Hb(n,e,i){return i.foreach((r,o)=>{e=e.updateChild(r,o)}),e}function Tm(n,e,i,r,o,u,h,p){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;Ne(i)?g=r:g=new Ze(null).setTree(i,r);const b=e.serverCache.getNode();return g.children.inorderTraversal((S,N)=>{if(b.hasChild(S)){const L=e.serverCache.getNode().getImmediateChild(S),H=Hb(n,L,N);m=jf(n,m,new tt(S),H,o,u,h,p)}}),g.children.inorderTraversal((S,N)=>{const L=!e.serverCache.isCompleteForChild(S)&&N.value===null;if(!b.hasChild(S)&&!L){const H=e.serverCache.getNode().getImmediateChild(S),$=Hb(n,H,N);m=jf(n,m,new tt(S),$,o,u,h,p)}}),m}function I4(n,e,i,r,o,u,h){if(Uf(o,i)!=null)return e;const p=e.serverCache.isFiltered(),m=e.serverCache;if(r.value!=null){if(Ne(i)&&m.isFullyInitialized()||m.isCompleteForPath(i))return jf(n,e,i,m.getNode().getChild(i),o,u,p,h);if(Ne(i)){let g=new Ze(null);return m.getNode().forEachChild(co,(b,S)=>{g=g.set(new tt(b),S)}),Tm(n,e,i,g,o,u,p,h)}else return e}else{let g=new Ze(null);return r.foreach((b,S)=>{const N=xt(i,b);m.isCompleteForPath(N)&&(g=g.set(b,m.getNode().getChild(N)))}),Tm(n,e,i,g,o,u,p,h)}}function x4(n,e,i,r,o){const u=e.serverCache,h=m1(e,u.getNode(),u.isFullyInitialized()||Ne(i),u.isFiltered());return w1(n,h,i,r,T1,o)}function O4(n,e,i,r,o,u){let h;if(Uf(r,i)!=null)return e;{const p=new gg(r,e,o),m=e.eventCache.getNode();let g;if(Ne(i)||ke(i)===".priority"){let b;if(e.serverCache.isFullyInitialized())b=Em(r,ta(e));else{const S=e.serverCache.getNode();le(S instanceof ze,"serverChildren would be complete if leaf node"),b=b1(r,S)}b=b,g=n.filter.updateFullNode(m,b,u)}else{const b=ke(i);let S=mg(r,b,e.serverCache);S==null&&e.serverCache.isCompleteForChild(b)&&(S=m.getImmediateChild(b)),S!=null?g=n.filter.updateChild(m,b,S,Je(i),p,u):e.eventCache.getNode().hasChild(b)?g=n.filter.updateChild(m,b,ze.EMPTY_NODE,Je(i),p,u):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=Em(r,ta(e)),h.isLeafNode()&&(g=n.filter.updateFullNode(g,h,u)))}return h=e.serverCache.isFullyInitialized()||Uf(r,Ke())!=null,Wl(e,g,h,n.filter.filtersNodes())}}function k4(n,e){const i=ta(n.viewCache_);return i&&(n.query._queryParams.loadsAllData()||!Ne(e)&&!i.getImmediateChild(ke(e)).isEmpty())?i.getChild(e):null}function Bb(n,e,i,r){e.type===vi.MERGE&&e.source.queryId!==null&&(le(ta(n.viewCache_),"We should always have a full cache before handling merges"),le(ym(n.viewCache_),"Missing event cache, even though we have a server cache"));const o=n.viewCache_,u=C4(n.processor_,o,e,i,r);return A4(n.processor_,u.viewCache),le(u.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=u.viewCache,D4(n,u.changes,u.viewCache.eventCache.getNode())}function D4(n,e,i,r){const o=n.eventRegistrations_;return a4(n.eventGenerator_,e,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fb;function M4(n){le(!Fb,"__referenceConstructor has already been defined"),Fb=n}function vg(n,e,i,r){const o=e.source.queryId;if(o!==null){const u=n.views.get(o);return le(u!=null,"SyncTree gave us an op for an invalid query."),Bb(u,e,i,r)}else{let u=[];for(const h of n.views.values())u=u.concat(Bb(h,e,i,r));return u}}function yg(n,e){let i=null;for(const r of n.views.values())i=i||k4(r,e);return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qb;function L4(n){le(!qb,"__referenceConstructor has already been defined"),qb=n}class Vb{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ze(null),this.pendingWriteTree_=E4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function P4(n,e,i,r,o){return c4(n.pendingWriteTree_,e,i,r,o),o?sh(n,new ea(f1(),e,i)):[]}function ao(n,e,i=!1){const r=f4(n.pendingWriteTree_,e);if(h4(n.pendingWriteTree_,e)){let u=new Ze(null);return r.snap!=null?u=u.set(Ke(),!0):Pn(r.children,h=>{u=u.set(new tt(h),!0)}),sh(n,new Pf(r.path,u,i))}else return[]}function ih(n,e,i){return sh(n,new ea(h1(),e,i))}function U4(n,e,i){const r=Ze.fromObject(i);return sh(n,new au(h1(),e,r))}function j4(n,e,i,r){const o=N1(n,r);if(o!=null){const u=I1(o),h=u.path,p=u.queryId,m=Mn(h,e),g=new ea(d1(p),m,i);return x1(n,h,g)}else return[]}function z4(n,e,i,r){const o=N1(n,r);if(o){const u=I1(o),h=u.path,p=u.queryId,m=Mn(h,e),g=Ze.fromObject(i),b=new au(d1(p),m,g);return x1(n,h,b)}else return[]}function A1(n,e,i){const o=n.pendingWriteTree_,u=n.syncPointTree_.findOnPath(e,(h,p)=>{const m=Mn(h,e),g=yg(p,m);if(g)return g});return _1(o,e,u,i,!0)}function sh(n,e){return C1(e,n.syncPointTree_,null,v1(n.pendingWriteTree_,Ke()))}function C1(n,e,i,r){if(Ne(n.path))return R1(n,e,i,r);{const o=e.get(Ke());i==null&&o!=null&&(i=yg(o,Ke()));let u=[];const h=ke(n.path),p=n.operationForChild(h),m=e.children.get(h);if(m&&p){const g=i?i.getImmediateChild(h):null,b=E1(r,h);u=u.concat(C1(p,m,g,b))}return o&&(u=u.concat(vg(o,n,r,i))),u}}function R1(n,e,i,r){const o=e.get(Ke());i==null&&o!=null&&(i=yg(o,Ke()));let u=[];return e.children.inorderTraversal((h,p)=>{const m=i?i.getImmediateChild(h):null,g=E1(r,h),b=n.operationForChild(h);b&&(u=u.concat(R1(b,p,m,g)))}),o&&(u=u.concat(vg(o,n,r,i))),u}function N1(n,e){return n.tagToQueryMap.get(e)}function I1(n){const e=n.indexOf("$");return le(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new tt(n.substr(0,e))}}function x1(n,e,i){const r=n.syncPointTree_.get(e);le(r,"Missing sync point for query tag that we're tracking");const o=v1(n.pendingWriteTree_,e);return vg(r,i,o,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.node_=e}getImmediateChild(e){const i=this.node_.getImmediateChild(e);return new _g(i)}node(){return this.node_}}class bg{constructor(e,i){this.syncTree_=e,this.path_=i}getImmediateChild(e){const i=xt(this.path_,e);return new bg(this.syncTree_,i)}node(){return A1(this.syncTree_,this.path_)}}const H4=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Gb=function(n,e,i){if(!n||typeof n!="object")return n;if(le(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return B4(n[".sv"],e,i);if(typeof n[".sv"]=="object")return F4(n[".sv"],e);le(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},B4=function(n,e,i){switch(n){case"timestamp":return i.timestamp;default:le(!1,"Unexpected server value: "+n)}},F4=function(n,e,i){n.hasOwnProperty("increment")||le(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&le(!1,"Unexpected increment value: "+r);const o=e.node();if(le(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const h=o.getValue();return typeof h!="number"?r:h+r},q4=function(n,e,i,r){return Eg(e,new bg(i,n),r)},V4=function(n,e,i){return Eg(n,new _g(e),i)};function Eg(n,e,i){const r=n.getPriority().val(),o=Gb(r,e.getImmediateChild(".priority"),i);let u;if(n.isLeafNode()){const h=n,p=Gb(h.getValue(),e,i);return p!==h.getValue()||o!==h.getPriority().val()?new Nt(p,qt(o)):n}else{const h=n;return u=h,o!==h.getPriority().val()&&(u=u.updatePriority(new Nt(o))),h.forEachChild(Vt,(p,m)=>{const g=Eg(m,e.getImmediateChild(p),i);g!==m&&(u=u.updateImmediateChild(p,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e="",i=null,r={children:{},childCount:0}){this.name=e,this.parent=i,this.node=r}}function Tg(n,e){let i=e instanceof tt?e:new tt(e),r=n,o=ke(i);for(;o!==null;){const u=go(r.node.children,o)||{children:{},childCount:0};r=new Sg(o,r,u),i=Je(i),o=ke(i)}return r}function Ao(n){return n.node.value}function O1(n,e){n.node.value=e,wm(n)}function k1(n){return n.node.childCount>0}function G4(n){return Ao(n)===void 0&&!k1(n)}function rh(n,e){Pn(n.node.children,(i,r)=>{e(new Sg(i,n,r))})}function D1(n,e,i,r){i&&e(n),rh(n,o=>{D1(o,e,!0)})}function Y4(n,e,i){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Su(n){return new tt(n.parent===null?n.name:Su(n.parent)+"/"+n.name)}function wm(n){n.parent!==null&&$4(n.parent,n.name,n)}function $4(n,e,i){const r=G4(i),o=ds(n.node.children,e);r&&o?(delete n.node.children[e],n.node.childCount--,wm(n)):!r&&!o&&(n.node.children[e]=i.node,n.node.childCount++,wm(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4=/[\[\].#$\/\u0000-\u001F\u007F]/,W4=/[\[\].#$\u0000-\u001F\u007F]/,zp=10*1024*1024,M1=function(n){return typeof n=="string"&&n.length!==0&&!K4.test(n)},X4=function(n){return typeof n=="string"&&n.length!==0&&!W4.test(n)},Q4=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),X4(n)},L1=function(n,e,i){const r=i instanceof tt?new xM(i,n):i;if(e===void 0)throw new Error(n+"contains undefined "+Gr(r));if(typeof e=="function")throw new Error(n+"contains a function "+Gr(r)+" with contents = "+e.toString());if(DT(e))throw new Error(n+"contains "+e.toString()+" "+Gr(r));if(typeof e=="string"&&e.length>zp/3&&Jf(e)>zp)throw new Error(n+"contains a string greater than "+zp+" utf8 bytes "+Gr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,u=!1;if(Pn(e,(h,p)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(u=!0,!M1(h)))throw new Error(n+" contains an invalid key ("+h+") "+Gr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);OM(r,h),L1(n,p,r),kM(r)}),o&&u)throw new Error(n+' contains ".value" child '+Gr(r)+" in addition to actual children.")}},Z4=function(n,e){const i=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!M1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!Q4(i))throw new Error(Dx(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function eL(n,e){let i=null;for(let r=0;r<e.length;r++){const o=e[r],u=o.getPath();i!==null&&!i1(u,i.path)&&(n.eventLists_.push(i),i=null),i===null&&(i={events:[],path:u}),i.events.push(o)}i&&n.eventLists_.push(i)}function la(n,e,i){eL(n,i),tL(n,r=>Kn(r,e)||Kn(e,r))}function tL(n,e){n.recursionDepth_++;let i=!0;for(let r=0;r<n.eventLists_.length;r++){const o=n.eventLists_[r];if(o){const u=o.path;e(u)?(nL(n.eventLists_[r]),n.eventLists_[r]=null):i=!1}}i&&(n.eventLists_=[]),n.recursionDepth_--}function nL(n){for(let e=0;e<n.events.length;e++){const i=n.events[e];if(i!==null){n.events[e]=null;const r=i.getEventRunner();$l&&Ft("event: "+i.toString()),bu(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL="repo_interrupt",sL=25;class rL{constructor(e,i,r,o){this.repoInfo_=e,this.forceRestClient_=i,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new J4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lf(),this.transactionQueueTree_=new Sg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aL(n,e,i){if(n.stats_=ug(n.repoInfo_),n.forceRestClient_||tM())n.server_=new Mf(n.repoInfo_,(r,o,u,h)=>{Yb(n,r,o,u,h)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>$b(n,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(i)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new is(n.repoInfo_,e,(r,o,u,h)=>{Yb(n,r,o,u,h)},r=>{$b(n,r)},r=>{lL(n,r)},n.authTokenProvider_,n.appCheckProvider_,i),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=aM(n.repoInfo_,()=>new r4(n.stats_,n.server_)),n.infoData_=new e4,n.infoSyncTree_=new Vb({startListening:(r,o,u,h)=>{let p=[];const m=n.infoData_.getNode(r._path);return m.isEmpty()||(p=ih(n.infoSyncTree_,r._path,m),setTimeout(()=>{h("ok")},0)),p},stopListening:()=>{}}),wg(n,"connected",!1),n.serverSyncTree_=new Vb({startListening:(r,o,u,h)=>(n.server_.listen(r,u,o,(p,m)=>{const g=h(p,m);la(n.eventQueue_,r._path,g)}),[]),stopListening:(r,o)=>{n.server_.unlisten(r,o)}})}function oL(n){const i=n.infoData_.getNode(new tt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function P1(n){return H4({timestamp:oL(n)})}function Yb(n,e,i,r,o){n.dataUpdateCount++;const u=new tt(e);i=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,i):i;let h=[];if(o)if(r){const m=Af(i,g=>qt(g));h=z4(n.serverSyncTree_,u,m,o)}else{const m=qt(i);h=j4(n.serverSyncTree_,u,m,o)}else if(r){const m=Af(i,g=>qt(g));h=U4(n.serverSyncTree_,u,m)}else{const m=qt(i);h=ih(n.serverSyncTree_,u,m)}let p=u;h.length>0&&(p=Cg(n,u)),la(n.eventQueue_,p,h)}function $b(n,e){wg(n,"connected",e),e===!1&&cL(n)}function lL(n,e){Pn(e,(i,r)=>{wg(n,i,r)})}function wg(n,e,i){const r=new tt("/.info/"+e),o=qt(i);n.infoData_.updateSnapshot(r,o);const u=ih(n.infoSyncTree_,r,o);la(n.eventQueue_,r,u)}function uL(n){return n.nextWriteId_++}function cL(n){U1(n,"onDisconnectEvents");const e=P1(n),i=Lf();vm(n.onDisconnect_,Ke(),(o,u)=>{const h=q4(o,u,n.serverSyncTree_,e);c1(i,o,h)});let r=[];vm(i,Ke(),(o,u)=>{r=r.concat(ih(n.serverSyncTree_,o,u));const h=pL(n,o);Cg(n,h)}),n.onDisconnect_=Lf(),la(n.eventQueue_,Ke(),r)}function fL(n){n.persistentConnection_&&n.persistentConnection_.interrupt(iL)}function U1(n,...e){let i="";n.persistentConnection_&&(i=n.persistentConnection_.id+":"),Ft(i,...e)}function j1(n,e,i){return A1(n.serverSyncTree_,e,i)||ze.EMPTY_NODE}function Ag(n,e=n.transactionQueueTree_){if(e||ah(n,e),Ao(e)){const i=H1(n,e);le(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&hL(n,Su(e),i)}else k1(e)&&rh(e,i=>{Ag(n,i)})}function hL(n,e,i){const r=i.map(g=>g.currentWriteId),o=j1(n,e,r);let u=o;const h=o.hash();for(let g=0;g<i.length;g++){const b=i[g];le(b.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),b.status=1,b.retryCount++;const S=Mn(e,b.path);u=u.updateChild(S,b.currentOutputSnapshotRaw)}const p=u.val(!0),m=e;n.server_.put(m.toString(),p,g=>{U1(n,"transaction put response",{path:m.toString(),status:g});let b=[];if(g==="ok"){const S=[];for(let N=0;N<i.length;N++)i[N].status=2,b=b.concat(ao(n.serverSyncTree_,i[N].currentWriteId)),i[N].onComplete&&S.push(()=>i[N].onComplete(null,!0,i[N].currentOutputSnapshotResolved)),i[N].unwatcher();ah(n,Tg(n.transactionQueueTree_,e)),Ag(n,n.transactionQueueTree_),la(n.eventQueue_,e,b);for(let N=0;N<S.length;N++)bu(S[N])}else{if(g==="datastale")for(let S=0;S<i.length;S++)i[S].status===3?i[S].status=4:i[S].status=0;else{vn("transaction at "+m.toString()+" failed: "+g);for(let S=0;S<i.length;S++)i[S].status=4,i[S].abortReason=g}Cg(n,e)}},h)}function Cg(n,e){const i=z1(n,e),r=Su(i),o=H1(n,i);return dL(n,o,r),r}function dL(n,e,i){if(e.length===0)return;const r=[];let o=[];const h=e.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<e.length;p++){const m=e[p],g=Mn(i,m.path);let b=!1,S;if(le(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)b=!0,S=m.abortReason,o=o.concat(ao(n.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=sL)b=!0,S="maxretry",o=o.concat(ao(n.serverSyncTree_,m.currentWriteId,!0));else{const N=j1(n,m.path,h);m.currentInputSnapshot=N;const L=e[p].update(N.val());if(L!==void 0){L1("transaction failed: Data returned ",L,m.path);let H=qt(L);typeof L=="object"&&L!=null&&ds(L,".priority")||(H=H.updatePriority(N.getPriority()));const V=m.currentWriteId,J=P1(n),Z=V4(H,N,J);m.currentOutputSnapshotRaw=H,m.currentOutputSnapshotResolved=Z,m.currentWriteId=uL(n),h.splice(h.indexOf(V),1),o=o.concat(P4(n.serverSyncTree_,m.path,Z,m.currentWriteId,m.applyLocally)),o=o.concat(ao(n.serverSyncTree_,V,!0))}else b=!0,S="nodata",o=o.concat(ao(n.serverSyncTree_,m.currentWriteId,!0))}la(n.eventQueue_,i,o),o=[],b&&(e[p].status=2,(function(N){setTimeout(N,Math.floor(0))})(e[p].unwatcher),e[p].onComplete&&(S==="nodata"?r.push(()=>e[p].onComplete(null,!1,e[p].currentInputSnapshot)):r.push(()=>e[p].onComplete(new Error(S),!1,null))))}ah(n,n.transactionQueueTree_);for(let p=0;p<r.length;p++)bu(r[p]);Ag(n,n.transactionQueueTree_)}function z1(n,e){let i,r=n.transactionQueueTree_;for(i=ke(e);i!==null&&Ao(r)===void 0;)r=Tg(r,i),e=Je(e),i=ke(e);return r}function H1(n,e){const i=[];return B1(n,e,i),i.sort((r,o)=>r.order-o.order),i}function B1(n,e,i){const r=Ao(e);if(r)for(let o=0;o<r.length;o++)i.push(r[o]);rh(e,o=>{B1(n,o,i)})}function ah(n,e){const i=Ao(e);if(i){let r=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[r]=i[o],r++);i.length=r,O1(e,i.length>0?i:void 0)}rh(e,r=>{ah(n,r)})}function pL(n,e){const i=Su(z1(n,e)),r=Tg(n.transactionQueueTree_,e);return Y4(r,o=>{Hp(n,o)}),Hp(n,r),D1(r,o=>{Hp(n,o)}),i}function Hp(n,e){const i=Ao(e);if(i){const r=[];let o=[],u=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(le(u===h-1,"All SENT items should be at beginning of queue."),u=h,i[h].status=3,i[h].abortReason="set"):(le(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(ao(n.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&r.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));u===-1?O1(e,void 0):i.length=u+1,la(n.eventQueue_,Su(e),o);for(let h=0;h<r.length;h++)bu(r[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(n){let e="";const i=n.split("/");for(let r=0;r<i.length;r++)if(i[r].length>0){let o=i[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function gL(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const i of n.split("&")){if(i.length===0)continue;const r=i.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):vn(`Invalid query segment '${i}' in query '${n}'`)}return e}const Kb=function(n,e){const i=vL(n),r=i.namespace;i.domain==="firebase.com"&&us(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&i.domain!=="localhost"&&us("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||$D();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new GT(i.host,i.secure,r,o,e,"",r!==i.subdomain),path:new tt(i.pathString)}},vL=function(n){let e="",i="",r="",o="",u="",h=!0,p="https",m=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(p=n.substring(0,g-1),n=n.substring(g+2));let b=n.indexOf("/");b===-1&&(b=n.length);let S=n.indexOf("?");S===-1&&(S=n.length),e=n.substring(0,Math.min(b,S)),b<S&&(o=mL(n.substring(b,S)));const N=gL(n.substring(Math.min(n.length,S)));g=e.indexOf(":"),g>=0?(h=p==="https"||p==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const L=e.slice(0,g);if(L.toLowerCase()==="localhost")i="localhost";else if(L.split(".").length<=2)i=L;else{const H=e.indexOf(".");r=e.substring(0,H).toLowerCase(),i=e.substring(H+1),u=r}"ns"in N&&(u=N.ns)}return{host:e,port:m,domain:i,subdomain:r,secure:h,scheme:p,pathString:o,namespace:u}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,i,r,o){this._repo=e,this._path=i,this._queryParams=r,this._orderByCalled=o}get key(){return Ne(this._path)?null:e1(this._path)}get ref(){return new Co(this._repo,this._path)}get _queryIdentifier(){const e=Db(this._queryParams),i=og(e);return i==="{}"?"default":i}get _queryObject(){return Db(this._queryParams)}isEqual(e){if(e=jn(e),!(e instanceof Rg))return!1;const i=this._repo===e._repo,r=i1(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return i&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+IM(this._path)}}class Co extends Rg{constructor(e,i){super(e,i,new dg,!1)}get parent(){const e=n1(this._path);return e===null?null:new Co(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}M4(Co);L4(Co);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL="FIREBASE_DATABASE_EMULATOR_HOST",Am={};let _L=!1;function bL(n,e,i,r){n.repoInfo_=new GT(`${e}:${i}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function EL(n,e,i,r,o){let u=r||n.options.databaseURL;u===void 0&&(n.options.projectId||us("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ft("Using default host for project ",n.options.projectId),u=`${n.options.projectId}-default-rtdb.firebaseio.com`);let h=Kb(u,o),p=h.repoInfo,m;typeof process<"u"&&pb&&(m=pb[yL]),m?(u=`http://${m}?ns=${p.namespace}`,h=Kb(u,o),p=h.repoInfo):h.repoInfo.secure;const g=new iM(n.name,n.options,e);Z4("Invalid Firebase Database URL",h),Ne(h.path)||us("Database URL must point to the root of a Firebase Database (not including a child path).");const b=TL(p,n,g,new nM(n.name,i));return new wL(b,n)}function SL(n,e){const i=Am[e];(!i||i[n.key]!==n)&&us(`Database ${e}(${n.repoInfo_}) has already been deleted.`),fL(n),delete i[n.key]}function TL(n,e,i,r){let o=Am[e.name];o||(o={},Am[e.name]=o);let u=o[n.toURLString()];return u&&us("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new rL(n,_L,i,r),o[n.toURLString()]=u,u}class wL{constructor(e,i){this._repoInternal=e,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Co(this._repo,Ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&us("Cannot call "+e+" on a deleted database.")}}function AL(n=vu(),e){const i=ps(n,"database").getImmediate({identifier:e});if(!i._instanceStarted){const r=Qm("database");r&&CL(i,...r)}return i}function CL(n,e,i,r={}){n=jn(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&us("Cannot call useEmulator() after instance has already been initialized.");const o=n._repoInternal;let u;if(o.repoInfo_.nodeAdmin)r.mockUserToken&&us('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new pf(pf.OWNER);else if(r.mockUserToken){const h=typeof r.mockUserToken=="string"?r.mockUserToken:Jm(r.mockUserToken,n.app.options.projectId);u=new pf(h)}bL(o,e,i,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(n){BD(nr),Ln(new yn("database",(e,{instanceIdentifier:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return EL(r,o,u,i)},"PUBLIC").setMultipleInstances(!0)),Gt(mb,gb,n),Gt(mb,gb,"esm2017")}is.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};is.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};RL();function Ng(n,e){var i={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(i[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(i[r[o]]=n[r[o]]);return i}function F1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NL=F1,q1=new aa("auth","Firebase",F1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=new gu("@firebase/auth");function IL(n,...e){zf.logLevel<=Ue.WARN&&zf.warn(`Auth (${nr}): ${n}`,...e)}function mf(n,...e){zf.logLevel<=Ue.ERROR&&zf.error(`Auth (${nr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(n,...e){throw Ig(n,...e)}function yi(n,...e){return Ig(n,...e)}function V1(n,e,i){const r=Object.assign(Object.assign({},NL()),{[e]:i});return new aa("auth","Firebase",r).create(e,{appName:n.name})}function ss(n){return V1(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ig(n,...e){if(typeof n!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(i,...r)}return q1.create(n,...e)}function ye(n,e,...i){if(!n)throw Ig(e,...i)}function Ji(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mf(e),new Error(e)}function cs(n,e){n||Ji(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function xL(){return Wb()==="http:"||Wb()==="https:"}function Wb(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xL()||KS()||"connection"in navigator)?navigator.onLine:!0}function kL(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,i){this.shortDelay=e,this.longDelay=i,cs(i>e,"Short delay should be less than long delay!"),this.isMobile=eg()||WS()}get(){return OL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(n,e){cs(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ji("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ji("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ji("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=new Tu(3e4,6e4);function ir(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function sr(n,e,i,r,o={}){return Y1(n,o,async()=>{let u={},h={};r&&(e==="GET"?h=r:u={body:JSON.stringify(r)});const p=To(Object.assign({key:n.config.apiKey},h)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:m},u);return bx()||(g.referrerPolicy="no-referrer"),G1.fetch()($1(n,n.config.apiHost,i,p),g)})}async function Y1(n,e,i){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},DL),e);try{const o=new PL(n),u=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw of(n,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw of(n,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw of(n,"email-already-in-use",h);if(m==="USER_DISABLED")throw of(n,"user-disabled",h);const b=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw V1(n,b,g);Jn(n,b)}}catch(o){if(o instanceof Un)throw o;Jn(n,"network-request-failed",{message:String(o)})}}async function wu(n,e,i,r,o={}){const u=await sr(n,e,i,r,o);return"mfaPendingCredential"in u&&Jn(n,"multi-factor-auth-required",{_serverResponse:u}),u}function $1(n,e,i,r){const o=`${e}${i}?${r}`;return n.config.emulator?xg(n.config,o):`${n.config.apiScheme}://${o}`}function LL(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(yi(this.auth,"network-request-failed")),ML.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function of(n,e,i){const r={appName:n.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=yi(n,e,r);return o.customData._tokenResponse=i,o}function Xb(n){return n!==void 0&&n.enterprise!==void 0}class UL{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return LL(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function jL(n,e){return sr(n,"GET","/v2/recaptchaConfig",ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zL(n,e){return sr(n,"POST","/v1/accounts:delete",e)}async function K1(n,e){return sr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HL(n,e=!1){const i=jn(n),r=await i.getIdToken(e),o=Og(r);ye(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:r,authTime:Ql(Bp(o.auth_time)),issuedAtTime:Ql(Bp(o.iat)),expirationTime:Ql(Bp(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Bp(n){return Number(n)*1e3}function Og(n){const[e,i,r]=n.split(".");if(e===void 0||i===void 0||r===void 0)return mf("JWT malformed, contained fewer than 3 sections"),null;try{const o=wf(i);return o?JSON.parse(o):(mf("Failed to decode base64 JWT payload"),null)}catch(o){return mf("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Qb(n){const e=Og(n);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ou(n,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof Un&&BL(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function BL({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ql(this.lastLoginAt),this.creationTime=Ql(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(n){var e;const i=n.auth,r=await n.getIdToken(),o=await ou(n,K1(i,{idToken:r}));ye(o?.users.length,i,"internal-error");const u=o.users[0];n._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?W1(u.providerUserInfo):[],p=VL(n.providerData,h),m=n.isAnonymous,g=!(n.email&&u.passwordHash)&&!p?.length,b=m?g:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new Rm(u.createdAt,u.lastLoginAt),isAnonymous:b};Object.assign(n,S)}async function qL(n){const e=jn(n);await Hf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VL(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function W1(n){return n.map(e=>{var{providerId:i}=e,r=Ng(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GL(n,e){const i=await Y1(n,{},async()=>{const r=To({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=n.config,h=$1(n,o,"/v1/token",`key=${u}`),p=await n._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",G1.fetch()(h,{method:"POST",headers:p,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function YL(n,e){return sr(n,"POST","/v2/accounts:revokeToken",ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const i=Qb(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:o,expiresIn:u}=await GL(e,i);this.updateTokensAndExpiration(r,o,Number(u))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:o,expirationTime:u}=i,h=new fo;return r&&(ye(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ye(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return Ji("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(n,e){ye(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class es{constructor(e){var{uid:i,auth:r,stsTokenManager:o}=e,u=Ng(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Rm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const i=await ou(this,this.stsTokenManager.getToken(this.auth,e));return ye(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return HL(this,e)}reload(){return qL(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new es(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await Hf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gi(this.auth.app))return Promise.reject(ss(this.auth));const e=await this.getIdToken();return await ou(this,zL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,o,u,h,p,m,g,b;const S=(r=i.displayName)!==null&&r!==void 0?r:void 0,N=(o=i.email)!==null&&o!==void 0?o:void 0,L=(u=i.phoneNumber)!==null&&u!==void 0?u:void 0,H=(h=i.photoURL)!==null&&h!==void 0?h:void 0,$=(p=i.tenantId)!==null&&p!==void 0?p:void 0,V=(m=i._redirectEventId)!==null&&m!==void 0?m:void 0,J=(g=i.createdAt)!==null&&g!==void 0?g:void 0,Z=(b=i.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:ee,emailVerified:ce,isAnonymous:ne,providerData:be,stsTokenManager:D}=i;ye(ee&&D,e,"internal-error");const A=fo.fromJSON(this.name,D);ye(typeof ee=="string",e,"internal-error"),Vs(S,e.name),Vs(N,e.name),ye(typeof ce=="boolean",e,"internal-error"),ye(typeof ne=="boolean",e,"internal-error"),Vs(L,e.name),Vs(H,e.name),Vs($,e.name),Vs(V,e.name),Vs(J,e.name),Vs(Z,e.name);const C=new es({uid:ee,auth:e,email:N,emailVerified:ce,displayName:S,isAnonymous:ne,photoURL:H,phoneNumber:L,tenantId:$,stsTokenManager:A,createdAt:J,lastLoginAt:Z});return be&&Array.isArray(be)&&(C.providerData=be.map(k=>Object.assign({},k))),V&&(C._redirectEventId=V),C}static async _fromIdTokenResponse(e,i,r=!1){const o=new fo;o.updateFromServerResponse(i);const u=new es({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await Hf(u),u}static async _fromGetAccountInfoResponse(e,i,r){const o=i.users[0];ye(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?W1(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,p=new fo;p.updateFromIdToken(r);const m=new es({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Rm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new Map;function ts(n){cs(n instanceof Function,"Expected a class definition");let e=Zb.get(n);return e?(cs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Zb.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}X1.type="NONE";const Jb=X1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(n,e,i){return`firebase:${n}:${e}:${i}`}class ho{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:o,name:u}=this.auth;this.fullUserKey=gf(this.userKey,o.apiKey,u),this.fullPersistenceKey=gf("persistence",o.apiKey,u),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?es._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new ho(ts(Jb),e,r);const o=(await Promise.all(i.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||ts(Jb);const h=gf(r,e.config.apiKey,e.name);let p=null;for(const g of i)try{const b=await g._get(h);if(b){const S=es._fromJSON(e,b);g!==u&&(p=S),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new ho(u,e,r):(u=m[0],p&&await u._set(h,p.toJSON()),await Promise.all(i.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new ho(u,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ew(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Q1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nw(e))return"Blackberry";if(iw(e))return"Webos";if(Z1(e))return"Safari";if((e.includes("chrome/")||J1(e))&&!e.includes("edge/"))return"Chrome";if(tw(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(i);if(r?.length===2)return r[1]}return"Other"}function Q1(n=Xt()){return/firefox\//i.test(n)}function Z1(n=Xt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function J1(n=Xt()){return/crios\//i.test(n)}function ew(n=Xt()){return/iemobile/i.test(n)}function tw(n=Xt()){return/android/i.test(n)}function nw(n=Xt()){return/blackberry/i.test(n)}function iw(n=Xt()){return/webos/i.test(n)}function kg(n=Xt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $L(n=Xt()){var e;return kg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KL(){return Ex()&&document.documentMode===10}function sw(n=Xt()){return kg(n)||tw(n)||iw(n)||nw(n)||/windows phone/i.test(n)||ew(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n,e=[]){let i;switch(n){case"Browser":i=eE(Xt());break;case"Worker":i=`${eE(Xt())}-${n}`;break;default:i=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${nr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=u=>new Promise((h,p)=>{try{const m=e(u);h(m)}catch(m){p(m)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XL(n,e={}){return sr(n,"GET","/v2/passwordPolicy",ir(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL=6;class ZL{constructor(e){var i,r,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:QL,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,r,o,u,h,p;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(i=m.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(r=m.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(u=m.containsUppercaseLetter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(p=m.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),m}validatePasswordLengthOptions(e,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=e.length>=r),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,i,r,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(e,i,r,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tE(this),this.idTokenSubscription=new tE(this),this.beforeStateQueue=new WL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=ts(i)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await K1(this,{idToken:e}),r=await es._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(gi(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,p=o?._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===p)&&m?.user&&(o=m.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Hf(e)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gi(this.app))return Promise.reject(ss(this));const i=e?jn(e):null;return i&&ye(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gi(this.app)?Promise.reject(ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gi(this.app)?Promise.reject(ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ts(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XL(this),i=new ZL(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new aa("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await YL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&ts(e)||this._popupRedirectResolver;ye(i,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[ts(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,o){if(this._deleted)return()=>{};const u=typeof i=="function"?i:i.next.bind(i);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof i=="function"){const m=e.addObserver(i,r,o);return()=>{h=!0,m()}}else{const m=e.addObserver(i);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var e;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i?.error&&IL(`Error while retrieving App Check token: ${i.error}`),i?.token}}function ua(n){return jn(n)}class tE{constructor(e){this.auth=e,this.observer=null,this.addObserver=xx(i=>this.observer=i)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function e9(n){oh=n}function aw(n){return oh.loadJS(n)}function t9(){return oh.recaptchaEnterpriseScript}function n9(){return oh.gapiScript}function i9(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const s9="recaptcha-enterprise",r9="NO_RECAPTCHA";class a9{constructor(e){this.type=s9,this.auth=ua(e)}async verify(e="verify",i=!1){async function r(u){if(!i){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{jL(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new UL(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,h,p){const m=window.grecaptcha;Xb(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(r9)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((u,h)=>{r(this.auth).then(p=>{if(!i&&Xb(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=t9();m.length!==0&&(m+=p),aw(m).then(()=>{o(p,u,h)}).catch(g=>{h(g)})}}).catch(p=>{h(p)})})}}async function nE(n,e,i,r=!1){const o=new a9(n);let u;try{u=await o.verify(i)}catch{u=await o.verify(i,!0)}const h=Object.assign({},e);return r?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Nm(n,e,i,r){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await nE(n,e,i,i==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await nE(n,e,i,i==="getOobCode");return r(n,h)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o9(n,e){const i=ps(n,"auth");if(i.isInitialized()){const o=i.getImmediate(),u=i.getOptions();if(iu(u,e??{}))return o;Jn(o,"already-initialized")}return i.initialize({options:e})}function l9(n,e){const i=e?.persistence||[],r=(Array.isArray(i)?i:[i]).map(ts);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function u9(n,e,i){const r=ua(n);ye(r._canInitEmulator,r,"emulator-config-failed"),ye(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,u=ow(e),{host:h,port:p}=c9(e),m=p===null?"":`:${p}`;r.config.emulator={url:`${u}//${h}${m}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),f9()}function ow(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function c9(n){const e=ow(n),i=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const u=o[1];return{host:u,port:iE(r.substr(u.length+1))}}else{const[u,h]=r.split(":");return{host:u,port:iE(h)}}}function iE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function f9(){function n(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return Ji("not implemented")}_getIdTokenResponse(e){return Ji("not implemented")}_linkToIdToken(e,i){return Ji("not implemented")}_getReauthenticationResolver(e){return Ji("not implemented")}}async function h9(n,e){return sr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d9(n,e){return wu(n,"POST","/v1/accounts:signInWithPassword",ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p9(n,e){return wu(n,"POST","/v1/accounts:signInWithEmailLink",ir(n,e))}async function m9(n,e){return wu(n,"POST","/v1/accounts:signInWithEmailLink",ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends Dg{constructor(e,i,r,o=null){super("password",r),this._email=e,this._password=i,this._tenantId=o}static _fromEmailAndPassword(e,i){return new lu(e,i,"password")}static _fromEmailAndCode(e,i,r=null){return new lu(e,i,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nm(e,i,"signInWithPassword",d9);case"emailLink":return p9(e,{email:this._email,oobCode:this._password});default:Jn(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":const r={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nm(e,r,"signUpPassword",h9);case"emailLink":return m9(e,{idToken:i,email:this._email,oobCode:this._password});default:Jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(n,e){return wu(n,"POST","/v1/accounts:signInWithIdp",ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g9="http://localhost";class na extends Dg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new na(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):Jn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=i,u=Ng(i,["providerId","signInMethod"]);if(!r||!o)return null;const h=new na(r,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const i=this.buildRequest();return po(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,po(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,po(e,i)}buildRequest(){const e={requestUri:g9,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=To(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v9(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function y9(n){const e=Fl(ql(n)).link,i=e?Fl(ql(e)).deep_link_id:null,r=Fl(ql(n)).deep_link_id;return(r?Fl(ql(r)).link:null)||r||i||e||n}class Mg{constructor(e){var i,r,o,u,h,p;const m=Fl(ql(e)),g=(i=m.apiKey)!==null&&i!==void 0?i:null,b=(r=m.oobCode)!==null&&r!==void 0?r:null,S=v9((o=m.mode)!==null&&o!==void 0?o:null);ye(g&&b&&S,"argument-error"),this.apiKey=g,this.operation=S,this.code=b,this.continueUrl=(u=m.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=m.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(p=m.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const i=y9(e);try{return new Mg(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.providerId=Ro.PROVIDER_ID}static credential(e,i){return lu._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const r=Mg.parseLink(i);return ye(r,"argument-error"),lu._fromEmailAndCode(e,r.code,r.tenantId)}}Ro.PROVIDER_ID="password";Ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends lw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends Au{constructor(){super("facebook.com")}static credential(e){return na._fromParams({providerId:Gs.PROVIDER_ID,signInMethod:Gs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gs.credentialFromTaggedObject(e)}static credentialFromError(e){return Gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gs.credential(e.oauthAccessToken)}catch{return null}}}Gs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends Au{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return na._fromParams({providerId:Ys.PROVIDER_ID,signInMethod:Ys.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Ys.credentialFromTaggedObject(e)}static credentialFromError(e){return Ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return Ys.credential(i,r)}catch{return null}}}Ys.GOOGLE_SIGN_IN_METHOD="google.com";Ys.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends Au{constructor(){super("github.com")}static credential(e){return na._fromParams({providerId:$s.PROVIDER_ID,signInMethod:$s.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $s.credentialFromTaggedObject(e)}static credentialFromError(e){return $s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $s.credential(e.oauthAccessToken)}catch{return null}}}$s.GITHUB_SIGN_IN_METHOD="github.com";$s.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Au{constructor(){super("twitter.com")}static credential(e,i){return na._fromParams({providerId:Ks.PROVIDER_ID,signInMethod:Ks.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Ks.credentialFromTaggedObject(e)}static credentialFromError(e){return Ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return Ks.credential(i,r)}catch{return null}}}Ks.TWITTER_SIGN_IN_METHOD="twitter.com";Ks.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _9(n,e){return wu(n,"POST","/v1/accounts:signUp",ir(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,o=!1){const u=await es._fromIdTokenResponse(e,r,o),h=sE(r);return new ia({user:u,providerId:h,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const o=sE(r);return new ia({user:e,providerId:o,_tokenResponse:r,operationType:i})}}function sE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends Un{constructor(e,i,r,o){var u;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Bf.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,o){return new Bf(e,i,r,o)}}function uw(n,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(n):i._getIdTokenResponse(n)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Bf._fromErrorAndOperation(n,u,e,r):u})}async function b9(n,e,i=!1){const r=await ou(n,e._linkToIdToken(n.auth,await n.getIdToken()),i);return ia._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E9(n,e,i=!1){const{auth:r}=n;if(gi(r.app))return Promise.reject(ss(r));const o="reauthenticate";try{const u=await ou(n,uw(r,o,e,n),i);ye(u.idToken,r,"internal-error");const h=Og(u.idToken);ye(h,r,"internal-error");const{sub:p}=h;return ye(n.uid===p,r,"user-mismatch"),ia._forOperation(n,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Jn(r,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(n,e,i=!1){if(gi(n.app))return Promise.reject(ss(n));const r="signIn",o=await uw(n,r,e),u=await ia._fromIdTokenResponse(n,r,o);return i||await n._updateCurrentUser(u.user),u}async function S9(n,e){return cw(ua(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw(n){const e=ua(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function T9(n,e,i){if(gi(n.app))return Promise.reject(ss(n));const r=ua(n),h=await Nm(r,{returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_9).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&fw(n),m}),p=await ia._fromIdTokenResponse(r,"signIn",h);return await r._updateCurrentUser(p.user),p}function w9(n,e,i){return gi(n.app)?Promise.reject(ss(n)):S9(jn(n),Ro.credential(e,i)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fw(n),r})}function A9(n,e,i,r){return jn(n).onIdTokenChanged(e,i,r)}function C9(n,e,i){return jn(n).beforeAuthStateChanged(e,i)}const Ff="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Ff,"1"),this.storage.removeItem(Ff),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R9=1e3,N9=10;class dw extends hw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&e(i,o,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const r=e.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!i&&this.localCache[r]===h||this.notifyListeners(r,h)},u=this.storage.getItem(r);KL()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,N9):o()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},R9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}dw.type="LOCAL";const I9=dw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw extends hw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}pw.type="SESSION";const mw=pw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x9(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const r=new lh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:o,data:u}=i.data,h=this.handlersMap[o];if(!h?.size)return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const p=Array.from(h).map(async g=>g(i.origin,u)),m=await x9(p);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:m})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(n="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return n+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O9{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,m)=>{const g=Lg("",20);o.port1.start();const b=setTimeout(()=>{m(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(S){const N=S;if(N.data.eventId===g)switch(N.data.status){case"ack":clearTimeout(b),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(N.data.response);break;default:clearTimeout(b),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return window}function k9(n){_i().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(){return typeof _i().WorkerGlobalScope<"u"&&typeof _i().importScripts=="function"}async function D9(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function M9(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function L9(){return gw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="firebaseLocalStorageDb",P9=1,qf="firebaseLocalStorage",yw="fbase_key";class Cu{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function uh(n,e){return n.transaction([qf],e?"readwrite":"readonly").objectStore(qf)}function U9(){const n=indexedDB.deleteDatabase(vw);return new Cu(n).toPromise()}function Im(){const n=indexedDB.open(vw,P9);return new Promise((e,i)=>{n.addEventListener("error",()=>{i(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(qf,{keyPath:yw})}catch(o){i(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(qf)?e(r):(r.close(),await U9(),e(await Im()))})})}async function rE(n,e,i){const r=uh(n,!0).put({[yw]:e,value:i});return new Cu(r).toPromise()}async function j9(n,e){const i=uh(n,!1).get(e),r=await new Cu(i).toPromise();return r===void 0?null:r.value}function aE(n,e){const i=uh(n,!0).delete(e);return new Cu(i).toPromise()}const z9=800,H9=3;class _w{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Im(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>H9)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lh._getInstance(L9()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await D9(),!this.activeServiceWorker)return;this.sender=new O9(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||M9()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Im();return await rE(e,Ff,"1"),await aE(e,Ff),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>rE(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>j9(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>aE(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=uh(o,!1).getAll();return new Cu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),z9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_w.type="LOCAL";const B9=_w;new Tu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F9(n,e){return e?ts(e):(ye(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg extends Dg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return po(e,this._buildIdpRequest())}_linkToIdToken(e,i){return po(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return po(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function q9(n){return cw(n.auth,new Pg(n),n.bypassAuthState)}function V9(n){const{auth:e,user:i}=n;return ye(i,e,"internal-error"),E9(i,new Pg(n),n.bypassAuthState)}async function G9(n){const{auth:e,user:i}=n;return ye(i,e,"internal-error"),b9(i,new Pg(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,i,r,o,u=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:i,sessionId:r,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return q9;case"linkViaPopup":case"linkViaRedirect":return G9;case"reauthViaPopup":case"reauthViaRedirect":return V9;default:Jn(this.auth,"internal-error")}}resolve(e){cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y9=new Tu(2e3,1e4);class oo extends bw{constructor(e,i,r,o,u){super(e,i,o,u),this.provider=r,this.authWindow=null,this.pollId=null,oo.currentPopupAction&&oo.currentPopupAction.cancel(),oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){cs(this.filter.length===1,"Popup operations only handle one event");const e=Lg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(yi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Y9.get())};e()}}oo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $9="pendingRedirect",vf=new Map;class K9 extends bw{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=vf.get(this.auth._key());if(!e){try{const r=await W9(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}vf.set(this.auth._key(),e)}return this.bypassAuthState||vf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W9(n,e){const i=Z9(e),r=Q9(n);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function X9(n,e){vf.set(n._key(),e)}function Q9(n){return ts(n._redirectPersistence)}function Z9(n){return gf($9,n.config.apiKey,n.name)}async function J9(n,e,i=!1){if(gi(n.app))return Promise.reject(ss(n));const r=ua(n),o=F9(r,e),h=await new K9(r,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e3=600*1e3;class t3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!n3(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!Ew(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(yi(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=e3&&this.cachedEventUids.clear(),this.cachedEventUids.has(oE(e))}saveEventToCache(e){this.cachedEventUids.add(oE(e)),this.lastProcessedEventTime=Date.now()}}function oE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ew({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function n3(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ew(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i3(n,e={}){return sr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,r3=/^https?/;async function a3(n){if(n.config.emulator)return;const{authorizedDomains:e}=await i3(n);for(const i of e)try{if(o3(i))return}catch{}Jn(n,"unauthorized-domain")}function o3(n){const e=Cm(),{protocol:i,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&r===""?i==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===r}if(!r3.test(i))return!1;if(s3.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l3=new Tu(3e4,6e4);function lE(){const n=_i().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let i=0;i<n.CP.length;i++)n.CP[i]=null}}function u3(n){return new Promise((e,i)=>{var r,o,u;function h(){lE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lE(),i(yi(n,"network-request-failed"))},timeout:l3.get()})}if(!((o=(r=_i().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=_i().gapi)===null||u===void 0)&&u.load)h();else{const p=i9("iframefcb");return _i()[p]=()=>{gapi.load?h():i(yi(n,"network-request-failed"))},aw(`${n9()}?onload=${p}`).catch(m=>i(m))}}).catch(e=>{throw yf=null,e})}let yf=null;function c3(n){return yf=yf||u3(n),yf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f3=new Tu(5e3,15e3),h3="__/auth/iframe",d3="emulator/auth/iframe",p3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},m3=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function g3(n){const e=n.config;ye(e.authDomain,n,"auth-domain-config-required");const i=e.emulator?xg(e,d3):`https://${n.config.authDomain}/${h3}`,r={apiKey:e.apiKey,appName:n.name,v:nr},o=m3.get(n.config.apiHost);o&&(r.eid=o);const u=n._getFrameworks();return u.length&&(r.fw=u.join(",")),`${i}?${To(r).slice(1)}`}async function v3(n){const e=await c3(n),i=_i().gapi;return ye(i,n,"internal-error"),e.open({where:document.body,url:g3(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:p3,dontclear:!0},r=>new Promise(async(o,u)=>{await r.restyle({setHideOnLeave:!1});const h=yi(n,"network-request-failed"),p=_i().setTimeout(()=>{u(h)},f3.get());function m(){_i().clearTimeout(p),o(r)}r.ping(m).then(m,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_3=500,b3=600,E3="_blank",S3="http://localhost";class uE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function T3(n,e,i,r=_3,o=b3){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const m=Object.assign(Object.assign({},y3),{width:r.toString(),height:o.toString(),top:u,left:h}),g=Xt().toLowerCase();i&&(p=J1(g)?E3:i),Q1(g)&&(e=e||S3,m.scrollbars="yes");const b=Object.entries(m).reduce((N,[L,H])=>`${N}${L}=${H},`,"");if($L(g)&&p!=="_self")return w3(e||"",p),new uE(null);const S=window.open(e||"",p,b);ye(S,n,"popup-blocked");try{S.focus()}catch{}return new uE(S)}function w3(n,e){const i=document.createElement("a");i.href=n,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A3="__/auth/handler",C3="emulator/auth/handler",R3=encodeURIComponent("fac");async function cE(n,e,i,r,o,u){ye(n.config.authDomain,n,"auth-domain-config-required"),ye(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:r,v:nr,eventId:o};if(e instanceof lw){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",om(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,S]of Object.entries({}))h[b]=S}if(e instanceof Au){const b=e.getScopes().filter(S=>S!=="");b.length>0&&(h.scopes=b.join(","))}n.tenantId&&(h.tid=n.tenantId);const p=h;for(const b of Object.keys(p))p[b]===void 0&&delete p[b];const m=await n._getAppCheckToken(),g=m?`#${R3}=${encodeURIComponent(m)}`:"";return`${N3(n)}?${To(p).slice(1)}${g}`}function N3({config:n}){return n.emulator?xg(n,C3):`https://${n.authDomain}/${A3}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="webStorageSupport";class I3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mw,this._completeRedirectFn=J9,this._overrideRedirectResult=X9}async _openPopup(e,i,r,o){var u;cs((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await cE(e,i,r,Cm(),o);return T3(e,h,Lg())}async _openRedirect(e,i,r,o){await this._originValidation(e);const u=await cE(e,i,r,Cm(),o);return k9(u),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:u}=this.eventManagers[i];return o?Promise.resolve(o):(cs(u,"If manager is not set, promise should be"),u)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await v3(e),r=new t3(e);return i.register("authEvent",o=>(ye(o?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(Fp,{type:Fp},o=>{var u;const h=(u=o?.[0])===null||u===void 0?void 0:u[Fp];h!==void 0&&i(!!h),Jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=a3(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return sw()||Z1()||kg()}}const x3=I3;var fE="@firebase/auth",hE="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k3(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function D3(n){Ln(new yn("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=r.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:h,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rw(n)},g=new JL(r,o,u,m);return l9(g,i),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new yn("auth-internal",e=>{const i=ua(e.getProvider("auth").getImmediate());return(r=>new O3(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(fE,hE,k3(n)),Gt(fE,hE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M3=300,L3=$S("authIdTokenMaxAge")||M3;let dE=null;const P3=n=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>L3)return;const o=i?.token;dE!==o&&(dE=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function U3(n=vu()){const e=ps(n,"auth");if(e.isInitialized())return e.getImmediate();const i=o9(n,{popupRedirectResolver:x3,persistence:[B9,I9,mw]}),r=$S("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(r,location.origin);if(location.origin===u.origin){const h=P3(u.toString());C9(i,h,()=>h(i.currentUser)),A9(i,p=>h(p))}}const o=GS("auth");return o&&u9(i,`http://${o}`),i}function j3(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}e9({loadJS(n){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const u=yi("internal-error");u.customData=o,i(u)},r.type="text/javascript",r.charset="UTF-8",j3().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});D3("Browser");var pE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,A){function C(){}C.prototype=A.prototype,D.D=A.prototype,D.prototype=new C,D.prototype.constructor=D,D.C=function(k,M,U){for(var I=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)I[Ot-2]=arguments[Ot];return A.prototype[M].apply(k,I)}}function i(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,i),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,A,C){C||(C=0);var k=Array(16);if(typeof A=="string")for(var M=0;16>M;++M)k[M]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(M=0;16>M;++M)k[M]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=D.g[0],C=D.g[1],M=D.g[2];var U=D.g[3],I=A+(U^C&(M^U))+k[0]+3614090360&4294967295;A=C+(I<<7&4294967295|I>>>25),I=U+(M^A&(C^M))+k[1]+3905402710&4294967295,U=A+(I<<12&4294967295|I>>>20),I=M+(C^U&(A^C))+k[2]+606105819&4294967295,M=U+(I<<17&4294967295|I>>>15),I=C+(A^M&(U^A))+k[3]+3250441966&4294967295,C=M+(I<<22&4294967295|I>>>10),I=A+(U^C&(M^U))+k[4]+4118548399&4294967295,A=C+(I<<7&4294967295|I>>>25),I=U+(M^A&(C^M))+k[5]+1200080426&4294967295,U=A+(I<<12&4294967295|I>>>20),I=M+(C^U&(A^C))+k[6]+2821735955&4294967295,M=U+(I<<17&4294967295|I>>>15),I=C+(A^M&(U^A))+k[7]+4249261313&4294967295,C=M+(I<<22&4294967295|I>>>10),I=A+(U^C&(M^U))+k[8]+1770035416&4294967295,A=C+(I<<7&4294967295|I>>>25),I=U+(M^A&(C^M))+k[9]+2336552879&4294967295,U=A+(I<<12&4294967295|I>>>20),I=M+(C^U&(A^C))+k[10]+4294925233&4294967295,M=U+(I<<17&4294967295|I>>>15),I=C+(A^M&(U^A))+k[11]+2304563134&4294967295,C=M+(I<<22&4294967295|I>>>10),I=A+(U^C&(M^U))+k[12]+1804603682&4294967295,A=C+(I<<7&4294967295|I>>>25),I=U+(M^A&(C^M))+k[13]+4254626195&4294967295,U=A+(I<<12&4294967295|I>>>20),I=M+(C^U&(A^C))+k[14]+2792965006&4294967295,M=U+(I<<17&4294967295|I>>>15),I=C+(A^M&(U^A))+k[15]+1236535329&4294967295,C=M+(I<<22&4294967295|I>>>10),I=A+(M^U&(C^M))+k[1]+4129170786&4294967295,A=C+(I<<5&4294967295|I>>>27),I=U+(C^M&(A^C))+k[6]+3225465664&4294967295,U=A+(I<<9&4294967295|I>>>23),I=M+(A^C&(U^A))+k[11]+643717713&4294967295,M=U+(I<<14&4294967295|I>>>18),I=C+(U^A&(M^U))+k[0]+3921069994&4294967295,C=M+(I<<20&4294967295|I>>>12),I=A+(M^U&(C^M))+k[5]+3593408605&4294967295,A=C+(I<<5&4294967295|I>>>27),I=U+(C^M&(A^C))+k[10]+38016083&4294967295,U=A+(I<<9&4294967295|I>>>23),I=M+(A^C&(U^A))+k[15]+3634488961&4294967295,M=U+(I<<14&4294967295|I>>>18),I=C+(U^A&(M^U))+k[4]+3889429448&4294967295,C=M+(I<<20&4294967295|I>>>12),I=A+(M^U&(C^M))+k[9]+568446438&4294967295,A=C+(I<<5&4294967295|I>>>27),I=U+(C^M&(A^C))+k[14]+3275163606&4294967295,U=A+(I<<9&4294967295|I>>>23),I=M+(A^C&(U^A))+k[3]+4107603335&4294967295,M=U+(I<<14&4294967295|I>>>18),I=C+(U^A&(M^U))+k[8]+1163531501&4294967295,C=M+(I<<20&4294967295|I>>>12),I=A+(M^U&(C^M))+k[13]+2850285829&4294967295,A=C+(I<<5&4294967295|I>>>27),I=U+(C^M&(A^C))+k[2]+4243563512&4294967295,U=A+(I<<9&4294967295|I>>>23),I=M+(A^C&(U^A))+k[7]+1735328473&4294967295,M=U+(I<<14&4294967295|I>>>18),I=C+(U^A&(M^U))+k[12]+2368359562&4294967295,C=M+(I<<20&4294967295|I>>>12),I=A+(C^M^U)+k[5]+4294588738&4294967295,A=C+(I<<4&4294967295|I>>>28),I=U+(A^C^M)+k[8]+2272392833&4294967295,U=A+(I<<11&4294967295|I>>>21),I=M+(U^A^C)+k[11]+1839030562&4294967295,M=U+(I<<16&4294967295|I>>>16),I=C+(M^U^A)+k[14]+4259657740&4294967295,C=M+(I<<23&4294967295|I>>>9),I=A+(C^M^U)+k[1]+2763975236&4294967295,A=C+(I<<4&4294967295|I>>>28),I=U+(A^C^M)+k[4]+1272893353&4294967295,U=A+(I<<11&4294967295|I>>>21),I=M+(U^A^C)+k[7]+4139469664&4294967295,M=U+(I<<16&4294967295|I>>>16),I=C+(M^U^A)+k[10]+3200236656&4294967295,C=M+(I<<23&4294967295|I>>>9),I=A+(C^M^U)+k[13]+681279174&4294967295,A=C+(I<<4&4294967295|I>>>28),I=U+(A^C^M)+k[0]+3936430074&4294967295,U=A+(I<<11&4294967295|I>>>21),I=M+(U^A^C)+k[3]+3572445317&4294967295,M=U+(I<<16&4294967295|I>>>16),I=C+(M^U^A)+k[6]+76029189&4294967295,C=M+(I<<23&4294967295|I>>>9),I=A+(C^M^U)+k[9]+3654602809&4294967295,A=C+(I<<4&4294967295|I>>>28),I=U+(A^C^M)+k[12]+3873151461&4294967295,U=A+(I<<11&4294967295|I>>>21),I=M+(U^A^C)+k[15]+530742520&4294967295,M=U+(I<<16&4294967295|I>>>16),I=C+(M^U^A)+k[2]+3299628645&4294967295,C=M+(I<<23&4294967295|I>>>9),I=A+(M^(C|~U))+k[0]+4096336452&4294967295,A=C+(I<<6&4294967295|I>>>26),I=U+(C^(A|~M))+k[7]+1126891415&4294967295,U=A+(I<<10&4294967295|I>>>22),I=M+(A^(U|~C))+k[14]+2878612391&4294967295,M=U+(I<<15&4294967295|I>>>17),I=C+(U^(M|~A))+k[5]+4237533241&4294967295,C=M+(I<<21&4294967295|I>>>11),I=A+(M^(C|~U))+k[12]+1700485571&4294967295,A=C+(I<<6&4294967295|I>>>26),I=U+(C^(A|~M))+k[3]+2399980690&4294967295,U=A+(I<<10&4294967295|I>>>22),I=M+(A^(U|~C))+k[10]+4293915773&4294967295,M=U+(I<<15&4294967295|I>>>17),I=C+(U^(M|~A))+k[1]+2240044497&4294967295,C=M+(I<<21&4294967295|I>>>11),I=A+(M^(C|~U))+k[8]+1873313359&4294967295,A=C+(I<<6&4294967295|I>>>26),I=U+(C^(A|~M))+k[15]+4264355552&4294967295,U=A+(I<<10&4294967295|I>>>22),I=M+(A^(U|~C))+k[6]+2734768916&4294967295,M=U+(I<<15&4294967295|I>>>17),I=C+(U^(M|~A))+k[13]+1309151649&4294967295,C=M+(I<<21&4294967295|I>>>11),I=A+(M^(C|~U))+k[4]+4149444226&4294967295,A=C+(I<<6&4294967295|I>>>26),I=U+(C^(A|~M))+k[11]+3174756917&4294967295,U=A+(I<<10&4294967295|I>>>22),I=M+(A^(U|~C))+k[2]+718787259&4294967295,M=U+(I<<15&4294967295|I>>>17),I=C+(U^(M|~A))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+A&4294967295,D.g[1]=D.g[1]+(M+(I<<21&4294967295|I>>>11))&4294967295,D.g[2]=D.g[2]+M&4294967295,D.g[3]=D.g[3]+U&4294967295}r.prototype.u=function(D,A){A===void 0&&(A=D.length);for(var C=A-this.blockSize,k=this.B,M=this.h,U=0;U<A;){if(M==0)for(;U<=C;)o(this,D,U),U+=this.blockSize;if(typeof D=="string"){for(;U<A;)if(k[M++]=D.charCodeAt(U++),M==this.blockSize){o(this,k),M=0;break}}else for(;U<A;)if(k[M++]=D[U++],M==this.blockSize){o(this,k),M=0;break}}this.h=M,this.o+=A},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var A=1;A<D.length-8;++A)D[A]=0;var C=8*this.o;for(A=D.length-8;A<D.length;++A)D[A]=C&255,C/=256;for(this.u(D),D=Array(16),A=C=0;4>A;++A)for(var k=0;32>k;k+=8)D[C++]=this.g[A]>>>k&255;return D};function u(D,A){var C=p;return Object.prototype.hasOwnProperty.call(C,D)?C[D]:C[D]=A(D)}function h(D,A){this.h=A;for(var C=[],k=!0,M=D.length-1;0<=M;M--){var U=D[M]|0;k&&U==A||(C[M]=U,k=!1)}this.g=C}var p={};function m(D){return-128<=D&&128>D?u(D,function(A){return new h([A|0],0>A?-1:0)}):new h([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return S;if(0>D)return V(g(-D));for(var A=[],C=1,k=0;D>=C;k++)A[k]=D/C|0,C*=4294967296;return new h(A,0)}function b(D,A){if(D.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(D.charAt(0)=="-")return V(b(D.substring(1),A));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(A,8)),k=S,M=0;M<D.length;M+=8){var U=Math.min(8,D.length-M),I=parseInt(D.substring(M,M+U),A);8>U?(U=g(Math.pow(A,U)),k=k.j(U).add(g(I))):(k=k.j(C),k=k.add(g(I)))}return k}var S=m(0),N=m(1),L=m(16777216);n=h.prototype,n.m=function(){if($(this))return-V(this).m();for(var D=0,A=1,C=0;C<this.g.length;C++){var k=this.i(C);D+=(0<=k?k:4294967296+k)*A,A*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(H(this))return"0";if($(this))return"-"+V(this).toString(D);for(var A=g(Math.pow(D,6)),C=this,k="";;){var M=ce(C,A).g;C=J(C,M.j(A));var U=((0<C.g.length?C.g[0]:C.h)>>>0).toString(D);if(C=M,H(C))return U+k;for(;6>U.length;)U="0"+U;k=U+k}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function H(D){if(D.h!=0)return!1;for(var A=0;A<D.g.length;A++)if(D.g[A]!=0)return!1;return!0}function $(D){return D.h==-1}n.l=function(D){return D=J(this,D),$(D)?-1:H(D)?0:1};function V(D){for(var A=D.g.length,C=[],k=0;k<A;k++)C[k]=~D.g[k];return new h(C,~D.h).add(N)}n.abs=function(){return $(this)?V(this):this},n.add=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],k=0,M=0;M<=A;M++){var U=k+(this.i(M)&65535)+(D.i(M)&65535),I=(U>>>16)+(this.i(M)>>>16)+(D.i(M)>>>16);k=I>>>16,U&=65535,I&=65535,C[M]=I<<16|U}return new h(C,C[C.length-1]&-2147483648?-1:0)};function J(D,A){return D.add(V(A))}n.j=function(D){if(H(this)||H(D))return S;if($(this))return $(D)?V(this).j(V(D)):V(V(this).j(D));if($(D))return V(this.j(V(D)));if(0>this.l(L)&&0>D.l(L))return g(this.m()*D.m());for(var A=this.g.length+D.g.length,C=[],k=0;k<2*A;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var M=0;M<D.g.length;M++){var U=this.i(k)>>>16,I=this.i(k)&65535,Ot=D.i(M)>>>16,ot=D.i(M)&65535;C[2*k+2*M]+=I*ot,Z(C,2*k+2*M),C[2*k+2*M+1]+=U*ot,Z(C,2*k+2*M+1),C[2*k+2*M+1]+=I*Ot,Z(C,2*k+2*M+1),C[2*k+2*M+2]+=U*Ot,Z(C,2*k+2*M+2)}for(k=0;k<A;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=A;k<2*A;k++)C[k]=0;return new h(C,0)};function Z(D,A){for(;(D[A]&65535)!=D[A];)D[A+1]+=D[A]>>>16,D[A]&=65535,A++}function ee(D,A){this.g=D,this.h=A}function ce(D,A){if(H(A))throw Error("division by zero");if(H(D))return new ee(S,S);if($(D))return A=ce(V(D),A),new ee(V(A.g),V(A.h));if($(A))return A=ce(D,V(A)),new ee(V(A.g),A.h);if(30<D.g.length){if($(D)||$(A))throw Error("slowDivide_ only works with positive integers.");for(var C=N,k=A;0>=k.l(D);)C=ne(C),k=ne(k);var M=be(C,1),U=be(k,1);for(k=be(k,2),C=be(C,2);!H(k);){var I=U.add(k);0>=I.l(D)&&(M=M.add(C),U=I),k=be(k,1),C=be(C,1)}return A=J(D,M.j(A)),new ee(M,A)}for(M=S;0<=D.l(A);){for(C=Math.max(1,Math.floor(D.m()/A.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),U=g(C),I=U.j(A);$(I)||0<I.l(D);)C-=k,U=g(C),I=U.j(A);H(U)&&(U=N),M=M.add(U),D=J(D,I)}return new ee(M,D)}n.A=function(D){return ce(this,D).h},n.and=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)&D.i(k);return new h(C,this.h&D.h)},n.or=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)|D.i(k);return new h(C,this.h|D.h)},n.xor=function(D){for(var A=Math.max(this.g.length,D.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)^D.i(k);return new h(C,this.h^D.h)};function ne(D){for(var A=D.g.length+1,C=[],k=0;k<A;k++)C[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(C,D.h)}function be(D,A){var C=A>>5;A%=32;for(var k=D.g.length-C,M=[],U=0;U<k;U++)M[U]=0<A?D.i(U+C)>>>A|D.i(U+C+1)<<32-A:D.i(U+C);return new h(M,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=b,Sw=h}).apply(typeof pE<"u"?pE:typeof self<"u"?self:typeof window<"u"?window:{});var lf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,v,y){return c==Array.prototype||c==Object.prototype||(c[v]=y.value),c};function i(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof lf=="object"&&lf];for(var v=0;v<c.length;++v){var y=c[v];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=i(this);function o(c,v){if(v)e:{var y=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var j=c[T];if(!(j in y))break e;y=y[j]}c=c[c.length-1],T=y[c],v=v(T),v!=T&&v!=null&&e(y,c,{configurable:!0,writable:!0,value:v})}}function u(c,v){c instanceof String&&(c+="");var y=0,T=!1,j={next:function(){if(!T&&y<c.length){var G=y++;return{value:v(G,c[G]),done:!1}}return T=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(c){return c||function(){return u(this,function(v,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(c){var v=typeof c;return v=v!="object"?v:c?Array.isArray(c)?"array":v:"null",v=="array"||v=="object"&&typeof c.length=="number"}function g(c){var v=typeof c;return v=="object"&&c!=null||v=="function"}function b(c,v,y){return c.call.apply(c.bind,arguments)}function S(c,v,y){if(!c)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,T),c.apply(v,j)}}return function(){return c.apply(v,arguments)}}function N(c,v,y){return N=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:S,N.apply(null,arguments)}function L(c,v){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function H(c,v){function y(){}y.prototype=v.prototype,c.aa=v.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(T,j,G){for(var re=Array(arguments.length-2),je=2;je<arguments.length;je++)re[je-2]=arguments[je];return v.prototype[j].apply(T,re)}}function $(c){const v=c.length;if(0<v){const y=Array(v);for(let T=0;T<v;T++)y[T]=c[T];return y}return[]}function V(c,v){for(let y=1;y<arguments.length;y++){const T=arguments[y];if(m(T)){const j=c.length||0,G=T.length||0;c.length=j+G;for(let re=0;re<G;re++)c[j+re]=T[re]}else c.push(T)}}class J{constructor(v,y){this.i=v,this.j=y,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function Z(c){return/^[\s\xa0]*$/.test(c)}function ee(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function ce(c){return ce[" "](c),c}ce[" "]=function(){};var ne=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function be(c,v,y){for(const T in c)v.call(y,c[T],T,c)}function D(c,v){for(const y in c)v.call(void 0,c[y],y,c)}function A(c){const v={};for(const y in c)v[y]=c[y];return v}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(c,v){let y,T;for(let j=1;j<arguments.length;j++){T=arguments[j];for(y in T)c[y]=T[y];for(let G=0;G<C.length;G++)y=C[G],Object.prototype.hasOwnProperty.call(T,y)&&(c[y]=T[y])}}function M(c){var v=1;c=c.split(":");const y=[];for(;0<v&&c.length;)y.push(c.shift()),v--;return c.length&&y.push(c.join(":")),y}function U(c){p.setTimeout(()=>{throw c},0)}function I(){var c=Le;let v=null;return c.g&&(v=c.g,c.g=c.g.next,c.g||(c.h=null),v.next=null),v}class Ot{constructor(){this.h=this.g=null}add(v,y){const T=ot.get();T.set(v,y),this.h?this.h.next=T:this.g=T,this.h=T}}var ot=new J(()=>new K,c=>c.reset());class K{constructor(){this.next=this.g=this.h=null}set(v,y){this.h=v,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,he=!1,Le=new Ot,x=()=>{const c=p.Promise.resolve(void 0);ae=()=>{c.then(te)}};var te=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(y){U(y)}var v=ot;v.j(c),100>v.h&&(v.h++,c.next=v.g,v.g=c)}he=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,v){this.type=c,this.g=this.target=v,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var pe=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,v=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};p.addEventListener("test",y,v),p.removeEventListener("test",y,v)}catch{}return c})();function Te(c,v){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=v,v=c.relatedTarget){if(ne){e:{try{ce(v.nodeName);var j=!0;break e}catch{}j=!1}j||(v=null)}}else y=="mouseover"?v=c.fromElement:y=="mouseout"&&(v=c.toElement);this.relatedTarget=v,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:_e[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Te.aa.h.call(this)}}H(Te,se);var _e={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Et="closure_listenable_"+(1e6*Math.random()|0),Xe=0;function ei(c,v,y,T,j){this.listener=c,this.proxy=null,this.src=v,this.type=y,this.capture=!!T,this.ha=j,this.key=++Xe,this.da=this.fa=!1}function ms(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ti(c){this.src=c,this.g={},this.h=0}Ti.prototype.add=function(c,v,y,T,j){var G=c.toString();c=this.g[G],c||(c=this.g[G]=[],this.h++);var re=ar(c,v,T,j);return-1<re?(v=c[re],y||(v.fa=!1)):(v=new ei(v,this.src,G,!!T,j),v.fa=y,c.push(v)),v};function rr(c,v){var y=v.type;if(y in c.g){var T=c.g[y],j=Array.prototype.indexOf.call(T,v,void 0),G;(G=0<=j)&&Array.prototype.splice.call(T,j,1),G&&(ms(v),c.g[y].length==0&&(delete c.g[y],c.h--))}}function ar(c,v,y,T){for(var j=0;j<c.length;++j){var G=c[j];if(!G.da&&G.listener==v&&G.capture==!!y&&G.ha==T)return j}return-1}var or="closure_lm_"+(1e6*Math.random()|0),No={};function Iu(c,v,y,T,j){if(Array.isArray(v)){for(var G=0;G<v.length;G++)Iu(c,v[G],y,T,j);return null}return y=xu(y),c&&c[Et]?c.K(v,y,g(T)?!!T.capture:!1,j):En(c,v,y,!1,T,j)}function En(c,v,y,T,j,G){if(!v)throw Error("Invalid event type");var re=g(j)?!!j.capture:!!j,je=fa(c);if(je||(c[or]=je=new Ti(c)),y=je.add(v,y,T,re,G),y.proxy)return y;if(T=ch(),y.proxy=T,T.src=c,T.listener=y,c.addEventListener)pe||(j=re),j===void 0&&(j=!1),c.addEventListener(v.toString(),T,j);else if(c.attachEvent)c.attachEvent(lr(v.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ch(){function c(y){return v.call(c.src,c.listener,y)}const v=fh;return c}function Io(c,v,y,T,j){if(Array.isArray(v))for(var G=0;G<v.length;G++)Io(c,v[G],y,T,j);else T=g(T)?!!T.capture:!!T,y=xu(y),c&&c[Et]?(c=c.i,v=String(v).toString(),v in c.g&&(G=c.g[v],y=ar(G,y,T,j),-1<y&&(ms(G[y]),Array.prototype.splice.call(G,y,1),G.length==0&&(delete c.g[v],c.h--)))):c&&(c=fa(c))&&(v=c.g[v.toString()],c=-1,v&&(c=ar(v,y,T,j)),(y=-1<c?v[c]:null)&&ca(y))}function ca(c){if(typeof c!="number"&&c&&!c.da){var v=c.src;if(v&&v[Et])rr(v.i,c);else{var y=c.type,T=c.proxy;v.removeEventListener?v.removeEventListener(y,T,c.capture):v.detachEvent?v.detachEvent(lr(y),T):v.addListener&&v.removeListener&&v.removeListener(T),(y=fa(v))?(rr(y,c),y.h==0&&(y.src=null,v[or]=null)):ms(c)}}}function lr(c){return c in No?No[c]:No[c]="on"+c}function fh(c,v){if(c.da)c=!0;else{v=new Te(v,this);var y=c.listener,T=c.ha||c.src;c.fa&&ca(c),c=y.call(T,v)}return c}function fa(c){return c=c[or],c instanceof Ti?c:null}var xo="__closure_events_fn_"+(1e9*Math.random()>>>0);function xu(c){return typeof c=="function"?c:(c[xo]||(c[xo]=function(v){return c.handleEvent(v)}),c[xo])}function lt(){oe.call(this),this.i=new Ti(this),this.M=this,this.F=null}H(lt,oe),lt.prototype[Et]=!0,lt.prototype.removeEventListener=function(c,v,y,T){Io(this,c,v,y,T)};function He(c,v){var y,T=c.F;if(T)for(y=[];T;T=T.F)y.push(T);if(c=c.M,T=v.type||v,typeof v=="string")v=new se(v,c);else if(v instanceof se)v.target=v.target||c;else{var j=v;v=new se(T,c),k(v,j)}if(j=!0,y)for(var G=y.length-1;0<=G;G--){var re=v.g=y[G];j=on(re,T,!0,v)&&j}if(re=v.g=c,j=on(re,T,!0,v)&&j,j=on(re,T,!1,v)&&j,y)for(G=0;G<y.length;G++)re=v.g=y[G],j=on(re,T,!1,v)&&j}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var c=this.i,v;for(v in c.g){for(var y=c.g[v],T=0;T<y.length;T++)ms(y[T]);delete c.g[v],c.h--}}this.F=null},lt.prototype.K=function(c,v,y,T){return this.i.add(String(c),v,!1,y,T)},lt.prototype.L=function(c,v,y,T){return this.i.add(String(c),v,!0,y,T)};function on(c,v,y,T){if(v=c.i.g[String(v)],!v)return!0;v=v.concat();for(var j=!0,G=0;G<v.length;++G){var re=v[G];if(re&&!re.da&&re.capture==y){var je=re.listener,it=re.ha||re.src;re.fa&&rr(c.i,re),j=je.call(it,T)!==!1&&j}}return j&&!T.defaultPrevented}function zt(c,v,y){if(typeof c=="function")y&&(c=N(c,y));else if(c&&typeof c.handleEvent=="function")c=N(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:p.setTimeout(c,v||0)}function Ou(c){c.g=zt(()=>{c.g=null,c.i&&(c.i=!1,Ou(c))},c.l);const v=c.h;c.h=null,c.m.apply(null,v)}class hh extends oe{constructor(v,y){super(),this.m=v,this.l=y,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:Ou(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ur(c){oe.call(this),this.h=c,this.g={}}H(ur,oe);var cr=[];function fr(c){be(c.g,function(v,y){this.g.hasOwnProperty(y)&&ca(v)},c),c.g={}}ur.prototype.N=function(){ur.aa.N.call(this),fr(this)},ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zn=p.JSON.stringify,ha=p.JSON.parse,hr=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function Oo(){}Oo.prototype.h=null;function ko(c){return c.h||(c.h=c.i())}function ku(){}var wi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ai(){se.call(this,"d")}H(Ai,se);function Do(){se.call(this,"c")}H(Do,se);var Ci={},Mo=null;function dr(){return Mo=Mo||new lt}Ci.La="serverreachability";function da(c){se.call(this,Ci.La,c)}H(da,se);function gs(c){const v=dr();He(v,new da(v))}Ci.STAT_EVENT="statevent";function Du(c,v){se.call(this,Ci.STAT_EVENT,c),this.stat=v}H(Du,se);function nt(c){const v=dr();He(v,new Du(v,c))}Ci.Ma="timingevent";function yt(c,v){se.call(this,Ci.Ma,c),this.size=v}H(yt,se);function pt(c,v){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},v)}function Sn(){this.g=!0}Sn.prototype.xa=function(){this.g=!1};function Lo(c,v,y,T,j,G){c.info(function(){if(c.g)if(G)for(var re="",je=G.split("&"),it=0;it<je.length;it++){var Ie=je[it].split("=");if(1<Ie.length){var Tt=Ie[0];Ie=Ie[1];var wt=Tt.split("_");re=2<=wt.length&&wt[1]=="type"?re+(Tt+"="+Ie+"&"):re+(Tt+"=redacted&")}}else re=null;else re=G;return"XMLHTTP REQ ("+T+") [attempt "+j+"]: "+v+`
`+y+`
`+re})}function dh(c,v,y,T,j,G,re){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+j+"]: "+v+`
`+y+`
`+G+" "+re})}function vs(c,v,y,T){c.info(function(){return"XMLHTTP TEXT ("+v+"): "+pr(c,y)+(T?" "+T:"")})}function Mu(c,v){c.info(function(){return"TIMEOUT: "+v})}Sn.prototype.info=function(){};function pr(c,v){if(!c.g)return v;if(!v)return null;try{var y=JSON.parse(v);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var T=y[c];if(!(2>T.length)){var j=T[1];if(Array.isArray(j)&&!(1>j.length)){var G=j[0];if(G!="noop"&&G!="stop"&&G!="close")for(var re=1;re<j.length;re++)j[re]=""}}}}return zn(y)}catch{return v}}var mr={NO_ERROR:0,TIMEOUT:8},ys={},ti;function ni(){}H(ni,Oo),ni.prototype.g=function(){return new XMLHttpRequest},ni.prototype.i=function(){return{}},ti=new ni;function Yt(c,v,y,T){this.j=c,this.i=v,this.l=y,this.R=T||1,this.U=new ur(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ft}function ft(){this.i=null,this.g="",this.h=!1}var Po={},pa={};function Hn(c,v,y){c.L=1,c.v=br(ln(v)),c.m=y,c.P=!0,Ri(c,null)}function Ri(c,v){c.F=Date.now(),gr(c),c.A=ln(c.v);var y=c.A,T=c.R;Array.isArray(T)||(T=[String(T)]),Fo(y.i,"t",T),c.C=0,y=c.j.J,c.h=new ft,c.g=Xu(c.j,y?v:null,!c.m),0<c.O&&(c.M=new hh(N(c.Y,c,c.g),c.O)),v=c.U,y=c.g,T=c.ca;var j="readystatechange";Array.isArray(j)||(j&&(cr[0]=j.toString()),j=cr);for(var G=0;G<j.length;G++){var re=Iu(y,j[G],T||v.handleEvent,!1,v.h||v);if(!re)break;v.g[re.key]=re}v=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,v)):(c.u="GET",c.g.ea(c.A,c.u,null,v)),gs(),Lo(c.i,c.u,c.A,c.l,c.R,c.m)}Yt.prototype.ca=function(c){c=c.target;const v=this.M;v&&Cn(c)==3?v.j():this.Y(c)},Yt.prototype.Y=function(c){try{if(c==this.g)e:{const wt=Cn(this.g);var v=this.g.Ba();const Li=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||Fu(this.g)))){this.J||wt!=4||v==7||(v==8||0>=Li?gs(3):gs(2)),_s(this);var y=this.g.Z();this.X=y;t:if(Lu(this)){var T=Fu(this.g);c="";var j=T.length,G=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kt(this),ii(this);var re="";break t}this.h.i=new p.TextDecoder}for(v=0;v<j;v++)this.h.h=!0,c+=this.h.i.decode(T[v],{stream:!(G&&v==j-1)});T.length=0,this.h.g+=c,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=y==200,dh(this.i,this.u,this.A,this.l,this.R,wt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,it=this.g;if((je=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(je)){var Ie=je;break t}}Ie=null}if(y=Ie)vs(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vr(this,y);else{this.o=!1,this.s=3,nt(12),kt(this),ii(this);break e}}if(this.P){y=!0;let Zt;for(;!this.J&&this.C<re.length;)if(Zt=Pu(this,re),Zt==pa){wt==4&&(this.s=4,nt(14),y=!1),vs(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==Po){this.s=4,nt(15),vs(this.i,this.l,re,"[Invalid Chunk]"),y=!1;break}else vs(this.i,this.l,Zt,null),vr(this,Zt);if(Lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||re.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)vs(this.i,this.l,re,"[Invalid Chunked Response]"),kt(this),ii(this);else if(0<re.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Nr(Tt),Tt.M=!0,nt(11))}}else vs(this.i,this.l,re,null),vr(this,re);wt==4&&kt(this),this.o&&!this.J&&(wt==4?$u(this.j,this):(this.o=!1,gr(this)))}else yh(this.g),y==400&&0<re.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),kt(this),ii(this)}}}catch{}finally{}};function Lu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Pu(c,v){var y=c.C,T=v.indexOf(`
`,y);return T==-1?pa:(y=Number(v.substring(y,T)),isNaN(y)?Po:(T+=1,T+y>v.length?pa:(v=v.slice(T,T+y),c.C=T+y,v)))}Yt.prototype.cancel=function(){this.J=!0,kt(this)};function gr(c){c.S=Date.now()+c.I,Uu(c,c.I)}function Uu(c,v){if(c.B!=null)throw Error("WatchDog timer not null");c.B=pt(N(c.ba,c),v)}function _s(c){c.B&&(p.clearTimeout(c.B),c.B=null)}Yt.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Mu(this.i,this.A),this.L!=2&&(gs(),nt(17)),kt(this),this.s=2,ii(this)):Uu(this,this.S-c)};function ii(c){c.j.G==0||c.J||$u(c.j,c)}function kt(c){_s(c);var v=c.M;v&&typeof v.ma=="function"&&v.ma(),c.M=null,fr(c.U),c.g&&(v=c.g,c.g=null,v.abort(),v.ma())}function vr(c,v){try{var y=c.j;if(y.G!=0&&(y.g==c||Uo(y.h,c))){if(!c.K&&Uo(y.h,c)&&y.G==3){try{var T=y.Da.g.parse(v)}catch{T=null}if(Array.isArray(T)&&T.length==3){var j=T;if(j[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)Ca(y),wa(y);else break e;$o(y),nt(18)}}else y.za=j[1],0<y.za-y.T&&37500>j[2]&&y.F&&y.v==0&&!y.C&&(y.C=pt(N(y.Za,y),6e3));if(1>=ga(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Mi(y,11)}else if((c.K||y.g==c)&&Ca(y),!Z(v))for(j=y.Da.g.parse(v),v=0;v<j.length;v++){let Ie=j[v];if(y.T=Ie[0],Ie=Ie[1],y.G==2)if(Ie[0]=="c"){y.K=Ie[1],y.ia=Ie[2];const Tt=Ie[3];Tt!=null&&(y.la=Tt,y.j.info("VER="+y.la));const wt=Ie[4];wt!=null&&(y.Aa=wt,y.j.info("SVER="+y.Aa));const Li=Ie[5];Li!=null&&typeof Li=="number"&&0<Li&&(T=1.5*Li,y.L=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const Zt=c.g;if(Zt){const ui=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ui){var G=T.h;G.g||ui.indexOf("spdy")==-1&&ui.indexOf("quic")==-1&&ui.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(va(G,G.h),G.h=null))}if(T.D){const Pi=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pi&&(T.ya=Pi,Ve(T.I,T.D,Pi))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),T=y;var re=c;if(T.qa=Wu(T,T.J?T.ia:null,T.W),re.K){$t(T.h,re);var je=re,it=T.L;it&&(je.I=it),je.B&&(_s(je),gr(je)),T.g=re}else Gu(T);0<y.i.length&&Aa(y)}else Ie[0]!="stop"&&Ie[0]!="close"||Mi(y,7);else y.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?Mi(y,7):Go(y):Ie[0]!="noop"&&y.l&&y.l.ta(Ie),y.v=0)}}gs(4)}catch{}}var ju=class{constructor(c,v){this.g=c,this.map=v}};function Ni(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ma(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ga(c){return c.h?1:c.g?c.g.size:0}function Uo(c,v){return c.h?c.h==v:c.g?c.g.has(v):!1}function va(c,v){c.g?c.g.add(v):c.h=v}function $t(c,v){c.h&&c.h==v?c.h=null:c.g&&c.g.has(v)&&c.g.delete(v)}Ni.prototype.cancel=function(){if(this.i=jo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function jo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let v=c.i;for(const y of c.g.values())v=v.concat(y.D);return v}return $(c.i)}function ph(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var v=[],y=c.length,T=0;T<y;T++)v.push(c[T]);return v}v=[],y=0;for(T in c)v[y++]=c[T];return v}function ya(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var v=[];c=c.length;for(var y=0;y<c;y++)v.push(y);return v}v=[],y=0;for(const T in c)v[y++]=T;return v}}}function zo(c,v){if(c.forEach&&typeof c.forEach=="function")c.forEach(v,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,v,void 0);else for(var y=ya(c),T=ph(c),j=T.length,G=0;G<j;G++)v.call(void 0,T[G],y&&y[G],c)}var yr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mh(c,v){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var T=c[y].indexOf("="),j=null;if(0<=T){var G=c[y].substring(0,T);j=c[y].substring(T+1)}else G=c[y];v(G,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function mt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof mt){this.h=c.h,_r(this,c.j),this.o=c.o,this.g=c.g,bs(this,c.s),this.l=c.l;var v=c.i,y=new xi;y.i=v.i,v.g&&(y.g=new Map(v.g),y.h=v.h),Ii(this,y),this.m=c.m}else c&&(v=String(c).match(yr))?(this.h=!1,_r(this,v[1]||"",!0),this.o=Tn(v[2]||""),this.g=Tn(v[3]||"",!0),bs(this,v[4]),this.l=Tn(v[5]||"",!0),Ii(this,v[6]||"",!0),this.m=Tn(v[7]||"")):(this.h=!1,this.i=new xi(null,this.h))}mt.prototype.toString=function(){var c=[],v=this.j;v&&c.push(Er(v,Ho,!0),":");var y=this.g;return(y||v=="file")&&(c.push("//"),(v=this.o)&&c.push(Er(v,Ho,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Er(y,y.charAt(0)=="/"?gh:Bo,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Er(y,_a)),c.join("")};function ln(c){return new mt(c)}function _r(c,v,y){c.j=y?Tn(v,!0):v,c.j&&(c.j=c.j.replace(/:$/,""))}function bs(c,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);c.s=v}else c.s=null}function Ii(c,v,y){v instanceof xi?(c.i=v,Hu(c.i,c.h)):(y||(v=Er(v,vh)),c.i=new xi(v,c.h))}function Ve(c,v,y){c.i.set(v,y)}function br(c){return Ve(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Tn(c,v){return c?v?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Er(c,v,y){return typeof c=="string"?(c=encodeURI(c).replace(v,zu),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function zu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ho=/[#\/\?@]/g,Bo=/[#\?:]/g,gh=/[#\?]/g,vh=/[#\?@]/g,_a=/#/g;function xi(c,v){this.h=this.g=null,this.i=c||null,this.j=!!v}function wn(c){c.g||(c.g=new Map,c.h=0,c.i&&mh(c.i,function(v,y){c.add(decodeURIComponent(v.replace(/\+/g," ")),y)}))}n=xi.prototype,n.add=function(c,v){wn(this),this.i=null,c=si(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(v),this.h+=1,this};function Oi(c,v){wn(c),v=si(c,v),c.g.has(v)&&(c.i=null,c.h-=c.g.get(v).length,c.g.delete(v))}function ki(c,v){return wn(c),v=si(c,v),c.g.has(v)}n.forEach=function(c,v){wn(this),this.g.forEach(function(y,T){y.forEach(function(j){c.call(v,j,T,this)},this)},this)},n.na=function(){wn(this);const c=Array.from(this.g.values()),v=Array.from(this.g.keys()),y=[];for(let T=0;T<v.length;T++){const j=c[T];for(let G=0;G<j.length;G++)y.push(v[T])}return y},n.V=function(c){wn(this);let v=[];if(typeof c=="string")ki(this,c)&&(v=v.concat(this.g.get(si(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)v=v.concat(c[y])}return v},n.set=function(c,v){return wn(this),this.i=null,c=si(this,c),ki(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[v]),this.h+=1,this},n.get=function(c,v){return c?(c=this.V(c),0<c.length?String(c[0]):v):v};function Fo(c,v,y){Oi(c,v),0<y.length&&(c.i=null,c.g.set(si(c,v),$(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],v=Array.from(this.g.keys());for(var y=0;y<v.length;y++){var T=v[y];const G=encodeURIComponent(String(T)),re=this.V(T);for(T=0;T<re.length;T++){var j=G;re[T]!==""&&(j+="="+encodeURIComponent(String(re[T]))),c.push(j)}}return this.i=c.join("&")};function si(c,v){return v=String(v),c.j&&(v=v.toLowerCase()),v}function Hu(c,v){v&&!c.j&&(wn(c),c.i=null,c.g.forEach(function(y,T){var j=T.toLowerCase();T!=j&&(Oi(this,T),Fo(this,j,y))},c)),c.j=v}function Sr(c,v){const y=new Sn;if(p.Image){const T=new Image;T.onload=L(An,y,"TestLoadImage: loaded",!0,v,T),T.onerror=L(An,y,"TestLoadImage: error",!1,v,T),T.onabort=L(An,y,"TestLoadImage: abort",!1,v,T),T.ontimeout=L(An,y,"TestLoadImage: timeout",!1,v,T),p.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else v(!1)}function Bn(c,v){const y=new Sn,T=new AbortController,j=setTimeout(()=>{T.abort(),An(y,"TestPingServer: timeout",!1,v)},1e4);fetch(c,{signal:T.signal}).then(G=>{clearTimeout(j),G.ok?An(y,"TestPingServer: ok",!0,v):An(y,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(j),An(y,"TestPingServer: error",!1,v)})}function An(c,v,y,T,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),T(y)}catch{}}function Tr(){this.g=new hr}function ri(c,v,y){const T=y||"";try{zo(c,function(j,G){let re=j;g(j)&&(re=zn(j)),v.push(T+G+"="+encodeURIComponent(re))})}catch(j){throw v.push(T+"type="+encodeURIComponent("_badmap")),j}}function Es(c){this.l=c.Ub||null,this.j=c.eb||!1}H(Es,Oo),Es.prototype.g=function(){return new Di(this.l,this.j)},Es.prototype.i=(function(c){return function(){return c}})({});function Di(c,v){lt.call(this),this.D=c,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}H(Di,lt),n=Di.prototype,n.open=function(c,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=v,this.readyState=1,oi(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(v.body=c),(this.D||p).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ai(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,oi(this)),this.g&&(this.readyState=3,oi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function qo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var v=c.value?c.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!c.done}))&&(this.response=this.responseText+=v)}c.done?ai(this):oi(this),this.readyState==3&&qo(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,ai(this))},n.Qa=function(c){this.g&&(this.response=c,ai(this))},n.ga=function(){this.g&&ai(this)};function ai(c){c.readyState=4,c.l=null,c.j=null,c.v=null,oi(c)}n.setRequestHeader=function(c,v){this.u.append(c,v)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],v=this.h.entries();for(var y=v.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=v.next();return c.join(`\r
`)};function oi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Vo(c){let v="";return be(c,function(y,T){v+=T,v+=":",v+=y,v+=`\r
`}),v}function St(c,v,y){e:{for(T in y){var T=!1;break e}T=!0}T||(y=Vo(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Ve(c,v,y))}function Be(c){lt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}H(Be,lt);var ba=/^https?$/i,wr=["POST","PUT"];n=Be.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,v,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);v=v?v.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ti.g(),this.v=this.o?ko(this.o):ko(ti),this.g.onreadystatechange=N(this.Ea,this);try{this.B=!0,this.g.open(v,String(c),!0),this.B=!1}catch(G){Bu(this,G);return}if(c=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var j in T)y.set(j,T[j]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const G of T.keys())y.set(G,T.get(G));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(G=>G.toLowerCase()=="content-type"),j=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(wr,v,void 0))||T||j||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,re]of y)this.g.setRequestHeader(G,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ar(this),this.u=!0,this.g.send(c),this.u=!1}catch(G){Bu(this,G)}};function Bu(c,v){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=v,c.m=5,Ea(c),li(c)}function Ea(c){c.A||(c.A=!0,He(c,"complete"),He(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,He(this,"complete"),He(this,"abort"),li(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),li(this,!0)),Be.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Sa(this):this.bb())},n.bb=function(){Sa(this)};function Sa(c){if(c.h&&typeof h<"u"&&(!c.v[1]||Cn(c)!=4||c.Z()!=2)){if(c.u&&Cn(c)==4)zt(c.Ea,0,c);else if(He(c,"readystatechange"),Cn(c)==4){c.h=!1;try{const re=c.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var y;if(!(y=v)){var T;if(T=re===0){var j=String(c.D).match(yr)[1]||null;!j&&p.self&&p.self.location&&(j=p.self.location.protocol.slice(0,-1)),T=!ba.test(j?j.toLowerCase():"")}y=T}if(y)He(c,"complete"),He(c,"success");else{c.m=6;try{var G=2<Cn(c)?c.g.statusText:""}catch{G=""}c.l=G+" ["+c.Z()+"]",Ea(c)}}finally{li(c)}}}}function li(c,v){if(c.g){Ar(c);const y=c.g,T=c.v[0]?()=>{}:null;c.g=null,c.v=null,v||He(c,"ready");try{y.onreadystatechange=T}catch{}}}function Ar(c){c.I&&(p.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Cn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var v=this.g.responseText;return c&&v.indexOf(c)==0&&(v=v.substring(c.length)),ha(v)}};function Fu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function yh(c){const v={};c=(c.g&&2<=Cn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(Z(c[T]))continue;var y=M(c[T]);const j=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const G=v[j]||[];v[j]=G,G.push(y)}D(v,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cr(c,v,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||v}function Ta(c){this.Aa=0,this.i=[],this.j=new Sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cr("baseRetryDelayMs",5e3,c),this.cb=Cr("retryDelaySeedMs",1e4,c),this.Wa=Cr("forwardChannelMaxRetries",2,c),this.wa=Cr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ni(c&&c.concurrentRequestLimit),this.Da=new Tr,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ta.prototype,n.la=8,n.G=1,n.connect=function(c,v,y,T){nt(0),this.W=c,this.H=v||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.I=Wu(this,null,this.W),Aa(this)};function Go(c){if(qu(c),c.G==3){var v=c.U++,y=ln(c.I);if(Ve(y,"SID",c.K),Ve(y,"RID",v),Ve(y,"TYPE","terminate"),Rr(c,y),v=new Yt(c,c.j,v),v.L=2,v.v=br(ln(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(v.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=v.v,y=!0),y||(v.g=Xu(v.j,null),v.g.ea(v.v)),v.F=Date.now(),gr(v)}Ku(c)}function wa(c){c.g&&(Nr(c),c.g.cancel(),c.g=null)}function qu(c){wa(c),c.u&&(p.clearTimeout(c.u),c.u=null),Ca(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function Aa(c){if(!ma(c.h)&&!c.s){c.s=!0;var v=c.Ga;ae||x(),he||(ae(),he=!0),Le.add(v,c),c.B=0}}function _h(c,v){return ga(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=v.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=pt(N(c.Ga,c,v),Ko(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const j=new Yt(this,this.j,c);let G=this.o;if(this.S&&(G?(G=A(G),k(G,this.S)):G=this.S),this.m!==null||this.O||(j.H=G,G=null),this.P)e:{for(var v=0,y=0;y<this.i.length;y++){t:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(v+=T,4096<v){v=y;break e}if(v===4096||y===this.i.length-1){v=y+1;break e}}v=1e3}else v=1e3;v=Vu(this,j,v),y=ln(this.I),Ve(y,"RID",c),Ve(y,"CVER",22),this.D&&Ve(y,"X-HTTP-Session-Id",this.D),Rr(this,y),G&&(this.O?v="headers="+encodeURIComponent(String(Vo(G)))+"&"+v:this.m&&St(y,this.m,G)),va(this.h,j),this.Ua&&Ve(y,"TYPE","init"),this.P?(Ve(y,"$req",v),Ve(y,"SID","null"),j.T=!0,Hn(j,y,null)):Hn(j,y,v),this.G=2}}else this.G==3&&(c?Yo(this,c):this.i.length==0||ma(this.h)||Yo(this))};function Yo(c,v){var y;v?y=v.l:y=c.U++;const T=ln(c.I);Ve(T,"SID",c.K),Ve(T,"RID",y),Ve(T,"AID",c.T),Rr(c,T),c.m&&c.o&&St(T,c.m,c.o),y=new Yt(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),v&&(c.i=v.D.concat(c.i)),v=Vu(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),va(c.h,y),Hn(y,T,v)}function Rr(c,v){c.H&&be(c.H,function(y,T){Ve(v,T,y)}),c.l&&zo({},function(y,T){Ve(v,T,y)})}function Vu(c,v,y){y=Math.min(c.i.length,y);var T=c.l?N(c.l.Na,c.l,c):null;e:{var j=c.i;let G=-1;for(;;){const re=["count="+y];G==-1?0<y?(G=j[0].g,re.push("ofs="+G)):G=0:re.push("ofs="+G);let je=!0;for(let it=0;it<y;it++){let Ie=j[it].g;const Tt=j[it].map;if(Ie-=G,0>Ie)G=Math.max(0,j[it].g-100),je=!1;else try{ri(Tt,re,"req"+Ie+"_")}catch{T&&T(Tt)}}if(je){T=re.join("&");break e}}}return c=c.i.splice(0,y),v.D=c,T}function Gu(c){if(!c.g&&!c.u){c.Y=1;var v=c.Fa;ae||x(),he||(ae(),he=!0),Le.add(v,c),c.v=0}}function $o(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=pt(N(c.Fa,c),Ko(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=pt(N(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),wa(this),Yu(this))};function Nr(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function Yu(c){c.g=new Yt(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var v=ln(c.qa);Ve(v,"RID","rpc"),Ve(v,"SID",c.K),Ve(v,"AID",c.T),Ve(v,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ve(v,"TO",c.ja),Ve(v,"TYPE","xmlhttp"),Rr(c,v),c.m&&c.o&&St(v,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=br(ln(v)),y.m=null,y.P=!0,Ri(y,c)}n.Za=function(){this.C!=null&&(this.C=null,wa(this),$o(this),nt(19))};function Ca(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function $u(c,v){var y=null;if(c.g==v){Ca(c),Nr(c),c.g=null;var T=2}else if(Uo(c.h,v))y=v.D,$t(c.h,v),T=1;else return;if(c.G!=0){if(v.o)if(T==1){y=v.m?v.m.length:0,v=Date.now()-v.F;var j=c.B;T=dr(),He(T,new yt(T,y)),Aa(c)}else Gu(c);else if(j=v.s,j==3||j==0&&0<v.X||!(T==1&&_h(c,v)||T==2&&$o(c)))switch(y&&0<y.length&&(v=c.h,v.i=v.i.concat(y)),j){case 1:Mi(c,5);break;case 4:Mi(c,10);break;case 3:Mi(c,6);break;default:Mi(c,2)}}}function Ko(c,v){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*v}function Mi(c,v){if(c.j.info("Error code "+v),v==2){var y=N(c.fb,c),T=c.Xa;const j=!T;T=new mt(T||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||_r(T,"https"),br(T),j?Sr(T.toString(),y):Bn(T.toString(),y)}else nt(2);c.G=0,c.l&&c.l.sa(v),Ku(c),qu(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Ku(c){if(c.G=0,c.ka=[],c.l){const v=jo(c.h);(v.length!=0||c.i.length!=0)&&(V(c.ka,v),V(c.ka,c.i),c.h.i.length=0,$(c.i),c.i.length=0),c.l.ra()}}function Wu(c,v,y){var T=y instanceof mt?ln(y):new mt(y);if(T.g!="")v&&(T.g=v+"."+T.g),bs(T,T.s);else{var j=p.location;T=j.protocol,v=v?v+"."+j.hostname:j.hostname,j=+j.port;var G=new mt(null);T&&_r(G,T),v&&(G.g=v),j&&bs(G,j),y&&(G.l=y),T=G}return y=c.D,v=c.ya,y&&v&&Ve(T,y,v),Ve(T,"VER",c.la),Rr(c,T),T}function Xu(c,v,y){if(v&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=c.Ca&&!c.pa?new Be(new Es({eb:y})):new Be(c.pa),v.Ha(c.J),v}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qu(){}n=Qu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Qt(c,v){lt.call(this),this.g=new Ta(v),this.l=c,this.h=v&&v.messageUrlParams||null,c=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(c?c["X-WebChannel-Content-Type"]=v.messageContentType:c={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(c?c["X-WebChannel-Client-Profile"]=v.va:c={"X-WebChannel-Client-Profile":v.va}),this.g.S=c,(c=v&&v.Sb)&&!Z(c)&&(this.g.m=c),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!Z(v)&&(this.g.D=v,c=this.h,c!==null&&v in c&&(c=this.h,v in c&&delete c[v])),this.j=new Ss(this)}H(Qt,lt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Go(this.g)},Qt.prototype.o=function(c){var v=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=zn(c),c=y);v.i.push(new ju(v.Ya++,c)),v.G==3&&Aa(v)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Go(this.g),delete this.g,Qt.aa.N.call(this)};function Zu(c){Ai.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var v=c.__sm__;if(v){e:{for(const y in v){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,v=v!==null&&c in v?v[c]:void 0),this.data=v}else this.data=c}H(Zu,Ai);function Ju(){Do.call(this),this.status=1}H(Ju,Do);function Ss(c){this.g=c}H(Ss,Qu),Ss.prototype.ua=function(){He(this.g,"a")},Ss.prototype.ta=function(c){He(this.g,new Zu(c))},Ss.prototype.sa=function(c){He(this.g,new Ju)},Ss.prototype.ra=function(){He(this.g,"b")},Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,mr.NO_ERROR=0,mr.TIMEOUT=8,mr.HTTP_ERROR=6,ys.COMPLETE="complete",ku.EventType=wi,wi.OPEN="a",wi.CLOSE="b",wi.ERROR="c",wi.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha}).apply(typeof lf<"u"?lf:typeof self<"u"?self:typeof window<"u"?window:{});const mE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new gu("@firebase/firestore");function Wn(n,...e){if(_o.logLevel<=Ue.DEBUG){const i=e.map(Ug);_o.debug(`Firestore (${Ru}): ${n}`,...i)}}function Tw(n,...e){if(_o.logLevel<=Ue.ERROR){const i=e.map(Ug);_o.error(`Firestore (${Ru}): ${n}`,...i)}}function z3(n,...e){if(_o.logLevel<=Ue.WARN){const i=e.map(Ug);_o.warn(`Firestore (${Ru}): ${n}`,...i)}}function Ug(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(i){return JSON.stringify(i)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n="Unexpected state"){const e=`FIRESTORE (${Ru}) INTERNAL ASSERTION FAILED: `+n;throw Tw(e),new Error(e)}function Zl(n,e){n||jg()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class sn extends Un{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.promise=new Promise(((e,i)=>{this.resolve=e,this.reject=i}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class H3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable((()=>i(Wt.UNAUTHENTICATED)))}shutdown(){}}class B3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class F3{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){Zl(this.o===void 0);let r=this.i;const o=m=>this.i!==r?(r=this.i,i(m)):Promise.resolve();let u=new Jl;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Jl,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const m=u;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},p=m=>{Wn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((m=>p(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(Wn("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Jl)}}),0),h()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((r=>this.i!==e?(Wn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Zl(typeof r.accessToken=="string"),new ww(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Zl(e===null||typeof e=="string"),new Wt(e)}}class q3{constructor(e,i,r){this.l=e,this.h=i,this.P=r,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class V3{constructor(e,i,r){this.l=e,this.h=i,this.P=r}getToken(){return Promise.resolve(new q3(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable((()=>i(Wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class G3{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Y3{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,i){Zl(this.o===void 0);const r=u=>{u.error!=null&&Wn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,Wn("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?i(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>r(u)))};const o=u=>{Wn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):Wn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((i=>i?(Zl(typeof i.token=="string"),this.R=i.token,new G3(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function $3(n){return n.name==="IndexedDbTransactionError"}class Vf{constructor(e,i){this.projectId=e,this.database=i||"(default)"}static empty(){return new Vf("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vf&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gE,Oe;(Oe=gE||(gE={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Sw([4294967295,4294967295],0);function qp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{constructor(e,i,r=1e3,o=1.5,u=6e4){this.ui=e,this.timerId=i,this.ko=r,this.qo=o,this.Qo=u,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const i=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),o=Math.max(0,i-r);o>0&&Wn("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${i} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,i,r,o,u){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=r,this.op=o,this.removalCallback=u,this.deferred=new Jl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,i,r,o,u){const h=Date.now()+r,p=new zg(e,i,h,o,u);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new sn(nn.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var vE,yE;(yE=vE||(vE={})).ea="default",yE.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W3(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=new Map;function X3(n,e,i,r){if(e===!0&&r===!0)throw new sn(nn.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function Q3(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":jg()}function Z3(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new sn(nn.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Q3(n);throw new sn(nn.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){var i,r;if(e.host===void 0){if(e.ssl!==void 0)throw new sn(nn.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(i=e.ssl)===null||i===void 0||i;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new sn(nn.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}X3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=W3((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new sn(nn.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new sn(nn.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new sn(nn.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Aw{constructor(e,i,r,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new sn(nn.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new sn(nn.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bE(e),e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new H3;switch(r.type){case"firstParty":return new V3(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new sn(nn.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const r=_E.get(i);r&&(Wn("ComponentProvider","Removing Datastore"),_E.delete(i),r.terminate())})(this),Promise.resolve()}}function J3(n,e,i,r={}){var o;const u=(n=Z3(n,Aw))._getSettings(),h=`${e}:${i}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&z3("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),r.mockUserToken){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=Wt.MOCK_USER;else{p=Jm(r.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new sn(nn.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Wt(g)}n._authCredentials=new B3(new ww(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new K3(this,"async_queue_retry"),this.Vu=()=>{const r=qp();r&&Wn("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const i=qp();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const i=qp();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const i=new Jl;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!$3(e))throw e;Wn("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const i=this.mu.then((()=>(this.du=!0,e().catch((r=>{this.Eu=r,this.du=!1;const o=(function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p})(r);throw Tw("INTERNAL UNHANDLED ERROR: ",o),r})).then((r=>(this.du=!1,r))))));return this.mu=i,i}enqueueAfterDelay(e,i,r){this.fu(),this.Ru.indexOf(e)>-1&&(i=0);const o=zg.createAndSchedule(this,e,i,r,(u=>this.yu(u)));return this.Tu.push(o),o}fu(){this.Eu&&jg()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const i of this.Tu)if(i.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((i,r)=>i.targetTimeMs-r.targetTimeMs));for(const i of this.Tu)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const i=this.Tu.indexOf(e);this.Tu.splice(i,1)}}class eP extends Aw{constructor(e,i,r,o){super(e,i,r,o),this.type="firestore",this._queue=new EE,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new EE(e),this._firestoreClient=void 0,await e}}}function tP(n,e){const i=typeof n=="object"?n:vu(),r=typeof n=="string"?n:"(default)",o=ps(i,"firestore").getImmediate({identifier:r});if(!o._initialized){const u=Qm("firestore");u&&J3(o,...u)}return o}(function(e,i=!0){(function(o){Ru=o})(nr),Ln(new yn("firestore",((r,{instanceIdentifier:o,options:u})=>{const h=r.getProvider("app").getImmediate(),p=new eP(new F3(r.getProvider("auth-internal")),new Y3(r.getProvider("app-check-internal")),(function(g,b){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new sn(nn.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vf(g.options.projectId,b)})(h,o),h);return u=Object.assign({useFetchStreams:i},u),p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),Gt(mE,"4.7.3",e),Gt(mE,"4.7.3","esm2017")})();const nP={apiKey:"AIzaSyA3v4xZTdcV6Ar9I2jcplyIREcUJua2uhU",authDomain:"react2-app-6c7fa.firebaseapp.com",databaseURL:"https://react2-app-6c7fa-default-rtdb.firebaseio.com/",projectId:"react2-app-6c7fa",storageBucket:"react2-app-6c7fa.appspot.com",messagingSenderId:"328980738231",appId:"1:328980738231:web:f2ad5fd5b323e34e3e5d32",measurementId:"G-FZ194GRZ75"},Nu=nT(nP);typeof window<"u"&&lD(Nu);UD(Nu);AL(Nu);const Cw=U3(Nu);tP(Nu);const iP=()=>{const[n,e]=Y.useState(""),[i,r]=Y.useState(""),[o,u]=Y.useState(!1),[h,p]=Y.useState(!1),[m,g]=Y.useState(""),[b,S]=Y.useState(""),[N,L]=Y.useState(!1),H=fu(),$=J=>{switch(J){case"auth/invalid-email":return"Please enter a valid email address.";case"auth/user-disabled":return"This account has been disabled. Please contact support.";case"auth/user-not-found":return"No account found with this email. Please sign up first.";case"auth/wrong-password":return"Incorrect password. Please try again.";case"auth/network-request-failed":return"Network error. Please check your internet connection.";case"auth/too-many-requests":return"Too many failed attempts. Please try again later.";default:return"An unexpected error occurred. Please try again."}},V=async()=>{if(g(""),S(""),!n.trim()){g("Please enter your email address"),S("error");return}if(!i){g("Please enter your password"),S("error");return}L(!0);try{await w9(Cw,n,i),localStorage.setItem("userEmail",n.trim()),g("Sign in successful! Redirecting..."),S("success"),setTimeout(()=>{H("/account")},1500)}catch(J){const Z=J.code,ee=$(Z);g(ee),S("error"),console.error("Signin error:",J)}finally{L(!1)}};return w.jsx("div",{className:"signin-container",children:w.jsxs("div",{className:"signin-card",children:[w.jsx("h1",{className:"signin-header",children:"Sign In"}),w.jsx("input",{type:"email",placeholder:"Email",className:"signin-input",value:n,onChange:J=>e(J.target.value),autoCapitalize:"none"}),w.jsxs("div",{className:"signin-password-container",children:[w.jsx("input",{type:h?"text":"password",placeholder:"Password",className:"signin-password-input",value:i,onChange:J=>r(J.target.value)}),w.jsx("button",{className:"signin-eye-icon",onClick:()=>p(!h),children:w.jsx("ion-icon",{name:h?"eye-off-outline":"eye-outline"})})]}),m&&w.jsx("p",{className:`signin-status-message ${b==="error"?"signin-error-message":"signin-success-message"}`,children:m}),w.jsx("button",{className:`signin-button ${N?"signin-button-disabled":""}`,onClick:V,disabled:N,children:N?"Signing In...":"Sign In"}),w.jsxs("p",{className:"signin-link",children:["Don't have an account?"," ",w.jsx($f,{to:"/signup",className:`signin-sign-up-text ${o?"signin-sign-up-text-hovered":""}`,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:"Sign Up"})]})]})})},sP=()=>{const[n,e]=Y.useState(""),[i,r]=Y.useState(""),[o,u]=Y.useState(""),[h,p]=Y.useState(!1),[m,g]=Y.useState(!1),[b,S]=Y.useState(""),[N,L]=Y.useState(""),[H,$]=Y.useState(!1),V=fu(),J=ee=>{switch(ee){case"auth/email-already-in-use":return"This email is already registered. Please sign in or use a different email.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/operation-not-allowed":return"Email/password accounts are not enabled. Please contact support.";case"auth/weak-password":return"Password is too weak. Please use at least 6 characters.";case"auth/network-request-failed":return"Network error. Please check your internet connection.";case"auth/too-many-requests":return"Too many unsuccessful attempts. Please try again later.";default:return"An unexpected error occurred. Please try again."}},Z=async()=>{if(S(""),L(""),!n.trim()){S("Please enter a username"),L("error");return}if(!i.trim()){S("Please enter your email address"),L("error");return}if(!o){S("Please enter a password"),L("error");return}if(o.length<6){S("Password must be at least 6 characters long"),L("error");return}$(!0);try{await T9(Cw,i,o);const ee={username:n.trim(),email:i.trim(),createdAt:new Date().toISOString()};localStorage.setItem("userData",JSON.stringify(ee)),S("Account created successfully! Redirecting..."),L("success"),setTimeout(()=>{V("/account")},1500)}catch(ee){const ce=ee.code,ne=J(ce);S(ne),L("error"),console.error("Signup error:",ee)}finally{$(!1)}};return w.jsx("div",{className:"signup-container",children:w.jsxs("div",{className:"signup-card",children:[w.jsx("h1",{className:"signup-header",children:"Create Account"}),w.jsx("input",{type:"text",placeholder:"Username",className:"signup-input",value:n,onChange:ee=>e(ee.target.value)}),w.jsx("input",{type:"email",placeholder:"Email",className:"signup-input",value:i,onChange:ee=>r(ee.target.value),autoCapitalize:"none"}),w.jsxs("div",{className:"signup-password-container",children:[w.jsx("input",{type:m?"text":"password",placeholder:"Password",className:"signup-password-input",value:o,onChange:ee=>u(ee.target.value)}),w.jsx("button",{className:"signup-eye-icon",onClick:()=>g(!m),children:w.jsx("ion-icon",{name:m?"eye-off-outline":"eye-outline"})})]}),b&&w.jsx("p",{className:`signup-status-message ${N==="error"?"signup-error-message":"signup-success-message"}`,children:b}),w.jsx("button",{className:`signup-button ${H?"signup-button-disabled":""}`,onClick:Z,disabled:H,children:H?"Creating Account...":"Sign Up"}),w.jsxs("p",{className:"signup-link",children:["Already have an account?"," ",w.jsx($f,{to:"/signin",className:`signup-sign-in-text ${h?"signup-sign-in-text-hovered":""}`,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:"Sign In"})]})]})})},rP=()=>w.jsxs("div",{className:"products-not-available-container",children:[w.jsx("div",{className:"content",children:w.jsx("h1",{className:"title",children:"Details Not Available Yet."})}),w.jsx(bn,{})]}),aP=()=>w.jsxs("div",{className:"products-not-available-container",children:[w.jsx("div",{className:"content",children:w.jsx("h1",{className:"title",children:"Details Not Available Yet."})}),w.jsx(bn,{})]}),oP=()=>w.jsxs("div",{className:"products-not-available-container",children:[w.jsx("div",{className:"content",children:w.jsx("h1",{className:"title",children:"Details Not Available Yet."})}),w.jsx(bn,{})]}),lP=()=>w.jsxs("div",{className:"products-not-available-container",children:[w.jsx("div",{className:"content",children:w.jsx("h1",{className:"title",children:"Details Not Available Yet."})}),w.jsx(bn,{})]}),uP=()=>w.jsxs("div",{className:"products-not-available-container",children:[w.jsx("div",{className:"content",children:w.jsx("h1",{className:"title",children:"Details Not Available Yet."})}),w.jsx(bn,{})]}),cP=()=>w.jsxs("div",{className:"products-not-available-container",children:[w.jsx("div",{className:"content",children:w.jsx("h1",{className:"title",children:"Details Not Available Yet."})}),w.jsx(bn,{})]}),fP=()=>w.jsxs("div",{className:"products-not-available-container",children:[w.jsx("div",{className:"content",children:w.jsx("h1",{className:"title",children:"Details Not Available Yet."})}),w.jsx(bn,{})]}),hP=()=>w.jsxs("div",{className:"products-not-available-container",children:[w.jsx("div",{className:"content",children:w.jsx("h1",{className:"title",children:"Details Not Available Yet."})}),w.jsx(bn,{})]});function dP(){return w.jsx(ER,{children:w.jsxs("div",{className:"app-container",children:[w.jsx(DR,{}),w.jsx("main",{className:"main-content",children:w.jsxs(ZC,{children:[w.jsx(Pt,{path:"/",element:w.jsx(ix,{})}),w.jsx(Pt,{path:"/products",element:w.jsx(sx,{})}),w.jsx(Pt,{path:"/about",element:w.jsx(rx,{})}),w.jsx(Pt,{path:"/about-product",element:w.jsx(ux,{})}),w.jsx(Pt,{path:"/faqs",element:w.jsx(cx,{})}),w.jsx(Pt,{path:"/account",element:w.jsx(fx,{})}),w.jsx(Pt,{path:"/signin",element:w.jsx(iP,{})}),w.jsx(Pt,{path:"/signup",element:w.jsx(sP,{})}),w.jsx(Pt,{path:"/installation-request",element:w.jsx(rP,{})}),w.jsx(Pt,{path:"/warranty-registration",element:w.jsx(aP,{})}),w.jsx(Pt,{path:"/shipping-policy",element:w.jsx(oP,{})}),w.jsx(Pt,{path:"/service-request",element:w.jsx(lP,{})}),w.jsx(Pt,{path:"/terms-and-conditions",element:w.jsx(uP,{})}),w.jsx(Pt,{path:"/privacy-policy",element:w.jsx(cP,{})}),w.jsx(Pt,{path:"/return-and-refund",element:w.jsx(fP,{})}),w.jsx(Pt,{path:"/support",element:w.jsx(hP,{})})]})})]})})}lC.createRoot(document.getElementById("root")).render(w.jsx(Y.StrictMode,{children:w.jsx(dP,{})}));
