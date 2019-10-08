var notices = [
    "《战舰世界》军团系统维护公告",
    "《战舰世界》”聊天系统“升级公告",
    "《战舰世界》9月11日临时维护公告",
    "昵称变更非法昵称公告",
    "战舰微信最强福利来袭",
    "2月26日官方论坛升级维护公告",
    "九月日常参赛(四)狂揽双倍福利",
    "金秋九月充值送西姆斯,欧根亲王",
    "【天猫】金秋赢豪礼 海天然豪情",
    "我是最靓的仔----GDQ"
];
var newArr = notices.map(
    function (elem) {
        return `<li><b id="zx1">[公告]</b><a href=""><span id="zx2">${elem}</span></a><b id="zx4">08-17</b></li>`
    }
)
console.log(newArr);
var html = newArr.join("");
notice.innerHTML = html;