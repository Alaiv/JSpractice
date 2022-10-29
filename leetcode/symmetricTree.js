var isSymmetric = function(root) {
  if (root && !root.left && !root.right) return true;
  if (!root || !root.left || !root.right) return false;
  let first = [root.left.val + ''];
  let second = [root.right.val + ''];

  const helper = (tree) => {
    if (!tree) return;

    first.push(tree.left ? tree.left.val : 0);
    first.push(tree.right ? tree.right.val : 0);

    helper(tree.left);
    helper(tree.right);
  }
  const helperTwo = (tree2) => {
    if (!tree2) return;

    second.push(tree2.right ? tree2.right.val : 0);
    second.push(tree2.left ? tree2.left.val : 0);

    helperTwo(tree2.right);
    helperTwo(tree2.left);
  }
  helper(root.left);
  helperTwo(root.right);
  return first.join('') === second.join('')
};