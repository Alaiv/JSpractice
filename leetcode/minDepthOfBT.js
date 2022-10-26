const minDepth = function (root) {
  function dfs(root, depth) {
    if (root === null) return depth;
    if (!root.left || !root.right) {
      return Math.max(dfs(root.left, depth + 1), dfs(root.right, depth + 1));
    } else {
      return Math.min(dfs(root.left, depth + 1), dfs(root.right, depth + 1));
    }
  }

  return dfs(root, 0);

};