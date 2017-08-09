module.exports = () => {
    bot.dialog("club_intro", [
        (session) => builder.Prompts.choice(session, "有关西安交通大学MSC，你想了解些什么？", "部门介绍|如何报名|社团福利|社团活动", builder.ListStyle.button),
        (session, results) => {
            switch (results.response.index) {
                case 0:
                    session.replaceDialog("department_intro");
                    break;
                case 1:
                    session.replaceDialog("apply_issue");
                    break;
                case 2:
                    session.replaceDialog("welfare");
                    break;
                case 3:
                    session.replaceDialog("activity");
                    break;
                default:
                    session.reset("club_intro");
                    break;
            }
            session.send("you said: %s", results.response.entity)
        }
    ]);

    bot.dialog("department_intro", [
        (session) => {
            // let departments = ['']
            // session.Prompts.choice(session, "西安交通大学微软学生俱乐部下设")
            session.endDialog("很好，我这还没写完");
        }
    ]);
}