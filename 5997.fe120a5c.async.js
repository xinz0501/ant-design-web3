"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[5997],{45997:function(en,Ct,m){m.d(Ct,{Z:function(){return _a}});var n=m(50959),Tt=m(21916),Pt=m(43216),re=m(56920),Et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},Rt=Et,It=m(38782),wt=function(t,a){return n.createElement(It.Z,(0,re.Z)({},t,{ref:a,icon:Rt}))},Lt=n.forwardRef(wt),Nt=m(84875),j=m.n(Nt),k=m(25940),F=m(93914),R=m(90885),we=m(91744),pe=m(48385),je=m(65589),Zt=m(88473),tn=m(12868);function zt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=(0,F.Z)({inkBar:!0},(0,we.Z)(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var $e=(0,n.createContext)(null),ke=m(59816),Le=m(34682),Mt=m(7748),Bt=m(12602),Ke=m(28449),Ot=function(t){var a=t.activeTabOffset,r=t.horizontal,i=t.rtl,o=t.indicatorSize,c=(0,n.useState)(),l=(0,R.Z)(c,2),s=l[0],d=l[1],y=(0,n.useRef)(),u=function(I){return typeof o=="function"?o(I):typeof o=="number"?o:I};function $(){Ke.Z.cancel(y.current)}return(0,n.useEffect)(function(){var p={};return a&&(r?(i?(p.right=a.right+a.width/2,p.transform="translateX(50%)"):(p.left=a.left+a.width/2,p.transform="translateX(-50%)"),p.width=u(a.width)):(p.top=a.top+a.height/2,p.transform="translateY(-50%)",p.height=u(a.height))),$(),y.current=(0,Ke.Z)(function(){d(p)}),$},[a,r,i,o]),{style:s}},_t=Ot,Xe={width:0,height:0,left:0,top:0};function At(e,t,a){return(0,n.useMemo)(function(){for(var r,i=new Map,o=t.get((r=e[0])===null||r===void 0?void 0:r.key)||Xe,c=o.left+o.width,l=0;l<e.length;l+=1){var s=e[l].key,d=t.get(s);if(!d){var y;d=t.get((y=e[l-1])===null||y===void 0?void 0:y.key)||Xe}var u=i.get(s)||(0,F.Z)({},d);u.right=c-u.left-u.width,i.set(s,u)}return i},[e.map(function(r){return r.key}).join("_"),t,a])}function Ve(e,t){var a=n.useRef(e),r=n.useState({}),i=(0,R.Z)(r,2),o=i[1];function c(l){var s=typeof l=="function"?l(a.current):l;s!==a.current&&t(s,a.current),a.current=s,o({})}return[a.current,c]}var Dt=.1,Fe=.01,Se=20,Ue=Math.pow(.995,Se);function Wt(e,t){var a=(0,n.useState)(),r=(0,R.Z)(a,2),i=r[0],o=r[1],c=(0,n.useState)(0),l=(0,R.Z)(c,2),s=l[0],d=l[1],y=(0,n.useState)(0),u=(0,R.Z)(y,2),$=u[0],p=u[1],I=(0,n.useState)(),Z=(0,R.Z)(I,2),z=Z[0],W=Z[1],O=(0,n.useRef)();function v(f){var g=f.touches[0],T=g.screenX,b=g.screenY;o({x:T,y:b}),window.clearInterval(O.current)}function w(f){if(i){f.preventDefault();var g=f.touches[0],T=g.screenX,b=g.screenY;o({x:T,y:b});var P=T-i.x,E=b-i.y;t(P,E);var M=Date.now();d(M),p(M-s),W({x:P,y:E})}}function A(){if(i&&(o(null),W(null),z)){var f=z.x/$,g=z.y/$,T=Math.abs(f),b=Math.abs(g);if(Math.max(T,b)<Dt)return;var P=f,E=g;O.current=window.setInterval(function(){if(Math.abs(P)<Fe&&Math.abs(E)<Fe){window.clearInterval(O.current);return}P*=Ue,E*=Ue,t(P*Se,E*Se)},Se)}}var C=(0,n.useRef)();function G(f){var g=f.deltaX,T=f.deltaY,b=0,P=Math.abs(g),E=Math.abs(T);P===E?b=C.current==="x"?g:T:P>E?(b=g,C.current="x"):(b=T,C.current="y"),t(-b,-b)&&f.preventDefault()}var L=(0,n.useRef)(null);L.current={onTouchStart:v,onTouchMove:w,onTouchEnd:A,onWheel:G},n.useEffect(function(){function f(P){L.current.onTouchStart(P)}function g(P){L.current.onTouchMove(P)}function T(P){L.current.onTouchEnd(P)}function b(P){L.current.onWheel(P)}return document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",T,{passive:!1}),e.current.addEventListener("touchstart",f,{passive:!1}),e.current.addEventListener("wheel",b),function(){document.removeEventListener("touchmove",g),document.removeEventListener("touchend",T)}},[])}var Gt=m(77189);function Ye(e){var t=(0,n.useState)(0),a=(0,R.Z)(t,2),r=a[0],i=a[1],o=(0,n.useRef)(0),c=(0,n.useRef)();return c.current=e,(0,Gt.o)(function(){var l;(l=c.current)===null||l===void 0||l.call(c)},[r]),function(){o.current===r&&(o.current+=1,i(o.current))}}function Ht(e){var t=(0,n.useRef)([]),a=(0,n.useState)({}),r=(0,R.Z)(a,2),i=r[1],o=(0,n.useRef)(typeof e=="function"?e():e),c=Ye(function(){var s=o.current;t.current.forEach(function(d){s=d(s)}),t.current=[],o.current=s,i({})});function l(s){t.current.push(s),c()}return[o.current,l]}var Qe={width:0,height:0,left:0,top:0,right:0};function jt(e,t,a,r,i,o,c){var l=c.tabs,s=c.tabPosition,d=c.rtl,y,u,$;return["top","bottom"].includes(s)?(y="width",u=d?"right":"left",$=Math.abs(a)):(y="height",u="top",$=-a),(0,n.useMemo)(function(){if(!l.length)return[0,0];for(var p=l.length,I=p,Z=0;Z<p;Z+=1){var z=e.get(l[Z].key)||Qe;if(z[u]+z[y]>$+t){I=Z-1;break}}for(var W=0,O=p-1;O>=0;O-=1){var v=e.get(l[O].key)||Qe;if(v[u]<$){W=O+1;break}}return W>=I?[0,0]:[W,I]},[e,t,r,i,o,$,s,l.map(function(p){return p.key}).join("_"),d])}function Je(e){var t;return e instanceof Map?(t={},e.forEach(function(a,r){t[r]=a})):t=e,JSON.stringify(t)}var kt="TABS_DQ";function qe(e){return String(e).replace(/"/g,kt)}function et(e,t,a,r){return!(!a||r||e===!1||e===void 0&&(t===!1||t===null))}var Kt=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.editable,i=e.locale,o=e.style;return!r||r.showAdd===!1?null:n.createElement("button",{ref:t,type:"button",className:"".concat(a,"-nav-add"),style:o,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(l){r.onEdit("add",{event:l})}},r.addIcon||"+")}),tt=Kt,Xt=n.forwardRef(function(e,t){var a=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var o,c={};return(0,we.Z)(i)==="object"&&!n.isValidElement(i)?c=i:c.right=i,a==="right"&&(o=c.right),a==="left"&&(o=c.left),o?n.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},o):null}),at=Xt,Vt=m(20489),nt=m(93442),Y=m(57),Ft=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.id,i=e.tabs,o=e.locale,c=e.mobile,l=e.moreIcon,s=l===void 0?"More":l,d=e.moreTransitionName,y=e.style,u=e.className,$=e.editable,p=e.tabBarGutter,I=e.rtl,Z=e.removeAriaLabel,z=e.onTabClick,W=e.getPopupContainer,O=e.popupClassName,v=(0,n.useState)(!1),w=(0,R.Z)(v,2),A=w[0],C=w[1],G=(0,n.useState)(null),L=(0,R.Z)(G,2),f=L[0],g=L[1],T="".concat(r,"-more-popup"),b="".concat(a,"-dropdown"),P=f!==null?"".concat(T,"-").concat(f):null,E=o==null?void 0:o.dropdownAriaLabel;function M(x,_){x.preventDefault(),x.stopPropagation(),$.onEdit("remove",{key:_,event:x})}var Q=n.createElement(nt.ZP,{onClick:function(_){var K=_.key,U=_.domEvent;z(K,U),C(!1)},prefixCls:"".concat(b,"-menu"),id:T,tabIndex:-1,role:"listbox","aria-activedescendant":P,selectedKeys:[f],"aria-label":E!==void 0?E:"expanded dropdown"},i.map(function(x){var _=x.closable,K=x.disabled,U=x.closeIcon,X=x.key,J=x.label,ne=et(_,U,$,K);return n.createElement(nt.sN,{key:X,id:"".concat(T,"-").concat(X),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(X),disabled:K},n.createElement("span",null,J),ne&&n.createElement("button",{type:"button","aria-label":Z||"remove",tabIndex:0,className:"".concat(b,"-menu-item-remove"),onClick:function(ie){ie.stopPropagation(),M(ie,X)}},U||$.removeIcon||"\xD7"))}));function ee(x){for(var _=i.filter(function(ne){return!ne.disabled}),K=_.findIndex(function(ne){return ne.key===f})||0,U=_.length,X=0;X<U;X+=1){K=(K+x+U)%U;var J=_[K];if(!J.disabled){g(J.key);return}}}function te(x){var _=x.which;if(!A){[Y.Z.DOWN,Y.Z.SPACE,Y.Z.ENTER].includes(_)&&(C(!0),x.preventDefault());return}switch(_){case Y.Z.UP:ee(-1),x.preventDefault();break;case Y.Z.DOWN:ee(1),x.preventDefault();break;case Y.Z.ESC:C(!1);break;case Y.Z.SPACE:case Y.Z.ENTER:f!==null&&z(f,x);break}}(0,n.useEffect)(function(){var x=document.getElementById(P);x&&x.scrollIntoView&&x.scrollIntoView(!1)},[f]),(0,n.useEffect)(function(){A||g(null)},[A]);var H=(0,k.Z)({},I?"marginRight":"marginLeft",p);i.length||(H.visibility="hidden",H.order=1);var ae=j()((0,k.Z)({},"".concat(b,"-rtl"),I)),be=c?null:n.createElement(Vt.Z,{prefixCls:b,overlay:Q,trigger:["hover"],visible:i.length?A:!1,transitionName:d,onVisibleChange:C,overlayClassName:j()(ae,O),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:W},n.createElement("button",{type:"button",className:"".concat(a,"-nav-more"),style:H,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":T,id:"".concat(r,"-more"),"aria-expanded":A,onKeyDown:te},s));return n.createElement("div",{className:j()("".concat(a,"-nav-operations"),u),style:y,ref:t},be,n.createElement(tt,{prefixCls:a,locale:o,editable:$}))}),Ut=n.memo(Ft,function(e,t){return t.tabMoving}),Yt=function(t){var a,r=t.prefixCls,i=t.id,o=t.active,c=t.tab,l=c.key,s=c.label,d=c.disabled,y=c.closeIcon,u=c.icon,$=t.closable,p=t.renderWrapper,I=t.removeAriaLabel,Z=t.editable,z=t.onClick,W=t.onFocus,O=t.style,v="".concat(r,"-tab"),w=et($,y,Z,d);function A(f){d||z(f)}function C(f){f.preventDefault(),f.stopPropagation(),Z.onEdit("remove",{key:l,event:f})}var G=n.useMemo(function(){return u&&typeof s=="string"?n.createElement("span",null,s):s},[s,u]),L=n.createElement("div",{key:l,"data-node-key":qe(l),className:j()(v,(a={},(0,k.Z)(a,"".concat(v,"-with-remove"),w),(0,k.Z)(a,"".concat(v,"-active"),o),(0,k.Z)(a,"".concat(v,"-disabled"),d),a)),style:O,onClick:A},n.createElement("div",{role:"tab","aria-selected":o,id:i&&"".concat(i,"-tab-").concat(l),className:"".concat(v,"-btn"),"aria-controls":i&&"".concat(i,"-panel-").concat(l),"aria-disabled":d,tabIndex:d?null:0,onClick:function(g){g.stopPropagation(),A(g)},onKeyDown:function(g){[Y.Z.SPACE,Y.Z.ENTER].includes(g.which)&&(g.preventDefault(),A(g))},onFocus:W},u&&n.createElement("span",{className:"".concat(v,"-icon")},u),s&&G),w&&n.createElement("button",{type:"button","aria-label":I||"remove",tabIndex:0,className:"".concat(v,"-remove"),onClick:function(g){g.stopPropagation(),C(g)}},y||Z.removeIcon||"\xD7"));return p?p(L):L},Qt=Yt,Jt=function(t,a){var r=t.offsetWidth,i=t.offsetHeight,o=t.offsetTop,c=t.offsetLeft,l=t.getBoundingClientRect(),s=l.width,d=l.height,y=l.x,u=l.y;return Math.abs(s-r)<1?[s,d,y-a.x,u-a.y]:[r,i,c,o]},ue=function(t){var a=t.current||{},r=a.offsetWidth,i=r===void 0?0:r,o=a.offsetHeight,c=o===void 0?0:o;if(t.current){var l=t.current.getBoundingClientRect(),s=l.width,d=l.height;if(Math.abs(s-i)<1)return[s,d]}return[i,c]},ye=function(t,a){return t[a?0:1]},qt=n.forwardRef(function(e,t){var a,r=e.className,i=e.style,o=e.id,c=e.animated,l=e.activeKey,s=e.rtl,d=e.extra,y=e.editable,u=e.locale,$=e.tabPosition,p=e.tabBarGutter,I=e.children,Z=e.onTabClick,z=e.onTabScroll,W=e.indicatorSize,O=n.useContext($e),v=O.prefixCls,w=O.tabs,A=(0,n.useRef)(null),C=(0,n.useRef)(null),G=(0,n.useRef)(null),L=(0,n.useRef)(null),f=(0,n.useRef)(null),g=(0,n.useRef)(null),T=(0,n.useRef)(null),b=$==="top"||$==="bottom",P=Ve(0,function(B,S){b&&z&&z({direction:B>S?"left":"right"})}),E=(0,R.Z)(P,2),M=E[0],Q=E[1],ee=Ve(0,function(B,S){!b&&z&&z({direction:B>S?"top":"bottom"})}),te=(0,R.Z)(ee,2),H=te[0],ae=te[1],be=(0,n.useState)([0,0]),x=(0,R.Z)(be,2),_=x[0],K=x[1],U=(0,n.useState)([0,0]),X=(0,R.Z)(U,2),J=X[0],ne=X[1],xe=(0,n.useState)([0,0]),ie=(0,R.Z)(xe,2),Ne=ie[0],Ze=ie[1],ze=(0,n.useState)([0,0]),me=(0,R.Z)(ze,2),Me=me[0],N=me[1],ce=Ht(new Map),ve=(0,R.Z)(ce,2),Aa=ve[0],Da=ve[1],Ce=At(w,Aa,J[0]),Be=ye(_,b),ge=ye(J,b),Oe=ye(Ne,b),st=ye(Me,b),dt=Be<ge+Oe,q=dt?Be-st:Be-Oe,Wa="".concat(v,"-nav-operations-hidden"),oe=0,se=0;b&&s?(oe=0,se=Math.max(0,ge-q)):(oe=Math.min(0,q-ge),se=0);function _e(B){return B<oe?oe:B>se?se:B}var Ae=(0,n.useRef)(null),Ga=(0,n.useState)(),ut=(0,R.Z)(Ga,2),Te=ut[0],vt=ut[1];function De(){vt(Date.now())}function We(){Ae.current&&clearTimeout(Ae.current)}Wt(L,function(B,S){function D(V,de){V(function(le){var Re=_e(le+de);return Re})}return dt?(b?D(Q,B):D(ae,S),We(),De(),!0):!1}),(0,n.useEffect)(function(){return We(),Te&&(Ae.current=setTimeout(function(){vt(0)},100)),We},[Te]);var Ha=jt(Ce,q,b?M:H,ge,Oe,st,(0,F.Z)((0,F.Z)({},e),{},{tabs:w})),ft=(0,R.Z)(Ha,2),ja=ft[0],ka=ft[1],bt=(0,Mt.Z)(function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l,S=Ce.get(B)||{width:0,height:0,left:0,right:0,top:0};if(b){var D=M;s?S.right<M?D=S.right:S.right+S.width>M+q&&(D=S.right+S.width-q):S.left<-M?D=-S.left:S.left+S.width>-M+q&&(D=-(S.left+S.width-q)),ae(0),Q(_e(D))}else{var V=H;S.top<-H?V=-S.top:S.top+S.height>-H+q&&(V=-(S.top+S.height-q)),Q(0),ae(_e(V))}}),Pe={};$==="top"||$==="bottom"?Pe[s?"marginRight":"marginLeft"]=p:Pe.marginTop=p;var mt=w.map(function(B,S){var D=B.key;return n.createElement(Qt,{id:o,prefixCls:v,key:D,tab:B,style:S===0?void 0:Pe,closable:B.closable,editable:y,active:D===l,renderWrapper:I,removeAriaLabel:u==null?void 0:u.removeAriaLabel,onClick:function(de){Z(D,de)},onFocus:function(){bt(D),De(),L.current&&(s||(L.current.scrollLeft=0),L.current.scrollTop=0)}})}),gt=function(){return Da(function(){var S,D=new Map,V=(S=f.current)===null||S===void 0?void 0:S.getBoundingClientRect();return w.forEach(function(de){var le,Re=de.key,xt=(le=f.current)===null||le===void 0?void 0:le.querySelector('[data-node-key="'.concat(qe(Re),'"]'));if(xt){var Ua=Jt(xt,V),Ie=(0,R.Z)(Ua,4),Ya=Ie[0],Qa=Ie[1],Ja=Ie[2],qa=Ie[3];D.set(Re,{width:Ya,height:Qa,left:Ja,top:qa})}}),D})};(0,n.useEffect)(function(){gt()},[w.map(function(B){return B.key}).join("_")]);var Ee=Ye(function(){var B=ue(A),S=ue(C),D=ue(G);K([B[0]-S[0]-D[0],B[1]-S[1]-D[1]]);var V=ue(T);Ze(V);var de=ue(g);N(de);var le=ue(f);ne([le[0]-V[0],le[1]-V[1]]),gt()}),Ka=w.slice(0,ja),Xa=w.slice(ka+1),ht=[].concat((0,ke.Z)(Ka),(0,ke.Z)(Xa)),pt=Ce.get(l),Va=_t({activeTabOffset:pt,horizontal:b,rtl:s,indicatorSize:W}),Fa=Va.style;(0,n.useEffect)(function(){bt()},[l,oe,se,Je(pt),Je(Ce),b]),(0,n.useEffect)(function(){Ee()},[s]);var $t=!!ht.length,he="".concat(v,"-nav-wrap"),Ge,He,St,yt;return b?s?(He=M>0,Ge=M!==se):(Ge=M<0,He=M!==oe):(St=H<0,yt=H!==oe),n.createElement(Le.Z,{onResize:Ee},n.createElement("div",{ref:(0,Bt.x1)(t,A),role:"tablist",className:j()("".concat(v,"-nav"),r),style:i,onKeyDown:function(){De()}},n.createElement(at,{ref:C,position:"left",extra:d,prefixCls:v}),n.createElement(Le.Z,{onResize:Ee},n.createElement("div",{className:j()(he,(a={},(0,k.Z)(a,"".concat(he,"-ping-left"),Ge),(0,k.Z)(a,"".concat(he,"-ping-right"),He),(0,k.Z)(a,"".concat(he,"-ping-top"),St),(0,k.Z)(a,"".concat(he,"-ping-bottom"),yt),a)),ref:L},n.createElement(Le.Z,{onResize:Ee},n.createElement("div",{ref:f,className:"".concat(v,"-nav-list"),style:{transform:"translate(".concat(M,"px, ").concat(H,"px)"),transition:Te?"none":void 0}},mt,n.createElement(tt,{ref:T,prefixCls:v,locale:u,editable:y,style:(0,F.Z)((0,F.Z)({},mt.length===0?void 0:Pe),{},{visibility:$t?"hidden":null})}),n.createElement("div",{className:j()("".concat(v,"-ink-bar"),(0,k.Z)({},"".concat(v,"-ink-bar-animated"),c.inkBar)),style:Fa}))))),n.createElement(Ut,(0,re.Z)({},e,{removeAriaLabel:u==null?void 0:u.removeAriaLabel,ref:g,prefixCls:v,tabs:ht,className:!$t&&Wa,tabMoving:!!Te})),n.createElement(at,{ref:G,position:"right",extra:d,prefixCls:v})))}),rt=qt,ea=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.className,i=e.style,o=e.id,c=e.active,l=e.tabKey,s=e.children;return n.createElement("div",{id:o&&"".concat(o,"-panel-").concat(l),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(l),"aria-hidden":!c,style:i,className:j()(a,c&&"".concat(a,"-active"),r),ref:t},s)}),it=ea,ta=["renderTabBar"],aa=["label","key"],na=function(t){var a=t.renderTabBar,r=(0,pe.Z)(t,ta),i=n.useContext($e),o=i.tabs;if(a){var c=(0,F.Z)((0,F.Z)({},r),{},{panes:o.map(function(l){var s=l.label,d=l.key,y=(0,pe.Z)(l,aa);return n.createElement(it,(0,re.Z)({tab:s,key:d,tabKey:d},y))})});return a(c,rt)}return n.createElement(rt,r)},ra=na,ia=m(10091),oa=["key","forceRender","style","className","destroyInactiveTabPane"],la=function(t){var a=t.id,r=t.activeKey,i=t.animated,o=t.tabPosition,c=t.destroyInactiveTabPane,l=n.useContext($e),s=l.prefixCls,d=l.tabs,y=i.tabPane,u="".concat(s,"-tabpane");return n.createElement("div",{className:j()("".concat(s,"-content-holder"))},n.createElement("div",{className:j()("".concat(s,"-content"),"".concat(s,"-content-").concat(o),(0,k.Z)({},"".concat(s,"-content-animated"),y))},d.map(function($){var p=$.key,I=$.forceRender,Z=$.style,z=$.className,W=$.destroyInactiveTabPane,O=(0,pe.Z)($,oa),v=p===r;return n.createElement(ia.default,(0,re.Z)({key:p,visible:v,forceRender:I,removeOnLeave:!!(c||W),leavedClassName:"".concat(u,"-hidden")},i.tabPaneMotion),function(w,A){var C=w.style,G=w.className;return n.createElement(it,(0,re.Z)({},O,{prefixCls:u,id:a,tabKey:p,animated:y,active:v,style:(0,F.Z)((0,F.Z)({},Z),C),className:j()(z,G),ref:A}))})})))},ca=la,sa=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicatorSize"],ot=0,da=n.forwardRef(function(e,t){var a,r=e.id,i=e.prefixCls,o=i===void 0?"rc-tabs":i,c=e.className,l=e.items,s=e.direction,d=e.activeKey,y=e.defaultActiveKey,u=e.editable,$=e.animated,p=e.tabPosition,I=p===void 0?"top":p,Z=e.tabBarGutter,z=e.tabBarStyle,W=e.tabBarExtraContent,O=e.locale,v=e.moreIcon,w=e.moreTransitionName,A=e.destroyInactiveTabPane,C=e.renderTabBar,G=e.onChange,L=e.onTabClick,f=e.onTabScroll,g=e.getPopupContainer,T=e.popupClassName,b=e.indicatorSize,P=(0,pe.Z)(e,sa),E=n.useMemo(function(){return(l||[]).filter(function(N){return N&&(0,we.Z)(N)==="object"&&"key"in N})},[l]),M=s==="rtl",Q=zt($),ee=(0,n.useState)(!1),te=(0,R.Z)(ee,2),H=te[0],ae=te[1];(0,n.useEffect)(function(){ae((0,Zt.Z)())},[]);var be=(0,je.Z)(function(){var N;return(N=E[0])===null||N===void 0?void 0:N.key},{value:d,defaultValue:y}),x=(0,R.Z)(be,2),_=x[0],K=x[1],U=(0,n.useState)(function(){return E.findIndex(function(N){return N.key===_})}),X=(0,R.Z)(U,2),J=X[0],ne=X[1];(0,n.useEffect)(function(){var N=E.findIndex(function(ve){return ve.key===_});if(N===-1){var ce;N=Math.max(0,Math.min(J,E.length-1)),K((ce=E[N])===null||ce===void 0?void 0:ce.key)}ne(N)},[E.map(function(N){return N.key}).join("_"),_,J]);var xe=(0,je.Z)(null,{value:r}),ie=(0,R.Z)(xe,2),Ne=ie[0],Ze=ie[1];(0,n.useEffect)(function(){r||(Ze("rc-tabs-".concat(ot)),ot+=1)},[]);function ze(N,ce){L==null||L(N,ce);var ve=N!==_;K(N),ve&&(G==null||G(N))}var me={id:Ne,activeKey:_,animated:Q,tabPosition:I,rtl:M,mobile:H},Me=(0,F.Z)((0,F.Z)({},me),{},{editable:u,locale:O,moreIcon:v,moreTransitionName:w,tabBarGutter:Z,onTabClick:ze,onTabScroll:f,extra:W,style:z,panes:null,getPopupContainer:g,popupClassName:T,indicatorSize:b});return n.createElement($e.Provider,{value:{tabs:E,prefixCls:o}},n.createElement("div",(0,re.Z)({ref:t,id:r,className:j()(o,"".concat(o,"-").concat(I),(a={},(0,k.Z)(a,"".concat(o,"-mobile"),H),(0,k.Z)(a,"".concat(o,"-editable"),u),(0,k.Z)(a,"".concat(o,"-rtl"),M),a),c)},P),n.createElement(ra,(0,re.Z)({},Me,{renderTabBar:C})),n.createElement(ca,(0,re.Z)({destroyInactiveTabPane:A},me,{animated:Q}))))}),ua=da,va=ua,fa=m(3115),ba=m(27934),ma=m(21476);const ga={motionAppear:!1,motionEnter:!0,motionLeave:!0};function ha(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},a;return t===!1?a={inkBar:!1,tabPane:!1}:t===!0?a={inkBar:!0,tabPane:!0}:a=Object.assign({inkBar:!0},typeof t=="object"?t:{}),a.tabPane&&(a.tabPaneMotion=Object.assign(Object.assign({},ga),{motionName:(0,ma.m)(e,"switch")})),a}var pa=m(13763),$a=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};function Sa(e){return e.filter(t=>t)}function ya(e,t){if(e)return e;const a=(0,pa.Z)(t).map(r=>{if(n.isValidElement(r)){const{key:i,props:o}=r,c=o||{},{tab:l}=c,s=$a(c,["tab"]);return Object.assign(Object.assign({key:String(i)},s),{label:l})}return null});return Sa(a)}var h=m(60076),fe=m(11745),xa=m(19522),Ca=m(24994),lt=m(10874),Ta=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[(0,lt.oN)(e,"slide-up"),(0,lt.oN)(e,"slide-down")]]};const Pa=e=>{const{componentCls:t,tabsCardPadding:a,cardBg:r,cardGutter:i,colorBorderSecondary:o,itemSelectedColor:c}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:r,border:`${(0,h.unit)(e.lineWidth)} ${e.lineType} ${o}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:c,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:(0,h.unit)(i)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${(0,h.unit)(e.borderRadiusLG)} ${(0,h.unit)(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${(0,h.unit)(e.borderRadiusLG)} ${(0,h.unit)(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:(0,h.unit)(i)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,h.unit)(e.borderRadiusLG)} 0 0 ${(0,h.unit)(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,h.unit)(e.borderRadiusLG)} ${(0,h.unit)(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Ea=e=>{const{componentCls:t,itemHoverColor:a,dropdownEdgeChildVerticalPadding:r}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,fe.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${(0,h.unit)(r)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},fe.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${(0,h.unit)(e.paddingXXS)} ${(0,h.unit)(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Ra=e=>{const{componentCls:t,margin:a,colorBorderSecondary:r,horizontalMargin:i,verticalItemPadding:o,verticalItemMargin:c,calc:l}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:i,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${(0,h.unit)(e.lineWidth)} ${e.lineType} ${r}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:a,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:l(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:o,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:c},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:(0,h.unit)(l(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${(0,h.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:l(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${(0,h.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Ia=e=>{const{componentCls:t,cardPaddingSM:a,cardPaddingLG:r,horizontalItemPaddingSM:i,horizontalItemPaddingLG:o}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:o,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:a}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${(0,h.unit)(e.borderRadius)} ${(0,h.unit)(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${(0,h.unit)(e.borderRadius)} ${(0,h.unit)(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,h.unit)(e.borderRadius)} ${(0,h.unit)(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,h.unit)(e.borderRadius)} 0 0 ${(0,h.unit)(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r}}}}}},wa=e=>{const{componentCls:t,itemActiveColor:a,itemHoverColor:r,iconCls:i,tabsHorizontalItemMargin:o,horizontalItemPadding:c,itemSelectedColor:l,itemColor:s}=e,d=`${t}-tab`;return{[d]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:c,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:s,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:a}},(0,fe.Qy)(e)),"&-btn":{outline:"none",transition:"all 0.3s",[`${d}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:r},[`&${d}-active ${d}-btn`]:{color:l,textShadow:e.tabsActiveTextShadow},[`&${d}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${d}-disabled ${d}-btn, &${d}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${d}-remove ${i}`]:{margin:0},[`${i}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${d} + ${d}`]:{margin:{_skip_check_:!0,value:o}}}},La=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:a,iconCls:r,cardGutter:i,calc:o}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:a},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[r]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:(0,h.unit)(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:(0,h.unit)(e.marginXS)},marginLeft:{_skip_check_:!0,value:(0,h.unit)(o(e.marginXXS).mul(-1).equal())},[r]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:i},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Na=e=>{const{componentCls:t,tabsCardPadding:a,cardHeight:r,cardGutter:i,itemHoverColor:o,itemActiveColor:c,colorBorderSecondary:l}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,fe.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:r,marginLeft:{_skip_check_:!0,value:i},padding:`0 ${(0,h.unit)(e.paddingXS)}`,background:"transparent",border:`${(0,h.unit)(e.lineWidth)} ${e.lineType} ${l}`,borderRadius:`${(0,h.unit)(e.borderRadiusLG)} ${(0,h.unit)(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:o},"&:active, &:focus:not(:focus-visible)":{color:c}},(0,fe.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),wa(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},Za=e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${e.paddingXXS*1.5}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${e.paddingXXS*1.5}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}};var za=(0,xa.I$)("Tabs",e=>{const t=(0,Ca.TS)(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${(0,h.unit)(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${(0,h.unit)(e.horizontalItemGutter)}`});return[Ia(t),La(t),Ra(t),Ea(t),Pa(t),Na(t),Ta(t)]},Za),Ma=m(49071),Ba=()=>null,Oa=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};const ct=e=>{const{type:t,className:a,rootClassName:r,size:i,onEdit:o,hideAdd:c,centered:l,addIcon:s,popupClassName:d,children:y,items:u,animated:$,style:p,indicatorSize:I}=e,Z=Oa(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated","style","indicatorSize"]),{prefixCls:z,moreIcon:W=n.createElement(Pt.Z,null)}=Z,{direction:O,tabs:v,getPrefixCls:w,getPopupContainer:A}=n.useContext(fa.E_),C=w("tabs",z),G=(0,Ma.Z)(C),[L,f,g]=za(C,G);let T;t==="editable-card"&&(T={onEdit:(ee,te)=>{let{key:H,event:ae}=te;o==null||o(ee==="add"?ae:H,ee)},removeIcon:n.createElement(Tt.Z,null),addIcon:s||n.createElement(Lt,null),showAdd:c!==!0});const b=w(),P=ya(u,y),E=ha(C,$),M=(0,ba.Z)(i),Q=Object.assign(Object.assign({},v==null?void 0:v.style),p);return L(n.createElement(va,Object.assign({direction:O,getPopupContainer:A,moreTransitionName:`${b}-slide-up`},Z,{items:P,className:j()({[`${C}-${M}`]:M,[`${C}-card`]:["card","editable-card"].includes(t),[`${C}-editable-card`]:t==="editable-card",[`${C}-centered`]:l},v==null?void 0:v.className,a,r,f,g,G),popupClassName:j()(d,f,g,G),style:Q,editable:T,moreIcon:W,prefixCls:C,animated:E,indicatorSize:I??(v==null?void 0:v.indicatorSize)})))};ct.TabPane=Ba;var _a=ct}}]);