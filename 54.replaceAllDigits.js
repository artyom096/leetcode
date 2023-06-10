// https://leetcode.com/problems/replace-all-digits-with-characters/description/

var replaceDigits = function (s) {
  const alp = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const arr = s.split("");
  return arr
    .map((item, i) => {
      if (!isNaN(item)) {
        const curIndex = alp.findIndex((j) => j === arr[i - 1]);
        return alp[curIndex + Number(item)];
      } else {
        return item;
      }
    })
    .join("");
};
