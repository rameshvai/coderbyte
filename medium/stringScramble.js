/*
 Using the JavaScript language, have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters.
 */

function stringScramble(str1, str2) {
    var a1 = str2.toLowerCase().split('');
    var a2 = str1.toLowerCase().split('');
    return a1.reduce(function(pv, cv) {
        var i = a2.indexOf(cv);
        if(pv && i >= 0) {
            a2.splice(i, 1);
            return true;
        }
        return false;
    }, true);
}

console.log(stringScramble("rkqodlw", "world"));
console.log(stringScramble("cdore", "coder"));
console.log(stringScramble("h3llko", "hello"));
