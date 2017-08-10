module.exports = () => {
    bot.dialog("school_intro", [
        (session) => session.send("西安交通大学，你想了解些什么？"),
        (session, results) => session.send("you said: %s", results.response.entity)
    ]);
}