// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/

var maximizeSum = function (nums, k) {
  let max = 0;
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    }
  }
  let j = 0;
  while (j < k) {
    res += max;
    max++;
    j++;
  }
  return res;
};
