"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[1778],{60096:function(t,e,l){l.r(e),l.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return i}});var n=l(83117),a=(l(67294),l(3905));l(56022);const r={sidebar_position:2},o="Sending Requests",s={unversionedId:"usage/sending_requests",id:"usage/sending_requests",title:"Sending Requests",description:"The framework creates a 1:1 mapping of the methods Telegram provides that are directly accessible from the main",source:"@site/docs/usage/sending_requests.md",sourceDirName:"usage",slug:"/usage/sending_requests",permalink:"/docs/usage/sending_requests",draft:!1,editUrl:"https://github.com/nutgram/docs/tree/master/docs/usage/sending_requests.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Getting Updates",permalink:"/docs/usage/getting_updates"},next:{title:"Handlers",permalink:"/docs/usage/handlers"}},d={},i=[{value:"Uploading media",id:"uploading-media",level:2},{value:"Downloading media",id:"downloading-media",level:2},{value:"Formatting options",id:"formatting-options",level:2},{value:"Available methods",id:"available-methods",level:2}],u={toc:i};function k(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sending-requests"},"Sending Requests"),(0,a.kt)("p",null,"The framework creates a 1:1 mapping of the methods Telegram provides that are directly accessible from the main\ninstance. The only difference is in the parameters that telegram marks as ",(0,a.kt)("em",{parentName:"p"},"Optional"),": these are specifiable via the last\nparameter (present in almost all methods) as an associative array."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"\nuse SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Types\\Message\\Message;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// Send a message to a specific user\n/** @var Message $message */\n$message = $bot->sendMessage('Hi!', ['chat_id' => 111222333]);\n\n// Send a message to a channel\n/** @var Message $message */\n$message = $bot->sendMessage('Hi channel!', ['chat_id' => '@mychannel']);\n")),(0,a.kt)("h2",{id:"uploading-media"},"Uploading media"),(0,a.kt)("p",null,"For any method that require an ",(0,a.kt)("a",{parentName:"p",href:"https://core.telegram.org/bots/api#inputfile"},(0,a.kt)("inlineCode",{parentName:"a"},"InputFile")),", you can pass a resource file\ndescriptor to the right method, and the framework will take care of how uploading it, like in the following example."),(0,a.kt)("p",null,"If you already have the Telegram ",(0,a.kt)("inlineCode",{parentName:"p"},"file_id"),", you can simply specify it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"\nuse SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Types\\Message\\Message;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// Send a photo to a specific user ***********************************************\n$photo = fopen('image.png', 'r+'); // open the file\n\n/** @var Message $message */\n$message = $bot->sendPhoto($photo, ['chat_id' => 111222333]); // pass the resource\n\nfclose($photo); // close the file\n\n\n// Send a video to a specific user ***********************************************\n$video = fopen('funnyvideo.mp4', 'r+'); // open the file\n\n/** @var Message $message */\n$message = $bot->sendPhoto($video, ['chat_id' => 111222333]);\n\nfclose($video); // close the file\n\n\n// send a sticker via file_id ****************************************************\n$fileId = $bot->message()->sticker->file_id;\n\n/** @var Message $message */\n$message = $bot->sendSticker($fileId, ['chat_id' => 111222333]);\n")),(0,a.kt)("h2",{id:"downloading-media"},"Downloading media"),(0,a.kt)("p",null,"As opposed to uploading, there are some additional methods available that allow you to download files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Types\\Media\\File;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$fileId = $bot->message()->sticker->file_id;\n\n// get the File object\n/** @var File $message */\n$file = $bot->getFile($fileId);\n\n$bot->downloadFile($file, 'path/to/file');\n\n// OR, via helper method\n\n$bot->getFile($fileId)->save('file/or/directory');\n\n")),(0,a.kt)("h2",{id:"formatting-options"},"Formatting options"),(0,a.kt)("p",null,"The framework give you some helper constants to format your text messages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Attributes\\ParseMode;\nuse SergiX44\\Nutgram\\Telegram\\Types\\Message\\Message;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// Send a message formatting in markdown\n/** @var Message $message */\n$message = $bot->sendMessage('*Hi!*', [\n    'chat_id' => 111222333,\n    'parse_mode' => ParseMode::MARKDOWN,\n]);\n\n// Send a message formatting in html\n/** @var Message $message */\n$message = $bot->sendMessage('<i>Hi!</i>', [\n    'chat_id' => 111222333,\n    'parse_mode' => ParseMode::HTML,\n]);\n\n")),(0,a.kt)("h2",{id:"available-methods"},"Available methods"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Method"),(0,a.kt)("th",null,"Return Type"),(0,a.kt)("th",null,"Telegram Docs"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"getMe()")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?User")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#getme"},"#getme"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"logOut()")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#logout"},"#logout"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"close()")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#close"},"#close"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendMessage(string $text, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendmessage"},"#sendmessage"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"forwardMessage(string|int $chat_id, string|int $from_chat_id, int $message_id, array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#forwardmessage"},"#forwardmessage"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"copyMessage(string|int $chat_id, string|int $from_chat_id, int $message_id, array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?MessageId")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#copymessage"},"#copymessage"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendPhoto($photo, array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendphoto"},"#sendphoto"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendAudio($audio, array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendaudio"},"#sendaudio"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendDocument($document, array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#senddocument"},"#senddocument"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendVideo($video, array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendvideo"},"#sendvideo"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendAnimation($video, array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendanimation"},"#sendanimation"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendVoice($voice, array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendvoice"},"#sendvoice"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendVideoNote($video_note, array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendvideonote"},"#sendvideonote"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendMediaGroup(array $media, array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?array")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendmediagroup"},"#sendmediagroup"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendLocation(float $latitude, float $longitude, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendlocation"},"#sendlocation"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"editMessageLiveLocation(float $latitude, float $longitude, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"Message|bool|null")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#editmessagelivelocation"},"#editmessagelivelocation"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"stopMessageLiveLocation(?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"Message|bool|null")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#stopmessagelivelocation"},"#stopmessagelivelocation"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendVenue(float $latitude, float $longitude, string $title, string $address, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendvenue"},"#sendvenue"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendContact(string $first_name, string $phone_number, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendcontact"},"#sendcontact"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendPoll(string $question, array $options, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendpoll"},"#sendpoll"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendDice(?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#senddice"},"#senddice"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendChatAction(string $action, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendchataction"},"#sendchataction"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"getFile(string $file_id)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?File")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#getfile"},"#getfile"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"kickChatMember(string|int $chat_id, int $user_id, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#kickchatmember"},"#kickchatmember"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"unbanChatMember(string|int $chat_id, int $user_id, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#unbanchatmember"},"#unbanchatmember"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"restrictChatMember(string|int $chat_id, int $user_id, ChatPermissions $permissions, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#restrictchatmember"},"#restrictchatmember"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"promoteChatMember(string|int $chat_id, int $user_id, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#promotechatmember"},"#promotechatmember"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"setChatAdministratorCustomTitle(string|int $chat_id, int $user_id, string $custom_title, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#setchatadministratorcustomtitle"},"#setchatadministratorcustomtitle"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"setChatPermissions(string|int $chat_id, ChatPermissions $permissions, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#setchatpermissions"},"#setchatpermissions"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"exportChatInviteLink(string|int $chat_id)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?string")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#exportchatinvitelink"},"#exportchatinvitelink"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"createChatInviteLink(string|int $chat_id, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?ChatInviteLink")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#createchatinvitelink"},"#createchatinvitelink"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"editChatInviteLink(string|int $chat_id, string $invite_link, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?ChatInviteLink")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#editchatinvitelink"},"#editchatinvitelink"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"revokeChatInviteLink(string|int $chat_id, string $invite_link)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?ChatInviteLink")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#revokechatinvitelink"},"#revokechatinvitelink"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"setChatPhoto(string|int $chat_id, $photo)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#setchatphoto"},"#setchatphoto"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"deleteChatPhoto(string|int $chat_id)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#deletechatphoto"},"#deletechatphoto"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"setChatTitle(string|int $chat_id, string $title)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#setchattitle"},"#setchattitle"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"setChatDescription(string|int $chat_id, ?string $description = null)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#setchatdescription"},"#setchatdescription"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"pinChatMessage(string|int $chat_id, int $message_id, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#pinchatmessage"},"#pinchatmessage"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"unpinChatMessage(string|int $chat_id, int $message_id)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#unpinchatmessage"},"#unpinchatmessage"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"unpinAllChatMessages(string|int $chat_id)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#unpinallchatmessages"},"#unpinallchatmessages"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"leaveChat(string|int $chat_id)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#leavechat"},"#leavechat"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"getChat(string|int $chat_id)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Chat")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#getchat"},"#getchat"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"getChatAdministrators(string|int $chat_id)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?array")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#getchatadministrators"},"#getchatadministrators"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"getChatMembersCount(string|int $chat_id)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?int")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#getchatmemberscount"},"#getchatmemberscount"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"getChatMember(string|int $chat_id, int $user_id)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?ChatMember")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#getchatmember"},"#getchatmember"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"setChatStickerSet(string|int $chat_id, string $sticker_set_name)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#setchatstickerset"},"#setchatstickerset"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"deleteChatStickerSet(string|int $chat_id)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#deletechatstickerset"},"#deletechatstickerset"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"answerCallbackQuery(?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#answercallbackquery"},"#answercallbackquery"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"setMyCommands(array $commands = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#setmycommands"},"#setmycommands"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"getMyCommands()")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?array")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#getmycommands"},"#getmycommands"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"editMessageText(string $text, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"Message|bool|null")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#editmessagetext"},"#editmessagetext"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"editMessageCaption(?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"Message|bool|null")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#editmessagecaption"},"#editmessagecaption"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"editMessageMedia(array $media, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"Message|bool|null")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#editmessagemedia"},"#editmessagemedia"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"editMessageReplyMarkup(?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"Message|bool|null")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#editmessagereplymarkup"},"#editmessagereplymarkup"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"stopPoll(string|int $chat_id, int $message_id, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Poll")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#stoppoll"},"#stoppoll"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"deleteMessage(string|int $chat_id, int $message_id)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#deletemessage"},"#deletemessage"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendSticker($sticker, array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendsticker"},"#sendsticker"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"getStickerSet(string $name)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?StickerSet")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#getstickerset"},"#getstickerset"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"createNewStickerSet(string $name, string $title, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#createnewstickerset"},"#createnewstickerset"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"setStickerPositionInSet(string $sticker, int $position)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#setstickerpositioninset"},"#setstickerpositioninset"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"deleteStickerFromSet(string $sticker)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#deletestickerfromset"},"#deletestickerfromset"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"setStickerSetThumb(string $name, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#setstickersetthumb"},"#setstickersetthumb"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"answerInlineQuery(array $results, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#answerinlinequery"},"#answerinlinequery"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendInvoice(string $title, string $description, string $payload, string $provider_token, string $start_parameter, string $currency, array $prices, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendinvoice"},"#sendinvoice"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"answerShippingQuery(bool $ok, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#answershippingquery"},"#answershippingquery"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"answerPreCheckoutQuery(bool $ok, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#answerprecheckoutquery"},"#answerprecheckoutquery"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"setPassportDataErrors(int $user_id, array $errors)")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#setpassportdataerrors"},"#setpassportdataerrors"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sendGame(string $game_short_name, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?Message")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#sendgame"},"#sendgame"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"setGameScore(int $score, ?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?bool")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#setgamescore"},"#setgamescore"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"getGameHighScores(?array $opt = [])")),(0,a.kt)("td",null,(0,a.kt)("code",null,"?array")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://core.telegram.org/bots/api#getgamehighscores"},"#getgamehighscores"))))))}k.isMDXComponent=!0}}]);