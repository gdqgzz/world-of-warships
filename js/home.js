var homes=[
    "长官,GDQ向你报道",
    "[天猫]告别”不合身“属于我们自己的...",
    "红色军魂节系列活动激情来袭",
    "昵称变更非法昵称公告",
    "战舰微信最强福利来袭",
    "2月26日官方论坛升级维护公告",
    "九月日常参赛(四)狂揽双倍福利",
    "金秋九月充值送西姆斯,欧根亲王",
    "【天猫】金秋赢豪礼 海天然豪情",
    "我是最靓的仔----GDQ"
];
var newArr = homes.map(
    function(elem){
        return `<li><b id="zx1">[置顶]</b><a href=""><span id="zx2">${elem}</span></a><b id="zx4">08-17</b></li>`
    }
)
console.log(newArr);
var html=newArr.join("");
home.innerHTML=html;