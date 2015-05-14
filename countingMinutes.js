/*
 Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.
 */

function countingMinutes(str) {
    var m = str.match(/(\d+):(\d+)([ap]m)-(\d+):(\d+)([ap]m)/);
    var t1h, t1m, t2h, t2m;
    t1h = parseInt(m[1], 10);
    t1m = parseInt(m[2], 10);
    t1h = m[3] === "am" ? (t1h === 12 ? t1h - 12 : t1h) : (t1h === 12 ? t1h : t1h + 12);
    t2h = parseInt(m[4], 10);
    t2m = parseInt(m[5], 10);
    t2h = m[6] === "am" ? (t2h === 12 ? t2h - 12 : t2h) : (t2h === 12 ? t2h : t2h + 12);

    var mins= 24 * 60;
    var tm = 0;

    var m1 = t1h * 60 + t1m;
    var m2 = t2h * 60 + t2m;

    if(m1 < m2) {
        tm = m2 - m1;
    }
    else if(m1 >= m2) {
        tm = mins - m1 + m2;
    }
    return tm;
}

console.log(countingMinutes("12:30pm-12:00am"));
console.log(countingMinutes("1:23am-1:08am"));
console.log(countingMinutes("9:00am-10:00am"));
console.log(countingMinutes("12:00am-12:00am"));