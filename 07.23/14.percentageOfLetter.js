// https://leetcode.com/problems/percentage-of-letter-in-string/description/

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let letterCount = 0;
  const sLen = s.length;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === letter) {
      letterCount++;
    }
  }

  return Math.floor((letterCount / sLen) * 100);
};
