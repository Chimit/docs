"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[4505],{42565:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l}});var o=n(83117),a=(n(67294),n(3905));n(56022);const s={sidebar_position:1},r="Getting Updates",i={unversionedId:"usage/getting_updates",id:"version-1.x/usage/getting_updates",title:"Getting Updates",description:"Currently, the framework mainly supports two different methods to process updates: Polling and Webhook mode.",source:"@site/versioned_docs/version-1.x/usage/getting_updates.md",sourceDirName:"usage",slug:"/usage/getting_updates",permalink:"/docs/1.x/usage/getting_updates",draft:!1,editUrl:"https://github.com/nutgram/docs/tree/master/versioned_docs/version-1.x/usage/getting_updates.md",tags:[],version:"1.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Usage",permalink:"/docs/1.x/category/usage"},next:{title:"Sending Requests",permalink:"/docs/1.x/usage/sending_requests"}},u={},l=[{value:"Polling",id:"polling",level:2},{value:"Webhook",id:"webhook",level:2},{value:"Customization",id:"customization",level:2},{value:"Retrieving updates manually",id:"retrieving-updates-manually",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-updates"},"Getting Updates"),(0,a.kt)("p",null,"Currently, the framework mainly supports two different methods to process updates: ",(0,a.kt)("inlineCode",{parentName:"p"},"Polling")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Webhook")," mode."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Polling"),": mainly useful for small bots or with not much traffic, but especially for development mode, since it\nallows you to start developing a bot in a short time!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Webhook"),": Strongly recommended for bots with high traffic and more generally for production mode.")),(0,a.kt)("p",null,"To begin to process incoming updates, you must call the ",(0,a.kt)("inlineCode",{parentName:"p"},"->run()")," method, at the end:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']); // new instance\n\n// register callbacks\n// middlewares\n// do your stuff\n\n$bot->run(); // finally, begin to process incoming updates\n")),(0,a.kt)("h2",{id:"polling"},"Polling"),(0,a.kt)("p",null,"This is the ",(0,a.kt)("strong",{parentName:"p"},"default")," running mode, when the ",(0,a.kt)("inlineCode",{parentName:"p"},"->run()")," method is called, will block the script execution aand starts\nthe update loop. This is meant to be used on a CLI or in a service unit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\RunningMode\\Polling;\n\n$bot = new Nutgram($_ENV['TOKEN']); // new instance\n$bot->setRunningMode(Polling::class);\n\n// ...\n\n$bot->run(); // start to listen to updates, until stopped\n")),(0,a.kt)("h2",{id:"webhook"},"Webhook"),(0,a.kt)("p",null,"This update mode is recommended for deploy your bot to production, but can be also used with ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com"},"ngrok")," or ",(0,a.kt)("a",{parentName:"p",href:"https://beyondco.de/docs/expose/introduction"},"expose")," for\ndevelopment, the only difference is that it requires the webhook set manually."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\RunningMode\\Webhook;\n\n$bot = new Nutgram($_ENV['TOKEN']); // new instance\n$bot->setRunningMode(Webhook::class);\n\n// ...\n\n$bot->run(); // after this, the script continues execution\n")),(0,a.kt)("p",null,"After processing the current update, the script continues execution, ",(0,a.kt)("strong",{parentName:"p"},"BUT")," you shouldn't put long operations after the\nmethod anyway, as Telegram expects a response quickly."),(0,a.kt)("h2",{id:"customization"},"Customization"),(0,a.kt)("p",null,"You can create your own running mode, if these do not satisfy you, in fact, you will just create a class that extends\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nutgram/nutgram/blob/master/src/RunningMode/RunningMode.php"},(0,a.kt)("inlineCode",{parentName:"a"},"RunningMode"))," interface."),(0,a.kt)("h2",{id:"retrieving-updates-manually"},"Retrieving updates manually"),(0,a.kt)("p",null,"You can also use the low level telegram methods, and take over the whole update management, like in the example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Types\\Common\\Update;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// Retrieve te list of pending updates...\n$updates = $bot->getUpdates();\n\n/** @var Update $update */\nforeach ($updates as $update) {\n    // do stuff with your updates\n}\n")))}d.isMDXComponent=!0}}]);