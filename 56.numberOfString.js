// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/description/

var numOfStrings = function (patterns, word) {
  return patterns.filter((w) => word.includes(w)).length;
};
