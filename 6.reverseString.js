// https://leetcode.com/problems/reverse-string/
var reverseString = function(s) {
    for(let i = 0; i < Math.floor(s.length / 2); i++){
        [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
    }
};

console.log(reverseString('hello')); // 'olleh'