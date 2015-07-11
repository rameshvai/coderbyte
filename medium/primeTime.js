/*
 Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.
 */

function primeTime(num) {
    var n = Math.floor(num / 2);
    for(var i = 2; i <= n; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primeTime(19));
console.log(primeTime(21));
console.log(primeTime(110));
console.log(primeTime(3));
