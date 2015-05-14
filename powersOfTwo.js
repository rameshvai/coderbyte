function powersOfTwo(num) {
    while( num % 2 === 0) {
        num /= 2;
    }
    return (num === 1);
}

console.log(powersOfTwo(4));
console.log(powersOfTwo(16));
console.log(powersOfTwo(22));
console.log(powersOfTwo(124));
console.log(powersOfTwo(128));
