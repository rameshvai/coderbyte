/*
 Using the JavaScript language, have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3.
 */

function divisionGCD(num1, num2) {
    return gcd(num1, num2);
}

function gcd(n1, n2) {
    if(n1 < n2) {
        return gcd(n2, n1);
    }
    if(n2 === 0) {
        return n1;
    }
    return gcd(n2, n1 % n2);
}

console.log(divisionGCD(12, 16));
console.log(divisionGCD(7, 3));
console.log(divisionGCD(36, 54));
