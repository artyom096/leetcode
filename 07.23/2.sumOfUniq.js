// https://leetcode.com/problems/sum-of-unique-elements/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let uniq = [];
  const notUniq = [];

  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (uniq.findIndex((el) => el === nums[i]) > -1) {
      uniq = uniq.filter((item) => item !== nums[i]);
      notUniq.push(nums[i]);
    } else if (!notUniq.includes(nums[i])) {
      uniq.push(nums[i]);
    }
  }
  return uniq.reduce((acc, cur) => acc + cur, 0);
};
