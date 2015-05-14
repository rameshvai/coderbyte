/*
 Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your program should return that new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.
 */

function offLineMinimum(arr) {
    var r = [];
    arr.reduce(function(pv, cv) {
        if(cv === 'E') {
            pv.sort(function(a, b) {return b - a});
            r.push(pv.pop());
        } else {
            pv.push(cv);
        }
        return pv;
    }, []);
    return r.join(',');
}

console.log(offLineMinimum(["5","4","6","E","1","7","E","E","3","2"]));
console.log(offLineMinimum(["1","2","E","E","3"]));
console.log(offLineMinimum(["4","E","1","E","2","E","3","E"]));
console.log(offLineMinimum(["4","E","1","E","2","E","3","E"]));
