// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

var checkIfPangram = function(sentence) {
    const x = sentence.split('')
    return new Set(x).size === 26
};