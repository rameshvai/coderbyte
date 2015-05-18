/*
 Using the JavaScript language, have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".
 */


function caesarCipher(str, num) {
    var a = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return str.replace(/[a-z]/ig, function(m) {
        return a.substr(a.indexOf(m) + num, 1);
    });
}

console.log(caesarCipher("Caesar Cipher", 2));
console.log(caesarCipher("Hello", 4));
console.log(caesarCipher("abc", 0));
