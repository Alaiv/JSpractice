var hasPathSum = function(root, targetSum) {
  if (!root) return false;

  let val;
  function dfs(root, sum) {
    if (root === null) {
      return false;
    }
    if (sum + root.val === targetSum) {
      if (!root.right && !root.left) {
        val = sum + root.val;
        return true;
      }
    }
    dfs(root.left, sum + root.val), dfs(root.right, sum + root.val);
  }
  dfs(root, 0);
  return val === targetSum;
};