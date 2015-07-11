/*
 Using the JavaScript language, have the function SwapII(str) take the str parameter and swap the case of each character. Then, if a letter is between two numbers (without separation), switch the places of the two numbers. For example: if str is "6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3.
 */

function swapII(str) {
    var s = str.replace(/([a-z])|([A-Z])/g, function(m, g1, g2) {
        if(g1) {
            return g1.toUpperCase();
        } else {
            return g2.toLowerCase();
        }
    });
    return s.replace(/([0-9])([a-z]+)([0-9])/ig, "$3$2$1");
}

console.log(swapII("6Hello4 -8World, 7 yes3"));
console.log(swapII("Hello -5LOL6"));
console.log(swapII("2S 6 du5d4e"));
