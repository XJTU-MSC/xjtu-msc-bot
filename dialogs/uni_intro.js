module.exports = () => {
    bot.dialog("school_intro", [
        (session) => {
            let message = new builder.Message(session)
                .addAttachment({
                    contentType: "application/vnd.microsoft.card.adaptive",
                    content: require("../attachments/uni_intro_card.json")});
            session.endDialog(message);
        }
    ]);
}