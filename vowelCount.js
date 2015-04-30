/*
 Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge.
 */

function vowelCount(str) {
    var c = 0;
    str.replace(/[aeiou]/ig, function(m) {
        c += 1;
        return m;
    });
    return c;
}

function vowelCountN(str) {
    var m = str.match(/[aeiou]/ig);
    return m ? m.length : 0;
}

console.log(vowelCountN("xxx"));
