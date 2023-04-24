// https://leetcode.com/problems/smallest-even-multiple/description/

var smallestEvenMultiple = function (n) {
  if (n % 2 === 0) return n;
  return n * 2;
};
