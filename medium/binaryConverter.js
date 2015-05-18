/*
 Using the JavaScript language, have the function BinaryConverter(str) return the decimal form of the binary value. For example: if 101 is passed return 5, or if 1000 is passed return 8.
 */

function binaryConverter(str) {
    return parseInt(str, 2);
}

console.log(binaryConverter("101"));
console.log(binaryConverter("1000"));
console.log(binaryConverter("100101"));
console.log(binaryConverter("011"));
