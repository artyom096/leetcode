// https://leetcode.com/problems/matrix-diagonal-sum/

var diagonalSum = function (mat) {
  let res = 0;
  const center = Math.floor(mat[0].length / 2);
  const isOdd = mat[0].length % 2 === 0;

  for (let i = 0; i < mat[0].length; i++) {
    res += mat[i][i];
  }
  for (let i = mat[0].length - 1; i >= 0; i--) {
    res += mat[mat[0].length - 1 - i][i];
  }

  if (!isOdd) {
    return res - mat[center][center];
  }
  return res;
};

console.log(
  diagonalSum([
    [7, 3, 1, 9],
    [3, 4, 6, 9],
    [6, 9, 6, 6],
    [9, 5, 8, 5],
  ])
);
