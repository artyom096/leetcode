// https://leetcode.com/problems/calculate-delayed-arrival-time/

var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  const format = 24;
  if (arrivalTime + delayedTime < format) return arrivalTime + delayedTime;
  return arrivalTime + delayedTime - format;
};
