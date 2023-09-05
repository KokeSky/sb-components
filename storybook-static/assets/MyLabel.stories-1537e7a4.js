import{j as W}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const u=({label:c,size:F="normal",color:I,allCaps:T=!1,fontColor:U})=>W.jsx("span",{className:`${F} ${I} label`,style:{color:U},children:T?c.toUpperCase():c});try{u.displayName="MyLabel",u.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},allCaps:{defaultValue:{value:"false"},description:"All Caps",name:"allCaps",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"normal"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},color:{defaultValue:null,description:"What color to use",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"What fontColor to use",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const O={title:"UI/Example/MyLabel",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{allCaps:{control:"boolean"},size:{control:"inline-radio"},color:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic Label"}},a={args:{label:"All Caps Label",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},o={args:{label:"Custom Color Label",color:"text-secondary"}},s={args:{label:"Custom Color Label",fontColor:"blue"}},l={args:{size:"h1",label:"Basic Label"}},t={args:{size:"h2",label:"Basic Label"}},n={args:{size:"h3",label:"Basic Label"}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label'
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,b,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    allCaps: true
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var C,y,L;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'text-secondary'
  }
}`,...(L=(y=r.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var f,h,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    color: 'text-secondary'
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,v,B;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    fontColor: 'blue'
  }
}`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var _,z,M;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'h1',
    label: 'Basic Label'
  }
}`,...(M=(z=l.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var q,A,V;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'h2',
    label: 'Basic Label'
  }
}`,...(V=(A=t.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var j,E,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'h3',
    label: 'Basic Label'
  }
}`,...(N=(E=n.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const R=["Basic","AllCaps","Secondary","CustomColor","CustomFontColor","Large","Medium","Small"];export{a as AllCaps,e as Basic,o as CustomColor,s as CustomFontColor,l as Large,t as Medium,r as Secondary,n as Small,R as __namedExportsOrder,O as default};
//# sourceMappingURL=MyLabel.stories-1537e7a4.js.map
