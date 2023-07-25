// https://leetcode.com/problems/two-out-of-three/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const obj = {};
  const nums2f = new Set([...nums2]);
  const nums3f = new Set([...nums3]);

  for (let i = 0; i < nums1.length; i++) {
    const first = nums1[i];

    if (!obj[first]) {
      obj[first] = 1;
    }
  }
  for (const val of nums2f.values()) {
    if (!obj[val]) {
      obj[val] = 1;
    } else {
      obj[val]++;
    }
  }
  for (const val of nums3f.values()) {
    if (!obj[val]) {
      obj[val] = 1;
    } else {
      obj[val]++;
    }
  }
  return Object.entries(obj)
    .map(([key, value]) => {
      if (value > 1) {
        return key;
      }
    })
    .filter(Boolean);
};
