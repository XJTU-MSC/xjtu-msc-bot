var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());


var bot = new builder.UniversalBot(connector, [
    (session) => {
        let savedAddress = session.message.address;
        session.beginDialog('greetings');
    },
    (session, results) => session.endDialog('你说 %s', results.response.entity)
]);

bot.dialog('greetings', [
    (session) => {
        session.send("你好！我是来自西安交通大学微软学生俱乐部的Nightingale，你可以叫我小奈。");
        builder.Prompts.choice(session, "很高兴认识你，请问有什么我可以帮到你的吗？", "MSC社团|了解XJTU", "button");
    },
    (session, results) => session.endDialogWithResult(results)
]);

bot.dialog('help', function (session, args, next) {
    session.endDialog("Hi~我是西安交通大学微软学生俱乐部的导游，我可以帮助你了解Xjtu-MSC。 <br/>请输入 '继续' 以恢复对话O(∩_∩)O");
})
.triggerAction({
    matches: /^帮助$/i,
    onSelectAction: (session, args, next) => {
        session.beginDialog(args.action, args);
    }
});

bot.endConversationAction('goodbyeAction', "Ok... See you later.", { matches: 'Goodbye' });

// when bot was added, auto trigger the root dialog.
bot.on('conversationUpdate', function (message) {
    if (message.membersAdded) {
        message.membersAdded.forEach(function (identity) {
            if (identity.id === message.address.bot.id) {
                bot.beginDialog(message.address, '/');
            }
        });
    }
});