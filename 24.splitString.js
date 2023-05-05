// https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

var balancedStringSplit = function (s) {
  let matches = 0;
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    const top = stack[stack.length - 1];

    if (top && top !== s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
    if (!stack.length) {
      matches++;
    }
  }
  return matches;
};
