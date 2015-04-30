/*
 Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
 */


function arrayAddition(arr) {
    var a = arr.sort(function(a, b) { return a - b; });
    var s = a.pop();
    return doCombination(a, s);
}

function doCombination(input, goal) {
    var result = true,
        l = input.length;

    for(var i = 2; i <= l && result; i++) {
        getCombination(input, i);
    }

    function getCombination(input, size) {
        var output = [],
            used = [], l = input.length;

        function combination(level) {
            if(!result) return;
            if(size === level) {
                //result.push(output.slice(0, output.length));
                //console.log(result, goal, arraySum(output), output);
                result = goal !== arraySum(output);
                return ;
            }

            level ++;

            for(var i = 0; i < l; i++) {
                if(used[i]) continue;
                if(output.length && output[output.length - 1] > input[i]) continue;
                used[i] = true;
                output.push(input[i]);
                combination(level);
                output.pop();
                used[i] = false;
            }
        }
        combination(0);
    }

    return !result;
}

function arraySum(arr) {
    return arr.reduce(function(pv, cv) {
        return pv + cv;
    }, 0);
}

console.log(arrayAddition([5, 7, 16, 1, 2]));
console.log(arrayAddition([3, 5, -1, 8, 12]));
console.log(arrayAddition([4, 6, 23, 10, 1, 3]));

console.log(arrayAddition([10, 20, 30, 40, 100]));
console.log(arrayAddition([31, 2, 90, 50, 7]));


//console.log(doCombination([1, 2, 3, 4, 5], 16));

function ArrayAdditionI(arr) {
    var largest = arr.sort(function(a,b){return a-b}).pop();
    function recursion(target, array){
        console.log(target, array);
        if(array.length === 0){
            return target === 0;
        }
        var n = array[0];
        array = array.slice(1);
        return recursion(target,array) || recursion(target-n,array);
    }
    return recursion(largest,arr);
}

console.log(ArrayAdditionI([5, 7, 16, 1, 2]));
console.log(ArrayAdditionI([3, 5, -1, 8, 12]));
console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3]));

console.log(ArrayAdditionI([10, 20, 30, 40, 100]));
console.log(ArrayAdditionI([31, 2, 90, 50, 7]));

