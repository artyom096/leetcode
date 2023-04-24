// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

var kidsWithCandies = function (candies, extraCandies) {
  const res = [];
  let max = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }
  for (let i = 0; i < candies.length; i++) {
    res.push(candies[i] + extraCandies >= max);
  }
  return res;
};
