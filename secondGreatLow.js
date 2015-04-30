/*
 Using the JavaScript language, have the function SecondGreatLow(arr)
 take the array of numbers stored in arr and return the second lowest and second greatest numbers,
 respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98.
 The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!
 */

function secondGreatLow(arr) {
    var a = arr.sort(function(a, b) {
        return a - b;
    });
    if(a.length > 2) a = a.uniq();
    return a.slice(1, 2) + " " + a.slice(-2, -1)
}

Array.prototype.uniq = function() {
    return this.reduce(function(pv, cv) {
        if(!pv.some(function(e) {
                return e === cv;
            })) {
            pv.push(cv);
        }
        return pv;
    }, []);
};

console.log(secondGreatLow([7, 7, 12, 98, 106]));
console.log(secondGreatLow([1, 42, 42, 80]));
console.log(secondGreatLow([4, 90]));
console.log(secondGreatLow([2,2,2,5,5,5,6]));
console.log(secondGreatLow([7, 7, 90, 1000003]));
console.log(secondGreatLow([80, 80]));
