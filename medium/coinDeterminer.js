/*
 Using the JavaScript language, have the function CoinDeterminer(num) take the input, which will be an integer ranging from 1 to 250, and return an integer output that will specify the least number of coins, that when added, equal the input integer. Coins are based on a system as follows: there are coins representing the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then the output should be 2 because you can achieve the number 16 with the coins 9 and 7. If num is 25, then the output should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins.
 */


function coinDeterminer(num) {
    var coins = [11, 9, 7, 5, 1];
    var r = permutations(coins, num);
    return r.length;
}

function permutations(input, amount) {
    var output = [],
        result = [],
        l = input.length,
        size = 0,
        matchingArray = false;

    function doPermute(level) {
        if(size === level) {
            result = output.slice(0);
            if(!matchingArray && getSum(result) === amount) {
                matchingArray = result;
                console.log(result);
            }
            return;
        }
        if(matchingArray) return;
        level ++;
        for(var i = 0; i < l; i++) {
            output.push(input[i]);
            doPermute(level);
            output.pop();
        }
    }
    for(size = 1; !matchingArray; size ++) {
        doPermute(0);
    }
    return matchingArray;
}

function getSum(arr) {
    return arr.reduce(function(pv, cv) {
        return pv += cv;
    }, 0);
}

//console.log(permutations([11, 9, 7, 5, 1], 25));

console.log(coinDeterminer(16));
console.log(coinDeterminer(25));
console.log(coinDeterminer(6));
console.log(coinDeterminer(16));
console.log(coinDeterminer(100));
