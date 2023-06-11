// https://leetcode.com/problems/delete-greatest-value-in-each-row/

var deleteGreatestValue = function (grid) {
  let res = 0;
  while (grid[0].length) {
    const x = [];
    for (let i = 0; i < grid.length; i++) {
      const max = Math.max(...grid[i]);
      const idx = grid[i].findIndex((d) => d === max);
      x.push(max);
      grid[i].splice(idx, 1);
    }
    res += Math.max(...x);
  }
  return res;
};
