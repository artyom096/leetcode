// https://leetcode.com/problems/design-parking-system/description/

const carTypeDictionary = {
  1: "big",
  2: "medium",
  3: "small",
};

var ParkingSystem = function (big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

ParkingSystem.prototype.addCar = function (carType) {
  const count = this[carTypeDictionary[carType]];
  const res = count > 0;
  this[carTypeDictionary[carType]]--;
  return res;
};
