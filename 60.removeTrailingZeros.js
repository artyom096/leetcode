// https://leetcode.com/problems/remove-trailing-zeros-from-a-string/description/

var removeTrailingZeros = function (num) {
  let count = 0;
  for (let i = 1; i < num.length; i++) {
    if (num[num.length - i] === "0") {
      count++;
    } else {
      break;
    }
  }
  return count ? num.slice(0, -count) : num;
};
