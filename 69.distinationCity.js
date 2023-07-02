// https://leetcode.com/problems/destination-city/description/

var destCity = function (paths) {
  let setContainer = new Set();
  for (let i = 0; i < paths.length; i++) {
    setContainer.add(paths[i][0]);
  }
  for (let i = 0; i < paths.length; i++) {
    if (!setContainer.has(paths[i][1])) {
      return paths[i][1];
    }
  }
};
