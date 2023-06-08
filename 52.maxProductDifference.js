// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/

var maxProductDifference = function (nums) {
  const sorted = nums.sort((a, b) => a - b);
  return (
    sorted[nums.length - 1] * sorted[nums.length - 2] - sorted[0] * sorted[1]
  );
};
