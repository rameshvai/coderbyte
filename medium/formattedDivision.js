/*
 Using the JavaScript language, have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero.
 */

function formattedDivision(num1, num2) {
    return (num1 / num2).toFixed(4).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

console.log(formattedDivision(2, 3));
console.log(formattedDivision(123456789, 1000));
console.log(formattedDivision(10, 10));
