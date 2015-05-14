/*
 Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
 */

function additivePersistenceX(num) {

    function getAddedNum(x) {
        var a = 0;
        while(x) {
            a += x % 10;
            x = Math.floor(x / 10);
        }
        return a;
    }

    var n = 0;
    while(num > 9) {
        num = getAddedNum(num);
        n++;
    }
    return n;
}

console.log(additivePersistence(271099999999999));
console.log(additivePersistence(4));
console.log(additivePersistence(19));
console.log(additivePersistence(189));
