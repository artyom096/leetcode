// https://leetcode.com/problems/delete-columns-to-make-sorted/description/

/**
 * @param {string[]} strs
 * @return {number}
 */

var minDeletionSize = function (strs) {
  let res = 0;
  for (let i = 0; i < strs[0].length; i++) {
    let str = "";
    for (let j = 0; j < strs.length; j++) {
      str += strs[j][i];
    }
    const sorted = str.split("").sort().join("");
    if (str !== sorted) {
      res++;
    }
  }
  return res;
};
