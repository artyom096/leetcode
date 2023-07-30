/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  k = k % nums.length;
  if (nums.length === 1) return nums;

  let l = 0;
  let r = nums.length - 1;
  rotateArr(l, r, nums);

  l = 0;
  r = k - 1;
  rotateArr(l, r, nums);

  l = k;
  r = nums.length - 1;
  rotateArr(l, r, nums);
}

const rotateArr = (l, r, nums) => {
  while (l < r) {
    const temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }
  return nums;
};
