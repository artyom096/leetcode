// https://leetcode.com/problems/count-the-digits-that-divide-a-number/

var countDigits = function (num) {
  const arr = String(num).split("");
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (num % arr[i] === 0) {
      res++;
    }
  }
  return res;
};
