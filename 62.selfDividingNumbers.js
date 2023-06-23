// https://leetcode.com/problems/self-dividing-numbers/description/

var selfDividingNumbers = function (left, right) {
  const res = [];
  for (let i = left; i <= right; i++) {
    const spl = String(i).split("");
    let count = 0;
    for (let j = 0; j < spl.length; j++) {
      if (i % Number(spl[j]) === 0) {
        count++;
      }
    }
    if (count === spl.length) {
      res.push(i);
    }
  }
  return res;
};
