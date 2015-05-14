/*
 Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.
 */

function meanMode(arr) {
    var mn = {};
    var total = arr.reduce(function(pv, cv) {
        var eS = cv.toString();
        var i = mn[eS] || 0;
        mn[eS] = ++i;
        return pv + cv;
    }, 0);
    var x = 0;
    var y = "";
    for(var k in mn) {
        if(mn[k] > x) {
            x = mn[k];
            y = k;
        }
    }
    return Number(total / arr.length === parseInt(y, 10))
}


console.log(meanMode([5, 3, 3, 3, 1]));
console.log(meanMode([1, 2, 3]));
console.log(meanMode([4, 4, 4, 6, 2]));
