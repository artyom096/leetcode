// https://leetcode.com/problems/reverse-words-in-a-string-iii/

var reverseWords = function (s) {
  return s
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
};
