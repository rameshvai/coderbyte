/*
 Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.
 */

function arithGeo(arr) {
    var a = Math.abs(arr[1] - arr[0]), g = arr[1] / arr[0];
    var A = true, G = true;
    for(i = 1; i < arr.length; i++) {
        A = A && Math.abs(arr[i] - arr[i - 1]) === a;
        G = G && arr[i] / arr[i - 1] === a;
    }
    if(A) return "Arithmetic";
    if(G) return "Geometric";
    return -1;
}

console.log(arithGeo([1,2,3,4,5,10,20]));
