// https://leetcode.com/problems/shuffle-string/

var restoreString = function (s, indices) {
  const arr = new Array(indices.length).map((item) => null);
  for (let i = 0; i < indices.length; i++) {
    arr[indices[i]] = s[i];
  }
  return arr.join("");
};
