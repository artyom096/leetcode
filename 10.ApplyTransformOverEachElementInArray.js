// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
var map = function (arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i, this));
  }
  return res;
};
