module.exports = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "body": [
        {
            "type": "Container",
            "items": [
                {
                    "type": "TextBlock",
                    "text": "西安交通大学",
                    "weight": "bolder",
                    "size": "large"
                },
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "size": "auto",
                            "items": [
                                {
                                    "type": "Image",
                                    "url": "http://www.xjtu.edu.cn/__local/E/26/06/414ABA4090B26221D9D69928163_9872DAFE_9521.jpg",
                                    "size": "small"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "size": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "**风云两甲子，弦歌三世纪**",
                                    "wrap": true
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "Container",
            "items": [
                {
                    "type": "TextBlock",
                    "text": "西安交通大学（Xi'an Jiaotong University）简称“西安交大”，位于古都西安，是国家“七五”、“八五”首批重点建设高校，是全国重点综合性研究型大学，是国家“211工程”首批重点建设的七所大学之一，“985工程”首批重点建设的九所高校之一，被国家确定为以建设世界知名高水平大学为目标的教育部直属全国重点大学。是中国九校联盟（C9）、中国大学校长联谊会、“111计划”成员，“珠峰计划”首批11所名校之一，教育部首批“卓越工程师教育培养计划”高校，国家2011计划“高端制造装备协同创新中心”牵头高校，“中俄交通大学联盟”成员高校。",
                    "wrap": true
                },
                {
                    "type": "FactSet",
                    "facts": [
                        {
                            "title": "地址:",
                            "value": "西安市碑林区咸宁西路28号"
                        },
                        {
                            "title": "邮编:",
                            "value": "710049"
                        }
                    ]
                }
            ]
        }
    ],
    "actions": [
        {
            "type": "Action.OpenUrl",
            "title": "学校官网",
            "url": "http://www.xjtu.edu.cn/index.htm"
        },
        {
            "type": "Action.OpenUrl",
            "title": "微博",
            "url": "https://weibo.com/xjtuofficial?is_hot=1"
        }
        // {
        //     "type": "Action.ShowCard",
        //     "title": "Comment",
        //     "card": {
        //         "type": "AdaptiveCard",
        //         "body": [
        //             {
        //                 "type": "Input.Text",
        //                 "id": "comment",
        //                 "isMultiline": true,
        //                 "placeholder": "Enter your comment"
        //             }
        //         ],
        //         "actions": [
        //             {
        //                 "type": "Action.Http",
        //                 "method": "POST",
        //                 "title": "OK",
        //                 "url": "http://xyz.com",
        //                 "headers": {
        //                     "content-type": "application/json"
        //                 },
        //                 "body": "{ 'comment' : '{{comment.value}}' }"
        //             }
        //         ]
        //     }
        // }
    ]
}