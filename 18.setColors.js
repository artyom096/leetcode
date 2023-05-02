// https://leetcode.com/problems/sort-colors/description/

// bubble
// var sortColors = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length - 1 - i; j++) {
//       if (nums[j] > nums[j + 1]) {
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]; //swap
//       }
//     }
//   }
// };

// chose
// for (let i = 0; i < nums.length - 1; i++) {
//   let max = -Infinity;
//   let maxI = null;
//   for (let j = 0; j < nums.length - i; j++) {
//     if (nums[j] >= max) {
//       max = nums[j];
//       maxI = j;
//     }
//   }
//   [nums[maxI], nums[nums.length - 1 - i]] = [
//     nums[nums.length - 1 - i],
//     nums[maxI],
//   ];
// }

// [1, 5, 3, 4, 2, 7, 6];

// // insert
// for (let i = 0; i < arr.length; i++) {
//   let current = arr[i]; //its important
//   let j = i;
//   while (j > 0 && arr[j - 1] > current) {
//     [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
//     j--;
//   }
// }

// quick
var sortColors = function (nums) {
  if (nums.length < 2) return nums;

  const center = nums[Math.floor(nums.length / 2)];
  const less = [];
  const more = [];
  const equal = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > center) {
      more.push(nums[i]);
    } else if (nums[i] < center) {
      less.push(nums[i]);
    } else {
      equal.push(nums[i]);
    }
  }
  return [...sortColors(less), ...equal, ...sortColors(more)];
};

