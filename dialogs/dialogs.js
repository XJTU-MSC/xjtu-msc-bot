module.exports = () => {
    require("./actions.js")()
    require("./club_intro.js")();
    require("./uni_intro.js")();

    //root dialog
    bot.dialog("/", [
        (session) => session.beginDialog('greetings'),
        (session, results) => session.endConversation("哇喔")
    ])
        .reloadAction("reinstate", "正在删除记忆……", {
            matches: /^重来|^时光倒流&|^删除记忆$|^洗脑$/i
        });

    bot.dialog('greetings', [
        (session, args, next) => {
            if (!session.conversationData.haveGreetinged) {
                session.send("你好！我是来自西安交通大学微软学生俱乐部的Nightingale，你可以叫我小奈,很高兴认识你!");
                session.conversationData.haveGreetinged = true;
            }
            builder.Prompts.choice(session, "请问有什么我可以帮到你的吗？ <br/> 同时，你也可以在任何时候发送“帮助”，查看更多", "MSC社团|了解XJTU", builder.ListStyle.button);
        },
        (session, results) => {
            if (results.response.index == 0) {
                session.beginDialog("club_intro");
            } else if (results.response.index == 1) {
                session.beginDialog("school_intro");
            } else {
                session.send("那么...");
                session.reset("greetings");
            }
        },
        (session, results) => session.replaceDialog("greetings")
    ])
        .cancelAction('cancelAction', '好，让我们回到上一个话题', {
            matches: /^取消|^算了$|^cancel/i
        });
}