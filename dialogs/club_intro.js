module.exports = () => {

    bot.dialog("club_intro", [
        (session, args, next) => {
            if (!session.conversationData.lastMsg) {
                builder.Prompts.choice(session, "微软俱乐部是由微软亚洲研究院(MSR)与全国名校合作创办的学生社团。西安交通大学微软俱乐部（XJTUMSC）是全国首批成立的九个微软俱乐部之一，成立于2000年11月23日，也是西北地区第一所微软俱乐部。微软学生俱乐部是科技类社团，成立十多年来，在“企业化经营，人性化管理，家庭式氛围，精英化导向”的运营模式下，通过不断的学习和交流，了解最前沿的技术产品，体验先进的管理模式，创造自由平等的团队文化氛围，服务于学校的广大同学。近年来，俱乐部成员参加“编程之美”、编程一小时、Hackathon、微软学生夏令营和实习生项目等活动取得优秀成绩，并举办了如AI大讲堂等多场讲座。今天的微软俱乐部除了获得这些耀眼的奖杯以外，更值得骄傲的是在不断的发展中形成的一整套颇具特色的社团文化和管理理念。以人为本，在平等尊重的氛围中，充分发挥主动性和创造力，工作中激情与冷静结合，开放式交流和沟通。过俱乐部的自我们管理、自我们学习、自我们发展来更好的服务全校同学。同时提高会员的成就感和对俱乐部的认同感、归属感，使成为微软俱乐部的成员是每一位会员的骄傲。", "部门介绍|如何报名|社团福利|社团活动", builder.ListStyle.button);
            } else {
                builder.Prompts.choice(session, "你已经了解了" + session.conversationData.lastMsg + "，还想了解什么呢？或者我们换个话题？（对我说“取消”）", "部门介绍|如何报名|社团福利|社团活动", builder.ListStyle.button)
            }
        },
        (session, results) => {
            session.conversationData.lastMsg = results.response.entity
            switch (results.response.index) {
                case 0:
                    session.beginDialog("department_intro");
                    break;
                case 1:
                    session.beginDialog("apply_issue");
                    break;
                case 2:
                    session.beginDialog("welfare");
                    break;
                case 3:
                    session.beginDialog("activity");
                    break;
                default:
                    session.send("小奈并没有听懂你说了什么");
                    session.reset("club_intro");
                    break;
            }
        },
        (session, results) => session.replaceDialog("club_intro")])
        .cancelAction('cancelAction', '好，让我们回到上一个话题', {
            matches: /^取消|^算了$|^cancel/i
        });

    // I think I've had enough these hard core programming to embed data into code!
    bot.dialog("department_intro", [
        (session) => {
            let departments = ['技术部', '活动部', '宣传部', '人力资源部', '财务部'];
            builder.Prompts.choice(session, "西安交通大学微软学生俱乐部下设五个部门，你想了解哪个？", departments, builder.ListStyle.button)
        },
        (session, results) => {
            switch (results.response.index) {
                case 0:
                    session.send("技术部是微软学生俱乐部的核心力量，他们学习时下热门技术，并为微软学生俱乐部提供技术支持。微软举办的每一个活动，我们都鼓励技术部成员能够积极参与，提升自身水平。加入技术部的成员们都可以选择一个自己感兴趣的技术小组，加入小组并参与学习与制作！目前技术部的小组主要有bot小组，unity小组以及其他一些基于某个编程语言的程序开发小组。");
                    break;
                case 1:
                    session.send("活动部是各个部门中最活跃的部门了，他们要负责构思并策划俱乐部活动，与其他俱乐部进行沟以及通俱乐部日常活动的安排及场地联系。他们是俱乐部的中坚力量，活动部的热情使得俱乐部所有活动都令人称心如意。");
                    break;
                case 2:
                    session.send("宣传部是一个既搞技术又搞艺术的部门。宣传部的娃娃人人都是“干惊天动地的事，做隐姓埋名的人”（这是他们自己评价的）。或书生意气，挥斥方遒，写几篇动辄千人转发的微信推送，或闲看庭前花开花落，小酌几杯，便P了几张图，做了张海报。在宣传部中，你不仅可以学习到强悍的PS技术，更能让你的灵魂得到艺术上的升华。");
                    break;
                case 3:
                    session.send("人力资源部是一个神秘的部门，他们好像并不想让别人知道自己都干什么。");
                    break;
                case 4:
                    session.send("财务部是一个神秘的部门，他们好像并不想让别人知道自己都干什么。");
                    break;
                default:
                    session.send("小奈并没有听懂你说了什么");
                    session.reset("department_intro");
                    break;
            }
            session.send("你已经了解了" + results.response.entity + "，还想了解什么呢？或者我们换个话题？（对我说“取消”）");
            session.replaceDialog("department_intro");
        }])
        .cancelAction('cancelAction', '好，让我们回到上一个话题', {
            matches: /^取消|^算了$|^cancel/i
        });

    bot.dialog("apply_issue", [
        (session, args) => {
            session.send("报名请加群:")
            session.endDialog("661556408");
        }
    ]);

    bot.dialog("welfare", [
        (session) => session.endDialog("俱乐部成员有机会参加每年夏季MSRA在北京举行的微软学生夏令营，与来自全国包括港台各大高校微软俱乐部的朋友们进行学习和交流，近距离学习微软，研究微软；参加每年MSRA举办的微软精英大挑战大赛，获奖者将获得前往微软亚洲研究院总部参观学习的机会；与其他学校的兄弟微软俱乐部交流学习；免费借阅由MSRA提供的各种正版资料；参加俱乐部组织的面向内部及面向全校的各类讲座；微软亚洲研究院实习生招募绿色通道；更早进入学校实验室、研究所，进行合作科研项目开发。")
    ]);

    bot.dialog("activity", [
        (session) => session.endDialog("俱乐部每年会周期性地举行\"hackathon\"以及\"编程之美\"大赛这样的技术活动，除此之外，我们还是一个温暖的大家庭，在社团内部会有诸如俱乐部周年庆、访问兄弟学校俱乐部的活动。<br/>(你可以随时问我什么是hackathon以及什么是编程之美)")
    ]);
}