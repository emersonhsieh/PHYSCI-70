(window.webpackJsonp=window.webpackJsonp||[]).push([["5aCg"],{uMpt:function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.stripModalFromRoute=t.getModalUrlForTestOrQuiz=t.getModalUrlForContent=void 0;var l=a(r("pVnL")),n=a(r("gXb0"));t.getModalUrlForContent=(e,t)=>{const{kind:r,nodeUrl:a}=e,o=["Scratchpad","Challenge","Talkthrough","Project","Interactive"].includes(r),u=0===a.indexOf("/computing/")&&(a.indexOf("/computer-programming/")>-1||a.indexOf("/computer-science/")>-1||a.indexOf("/hour-of-code/")>-1||a.indexOf("/pixar/")>-1);if(o||u)return a;return`${a}?${(0,n.default)((0,l.default)({},t.queryParams,{modal:"1"}))}`};t.stripModalFromRoute=(e,t)=>{let r=e.replace(/\/[^/]*\/(v|e|a)\/.+/gi,"");r=r.replace(/\/(quiz|test)\/.+/gi,"");const a=(0,l.default)({},t);delete a.modal;return r+(0,n.default)(a,!0)};t.getModalUrlForTestOrQuiz=({type:e,slug:t},r)=>{"subject-challenge"===e?(e="test",t="subject-challenge"):"mastery-challenge"===e&&(e="test",t="mastery-challenge");return`${(e=>{const t=/\/[^/]+\/(v|e|a)\/.+/gi,r=/\/(test|quiz)\/.+/gi;return e.match(t)?e=e.replace(t,""):e.match(r)&&(e=e.replace(r,"")),"/"===e[e.length-1]&&(e=e.slice(0,e.length-1)),e})(r.pathname)}/${e}/${t}?${(0,n.default)((0,l.default)({},r.queryParams,{modal:"1"}))}`}}}]);
//# sourceMappingURL=../../sourcemaps/en/5aCg.099854361c87da45f91c.js.map