// https://leetcode.com/problems/robot-return-to-origin/description/

/**
 * @param {string} moves
 * @return {boolean}
 */

var judgeCircle = function (moves) {
  const obj = {};

  for (let i = 0; i < moves.length; i++) {
    if (!obj[moves[i]]) {
      obj[moves[i]] = 1;
    } else {
      obj[moves[i]]++;
    }
  }

  return obj["U"] === obj["D"] && obj["L"] === obj["R"];
};
