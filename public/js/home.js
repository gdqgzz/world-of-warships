var homes=[
    "长官,GDQ向你报道",
    "[天猫]告别”不合身“属于我们自己的...",
    "红色军魂节系列活动激情来袭",
    "为海军庆生 423海军节特别节目即将推出",
    "从头“炸”到尾《红海行动》联合出击",
    "战舰赢家今晚开答 百万现金等你瓜分",
    "《战舰世界》携手NVIDIA燃起海战全新...",
    "玩《战舰世界》来中华网领取冰雪嘉年华...",
    "《战舰世界》玩家触媒习惯有奖调查问卷",
    "我是最靓的仔----GDQ"
];
var newArr = homes.map(
    function(elem){
        return `<li><b id="zx1">[新闻]</b><a href=""><span id="zx2">${elem}</span></a><b id="zx4">08-17</b></li>`
    }
)
console.log(newArr);
var html=newArr.join("");
home.innerHTML=html;