if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("ZenonUnifiedCometAppQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4677221772406846"}),null);
__d("ZenonUnifiedCometAppQuery$Parameters",["ZenonUnifiedCometAppQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ZenonUnifiedCometAppQuery_facebookRelayOperation"),metadata:{},name:"ZenonUnifiedCometAppQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometTextInputStyles.react",["react"],(function(a,b,c,d,e,f,g){"use strict";d("react");var h={center:{textAlign:"oqcyycmt"},end:{textAlign:"ftzlm3b6"},inherit:{textAlign:"i1ao9s8h"},start:{textAlign:"hzawbc8m"}},i={multi:{paddingTop:"cxgpxx05",paddingEnd:"d1544ag0",paddingBottom:"sj5x9vvc",paddingStart:"tw6a2znq",resize:"ieid39z1"},single:{height:"tv7at329"}},j={disabled:{cursor:"rj84mg9z"},input:{backgroundColor:"b3i9ofy5",borderTop:"l6v480f0",borderEnd:"maa8sdkg",borderBottom:"s1tcr66n",borderStart:"aypy0576",borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",boxSizing:"rq0escxv",color:"oo9gr5id",fontSize:"l94mrbxd",fontWeight:"ekzkrbhg",paddingTop:"cxgpxx05",paddingEnd:"d1544ag0",paddingBottom:"sj5x9vvc",paddingStart:"tw6a2znq",width:"k4urcfbm","::placeholder":{color:"o8yuz56k"},":focus":{backgroundColor:"duhwxc4d",borderTopColor:"bs68lrl8",borderEndColor:"f56r29tw",borderBottomColor:"e16z4an2",borderStartColor:"ei4baabg",boxShadow:"b4hei51z"},":hover":{backgroundImage:"ehryuci6"}}};function a(a){var b=a.align;b=b===void 0?"start":b;var c=a.children,d=a.dimension;d=d===void 0?"single":d;a=a.disabled;a=a===void 0?!1:a;return c([j.input,a&&j.disabled,h[b],i[d]])}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTextInput.react",["BaseTextInput.react","CometScreenReaderText.react","CometTextInputStyles.react","react","useBaseInputValidators","useCometUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var d=a["aria-describedby"],e=a.autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,f=a.disabled,g=f===void 0?!1:f,i=a.label;f=a.labelIsHidden;var j=f===void 0?!1:f;f=a.textAlign_DEPRECATED;var k=a.validator,l=a.xstyle,m=babelHelpers.objectWithoutPropertiesLoose(a,["aria-describedby","autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD","disabled","label","labelIsHidden","textAlign_DEPRECATED","validator","xstyle"]);a=c("useCometUniqueID")();k=c("useBaseInputValidators")({validator:k,value:String(m.value)});var n=k.topResultReason,o=k.topResultType,p=n!=null?a+" "+((k=d)!=null?k:""):(k=d)!=null?k:void 0;return h.jsxs("label",{className:"jq4qci2q oo9gr5id",children:[!j&&h.jsx("div",{className:"ae35evdt l94mrbxd a8c37x1j gmql0nx0",children:i}),h.jsx(c("CometTextInputStyles.react"),{align:f,dimension:"single",disabled:g,children:function(a){return h.jsx(c("BaseTextInput.react"),babelHelpers["extends"]({},m,{"aria-describedby":p,"aria-invalid":o==="ERROR","aria-label":j?i:void 0,autoFocus:e,disabled:g,ref:b,xstyle:[a,l]}))}}),n!=null?h.jsx(c("CometScreenReaderText.react"),{id:a,text:n}):null]})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("ZenonUnifiedCometApp.entrypoint",["JSResourceForInteraction","ZenonUnifiedCometAppQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.appContext;a=a.scale;return{queries:{queryReference:{options:{fetchPolicy:"store-or-network"},parameters:c("ZenonUnifiedCometAppQuery$Parameters"),variables:{appContext:b,scale:a}}}}},root:c("JSResourceForInteraction")("ZenonUnifiedCometApp.react").__setRef("ZenonUnifiedCometApp.entrypoint")};g["default"]=a}),98);
__d("GeminiCoworkingCallingRoot.entrypoint",["JSResourceForInteraction","WebPixelRatio","ZenonUnifiedCometApp.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.clientCallID,e=a.joiningContext,f=a.nonce,g=a.roomID;a=a.usersToRing;return{queries:{},extraProps:{appMessages:{drop_in_metadata:'{"is_drop_in":"1"}'},hasVideo:!1,usersToRing:a,nonce:f,roomID:g,funnelSessionID:null,clientCallID:b,parentRequestID:null,referrerContext:null},entryPoints:{zenonEntryPoint:{entryPoint:c("ZenonUnifiedCometApp.entrypoint"),entryPointParams:{appContext:{joining_context:e},scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GeminiCoworkingCallingRoot.react").__setRef("GeminiCoworkingCallingRoot.entrypoint")};g["default"]=a}),98);
__d("getGeminiCoworkingCallingStackedChannelData",["fbt","GeminiCoworkingCallingRoot.entrypoint","GeminiStackedChannelType","WorkGalahadChannelItemChromeList.react","getGeminiStackedChannelData","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a={usersToRing:a.usersToRing!=null?a.usersToRing:[],clientCallID:a.clientCallID,nonce:a.nonce,roomID:a.roomID,joiningContext:{conference_name:a.roomID}};return c("getGeminiStackedChannelData")({entrypoint:c("GeminiCoworkingCallingRoot.entrypoint"),placeholder:i.jsx(c("WorkGalahadChannelItemChromeList.react"),{amount:1,type:"groups"}),preloadParams:a,title:h._(/*FBT_CALL*/"Coworking Calling"/*FBT_CALL*/),type:c("GeminiStackedChannelType").COWORKING_CALLING})}g["default"]=a}),98);
__d("GeminiCoworkingNavActions",["WorkGalahadNavActions","getGeminiCoworkingCallingStackedChannelData"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){d("WorkGalahadNavActions").selectAppTabID("chats"),d("WorkGalahadNavActions").pushStackedChannel(c("getGeminiCoworkingCallingStackedChannelData")(a))};g.navigateToCallHandler=a}),98);
__d("GeminiDropInNavUtils",["GeminiCoworkingNavActions"],(function(a,b,c,d,e,f,g){"use strict";a=function(a,b){var c=a.callContext,e=a.callID;a=a.serverInfoData;d("GeminiCoworkingNavActions").navigateToCallHandler({clientCallID:parseInt(e,10),nonce:b,roomID:(e=c)!=null?e:"",serverInfoData:(b=a)!=null?b:""})};g.initializeWindow=a}),98);