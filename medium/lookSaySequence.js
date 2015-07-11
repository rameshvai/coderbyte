/*
 Using the JavaScript language, have the function LookSaySequence(num) take the num parameter being passed and return the next number in the sequence according to the following rule: to generate the next number in a sequence read off the digits of the given number, counting the number of digits in groups of the same digit. For example, the sequence beginning with 1 would be: 1, 11, 21, 1211, ... The 11 comes from there being "one 1" before it and the 21 comes from there being "two 1's" before it. So your program should return the next number in the sequence given num.
 */

function lookSaySequence(num) {
    return num.toString().replace(/(.)\1*/g, function(m, m1) {
        return m.length + m1;
    });
}

console.log(lookSaySequence(1211));
console.log(lookSaySequence(2466));
console.log(lookSaySequence(111));
