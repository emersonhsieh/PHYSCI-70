if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("MWChatMediaRootQuery.graphql",["MWChatMediaRootQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"after"},c={defaultValue:null,kind:"LocalArgument",name:"before"},d={defaultValue:null,kind:"LocalArgument",name:"first"},e={defaultValue:null,kind:"LocalArgument",name:"last"},f={defaultValue:null,kind:"LocalArgument",name:"messageID"},g={defaultValue:null,kind:"LocalArgument",name:"scale"},h={defaultValue:null,kind:"LocalArgument",name:"threadID"},i=[{kind:"Variable",name:"id",variableName:"threadID"}],j={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},k=[{kind:"Variable",name:"after",variableName:"after"},{kind:"Variable",name:"before",variableName:"before"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"last",variableName:"last"},{kind:"Variable",name:"message_id",variableName:"messageID"},{kind:"Literal",name:"message_shared_media_type",value:"PHOTO_VIDEO_AND_GIF"}],l={alias:null,args:null,kind:"ScalarField",name:"message_id",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"timestamp_precise",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"legacy_attachment_id",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},s=[p,q,r,{alias:null,args:null,kind:"ScalarField",name:"downloadable_uri",storageKey:null}];p={alias:"image_thumb",args:[{kind:"Literal",name:"height",value:250},{kind:"Literal",name:"width",value:250}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[p,q,r],storageKey:"image(height:250,width:250)"};q={kind:"InlineFragment",selections:[o,{alias:null,args:null,kind:"ScalarField",name:"blurred_image_uri",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:2048},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:2048}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:s,storageKey:null},p],type:"MessageImage",abstractKey:null};r={kind:"InlineFragment",selections:[o,{alias:"sdUrl",args:[{kind:"Literal",name:"quality",value:"SD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"SD")'},{alias:"hdUrl",args:[{kind:"Literal",name:"quality",value:"HD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"HD")'},p,{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"original_dimensions",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],storageKey:null}],type:"MessageVideo",abstractKey:null};o={kind:"InlineFragment",selections:[o,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:s,storageKey:null},p,{alias:null,args:null,kind:"ScalarField",name:"animated_image_caption",storageKey:null}],type:"MessageAnimatedImage",abstractKey:null};s={alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null};p={alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_previous_page",storageKey:null}],storageKey:null};var t={kind:"InlineFragment",selections:[j],type:"Node",abstractKey:"__isNode"};return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h],kind:"Fragment",metadata:null,name:"MWChatMediaRootQuery",selections:[{alias:null,args:i,concreteType:"MessageThread",kind:"LinkedField",name:"message_thread",plural:!1,selections:[j,{alias:null,args:k,concreteType:"MessagesWithAttachmentsOfThreadConnection",kind:"LinkedField",name:"messages_with_attachments",plural:!1,selections:[{alias:null,args:null,concreteType:"MessagesWithAttachmentsOfThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[l,j,m,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"blob_attachments",plural:!0,selections:[n,q,r,o],storageKey:null}],type:"UserMessage",abstractKey:null}],storageKey:null},s],storageKey:null},p],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[h,f,a,d,c,e,g],kind:"Operation",name:"MWChatMediaRootQuery",selections:[{alias:null,args:i,concreteType:"MessageThread",kind:"LinkedField",name:"message_thread",plural:!1,selections:[j,{alias:null,args:k,concreteType:"MessagesWithAttachmentsOfThreadConnection",kind:"LinkedField",name:"messages_with_attachments",plural:!1,selections:[{alias:null,args:null,concreteType:"MessagesWithAttachmentsOfThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[n,{kind:"InlineFragment",selections:[l,j,m,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"blob_attachments",plural:!0,selections:[n,q,r,o,t],storageKey:null}],type:"UserMessage",abstractKey:null},t],storageKey:null},s],storageKey:null},p],storageKey:null}],storageKey:null}]},params:{id:b("MWChatMediaRootQuery_facebookRelayOperation"),metadata:{},name:"MWChatMediaRootQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometBlurredBackgroundImage.react",["CometBackgroundImage.react","gkx","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={blur:{filter:"id8f4lua"},fallback:{backgroundColor:"hybvsw6c",height:"datstx6m",width:"k4urcfbm"},imageContainer:{height:"oqujnh0m",transform:"b6s8h9p6",width:"cg1f0npj"},root:{alignItems:"bp9cbjyn",display:"j83agx80",height:"datstx6m",justifyContent:"taijpn5t",overflowX:"ni8dbmo4",overflowY:"stjgntxs",width:"k4urcfbm"}},j=!c("gkx")("1299319");function a(a){var b=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["xstyle"]);a=j?h.jsx("div",{className:c("stylex")(i.imageContainer),children:h.jsx("span",{className:c("stylex")(i.blur),children:h.jsx(c("CometBackgroundImage.react"),babelHelpers["extends"]({},a))})}):h.jsx("div",{className:c("stylex")(i.fallback)});return h.jsx("div",{className:c("stylex")(i.root,b),children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometContentNotAvailable.react",["fbt","CometContentArea.react","NullStateGeneral","TetraNullState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsx("div",{className:"k4urcfbm taijpn5t bkyfam09 j83agx80 bp9cbjyn",children:i.jsx(c("CometContentArea.react"),{verticalAlign:"middle",children:i.jsx(c("TetraNullState.react"),{headline:h._(/*FBT_CALL*/"Sorry, this content isn't available right now"/*FBT_CALL*/),icon:c("NullStateGeneral")})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHero.react",["hero-tracing-placeholder"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=d("hero-tracing-placeholder").HeroComponent}),98);
__d("CometPhotoViewerImageSuspense",["Promise","PromiseAnnotate","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=document.body,j=typeof jest==="undefined"&&document!==void 0&&typeof document.createElement==="function";function k(a){return new(b("Promise"))(function(b){if(!j||i==null)return b();var c=document.createElement("img");c.onload=c.onerror=b;c.src=a})}var l=new Map(),m=2e3,n={get:function(a){var b=l.get(a);if(b!=null){l["delete"](a);l.set(a,b);return b}},set:function(a,b){l["delete"](a);l.set(a,b);if(l.size>m){a=l.keys().next();a.done||l["delete"](a.value)}}};function o(a){if(a==null)return;var b=n.get(a);if(b!=null)if(b.pending===!0)throw b.promise;else return;else{b=k(a);d("PromiseAnnotate").setDisplayName(b,"SuspenseImage");var c={pending:!0,promise:b};b.then(function(){c.pending===!0&&(c.pending=!1)});n.set(a,c);throw b}}a=h.forwardRef(function(a,b){o(a.src);return h.jsx("img",babelHelpers["extends"]({},a,{ref:b}))});g["default"]=a}),98);
__d("CometPhotoViewerInnerWrapper.react",["CometRouteRenderType","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={backgroundContainer:{alignItems:"bp9cbjyn",display:"j83agx80",justifyContent:"taijpn5t",minHeight:"pnzxbu4t"},backgroundContainerDialog:{height:"nznu9b0o"},backgroundContainerDialogWithFooter:{height:"n626y76b"},backgroundContainerTabs:{height:"bkyfam09"},backgroundContainerTabsWithFooter:{height:"bekozo2m"},image:{height:"idiwt2bm",maxWidth:"d2edcug0",width:"dbpd2lw6"},maxImageHeightDialog:{maxHeight:"ji94ytn4"},maxImageHeightDialogWithFooter:{maxHeight:"nskh8ow2"},maxImageHeightTabs:{maxHeight:"gitj76qy"},maxImageHeightTabsWithFooter:{maxHeight:"kgqd366c"},passthroughImage:{backgroundPosition:"d2hbt3d9",backgroundRepeat:"qb00l2mb",backgroundSize:"gj6al65z",height:"datstx6m",width:"k4urcfbm"},photoWrapper:{alignItems:"bp9cbjyn",display:"j83agx80",justifyContent:"taijpn5t",maxHeight:"nwf6jgls",position:"l9j0dhe7"},photoWrapperPlaceholder:{height:"datstx6m",width:"k4urcfbm"},placeholderContainer:{width:"k4urcfbm"}};function j(a,b){a===void 0&&(a=!1);b===void 0&&(b=!1);var e=d("CometRouteRenderType").useIsPushView();return c("stylex")(i.backgroundContainer,!a&&e&&i.backgroundContainerDialog,!a&&!e&&i.backgroundContainerTabs,a&&e&&i.backgroundContainerDialogWithFooter,a&&!e&&i.backgroundContainerTabsWithFooter,b&&i.placeholderContainer)}function k(a,b){var e=d("CometRouteRenderType").useIsPushView();return c("stylex")(!a&&e&&i.maxImageHeightDialog,!a&&!e&&i.maxImageHeightTabs,a&&e&&i.maxImageHeightDialogWithFooter,a&&!e&&i.maxImageHeightTabsWithFooter,b&&i.passthroughImage,!b&&i.image)}function l(a,b){var c=d("CometRouteRenderType").useIsPushView();return[!a&&c&&i.maxImageHeightDialog,!a&&!c&&i.maxImageHeightTabs,a&&c&&i.maxImageHeightDialogWithFooter,a&&!c&&i.maxImageHeightTabsWithFooter,b&&i.passthroughImage,!b&&i.image]}function a(a,b){var d=a.height,e=a.imageUri,f=a.showPlaceholderImage;f=f===void 0?!0:f;var g=a.width;a=a.withFooter;a=a===void 0?!1:a;a=k(a,!0);var l=j(!1,!0);return h.jsx("div",{className:l,ref:(l=b)!=null?l:null,children:e!=null&&f&&h.jsx("div",{className:c("stylex")(i.photoWrapper,i.photoWrapperPlaceholder),children:h.jsx("div",{className:a,style:d!=null&&g!=null?{backgroundImage:"url("+e+")",maxHeight:d,maxWidth:g}:{backgroundImage:"url("+e+")"}},e)})})}a.displayName=a.name+" [from "+f.id+"]";function b(a,b){var d=a.imageComponent,e=a.imageComponentWithXStyle;a=a.withFooter;a=a===void 0?!1:a;var f=k(a,!1);a=l(a,!1);return h.jsx("div",{className:c("stylex")(i.photoWrapper),ref:b,children:d!=null?d(f):e!=null?e(a):null})}b.displayName=b.name+" [from "+f.id+"]";e=h.forwardRef(b);f=h.forwardRef(a);g.useCometPhotoViewerContainerStyles=j;g.CometPhotoViewerImageWrapper=e;g.CometPhotoViewerPlaceholderWrapper=f}),98);
__d("MWLSFeatureLimitedStatus.re",["MWLSFeatureLimitedStatus.bs"],(function(a,b,c,d,e,f){a=b("MWLSFeatureLimitedStatus.bs").useIsReadOnlyFeatureLimited;f.useIsReadOnlyFeatureLimited=a}),null);
__d("MWInboxInfoSharedContentQPLLogger.re",["MWInboxInfoSharedContentQPLLogger.bs"],(function(a,b,c,d,e,f){a=b("MWInboxInfoSharedContentQPLLogger.bs").logOpenContentViewer;f.logOpenContentViewer=a;c=b("MWInboxInfoSharedContentQPLLogger.bs").logCloseContentViewer;f.logCloseContentViewer=c}),null);
__d("MWChatMediaData",[],(function(a,b,c,d,e,f){"use strict";var g=function(a){return a==null||a.__typename!=="MessageVideo"||a.sdUrl==null||a.image_thumb==null||a.image_thumb.uri==null||a.image_thumb.width==null||a.image_thumb.height==null||a.original_dimensions==null||a.original_dimensions.x==null||a.original_dimensions.y==null?null:{hdUrl:a.hdUrl,imageThumb:{height:a.image_thumb.height,uri:a.image_thumb.uri,width:a.image_thumb.width},legacyAttachmentID:a.legacy_attachment_id,originalDimensions:{x:a.original_dimensions.x,y:a.original_dimensions.y},sdUrl:a.sdUrl}},h=function(a){return a==null||a.__typename!=="MessageImage"||a.image==null||a.image.uri==null||a.image.width==null||a.image.height==null||a.image_thumb==null||a.image_thumb.uri==null||a.image_thumb.width==null||a.image_thumb.height==null?null:{blurredImageUri:a.blurred_image_uri,image:{downloadableUri:a.image.downloadable_uri,height:a.image.height,uri:a.image.uri,width:a.image.width},imageThumb:{height:a.image_thumb.height,uri:a.image_thumb.uri,width:a.image_thumb.width},legacyAttachmentID:a.legacy_attachment_id}},i=function(a){return a==null||a.__typename!=="MessageAnimatedImage"||a.image==null||a.image.uri==null||a.image.width==null||a.image.height==null||a.image_thumb==null||a.image_thumb.uri==null||a.image_thumb.width==null||a.image_thumb.height==null?null:{blurredImageUri:null,image:{downloadableUri:a.image.downloadable_uri,height:a.image.height,uri:a.image.uri,width:a.image.width},imageThumb:{height:a.image_thumb.height,uri:a.image_thumb.uri,width:a.image_thumb.width},legacyAttachmentID:a.legacy_attachment_id}};a=function(a){return a.reduce(function(a,b){if(b==null||b.node==null||b.node.id==null||b.node.message_id==null||b.node.blob_attachments==null||b.cursor==null)return a;var c=b.node,d=c.blob_attachments,e=c.id,f=c.message_id,j=c.timestamp_precise,k=b.cursor;c=d.map(function(a){if(a.__typename==="MessageImage"){var b=h(a);return b==null?null:{__typename:"MessageImage",attachment:b,cursor:k,messageID:f,nodeID:e,timestamp:j}}else if(a.__typename==="MessageVideo"){b=g(a);return b==null?null:{__typename:"MessageVideo",attachment:b,cursor:k,messageID:f,nodeID:e,timestamp:j}}else if(a.__typename==="MessageAnimatedImage"){b=i(a);return b==null?null:{__typename:"MessageAnimatedImage",attachment:b,cursor:k,messageID:f,nodeID:e,timestamp:j}}else return null}).filter(Boolean);return a.concat(c)},[]).filter(Boolean)};f.normalizeMessages=a}),66);
__d("MWChatMediaReducer",[],(function(a,b,c,d,e,f){"use strict";a={curIdx:0,hasNextPage:!1,hasPrevPage:!1,initialCursor:null,isFetchingNextPage:!1,isFetchingPrevPage:!1,mediaList:[]};b=function(a,b){switch(b.type){case"initialize":return babelHelpers["extends"]({},a,{curIdx:b.curIdx,initialCursor:b.initialCursor,mediaList:b.mediaList});case"startFetchingNextPage":return babelHelpers["extends"]({},a,{isFetchingNextPage:!0});case"startFetchingPrevPage":return babelHelpers["extends"]({},a,{isFetchingPrevPage:!0});case"prevPageReceived":return babelHelpers["extends"]({},a,{curIdx:a.curIdx+b.medias.length,hasPrevPage:b.hasPrevPage,isFetchingPrevPage:!1,mediaList:b.medias.concat(a.mediaList)});case"nextPageReceived":return babelHelpers["extends"]({},a,{hasNextPage:b.hasNextPage,isFetchingNextPage:!1,mediaList:a.mediaList.concat(b.medias)});case"messageDeleted":return babelHelpers["extends"]({},a,{curIdx:Math.min(Math.max(b.curIdx,0),a.mediaList.length-1),mediaList:b.mediaList});case"viewMediaAtIndex":return babelHelpers["extends"]({},a,{curIdx:Math.min(Math.max(b.curIdx,0),a.mediaList.length-1)});default:return a}};f.initialState=a;f.reducer=b}),66);
__d("MWChatMediaUtil",["ExecutionEnvironment"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){if(!c("ExecutionEnvironment").canUseDOM)return;a.forEach(function(a){if(typeof a==="string"){var b=new Image();b.src=a}})};g.prefetchImages=a}),98);
__d("MWChatMediaViewerImage.react",["fbt","CometHero.react","CometPagelet.react","CometPhotoViewerImageSuspense","CometPhotoViewerInnerWrapper.react","CometPressable.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useState,k=h._(/*FBT_CALL*/"No description available."/*FBT_CALL*/);function a(a){var b=a.blurredImageURI,e=a.imageURI,f=a.origHeight,g=a.origSrc;a=a.origWidth;var l=j(!1),m=l[0],n=l[1];l=d("CometPhotoViewerInnerWrapper.react").useCometPhotoViewerContainerStyles(!0);return i.jsx("div",{"data-testid":void 0,children:i.jsxs(d("CometPagelet.react").Placeholder,{className:l,fallback:g!=null?i.jsx(d("CometPhotoViewerInnerWrapper.react").CometPhotoViewerPlaceholderWrapper,{height:f,imageUri:g,showPlaceholderImage:g!=null&&a!=null&&f!=null,width:a,withFooter:!0}):null,name:"MessengerMediaViewerPhoto",pageletType:"media",children:[i.jsx(c("CometHero.react"),{description:"MWChatMediaViewerImage"}),b==null||m?i.jsx(d("CometPhotoViewerInnerWrapper.react").CometPhotoViewerImageWrapper,{imageComponent:function(a){return i.jsx(c("CometPhotoViewerImageSuspense"),{alt:k,className:a,src:e},e)},withFooter:!0}):i.jsx(c("CometPressable.react"),{display:"inline",label:h._(/*FBT_CALL*/"Tap to see sensitive content"/*FBT_CALL*/),onPress:function(){return n(!0)},children:i.jsx(d("CometPhotoViewerInnerWrapper.react").CometPhotoViewerImageWrapper,{imageComponent:function(a){return i.jsx(c("CometPhotoViewerImageSuspense"),{alt:k,className:a,src:b},b)},withFooter:!0})})]},e)})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMediaViewerFilmstrip.react",["fbt","ix","CometBackgroundImage.react","CometImage.react","CometPressable.react","CometThrottle","Locale","TetraIcon.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useEffect,l=b.useRef,m=b.useState,n={imageInner:{height:"datstx6m",objectFit:"r0294ipz",overflowX:"ni8dbmo4",overflowY:"stjgntxs",width:"k4urcfbm"},root:{alignItems:"bp9cbjyn",display:"j83agx80",maxWidth:"d2edcug0",paddingTop:"cxgpxx05",paddingBottom:"sj5x9vvc",transitionDuration:"pc15xi3s",transitionProperty:"flx89l3n",transitionTimingFunction:"eloblzlw",whiteSpace:"g0qnabr5"},thumbnail:{cursor:"nhd2j8a9"},thumbnailContainer:{borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",display:"q9uorilb",flexShrink:"pfnyh3mw",overflowX:"ni8dbmo4",overflowY:"stjgntxs"},thumbnailNonActive:{opacity:"ggwglk7f",":hover":{opacity:"oecfc0l4"}},thumbnailNonActiveDarken:{filter:"b1cfd9qv",":hover":{filter:"rq4thj6l"}},videoIcon:{alignItems:"bp9cbjyn",display:"j83agx80",height:"bipmatt0",justifyContent:"taijpn5t",position:"pmk7jnqg",width:"iyyx5f41"}},o={2:{marginEnd:"kady6ibp",marginStart:"dwxx2s2f"},6:{marginEnd:"fv0vnmcu",marginStart:"ggphbty4"}},p={36:{width:"thwo4zme"},40:{width:"q676j6op"}},q={36:{height:"tv7at329"},40:{height:"qypqp5cg"}};function r(a){var b=a.image.mediaType!=="video"&&Boolean(a.image.isUseImageResizing)?{backgroundColor:a.image.backgroundColor}:{},e=a.image.mediaType!=="video"?a.image.uri:a.image.thumbnailUri,f=a.thumbnailMargin,g=a.thumbnailSize,k=a.thumbnailUseDarken;k=k?n.thumbnailNonActiveDarken:n.thumbnailNonActive;var l="comet-media-viewer-filmstrip-thubmnail-"+a.index;return j.jsx("div",{className:c("stylex")([n.thumbnailContainer,q[g],p[g],o[f]]),"data-testid":void 0,children:j.jsx(c("CometPressable.react"),{display:"inline",label:h._(/*FBT_CALL*/"Thumbnail {index}"/*FBT_CALL*/,[h._param("index",a.index)]),onPress:a.onClick,overlayDisabled:!0,children:j.jsxs("div",{className:c("stylex")(n.thumbnail,q[g],p[g],a.active!==!0&&k),style:b,children:[a.image.mediaType==="video"?j.jsx("div",{className:c("stylex")(n.videoIcon),children:j.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("507224"),12)})}):null,a.image.mediaType!=="video"&&Boolean(a.image.isUseImageResizing)?j.jsx(c("CometImage.react"),{src:e,xstyle:n.imageInner}):j.jsx(c("CometBackgroundImage.react"),{src:e})]})})})}r.displayName=r.name+" [from "+f.id+"]";function a(a){var b=m(0),e=b[0],f=b[1],g=l(null),h=l(null),i=l(null);b=a.thumbnailMargin;var o=b===void 0?6:b;b=a.thumbnailSize;var p=b===void 0?36:b;b=a.thumbnailUseDarken;var s=b===void 0?!1:b,t=p+o*2;k(function(){function b(){if(g.current!=null){var b=g.current,c=b.offsetWidth;b=b.scrollWidth;var d=i.current;if(b===c)return;b=-e/t;var h=Math.floor((c+-e)/t),j=b+Math.floor((h-b)/2);if(d!=null){if(a.activeIndex>d&&(a.activeIndex<j||h===a.images.length)){i.current=a.activeIndex;return}if(a.activeIndex<d&&(a.activeIndex>j||b===0)){i.current=a.activeIndex;return}}j=e-(a.activeIndex-((h=d)!=null?h:0))*t;j=Math.min(0,j);j=Math.max(Math.floor(c-a.images.length*t),j);i.current=a.activeIndex;f(j)}}b();h.current!=null&&window.removeEventListener("resize",h.current);b=c("CometThrottle")(b,100);h.current=b;window.addEventListener("resize",b);return function(){h.current!=null&&window.removeEventListener("resize",h.current)}},[a.images,a.activeIndex,e,t]);return a.images.length<2?null:j.jsx("div",{className:c("stylex")([n.root,q[p]]),ref:g,style:{transform:"translate3d("+(d("Locale").isRTL()?-e:e)+"px, 0, 0)"},children:a.images.map(function(b,c){return j.jsx(r,{active:a.activeIndex===c,image:b,index:c,onClick:function(b){a.onSetImage(c)},thumbnailMargin:o,thumbnailSize:p,thumbnailUseDarken:s},"thumbnail_"+c)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatMediaViewerNavigationTapTarget.react",["ix","CometPressable.react","CometSkittleIcon.react","CometTrackingNodeProvider.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={buttonContainerBackground:{backgroundColor:"r898ja9m"},buttonContainerHoverLeft:{opacity:"pedkr2u6",transform:"lhh4dqlf"},buttonContainerHoverRight:{opacity:"pedkr2u6",transform:"k9ht9y5y"},fullHeight:{height:"datstx6m"},invisible:{opacity:"b5wmifdl",transitionDuration:"ijkhr0an",transitionTimingFunction:"s13u9afw",visibility:"kr9hpln1"},navButton:{alignItems:"bp9cbjyn",display:"j83agx80",opacity:"l8rlqa9s",paddingTop:"discj3wi",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a",position:"l9j0dhe7",transitionDuration:"ms05siws",transitionProperty:"pnx7fd3z",transitionTimingFunction:"msbwk0y7",willChange:"srfxjet1"},root:{alignItems:"bp9cbjyn",display:"j83agx80",justifyContent:"taijpn5t",opacity:"pedkr2u6",position:"l9j0dhe7",transitionDuration:"c5ndavph",transitionProperty:"l23jz15m",transitionTimingFunction:"ot9fgl3s",willChange:"ffxd5cwt",zIndex:"tkr6xdv7"},tapTargetOverlay:{height:"datstx6m"}};function a(a){var b=a.direction,e=a.disable,f=e===void 0?!1:e;e=a.invisible;e=e===void 0?!1:e;var g=a.label,k=a.onClick,l=a.testid;l=a.trackingNode;a=i.jsx(c("CometPressable.react"),{"aria-label":g,focusable:!1,onPress:k,testid:void 0,xstyle:j.tapTargetOverlay,children:function(a){a=a.hovered;return i.jsx("div",{className:c("stylex")(j.navButton,j.buttonContainerBackground,a&&(b==="previous"?j.buttonContainerHoverLeft:j.buttonContainerHoverRight)),children:i.jsx(c("CometSkittleIcon.react"),{color:"gray",disabled:f,icon:b==="previous"?d("fbicon")._(h("492491"),24):d("fbicon")._(h("492539"),24),size:48})})}});return i.jsx("div",{className:c("stylex")(j.root,e&&j.invisible,j.fullHeight),children:l!=null?i.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:l,children:a}):a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MessengerBlurpleLogoSvg.re",["MessengerBlurpleLogoSvg.bs"],(function(a,b,c,d,e,f){a=b("MessengerBlurpleLogoSvg.bs").make;f.make=a}),null);
__d("MWChatMediaViewerStage.react",["fbt","CometBlurredBackgroundImage.react","CometGlobalPanelLayoutContext","CometKeys","CometLink.react","CometMediaViewerFilmstrip.react","CurrentEnvironment","Locale","MWChatMediaViewerNavigationTapTarget.react","MWLSFeatureLimitedStatus.re","MessengerBlurpleLogoSvg.re","XMessengerDotComCometRootControllerRouteBuilder","deferredLoadComponent","gkx","react","requireDeferred","stylex","useCometRouterDispatcher","useDebouncedComet","useLayerKeyCommands","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useContext,k=b.useMemo,l=b.useRef,m=b.useState,n=c("deferredLoadComponent")(c("requireDeferred")("MWChatMediaViewerControls.react").__setRef("MWChatMediaViewerStage.react")),o=2e3,p=c("gkx")("1299319");function a(a){var b=a.activeIndex,e=a.attachmentID,f=a.backgroundSrc,g=a.children,q=a.disableNextButton,r=a.disablePrevButton,s=a.downloadLink,t=a.hideNextButton,u=a.hidePrevButton,v=a.messageID,w=a.setActiveIndex,x=a.showMessengerLink,y=j(c("CometGlobalPanelLayoutContext")),z=c("CurrentEnvironment").messengerdotcom,A=c("gkx")("1224637"),B=d("MWLSFeatureLimitedStatus.re").useIsReadOnlyFeatureLimited();B=c("gkx")("1844772")&&!B;var C=h._(/*FBT_CALL*/"Previous photo"/*FBT_CALL*/),D=h._(/*FBT_CALL*/"Next photo"/*FBT_CALL*/),E=l(!0),F=m(!1),G=F[0],H=F[1],I=l(null),J=c("useCometRouterDispatcher")();F=function(){return K.isPending()?L():K()};var K=c("useDebouncedComet")(function(){H(!1),L()},{leading:!0,wait:o}),L=c("useDebouncedComet")(function(){H(!0),E.current=!1},{leading:!1,wait:o});c("useLayoutEffect_SAFE_FOR_SSR")(function(){L(),I.current&&E.current&&I.current.focus()});var M=function(){J!=null&&J.popPushView()},N=k(function(){var b=[];!u&&!r&&b.push({command:{key:c("CometKeys").LEFT},description:C,handler:function(){return w(a.activeIndex-1)}});!t&&!q&&b.push({command:{key:c("CometKeys").RIGHT},description:D,handler:function(){return w(a.activeIndex+1)}});return b},[q,r,t,u,D,C,a.activeIndex,w]),O=i.jsx(c("MWChatMediaViewerNavigationTapTarget.react"),{direction:d("Locale").isRTL()?"next":"previous",disable:r,invisible:u||G,label:C,onClick:function(){return w(b-1)},testid:void 0,trackingNode:143});G=i.jsx(c("MWChatMediaViewerNavigationTapTarget.react"),{direction:d("Locale").isRTL()?"previous":"next",disable:q,invisible:t||G,label:D,onClick:function(){return w(b+1)},testid:void 0,trackingNode:142});c("useLayerKeyCommands")(N);return i.jsxs("div",{className:"iqfcb0g7 abiwlrkh l9j0dhe7 p01isnhg datstx6m buofh1pr cbu4d94t j83agx80 tqsryivl bp9cbjyn",onMouseMove:F,ref:I,tabIndex:"0",children:[x&&i.jsx("div",{className:"s90hwng2 dn56xbwz re5koujm pmk7jnqg",children:i.jsx(c("CometLink.react"),{"aria-label":"Messenger",href:c("XMessengerDotComCometRootControllerRouteBuilder").buildURL({}),children:i.jsx(d("MessengerBlurpleLogoSvg.re").make,{height:"40",width:"40"})})}),i.jsx("div",{className:"tkr6xdv7 k4urcfbm pmk7jnqg d5n6dh0y osjxmdq5"}),i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg akz8cqyu n7fi1qx3 i09qtzwb",children:f!=null?i.jsx(c("CometBlurredBackgroundImage.react"),{src:f}):null}),i.jsxs("div",{className:"k4urcfbm l9j0dhe7 stjgntxs ni8dbmo4 taijpn5t datstx6m buofh1pr j83agx80 rq0escxv j0qtgc86 e9n865no",children:[e!=null&&v!=null?i.jsx("div",{className:c("stylex").dedupe({"align-items-1":"bp9cbjyn","display-1":"j83agx80","end-1":"oxoulkyr","height-1":"byvelhso","position-1":"pmk7jnqg","z-index-1":"tkr6xdv7"},y?{"height-1":"e5d9fub0"}:null,z?{"end-1":"n7fi1qx3","height-1":"e5d9fub0"}:null,A?{"end-1":"hhcrnkbu","height-1":"cb02d2ww","z-index-1":"kavbgo14"}:null),children:i.jsx(n,{attachmentID:e,canForward:B,downloadLink:s,messageID:v})}):null,i.jsxs("div",{className:"du4w35lb kr520xx4 j9ispegn pmk7jnqg i1fnvgqd n7fi1qx3 j83agx80 i09qtzwb bp9cbjyn",children:[!p&&i.jsx("div",{"aria-hidden":!0,className:"kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb","data-testid":void 0,onClick:M}),O,G]}),g]}),i.jsx("div",{className:"stjgntxs ni8dbmo4 d2edcug0",children:i.jsx(c("CometMediaViewerFilmstrip.react"),{activeIndex:b,images:a.thumbnails.map(function(a){return babelHelpers["extends"]({},a,{mediaType:"image"})}),onSetImage:w})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatMediaViewerVideo.react",["CometRouteRenderType","MWChatVideoPlayer.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=d("CometRouteRenderType").useIsPushView();return h.jsx("div",{className:c("stylex").dedupe({"align-items-1":"bp9cbjyn","display-1":"j83agx80","flex-grow-1":"buofh1pr","justify-content-1":"taijpn5t","min-height-1":"pnzxbu4t","width-1":"k4urcfbm"},b?{"height-1":"n626y76b"}:null,b?null:{"height-1":"ojb6a8i8"}),children:h.jsx(c("MWChatVideoPlayer.react"),{controls:"default",fbid:a.fbid,hdSrc:a.hdSrc,initialForceHD:!0,originalHeight:a.originalHeight,originalWidth:a.originalWidth,sdSrc:a.sdSrc})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatMediaRoot.react",["fbt","CometContentNotAvailable.react","CometErrorBoundary.react","CometErrorRoot.react","CometRelay","CometRouteParams","CometRouterPushViewStackContext","MWChatDeleteMessageEventEmitter","MWChatMediaData","MWChatMediaReducer","MWChatMediaRootQuery.graphql","MWChatMediaUtil","MWChatMediaViewerImage.react","MWChatMediaViewerStage.react","MWChatMediaViewerVideo.react","MWChatMessageId.re","MWInboxInfoSharedContentQPLLogger.re","WebPixelRatio","gkx","react","useIsMountedRef"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useCallback,l=e.useContext,m=e.useEffect,n=e.useReducer,o=e.useState,p=20,q=i!==void 0?i:i=b("MWChatMediaRootQuery.graphql");function r(a){var b=d("CometRelay").useRelayEnvironment(),e=d("CometRouteParams").useRouteParams();a.props.manualRouteParams!=null&&(e=a.props.manualRouteParams);var f=l(c("CometRouterPushViewStackContext"))||[];f=f.length===0&&c("gkx")("1968579")&&!c("gkx")("1369511");var g=o(null),i=g[0],r=g[1];g=n(d("MWChatMediaReducer").reducer,d("MWChatMediaReducer").initialState);var s=g[0],t=s.curIdx,u=s.hasNextPage,v=s.hasPrevPage,w=s.initialCursor,x=s.isFetchingNextPage,y=s.isFetchingPrevPage,z=s.mediaList,A=g[1],B=c("useIsMountedRef")(),C=d("CometRelay").usePreloadedQuery(q,a.queries.messengerMediaRootQueryReference);if(i!==null)throw i;m(function(){var a;a=C==null?void 0:(a=C.message_thread)==null?void 0:(a=a.messages_with_attachments)==null?void 0:(a=a.edges[0])==null?void 0:a.cursor;if(a!=null&&w===null){var b;b=C==null?void 0:(b=C.message_thread)==null?void 0:(b=b.messages_with_attachments)==null?void 0:b.edges;if(b!=null){b=d("MWChatMediaData").normalizeMessages(b);var c=0;e.attachment_id!=null&&(c=b.findIndex(function(a){return a.attachment.legacyAttachmentID===e.attachment_id}));A({curIdx:c,initialCursor:a,mediaList:b,type:"initialize"})}}},[w,C,e.attachment_id]);var D=C==null?void 0:(s=C.message_thread)==null?void 0:s.id;m(function(){var a=d("MWChatDeleteMessageEventEmitter").subscribe(function(a){var c=t,d=z.filter(function(b,d){b=b.messageID===a;b&&(d<=t&&t>0&&c--);return!b});d.length!==z.length&&(D!=null&&b.commitUpdate(function(a){return(a=a.get(D))==null?void 0:a.invalidateRecord()}));A({curIdx:c,mediaList:d,type:"messageDeleted"})});return a},[b,D,t,z]);var E=k(function(a){A({type:"startFetchingPrevPage"});return d("CometRelay").fetchQuery(b,q,{before:a,last:p,scale:d("WebPixelRatio").get(),threadID:e.thread_id}).toPromise().then(function(a){var b;if(!B.current)return;a=a==null?void 0:(a=a.message_thread)==null?void 0:a.messages_with_attachments;b=d("MWChatMediaData").normalizeMessages((b=a==null?void 0:a.edges)!=null?b:[]);if(b.length>0){A({hasPrevPage:(a=a==null?void 0:(a=a.page_info)==null?void 0:a.has_previous_page)!=null?a:!1,medias:b,type:"prevPageReceived"})}})["catch"](function(a){if(!B.current)return;r(a)})},[b,B,e.thread_id]),F=k(function(a){A({type:"startFetchingNextPage"});return d("CometRelay").fetchQuery(b,q,{after:a,first:p,scale:d("WebPixelRatio").get(),threadID:e.thread_id}).toPromise().then(function(a){var b;if(!B.current)return;a=a==null?void 0:(a=a.message_thread)==null?void 0:a.messages_with_attachments;b=d("MWChatMediaData").normalizeMessages((b=a==null?void 0:a.edges)!=null?b:[]);if(b.length>0){A({hasNextPage:(a=a==null?void 0:(a=a.page_info)==null?void 0:a.has_next_page)!=null?a:!1,medias:b,type:"nextPageReceived"})}})["catch"](function(a){if(!B.current)return;r(a)})},[b,B,e.thread_id]);m(function(){w!=null&&(F(w),E(w))},[b,F,E,w,e.thread_id]);var G=(a=(g=z[0])==null?void 0:g.cursor)!=null?a:null,H=(s=(i=z[z.length-1])==null?void 0:i.cursor)!=null?s:null;m(function(){t<=p/2&&v&&!y&&G!=null?E(G):t>=z.length-p/2&&u&&!x&&H!=null&&F(H)},[t,E,F,u,v,G,H,z.length,x,y]);g=z[t-1];a=z[t+1];var I=null,J=null;g!=null&&g.__typename==="MessageImage"&&(I=g.attachment.image.uri);a!=null&&a.__typename==="MessageImage"&&(J=a.attachment.image.uri);m(function(){d("MWChatMediaUtil").prefetchImages([I,J])},[I,J]);m(function(){d("MWInboxInfoSharedContentQPLLogger.re").logOpenContentViewer()},[]);i=z[t];if(w==null)return null;if(i==null)return j.jsx(c("CometContentNotAvailable.react"),{});s=z.map(function(a){var b=a.attachment.imageThumb,c=b.height,d=b.uri;b=b.width;return{alt:h._(/*FBT_CALL*/"No description available."/*FBT_CALL*/),height:c,key:(c=a.attachment.legacyAttachmentID)!=null?c:d,uri:d,width:b}}).filter(Boolean);return j.jsx(c("MWChatMediaViewerStage.react"),{activeIndex:t,attachmentID:i.attachment.legacyAttachmentID,backgroundSrc:i.__typename!=="MessageAnimatedImage"?i.attachment.imageThumb.uri:void 0,disableNextButton:x&&z[t+1]==null,disablePrevButton:y&&z[t-1]==null,downloadLink:i.__typename==="MessageVideo"?(g=i.attachment.hdUrl)!=null?g:i.attachment.sdUrl:i.attachment.image.downloadableUri,hideNextButton:!u&&z[t+1]==null,hidePrevButton:!v&&z[t-1]==null,messageID:typeof e.thread_id==="string"&&i.timestamp!=null?d("MWChatMessageId.re").makeSent(e.thread_id,i.messageID,i.timestamp):null,setActiveIndex:function(a){return A({curIdx:a,type:"viewMediaAtIndex"})},showMessengerLink:f,thumbnails:s,children:i.__typename==="MessageVideo"?j.jsx(c("MWChatMediaViewerVideo.react"),{fbid:i.nodeID,hdSrc:i.attachment.hdUrl!=null?i.attachment.hdUrl:void 0,originalHeight:i.attachment.originalDimensions.x,originalWidth:i.attachment.originalDimensions.y,sdSrc:i.attachment.sdUrl}):i.__typename==="MessageImage"?j.jsx(c("MWChatMediaViewerImage.react"),{blurredImageURI:i.attachment.blurredImageUri,imageURI:i.attachment.image.uri}):i.__typename==="MessageAnimatedImage"?j.jsx(c("MWChatMediaViewerImage.react"),{blurredImageURI:null,imageURI:i.attachment.image.uri,origHeight:i.attachment.image.height,origWidth:i.attachment.image.width}):null})}r.displayName=r.name+" [from "+f.id+"]";function a(a){a=j.jsx(r,babelHelpers["extends"]({},a));return j.jsx(c("CometErrorBoundary.react"),{fallback:function(){return j.jsx(c("CometErrorRoot.react"),{})},children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);