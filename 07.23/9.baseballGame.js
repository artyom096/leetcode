// https://leetcode.com/problems/baseball-game/description/

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (op) {
  const res = [];
  for (let i = 0; i < op.length; i++) {
    const lastEl = Number(res[res.length - 1]);
    if (op[i] === "+") {
      res.push(lastEl + Number(res[res.length - 2]));
      continue;
    }
    if (op[i] === "C") {
      res.pop();
      continue;
    }
    if (op[i] === "D") {
      res.push(lastEl * 2);
      continue;
    }
    res.push(op[i]);
  }
  return res.reduce((acc, cur) => Number(acc) + Number(cur), 0);
};
