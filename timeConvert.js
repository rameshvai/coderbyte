function timeConvert(num) {
    var h = Math.floor(num / 60);
    var m = num % 60;
    return h + ":" + m;
}

console.log(timeConvert(127));

