/*
 Using the JavaScript language, have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
 */

function runLength(str) {
    return str.replace(/(.)\1*/g, function(m, m1) {
        return m.length + m1;
    });
}

console.log(runLength("wwwggopp"));
console.log(runLength("aabbcde"));
console.log(runLength("wwwbbbw"));
