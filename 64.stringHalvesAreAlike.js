// https://leetcode.com/problems/determine-if-string-halves-are-alike/description/

var halvesAreAlike = function (s) {
  const alike = ["a", "e", "i", "o", "u"];

  const first = s.slice(0, s.length / 2);
  const second = s.slice(s.length / 2);

  let count = 0;

  for (let i = 0; i < first.length; i++) {
    if (alike.includes(first[i].toLowerCase())) {
      count++;
    }
    if (alike.includes(second[i].toLowerCase())) {
      count--;
    }
  }

  return count === 0;
};
