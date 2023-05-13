// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

var countKDifference = function (nums, k) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] - nums[j] === k || nums[i] - nums[j] === -k) {
        res++;
      }
    }
  }

  return res;
};
