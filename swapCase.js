/*
 Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.

 */


function swapCase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(m, g1, g2) {
        if(g1) {
            return g1.toUpperCase();
        }
        return g2.toLowerCase();
    });
}

console.log(swapCase("Hello World"));
console.log(swapCase("Hello-LOL"));
console.log(swapCase("Sup DUDE!!?"));

