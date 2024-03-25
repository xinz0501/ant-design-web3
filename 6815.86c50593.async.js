"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[6815],{54714:function(de,M){var n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"}}]},name:"calendar",theme:"outlined"};M.Z=n},49385:function(de,M){var n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"};M.Z=n},41845:function(de,M){var n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"};M.Z=n},50963:function(de,M,n){n.d(M,{F:function(){return l},Z:function(){return u}});function l(g){return g!=null&&g===g.window}function u(g,R){var I,V;if(typeof window>"u")return 0;const Y=R?"scrollTop":"scrollLeft";let A=0;return l(g)?A=g[R?"pageYOffset":"pageXOffset"]:g instanceof Document?A=g.documentElement[Y]:(g instanceof HTMLElement||g)&&(A=g[Y]),g&&!l(g)&&typeof A!="number"&&(A=(V=((I=g.ownerDocument)!==null&&I!==void 0?I:g).documentElement)===null||V===void 0?void 0:V[Y]),A}},17345:function(de,M,n){n.d(M,{Z:function(){return R}});var l=n(79512);function u(I,V,Y,A){const o=Y-V;return I/=A/2,I<1?o/2*I*I*I+V:o/2*((I-=2)*I*I+2)+V}var g=n(50963);function R(I){let V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{getContainer:Y=()=>window,callback:A,duration:o=450}=V,c=Y(),P=(0,g.Z)(c,!0),G=Date.now(),y=()=>{const $=Date.now()-G,p=u($>o?o:$,P,I,o);(0,g.F)(c)?c.scrollTo(window.pageXOffset,p):c instanceof Document||c.constructor.name==="HTMLDocument"?c.documentElement.scrollTop=p:c.scrollTop=p,$<o?(0,l.Z)(y):typeof A=="function"&&A()};(0,l.Z)(y)}},71546:function(de,M,n){n.d(M,{Z:function(){return fe}});var l=n(50959),u=n(82187),g=n.n(u),R=n(12682),I=n(36760),V=n(8896),Y=n(79512);function A(d){let O;const x=J=>()=>{O=null,d.apply(void 0,(0,V.Z)(J))},K=function(){if(O==null){for(var J=arguments.length,Q=new Array(J),X=0;X<J;X++)Q[X]=arguments[X];O=(0,Y.Z)(x(Q))}};return K.cancel=()=>{Y.Z.cancel(O),O=null},K}var o=A,c=n(93289),P=n(11783);const G=d=>{const{componentCls:O}=d;return{[O]:{position:"fixed",zIndex:d.zIndexPopup}}},y=d=>({zIndexPopup:d.zIndexBase+10});var f=(0,P.I$)("Affix",G,y);function $(d){return d!==window?d.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function p(d,O,x){if(x!==void 0&&Math.round(O.top)>Math.round(d.top)-x)return x+O.top}function Z(d,O,x){if(x!==void 0&&Math.round(O.bottom)<Math.round(d.bottom)+x){const K=window.innerHeight-O.bottom;return x+K}}const ue=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function Se(){return typeof window<"u"?window:null}var re;(function(d){d[d.None=0]="None",d[d.Prepare=1]="Prepare"})(re||(re={}));var fe=l.forwardRef((d,O)=>{var x;const{style:K,offsetTop:J,offsetBottom:Q,prefixCls:X,className:he,rootClassName:e,children:t,target:i,onChange:r}=d,{getPrefixCls:s,getTargetContainer:L}=l.useContext(c.E_),h=s("affix",X),[b,S]=l.useState(!1),[N,E]=l.useState(),[a,j]=l.useState(),B=l.useRef(re.None),q=l.useRef(null),D=l.useRef(),w=l.useRef(null),z=l.useRef(null),_=l.useRef(null),k=(x=i??L)!==null&&x!==void 0?x:Se,ee=Q===void 0&&J===void 0?0:J,F=()=>{if(B.current!==re.Prepare||!z.current||!w.current||!k)return;const W=k();if(W){const C={status:re.None},T=$(w.current);if(T.top===0&&T.left===0&&T.width===0&&T.height===0)return;const ce=$(W),pe=p(T,ce,ee),Te=Z(T,ce,Q);pe!==void 0?(C.affixStyle={position:"fixed",top:pe,width:T.width,height:T.height},C.placeholderStyle={width:T.width,height:T.height}):Te!==void 0&&(C.affixStyle={position:"fixed",bottom:Te,width:T.width,height:T.height},C.placeholderStyle={width:T.width,height:T.height}),C.lastAffix=!!C.affixStyle,b!==C.lastAffix&&(r==null||r(C.lastAffix)),B.current=C.status,E(C.affixStyle),j(C.placeholderStyle),S(C.lastAffix)}},se=()=>{var W;B.current=re.Prepare,F()},v=o(()=>{se()}),U=o(()=>{if(k&&N){const W=k();if(W&&w.current){const C=$(W),T=$(w.current),ce=p(T,C,ee),pe=Z(T,C,Q);if(ce!==void 0&&N.top===ce||pe!==void 0&&N.bottom===pe)return}}se()}),oe=()=>{const W=k==null?void 0:k();W&&(ue.forEach(C=>{var T;D.current&&((T=q.current)===null||T===void 0||T.removeEventListener(C,D.current)),W==null||W.addEventListener(C,U)}),q.current=W,D.current=U)},le=()=>{_.current&&(clearTimeout(_.current),_.current=null);const W=k==null?void 0:k();ue.forEach(C=>{var T;W==null||W.removeEventListener(C,U),D.current&&((T=q.current)===null||T===void 0||T.removeEventListener(C,D.current))}),v.cancel(),U.cancel()};l.useImperativeHandle(O,()=>({updatePosition:v})),l.useEffect(()=>(_.current=setTimeout(oe),()=>le()),[]),l.useEffect(()=>{oe()},[i,N]),l.useEffect(()=>{v()},[i,J,Q]);const[ge,te,me]=f(h),ve=g()(e,te,h,me),ne=g()({[ve]:N});let xe=(0,I.Z)(d,["prefixCls","offsetTop","offsetBottom","target","onChange","rootClassName"]);return ge(l.createElement(R.Z,{onResize:v},l.createElement("div",Object.assign({style:K,className:he,ref:w},xe),N&&l.createElement("div",{style:a,"aria-hidden":"true"}),l.createElement("div",{className:ne,ref:z,style:N},l.createElement(R.Z,{onResize:v},t)))))})},83573:function(de,M,n){n.d(M,{Z:function(){return he}});var l=n(8896),u=n(50959),g=n(82187),R=n.n(g),I=n(45680),V=n(10886),Y=n(50963),A=n(17345),o=n(71546),c=n(93289),P=n(54063),y=u.createContext(void 0),$=e=>{const{href:t,title:i,prefixCls:r,children:s,className:L,target:h,replace:b}=e,S=u.useContext(y),{registerLink:N,unregisterLink:E,scrollTo:a,onClick:j,activeLink:B,direction:q}=S||{};u.useEffect(()=>(N==null||N(t),()=>{E==null||E(t)}),[t]);const D=F=>{b&&(F.preventDefault(),window.location.replace(t)),j==null||j(F,{title:i,href:t}),a==null||a(t)},{getPrefixCls:w}=u.useContext(c.E_),z=w("anchor",r),_=B===t,k=R()(`${z}-link`,L,{[`${z}-link-active`]:_}),ee=R()(`${z}-link-title`,{[`${z}-link-title-active`]:_});return u.createElement("div",{className:k},u.createElement("a",{className:ee,href:t,title:typeof i=="string"?i:"",target:h,onClick:D},i),q!=="horizontal"?s:null)},p=n(70833),Z=n(30817),ue=n(11783),Se=n(10818);const re=e=>{const{componentCls:t,holderOffsetBlock:i,motionDurationSlow:r,lineWidthBold:s,colorPrimary:L,lineType:h,colorSplit:b,calc:S}=e;return{[`${t}-wrapper`]:{marginBlockStart:S(i).mul(-1).equal(),paddingBlockStart:i,[t]:Object.assign(Object.assign({},(0,Z.Wf)(e)),{position:"relative",paddingInlineStart:s,[`${t}-link`]:{paddingBlock:e.linkPaddingBlock,paddingInline:`${(0,p.unit)(e.linkPaddingInlineStart)} 0`,"&-title":Object.assign(Object.assign({},Z.vS),{position:"relative",display:"block",marginBlockEnd:e.anchorTitleBlock,color:e.colorText,transition:`all ${e.motionDurationSlow}`,"&:only-child":{marginBlockEnd:0}}),[`&-active > ${t}-link-title`]:{color:e.colorPrimary},[`${t}-link`]:{paddingBlock:e.anchorPaddingBlockSecondary}}}),[`&:not(${t}-wrapper-horizontal)`]:{[t]:{"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:`${(0,p.unit)(s)} ${h} ${b}`,content:'" "'},[`${t}-ink`]:{position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:`top ${r} ease-in-out`,width:s,backgroundColor:L,[`&${t}-ink-visible`]:{display:"inline-block"}}}},[`${t}-fixed ${t}-ink ${t}-ink`]:{display:"none"}}}},ye=e=>{const{componentCls:t,motionDurationSlow:i,lineWidthBold:r,colorPrimary:s}=e;return{[`${t}-wrapper-horizontal`]:{position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:`${(0,p.unit)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,content:'" "'},[t]:{overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},[`${t}-link:first-of-type`]:{paddingInline:0},[`${t}-ink`]:{position:"absolute",bottom:0,transition:`left ${i} ease-in-out, width ${i} ease-in-out`,height:r,backgroundColor:s}}}}},fe=e=>({linkPaddingBlock:e.paddingXXS,linkPaddingInlineStart:e.padding});var d=(0,ue.I$)("Anchor",e=>{const{fontSize:t,fontSizeLG:i,paddingXXS:r,calc:s}=e,L=(0,Se.TS)(e,{holderOffsetBlock:r,anchorPaddingBlockSecondary:s(r).div(2).equal(),anchorTitleBlock:s(t).div(14).mul(3).equal(),anchorBallSize:s(i).div(2).equal()});return[re(L),ye(L)]},fe);function O(){return window}function x(e,t){if(!e.getClientRects().length)return 0;const i=e.getBoundingClientRect();return i.width||i.height?t===window?(t=e.ownerDocument.documentElement,i.top-t.clientTop):i.top-t.getBoundingClientRect().top:i.top}const K=/#([\S ]+)$/;var Q=e=>{var t;const{rootClassName:i,prefixCls:r,className:s,style:L,offsetTop:h,affix:b=!0,showInkInFixed:S=!1,children:N,items:E,direction:a="vertical",bounds:j,targetOffset:B,onClick:q,onChange:D,getContainer:w,getCurrentAnchor:z,replace:_}=e,[k,ee]=u.useState([]),[F,se]=u.useState(null),v=u.useRef(F),U=u.useRef(null),oe=u.useRef(null),le=u.useRef(!1),{direction:ge,anchor:te,getTargetContainer:me,getPrefixCls:ve}=u.useContext(c.E_),ne=ve("anchor",r),xe=(0,P.Z)(ne),[W,C,T]=d(ne,xe),ce=(t=w??me)!==null&&t!==void 0?t:O,pe=JSON.stringify(k),Te=(0,I.useEvent)(m=>{k.includes(m)||ee(H=>[].concat((0,l.Z)(H),[m]))}),Pe=(0,I.useEvent)(m=>{k.includes(m)&&ee(H=>H.filter(ae=>ae!==m))}),Ne=()=>{var m;const H=(m=U.current)===null||m===void 0?void 0:m.querySelector(`.${ne}-link-title-active`);if(H&&oe.current){const{style:ae}=oe.current,ie=a==="horizontal";ae.top=ie?"":`${H.offsetTop+H.clientHeight/2}px`,ae.height=ie?"":`${H.clientHeight}px`,ae.left=ie?`${H.offsetLeft}px`:"",ae.width=ie?`${H.clientWidth}px`:"",ie&&(0,V.Z)(H,{scrollMode:"if-needed",block:"nearest"})}},ze=function(m){let H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,ae=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;const ie=[],Ie=ce();return m.forEach(be=>{const Ce=K.exec(be==null?void 0:be.toString());if(!Ce)return;const we=document.getElementById(Ce[1]);if(we){const Le=x(we,Ie);Le<=H+ae&&ie.push({link:be,top:Le})}}),ie.length?ie.reduce((Ce,we)=>we.top>Ce.top?we:Ce).link:""},$e=(0,I.useEvent)(m=>{if(v.current===m)return;const H=typeof z=="function"?z(m):m;se(H),v.current=H,D==null||D(m)}),Ee=u.useCallback(()=>{if(le.current)return;const m=ze(k,B!==void 0?B:h||0,j);$e(m)},[pe,B,h]),Oe=u.useCallback(m=>{$e(m);const H=K.exec(m);if(!H)return;const ae=document.getElementById(H[1]);if(!ae)return;const ie=ce(),Ie=(0,Y.Z)(ie,!0),be=x(ae,ie);let Ce=Ie+be;Ce-=B!==void 0?B:h||0,le.current=!0,(0,A.Z)(Ce,{getContainer:ce,callback(){le.current=!1}})},[B,h]),He=R()(C,T,xe,i,`${ne}-wrapper`,{[`${ne}-wrapper-horizontal`]:a==="horizontal",[`${ne}-rtl`]:ge==="rtl"},s,te==null?void 0:te.className),Me=R()(ne,{[`${ne}-fixed`]:!b&&!S}),Re=R()(`${ne}-ink`,{[`${ne}-ink-visible`]:F}),Ae=Object.assign(Object.assign({maxHeight:h?`calc(100vh - ${h}px)`:"100vh"},te==null?void 0:te.style),L),Be=m=>Array.isArray(m)?m.map(H=>u.createElement($,Object.assign({replace:_},H,{key:H.key}),a==="vertical"&&Be(H.children))):null,ke=u.createElement("div",{ref:U,className:He,style:Ae},u.createElement("div",{className:Me},u.createElement("span",{className:Re,ref:oe}),"items"in e?Be(E):N));u.useEffect(()=>{const m=ce();return Ee(),m==null||m.addEventListener("scroll",Ee),()=>{m==null||m.removeEventListener("scroll",Ee)}},[pe]),u.useEffect(()=>{typeof z=="function"&&$e(z(v.current||""))},[z]),u.useEffect(()=>{Ne()},[a,z,pe,F]);const We=u.useMemo(()=>({registerLink:Te,unregisterLink:Pe,scrollTo:Oe,activeLink:F,onClick:q,direction:a}),[F,q,Oe,a]);return W(u.createElement(y.Provider,{value:We},b?u.createElement(o.Z,{offsetTop:h,target:ce},ke):ke))};const X=Q;X.Link=$;var he=X},64451:function(de,M,n){var l=n(99121);M.Z=l.Z},67302:function(de,M,n){var l=n(2311);M.Z=l.Z},38402:function(de,M,n){n.d(M,{Z:function(){return he}});var l=n(50959),u=n(34133),g=n(82187),R=n.n(g),I=n(41365),V=n(2931),Y=n(2903),A=n(93289),o=n(70833),c=n(99978),P=n(30817),G=n(10818),y=n(11783);const f=e=>{const{paddingXXS:t,lineWidth:i,tagPaddingHorizontal:r,componentCls:s,calc:L}=e,h=L(r).sub(i).equal(),b=L(t).sub(i).equal();return{[s]:Object.assign(Object.assign({},(0,P.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:h,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,o.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${s}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${s}-close-icon`]:{marginInlineStart:b,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${s}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${s}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:h}}),[`${s}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},$=e=>{const{lineWidth:t,fontSizeIcon:i,calc:r}=e,s=e.fontSizeSM;return(0,G.TS)(e,{tagFontSize:s,tagLineHeight:(0,o.unit)(r(e.lineHeightSM).mul(s).equal()),tagIconSize:r(i).sub(r(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},p=e=>({defaultBg:new c.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var Z=(0,y.I$)("Tag",e=>{const t=$(e);return f(t)},p),ue=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(i[r[s]]=e[r[s]]);return i},re=l.forwardRef((e,t)=>{const{prefixCls:i,style:r,className:s,checked:L,onChange:h,onClick:b}=e,S=ue(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:N,tag:E}=l.useContext(A.E_),a=z=>{h==null||h(!L),b==null||b(z)},j=N("tag",i),[B,q,D]=Z(j),w=R()(j,`${j}-checkable`,{[`${j}-checkable-checked`]:L},E==null?void 0:E.className,s,q,D);return B(l.createElement("span",Object.assign({},S,{ref:t,style:Object.assign(Object.assign({},r),E==null?void 0:E.style),className:w,onClick:a})))}),ye=n(95866);const fe=e=>(0,ye.Z)(e,(t,i)=>{let{textColor:r,lightBorderColor:s,lightColor:L,darkColor:h}=i;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:r,background:L,borderColor:s,"&-inverse":{color:e.colorTextLightSolid,background:h,borderColor:h},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var d=(0,y.bk)(["Tag","preset"],e=>{const t=$(e);return fe(t)},p);function O(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const x=(e,t,i)=>{const r=O(i);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${i}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var K=(0,y.bk)(["Tag","status"],e=>{const t=$(e);return[x(t,"success","Success"),x(t,"processing","Info"),x(t,"error","Error"),x(t,"warning","Warning")]},p),J=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(i[r[s]]=e[r[s]]);return i};const Q=(e,t)=>{const{prefixCls:i,className:r,rootClassName:s,style:L,children:h,icon:b,color:S,onClose:N,closeIcon:E,closable:a,bordered:j=!0}=e,B=J(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:q,direction:D,tag:w}=l.useContext(A.E_),[z,_]=l.useState(!0);l.useEffect(()=>{"visible"in B&&_(B.visible)},[B.visible]);const k=(0,I.o2)(S),ee=(0,I.yT)(S),F=k||ee,se=Object.assign(Object.assign({backgroundColor:S&&!F?S:void 0},w==null?void 0:w.style),L),v=q("tag",i),[U,oe,le]=Z(v),ge=R()(v,w==null?void 0:w.className,{[`${v}-${S}`]:F,[`${v}-has-color`]:S&&!F,[`${v}-hidden`]:!z,[`${v}-rtl`]:D==="rtl",[`${v}-borderless`]:!j},r,s,oe,le),te=C=>{C.stopPropagation(),N==null||N(C),!C.defaultPrevented&&_(!1)},[,me]=(0,V.Z)({closable:a,closeIcon:E??(w==null?void 0:w.closeIcon),customCloseIconRender:C=>C===null?l.createElement(u.Z,{className:`${v}-close-icon`,onClick:te}):l.createElement("span",{className:`${v}-close-icon`,onClick:te},C),defaultCloseIcon:null,defaultClosable:!1}),ve=typeof B.onClick=="function"||h&&h.type==="a",ne=b||null,xe=ne?l.createElement(l.Fragment,null,ne,h&&l.createElement("span",null,h)):h,W=l.createElement("span",Object.assign({},B,{ref:t,className:ge,style:se}),xe,me,k&&l.createElement(d,{key:"preset",prefixCls:v}),ee&&l.createElement(K,{key:"status",prefixCls:v}));return U(ve?l.createElement(Y.Z,{component:"Tag"},W):W)},X=l.forwardRef(Q);X.CheckableTag=re;var he=X},10886:function(de,M,n){n.d(M,{Z:function(){return A}});const l=o=>typeof o=="object"&&o!=null&&o.nodeType===1,u=(o,c)=>(!c||o!=="hidden")&&o!=="visible"&&o!=="clip",g=(o,c)=>{if(o.clientHeight<o.scrollHeight||o.clientWidth<o.scrollWidth){const P=getComputedStyle(o,null);return u(P.overflowY,c)||u(P.overflowX,c)||(G=>{const y=(f=>{if(!f.ownerDocument||!f.ownerDocument.defaultView)return null;try{return f.ownerDocument.defaultView.frameElement}catch{return null}})(G);return!!y&&(y.clientHeight<G.scrollHeight||y.clientWidth<G.scrollWidth)})(o)}return!1},R=(o,c,P,G,y,f,$,p)=>f<o&&$>c||f>o&&$<c?0:f<=o&&p<=P||$>=c&&p>=P?f-o-G:$>c&&p<P||f<o&&p>P?$-c+y:0,I=o=>{const c=o.parentElement;return c??(o.getRootNode().host||null)},V=(o,c)=>{var P,G,y,f;if(typeof document>"u")return[];const{scrollMode:$,block:p,inline:Z,boundary:ue,skipOverflowHiddenElements:Se}=c,re=typeof ue=="function"?ue:E=>E!==ue;if(!l(o))throw new TypeError("Invalid target");const ye=document.scrollingElement||document.documentElement,fe=[];let d=o;for(;l(d)&&re(d);){if(d=I(d),d===ye){fe.push(d);break}d!=null&&d===document.body&&g(d)&&!g(document.documentElement)||d!=null&&g(d,Se)&&fe.push(d)}const O=(G=(P=window.visualViewport)==null?void 0:P.width)!=null?G:innerWidth,x=(f=(y=window.visualViewport)==null?void 0:y.height)!=null?f:innerHeight,{scrollX:K,scrollY:J}=window,{height:Q,width:X,top:he,right:e,bottom:t,left:i}=o.getBoundingClientRect(),{top:r,right:s,bottom:L,left:h}=(E=>{const a=window.getComputedStyle(E);return{top:parseFloat(a.scrollMarginTop)||0,right:parseFloat(a.scrollMarginRight)||0,bottom:parseFloat(a.scrollMarginBottom)||0,left:parseFloat(a.scrollMarginLeft)||0}})(o);let b=p==="start"||p==="nearest"?he-r:p==="end"?t+L:he+Q/2-r+L,S=Z==="center"?i+X/2-h+s:Z==="end"?e+s:i-h;const N=[];for(let E=0;E<fe.length;E++){const a=fe[E],{height:j,width:B,top:q,right:D,bottom:w,left:z}=a.getBoundingClientRect();if($==="if-needed"&&he>=0&&i>=0&&t<=x&&e<=O&&he>=q&&t<=w&&i>=z&&e<=D)return N;const _=getComputedStyle(a),k=parseInt(_.borderLeftWidth,10),ee=parseInt(_.borderTopWidth,10),F=parseInt(_.borderRightWidth,10),se=parseInt(_.borderBottomWidth,10);let v=0,U=0;const oe="offsetWidth"in a?a.offsetWidth-a.clientWidth-k-F:0,le="offsetHeight"in a?a.offsetHeight-a.clientHeight-ee-se:0,ge="offsetWidth"in a?a.offsetWidth===0?0:B/a.offsetWidth:0,te="offsetHeight"in a?a.offsetHeight===0?0:j/a.offsetHeight:0;if(ye===a)v=p==="start"?b:p==="end"?b-x:p==="nearest"?R(J,J+x,x,ee,se,J+b,J+b+Q,Q):b-x/2,U=Z==="start"?S:Z==="center"?S-O/2:Z==="end"?S-O:R(K,K+O,O,k,F,K+S,K+S+X,X),v=Math.max(0,v+J),U=Math.max(0,U+K);else{v=p==="start"?b-q-ee:p==="end"?b-w+se+le:p==="nearest"?R(q,w,j,ee,se+le,b,b+Q,Q):b-(q+j/2)+le/2,U=Z==="start"?S-z-k:Z==="center"?S-(z+B/2)+oe/2:Z==="end"?S-D+F+oe:R(z,D,B,k,F+oe,S,S+X,X);const{scrollLeft:me,scrollTop:ve}=a;v=te===0?0:Math.max(0,Math.min(ve+v/te,a.scrollHeight-j/te+le)),U=ge===0?0:Math.max(0,Math.min(me+U/ge,a.scrollWidth-B/ge+oe)),b+=ve-v,S+=me-U}N.push({el:a,top:v,left:U})}return N},Y=o=>o===!1?{block:"end",inline:"nearest"}:(c=>c===Object(c)&&Object.keys(c).length!==0)(o)?o:{block:"start",inline:"nearest"};function A(o,c){if(!o.isConnected||!(y=>{let f=y;for(;f&&f.parentNode;){if(f.parentNode===document)return!0;f=f.parentNode instanceof ShadowRoot?f.parentNode.host:f.parentNode}return!1})(o))return;const P=(y=>{const f=window.getComputedStyle(y);return{top:parseFloat(f.scrollMarginTop)||0,right:parseFloat(f.scrollMarginRight)||0,bottom:parseFloat(f.scrollMarginBottom)||0,left:parseFloat(f.scrollMarginLeft)||0}})(o);if((y=>typeof y=="object"&&typeof y.behavior=="function")(c))return c.behavior(V(o,c));const G=typeof c=="boolean"||c==null?void 0:c.behavior;for(const{el:y,top:f,left:$}of V(o,Y(c))){const p=f-P.top+P.bottom,Z=$-P.left+P.right;y.scroll({top:p,left:Z,behavior:G})}}}}]);