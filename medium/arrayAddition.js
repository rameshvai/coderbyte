/*
 Using the JavaScript language, have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
 */

function arrayAddition(arr) {
    var a = arr.sort(function(a, b) {return a - b});
    var s = a.pop();
    return combination(a, s);
}

function combination(arr, goal) {
    var r = false;
    for(var i = 1; !r && i <= arr.length; i++) {
        r = permutation(arr, i);
    }

    return r;

    function permutation(input, size) {
        var result = false,
            output = [],
            used = [],
            l = input.length;

        function doPermute(level) {
            if(result) return;
            if(size === level) {
                result = arraySum(output) === goal;
                console.log(output, arraySum(output));
                return;
            }
            level ++;
            for(var i = 0; i < l; i++) {
                if(output.length && output[output.length - 1] > input[i]) continue;
                if(used[i]) continue;
                used[i] = true;
                output.push(input[i]);
                doPermute(level);
                used[i] = false;
                output.pop();
            }
        }
        doPermute(0);
        return result;
    }
}

function arraySum(arr) {
    return arr.reduce(function(pv, cv) {
        return pv + cv;
    }, 0);
}


//console.log(arrayAddition([5, 6, 16, 1, 2, 4]));
//console.log(arrayAddition([3, 5, -1, 8, 12]));
//console.log(arrayAddition([4, 6, 23, 10, 1, 3]));
//console.log(arrayAddition([10, 20, 30, 40, 100]));
console.log(arrayAddition([31, 2, 90, 50, 7]));
