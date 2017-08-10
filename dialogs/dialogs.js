module.exports = () => {
    require('./club_intro.js')();
    require("./uni_intro.js")();

    //root dialog
    bot.dialog("/", [
        (session) => session.beginDialog('greetings'),
        (session, results) => session.endDialog("哇喔")
    ])
    .reloadAction("reinstate", "正在删除记忆……", {
        matches: /^重来|^时光倒流&|^删除记忆$|^洗脑$/i
    });

    bot.dialog('greetings', [
        (session) => {
            builder.Prompts.choice(session, "你好！我是来自西安交通大学微软学生俱乐部的Nightingale，你可以叫我小奈。 <br/>很高兴认识你，请问有什么我可以帮到你的吗？", "MSC社团|了解XJTU", builder.ListStyle.button);
        },
        (session, results) => {
            if (results.response.index == 0) {
                session.replaceDialog("club_intro");
            } else if (results.response.index == 1) {
                session.replaceDialog("school_intro");
            } else {
                session.send("不好意思，我没听懂能否再重复一遍？");
                session.reset("greetings");
            }
        },
    ]);
}