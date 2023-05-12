// https://leetcode.com/problems/count-of-matches-in-tournament/description/

var numberOfMatches = function (n) {
  let res = 0;
  let cur = n;
  while (Math.floor(cur / 2) > 0) {
    if (cur % 2 === 0) {
      res += cur / 2;
      cur = cur / 2;
    } else {
      res += (cur - 1) / 2;
      cur = (cur - 1) / 2 + 1;
    }
  }
  return res;
};
