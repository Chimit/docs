"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[8410],{2642:function(t,a,e){e.r(a),e.d(a,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var n=e(83117),r=(e(67294),e(3905));e(56022);const o={title:"",sidebar_position:1},s=void 0,i={unversionedId:"introduction",id:"version-1.x/introduction",title:"",description:"Latest Version on Packagist",source:"@site/versioned_docs/version-1.x/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/1.x/introduction",draft:!1,editUrl:"https://github.com/nutgram/docs/tree/master/versioned_docs/version-1.x/introduction.md",tags:[],version:"1.x",sidebarPosition:1,frontMatter:{title:"",sidebar_position:1},sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/1.x/category/getting-started"}},m={},p=[],g={toc:p};function u(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},g,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"https://i.imgur.com/0KjYtTJ.png",width:"400px"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://packagist.org/packages/nutgram/nutgram"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/packagist/v/nutgram/nutgram.svg?style=flat-square",alt:"Latest Version on Packagist"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nutgram/nutgram/actions/workflows/php.yml"},(0,r.kt)("img",{parentName:"a",src:"https://github.com/nutgram/nutgram/actions/workflows/php.yml/badge.svg",alt:"Test Suite"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://codeclimate.com/github/nutgram/nutgram/maintainability"},(0,r.kt)("img",{parentName:"a",src:"https://api.codeclimate.com/v1/badges/86c4ca3dae8f64db80f7/maintainability",alt:"Maintainability"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://packagist.org/packages/nutgram/nutgram"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/packagist/dt/nutgram/nutgram.svg?style=flat-square",alt:"Total Downloads"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://core.telegram.org/bots/api"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Telegram%20Bot%20API-5.7%09--%20January%2031,%202022-blue.svg",alt:"API"})),"\n",(0,r.kt)("a",{parentName:"p",href:"//packagist.org/packages/nutgram/nutgram"},(0,r.kt)("img",{parentName:"a",src:"https://poser.pugx.org/nutgram/nutgram/license",alt:"License"})))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Telegram bot library that doesn't drive you nuts")),(0,r.kt)("p",null,"Taking advantage of the ",(0,r.kt)("strong",{parentName:"p"},"PHP8")," features, thi framework and tries to make the ",(0,r.kt)("strong",{parentName:"p"},"speed"),", ",(0,r.kt)("strong",{parentName:"p"},"scalability")," and ",(0,r.kt)("strong",{parentName:"p"},"flexibility")," of use its strength, allowing to quickly make simple bots, but at the same time, it provides\nmore ",(0,r.kt)("strong",{parentName:"p"},"advanced features")," to handle even the most complicated flows. Some architectural concepts on which\nNutgram is based are heavily influenced by other open source projects such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/botman/botman"},"Botman"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/badfarm/zanzara"},"Zanzara"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', fn(Nutgram $bot) => $bot->sendMessage('Ciao!'));\n\n$bot->onText('My name is {name}', fn(Nutgram $bot, $name) => $bot->sendMessage(\"Hi {$name}\"));\n\n$bot->run();\n\n")))}u.isMDXComponent=!0}}]);