// https://leetcode.com/problems/unique-number-of-occurrences/description/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  const objValues = Object.values(obj);
  return new Set(objValues).size === objValues.length;
};
