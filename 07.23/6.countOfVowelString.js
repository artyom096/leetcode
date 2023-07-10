// https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/description/

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

var vowelStrings = function (words, left, right) {
  const w = ["a", "e", "i", "o", "u"];
  return words
    .slice(left, right + 1)
    .filter((item) => w.includes(item[0]) && w.includes(item[item.length - 1]))
    .length;
};
