/*
 Using the JavaScript language, have the function MostFreeTime(strArr) read the strArr parameter being passed which will represent a full day and will be filled with events that span from time X to time Y in the day. The format of each event will be hh:mmAM/PM-hh:mmAM/PM. For example, strArr may be ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. Your program will have to output the longest amount of free time available between the start of your first event and the end of your last event in the format: hh:mm. The start event should be the earliest event in the day and the latest event should be the latest event in the day. The output for the previous input would therefore be 01:30 (with the earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM). The input will contain at least 3 events and the events may be out of order.
 */

function mostFreeTime(arr) {
    var tArray = arr.map(function(item) {
        return convertString2Time(item);
    });
    tArray = tArray.sort(function(a, b) {
        return a.start - b.start;
    });
    var d = 0;
    tArray.reduce(function(pv, cv) {
        if(pv) {
            var x =  cv.start - pv.end;
            if(x > d) {
                d = x;
            }
        }
        return cv;
    });
    var h = Math.floor(d / 60),
        m = d % 60,
        pad = "00",
        hs = h ? pad.slice(h.toString().length) + h : pad,
        ms = m ? pad.slice(m.toString().length) + m : pad;

    return (hs + ":" + ms);
}

function convertString2Time(str) {
    var m = str.match(/([0-9]+):([0-9]+)(am|pm)-([0-9]+):([0-9]+)(am|pm)/i);
    var h1, m1, h2, m2;
    if(m) {
        h1 = parseInt(m[1], 10);
        m1 = parseInt(m[2], 10);
        h2 = parseInt(m[4], 10);
        m2 = parseInt(m[5], 10);
        h1 = (h1 === 12 && m[3] === "AM") ? 0 : (h1 < 12 && m[3] === "PM") ? h1 + 12 : h1;
        h2 = (h2 === 12 && m[6] === "AM") ? 0 : (h2 < 12 && m[6] === "PM") ? h2 + 12 : h2;
        return {"start" : h1 * 60 + m1, "end": h2 * 60 + m2};
    }
}

console.log(mostFreeTime(["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]));
console.log(mostFreeTime(["12:15PM-02:00PM","09:00AM-10:00AM","10:30AM-12:00PM"]));
console.log(mostFreeTime(["12:15PM-02:00PM","09:00AM-12:11PM","02:02PM-04:00PM"]));
