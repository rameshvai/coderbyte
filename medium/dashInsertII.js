/*
 Using the JavaScript language, have the function DashInsertII(str) insert dashes ('-') between each two odd numbers and insert asterisks ('*') between each two even numbers in str. For example: if str is 4546793 the output should be 454*67-9-3. Don't count zero as an odd or even number.
 */

function dashInsertII(num) {
    return num.toString().replace(/([13579])(?=[13579])|([2468])(?=[2468])/g, function(m, g1, g2) {
        if(g1) {
            return g1 + "-";
        } else {
            return g2 + "*";
        }
    });
}

console.log(dashInsertII(4546793));
console.log(dashInsertII(99946));
console.log(dashInsertII(56647304));
