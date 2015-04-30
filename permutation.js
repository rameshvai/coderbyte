function permutation(input, size) {
    var results = [],
        output = [],
        used = [];

    var l = input.length;

    function doPermute(level) {
        if(size === level) {
            results.push(output.slice(0, output.length));
            return;
        }
        level ++;
        for(var i = 0; i < l; i++) {
            if(used[i]) continue;
            used[i] = true;
            output.push(input[i]);
            doPermute(level);
            used[i] = false;
            output.pop();
        }
    }

    doPermute(0);
    return results;
}

var a = [1, 2, 3, 4, 5];

for(var i = 1; i <= a.length; i++)
    console.log(permutation([1, 2, 3, 4, 5], i));
