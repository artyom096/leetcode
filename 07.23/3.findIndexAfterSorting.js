// https://leetcode.com/problems/find-target-indices-after-sorting-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  const sorted = nums.sort((a, b) => a - b);

  const res = [];

  sorted.forEach((el, i) => {
    if (el === target) {
      res.push(i);
    }
  });
  return res;
};
