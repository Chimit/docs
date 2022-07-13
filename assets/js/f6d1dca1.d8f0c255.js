(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[2763],{89713:function(e,n,t){"use strict";t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),s=t(93456),l=["components"],i={sidebar_position:4},d="Middleware",u={unversionedId:"usage/middleware",id:"version-2.x/usage/middleware",title:"Middleware",description:"In the framework context, any handler is like a link of chain, so you can easily link together multiple handlers (",source:"@site/versioned_docs/version-2.x/usage/middleware.md",sourceDirName:"usage",slug:"/usage/middleware",permalink:"/docs/2.x/usage/middleware",editUrl:"https://github.com/nutgram/docs/tree/master/versioned_docs/version-2.x/usage/middleware.md",tags:[],version:"2.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Handlers",permalink:"/docs/2.x/usage/handlers"},next:{title:"Conversations",permalink:"/docs/2.x/usage/conversations"}},m={},c=[{value:"Passing data",id:"passing-data",level:2},{value:"Before &amp; After",id:"before--after",level:2},{value:"OOP",id:"oop",level:2},{value:"Flow",id:"flow",level:2}],p={toc:c};function g(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"middleware"},"Middleware"),(0,o.kt)("p",null,"In the framework context, any handler is like a ",(0,o.kt)("strong",{parentName:"p"},"link of chain"),", so you can easily link together multiple handlers (\nmiddlewares). It applies the same concept that frameworks like Laravel have, allowing you to leverage them to separate\nrepeated logic, or perform checks before executing a message handler."),(0,o.kt)("p",null,"The best explanation comes from the Laravel documentation:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'It\'s best to envision middleware as a series of "layers" HTTP requests must pass through before they hit your application. Each layer can examine the request and even reject it entirely.')),(0,o.kt)("p",null,"Where you can replace the HTTP requests with an incoming update from Telegram."),(0,o.kt)("p",null,"Let's see an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// global middleware\n$bot->middleware(function (Nutgram $bot, $next) {\n    $bot->sendMessage('I\\'m the global middleware!!');\n    $next($bot);\n});\n\n$bot->onMessage(function (Nutgram $bot) {\n    $bot->sendMessage('I\\'m the message handler!!');\n})->middleware(function (Nutgram $bot, $next) {\n\n    $bot->sendMessage('I\\'m the specific middleware!!');\n    $next($bot);\n});\n\n$bot->run();\n")),(0,o.kt)("p",null,"In the example above, the sequence of the calls is"),(0,o.kt)(s.Mermaid,{chart:"graph LR\n    global_middleware--\x3especific_middleware\n    specific_middleware--\x3emessage_handler",mdxType:"Mermaid"}),(0,o.kt)("p",null,"As the name says, the ",(0,o.kt)("inlineCode",{parentName:"p"},"global middleware")," will be called before ",(0,o.kt)("em",{parentName:"p"},"every")," message middleware of every handler (or before\nevery handler if no middleware specified). The ",(0,o.kt)("inlineCode",{parentName:"p"},"specific middleware")," will be called only before the ",(0,o.kt)("inlineCode",{parentName:"p"},"message handler"),"."),(0,o.kt)("p",null,"The call to ",(0,o.kt)("inlineCode",{parentName:"p"},"$next($bot)")," is needed to proceed through the chain, where ",(0,o.kt)("inlineCode",{parentName:"p"},"$next")," is the next callable, passing the\ncurrent instance of the bot. It is possible at any point to stop the execution of the chain, returning from the\nfunction, or not calling the method ",(0,o.kt)("inlineCode",{parentName:"p"},"$next($bot)"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onMessage(function (Nutgram $bot) {\n    $bot->sendMessage('I will be never called :(');\n})->middleware(function (Nutgram $bot, $next) {\n\n    $bot->sendMessage('Stop!');\n    //$next($bot);\n});\n\n$bot->run();\n")),(0,o.kt)("h2",{id:"passing-data"},"Passing data"),(0,o.kt)("p",null,"It's possible to pass data between middlewares, using the method ",(0,o.kt)("inlineCode",{parentName:"p"},"setData")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getData")," on the bot instance, for\nexample, to automatically retrieve data from a database, perform checks, and so on:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// retrieve the user\n$bot->middleware(function (Nutgram $bot, $next) {\n    $user = get_current_user_from_db($bot->userId());\n    $bot->setData('user', $user);\n    $next($bot);\n});\n\n\n$bot->onCommand('admin', function (Nutgram $bot) {\n\n    $user = $bot->getData('user');\n    $bot->sendMessage(\"Hi admin $user->name!\");\n    \n})->middleware(function (Nutgram $bot, $next) {\n\n    $user = $bot->getData('user'); // retrieve the user we have set in the global middleware\n    if ($user->isAdmin) { // if the user is an admin, continue the chain\n        $next($bot);\n    }\n    $bot->sendMessage('You are not an admin >:(');\n});\n\n$bot->onCommand('user', function (Nutgram $bot) {\n    $user = $bot->getData('user');\n    $bot->sendMessage(\"Hi user $user->name!\");\n});\n\n$bot->run();\n")),(0,o.kt)("h2",{id:"before--after"},"Before & After"),(0,o.kt)("p",null,"The model allow you to perform actions before and after the chain executed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// global middleware\n$bot->middleware(function (Nutgram $bot, $next) {\n\n    // do something before the handlers\n    \n    $next($bot); // sends \"Hi!\"\n    \n    // do something\n});\n\n$bot->onMessage(function (Nutgram $bot) {\n    $bot->sendMessage('Hi!');\n});\n\n$bot->run();\n\n")),(0,o.kt)("h2",{id:"oop"},"OOP"),(0,o.kt)("p",null,"Also in this case, all the ",(0,o.kt)("inlineCode",{parentName:"p"},"$callable")," can be also defined as class-method or invokable class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\nclass MyMiddleware {\n\n    public function __invoke(Nutgram $bot, $next) \n    {\n      //do stuff\n      $next($bot);\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\nclass MyCommand {\n\n    public function __invoke(Nutgram $bot, $param) \n    {\n      //do stuff\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start {param}', MyCommand::class)\n    ->middleware(MyMiddleware::class);\n\n$bot->run();\n")),(0,o.kt)("h2",{id:"flow"},"Flow"),(0,o.kt)("p",null,"The global middlewares are executed in descending order.\nThe handlers middlewares are executed in ",(0,o.kt)("strong",{parentName:"p"},"ascending")," order. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// global middlewares\n$bot->middleware(MiddlewareA::class);           // 1\xb0\n$bot->middleware(MiddlewareB::class);           // 2\xb0\n\n// handlers\n$bot->onCommand('start', StartCommand::class)   // 5\xb0\n    ->middleware(MiddlewareC::class)            // 4\xb0\n    ->middleware(MiddlewareD::class);           // 3\xb0\n\n$bot->run();\n")),(0,o.kt)("p",null,"In the example above, the sequence of the calls is"),(0,o.kt)(s.Mermaid,{chart:"graph LR\n    MiddlewareA--\x3eMiddlewareB\n    MiddlewareB--\x3eMiddlewareD\n    MiddlewareD--\x3eMiddlewareC\n    MiddlewareC--\x3eStartCommand",mdxType:"Mermaid"}))}g.isMDXComponent=!0},11748:function(e,n,t){var a={"./locale":89234,"./locale.js":89234};function r(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=11748}}]);