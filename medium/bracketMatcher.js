/*
 Using the JavaScript language, have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.
 */

function bracketMatcher(str) {
    var cnt = 0,
        ill = 0;
    str.replace(/(\()|(\))/g, function(m, m1, m2) {
        if(m1) cnt ++; else cnt --;
        if(cnt < 0) ill = 1;
    });
    return (ill ? 0 : Number(!cnt));
}

console.log(bracketMatcher("(hello (world))"));
console.log(bracketMatcher("((hello (world))"));
console.log(bracketMatcher("(coder)(byte))"));
console.log(bracketMatcher("(c(oder)) b(yte)"));
console.log(bracketMatcher("the color re(d))()(()"));
