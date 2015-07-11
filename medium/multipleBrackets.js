/*
 Using the JavaScript language, have the function MultipleBrackets(str) take the str parameter being passed and return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello [world])(!)", then the output should be 1 3 because all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])" the the output should be 0 because the brackets do not correctly match up. Only "(", ")", "[", and "]" will be used as brackets. If str contains no brackets return 1.
 */

function multipleBrackets(str) {
    var cnt = 0, p = 0, b = 0, c;
    for(var i = 0; i < str.length; i++) {
        c = str.charAt(i);
        switch(c) {
            case '(':
                cnt ++;
                p ++;
                break;
            case '[':
                b ++;
                cnt ++;
                break;
            case ')':
                p --;
                break;
            case ']':
                b --;
                break;
        }
        if(p < 0 || b < 0) return 0;
    }
    return ((p || b) ? 0 : "1 " + cnt);
}

console.log(multipleBrackets("(hello [world])(!)"));
console.log(multipleBrackets("((hello [world])"));
console.log(multipleBrackets("(coder)[byte)]"));
console.log(multipleBrackets("(c([od]er)) b(yt[e])"));
