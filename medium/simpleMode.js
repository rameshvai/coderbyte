/*
 Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty.
 */

function simpleMode(arr) {
    var c = 0, n;
    var l = 0;
    arr.reduce(function(pv, cv){
        var x = pv.indexOf(cv);
        while(x > -1) {
            pv.splice(x, 1);
            var x = pv.indexOf(cv);
            l++;
        }
        if(l > 1 && l > c) {
            c = l;
            n = cv;
        }
        console.log(pv, l, c);
        l = 0;
        return pv;
    }, arr.slice(0));
    return c ? n : -1;
}

console.log(simpleMode([10, 4, 5, 2, 4]));
console.log(simpleMode([5, 10, 10, 6, 5]));
console.log(simpleMode([5, 5, 2, 2, 1]));
console.log(simpleMode([3, 4, 1, 6, 10]));
