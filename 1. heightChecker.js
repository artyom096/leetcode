const heights = [1, 1, 4, 2, 1, 3];

var heightChecker = function (heights) {
  const orderedHeight = [...heights];
  let res = 0;
  for (let i = 0; i < orderedHeight.length; i++) {
    for (let j = 0; j < orderedHeight.length; j++) {
      if (orderedHeight[j] > orderedHeight[i]) {
        [orderedHeight[j], orderedHeight[i]] = [
          orderedHeight[i],
          orderedHeight[j],
        ];
      }
    }
  }
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== orderedHeight[i]) {
      res++;
    }
  }
  return res;
};

