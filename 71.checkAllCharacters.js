// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/

var areOccurrencesEqual = function (s) {
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]] = obj[s[i]] + 1;
    } else {
      obj[s[i]] = 1;
    }
  }
  const values = Object.values(obj);
  return values.filter((item) => item === values[0]).length === values.length;
};

function getObjectValue(path, obj) {
  const keys = path.split(".");
  let value = obj;

  for (let key of keys) {
    if (value[key]) {
      value = value[key];
    }
  }

  return value;
}
