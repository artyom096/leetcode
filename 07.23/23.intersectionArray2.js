/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const obj = {};
  const res = [];

  nums1.forEach((item) => {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  });

  for (let num of nums2) {
    if (obj[num]) {
      res.push(num);
      obj[num]--;
    }
  }
  return res;
};
