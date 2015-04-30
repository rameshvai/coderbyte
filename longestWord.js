function longestWord(str) {
    var m = str.split(/[^a-z]+/i);
    return m.reduce(function(p, c, i, arr) {
        return (c.length > p.length) ? c : p;
    }, '');
}

console.log(longestWord("hello world"));
