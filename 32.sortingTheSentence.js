// https://leetcode.com/problems/sorting-the-sentence/

var sortSentence = function (s) {
  const arr = s.split(" ");
  const res = arr.map((s) => null);

  for (let i = 0; i < arr.length; i++) {
    res[arr[i][arr[i].length - 1]] = arr[i].slice(0, -1);
  }

  return res.join(" ").trim();
};
