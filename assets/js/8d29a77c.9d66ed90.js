"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[6964],{85162:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(67294),l=t(86010),r="tabItem_Ymn6";function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:t},a)}},65488:function(e,a,t){t.d(a,{Z:function(){return h}});var n=t(83117),l=t(67294),r=t(86010),o=t(72389),i=t(67392),s=t(7094),u=t(12466),d="tabList__CuJ",p="tabItem_LNqP";function c(e){var a;const{lazy:t,block:o,defaultValue:c,values:h,groupId:m,className:k}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=h??v.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),b=(0,i.l)(g,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??v[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[T,x]=(0,l.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=m){const e=y[m];null!=e&&e!==T&&g.some((a=>a.value===e))&&x(e)}const E=e=>{const a=e.currentTarget,t=C.indexOf(a),n=g[t].value;n!==T&&(w(a),x(n),null!=m&&N(m,String(n)))},U=e=>{var a;let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},g.map((e=>{let{value:a,label:t,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>C.push(e),onKeyDown:U,onClick:E},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===a})}),t??a)}))),t?(0,l.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function h(e){const a=(0,o.Z)();return l.createElement(c,(0,n.Z)({key:String(a)},e))}},22169:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=t(83117),l=(t(67294),t(3905)),r=(t(56022),t(65488)),o=t(85162);const i={},s="Hearing updates",u={unversionedId:"testing/hearing",id:"testing/hearing",title:"Hearing updates",description:"Overview",source:"@site/docs/testing/hearing.mdx",sourceDirName:"testing",slug:"/testing/hearing",permalink:"/docs/testing/hearing",draft:!1,editUrl:"https://github.com/nutgram/docs/tree/master/docs/testing/hearing.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/testing/introduction"},next:{title:"Mock incoming responses",permalink:"/docs/testing/mocking"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Example",id:"example",level:3},{value:"Available Methods",id:"available-methods",level:2},{value:"hearUpdate",id:"hearupdate",level:3},{value:"hearUpdateType",id:"hearupdatetype",level:3},{value:"hearMessage",id:"hearmessage",level:3},{value:"hearText",id:"heartext",level:3},{value:"hearCallbackQueryData",id:"hearcallbackquerydata",level:3}],c={toc:p};function h(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hearing-updates"},"Hearing updates"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"After you have configured your first testcase, to test your handlers you have to define which update it will process.\nTo do that, the framework gives you some methods to automatically generate incoming updates."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"We assume that the ",(0,l.kt)("inlineCode",{parentName:"p"},"$this->bot")," is loaded as mentioned on the ",(0,l.kt)("a",{parentName:"p",href:"/docs/introduction"},"Introduction")," page."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"test",label:"Test",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$this\n    ->bot\n    ->hearText('/foo')\n    ->reply();\n"))),(0,l.kt)(o.Z,{value:"handler",label:"Triggered Handler",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$bot->onCommand('foo', function (Nutgram $bot) {\n    // this handler will be called\n});\n")))),(0,l.kt)("h2",{id:"available-methods"},"Available Methods"),(0,l.kt)("div",{class:"container"},(0,l.kt)("div",{class:"row"},(0,l.kt)("div",{class:"col col--6"},(0,l.kt)("div",null,(0,l.kt)("code",null,(0,l.kt)("a",{href:"#hearupdate"},"hearUpdate()"))),(0,l.kt)("div",null,(0,l.kt)("code",null,(0,l.kt)("a",{href:"#hearupdatetype"},"hearUpdateType()"))),(0,l.kt)("div",null,(0,l.kt)("code",null,(0,l.kt)("a",{href:"#hearmessage"},"hearMessage()")))),(0,l.kt)("div",{class:"col col--6"},(0,l.kt)("div",null,(0,l.kt)("code",null,(0,l.kt)("a",{href:"#heartext"},"hearText()"))),(0,l.kt)("div",null,(0,l.kt)("code",null,(0,l.kt)("a",{href:"#hearcallbackquerydata"},"hearCallbackQueryData()")))))),(0,l.kt)("h3",{id:"hearupdate"},"hearUpdate"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"hearUpdate")," hears an outcoming ",(0,l.kt)("inlineCode",{parentName:"p"},"Update")," object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"->hearUpdate(new Update());\n")),(0,l.kt)("h3",{id:"hearupdatetype"},"hearUpdateType"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"hearUpdateType")," hears an outcoming ",(0,l.kt)("inlineCode",{parentName:"p"},"Update")," subtype array.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"partialAttributes")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"fillNullableFields")," parameters are optionals."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"->hearUpdateType(UpdateTypes::MESSAGE, partialAttributes: ['text' => '/foo'], fillNullableFields: false);\n")),(0,l.kt)("h3",{id:"hearmessage"},"hearMessage"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"hearMessage")," hears an outcoming ",(0,l.kt)("inlineCode",{parentName:"p"},"Message")," array."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"->hearMessage(['text' => 'foo']);\n")),(0,l.kt)("h3",{id:"heartext"},"hearText"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"hearText")," hears an outcoming ",(0,l.kt)("inlineCode",{parentName:"p"},"Message")," text."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"->hearText('foo');\n")),(0,l.kt)("h3",{id:"hearcallbackquerydata"},"hearCallbackQueryData"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"hearCallbackQueryData")," hears an outcoming ",(0,l.kt)("inlineCode",{parentName:"p"},"CallbackQuery")," data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"->hearCallbackQueryData('baz');\n")))}h.isMDXComponent=!0}}]);