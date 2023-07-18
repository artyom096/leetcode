// https://leetcode.com/problems/first-letter-to-appear-twice/description/

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
      let res = null;
      Object.entries(obj).forEach(([key, value]) => {
        if (value === 2) {
          res = key;
        }
      });
      if (res) return res;
    }
  }
};
