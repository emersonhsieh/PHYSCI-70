(window.webpackJsonp=window.webpackJsonp||[]).push([["1xq9"],{"/UKR":function(e,t,n){"use strict";e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="build/",n(0)}([function(e,t,n){function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var o=n(1);t.Motion=r(o);var a=n(20);t.spring=r(a);var i=n(21);t.presets=r(i)},function(e,t,n){t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e){return e&&e.__esModule?e:{default:e}}var i=a(n(2)),u=a(n(3)),c=a(n(4)),l=a(n(5)),f=a(n(7)),s=a(n(9)),p=a(n(10)),d=a(n(11)),y=1e3/60,m=function(e){function t(n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=o.state,a=n.currentStyle,i=n.currentVelocity,u=n.lastIdealStyle,c=n.lastIdealVelocity;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var f=e[l];"number"==typeof f&&(t||(t=!0,a=r({},a),i=r({},i),u=r({},u),c=r({},c)),a[l]=f,i[l]=0,u[l]=f,c[l]=0)}t&&o.setState({currentStyle:a,currentVelocity:i,lastIdealStyle:u,lastIdealVelocity:c})},this.startAnimationIfNecessary=function(){o.animationID=f.default((function(e){var t=o.props.style;if(s.default(o.state.currentStyle,t,o.state.currentVelocity))return o.wasAnimating&&o.props.onRest&&o.props.onRest(),o.animationID=null,o.wasAnimating=!1,void(o.accumulatedTime=0);o.wasAnimating=!0;var n=e||l.default(),r=n-o.prevTime;if(o.prevTime=n,o.accumulatedTime=o.accumulatedTime+r,o.accumulatedTime>10*y&&(o.accumulatedTime=0),0===o.accumulatedTime)return o.animationID=null,void o.startAnimationIfNecessary();var a=(o.accumulatedTime-Math.floor(o.accumulatedTime/y)*y)/y,i=Math.floor(o.accumulatedTime/y),u={},f={},p={},d={};for(var m in t)if(Object.prototype.hasOwnProperty.call(t,m)){var v=t[m];if("number"==typeof v)p[m]=v,d[m]=0,u[m]=v,f[m]=0;else{for(var h=o.state.lastIdealStyle[m],b=o.state.lastIdealVelocity[m],g=0;g<i;g++){var w=c.default(y/1e3,h,b,v.val,v.stiffness,v.damping,v.precision);h=w[0],b=w[1]}var O=c.default(y/1e3,h,b,v.val,v.stiffness,v.damping,v.precision),T=O[0],x=O[1];p[m]=h+(T-h)*a,d[m]=b+(x-b)*a,u[m]=h,f[m]=b}}o.animationID=null,o.accumulatedTime-=i*y,o.setState({currentStyle:p,currentVelocity:d,lastIdealStyle:u,lastIdealVelocity:f}),o.unreadPropStyle=null,o.startAnimationIfNecessary()}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,null,[{key:"propTypes",value:{defaultStyle:d.default.objectOf(d.default.number),style:d.default.objectOf(d.default.oneOfType([d.default.number,d.default.object])).isRequired,children:d.default.func.isRequired,onRest:d.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||u.default(n),o=i.default(r);return{currentStyle:r,currentVelocity:o,lastIdealStyle:r,lastIdealVelocity:o}},t.prototype.componentDidMount=function(){this.prevTime=l.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=l.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(f.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=m,e.exports=t.default},function(e,t){t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t},e.exports=t.default},function(e,t){t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t},e.exports=t.default},function(e,t){t.__esModule=!0,t.default=function(e,t,r,o,a,i,u){var c=r+(-a*(t-o)+-i*r)*e,l=t+c*e;if(Math.abs(c)<u&&Math.abs(l-o)<u)return n[0]=o,n[1]=0,n;return n[0]=l,n[1]=c,n};var n=[0,0];e.exports=t.default},function(e,t,n){(function(t){(function(){var n,r,o;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})()):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(void 0)}).call(t,n(6))},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,l=[],f=!1,s=-1;function p(){f&&c&&(f=!1,c.length?l=c.concat(l):s=-1,l.length&&d())}function d(){if(!f){var e=u(p);f=!0;for(var t=l.length;t;){for(c=l,l=[];++s<t;)c&&c[s].run();s=-1,t=l.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new y(e,t)),1!==l.length||f||u(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){(function(t){for(var r=n(8),o="undefined"==typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",u=o["request"+i],c=o["cancel"+i]||o["cancelRequest"+i],l=0;!u&&l<a.length;l++)u=o[a[l]+"Request"+i],c=o[a[l]+"Cancel"+i]||o[a[l]+"CancelRequest"+i];if(!u||!c){var f=0,s=0,p=[];u=function(e){if(0===p.length){var t=r(),n=Math.max(0,16.666666666666668-(t-f));f=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(f)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return p.push({handle:++s,callback:e,cancelled:!1}),s},c=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return u.call(o,e)},e.exports.cancel=function(){c.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=u,e.cancelAnimationFrame=c}}).call(t,function(){return this}())},function(e,t,n){(function(t){(function(){var n,r,o,a,i,u;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),u=1e9*t.uptime(),i=a-u):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(void 0)}).call(t,n(6))},function(e,t){t.__esModule=!0,t.default=function(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var o="number"==typeof t[r]?t[r]:t[r].val;if(e[r]!==o)return!1}return!0},e.exports=t.default},function(e,t){e.exports=n("q1tI")},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=n(12)((function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}),!0)}else e.exports=n(19)()}).call(t,n(6))},function(e,t,n){(function(t){var r=n(13),o=n(14),a=n(15),i=n(16),u=n(17),c=n(18);e.exports=function(e,n){var l="function"==typeof Symbol&&Symbol.iterator;var f="<<anonymous>>",s={array:m("array"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:y(r.thatReturnsNull),arrayOf:function(e){return y((function(t,n,r,o,a){if("function"!=typeof e)return new d("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new d("Invalid "+o+" `"+a+"` of type `"+h(i)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<i.length;c++){var l=e(i,c,r,o,a+"["+c+"]",u);if(l instanceof Error)return l}return null}))},element:y((function(t,n,r,o,a){var i=t[n];return e(i)?null:new d("Invalid "+o+" `"+a+"` of type `"+h(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return y((function(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||f;return new d("Invalid "+o+" `"+a+"` of type `"+(((u=t[n]).constructor&&u.constructor.name?u.constructor.name:f)+"` supplied to `")+r+"`, expected instance of `"+i+"`.")}var u;return null}))},node:y((function(e,t,n,r,o){return v(e[t])?null:new d("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(t,n,r,o,a){if("function"!=typeof e)return new d("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],c=h(i);if("object"!==c)return new d("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var l in i)if(i.hasOwnProperty(l)){var f=e(i,l,r,o,a+"."+l,u);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull;return y((function(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(p(i,e[u]))return null;return new d("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",g(o),n),r.thatReturnsNull}return y((function(t,n,r,o,a){for(var i=0;i<e.length;i++)if(null==(0,e[i])(t,n,r,o,a,u))return null;return new d("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}))},shape:function(e){return y((function(t,n,r,o,a){var i=t[n],c=h(i);if("object"!==c)return new d("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var f=e[l];if(f){var s=f(i,l,r,o,a+"."+l,u);if(s)return s}}return null}))},exact:function(e){return y((function(t,n,r,o,a){var c=t[n],l=h(c);if("object"!==l)return new d("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var f=i({},t[n],e);for(var s in f){var p=e[s];if(!p)return new d("Invalid "+o+" `"+a+"` key `"+s+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(c,s,r,o,a+"."+s,u);if(y)return y}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){this.message=e,this.stack=""}function y(e){if("production"!==t.env.NODE_ENV)var r={},i=0;function c(c,l,s,p,y,m,v){if(p=p||f,m=m||s,v!==u)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var h=p+":"+s;!r[h]&&i<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",m,p),r[h]=!0,i++)}return null==l[s]?c?null===l[s]?new d("The "+y+" `"+m+"` is marked as required in `"+p+"`, but its value is `null`."):new d("The "+y+" `"+m+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(l,s,p,y,m)}var l=c.bind(null,!1);return l.isRequired=c.bind(null,!0),l}function m(e){return y((function(t,n,r,o,a,i){var u=t[n];return h(u)!==e?new d("Invalid "+o+" `"+a+"` of type `"+b(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var n=function(e){var t=e&&(l&&e[l]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!v(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function b(e){if(null==e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function g(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,s.checkPropTypes=c,s.PropTypes=s,s}}).call(t,n(6))},function(e,t){function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){(function(t){var n=function(e){};"production"!==t.env.NODE_ENV&&(n=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=function(e,t,r,o,a,i,u,c){if(n(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,o,a,i,u,c],s=0;(l=new Error(t.replace(/%s/g,(function(){return f[s++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}}).call(t,n(6))},function(e,t,n){(function(t){var r=n(13);if("production"!==t.env.NODE_ENV){var o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(e){}};r=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];o.apply(void 0,[t].concat(r))}}}e.exports=r}).call(t,n(6))},function(e,t){var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var i,u,c=a(e),l=1;l<arguments.length;l++){for(var f in i=Object(arguments[l]))r.call(i,f)&&(c[f]=i[f]);if(n){u=n(i);for(var s=0;s<u.length;s++)o.call(i,u[s])&&(c[u[s]]=i[u[s]])}}return c}},function(e,t){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV)var r=n(14),o=n(15),a=n(17),i={};e.exports=function(e,n,u,c,l){if("production"!==t.env.NODE_ENV)for(var f in e)if(e.hasOwnProperty(f)){var s;try{r("function"==typeof e[f],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",c||"React class",u,f,typeof e[f]),s=e[f](n,f,c,u,null,a)}catch(e){s=e}if(o(!s||s instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",u,f,typeof s),s instanceof Error&&!(s.message in i)){i[s.message]=!0;var p=l?l():"";o(!1,"Failed %s type: %s%s",u,s.message,null!=p?p:"")}}}}).call(t,n(6))},function(e,t,n){var r=n(13),o=n(14),a=n(17);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t){return r({},u,t,{val:e})};var o,a=n(21),i=(o=a)&&o.__esModule?o:{default:o},u=r({},i.default.noWobble,{precision:.01});e.exports=t.default},function(e,t){t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default}])}}]);
//# sourceMappingURL=../../sourcemaps/en/1xq9.d5d6a645df79e516fd48.js.map