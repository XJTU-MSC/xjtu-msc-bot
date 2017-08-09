module.exports = () => {
    bot.dialog("school_intro", [
        (session) => builder.Prompts.choice(session, "西安交通大学，你想了解些什么？", "部门介绍|如何报名|社团福利|社团活动", builder.ListStyle.button),
        (session, results) => session.send("you said: %s", results.response.entity)
    ]);
}