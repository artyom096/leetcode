// https://leetcode.com/problems/decode-xored-array/description/

var decode = function (encoded, first) {
  const res = [first];
  for (let i = 0; i < encoded.length; i++) {
    res.push(res[i] ^ encoded[i]);
  }
  return res;
};
