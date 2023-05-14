// https://leetcode.com/problems/count-the-number-of-consistent-strings/

var countConsistentStrings = function (allowed, words) {
  let res = 0;
  const allowedArr = allowed.split("");

  for (let i = 0; i < words.length; i++) {
    let x = false;
    for (let j = 0; j < words[i].length; j++) {
      if (allowedArr.includes(words[i][j])) {
        x = true;
      } else {
        x = false;
        break;
      }
    }
    if (x) {
      res++;
    }
  }
  return res;
};
