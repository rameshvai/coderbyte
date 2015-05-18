/*
 Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number.
 */

function primeMover(num) {
    var i = 2, c = 0;
    while(i) {
        if(isPrime(i)) {
            c ++;
            if(c === num) {
                return i;
            }
        }
        i++;
    }
    return 0;
}

function isPrime(n) {
    if(n === 2 || n === 3) return true;
    var x = Math.floor(n / 2);
    for(var i = 2; i <= x; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primeMover(1));
console.log(primeMover(16));
console.log(primeMover(9));
console.log(primeMover(100));
