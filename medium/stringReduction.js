/*
 Using the JavaScript language, have the function StringReduction(str) take the str parameter being passed and return the smallest number you can get through the following reduction method. The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third. For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputted. For example: if str is "cab", "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1.
 */

function stringReduction(str) {
    do {
        str = reduceString(str);
    } while(!str.match(/^(.)\1*$/));

    return str.length;
}

function reduceString(str) {
    var maps = {"ab": "c", "ac": "b", "ba": "c", "bc": "a", "ca": "b", "cb": "a"};
    return str.replace(/ab|ac|ba|bc|ca|cb/g, function(m) {
        return maps[m];
    });
}

console.log(stringReduction("ac"));
console.log(stringReduction("cab"));
console.log(stringReduction("bcab"));
console.log(stringReduction("abcabc"));
console.log(stringReduction("cccc"));
