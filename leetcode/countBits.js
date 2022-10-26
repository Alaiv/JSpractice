var countBits = function(n) {
  const result = [0];
  for (let i = 1; i <= n; i++) {

    result[i] = result[i >> 1] + (i & 1);
  }
  return result;
};
console.log(countBits(6));


console.log(7 ^ 3)