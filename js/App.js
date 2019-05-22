!function(e){function t(t){for(var r,o,i=t[0],a=t[1],c=t[2],u=0,d=[];u<i.length;u++)o=i[u],N[o]&&d.push(N[o][0]),N[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(F&&F(t);d.length;)d.shift()();return T.push.apply(T,c||[]),n()}function n(){for(var e,t=0;t<T.length;t++){for(var n=T[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==N[i]&&(r=!1)}r&&(T.splice(t--,1),e=x(x.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--m&&0===g&&P()}(e,t),r&&r(e,t)};var o,i=!0,a="4345a46f5872ad1898d1",c=1e4,u={},d=[],s=[];var l=[],p="idle";function f(e){p=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var h,v,y,m=0,g=0,b={},E={},w={};function j(e){return+e+""===e?+e:e}function O(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=x.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;E={},b={},w=e.c,y=e.h,f("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});for(var n in v={},N)_(n);return"prepare"===p&&0===g&&0===m&&P(),t})}function _(e){w[e]?(E[e]=!0,m++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=x.p+""+e+"."+a+".hot-update.js",t.appendChild(n)}(e)):b[e]=!0}function P(){f("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then(function(){return D(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(j(n));e.resolve(t)}}function D(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,o,i,c;function s(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,c=o.chain;if((i=I[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var u=0;u<i.parents.length;u++){var d=i.parents[u],s=I[d];if(s){if(s.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([d]),moduleId:a,parentId:d};-1===t.indexOf(d)&&(s.hot._acceptedDependencies[a]?(n[d]||(n[d]=[]),l(n[d],[a])):(delete n[d],t.push(d),r.push({chain:c.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},m=[],g={},b=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var E in v)if(Object.prototype.hasOwnProperty.call(v,E)){var O;c=j(E);var _=!1,P=!1,D=!1,k="";switch((O=v[E]?s(c):{type:"disposed",moduleId:E}).chain&&(k="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+O.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(_=new Error("Aborted because "+c+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(O),P=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),D=!0;break;default:throw new Error("Unexception type "+O.type)}if(_)return f("abort"),Promise.reject(_);if(P)for(c in g[c]=v[c],l(m,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,c)&&(h[c]||(h[c]=[]),l(h[c],O.outdatedDependencies[c]));D&&(l(m,[O.moduleId]),g[c]=b)}var T,H=[];for(r=0;r<m.length;r++)c=m[r],I[c]&&I[c].hot._selfAccepted&&H.push({module:c,errorHandler:I[c].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete N[e]}(e)});for(var S,A,F=m.slice();F.length>0;)if(c=F.pop(),i=I[c]){var M={},q=i.hot._disposeHandlers;for(o=0;o<q.length;o++)(n=q[o])(M);for(u[c]=M,i.hot.active=!1,delete I[c],delete h[c],o=0;o<i.children.length;o++){var C=I[i.children[o]];C&&((T=C.parents.indexOf(c))>=0&&C.parents.splice(T,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(i=I[c]))for(A=h[c],o=0;o<A.length;o++)S=A[o],(T=i.children.indexOf(S))>=0&&i.children.splice(T,1);for(c in f("apply"),a=y,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var U=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(i=I[c])){A=h[c];var B=[];for(r=0;r<A.length;r++)if(S=A[r],n=i.hot._acceptedDependencies[S]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:A[r],error:e}),t.ignoreErrored||U||(U=e)}}}for(r=0;r<H.length;r++){var L=H[r];c=L.module,d=[c];try{x(c)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||U||(U=n),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||U||(U=e)}}return U?(f("fail"),Promise.reject(U)):(f("idle"),new Promise(function(e){e(m)}))}var I={},k={1:0},N={1:0},T=[];function x(t){if(I[t])return I[t].exports;var n=I[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:D,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:u[e]};return o=void 0,t}(t),parents:(s=d,d=[],s),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=I[e];if(!t)return x;var n=function(n){return t.hot.active?(I[n]?-1===I[n].parents.indexOf(e)&&I[n].parents.push(e):(d=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),d=[]),x(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(t){x[e]=t}}};for(var i in x)Object.prototype.hasOwnProperty.call(x,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===p&&f("prepare"),g++,x.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===p&&(b[e]||_(e),0===g&&0===m&&P())}},n.t=function(e,t){return 1&t&&(e=n(e)),x.t(e,-2&t)},n}(t)),n.l=!0,n.exports}x.e=function(e){var t=[];k[e]?t.push(k[e]):0!==k[e]&&{2:1}[e]&&t.push(k[e]=new Promise(function(t,n){for(var r="css/"+({0:"NotificationEdit~NotificationsIndex",2:"NotificationsIndex",3:"NotificationEdit"}[e]||e)+".css",o=x.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var c=(d=i[a]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(c===r||c===o))return t()}var u=document.getElementsByTagName("style");for(a=0;a<u.length;a++){var d;if((c=(d=u[a]).getAttribute("data-href"))===r||c===o)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,n(i)},s.href=o,document.getElementsByTagName("head")[0].appendChild(s)}).then(function(){k[e]=0}));var n=N[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=N[e]=[t,r]});t.push(n[2]=r);var o,i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.charset="utf-8",a.timeout=120,x.nc&&a.setAttribute("nonce",x.nc),a.src=function(e){return x.p+"js/"+({0:"NotificationEdit~NotificationsIndex",2:"NotificationsIndex",3:"NotificationEdit"}[e]||e)+".js"}(e),o=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=N[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}N[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,i.appendChild(a)}return Promise.all(t)},x.m=e,x.c=I,x.d=function(e,t,n){x.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},x.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.t=function(e,t){if(1&t&&(e=x(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(x.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)x.d(n,r,function(t){return e[t]}.bind(null,r));return n},x.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(t,"a",t),t},x.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},x.p="/beta/apps/hooks/",x.oe=function(e){throw console.error(e),e},x.h=function(){return a};var H=window.webpackJsonp=window.webpackJsonp||[],S=H.push.bind(H);H.push=t,H=H.slice();for(var A=0;A<H.length;A++)t(H[A]);var F=S;T.push([382,4]),n()}({16:function(e,t,n){"use strict";var r=n(24),o=n.n(r),i=n(25),a=n.n(i),c={"Content-Type":"application/json",Accept:"application/json"},u=function(){function e(){o()(this,e)}return a()(e,null,[{key:"request",value:function(e,t,n){return window.insights.chrome.auth.getUser().then(function(){return fetch("/api/hooks".concat(e),{method:n||"get",headers:c,body:JSON.stringify(t)})}).then(function(e){if(!e.ok&&422!==e.status)throw new Error(e.statusText);return 422===e.status?e.clone().json().then(function(e){return Promise.reject(e)}):204!==e.status?e.json():{}})}},{key:"create",value:function(e,t){return this.request(e,t,"post")}},{key:"update",value:function(e,t){return this.request(e,t,"put")}},{key:"get",value:function(e){return this.request(e)}},{key:"destroy",value:function(e){return this.request(e,null,"delete")}}]),e}();n.d(t,"e",function(){return d}),n.d(t,"d",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"g",function(){return p}),n.d(t,"a",function(){return f}),n.d(t,"f",function(){return h}),n.d(t,"h",function(){return v}),n.d(t,"b",function(){return y}),n.d(t,"m",function(){return m}),n.d(t,"l",function(){return g}),n.d(t,"i",function(){return b}),n.d(t,"r",function(){return E}),n.d(t,"q",function(){return w}),n.d(t,"j",function(){return j}),n.d(t,"o",function(){return O}),n.d(t,"p",function(){return _}),n.d(t,"n",function(){return P}),n.d(t,"k",function(){return D});var d="FETCH_FILTER",s="FETCH_ENDPOINTS",l="FETCH_ENDPOINT",p="SUBMIT_ENDPOINT",f="DELETE_ENDPOINT",h="NEW_ENDPOINT",v="TEST_ENDPOINT",y="FETCH_APPS",m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name asc",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o={offset:(e-1)*t,limit:t,sort_by:n},i=[];Object.keys(o).map(function(e){var t=o[e];void 0!==t&&i.push("".concat(e,"=").concat(t))});var a="/endpoints?".concat(i.join("&"));return{type:s,payload:u.get(a),meta:{endpoint:a,sortBy:n,partial:r,notifications:{rejected:{variant:"danger",title:"Failed to load endpoints"}}}}},g=function(e){return{type:l,payload:u.get("/endpoints/".concat(e)),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load endpoint ".concat(e)}}}}},b=function(e){return{type:p,payload:u.create("/endpoints",{endpoint:e}),meta:{data:e,notifications:{rejected:{variant:"danger",title:"Failed to create endpoint ".concat(e.name)},fulfilled:{variant:"success",title:"Endpoint ".concat(e.name," created")}}}}},E=function(e,t){return{type:p,payload:u.update("/endpoints/".concat(e),{endpoint:t}),meta:{data:t,notifications:{rejected:{variant:"danger",title:"Failed to update endpoint ".concat(t.name)},fulfilled:{variant:"success",title:"Endpoint ".concat(t.name," updated")}}}}},w=function(e,t){return{type:p,payload:u.update("/endpoints/".concat(e),{endpoint:{active:t}}),meta:{notifications:{rejected:{variant:"danger",title:"Failed to toggle endpoint ".concat(e)}}}}},j=function(e,t){return{type:f,payload:u.destroy("/endpoints/".concat(e)).then(function(){return{id:e}}),meta:{notifications:{rejected:{variant:"danger",title:"Failed to delete endpoint ".concat(t)},fulfilled:{variant:"success",title:"Endpoint ".concat(t," deleted")}}}}},O=function(){return{type:h}},_=function(e){return{type:v,payload:u.create("/endpoints/".concat(e,"/test"),{}),meta:{endpointId:e,notifications:{rejected:{variant:"warning",title:"Test event delivery failed"},fulfilled:{variant:"success",title:"Test event delivery successful"}}}}},P=function(e){return{type:d,payload:u.get("/endpoints/".concat(e,"/filter")).catch(function(e){if("Not Found"===e.message)return{data:null};throw e}),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load filter"}}}}},D=function(){return{type:y,payload:u.get("/apps"),meta:{notifications:{rejected:{variant:"danger",title:"Failed to load apps"}}}}}},379:function(e,t,n){},382:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=n(17),a=n.n(i),c=n(178),u=n(28),d=n(193),s=n.n(d),l=n(203),p=n(7),f=n.n(p),h=n(16),v=n(194),y=n.n(v),m=n(159),g=n.n(m),b=n(152),E=n.n(b),w=n(195),j=n.n(w),O={loading:!1,error:null},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},O);return n[e]=t,n},P=function(e){return e+"_FULFILLED"},D=function(e){return e+"_PENDING"},I=function(e){return e+"_REJECTED"},k=function(e,t){return t.find(function(t){return parseInt(t.id)===parseInt(e)})},N=function(e){return E()(e,function(e,t){return"id"===t?parseInt(e):e})},T=function e(t,n){if(!t||!t.relationships)return t;var r={};return Object.keys(t.relationships).forEach(function(o){var i=Object.values(t.relationships[o].data),a=i.map(function(e){return e.id});r[o]||(r[o]={}),a.forEach(function(t){var a=e(k(t,i),n),c=e(function(e,t,n){var r=e[n.slice(0,-1)],o=r?k(t,Object.values(r)):{};return o||{}}(n,t,o),n);r[o][t]=N(f()({},a,c))})}),N(f()({},t,r))},x=function(e,t){return function(e){var t={};return Object.keys(e).forEach(function(n){var r=e[n];Object.keys(r).forEach(function(o){t[n]||(t[n]={}),t[n][o]=T(r[o],e)})}),t}(j()(e,{endpoint:t}))};var H,S=function(e,t){if(e&&t){var n=t.split(" "),r=g()(e).sort(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(n,r){if(!n.hasOwnProperty(e)||!r.hasOwnProperty(e))return 0;var o=n[e],i=r[e],a=0;return o>i?a=1:o<i&&(a=-1),"desc"===t?-1*a:a}}(n[0],n[1]));e=y()({},r)}return e||{}},A=function(e,t,n,r){var o=x(e,n)[t];return o=E()(o,function(e){return f()({},e,e.attributes)}),S(o,r)},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_("apps",{}),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D(h.b):return f()({},e,{loading:!0,error:null});case P(h.b):return f()({},e,{loading:!1,error:null,apps:function(e){return A(e,"app")}(t.payload)});case I(h.b):return f()({},e,{loading:!1,error:t.payload.message,apps:{}});default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_("filter",{}),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D(h.e):return f()({},e,{filter:{},loading:!0,error:null});case P(h.e):return f()({},e,{loading:!1,error:null,filter:function(e){return null===e.data?{}:A(e,"filter")[e.data.id]}(t.payload)});case I(h.e):return f()({},e,{loading:!1,error:t.payload.errors,filter:{}});default:return e}},q=n(196),C=n.n(q),U=n(197),B=n.n(U),L=n(30),R=n.n(L),J=n(188),G=n.n(J),W=function(e,t,n){return A(e,"endpoint",t,n)},X=function(e,t,n){var r=G()(e.endpoints,function(e){return e.id===t}),o=e.endpoints[r],i=new Date(Date.now()).toISOString(),a={lastDeliveryStatus:n,lastDeliveryTime:i};return"failure"===n&&"failure"!==o.status&&(a.firstFailureTime=i),f()({},e,{endpoints:Object.assign(e.endpoints,R()({},r,f()({},o,a)))})},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_("endpoints",{}),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D(h.d):return f()({},e,{loading:!t.meta.partial,error:null});case P(h.d):return function(e,t){if(0===t.payload.data.length)return f()({},e,{loading:!1});var n=W(t.payload,t.meta.endpoint,t.meta.sortBy);if(t.meta.partial){var r=Object.values(n)[0];n=S(f()({},e.endpoints,{new:r}),t.meta.sortBy)}return f()({},e,{loading:!1,endpoints:n,total:t.payload.meta.total})}(e,t);case I(h.d):return f()({},e,{loading:!1,error:t.payload.message,endpoints:{}});case D(h.c):return f()({},e,{loading:!0,error:null});case P(h.c):return f()({},e,{error:null,loading:!1,endpoint:W(t.payload)});case I(h.c):return f()({},e,{loading:!1,error:t.payload.message});case I(h.a):return f()({},e,{error:t.payload.message});case P(h.a):return f()({},e,{endpoints:function(e,t){var n=G()(e,function(e){return e.id===t}),r=e[n];return{remaining:C()(e,[n].map(B.a)),removed:r}}(e.endpoints,t.payload.id).remaining,total:e.total-1});case D(h.g):return f()({},e,{submitting:!0});case P(h.g):return f()({},e,function(e,t){var n=Object.values(t.endpoint)[0],r=G()(e.endpoints,function(e){return e.id===n.id}),o=R()({},r,n);return f()({},e,{endpoint:n,endpoints:Object.assign(e.endpoints,o)})}(e,x(t.payload)),{submitting:!1,message:"Endpoint saved"});case I(h.g):return f()({},e,{submitting:!1,endpoint:t.meta.data,errors:t.payload,error:t.payload.message});case h.f:return f()({},e,{endpoint:null});case I(h.h):return X(e,t.meta.endpointId,"failure");case P(h.h):return X(e,t.meta.endpointId,"success");default:return e}},K=n(124);var Q=n(24),V=n.n(Q),Y=n(25),Z=n.n(Y),$=n(31),ee=n.n($),te=n(32),ne=n.n(te),re=n(33),oe=n.n(re),ie=n(1),ae=n.n(ie),ce=n(187),ue=n(180),de=n(71),se=n(184),le=n(191),pe=n.n(le),fe=n(200),he=n.n(fe);function ve(e){return function(t){function n(e){var t;return V()(this,n),(t=ee()(this,ne()(n).call(this,e))).state={component:null},t}return oe()(n,t),Z()(n,[{key:"componentDidMount",value:function(){var t=he()(pe.a.mark(function t(){var n,r;return pe.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?o.a.createElement(e,this.props):o.a.createElement("div",null,"Loading...")}}]),n}(r.Component)}var ye=n(201),me=n.n(ye),ge=ve(function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,663))}),be=ve(function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,662))}),Ee={notificationsIndex:"/",notificationEdit:"/edit/:endpointId",notificationCreate:"/new"},we=function(e){var t=e.childProps.location.pathname;return o.a.createElement(ue.a,null,o.a.createElement(de.a,{exact:!0,path:Ee.notificationsIndex,component:ge}),o.a.createElement(de.a,{exact:!0,path:Ee.notificationCreate,component:be}),o.a.createElement(de.a,{path:Ee.notificationEdit,component:be}),o.a.createElement(de.a,{render:function(){return me()(Ee,function(e){return e===t})?null:o.a.createElement(se.a,{to:Ee.notificationsIndex})}}))};we.propTypes={childProps:ae.a.object.isRequired};n(377),n(379);var je=function(e){function t(){return V()(this,t),ee()(this,ne()(t).apply(this,arguments))}return oe()(t,e),Z()(t,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("hooks"),insights.chrome.navigation(_e()),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation(_e())})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return o.a.createElement(r.Fragment,null,o.a.createElement(K.NotificationsPortal,null),o.a.createElement(we,{childProps:this.props}))}}]),t}(r.Component);je.propTypes={history:ae.a.object};var Oe=Object(ce.a)(Object(u.connect)()(je));function _e(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Hooks",id:"hooks"}].map(function(t){return f()({},t,{active:t.id===e})})}var Pe=window.location.pathname.split("/");Pe.shift();var De="/";"beta"===Pe[0]&&(De="/".concat(Pe.shift(),"/")),a.a.render(o.a.createElement(u.Provider,{store:function(){if(H)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(H=new s.a({},[Object(l.a)(),Object(K.notificationsMiddleware)()].concat(t))).register({filter:M,endpoints:z,apps:F,notifications:K.notifications}),H}().getStore()},o.a.createElement(c.a,{basename:"".concat(De).concat(Pe[0],"/").concat(Pe[1],"/").concat(Pe[2])},o.a.createElement(Oe,null))),document.getElementById("root"))}});
//# sourceMappingURL=../sourcemaps/App.js.map