// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/

var differenceOfSum = function (nums) {
  const x = nums.join("");
  let res = 0;
  let res1 = 0;

  for (let i = 0; i < nums.length; i++) {
    res += nums[i];
  }
  for (let i = 0; i < x.length; i++) {
    res1 += Number(x[i]);
  }
  return res - res1;
};
