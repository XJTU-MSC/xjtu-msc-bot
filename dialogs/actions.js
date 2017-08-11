module.exports = () => {
    bot.dialog('help', [
        (session, args, next) => {
            session.endDialog("Hi~我是西安交通大学微软学生俱乐部的导游，我可以帮助你了解Xjtu-MSC。 <br/>请输入以恢复对话O(∩_∩)O");
        }
    ])
    .triggerAction({
        matches: /^帮助$|^救命$|^help$/i,
        onSelectAction: (session, args, next) => {
            session.beginDialog(args.action, args);
        }
    });

    bot.dialog("heckathon", [
        (session, args, next) => {
            let message = new builder.Message(session)
                .addAttachment({
                contentType: "application/vnd.microsoft.card.adaptive",
                content: require("../attachments/hackathon_card.json")});
            session.endDialog(message);
        }
    ])
    .triggerAction({
        matches: /hackathon|黑客松|黑客马拉松/i,
        onSelectAction: (session, args, next) => {
            session.beginDialog(args.action, args);
        }
    });
}