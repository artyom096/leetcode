// https://leetcode.com/problems/a-number-after-a-double-reversal/description/

var isSameAfterReversals = function (num) {
  const str = String(num);
  if (str.length === 1) return true;
  if (str[str.length - 1] !== "0") {
    return true;
  }
  return false;
};
