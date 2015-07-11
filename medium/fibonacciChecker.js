/*
 Using the JavaScript language, have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.
 */

function fibonacciChecker(num) {
    var i = 0, j = 1, f = 0;
    while(f < num) {
        f = i + j;
        i = j;
        j = f;
        if(f === num) return "yes";
    }
    return "no";
}

console.log(fibonacciChecker(34));
console.log(fibonacciChecker(8));
console.log(fibonacciChecker(54));
console.log(fibonacciChecker(20));
