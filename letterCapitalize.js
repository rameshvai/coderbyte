/*
 Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
 */

function letterCapitalize(str) {
    var retStr = str.replace(/(^|[^a-z])[a-z]/g, function(m) {
        return m.toUpperCase();
    });
    return retStr;
}

console.log(letterCapitalize("test3435 string 3423423test string3242342"));
