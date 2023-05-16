// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

var getDecimalValue = function (head) {
  let total = 0;
  while (head != null) {
    total = total * 2 + head.val;
    head = head.next;
  }
  return total;
};
