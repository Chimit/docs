"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[1453],{30908:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return p}});var a=t(83117),s=(t(67294),t(3905)),o=t(56022);const r={sidebar_position:5},i="Conversations",u={unversionedId:"usage/conversations",id:"version-2.x/usage/conversations",title:"Conversations",description:"If you are using the Webhook update mode, you need a persistent cache adapter to use this feature!",source:"@site/versioned_docs/version-2.x/usage/conversations.md",sourceDirName:"usage",slug:"/usage/conversations",permalink:"/docs/2.x/usage/conversations",draft:!1,editUrl:"https://github.com/nutgram/docs/tree/master/versioned_docs/version-2.x/usage/conversations.md",tags:[],version:"2.x",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Middleware",permalink:"/docs/2.x/usage/middleware"},next:{title:"Inline Menu",permalink:"/docs/2.x/usage/inline_menu"}},l={},p=[{value:"Concept",id:"concept",level:2},{value:"Creating Conversations",id:"creating-conversations",level:2},{value:"Begin a Conversation",id:"begin-a-conversation",level:2},{value:"Funnel Escaping",id:"funnel-escaping",level:2},{value:"Middleware",id:"middleware",level:2},{value:"Ending a conversation",id:"ending-a-conversation",level:2},{value:"Procedural Usage",id:"procedural-usage",level:2},{value:"Inline Usage",id:"inline-usage",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"conversations"},"Conversations"),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"If you are using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Webhook")," update mode, you need a persistent cache adapter to use this feature!")),(0,s.kt)("h2",{id:"concept"},"Concept"),(0,s.kt)("p",null,"Often, compared to a simple question and answer, you have to make the user perform a series of steps in a certain\nsequence: the framework implements a ",(0,s.kt)("strong",{parentName:"p"},"conversations system"),", that allows you to create funnels with which you can make\nyour users perform a series of steps."),(0,s.kt)(o.G,{chart:"sequenceDiagram\n    User--\x3e>Bot: Send a message\n    Note over Bot: run the first step, and serializes the conversation\n    Bot--\x3e>User: Reply with the first step\n    User--\x3e>Bot: Send reply to the first step\n    Note over Bot: deserializes the conversation, run the second step and the conversation ends\n    Bot--\x3e>User: Reply with the second step",mdxType:"Mermaid"}),(0,s.kt)("h2",{id:"creating-conversations"},"Creating Conversations"),(0,s.kt)("p",null,"To create a conversation, you must define a class that extends the framework ",(0,s.kt)("inlineCode",{parentName:"p"},"Conversation")," class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\nclass MyConversation extends Conversation {\n\n    public function start(Nutgram $bot)\n    {\n        $bot->sendMessage('This is the first step!');\n        $this->next('secondStep');\n    }\n\n    public function secondStep(Nutgram $bot)\n    {\n        $bot->sendMessage('Bye!');\n        $this->end();\n    }\n}\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', MyConversation::class);\n\n$bot->run();\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Wait wait, whats going on here?"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"When the user type ",(0,s.kt)("em",{parentName:"li"},'"/start"')," for the first time, the first step of conversation is invoked, by default is\nthe ",(0,s.kt)("inlineCode",{parentName:"li"},"start")," method."),(0,s.kt)("li",{parentName:"ul"},"At the end of the first step, we define the next step of the conversation, setting the name of the next function,\nthat will be ",(0,s.kt)("strong",{parentName:"li"},"serialized to cache"),"."),(0,s.kt)("li",{parentName:"ul"},"In the second step, we are ending the conversation.")))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If a conversation is not explicitly terminated with the ",(0,s.kt)("inlineCode",{parentName:"p"},"end()"),", at the user next message will repeat the lastest saved step!")),(0,s.kt)("p",null,"If you want to customize the name of the first step, you just need to override the ",(0,s.kt)("inlineCode",{parentName:"p"},"$step")," property from conversation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversations\\Conversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\nclass MyConversation extends Conversation {\n\n    protected ?string $step = 'myStart';\n\n    public function myStart(Nutgram $bot)\n    {\n        $bot->sendMessage('This is the first step!');\n    }\n\n    // ...\n")),(0,s.kt)("p",null,"A more complete example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversation;\nuse SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Types\\Keyboard\\InlineKeyboardButton;\nuse SergiX44\\Nutgram\\Telegram\\Types\\Keyboard\\InlineKeyboardMarkup;\n\nclass AskIceCreamConversation extends Conversation {\n\n    protected ?string $step = 'askCupSize';\n\n    public $cupSize;\n\n    public function askCupSize(Nutgram $bot)\n    {\n        $bot->sendMessage('How big should be you ice cream cup?', [\n            'reply_markup' => InlineKeyboardMarkup::make()\n                ->addRow(InlineKeyboardButton::make('Small', callback_data: 'S'), InlineKeyboardButton::make('Medium', callback_data: 'M'))\n                ->addRow(InlineKeyboardButton::make('Big', callback_data: 'L'), InlineKeyboardButton::make('Super Big', callback_data: 'XL')),\n        ]);\n        $this->next('askFlavors');\n    }\n\n    public function askFlavors(Nutgram $bot)\n    {\n        // if is not a callback query, ask again!\n        if (!$bot->isCallbackQuery()) {\n            $this->askCupSize($bot);\n            return;\n        }\n\n        $this->cupSize = $bot->callbackQuery()->data;\n\n        $bot->sendMessage('What flavors do you like?');\n        $this->next('recap');\n    }\n\n    public function recap(Nutgram $bot)\n    {\n        $flavors = $bot->message()->text;\n        $bot->sendMessage(\"You want an $this->cupSize cup with this flavors: $flavors\");\n        $this->end();\n    }\n}\n")),(0,s.kt)("h2",{id:"begin-a-conversation"},"Begin a Conversation"),(0,s.kt)("p",null,"As you have already seen in the previous examples, conversation can be used in replacement for handlers:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\StartConversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', StartConversation::class);\n\n$bot->run();\n")),(0,s.kt)("p",null,"But, you can also start a conversation at any time from another handlers, with the ",(0,s.kt)("inlineCode",{parentName:"p"},"begin")," method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\StartConversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', function (Nutgram $bot) {\n    // do stuff\n    StartConversation::begin($bot); // the first step will be automatically fired\n});\n\n$bot->run();\n")),(0,s.kt)("h2",{id:"funnel-escaping"},"Funnel Escaping"),(0,s.kt)("p",null,"By default, sends a message that match with a typed ",(0,s.kt)("strong",{parentName:"p"},"specific")," handler, the current conversation will be discarded, in\nany case, it may be necessary to force the user inside a funnel (for example in a settings modification flow):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\nclass MyConversation extends Conversation {\n\n    // ..\n\n    public function step(Nutgram $bot)\n    {\n        $bot->sendMessage('This is the first step!');\n        $this->setSkipHandlers(true)\n            ->next('secondStep');\n    }\n\n    // ..\n}\n")),(0,s.kt)("p",null,"In this way, your will force the next step execution."),(0,s.kt)("h2",{id:"middleware"},"Middleware"),(0,s.kt)("p",null,"By default, global middlewares are also applied before the conversation step, there may be situations, however, where\nyou want to be avoided (e.g. in a registration flow):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\nclass MyConversation extends Conversation {\n\n    // ..\n\n    public function step(Nutgram $bot)\n    {\n        $bot->sendMessage('This is the first step!');\n        $this->setSkipMiddlewares(true)\n            ->next('secondStep');\n    }\n\n    // ..\n}\n")),(0,s.kt)("p",null,"In this way, your next step will be executed without any middleware before."),(0,s.kt)("p",null,"The two options before are also stackable:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\nclass MyConversation extends Conversation {\n\n    // ..\n\n    public function step(Nutgram $bot)\n    {\n        $bot->sendMessage('This is the first step!');\n        $this->setSkipHandlers(true)\n            ->setSkipMiddlewares(true)\n            ->next('secondStep');\n    }\n\n    // ..\n}\n")),(0,s.kt)("h2",{id:"ending-a-conversation"},"Ending a conversation"),(0,s.kt)("p",null,"You can define a method that will be called once the current conversation is terminated:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\nclass MyConversation extends Conversation {\n\n    public function step(Nutgram $bot)\n    {\n        $bot->sendMessage('Time to say goodbye!');\n        $this->end();\n    }\n    /**\n    * This method will be called!\n    */\n    public function closing(Nutgram $bot)\n    {\n        $bot->sendMessage('Bye!');\n    }\n}\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"closing")," method will be called every time a conversation is terminated, due to explicit call to ",(0,s.kt)("inlineCode",{parentName:"p"},"end"),", or because\n",(0,s.kt)("a",{parentName:"p",href:"/docs/2.x/usage/conversations#funnel-escaping"},"funnel escaping"),"."),(0,s.kt)("p",null,"This is useful for shutting stuff down, saving to a database or simply let the user know that the conversation is\nterminated."),(0,s.kt)("h2",{id:"procedural-usage"},"Procedural Usage"),(0,s.kt)("p",null,"It's possible to start a conversation also without a OOP approach, in this way:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', 'firstStep');\n\n\nfunction firstStep(Nutgram $bot)\n{\n    // do stuff\n    $bot->stepConversation('secondStep');\n}\n\nfunction secondStep(Nutgram $bot)\n{\n    // do stuff\n    $bot->endConversation();\n}\n\n$bot->run();\n")),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Using conversations in this way, you will not be able to skip middlewares or skip handlers!"),(0,s.kt)("p",{parentName:"admonition"},"By default, it will always allow funnel escaping and will always apply global middlewares.")),(0,s.kt)("h2",{id:"inline-usage"},"Inline Usage"),(0,s.kt)("p",null,"For very short conversations, you can also define the next step as a closure, with the same limitations of the\nprocedural usage:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', function (Nutgram $bot) {\n    // step one\n    $bot->stepConversation(function (Nutgram $bot){\n        // step two\n        $bot->endConversation();\n    });\n});\n\n$bot->run();\n")))}c.isMDXComponent=!0}}]);