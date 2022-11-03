const dfs = (board, i, j, word) => {
  if (!word.length) return true;
  if (i < 0 || i >= board.length
    || j < 0 || j >= board[0].length
    || board[i][j] !== word[0]) return false;

  const temp = board[i][j];
  board[i][j] = '@';

  const result = dfs(board, i + 1, j, word.substring(1))
    || dfs(board, i - 1, j, word.substring(1))
    || dfs(board, i, j + 1, word.substring(1))
    || dfs(board, i, j - 1, word.substring(1));

  board[i][j] = temp;
  return result;
}

var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(board, i, j, word)) {
        return true;
      }
    }
  }
  return false;
};

const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCB"
console.log(exist(board, word))