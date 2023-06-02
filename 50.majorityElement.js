// https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

var majorityElement = function (nums) {
  const res = {};
  for (let i = 0; i < nums.length; i++) {
    if (res[nums[i]]) {
      res[nums[i]] = res[nums[i]] + 1;
    } else {
      res[nums[i]] = 1;
    }
  }
  let result = [0, 0];
  Object.keys(res).forEach((key) => {
    if (res[key] > result[1]) {
      result = [key, res[key]];
    }
  });
  return result[0];
};
