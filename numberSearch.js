/*
 Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.
 */

function numberSearch(str) {
    var total = 0;
    var n = str.replace(/[0-9]+/g, function(m) {
        total += parseInt(m)
    });
    return total;
}

console.log(numberSearch("88Hello 3World!"));
console.log(numberSearch("55Hello"));
console.log(numberSearch("55Hello5"));
console.log(numberSearch("75Number9"));
console.log(numberSearch("10 2One Number*1*"));
