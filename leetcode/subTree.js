const isSame = (tree, subTree) => {
  if (!tree && !subTree) return true;
  if (!tree || !subTree) return false;

  if (tree.val !== subTree.val) return false;

  return isSame(tree.left, subTree.left) && isSame(tree.right, subTree.right);
}

var isSubtree = function(root, subRoot) {
  if(!root) return false;
  if(isSame(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}