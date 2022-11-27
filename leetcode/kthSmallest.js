var kthSmallest = function(root, k) {
  const result = [];
  
  const iter = (tree) => {
      if (!tree) return;
      
      iter(tree.left);
      result.push(tree.val);
      iter(tree.right);
  };
  iter(root);
  return result[k - 1];
};