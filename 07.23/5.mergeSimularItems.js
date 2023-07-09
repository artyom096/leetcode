// https://leetcode.com/problems/merge-similar-items/description/

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */

var mergeSimilarItems = function (items1, items2) {
  const common = [...items1, ...items2];
  const obj = {};

  for (let i = 0; i < common.length; i++) {
    if (!obj[common[i][0]]) {
      obj[common[i][0]] = common[i][1];
    } else {
      obj[common[i][0]] = obj[common[i][0]] + common[i][1];
    }
  }
  return Object.entries(obj).map(([key, val]) => {
    return [key, val];
  });
};
