// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/description/

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  const alp = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
  const first = firstWord.split("").map((item) => alp[item]);
  const second = secondWord.split("").map((item) => alp[item]);
  const target = targetWord
    .split("")
    .map((item) => alp[item])
    .join("");

  return Number(first.join("")) + Number(second.join("")) === Number(target);
};
