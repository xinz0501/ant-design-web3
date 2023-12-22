"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[7246],{57246:function(yn,H,l){l.d(H,{GU:function(){return tn},mg:function(){return k.mg},hm:function(){return sn},be:function(){return rn}});var B=l(77117),g=l.n(B),V=l(67855),K=l.n(V),X=l(38887),Z=l.n(X),z=l(95530),J=l.n(z),A=l(50959),R=l(186),Y=l(13448),s=l.n(Y),x=l(74815),m=l.n(x),q=l(28152),L=l.n(q),P=l(20805),O=l(32836);function _(v,r){return D.apply(this,arguments)}function D(){return D=m()(s()().mark(function v(r,d){var o;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,O.Lk)({address:r.address,chainId:d});case 2:return o=a.sent,a.abrupt("return",g()(g()({},r),{},{name:o??void 0}));case 4:case"end":return a.stop()}},v)})),D.apply(this,arguments)}function nn(v,r,d){return F.apply(this,arguments)}function F(){return F=m()(s()().mark(function v(r,d,o){var e,a;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,O.a4)({address:(0,P.O_)(r),args:[d],chainId:o,abi:[{name:"tokenURI",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}],stateMutability:"view",type:"function"}],functionName:"tokenURI"});case 2:return e=t.sent,t.next=5,(0,P.Xw)(e);case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}},v)})),F.apply(this,arguments)}var Q=l(11527),en=function(r){var d,o=r.children,e=r.assets,a=r.availableChains,f=r.availableConnectors,t=r.ens,I=r.balance,W=(0,R.mA)(),C=W.address,M=W.isDisconnected,S=A.useState(),j=L()(S,2),p=j[0],N=j[1],ln=(0,R.$4)(),cn=ln.connectAsync,on=(0,R.g0)(),E=on.switchNetwork,dn=(0,R.LN)(),y=dn.chain,fn=(0,R.qL)(),vn=fn.disconnectAsync,hn=A.useState(void 0),U=L()(hn,2),w=U[0],G=U[1],mn=(0,R.KQ)({address:I&&p?(0,P.O_)(p.address):void 0}),b=mn.data;A.useEffect(function(){if(!C||M){N(void 0);return}var u=function(){var n=m()(s()().mark(function i(){var h;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(h={address:C},c.t0=N,!t){c.next=8;break}return c.next=5,_(h);case 5:c.t1=c.sent,c.next=9;break;case 8:c.t1=h;case 9:c.t2=c.t1,(0,c.t0)(c.t2);case 11:case"end":return c.stop()}},i)}));return function(){return n.apply(this,arguments)}}();u()},[C,M,y,t]);var pn=A.useMemo(function(){return f.map(function(u){var n=e==null?void 0:e.find(function(i){return i.name===u.name});return n!=null&&n.create?n.create(u):(console.error("Can not find wallet factory for ".concat(u.name,", you should config it in WagmiWeb3ConfigProvider 'assets'.")),null)}).filter(function(u){return u!==null})},[f,e]),gn=A.useMemo(function(){return a.map(function(u){var n=e==null?void 0:e.find(function(i){return i.id===u.id});return n!=null&&n.id?{id:n.id,name:n.name,icon:n.icon}:(console.error("Can not find chain ".concat(u.id,", you should config it in WagmiWeb3ConfigProvider 'assets'.")),null)}).filter(function(u){return u!==null})},[a,e]);return A.useEffect(function(){var u;if(!(!y&&w)){var n=y??a[0];if(n){var i=e==null?void 0:e.find(function(h){return h.id===(n==null?void 0:n.id)});(u=i)!==null&&u!==void 0&&u.id||(i={id:n.id,name:n.name}),G(i)}}},[y,e,a,w]),(0,Q.jsx)(P.BQ,{availableChains:gn,chain:w,account:p,balance:I?{symbol:b==null?void 0:b.symbol,value:b==null?void 0:b.value,decimals:b==null?void 0:b.decimals,icon:w==null||(d=w.nativeCurrency)===null||d===void 0?void 0:d.icon}:void 0,availableWallets:pn,connect:function(){var u=m()(s()().mark(function n(i){var h;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return h=f.find(function(T){return T.name===(i==null?void 0:i.name)}),c.next=3,cn({connector:h,chainId:w==null?void 0:w.id});case 3:case"end":return c.stop()}},n)}));return function(n){return u.apply(this,arguments)}}(),disconnect:m()(s()().mark(function u(){return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,vn();case 2:case"end":return i.stop()}},u)})),switchChain:function(){var u=m()(s()().mark(function n(i){return s()().wrap(function($){for(;;)switch($.prev=$.next){case 0:y?E==null||E(i.id):G(i);case 1:case"end":return $.stop()}},n)}));return function(n){return u.apply(this,arguments)}}(),getNFTMetadata:function(){var u=m()(s()().mark(function n(i){var h,$;return s()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return h=i.address,$=i.tokenId,T.abrupt("return",nn(h,$,y==null?void 0:y.id));case 2:case"end":return T.stop()}},n)}));return function(n){return u.apply(this,arguments)}}(),children:o})},k=l(7502),an={name:"MetaMask",create:function(){return g()(g()({},k.Zv),{},{hasWalletReady:function(){var r=m()(s()().mark(function o(){var e;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",!!((e=window.ethereum)!==null&&e!==void 0&&e.isMetaMask));case 1:case"end":return f.stop()}},o)}));function d(){return r.apply(this,arguments)}return d}()})}},rn={name:"WalletConnect",create:function(r){var d=function(){var o=m()(s()().mark(function e(){var a;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r==null?void 0:r.getProvider();case 2:return a=t.sent,t.abrupt("return",new Promise(function(I){a.on("display_uri",function(W){I({uri:W})})}));case 4:case"end":return t.stop()}},e)}));return function(){return o.apply(this,arguments)}}();return g()(g()({},k.Tl),{},{hasWalletReady:function(){var o=m()(s()().mark(function a(){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",!0);case 1:case"end":return t.stop()}},a)}));function e(){return o.apply(this,arguments)}return e}(),getQrCode:(r==null?void 0:r.options.showQrModal)===!1?d:void 0})}},tn={name:"Coinbase Wallet",create:function(){return g()(g()({},k.p_),{},{hasWalletReady:function(){var r=m()(s()().mark(function o(){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",!0);case 1:case"end":return a.stop()}},o)}));function d(){return r.apply(this,arguments)}return d}()})}},un=["children","assets","ens","balance","config"];function sn(v){var r=v.children,d=v.assets,o=d===void 0?[]:d,e=v.ens,a=v.balance,f=v.config,t=J()(v,un),I=A.useMemo(function(){var W,C=[],M=Z()(f.connectors),S;try{for(M.s();!(S=M.n()).done;){var j=S.value;j.chains.forEach(function(p){C.find(function(N){return N.id===p.id})||C.push(p)})}}catch(p){M.e(p)}finally{M.f()}return(W=f.publicClient.chains)===null||W===void 0||W.forEach(function(p){C.find(function(N){return N.id===p.id})||C.push(p)}),C},[f]);return(0,Q.jsx)(R.eM,g()(g()({config:f},t),{},{children:(0,Q.jsx)(en,{assets:[].concat(K()(o),[an,k.ny,k.Du]),availableChains:I,availableConnectors:f.connectors||[],ens:e,balance:a,children:r})}))}}}]);
