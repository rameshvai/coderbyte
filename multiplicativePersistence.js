/*
 Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.
 */

function multiplicativePersistence(num) {
    function getMultipliedNum(x) {
        var m = 1;
        while(x) {
            m *= (x % 10);
            x = Math.floor(x / 10);
        }
        return m;
    }

    var n = 0;
    while(num > 9) {
        num = getMultipliedNum(num);
        n ++;
    }
    return n;
}

console.log(multiplicativePersistence(39));
console.log(multiplicativePersistence(4));
console.log(multiplicativePersistence(25));
console.log(multiplicativePersistence(299));
