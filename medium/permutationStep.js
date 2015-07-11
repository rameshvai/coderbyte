/*
 Using the JavaScript language, have the function PermutationStep(num) take the num parameter being passed and return the next number greater than num using the same digits. For example: if num is 123 return 132, if it's 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999).
 */

function permutationStep(num) {
    var a = permutation(num);
    a = a.sort(function(a, b) {
        return a - b;
    });
    return a.length ? a[0] : -1;
}

function permutation(num) {
    var input = num.toString().split(''),
        l = input.length,
        results = [],
        output = [],
        used = [],
        size = l,
        n = 0;

    function doPermute(level) {
        if(size === level) {
            n = parseInt(output.join(''), 10);
            if(n > num) {
                results.push(n);
            }
            return;
        }
        level ++;
        for(var i = 0; i < l; i++) {
            if(used[i]) continue;
            used[i] = true;
            output.push(input[i]);
            doPermute(level);
            used[i] = false;
            output.pop();
        }
    }
    doPermute(0);
    return results;
}

console.log(permutationStep(123));
console.log(permutationStep(12453));
console.log(permutationStep(999));
console.log(permutationStep(11121));
console.log(permutationStep(41352));
