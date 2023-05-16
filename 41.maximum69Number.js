// https://leetcode.com/problems/maximum-69-number/

var maximum69Number = function (num) {
  const numArr = String(num).split("");

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === "6") {
      numArr[i] = "9";
      break;
    }
  }

  return Number(numArr.join(""));
};
