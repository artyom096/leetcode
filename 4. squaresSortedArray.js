const arr = [-4, -1, 0, 3, 10];

const sortedSquares = (nums) => {
  const res = [];
  let end = nums.length - 1;
  let start = 0;
  let pos = end;

  while (start <= end) {
    if (nums[start] ** 2 > nums[end] ** 2) {
      res[pos--] = nums[start++] ** 2;
    } else {
      res[pos--] = nums[end--] ** 2;
    }
  }
  return res;
};

console.log(sortedSquares(arr));
