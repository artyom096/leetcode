// https://leetcode.com/problems/sort-the-people/

var sortPeople = function (names, heights) {
  const obj = names.reduce((acc, cur, i) => {
    acc.push([cur, heights[i]]);
    return acc;
  }, []);
  return obj.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
};
