/*
 Using the JavaScript language, have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number, otherwise return 0. For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes.
 */

function primeChecker(num) {
    var a = permutation(num);
    return (a.length ? 1 : 0);
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
            n = parseInt(output.slice(0).join(''), 10);
            if(isPrime(n)) {
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

function isPrime(num) {
    if(num === 1) return false;
    var n = Math.floor(num / 2);
    for(var i = 2; i <= n; i++) {
        if(num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(1));

console.log(primeChecker(910));
console.log(primeChecker(98));
console.log(primeChecker(598));
console.log(primeChecker(100));
