"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[3483],{17453:function(z,U,a){a.d(U,{Z:function(){return l}});var t=a(50959),f=a(71349),v=a(67536),g=a(21916),T=a(39388),O=a(37639),A=a(84875),C=a.n(A),x=a(10091),$=a(35019),D=a(70268),d=a(11145),o=a(41930),y=a(66050);const E=(n,e,s,i,c)=>({backgroundColor:n,border:`${i.lineWidth}px ${i.lineType} ${e}`,[`${c}-icon`]:{color:s}}),W=n=>{const{componentCls:e,motionDurationSlow:s,marginXS:i,marginSM:c,fontSize:h,fontSizeLG:u,lineHeight:m,borderRadiusLG:w,motionEaseInOutCirc:M,withDescriptionIconSize:_,colorText:b,colorTextHeading:S,withDescriptionPadding:p,defaultPadding:Y}=n;return{[e]:Object.assign(Object.assign({},(0,o.Wf)(n)),{position:"relative",display:"flex",alignItems:"center",padding:Y,wordWrap:"break-word",borderRadius:w,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:i,lineHeight:0},["&-description"]:{display:"none",fontSize:h,lineHeight:m},"&-message":{color:S},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${s} ${M}, opacity ${s} ${M},
        padding-top ${s} ${M}, padding-bottom ${s} ${M},
        margin-bottom ${s} ${M}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",padding:p,[`${e}-icon`]:{marginInlineEnd:c,fontSize:_,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:i,color:S,fontSize:u},[`${e}-description`]:{display:"block",color:b}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},N=n=>{const{componentCls:e,colorSuccess:s,colorSuccessBorder:i,colorSuccessBg:c,colorWarning:h,colorWarningBorder:u,colorWarningBg:m,colorError:w,colorErrorBorder:M,colorErrorBg:_,colorInfo:b,colorInfoBorder:S,colorInfoBg:p}=n;return{[e]:{"&-success":E(c,i,s,n,e),"&-info":E(p,S,b,n,e),"&-warning":E(m,u,h,n,e),"&-error":Object.assign(Object.assign({},E(_,M,w,n,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},I=n=>{const{componentCls:e,iconCls:s,motionDurationMid:i,marginXS:c,fontSizeIcon:h,colorIcon:u,colorIconHover:m}=n;return{[e]:{["&-action"]:{marginInlineStart:c},[`${e}-close-icon`]:{marginInlineStart:c,padding:0,overflow:"hidden",fontSize:h,lineHeight:`${h}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${s}-close`]:{color:u,transition:`color ${i}`,"&:hover":{color:m}}},"&-close-text":{color:u,transition:`color ${i}`,"&:hover":{color:m}}}}},Z=n=>[W(n),N(n),I(n)];var F=(0,y.Z)("Alert",n=>[Z(n)],n=>({withDescriptionIconSize:n.fontSizeHeading3,defaultPadding:`${n.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${n.paddingMD}px ${n.paddingContentHorizontalLG}px`})),tt=function(n,e){var s={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(s[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(n);c<i.length;c++)e.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(n,i[c])&&(s[i[c]]=n[i[c]]);return s};const K={success:f.Z,info:O.Z,error:v.Z,warning:T.Z},G=n=>{const{icon:e,prefixCls:s,type:i}=n,c=K[i]||null;return e?(0,D.wm)(e,t.createElement("span",{className:`${s}-icon`},e),()=>({className:C()(`${s}-icon`,{[e.props.className]:e.props.className})})):t.createElement(c,{className:`${s}-icon`})},L=n=>{const{isClosable:e,prefixCls:s,closeIcon:i,handleClose:c}=n,h=i===!0||i===void 0?t.createElement(g.Z,null):i;return e?t.createElement("button",{type:"button",onClick:c,className:`${s}-close-icon`,tabIndex:0},h):null};var B=n=>{const{description:e,prefixCls:s,message:i,banner:c,className:h,rootClassName:u,style:m,onMouseEnter:w,onMouseLeave:M,onClick:_,afterClose:b,showIcon:S,closable:p,closeText:Y,closeIcon:Q,action:st}=n,rt=tt(n,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[it,ct]=t.useState(!1),lt=t.useRef(null),{getPrefixCls:dt,direction:ht,alert:H}=t.useContext(d.E_),P=dt("alert",s),[ut,pt]=F(P),ft=J=>{var q;ct(!0),(q=n.onClose)===null||q===void 0||q.call(n,J)},ot=t.useMemo(()=>n.type!==void 0?n.type:c?"warning":"info",[n.type,c]),mt=t.useMemo(()=>Y?!0:typeof p=="boolean"?p:Q!==!1&&Q!==null&&Q!==void 0,[Y,Q,p]),at=c&&S===void 0?!0:S,gt=C()(P,`${P}-${ot}`,{[`${P}-with-description`]:!!e,[`${P}-no-icon`]:!at,[`${P}-banner`]:!!c,[`${P}-rtl`]:ht==="rtl"},H==null?void 0:H.className,h,u,pt),Ct=(0,$.Z)(rt,{aria:!0,data:!0});return ut(t.createElement(x.default,{visible:!it,motionName:`${P}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:J=>({maxHeight:J.offsetHeight}),onLeaveEnd:b},J=>{let{className:q,style:vt}=J;return t.createElement("div",Object.assign({ref:lt,"data-show":!it,className:C()(gt,q),style:Object.assign(Object.assign(Object.assign({},H==null?void 0:H.style),m),vt),onMouseEnter:w,onMouseLeave:M,onClick:_,role:"alert"},Ct),at?t.createElement(G,{description:e,icon:n.icon,prefixCls:P,type:ot}):null,t.createElement("div",{className:`${P}-content`},i?t.createElement("div",{className:`${P}-message`},i):null,e?t.createElement("div",{className:`${P}-description`},e):null),st?t.createElement("div",{className:`${P}-action`},st):null,t.createElement(L,{isClosable:mt,prefixCls:P,closeIcon:Y||Q,handleClose:ft}))}))},V=a(21953),k=a(99044),X=a(85700),j=a(82686),et=function(n){(0,X.Z)(s,n);var e=(0,j.Z)(s);function s(){var i;return(0,V.Z)(this,s),i=e.apply(this,arguments),i.state={error:void 0,info:{componentStack:""}},i}return(0,k.Z)(s,[{key:"componentDidCatch",value:function(c,h){this.setState({error:c,info:h})}},{key:"render",value:function(){const{message:c,description:h,children:u}=this.props,{error:m,info:w}=this.state,M=w&&w.componentStack?w.componentStack:null,_=typeof c>"u"?(m||"").toString():c,b=typeof h>"u"?M:h;return m?t.createElement(B,{type:"error",message:_,description:t.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},b)}):u}}]),s}(t.Component);const r=B;r.ErrorBoundary=et;var l=r},56845:function(z,U,a){a.d(U,{i:function(){return A}});var t=a(11163),f=a(80713),v=a(31043),g=a(296),T=a(56907),O,A=class extends t._{constructor({chains:C,options:x}={}){const $={name:"MetaMask",shimDisconnect:!0,getProvider(){function D(o){if(o!=null&&o.isMetaMask&&!(o.isBraveWallet&&!o._events&&!o._state)&&!o.isApexWallet&&!o.isAvalanche&&!o.isBitKeep&&!o.isBlockWallet&&!o.isCoin98&&!o.isFordefi&&!o.isMathWallet&&!(o.isOkxWallet||o.isOKExWallet)&&!(o.isOneInchIOSWallet||o.isOneInchAndroidWallet)&&!o.isOpera&&!o.isPortal&&!o.isRabby&&!o.isDefiant&&!o.isTokenPocket&&!o.isTokenary&&!o.isZeal&&!o.isZerion)return o}if(typeof window>"u")return;const d=window.ethereum;return d!=null&&d.providers?d.providers.find(D):D(d)},...x};super({chains:C,options:$}),this.id="metaMask",this.shimDisconnectKey=`${this.id}.shimDisconnect`,(0,v.Ko)(this,O,void 0),(0,v.qx)(this,O,$.UNSTABLE_shimOnConnectSelectAccount)}async connect({chainId:C}={}){var x,$,D,d;try{const o=await this.getProvider();if(!o)throw new f.N;o.on&&(o.on("accountsChanged",this.onAccountsChanged),o.on("chainChanged",this.onChainChanged),o.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let y=null;if((0,v.ac)(this,O)&&((x=this.options)!=null&&x.shimDisconnect)&&!(($=this.storage)!=null&&$.getItem(this.shimDisconnectKey))&&(y=await this.getAccount().catch(()=>null),!!y))try{await o.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}),y=await this.getAccount()}catch(I){if(this.isUserRejectedRequestError(I))throw new g.ab(I);if(I.code===new g.pT(I).code)throw I}if(!y){const N=await o.request({method:"eth_requestAccounts"});y=(0,T.K)(N[0])}let E=await this.getChainId(),W=this.isChainUnsupported(E);return C&&E!==C&&(E=(await this.switchChain(C)).id,W=this.isChainUnsupported(E)),(D=this.options)!=null&&D.shimDisconnect&&((d=this.storage)==null||d.setItem(this.shimDisconnectKey,!0)),{account:y,chain:{id:E,unsupported:W},provider:o}}catch(o){throw this.isUserRejectedRequestError(o)?new g.ab(o):o.code===-32002?new g.pT(o):o}}};O=new WeakMap},22949:function(z,U,a){a.d(U,{z:function(){return et}});var t=a(31043),f=a(3332),v=a(56907),g=a(296),T=a(9474),O=a(86427),A=a(30460),C="eip155",x="store",$="requestedChains",D="wallet_addEthereumChain",d,o,y,E,W,N,I,Z,F,tt,K,G,L,R,B,V,k,X,j,nt,et=class extends t.wR{constructor(r){super({...r,options:{isNewChainsStale:!0,...r.options}}),(0,t.Ko)(this,y),(0,t.Ko)(this,W),(0,t.Ko)(this,I),(0,t.Ko)(this,F),(0,t.Ko)(this,K),(0,t.Ko)(this,L),(0,t.Ko)(this,B),(0,t.Ko)(this,k),(0,t.Ko)(this,j),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,t.Ko)(this,d,void 0),(0,t.Ko)(this,o,void 0),this.onAccountsChanged=l=>{l.length===0?this.emit("disconnect"):this.emit("change",{account:(0,v.K)(l[0])})},this.onChainChanged=l=>{const n=Number(l),e=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:e}})},this.onDisconnect=()=>{(0,t.U9)(this,L,R).call(this,[]),this.emit("disconnect")},this.onDisplayUri=l=>{this.emit("message",{type:"display_uri",data:l})},this.onConnect=()=>{this.emit("connect",{})},(0,t.U9)(this,y,E).call(this)}async connect({chainId:r,pairingTopic:l}={}){var n,e,s,i,c;try{let h=r;if(!h){const S=(n=this.storage)==null?void 0:n.getItem(x),p=(i=(s=(e=S==null?void 0:S.state)==null?void 0:e.data)==null?void 0:s.chain)==null?void 0:i.id;p&&!this.isChainUnsupported(p)?h=p:h=(c=this.chains[0])==null?void 0:c.id}if(!h)throw new Error("No chains found on connector.");const u=await this.getProvider();(0,t.U9)(this,F,tt).call(this);const m=(0,t.U9)(this,I,Z).call(this);if(u.session&&m&&await u.disconnect(),!u.session||m){const S=this.chains.filter(p=>p.id!==h).map(p=>p.id);this.emit("message",{type:"connecting"}),await u.connect({pairingTopic:l,chains:[h],optionalChains:S.length?S:void 0}),(0,t.U9)(this,L,R).call(this,this.chains.map(({id:p})=>p))}const w=await u.enable(),M=(0,v.K)(w[0]),_=await this.getChainId(),b=this.isChainUnsupported(_);return{account:M,chain:{id:_,unsupported:b}}}catch(h){throw/user rejected/i.test(h==null?void 0:h.message)?new g.ab(h):h}}async disconnect(){const r=await this.getProvider();try{await r.disconnect()}catch(l){if(!/No matching key/i.test(l.message))throw l}finally{(0,t.U9)(this,K,G).call(this),(0,t.U9)(this,L,R).call(this,[])}}async getAccount(){const{accounts:r}=await this.getProvider();return(0,v.K)(r[0])}async getChainId(){const{chainId:r}=await this.getProvider();return r}async getProvider({chainId:r}={}){return(0,t.ac)(this,d)||await(0,t.U9)(this,y,E).call(this),r&&await this.switchChain(r),(0,t.ac)(this,d)}async getWalletClient({chainId:r}={}){const[l,n]=await Promise.all([this.getProvider({chainId:r}),this.getAccount()]),e=this.chains.find(s=>s.id===r);if(!l)throw new Error("provider is required.");return(0,T.K)({account:n,chain:e,transport:(0,O.P)(l)})}async isAuthorized(){try{const[r,l]=await Promise.all([this.getAccount(),this.getProvider()]),n=(0,t.U9)(this,I,Z).call(this);if(!r)return!1;if(n&&l.session){try{await l.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(r){var n,e;const l=this.chains.find(s=>s.id===r);if(!l)throw new g.x3(new Error("chain not found on connector."));try{const s=await this.getProvider(),i=(0,t.U9)(this,k,X).call(this),c=(0,t.U9)(this,j,nt).call(this);if(!i.includes(r)&&c.includes(D)){await s.request({method:D,params:[{chainId:(0,A.eC)(l.id),blockExplorerUrls:[(e=(n=l.blockExplorers)==null?void 0:n.default)==null?void 0:e.url],chainName:l.name,nativeCurrency:l.nativeCurrency,rpcUrls:[...l.rpcUrls.default.http]}]});const u=(0,t.U9)(this,B,V).call(this);u.push(r),(0,t.U9)(this,L,R).call(this,u)}return await s.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,A.eC)(r)}]}),l}catch(s){const i=typeof s=="string"?s:s==null?void 0:s.message;throw/user rejected request/i.test(i)?new g.ab(s):new g.x3(s)}}};d=new WeakMap,o=new WeakMap,y=new WeakSet,E=async function(){return!(0,t.ac)(this,o)&&typeof window<"u"&&(0,t.qx)(this,o,(0,t.U9)(this,W,N).call(this)),(0,t.ac)(this,o)},W=new WeakSet,N=async function(){const{EthereumProvider:r,OPTIONAL_EVENTS:l,OPTIONAL_METHODS:n}=await a.e(5217).then(a.bind(a,85217)),[e,...s]=this.chains.map(({id:i})=>i);if(e){const{projectId:i,showQrModal:c=!0,qrModalOptions:h,metadata:u,relayUrl:m}=this.options;(0,t.qx)(this,d,await r.init({showQrModal:c,qrModalOptions:h,projectId:i,optionalMethods:n,optionalEvents:l,chains:[e],optionalChains:s.length?s:void 0,rpcMap:Object.fromEntries(this.chains.map(w=>[w.id,w.rpcUrls.default.http[0]])),metadata:u,relayUrl:m}))}},I=new WeakSet,Z=function(){if((0,t.U9)(this,j,nt).call(this).includes(D)||!this.options.isNewChainsStale)return!1;const l=(0,t.U9)(this,B,V).call(this),n=this.chains.map(({id:s})=>s),e=(0,t.U9)(this,k,X).call(this);return e.length&&!e.some(s=>n.includes(s))?!1:!n.every(s=>l.includes(s))},F=new WeakSet,tt=function(){(0,t.ac)(this,d)&&((0,t.U9)(this,K,G).call(this),(0,t.ac)(this,d).on("accountsChanged",this.onAccountsChanged),(0,t.ac)(this,d).on("chainChanged",this.onChainChanged),(0,t.ac)(this,d).on("disconnect",this.onDisconnect),(0,t.ac)(this,d).on("session_delete",this.onDisconnect),(0,t.ac)(this,d).on("display_uri",this.onDisplayUri),(0,t.ac)(this,d).on("connect",this.onConnect))},K=new WeakSet,G=function(){(0,t.ac)(this,d)&&((0,t.ac)(this,d).removeListener("accountsChanged",this.onAccountsChanged),(0,t.ac)(this,d).removeListener("chainChanged",this.onChainChanged),(0,t.ac)(this,d).removeListener("disconnect",this.onDisconnect),(0,t.ac)(this,d).removeListener("session_delete",this.onDisconnect),(0,t.ac)(this,d).removeListener("display_uri",this.onDisplayUri),(0,t.ac)(this,d).removeListener("connect",this.onConnect))},L=new WeakSet,R=function(r){var l;(l=this.storage)==null||l.setItem($,r)},B=new WeakSet,V=function(){var r;return((r=this.storage)==null?void 0:r.getItem($))??[]},k=new WeakSet,X=function(){var e,s,i;if(!(0,t.ac)(this,d))return[];const r=(e=(0,t.ac)(this,d).session)==null?void 0:e.namespaces;return r?((i=(s=(0,f.fK)(r)[C])==null?void 0:s.chains)==null?void 0:i.map(c=>parseInt(c.split(":")[1]||"")))??[]:[]},j=new WeakSet,nt=function(){var e,s;if(!(0,t.ac)(this,d))return[];const r=(e=(0,t.ac)(this,d).session)==null?void 0:e.namespaces;return r?((s=(0,f.fK)(r)[C])==null?void 0:s.methods)??[]:[]}},57603:function(z,U,a){a.d(U,{$:function(){return t}});function t({apiKey:f}){return function(v){var O,A,C;const g=(O=v.rpcUrls.infura)==null?void 0:O.http[0],T=(C=(A=v.rpcUrls.infura)==null?void 0:A.webSocket)==null?void 0:C[0];return g?{chain:{...v,rpcUrls:{...v.rpcUrls,default:{http:[`${g}/${f}`]}}},rpcUrls:{http:[`${g}/${f}`],webSocket:[`${T}/${f}`]}}:null}}},8851:function(z,U,a){a.d(U,{I:function(){return t}});function t(){return function(f){return f.rpcUrls.public.http[0]?{chain:f,rpcUrls:f.rpcUrls.public}:null}}},21063:function(z,U,a){a.d(U,{y:function(){return f}});var t=a(23903);const f=(0,t.a)({id:137,name:"Polygon",network:"matic",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{alchemy:{http:["https://polygon-mainnet.g.alchemy.com/v2"],webSocket:["wss://polygon-mainnet.g.alchemy.com/v2"]},infura:{http:["https://polygon-mainnet.infura.io/v3"],webSocket:["wss://polygon-mainnet.infura.io/ws/v3"]},default:{http:["https://polygon-rpc.com"]},public:{http:["https://polygon-rpc.com"]}},blockExplorers:{etherscan:{name:"PolygonScan",url:"https://polygonscan.com"},default:{name:"PolygonScan",url:"https://polygonscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}})}}]);