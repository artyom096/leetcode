// https://leetcode.com/problems/create-target-array-in-the-given-order/description/

var createTargetArray = function (nums, index) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    res.splice(index[i], 0, nums[i]);
  }
  return res;
};
