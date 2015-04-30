function factorial(n) {
    return n * (n > 1 ? factorial(n - 1) : 1);
}

console.log(factorial(8));