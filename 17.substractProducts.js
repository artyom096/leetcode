// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

var subtractProductAndSum = function (n) {
  const str = String(n);
  let multi = 1;
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    multi *= Number(str[i]);
    sum += Number(str[i]);
  }
  return multi - sum;
};
