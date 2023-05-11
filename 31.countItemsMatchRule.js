// https://leetcode.com/problems/count-items-matching-a-rule/

var countMatches = function (items, ruleKey, ruleValue) {
  const ruleMap = {
    type: 0,
    color: 1,
    name: 2,
  };
  let res = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i][ruleMap[ruleKey]] === ruleValue) {
      res++;
    }
  }
  return res;
};
