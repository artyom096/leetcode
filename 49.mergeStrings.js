// https://leetcode.com/problems/merge-strings-alternately/

var mergeAlternately = function (word1, word2) {
  let res = "";
  if (word1.length > word2.length) {
    for (let i = 0; i < word1.length; i++) {
      res += word1[i];
      if (word2[i]) {
        res += word2[i];
      }
    }
  } else {
    for (let i = 0; i < word2.length; i++) {
      if (word1[i]) {
        res += word1[i];
      }
      res += word2[i];
    }
  }
  return res;
};
