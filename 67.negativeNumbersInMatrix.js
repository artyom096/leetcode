// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/

var countNegatives = function (grid) {
  const flat = grid.flat();
  let res = 0;
  for (let i = 0; i < flat.length; i++) {
    if (flat[i] < 0) {
      res++;
    }
  }
  return res;
};
