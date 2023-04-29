// https://leetcode.com/problems/goal-parser-interpretation/description/

var interpret = function (command) {
  let res = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "(" && command[i + 1] === ")") {
      res += "o";
      i++;
      continue;
    }

    if (command[i] === "(" && command[i + 1] !== ")") {
      res += "al";
      i += 3;
      continue;
    }

    res += command[i];
  }
  return res;
};
