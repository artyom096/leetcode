// https://leetcode.com/problems/minimize-string-length/description/

/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
  const ar = s.split("");
  return new Set([...ar]).size;
};
