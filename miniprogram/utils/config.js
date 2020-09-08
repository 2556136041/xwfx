

// var appid = 57274;
var appid = 77047;
var secret = "255495d4d2cb433e9edf7966eb34021c";
var param = "?showapi_appid=" + appid + "&showapi_sign=" + secret;

var types = "https://route.showapi.com/907-1"+param;
// var search = "https://route.showapi.com/907-2"+param;
var search = "https://route.showapi.com/1615-1" + param;
var today = "https://route.showapi.com/907-4"+param;

module.exports = {
  types: types,
  search: search,
  today: today
}
