/*
 Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
 Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
 */

var letters = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA";
var vowels = "aAaeEeiIioOouUu";

function transVowels(e) {
    var i = vowels.indexOf(e);
    return (~i ? vowels.charAt(i + 1) : e);
}

function letterChanges(str) {
    var newArr = str.split('').map(function(e) {
        var i = letters.indexOf(e);
        return (~i ? transVowels(letters.charAt(i + 1)) : e);
    });
    return newArr.join('');
}

//letterChanges("fun times!");

//Below code is fastest
function letterChangesN(str) {
    var l = str.length;
    var n = [];
    for(; l >= 0; l--) {
        var i = str.charCodeAt(l);
        if(i >= 97 && i <= 122) {
            if(i === 122) i = 96;
            i += 1;
            if(i === 97 || i === 101 || i === 105 || i === 111 || i === 117) {
                i -= 32;
            }
        } else if(i >= 65 && i <= 90) {
            if(i === 90) i = 64;
            i += 1;
            if(i === 65 || i === 69 || i === 73 || i === 79 || i === 85) {
                i += 32;
            }
        }
        n.unshift(String.fromCharCode(i));
    }
    //console.log(n);
    return n.join('');
}

console.log(letterChangesN("fun times!"));

//From a different user
function LetterChanges(str) {
    return str.replace(/[a-z]/ig,function(c){
        var next = String.fromCharCode(c.charCodeAt() + 1);
        if(/[aeiou]/g.test(next)){
            next = next.toUpperCase();
        }
        return c == 'z' ? 'A' : c == 'Z' ? 'A' : next;
    });
}
