/*
 Using the JavaScript language, have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.
 */

function letterCount(str) {
    var arr = str.split(/[^a-z]+/i);
    var count = 0;
    var word = "";
    var l = 0;
    for(var i = 0; i < arr.length; i++) {
        l = 0;
        arr[i].replace(/([a-z])(?=.*\1)/ig, function(m, m1) {
            l++;
            if(l > count) {
                count = l;
                word = arr[i];
            }
        });
    }
    return count ? word : -1;
}

console.log(letterCount("Today, is the greatest day ever!"));
console.log(letterCount("Hello apple pie"));
console.log(letterCount("No words"));
