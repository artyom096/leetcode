// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let counter = 0;
    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      if (nums[j] < nums[i]) counter++;
    }
    res.push(counter);
  }
  return res;
};
