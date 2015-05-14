/*
 Using the JavaScript language, have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters.
 */


function thirdGreatest(arr) {
    var newArr = arr.reduce(function(pv, cv) {
        var inserted = 0;
        for(var i = 0; i < pv.length; i++) {
            if(pv[i].length < cv.length) {
                pv.splice(i, 0, cv);
                inserted = 1;
                break;
            }
        }
        if(!inserted) {
            pv.push(cv);
        }
        return pv;
    }, []);
    return newArr[2];
}

console.log(thirdGreatest(["hello", "world", "before", "all"]));
console.log(thirdGreatest(["hello", "world", "after", "all"]));
console.log(thirdGreatest(["coder","byte","code"]));
console.log(thirdGreatest(["one","two","three"]));
console.log(thirdGreatest(["abc","defg","z","hijk"]));
console.log(thirdGreatest(["aaaa","bbbbbb","cc"]));
