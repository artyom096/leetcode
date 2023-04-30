// https://leetcode.com/problems/sort-colors/description/

// bubble
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
};

// chose
for (let i = 0; i < nums.length - 1; i++) {
  let max = -Infinity;
  let maxI = null;
  for (let j = 0; j < nums.length - i; j++) {
    if (nums[j] >= max) {
      max = nums[j];
      maxI = j;
    }
  }
  [nums[maxI], nums[nums.length - 1 - i]] = [
    nums[nums.length - 1 - i],
    nums[maxI],
  ];
}
