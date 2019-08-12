!function(e){function n(n){for(var r,o,i=n[0],a=n[1],c=n[2],u=0,s=[];u<i.length;u++)o=i[u],N[o]&&s.push(N[o][0]),N[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(q&&q(n);s.length;)s.shift()();return T.push.apply(T,c||[]),t()}function t(){for(var e,n=0;n<T.length;n++){for(var t=T[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==N[i]&&(r=!1)}r&&(T.splice(n--,1),e=x(x.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!w[e]||!b[e])return;for(var t in b[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--m&&0===g&&P()}(e,n),r&&r(e,n)};var o,i=!0,a="e6d4ef0b89a39d45fb4c",c=1e4,u={},s=[],d=[];var l=[],f="idle";function p(e){f=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var h,v,y,m=0,g=0,E={},b={},w={};function O(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,p("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=x.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(c).then(function(e){if(!e)return p("idle"),null;b={},E={},w=e.c,y=e.h,p("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var t in v={},N)k(t);return"prepare"===f&&0===g&&0===m&&P(),n})}function k(e){w[e]?(b[e]=!0,m++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=x.p+""+e+"."+a+".hot-update.js",n.appendChild(t)}(e)):E[e]=!0}function P(){p("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then(function(){return D(i)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(O(t));e.resolve(n)}}function D(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,r,o,i,c;function d(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,c=o.chain;if((i=_[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var u=0;u<i.parents.length;u++){var s=i.parents[u],d=_[s];if(d){if(d.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([s]),moduleId:a,parentId:s};-1===n.indexOf(s)&&(d.hot._acceptedDependencies[a]?(t[s]||(t[s]=[]),l(t[s],[a])):(delete t[s],n.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},m=[],g={},E=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var b in v)if(Object.prototype.hasOwnProperty.call(v,b)){var j;c=O(b);var k=!1,P=!1,D=!1,I="";switch((j=v[b]?d(c):{type:"disposed",moduleId:b}).chain&&(I="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(k=new Error("Aborted because of self decline: "+j.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(k=new Error("Aborted because "+c+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(j),P=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),D=!0;break;default:throw new Error("Unexception type "+j.type)}if(k)return p("abort"),Promise.reject(k);if(P)for(c in g[c]=v[c],l(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,c)&&(h[c]||(h[c]=[]),l(h[c],j.outdatedDependencies[c]));D&&(l(m,[j.moduleId]),g[c]=E)}var T,H=[];for(r=0;r<m.length;r++)c=m[r],_[c]&&_[c].hot._selfAccepted&&H.push({module:c,errorHandler:_[c].hot._selfAccepted});p("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete N[e]}(e)});for(var S,A,q=m.slice();q.length>0;)if(c=q.pop(),i=_[c]){var C={},M=i.hot._disposeHandlers;for(o=0;o<M.length;o++)(t=M[o])(C);for(u[c]=C,i.hot.active=!1,delete _[c],delete h[c],o=0;o<i.children.length;o++){var F=_[i.children[o]];F&&((T=F.parents.indexOf(c))>=0&&F.parents.splice(T,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(i=_[c]))for(A=h[c],o=0;o<A.length;o++)S=A[o],(T=i.children.indexOf(S))>=0&&i.children.splice(T,1);for(c in p("apply"),a=y,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var U=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(i=_[c])){A=h[c];var B=[];for(r=0;r<A.length;r++)if(S=A[r],t=i.hot._acceptedDependencies[S]){if(-1!==B.indexOf(t))continue;B.push(t)}for(r=0;r<B.length;r++){t=B[r];try{t(A)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:c,dependencyId:A[r],error:e}),n.ignoreErrored||U||(U=e)}}}for(r=0;r<H.length;r++){var L=H[r];c=L.module,s=[c];try{x(c)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:e}),n.ignoreErrored||U||(U=t),U||(U=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:c,error:e}),n.ignoreErrored||U||(U=e)}}return U?(p("fail"),Promise.reject(U)):(p("idle"),new Promise(function(e){e(m)}))}var _={},I={1:0},N={1:0},T=[];function x(n){if(_[n])return _[n].exports;var t=_[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:j,apply:D,status:function(e){if(!e)return f;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:u[e]};return o=void 0,n}(n),parents:(d=s,s=[],d),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=_[e];if(!n)return x;var t=function(t){return n.hot.active?(_[t]?-1===_[t].parents.indexOf(e)&&_[t].parents.push(e):(s=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),s=[]),x(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(n){x[e]=n}}};for(var i in x)Object.prototype.hasOwnProperty.call(x,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,r(i));return t.e=function(e){return"ready"===f&&p("prepare"),g++,x.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===f&&(E[e]||k(e),0===g&&0===m&&P())}},t.t=function(e,n){return 1&n&&(e=t(e)),x.t(e,-2&n)},t}(n)),t.l=!0,t.exports}x.e=function(e){var n=[];I[e]?n.push(I[e]):0!==I[e]&&{0:1,2:1}[e]&&n.push(I[e]=new Promise(function(n,t){for(var r="css/"+({0:"NotificationEdit~NotificationsIndex",2:"NotificationsIndex",3:"NotificationEdit"}[e]||e)+".css",o=x.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var c=(s=i[a]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===r||c===o))return n()}var u=document.getElementsByTagName("style");for(a=0;a<u.length;a++){var s;if((c=(s=u[a]).getAttribute("data-href"))===r||c===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,t(i)},d.href=o,document.getElementsByTagName("head")[0].appendChild(d)}).then(function(){I[e]=0}));var t=N[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=N[e]=[n,r]});n.push(t[2]=r);var o,i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.charset="utf-8",a.timeout=120,x.nc&&a.setAttribute("nonce",x.nc),a.src=function(e){return x.p+"js/"+({0:"NotificationEdit~NotificationsIndex",2:"NotificationsIndex",3:"NotificationEdit"}[e]||e)+".js"}(e),o=function(n){a.onerror=a.onload=null,clearTimeout(c);var t=N[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,t[1](i)}N[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,i.appendChild(a)}return Promise.all(n)},x.m=e,x.c=_,x.d=function(e,n,t){x.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},x.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.t=function(e,n){if(1&n&&(e=x(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(x.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)x.d(t,r,function(n){return e[n]}.bind(null,r));return t},x.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(n,"a",n),n},x.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},x.p="/beta/apps/hooks/",x.oe=function(e){throw console.error(e),e},x.h=function(){return a};var H=window.webpackJsonp=window.webpackJsonp||[],S=H.push.bind(H);H.push=n,H=H.slice();for(var A=0;A<H.length;A++)n(H[A]);var q=S;T.push([479,4]),t()}({19:function(e,n,t){"use strict";var r=t(9),o=t.n(r),i=t(56),a=t.n(i),c=t(57),u=t.n(c),s={"Content-Type":"application/json",Accept:"application/json"},d=function(){function e(){a()(this,e)}return u()(e,null,[{key:"request",value:function(e,n,t){var r=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.authenticate().then(function(){return r.fetch(e,n,t)}).then(this.checkForEmptyResponse).then(function(e){return r.checkForErrors(e,o)}).then(function(e){return e.json()}).catch(this.finalCatch)}},{key:"finalCatch",value:function(e){return void 0===e.errors?Promise.reject({title:"Error parsing"}):Promise.reject(o()({},e))}},{key:"fetch",value:function(e){function n(n,t,r){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}(function(e,n,t){var r={method:t||"get",headers:s};return n&&(r.body=JSON.stringify(n)),fetch("/api/hooks".concat(e),r)})},{key:"checkForEmptyResponse",value:function(e){return 204===e.status?{json:function(){return{}}}:e}},{key:"checkForErrors",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(404===e.status&&n.ignore404)return{json:function(){return{}}};if(401===e.status)return window.insights.chrome.auth.logout(!0);var t=e.clone?e.clone().json():e;return 422===e.status?t.then(function(e){return Promise.reject(o()({},e,{title:"Validation error"}))}):e.status>=400&&e.status<=600?t.then(function(e){return Promise.reject(e.errors[0])}):e}},{key:"authenticate",value:function(){return window.insights.chrome.auth.getUser()}},{key:"create",value:function(e,n){return this.request(e,n,"post")}},{key:"update",value:function(e,n){return this.request(e,n,"put")}},{key:"get",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request(e,null,"get",n)}},{key:"destroy",value:function(e){return this.request(e,null,"delete")}}]),e}();t.d(n,"e",function(){return l}),t.d(n,"d",function(){return f}),t.d(n,"c",function(){return p}),t.d(n,"g",function(){return h}),t.d(n,"a",function(){return v}),t.d(n,"f",function(){return y}),t.d(n,"h",function(){return m}),t.d(n,"b",function(){return g}),t.d(n,"m",function(){return E}),t.d(n,"l",function(){return b}),t.d(n,"i",function(){return w}),t.d(n,"r",function(){return O}),t.d(n,"q",function(){return j}),t.d(n,"j",function(){return k}),t.d(n,"o",function(){return P}),t.d(n,"p",function(){return D}),t.d(n,"n",function(){return _}),t.d(n,"k",function(){return I});var l="FETCH_FILTER",f="FETCH_ENDPOINTS",p="FETCH_ENDPOINT",h="SUBMIT_ENDPOINT",v="DELETE_ENDPOINT",y="NEW_ENDPOINT",m="TEST_ENDPOINT",g="FETCH_APPS",E=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name asc",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o={offset:(e-1)*n,limit:n,sort_by:t,q:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null},i=[];Object.keys(o).map(function(e){var n=o[e];void 0!==n&&""!==n&&null!==n&&i.push("".concat(e,"=").concat(n))});var a="/endpoints?".concat(i.join("&"));return{type:f,payload:d.get(a),meta:{endpoint:a,sortBy:t,partial:r,search:null!==o.q&&""!==o.q}}},b=function(e){return{type:p,payload:d.get("/endpoints/".concat(e))}},w=function(e){return{type:h,payload:d.create("/endpoints",{endpoint:e}),meta:{data:e,notifications:{fulfilled:{variant:"success",title:"Endpoint ".concat(e.name," created")}}}}},O=function(e,n){return{type:h,payload:d.update("/endpoints/".concat(e),{endpoint:n}),meta:{data:n,notifications:{fulfilled:{variant:"success",title:"Endpoint ".concat(n.name," updated")}}}}},j=function(e,n){return{type:h,payload:d.update("/endpoints/".concat(e),{endpoint:{active:n}})}},k=function(e,n){return{type:v,payload:d.destroy("/endpoints/".concat(e)).then(function(){return{id:e}}),meta:{notifications:{fulfilled:{variant:"success",title:"Endpoint ".concat(n," deleted")}}}}},P=function(){return{type:y}},D=function(e){return{type:m,payload:d.create("/endpoints/".concat(e,"/test"),{}),meta:{endpointId:e,notifications:{fulfilled:{variant:"success",title:"Test event delivery successful"}}}}},_=function(e){return{type:l,payload:d.get("/endpoints/".concat(e,"/filter"),{ignore404:!0})}},I=function(){return{type:g,payload:d.get("/apps")}}},476:function(e,n,t){},479:function(e,n,t){"use strict";t.r(n);var r=t(2),o=t.n(r),i=t(22),a=t.n(i),c=t(284),u=t(65),s=t(291),d=t.n(s),l=t(302),f=t(9),p=t.n(f),h=t(19),v=t(292),y=t.n(v),m=t(109),g=t.n(m),E=t(278),b=t.n(E),w=t(293),O=t.n(w),j={loading:!1,error:null},k=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object.assign({},j);return t[e]=n,t},P=function(e){return e+"_FULFILLED"},D=function(e){return e+"_PENDING"},_=function(e){return e+"_REJECTED"},I=function(e,n){return n.find(function(n){return parseInt(n.id)===parseInt(e)})},N=function(e){return b()(e,function(e,n){return"id"===n?parseInt(e):e})},T=function e(n,t){if(!n||!n.relationships)return n;var r={};return Object.keys(n.relationships).forEach(function(o){var i=Object.values(n.relationships[o].data),a=i.map(function(e){return e.id});r[o]||(r[o]={}),a.forEach(function(n){var a=e(I(n,i),t),c=e(function(e,n,t){var r=e[t.slice(0,-1)],o=r?I(n,Object.values(r)):{};return o||{}}(t,n,o),t);r[o][n]=N(p()({},a,c))})}),N(p()({},n,r))},x=function(e,n){return function(e){var n={};return Object.keys(e).forEach(function(t){var r=e[t];Object.keys(r).forEach(function(o){n[t]||(n[t]={}),n[t][o]=T(r[o],e)})}),n}(O()(e,{endpoint:n}))};var H,S=function(e,n){if(e&&n){var t=n.split(" "),r=g()(e).sort(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(t,r){if(!t.hasOwnProperty(e)||!r.hasOwnProperty(e))return 0;var o=t[e],i=r[e],a=0;return o>i?a=1:o<i&&(a=-1),"desc"===n?-1*a:a}}(t[0],t[1]));e=y()({},r)}return e||{}},A=function(e,n,t,r){var o=x(e,t)[n];return o=b()(o,function(e){return p()({},e,e.attributes)}),S(o,r)},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k("apps",{}),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case D(h.b):return p()({},e,{loading:!0,error:null});case P(h.b):return p()({},e,{loading:!1,error:null,apps:function(e){return A(e,"app")}(n.payload)});case _(h.b):return p()({},e,{loading:!1,error:n.payload.message,apps:{}});default:return e}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k("filter",{}),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case D(h.e):return p()({},e,{filter:{},loading:!0,error:null});case P(h.e):return p()({},e,{loading:!1,error:null,filter:function(e){return null!==e.data&&void 0!==e.data?A(e,"filter")[e.data.id]:{}}(n.payload)});case _(h.e):return p()({},e,{loading:!1,error:n.payload.errors,filter:{}});default:return e}},M=t(294),F=t.n(M),U=t(295),B=t.n(U),L=t(69),R=t.n(L),J=t(271),G=t.n(J),K=function(e,n,t){return A(e,"endpoint",n,t)},W=function(e,n,t){var r=G()(e.endpoints,function(e){return e.id===n}),o=e.endpoints[r],i=new Date(Date.now()).toISOString(),a={lastDeliveryStatus:t,lastDeliveryTime:i};return"failure"===t&&"failure"!==o.status&&(a.firstFailureTime=i),p()({},e,{endpoints:Object.assign(e.endpoints,R()({},r,p()({},o,a)))})},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k("endpoints",{}),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case D(h.d):return p()({},e,{loading:!n.meta.partial&&!n.meta.search,error:null});case P(h.d):return function(e,n){var t=n.payload.meta.total?n.payload.meta.total:n.payload.data.length;if(0===t&&!n.meta.search)return p()({},e,{loading:!1,total:t});var r=K(n.payload,n.meta.endpoint,n.meta.sortBy);if(n.meta.partial){var o=Object.values(r)[0];r=S(p()({},e.endpoints,{new:o}),n.meta.sortBy)}return p()({},e,{loading:!1,endpoints:r,total:t,search:n.meta.search})}(e,n);case _(h.d):return p()({},e,{loading:!1,endpoints:{},error:!0});case D(h.c):return p()({},e,{loading:!0,error:null});case P(h.c):return p()({},e,{error:null,loading:!1,endpoint:K(n.payload)});case _(h.c):return p()({},e,{loading:!1,error:!0});case _(h.a):return p()({},e,{error:!0});case P(h.a):return p()({},e,{endpoints:function(e,n){var t=G()(e,function(e){return e.id===n}),r=e[t];return{remaining:F()(e,[t].map(B.a)),removed:r}}(e.endpoints,n.payload.id).remaining,total:e.total-1});case D(h.g):return p()({},e,{submitting:!0});case P(h.g):return p()({},e,function(e,n){var t=Object.values(n.endpoint)[0],r=G()(e.endpoints,function(e){return e.id===t.id}),o=R()({},r,t);return p()({},e,{endpoint:t,endpoints:Object.assign(e.endpoints,o)})}(e,x(n.payload)),{submitting:!1,message:"Endpoint saved"});case _(h.g):return p()({},e,{submitting:!1,endpoint:n.meta.data,error:!0,errors:n.payload.errors});case h.f:return p()({},e,{endpoint:null});case _(h.h):return W(e,n.meta.endpointId,"failure");case P(h.h):return W(e,n.meta.endpointId,"success");default:return e}},z=t(68);var V=t(56),Q=t.n(V),Y=t(57),Z=t.n(Y),$=t(70),ee=t.n($),ne=t(71),te=t.n(ne),re=t(72),oe=t.n(re),ie=t(1),ae=t.n(ie),ce=t(288),ue=t(289),se=t(172),de=t(287),le=t(275),fe=t.n(le),pe=t(283),he=t.n(pe);function ve(e){return function(n){function t(e){var n;return Q()(this,t),(n=ee()(this,te()(t).call(this,e))).state={component:null},n}return oe()(t,n),Z()(t,[{key:"componentDidMount",value:function(){var n=he()(fe.a.mark(function n(){var t,r;return fe.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,r=t.default,this.setState({component:r});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?o.a.createElement(e,this.props):o.a.createElement("div",null,"Loading...")}}]),t}(r.Component)}var ye=t(300),me=t.n(ye),ge=ve(function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,720))}),Ee=ve(function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,719))}),be={notificationsIndex:"/",notificationEdit:"/edit/:endpointId",notificationCreate:"/new"},we=function(e){var n=e.childProps.location.pathname;return o.a.createElement(ue.a,null,o.a.createElement(se.a,{exact:!0,path:be.notificationsIndex,component:ge}),o.a.createElement(se.a,{exact:!0,path:be.notificationCreate,component:Ee}),o.a.createElement(se.a,{path:be.notificationEdit,component:Ee}),o.a.createElement(se.a,{render:function(){return me()(be,function(e){return e===n})?null:o.a.createElement(de.a,{to:be.notificationsIndex})}}))};we.propTypes={childProps:ae.a.object.isRequired};t(474),t(476);var Oe=function(e){function n(){return Q()(this,n),ee()(this,te()(n).apply(this,arguments))}return oe()(n,e),Z()(n,[{key:"componentDidMount",value:function(){insights.chrome.init(),insights.chrome.identifyApp("hooks"),insights.chrome.navigation(ke()),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation(ke())})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return o.a.createElement(r.Fragment,null,o.a.createElement(z.NotificationsPortal,null),o.a.createElement(we,{childProps:this.props}))}}]),n}(r.Component);Oe.propTypes={history:ae.a.object};var je=Object(ce.a)(Object(u.connect)()(Oe));function ke(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Hooks",id:"hooks"}].map(function(n){return p()({},n,{active:n.id===e})})}var Pe=window.location.pathname.split("/");Pe.shift();var De="/";"beta"===Pe[0]&&(De="/".concat(Pe.shift(),"/")),a.a.render(o.a.createElement(u.Provider,{store:function(){if(H)throw new Error("store already initialized");for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(H=new d.a({},[Object(l.a)(),Object(z.notificationsMiddleware)({errorTitleKey:"title",errorDescriptionKey:"detail",autoDismiss:!0})].concat(n))).register({filter:C,endpoints:X,apps:q,notifications:z.notifications}),H}().getStore()},o.a.createElement(c.a,{basename:"".concat(De).concat(Pe[0],"/").concat(Pe[1])},o.a.createElement(je,null))),document.getElementById("root"))}});
//# sourceMappingURL=../sourcemaps/App.js.map