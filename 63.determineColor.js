// https://leetcode.com/problems/determine-color-of-a-chessboard-square/description/

var squareIsWhite = function (coordinates) {
  const matrix = [
    [false, true, false, true, false, true, false, true],
    [true, false, true, false, true, false, true, false],
    [false, true, false, true, false, true, false, true],
    [true, false, true, false, true, false, true, false],
    [false, true, false, true, false, true, false, true],
    [true, false, true, false, true, false, true, false],
    [false, true, false, true, false, true, false, true],
    [true, false, true, false, true, false, true, false],
  ];

  const alp = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };
  const spl = coordinates.split("");

  return matrix[alp[spl[0]]][spl[1] - 1];
};
