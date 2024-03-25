"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[1032],{34133:function(N,g,t){t.d(g,{Z:function(){return a}});var i=t(37469),p=t(50959),h={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},f=h,u=t(2625),P=function(o,s){return p.createElement(u.Z,(0,i.Z)({},o,{ref:s,icon:f}))},n=p.forwardRef(P),a=n},28018:function(N,g,t){t.r(g),t.d(g,{default:function(){return j}});var i=t(28152),p=t.n(i),h=t(50959),f=t(61188),u=t(76964),P=t(77117),n=t.n(P),a=t(95530),r=t.n(a),o=t(39242),s=t(63687),m=t(21826),d=t(11527),C=["children","theme"],T=64,O=38,w=function(b){var A=b.children,v=b.theme,S=r()(b,C),W=o.Z.useToken(),B=W.token;return(0,h.useEffect)(function(){s.ZP.config({theme:v})},[v]),(0,d.jsx)(m.f6,n()(n()({},S),{},{theme:v,customToken:{bannerHeight:O,headerHeight:T,anchorTop:T+B.margin},children:A}))},M=w,L=function(){var b=(0,u.pC)(),A=(0,u.TH)(),v=A.pathname,S=(0,u.OI)(),W=p()(S,1),B=W[0],E=(0,u.YB)(),D=E.locale;return(0,d.jsx)(f.BQ,{locale:D==="zh-CN"?f.bF:f.iF,children:(0,d.jsx)(M,{themeMode:B||"auto",children:(0,d.jsx)("div",{className:v==="/"||v==="/index-cn"?"home":"",children:b})})})},j=L},61188:function(N,g,t){t.d(g,{XN:function(){return i},E_:function(){return G},JR:function(){return p},G8:function(){return j},BQ:function(){return V},sT:function(){return d},al:function(){return F},ln:function(){return R},iF:function(){return D},O_:function(){return o},hB:function(){return n},Tg:function(){return m},ZT:function(){return O},M4:function(){return s},Xw:function(){return a},lp:function(){return M},bF:function(){return X}});var i=function(e){return e[e.Mainnet=1]="Mainnet",e[e.Polygon=137]="Polygon",e[e.BSC=56]="BSC",e[e.Arbitrum=42161]="Arbitrum",e[e.Optimism=10]="Optimism",e[e.Goerli=5]="Goerli",e[e.Avalanche=43114]="Avalanche",e[e.X1Testnet=195]="X1Testnet",e}({}),p=function(e){return e[e.MainnetBeta=2]="MainnetBeta",e[e.Devnet=3]="Devnet",e[e.Testnet=4]="Testnet",e}({}),h=t(13448),f=t.n(h),u=t(74815),P=t.n(u);function n(e){if(!e)return e;var c=e;return e.startsWith("ipfs://")&&(c="https://ipfs.io/ipfs/".concat(e.replace("ipfs://",""))),c}function a(e){return r.apply(this,arguments)}function r(){return r=P()(f()().mark(function e(c){return f()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(c){l.next=2;break}throw new Error("URL not set");case 2:return l.abrupt("return",fetch(n(c)).then(function(x){return x.json()}));case 3:case"end":return l.stop()}},e)})),r.apply(this,arguments)}function o(e){return e.startsWith("0x")?e:"0x".concat(e)}function s(e){if(e!==void 0)return typeof e!="bigint"?BigInt(e):e}function m(e){e.json=function(){return Promise.resolve(e)};var c=function(){return Promise.resolve(e)},y=function(){return c()};Object.defineProperty(window,"fetch",{value:y})}var d=function(c){return function(y,l){if(l==="address")return"".concat(c,"/address/").concat(y);if(l==="transaction")return"".concat(c,"/tx/").concat(y);throw new Error("getBrowserLink unsupported type ".concat(l))}},C=t(50959),T=t(76737);function O(){}var w=null;function M(){w=null,(0,T.resetWarned)()}var L=null,j=C.createContext({}),R=function(){var e=function(){};return e.deprecated=O,e},b=null,A=t(77117),v=t.n(A),S=t(95530),W=t.n(S),B=t(3835),E={ConnectButton:{connect:"Connect Wallet",disconnect:"Disconnect",copyAddress:"Copy Address",copied:"Copied!",walletAddress:"Wallet address",moreWallets:"More Wallets"},ConnectModal:{title:"Connect Wallet",guideTitle:"What is a Wallet?",guideInfos1Title:"Manage your private key and assets",guideInfos1Desc:"Manage your private key and the assets of the corresponding chain address",guideInfos2Title:"Help you connect to DApp",guideInfos2Desc:"Authorize DApp to get your address, similar to login",guideInfos3Title:"Call smart contract",guideInfos3Desc:"Through authorization of private key signature, initiate interaction with smart contract on the chain",guideInfosGetWalletBtnText:"Get a Wallet",guideInfosMoreLinkText:"Learn More",getWalletBtnText:"Get",getWalletUniversalProtocolBtnText:"About",getWalletPanelTitle:"Get a Wallet",getWalletPanelInfoTitle:"Not what you're looking for?",getWalletPanelInfoDesc:"Select a wallet on the left to get started with a different wallet provider.",qrCodePanelTitleForDownload:"Download {walletName}",qrCodePanelTitleForScan:"Scan with {walletName}",qrCodePanelTitleForUniversalProtocol:"Scan with your wallet",qrCodePanelLinkForDownload:"Click to go to the download page",qrCodePanelLinkForConnect:"Click to connect directly",qrCodePanelDownloadTipForReady:"Scan the QR code to download the wallet.",qrCodePanelDownloadTipForNotReady:"Don't have",qrCodePanelUniversalProtocolTipForNotReady:"Don't know",walletCardPanelTitle:"Get {selectedWalletName}",walletCardAppTitle:"{selectedWalletName} for Mobile",walletCardAppDesc:"Use the mobile wallet to explore the world of Ethereum.",walletCardExtensionTitle:"{selectedWalletName} for {selectedExtensionBrowserName}",guideTipTitle:"New to crypto wallets?",guideTipLearnMoreLinkText:"Learn More",walletPanelPlugin:"PLUGIN"},NFTCard:{actionText:"Buy Now"},Address:{copyTips:"Copy Address",copiedTips:"Address Copied!"}},D=E,F=D,G=C.createContext({defaultLocale:F}),z=t(11527),K=["children","parentContext"],H=["extendsContextFromParent"],k=function(c){var y=c.children,l=c.parentContext,x=W()(c,K),I=v()({},l);Object.keys(x).forEach(function(Q){var Z=Q;x[Z]!==void 0&&(I[Z]=x[Z])});var U=(0,C.useMemo)(function(){if(l!=null&&l.locale&&x.locale)return(0,B.Z)(l.locale,x.locale)},[l==null?void 0:l.locale,x.locale]);return I.locale=U??I.locale,(0,z.jsx)(G.Provider,{value:I,children:y})},V=function(c){var y=c.extendsContextFromParent,l=y===void 0?!0:y,x=W()(c,H),I=C.useContext(G),U=l?I:void 0;return(0,z.jsx)(k,v()(v()({},x),{},{defaultLocale:F,parentContext:U,extendsContextFromParent:l}))},$={ConnectButton:{connect:"\u8FDE\u63A5\u94B1\u5305",disconnect:"\u65AD\u5F00\u8FDE\u63A5",copyAddress:"\u590D\u5236\u5730\u5740",copied:"\u590D\u5236\u6210\u529F\uFF01",walletAddress:"\u94B1\u5305\u5730\u5740",moreWallets:"\u66F4\u591A\u94B1\u5305"},ConnectModal:{title:"\u8FDE\u63A5\u94B1\u5305",guideTitle:"\u4EC0\u4E48\u662F\u94B1\u5305\uFF1F",guideInfos1Title:"\u7BA1\u7406\u79C1\u94A5\u548C\u8D44\u4EA7",guideInfos1Desc:"\u7BA1\u7406\u79C1\u94A5\u548C\u5BF9\u5E94\u94FE\u5730\u5740\u7684\u8D44\u4EA7",guideInfos2Title:"\u5E2E\u52A9\u4F60\u8FDE\u63A5 DApp",guideInfos2Desc:"\u6388\u6743 DApp \u83B7\u53D6\u4F60\u7684\u5730\u5740\uFF0C\u7C7B\u4F3C\u767B\u5F55",guideInfos3Title:"\u8C03\u7528\u667A\u80FD\u5408\u7EA6",guideInfos3Desc:"\u901A\u8FC7\u6388\u6743\u79C1\u94A5\u7B7E\u540D\uFF0C\u53D1\u8D77\u4E0E\u94FE\u4E0A\u667A\u80FD\u5408\u7EA6\u7684\u4EA4\u4E92",guideInfosGetWalletBtnText:"\u83B7\u53D6\u94B1\u5305",guideInfosMoreLinkText:"\u4E86\u89E3\u66F4\u591A",getWalletBtnText:"\u83B7\u53D6",getWalletUniversalProtocolBtnText:"\u66F4\u591A",getWalletPanelTitle:"\u83B7\u53D6\u94B1\u5305",getWalletPanelInfoTitle:"\u6CA1\u6709\u627E\u5230\u4F60\u60F3\u8981\u7684\uFF1F",getWalletPanelInfoDesc:"\u5728\u5DE6\u4FA7\u9009\u62E9\u94B1\u5305\uFF0C\u4EE5\u5F00\u59CB\u4F7F\u7528\u4E0D\u540C\u7684\u94B1\u5305\u63D0\u4F9B\u5546\u3002",qrCodePanelTitleForDownload:"\u4E0B\u8F7D {walletName}",qrCodePanelTitleForScan:"\u4F7F\u7528 {walletName} \u626B\u63CF",qrCodePanelTitleForUniversalProtocol:"\u4F7F\u7528\u4F60\u7684\u94B1\u5305\u626B\u63CF",qrCodePanelLinkForDownload:"\u70B9\u51FB\u524D\u5F80\u4E0B\u8F7D\u9875\u9762",qrCodePanelLinkForConnect:"\u70B9\u51FB\u76F4\u63A5\u8FDE\u63A5",qrCodePanelDownloadTipForReady:"\u626B\u63CF\u4E8C\u7EF4\u7801\u4E0B\u8F7D\u94B1\u5305",qrCodePanelDownloadTipForNotReady:"\u6682\u65E0",qrCodePanelUniversalProtocolTipForNotReady:"\u4E0D\u4E86\u89E3",walletCardPanelTitle:"\u83B7\u53D6 {selectedWalletName}",walletCardAppTitle:"\u5728\u624B\u673A\u4F7F\u7528 {selectedWalletName}",walletCardAppDesc:"\u4F7F\u7528\u79FB\u52A8\u94B1\u5305\u63A2\u7D22\u4EE5\u592A\u574A\u4E16\u754C\u3002",walletCardExtensionTitle:"\u5728 {selectedExtensionBrowserName} \u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528 {selectedWalletName}",guideTipTitle:"\u521D\u6B21\u63A5\u89E6\u52A0\u5BC6\u94B1\u5305?",guideTipLearnMoreLinkText:"\u4E86\u89E3\u66F4\u591A",walletPanelPlugin:"\u63D2\u4EF6"},NFTCard:{actionText:"\u7ACB\u5373\u8D2D\u4E70"},Address:{copyTips:"\u590D\u5236\u5730\u5740",copiedTips:"\u5730\u5740\u590D\u5236\u6210\u529F\uFF01"}},X=$},14525:function(N,g,t){t.d(g,{i:function(){return u}});var i=t(50959),p=t(29953),h=t(63687),f=t(93289);function u(n){return a=>i.createElement(h.ZP,{theme:{token:{motion:!1,zIndexPopupBase:0}}},i.createElement(n,Object.assign({},a)))}const P=(n,a,r,o)=>u(m=>{const{prefixCls:d,style:C}=m,T=i.useRef(null),[O,w]=i.useState(0),[M,L]=i.useState(0),[j,R]=(0,p.Z)(!1,{value:m.open}),{getPrefixCls:b}=i.useContext(f.E_),A=b(a||"select",d);i.useEffect(()=>{if(R(!0),typeof ResizeObserver<"u"){const W=new ResizeObserver(E=>{const D=E[0].target;w(D.offsetHeight+8),L(D.offsetWidth)}),B=setInterval(()=>{var E;const D=r?`.${r(A)}`:`.${A}-dropdown`,F=(E=T.current)===null||E===void 0?void 0:E.querySelector(D);F&&(clearInterval(B),W.observe(F))},10);return()=>{clearInterval(B),W.disconnect()}}},[]);let v=Object.assign(Object.assign({},m),{style:Object.assign(Object.assign({},C),{margin:0}),open:j,visible:j,getPopupContainer:()=>T.current});o&&(v=o(v));const S={paddingBottom:O,position:"relative",minWidth:M};return i.createElement("div",{ref:T,style:S},i.createElement(n,Object.assign({},v)))});g.Z=P},2931:function(N,g,t){var i=t(50959),p=t(34133),h=t(50361),f=function(n,a){var r={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&a.indexOf(o)<0&&(r[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(n);s<o.length;s++)a.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(n,o[s])&&(r[o[s]]=n[o[s]]);return r};function u(n,a,r){return typeof n=="boolean"?n:typeof n=="object"?!0:a===void 0?!!r:a!==!1&&a!==null}function P(n){let{closable:a,closeIcon:r,customCloseIconRender:o,defaultCloseIcon:s=i.createElement(p.Z,null),defaultClosable:m=!1}=n;if(!u(a,r,m))return[!1,null];const C=typeof a=="object"?a:{},{closeIcon:T}=C,O=f(C,["closeIcon"]),w=(()=>typeof a=="object"&&T!==void 0?T:typeof r=="boolean"||r===void 0||r===null?s:r)(),M=(0,h.Z)(O,!0),L=o?o(w):w;return[!0,i.isValidElement(L)?i.cloneElement(L,M):i.createElement("span",Object.assign({},M),L)]}g.Z=P},50361:function(N,g,t){t.d(g,{Z:function(){return a}});var i=t(93914),p=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,h=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,f="".concat(p," ").concat(h).split(/[\s\n]+/),u="aria-",P="data-";function n(r,o){return r.indexOf(o)===0}function a(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s;o===!1?s={aria:!0,data:!0,attr:!0}:o===!0?s={aria:!0}:s=(0,i.Z)({},o);var m={};return Object.keys(r).forEach(function(d){(s.aria&&(d==="role"||n(d,u))||s.data&&n(d,P)||s.attr&&f.includes(d))&&(m[d]=r[d])}),m}}}]);