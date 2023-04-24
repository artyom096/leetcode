// https://leetcode.com/problems/function-composition/description/
var compose = function (fn) {
  return function (x) {
    res = x;
    for (let i = fn.length - 1; i >= 0; i--) {
      res = fn[i](res);
    }
    return res;
  };
};
