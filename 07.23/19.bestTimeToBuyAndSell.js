/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Infinity;
  let res = 0;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    if (prices[i] - min > 0) {
      res += prices[i] - min;
      min = prices[i];
    }
  }

  return res;
};
