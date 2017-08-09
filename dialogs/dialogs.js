module.exports = () => {
    require('./club_intro.js')();
    require("./uni_intro.js")();

    //root dialog
    bot.dialog("/", [
        (session) => {
            let savedAddress = session.message.address;
            session.beginDialog('greetings');
        },
        (session, results) => session.endDialog('你说 %s', results.response.entity)
    ]);

    bot.dialog('greetings', [
        (session) => {
            builder.Prompts.choice(session, "你好！我是来自西安交通大学微软学生俱乐部的Nightingale，你可以叫我小奈。 <br/>很高兴认识你，请问有什么我可以帮到你的吗？", "MSC社团|了解XJTU", builder.ListStyle.button);
        },
        (session, results) => {
            console.log(results.response.index);
            if (results.response.index == 0) {
                session.replaceDialog("club_intro");
            } else if (results.response.index == 1) {
                session.replaceDialog("school_intro");
            } else {
                session.send("你说啥？");
                session.reset("greetings");
            }
        },
    ]);

    bot.dialog('help', function (session, args, next) {
        session.endDialog("Hi~我是西安交通大学微软学生俱乐部的导游，我可以帮助你了解Xjtu-MSC。 <br/>请输入以恢复对话O(∩_∩)O");
    })
    .triggerAction({
        matches: [/^帮助$/i, /^救命$/i, /^help$/i],
        onSelectAction: (session, args, next) => {
            session.beginDialog(args.action, args);
        }
    });
}