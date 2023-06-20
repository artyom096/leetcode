// https://leetcode.com/problems/find-the-highest-altitude/description/

var largestAltitude = function (gain) {
  let res = [0, gain[0]];
  for (let i = 1; i < gain.length; i++) {
    res.push(res[res.length - 1] + gain[i]);
  }
  return Math.max(...res);
};
