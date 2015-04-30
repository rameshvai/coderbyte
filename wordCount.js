/*
 Using the JavaScript language, have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces.
 */

function wordCount(str) {
    if(!str) return 0;
    var w = str.split(/\s+/);
    return w.length;
}

function wordCountN(str) {
    return str.split(/\s+/).length;
}

console.log(wordCount("sdfsd sdfsd sdfsd#342 sfs"));
console.log(wordCount(""));
console.log("====");
console.log(wordCountN("sdfsd sdfsd sdfsd#342 sfs"));
console.log(wordCountN(""));


