/*
 Using the JavaScript language, have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements.
 */

function consecutive(arr) {
    var a = arr.sort(function(a, b) { return a - b;});
    for(var i = a[0], j = 0; i < a[a.length - 1]; i++) {
        if(!~a.indexOf(i)) j++;
    }
    return j;
}

console.log(consecutive([4, 8, 6]));
console.log(consecutive([5,10,15]));
console.log(consecutive([-2,10,4]));
