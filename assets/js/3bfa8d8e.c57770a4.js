"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[7885],{54376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return r},default:function(){return l},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(83117),o=(n(67294),n(3905));n(56022);const i={sidebar_position:2},r="Cache",c={unversionedId:"configuration/cache",id:"version-2.x/configuration/cache",title:"Cache",description:"Nutgram accepts as a cache system any adapter that implements the PSR-16 CacheInterface interface.",source:"@site/versioned_docs/version-2.x/configuration/cache.md",sourceDirName:"configuration",slug:"/configuration/cache",permalink:"/docs/2.x/configuration/cache",draft:!1,editUrl:"https://github.com/nutgram/docs/tree/master/versioned_docs/version-2.x/configuration/cache.md",tags:[],version:"2.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/2.x/configuration/installation"},next:{title:"Laravel Integration",permalink:"/docs/2.x/configuration/laravel"}},s={},u=[{value:"Configuration",id:"configuration",level:2}],p={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cache"},"Cache"),(0,o.kt)("p",null,"Nutgram accepts as a cache system any adapter that implements the PSR-16 ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheInterface")," interface."),(0,o.kt)("p",null,"By default, it uses the internal ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayCache")," class, which is non-persistent, useful only when the bot is running in\npolling mode."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Without configuring a cache adapter accordingly, feature like global or per-user object storage and conversations will not work when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Webhook")," mode.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are using Laravel, you can skip this section, since the service provider automatically inject the Laravel cache repository for you."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/configuration/laravel"},"Check out the Laravel integration page"))),(0,o.kt)("p",null,"To specify a different cache adapter, you need to pass the instance at the bot instantiation. The following example, we\nare using the ",(0,o.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/components/cache.html"},"Symfony Cache"),", since they are providing multiple\nadapters out-of-the-box:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse Symfony\\Component\\Cache\\Adapter\\FilesystemAdapter;\nuse Symfony\\Component\\Cache\\Psr16Cache;\n\n$psr6Cache = new FilesystemAdapter();\n$psr16Cache = new Psr16Cache($psr6Cache);\n\n$bot = new Nutgram('TOKEN', [\n    'cache' => $psr16Cache\n]);\n")))}l.isMDXComponent=!0}}]);