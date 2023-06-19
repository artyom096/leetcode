// https://leetcode.com/problems/number-of-common-factors/

var commonFactors = function (a, b) {
  let res = 1;
  const max = Math.max(a, b);

  for (let i = 2; i <= max; i++) {
    if (a % i === 0 && b % i === 0) {
      res++;
    }
  }
  return res;
};
