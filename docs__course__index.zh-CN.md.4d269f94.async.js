"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[5872],{91146:function(E,m,n){n.r(m);var f=n(25158),d=n(8709),h=n(77576),v=n(14593),c=n(31240),t=n(5995),l=n(47308),a=n(44768),p=n(39517),x=n(77405),u=n(69271),g=n(50959),e=n(11527);function b(){var j=(0,u.eL)(),s=j.texts;return(0,e.jsx)(u.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h1",{id:"\u8BFE\u7A0B\u4ECB\u7ECD",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8BFE\u7A0B\u4ECB\u7ECD",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u8BFE\u7A0B\u4ECB\u7ECD"]})}),(0,e.jsx)(h.Z,{type:"warning",children:(0,e.jsx)("p",{children:s[0].value})}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:s[1].value}),(0,e.jsx)("p",{children:s[2].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:s[3].value}),s[4].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:s[5].value}),s[6].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("strong",{children:s[7].value}),s[8].value]})]}),(0,e.jsxs)("p",{children:[s[9].value,(0,e.jsx)("a",{href:"https://web3.ant.design/",children:s[10].value}),s[11].value]}),(0,e.jsxs)("p",{children:[s[12].value,(0,e.jsx)("a",{href:"https://react.dev/",children:s[13].value}),s[14].value,(0,e.jsx)("a",{href:"https://react.dev/learn",children:s[15].value}),s[16].value]})]})]})})}m.default=b},44768:function(E,m,n){n.d(m,{Z:function(){return M}});var f=n(18840),d=n.n(f),h=n(50959),v=n(29466),c=n(70001),t=n(11527),l,a=function(){var r=(0,c.Fg)(),_=(0,c.vJ)(l||(l=d()([`
    ul.anticons-list {
      margin: 10px 0;
      overflow: hidden;
      direction: ltr;
      list-style: none;

      li {
        position: relative;
        float: left;
        width: 16.66%;
        height: 100px;
        margin: 3px 0;
        padding: 10px 0 0;
        overflow: hidden;
        color: #555;
        text-align: center;
        list-style: none;
        background-color: inherit;
        border-radius: 4px;
        cursor: pointer;
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

        .rtl & {
          margin: 3px 0;
          padding: 10px 0 0;
        }

        .anticon {
          margin: 12px 0 8px;
          font-size: 36px;
          transition: transform 0.3s ease-in-out;
          will-change: transform;
        }

        .anticon-class {
          display: block;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
            monospace;
          white-space: nowrap;
          text-align: center;
          transform: scale(0.83);

          .ant-badge {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: color 0.3s ease-in-out;
          }
        }

        &:hover {
          color: #fff;
          background-color: `,`;

          .anticon {
            transform: scale(1.4);
          }

          .ant-badge {
            color: #fff;
          }
        }

        &.CircleFilled .anticon {
          border-radius: 50%;
        }

        &.CircleFilled:hover {
          color: #000;

          .anticon {
            color: #000;
            background-color: #000;
          }
        }

        &.isWhite .anticon {
          background-color: #000;
        }

        &.copied:hover {
          color: rgba(255, 255, 255, 0.2);
        }

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #fff;
          line-height: 110px;
          text-align: center;
          background: #1677ff;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
          content: 'Copied!';
        }

        &.copied::after {
          opacity: 1;
        }
      }
    }

    .copied-code {
      padding: 2px 4px;
      font-size: 12px;
      background: #f5f5f5;
      border-radius: 2px;
    }
  `])),r.colorPrimary);return(0,t.jsx)(_,{})},p=a,x,u,g,e=h.lazy(function(){return Promise.all([n.e(9611),n.e(6057),n.e(5903),n.e(8576),n.e(9579)]).then(n.bind(n,49579))}),b=(0,c.kc)(function(y){var r=y.css;return{searchWrapper:r(x||(x=d()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:r(u||(u=d()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:r(g||(g=d()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),j=function(){var r=b(),_=r.styles;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:_.searchWrapper,children:[(0,t.jsx)(v.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,t.jsx)(v.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,t.jsx)(v.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,t.jsx)("div",{className:_.fallbackWrapper,children:Array(24).fill(1).map(function(o,i){return(0,t.jsx)("div",{className:_.skeletonWrapper,children:(0,t.jsx)(v.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},i)})})]})},s=function(){return(0,t.jsxs)(h.Suspense,{fallback:(0,t.jsx)(j,{}),children:[(0,t.jsx)(p,{}),(0,t.jsx)(e,{})]})},M=s},39517:function(E,m,n){n.d(m,{Z:function(){return y}});var f=n(18840),d=n.n(f),h=n(50959),v=n(85608),c=n(45997),t=n(70001),l=n(31240),a=n(11527),p=function(_){var o=_.className,i=_.style;return(0,a.jsx)("svg",{className:o,style:i,fill:"#E53E3E",focusable:"false",height:"1em",stroke:"#E53E3E",strokeWidth:"0",viewBox:"0 0 16 16",width:"1em",children:(0,a.jsx)("path",{d:"M0 0v16h16v-16h-16zM13 13h-2v-8h-3v8h-5v-10h10v10z"})})},x=p,u=function(_){var o=_.className,i=_.style;return(0,a.jsx)("svg",{className:o,style:i,"aria-hidden":"true",fill:"#F69220",focusable:"false",height:"1em",role:"img",stroke:"#F69220",strokeWidth:"0",viewBox:"0 0 24 24",width:"1em",children:(0,a.jsx)("path",{d:"M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"})})},g=u,e=function(_){var o=_.className,i=_.style;return(0,a.jsx)("svg",{className:o,style:i,"aria-hidden":"true",fill:"#2C8EBB",focusable:"false",height:"1em",stroke:"#2C8EBB",strokeWidth:"0",viewBox:"0 0 496 512",width:"1em",children:(0,a.jsx)("path",{d:"M393.9 345.2c-39 9.3-48.4 32.1-104 47.4 0 0-2.7 4-10.4 5.8-13.4 3.3-63.9 6-68.5 6.1-12.4.1-19.9-3.2-22-8.2-6.4-15.3 9.2-22 9.2-22-8.1-5-9-9.9-9.8-8.1-2.4 5.8-3.6 20.1-10.1 26.5-8.8 8.9-25.5 5.9-35.3.8-10.8-5.7.8-19.2.8-19.2s-5.8 3.4-10.5-3.6c-6-9.3-17.1-37.3 11.5-62-1.3-10.1-4.6-53.7 40.6-85.6 0 0-20.6-22.8-12.9-43.3 5-13.4 7-13.3 8.6-13.9 5.7-2.2 11.3-4.6 15.4-9.1 20.6-22.2 46.8-18 46.8-18s12.4-37.8 23.9-30.4c3.5 2.3 16.3 30.6 16.3 30.6s13.6-7.9 15.1-5c8.2 16 9.2 46.5 5.6 65.1-6.1 30.6-21.4 47.1-27.6 57.5-1.4 2.4 16.5 10 27.8 41.3 10.4 28.6 1.1 52.7 2.8 55.3.8 1.4 13.7.8 36.4-13.2 12.8-7.9 28.1-16.9 45.4-17 16.7-.5 17.6 19.2 4.9 22.2zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-79.3 75.2c-1.7-13.6-13.2-23-28-22.8-22 .3-40.5 11.7-52.8 19.2-4.8 3-8.9 5.2-12.4 6.8 3.1-44.5-22.5-73.1-28.7-79.4 7.8-11.3 18.4-27.8 23.4-53.2 4.3-21.7 3-55.5-6.9-74.5-1.6-3.1-7.4-11.2-21-7.4-9.7-20-13-22.1-15.6-23.8-1.1-.7-23.6-16.4-41.4 28-12.2.9-31.3 5.3-47.5 22.8-2 2.2-5.9 3.8-10.1 5.4h.1c-8.4 3-12.3 9.9-16.9 22.3-6.5 17.4.2 34.6 6.8 45.7-17.8 15.9-37 39.8-35.7 82.5-34 36-11.8 73-5.6 79.6-1.6 11.1 3.7 19.4 12 23.8 12.6 6.7 30.3 9.6 43.9 2.8 4.9 5.2 13.8 10.1 30 10.1 6.8 0 58-2.9 72.6-6.5 6.8-1.6 11.5-4.5 14.6-7.1 9.8-3.1 36.8-12.3 62.2-28.7 18-11.7 24.2-14.2 37.6-17.4 12.9-3.2 21-15.1 19.4-28.2z"})})},b=e,j,s=(0,t.kc)(function(){return{packageManager:(0,t.iv)(j||(j=d()([`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-inline-end: 8px;
    }
  `])))}}),M=function(_){var o=_.npm,i=_.yarn,I=_.pnpm,w=s(),D=w.styles,P=h.useMemo(function(){return[{key:"npm",children:o?(0,a.jsx)(l.Z,{lang:"bash",children:o}):null,label:(0,a.jsxs)("div",{className:D.packageManager,children:[(0,a.jsx)(x,{}),(0,a.jsx)("span",{children:"npm"})]})},{key:"yarn",children:i?(0,a.jsx)(l.Z,{lang:"bash",children:i}):null,label:(0,a.jsxs)("div",{className:D.packageManager,children:[(0,a.jsx)(b,{}),(0,a.jsx)("span",{children:"yarn"})]})},{key:"pnpm",children:I?(0,a.jsx)(l.Z,{lang:"bash",children:I}):null,label:(0,a.jsxs)("div",{className:D.packageManager,children:[(0,a.jsx)(g,{}),(0,a.jsx)("span",{children:"pnpm"})]})}].filter(function(O){return O.children})},[o,i,I]);return(0,a.jsx)(v.ZP,{theme:{components:{Tabs:{horizontalMargin:"0"}}},children:(0,a.jsx)(c.Z,{className:"markdown",size:"small",defaultActiveKey:"npm",items:P})})},y=M},77405:function(E,m,n){var f=n(39517),d=n(11527),h=function(c){var t=c.packageNames,l=c.save,a=!1;(l==="true"||l!=="false")&&(a=!0);var p=a?"".concat(l==="true"?"--save":"--save".concat(l==="dev"?"-dev":"-".concat(l))," "):"",x="npm install ".concat(t," ").concat(p),u="yarn add ".concat(t),g="pnpm add ".concat(t," ").concat(p);return(0,d.jsx)(f.Z,{npm:x,yarn:u,pnpm:g})};m.Z=h}}]);