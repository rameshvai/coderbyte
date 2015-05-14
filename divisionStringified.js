/*
 Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345".
 */

function divisionStringified(num1, num2) {
    return Math.round(num1 / num2).toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
}

console.log(divisionStringified(2, 3));
console.log(divisionStringified(1, 10));
console.log(divisionStringified(5, 54));
console.log(divisionStringified(175, 24));
console.log(divisionStringified(101077282, 21123));
console.log(divisionStringified(6874, 67));
console.log(divisionStringified(1234567891111, 10000));
