var spiralOrder = function(matrix) {
  if (matrix.length === 1) return matrix[0];
  if (!matrix.length) return matrix;

  const result = [];
  const visited = {};
  let state = 'right';
  let i = 0;
  let j = 0;
  let length = matrix.length * matrix[0].length;

  while (result.length < length) {
   if (!visited[`${i}${j}`]) result.push(matrix[i][j]);
    visited[`${i}${j}`] = true;

    switch (state) {
      case 'right':
        if (j + 1 === matrix[0].length
          || visited[`${i}${j + 1}`]) {
          state = 'down';
        } else {
          j++;
        }
        break;
      case 'down':
        if (i + 1 === matrix.length
          || visited[`${i + 1}${j}`]) {
          state = 'left';
        } else {
          i++;
        }
        break;
      case 'left':
        if (j - 1 < 0 || visited[`${i}${j - 1}`]) {
          state = 'top'
        } else {
          j--;
        }
        break;
      case 'top':
        if (i - 1 < 0 || visited[`${i - 1}${j}`]) {
          state = 'right';
        } else {
          i--;
        }
        break;
    }
  }
  return result;
};
const matrix = [[]]
console.log(spiralOrder(matrix))