// https://leetcode.com/problems/permutations/description/

var permute = function (nums, set = [], answers = []) {
  if (!nums.length) answers.push([...set]);

  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((n) => n !== nums[i]);
    set.push(nums[i]);
    permute(newNums, set, answers);
    set.pop();
  }
  return answers;
};
