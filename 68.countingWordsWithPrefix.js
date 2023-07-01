// https://leetcode.com/problems/counting-words-with-a-given-prefix/description/

var prefixCount = function (words, pref) {
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      res++;
    }
  }

  return res;
};
