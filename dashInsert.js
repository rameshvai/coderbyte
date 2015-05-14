/*
 Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
 */

function dashInsert(num) {
    return num.toString().replace(/([13579])(?=[13579])/g, "$1-");
}

console.log(dashInsert(99946));
console.log(dashInsert(56730));
console.log(dashInsert(454793));
