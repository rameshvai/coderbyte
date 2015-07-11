/*
 Using the JavaScript language, have the function NumberEncoding(str) take the str parameter and encode the message according to the following rule: encode every letter into its corresponding numbered position in the alphabet. Symbols and spaces will also be used in the input. For example: if str is "af5c a#!" then your program should return 1653 1#!.
 */

function numberEncoding(str) {
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    return str.replace(/[a-z]/gi, function(m) {
        return alpha.indexOf(m.toLowerCase()) + 1;
    })
}

console.log(numberEncoding("af5ca#!"));
console.log(numberEncoding("hello 45"));
console.log(numberEncoding("jaj-a"));
