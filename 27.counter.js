// https://leetcode.com/problems/counter/

var createCounter = function (n) {
  let counter = 0;
  return function () {
    return n + counter++;
  };
};
