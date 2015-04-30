/*
 Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed
 and return the first word with the greatest number of repeated letters.
 For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's)
 and it comes before ever which also has 2 e's.
 If there are no words with repeating letters return -1. Words will be separated by spaces.
 */

function letterCount(str) {
    var lw = -1;
    str.split(/ +/).reduce(function(pv, cv) {
        var w = 0;
        cv.replace(/[a-z]/ig, function(m) {
            var re = new RegExp(m, "ig");
            if(cv.match(re).length >= 2)
                w ++;
            return m;
        });
        if(w > pv) {
            lw = cv;
            return w;
        }
        return pv;
    }, 0);
    return lw;
}

console.log(letterCount("Argument goes here"));
console.log(letterCount("Today, is the greatest day ever!"));
console.log(letterCount("Hello apple pie"));
console.log(letterCount("No words"));
