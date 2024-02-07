"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[1032],{62828:function(O,x,t){t.r(x),t.d(x,{default:function(){return E}});var A=t(28152),D=t.n(A),P=t(50959),v=t(8862),s=t(69271),W=t(77117),y=t.n(W),h=t(95530),F=t.n(h),N=t(13601),j=t(2909),B=t(45584),l=t(11527),L=["children","theme"],g=64,G=38,S=function(d){var c=d.children,i=d.theme,u=F()(d,L),p=N.Z.useToken(),m=p.token;return(0,P.useEffect)(function(){j.ZP.config({theme:i})},[i]),(0,l.jsx)(B.f6,y()(y()({},u),{},{theme:i,customToken:{bannerHeight:G,headerHeight:g,anchorTop:g+m.margin},children:c}))},R=S,M=function(){var d=(0,s.pC)(),c=(0,s.TH)(),i=c.pathname,u=(0,s.OI)(),p=D()(u,1),m=p[0],w=(0,s.YB)(),T=w.locale;return(0,l.jsx)(v.BQ,{locale:T==="zh-CN"?v.bF:v.iF,children:(0,l.jsx)(R,{themeMode:m||"auto",children:(0,l.jsx)("div",{className:i==="/"||i==="/zh-CN"?"home":"",children:d})})})},E=M},8862:function(O,x,t){t.d(x,{XN:function(){return A},E_:function(){return I},G8:function(){return M},BQ:function(){return Q},sT:function(){return B},al:function(){return T},ln:function(){return E},iF:function(){return w},O_:function(){return F},hB:function(){return W},Tg:function(){return j},ZT:function(){return g},M4:function(){return N},Xw:function(){return y},lp:function(){return S},bF:function(){return V}});var A=function(e){return e[e.Mainnet=1]="Mainnet",e[e.Polygon=137]="Polygon",e[e.BSC=56]="BSC",e[e.Arbitrum=42161]="Arbitrum",e[e.Optimism=10]="Optimism",e[e.Goerli=5]="Goerli",e[e.Avalanche=43114]="Avalanche",e}({}),D=t(13448),P=t.n(D),v=t(74815),s=t.n(v);function W(e){if(!e)return e;var o=e;return e.startsWith("ipfs://")&&(o="https://ipfs.io/ipfs/".concat(e.replace("ipfs://",""))),o}function y(e){return h.apply(this,arguments)}function h(){return h=s()(P()().mark(function e(o){return P()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(o){n.next=2;break}throw new Error("URL not set");case 2:return n.abrupt("return",fetch(W(o)).then(function(a){return a.json()}));case 3:case"end":return n.stop()}},e)})),h.apply(this,arguments)}function F(e){return e.startsWith("0x")?e:"0x".concat(e)}function N(e){if(e!==void 0)return typeof e!="bigint"?BigInt(e):e}function j(e){e.json=function(){return Promise.resolve(e)};var o=function(){return Promise.resolve(e)},r=function(){return o()};Object.defineProperty(window,"fetch",{value:r})}var B=function(o){return function(r,n){if(n==="address")return"".concat(o,"/address/").concat(r);if(n==="transaction")return"".concat(o,"/tx/").concat(r);throw new Error("getBrowserLink unsupported type ".concat(n))}},l=t(50959),L=t(67856);function g(){}var G=null;function S(){G=null,(0,L.lp)()}var R=null,M=l.createContext({}),E=function(){var e=function(){};return e.deprecated=g,e},z=null,d=t(77117),c=t.n(d),i=t(95530),u=t.n(i),p=t(3835),m={ConnectButton:{connect:"Connect Wallet",disconnect:"Disconnect",copyAddress:"Copy Address",copied:"Copied!",walletAddress:"Wallet address"},ConnectModal:{title:"Connect Wallet",guideTitle:"What is a Wallet?",guideInfos1Title:"Manage your private key and assets",guideInfos1Desc:"Manage your private key and the assets of the corresponding chain address",guideInfos2Title:"Help you connect to DApp",guideInfos2Desc:"Authorize DApp to get your address, similar to login",guideInfos3Title:"Call smart contract",guideInfos3Desc:"Through authorization of private key signature, initiate interaction with smart contract on the chain",guideInfosGetWalletBtnText:"Get a Wallet",guideInfosMoreLinkText:"Learn More",getWalletBtnText:"Get",getWalletPanelTitle:"Get a Wallet",getWalletPanelInfoTitle:"Not what you're looking for?",getWalletPanelInfoDesc:"Select a wallet on the left to get started with a different wallet provider.",qrCodePanelTitleForDownload:"Download {walletName}",qrCodePanelTitleForScan:"Scan with {walletName}",qrCodePanelLinkForDownload:"Click to go to the download page",qrCodePanelLinkForConnect:"Click to connect directly",qrCodePanelDownloadTipForReady:"Scan the QR code to download the wallet.",qrCodePanelDownloadTipForNotReady:"Don't have",walletCardPanelTitle:"Get {selectedWalletName}",walletCardAppTitle:"{selectedWalletName} for Mobile",walletCardAppDesc:"Use the mobile wallet to explore the world of Ethereum.",walletCardExtensionTitle:"{selectedWalletName} for {selectedExtensionBrowserName}"},NFTCard:{actionText:"Buy Now"},Address:{copyTips:"Copy Address",copiedTips:"Address Copied!"}},w=m,T=w,I=l.createContext({defaultLocale:T}),H=t(11527),U=["children","parentContext"],Z=["extendsContextFromParent"],k=function(o){var r=o.children,n=o.parentContext,a=u()(o,U),f=c()({},n);Object.keys(a).forEach(function(X){var b=X;a[b]!==void 0&&(f[b]=a[b])});var C=(0,l.useMemo)(function(){if(n!=null&&n.locale&&a.locale)return(0,p.Z)(n.locale,a.locale)},[n==null?void 0:n.locale,a.locale]);return f.locale=C??f.locale,(0,H.jsx)(I.Provider,{value:f,children:r})},Q=function(o){var r=o.extendsContextFromParent,n=r===void 0?!0:r,a=u()(o,Z),f=l.useContext(I),C=n?f:void 0;return(0,H.jsx)(k,c()(c()({},a),{},{defaultLocale:T,parentContext:C,extendsContextFromParent:n}))},$={ConnectButton:{connect:"\u8FDE\u63A5\u94B1\u5305",disconnect:"\u65AD\u5F00\u8FDE\u63A5",copyAddress:"\u590D\u5236\u5730\u5740",copied:"\u590D\u5236\u6210\u529F\uFF01",walletAddress:"\u94B1\u5305\u5730\u5740"},ConnectModal:{title:"\u8FDE\u63A5\u94B1\u5305",guideTitle:"\u4EC0\u4E48\u662F\u94B1\u5305\uFF1F",guideInfos1Title:"\u7BA1\u7406\u79C1\u94A5\u548C\u8D44\u4EA7",guideInfos1Desc:"\u7BA1\u7406\u79C1\u94A5\u548C\u5BF9\u5E94\u94FE\u5730\u5740\u7684\u8D44\u4EA7",guideInfos2Title:"\u5E2E\u52A9\u4F60\u8FDE\u63A5 DApp",guideInfos2Desc:"\u6388\u6743 DApp \u83B7\u53D6\u4F60\u7684\u5730\u5740\uFF0C\u7C7B\u4F3C\u767B\u5F55",guideInfos3Title:"\u8C03\u7528\u667A\u80FD\u5408\u7EA6",guideInfos3Desc:"\u901A\u8FC7\u6388\u6743\u79C1\u94A5\u7B7E\u540D\uFF0C\u53D1\u8D77\u4E0E\u94FE\u4E0A\u667A\u80FD\u5408\u7EA6\u7684\u4EA4\u4E92",guideInfosGetWalletBtnText:"\u83B7\u53D6\u94B1\u5305",guideInfosMoreLinkText:"\u4E86\u89E3\u66F4\u591A",getWalletBtnText:"\u83B7\u53D6",getWalletPanelTitle:"\u83B7\u53D6\u94B1\u5305",getWalletPanelInfoTitle:"\u6CA1\u6709\u627E\u5230\u4F60\u60F3\u8981\u7684\uFF1F",getWalletPanelInfoDesc:"\u5728\u5DE6\u4FA7\u9009\u62E9\u94B1\u5305\uFF0C\u4EE5\u5F00\u59CB\u4F7F\u7528\u4E0D\u540C\u7684\u94B1\u5305\u63D0\u4F9B\u5546\u3002",qrCodePanelTitleForDownload:"\u4E0B\u8F7D {walletName}",qrCodePanelTitleForScan:"\u4F7F\u7528 {walletName} \u626B\u63CF",qrCodePanelLinkForDownload:"\u70B9\u51FB\u524D\u5F80\u4E0B\u8F7D\u9875\u9762",qrCodePanelLinkForConnect:"\u70B9\u51FB\u76F4\u63A5\u8FDE\u63A5",qrCodePanelDownloadTipForReady:"\u626B\u63CF\u4E8C\u7EF4\u7801\u4E0B\u8F7D\u94B1\u5305",qrCodePanelDownloadTipForNotReady:"\u6682\u65E0",walletCardPanelTitle:"\u83B7\u53D6 {selectedWalletName}",walletCardAppTitle:"\u5728\u624B\u673A\u4F7F\u7528 {selectedWalletName}",walletCardAppDesc:"\u4F7F\u7528\u79FB\u52A8\u94B1\u5305\u63A2\u7D22\u4EE5\u592A\u574A\u4E16\u754C\u3002",walletCardExtensionTitle:"\u5728 {selectedExtensionBrowserName} \u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528 {selectedWalletName}"},NFTCard:{actionText:"\u7ACB\u5373\u8D2D\u4E70"},Address:{copyTips:"\u590D\u5236\u5730\u5740",copiedTips:"\u5730\u5740\u590D\u5236\u6210\u529F\uFF01"}},V=$}}]);
