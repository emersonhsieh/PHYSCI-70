(window.webpackJsonp=window.webpackJsonp||[]).push([["2qoD"],{wlAN:function(e,t,n){"use strict";var s=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TeacherContentUpsellPopupPresentational=void 0;var r=s(n("pVnL")),i=T(n("q1tI")),o=n("/UKR"),a=n("mR6N"),l=n("JimW"),c=n("Vxy9"),d=s(n("wa3X")),p=s(n("Pwnf")),u=s(n("gE8/")),h=n("g8Be"),m=T(n("ZpD3")),f=s(n("x0Jh")),g=s(n("Dg7G")),y=s(n("ttkX")),C=T(n("6OHE")),_=n("Y8R6"),k=s(n("Xj6v")),w=s(n("4Du/")),b=T(n("HEOz"));function S(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(S=function(e){return e?n:t})(e)}function T(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=S(t);if(n&&n.has(e))return n.get(e);var s={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(s,i,o):s[i]=e[i]}return s.default=e,n&&n.set(e,s),s}const x=e=>i.createElement(d.default,(0,r.default)({light:!0},e));class E extends i.Component{constructor(...e){super(...e),this.state={dismissed:!1,offsetY:null,onMeasureHeight:null,response:null,stage:"unmeasured"},this.handleRef=e=>{const{onMeasureHeight:t}=this.state;if(e){const{top:n}=e.getBoundingClientRect(),s=window.innerHeight-n;t&&t(s),this.setState({onMeasureHeight:null})}},this.handleTeacherResponseClick=()=>{const{onTeacherResponseClick:e}=this.props;e&&e(),this.setState({response:"teacher"})},this.handleStudentResponseClick=()=>{const{onStudentResponseClick:e}=this.props;e&&e(),this.setState({response:"student"})},this.handleDismissClick=()=>{const{onDismissClick:e}=this.props;e&&e(),this.disappear()},this.appear=()=>{const{onAppear:e}=this.props;e&&e(),this.measureHeight().then((e=>{this._mounted&&this.setState({offsetY:e,stage:"appeared"})}))},this.disappear=()=>{const{stage:e}=this.state;"appeared"===e&&this.measureHeight().then((e=>{this._mounted&&this.setState({offsetY:e,stage:"disappearing"})}))}}componentDidMount(){this._mounted=!0;const{delayAppearanceMs:e}=this.props;this.props.schedule.timeout(this.appear,e)}componentWillUnmount(){this._mounted=!1}measureHeight(){return new Promise(((e,t)=>{this._mounted&&this.setState({onMeasureHeight:e})}))}renderHeadingText(){const{classUpsell:e}=this.props,{response:t}=this.state;return"teacher"===t?e.unitMasteryEnabled?b._("Practice, 100% free"):b._("Free learning resources"):"student"===t?b._("Studying for a test?"):b._("Are you a student or a teacher?")}renderBodyTextAndButtons(){const{response:e}=this.state;return"teacher"===e?this.renderTeacherCTA():"student"===e?this.renderStudentCTA():this.renderChoiceButtons()}renderChoiceButtons(){return i.createElement(l.View,{style:P.buttonSet},i.createElement(x,{onClick:this.handleStudentResponseClick,style:P.choiceButton},b._("Student")),i.createElement(x,{onClick:this.handleTeacherResponseClick,style:P.choiceButton},b._("Teacher")))}renderTeacherCTA(){const{onTeacherCTAClick:e,classUpsell:{unitMasteryEnabled:t}}=this.props;return i.createElement(c.Body,{style:P.body},i.createElement(l.View,{style:P.bodyText},t?b._("Use Khan Academy’s personalized practice to help your students succeed."):b._("Use Khan Academy’s learning and practice content to help your students succeed.")),i.createElement(x,{width:"100%",onClick:e,style:P.ctaButton},b._("Unlock your teacher tools")))}renderStudentCTA(){const{onStudentCTAClick:e,classUpsell:{topicTitle:t}}=this.props;return i.createElement(c.Body,{style:P.body},i.createElement(l.View,{style:P.bodyText},b.$_("Prepare with more lessons on %(topicTitle)s.",{topicTitle:t})),i.createElement(x,{width:"100%",onClick:e,style:P.ctaButton},b._("Prepare for your test")))}renderInner(){const{response:e,stage:t}=this.state,n=i.createElement(l.View,{style:P.inner},i.createElement(c.HeadingSmall,{style:P.heading},this.renderHeadingText()),this.renderBodyTextAndButtons());return"disappearing"!==t?i.createElement(y.default,{anchor:"bottom-left",childrenKey:e||"",distance:0,duration:200,twoStepSwap:!0},n):n}renderContents(){return i.createElement(i.Fragment,null,this.renderInner(),i.createElement(l.View,{style:P.dismissIconContainer},i.createElement(g.default,{onClick:this.handleDismissClick,colors:{color:p.default.white,hoveredColor:p.default.white}},i.createElement(f.default,{iconSize:12,size:40}))))}renderAnimationContainer(e){const{onMeasureHeight:t}=this.state;return i.createElement("div",{role:"dialog","aria-live":"polite",className:(0,a.css)(P.outer),ref:t&&this.handleRef,style:e,"data-test-id":"hack-ignore-focusable-not-visible-test"},this.renderContents())}renderSlideIn(){const{offsetY:e}=this.state;return i.createElement(o.Motion,{key:"slideIn",defaultStyle:{translateY:e},style:{translateY:(0,o.spring)(0,{stiffness:380,damping:20})}},(({translateY:e})=>this.renderAnimationContainer({transform:`translateY(${e}px)`})))}renderFadeOut(){return i.createElement(o.Motion,{key:"fadeOut",defaultStyle:{opacity:1},style:{opacity:(0,o.spring)(0,{stiffness:600,damping:40})}},(({opacity:e})=>this.renderAnimationContainer({opacity:e})))}render(){const{dismissed:e,stage:t}=this.state;return e?null:"unmeasured"===t?this.renderAnimationContainer({opacity:0,pointerEvents:"none"}):"appeared"===t?this.renderSlideIn():"disappearing"===t?this.renderFadeOut():null}}E.defaultProps={delayAppearanceMs:1e3};const M=(0,h.withActionScheduler)(E);t.TeacherContentUpsellPopupPresentational=M;class v extends i.Component{constructor(...e){super(...e),this.state={showPopup:!1}}componentDidMount(){k.default.shouldShowPopup(this.props.location.queryParams.forceContentUpsellPopup)&&(this.setState({showPopup:!0}),k.default.dismiss())}render(){const{classUpsell:e}=this.props,{showPopup:t}=this.state;return t?i.createElement(M,{classUpsell:e,onAppear:()=>m.markMinorConversions([{id:"teacher_content_upsell_appear"}]),onTeacherCTAClick:()=>{m.markMinorConversions([{id:"teacher_content_upsell_cta_click",extra:{teacher:!0}}]),(0,_.redirect)("/signup?isteacher=1")},onStudentCTAClick:()=>{m.markMinorConversions([{id:"teacher_content_upsell_cta_click",extra:{student:!0}}]),(0,_.redirect)(e.href)},onTeacherResponseClick:()=>{m.markMinorConversions([{id:"teacher_content_upsell_teacher_response_click"}])},onStudentResponseClick:()=>{m.markMinorConversions([{id:"teacher_content_upsell_student_response_click"}])},onDismissClick:()=>m.markMinorConversions([{id:"teacher_content_upsell_dismiss_click"}])}):null}}const A="1px solid rgba(0, 0, 0, 0)",P=a.StyleSheet.create({outer:{position:"fixed",bottom:15,right:15,zIndex:C.constants.zindexModalBackdrop-1,minWidth:288,color:"white",boxSizing:"border-box",boxShadow:"0 2px 4px 0 rgba(0, 0, 0, 0.5)",background:p.default.blue,borderRadius:C.borderRadius,outline:A},inner:{width:"100%",height:"100%",position:"relative",boxSizing:"border-box",padding:u.default.large_24},heading:{maxWidth:224},body:{marginTop:u.default.xSmall_8},bodyText:{maxWidth:288},dismissIconContainer:{opacity:.8,position:"absolute",top:0,right:0,":hover":{opacity:.9},":focus":{opacity:.9}},buttonSet:{width:"100%",flexDirection:"row",marginTop:u.default.large_24},choiceButton:{minWidth:112,outline:A,":not(:last-child)":{marginRight:16}},ctaButton:{width:"100%",marginTop:u.default.large_24,":not(:last-child)":{marginRight:16}}});var R=(0,w.default)(v);t.default=R}}]);
//# sourceMappingURL=../../sourcemaps/en/2qoD.3e22ff098d72f5d6021a.js.map