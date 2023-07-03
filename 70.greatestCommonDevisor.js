// https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/

var findGCD = function (nums) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  let res = 1;

  if (min === max) return max;

  for (let i = 1; i < max; i++) {
    if (min % i === 0 && max % i === 0) {
      res = i;
    }
  }
  return res;
};
