/*
 Using the JavaScript language, have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.
 */

function palindromeTwo(str) {
    var s = str.replace(/[^a-z]/ig, "").toLowerCase();
    var r = s.split('').reverse().join('').toLowerCase();
    return s === r;
}

console.log(palindromeTwo("Noelx - sees Leon"));
console.log(palindromeTwo("A war at Tarawa!"));
console.log(palindromeTwo("Anne, I vote more cars race Rome-to-Vienna"));
