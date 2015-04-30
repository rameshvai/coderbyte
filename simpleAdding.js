/*Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num.
For the test cases, the parameter num will be any number from 1 to 1000. */

function simpleAdding(n) {
    var t = 0;
    for(i = 1; i <= n; i++)
        t += i;
    return t;
}

console.log(simpleAdding(140));
