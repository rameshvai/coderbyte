/*
 Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.
 */

function palindrome(str) {
    var o = str.replace(/ +/g, "");
    var s = o.split("").reverse().join("");
    return o === s;
}

console.log(palindrome("never odd or even"));
