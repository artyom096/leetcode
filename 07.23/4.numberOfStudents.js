// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/description/

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (s, e, q) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] <= q && e[i] >= q) {
      res++;
    }
  }
  return res;
};
const res = { 1: 1, 2: 2 };
console.log(Object.entries(([key, val]) => {
  console.log('lsls');
  return ([key, val]);
}))
