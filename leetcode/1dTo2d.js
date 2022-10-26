var construct2DArray = function(original, m, n) {
  if (original.length > m * n) return [];
  const result = [];
  let row = 0;
  let col = 0;
  let nMulti = 0;
  while (row < m) {
    if (!result[row]) {
      result[row] = [];
    }
    result[row].push(original[col]);
    col++;
    if (col === n + nMulti) {
      row += 1;
      nMulti += n;
    }
  }
  return result;
};
const original = [1,2,3,4], m = 2, n = 2
console.log(construct2DArray(original, m, n))