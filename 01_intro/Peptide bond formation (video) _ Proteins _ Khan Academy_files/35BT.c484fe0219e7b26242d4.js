(window.webpackJsonp=window.webpackJsonp||[]).push([["35BT"],{kJvo:function(e,t,n){"use strict";var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("pVnL")),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var r=a?Object.getOwnPropertyDescriptor(e,d):null;r&&(r.get||r.set)?Object.defineProperty(o,d,r):o[d]=e[d]}o.default=e,n&&n.set(e,o);return o}(n("q1tI")),r=n("Pk2J"),i=o(n("lryR")),l=o(n("Ll2p")),s=n("LrfN"),u=n("bHum"),c=n("cojK");function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}class m extends d.Component{constructor(e){super(e),this.handleWindowBeforeUnload=()=>{const{playerModel:e}=this.state;e&&e.setPlayerState(s.VideoPlayerState.PAUSED)};const{video:t,topic:n,markConversion:o}=e,a=(0,i.default)(t,n,o);this.state={extraEmbedTag:null,playerModel:a}}UNSAFE_componentWillMount(){const{embedded:e,onModelUpdate:t}=this.props,{playerModel:n}=this.state;t&&t(n),e&&this.addExtraEmbedTag()}componentDidMount(){window.addEventListener("beforeunload",this.handleWindowBeforeUnload)}UNSAFE_componentWillReceiveProps(e){const{embedded:t,video:n,topic:o,onModelUpdate:a,markConversion:d}=e,{extraEmbedTag:r}=this.state;if(n.youtubeId!==this.props.video.youtubeId){const e=(0,i.default)(n,o,d);this.setState({playerModel:e},(()=>{a&&a(e)}))}t&&!r?this.addExtraEmbedTag():!t&&r&&this.removeExtraEmbedTag()}componentWillUnmount(){window.removeEventListener("beforeunload",this.handleWindowBeforeUnload),this.removeExtraEmbedTag()}addExtraEmbedTag(){const e=document.createElement("base");e.setAttribute("target","_blank"),this.setState({extraEmbedTag:e},(()=>{document.head&&document.head.appendChild(e)}))}removeExtraEmbedTag(){const{extraEmbedTag:e}=this.state;e&&document.head&&document.head.removeChild(e)}render(){const{embedded:e,navigateToNextItem:t,nextContentItem:n,onComponentInteractive:o,onStateChanged:r,shouldAutoplay:i,task:s,video:u,attribution:c}=this.props,{playerModel:p}=this.state;return d.createElement(l.default,{embedded:e,navigateToNextItem:t,nextContentItem:n,playerModel:p,onComponentInteractive:o,onStateChanged:r,shouldAutoplay:i,task:s,video:(0,a.default)({},u),attribution:c})}}var f=(0,r.compose)((0,u.withConversionContext)((e=>{const{video:t}=e,n=t.id?t.id:null;return{activity:u.enums.Activity.WATCHING,content:(0,a.default)({kind:u.enums.ContentKind.Video},n&&{contentId:n},{contentTitle:t.translatedTitle})}})),c.withMarkConversion)(m);t.default=f},lryR:function(e,t,n){"use strict";var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("pVnL")),d=o(n("aLUo"));var r=function(e,t,n){return null==n?new d.default((0,a.default)({},e,{contentId:e.id,lessonID:t&&t.id})):new d.default((0,a.default)({},e,{contentId:e.id,lessonID:t&&t.id,markConversion:n}))};t.default=r}}]);
//# sourceMappingURL=../../sourcemaps/en/35BT.c484fe0219e7b26242d4.js.map