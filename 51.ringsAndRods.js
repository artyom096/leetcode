// https://leetcode.com/problems/rings-and-rods/description/

var countPoints = function (rings) {
  const obj = {};

  for (let i = 0; i < rings.length; i = i + 2) {
    if (!obj[rings[i + 1]]) {
      obj[rings[i + 1]] = [rings[i]];
    } else {
      obj[rings[i + 1]].push(rings[i]);
    }
  }
  return Object.values(obj).filter((v) => {
    const x = new Set([...v]);
    return x.size === 3;
  }).length;
};
