// 日期格式转换成时间戳
function timestampToTime(d){
      var date = new Date(d);
      var time = date.getTime();
      return time;     

}

// 将时间戳转换成日期格式
function timeToTimestamp(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y + M + D + h + m + s;
}

module.exports = {
  timestampToTime:timestampToTime,
  timeToTimestamp: timeToTimestamp
}