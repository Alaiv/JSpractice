var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    
    const root = new TreeNode(preorder[0]);
    const mid = inorder.indexOf(preorder[0]);
    
    const left = preorder.slice(1, mid + 1);
    const right = preorder.slice(mid + 1);
    const leftI = inorder.slice(0, mid);
    const rightI = inorder.slice(mid + 1);
    
    root.left = buildTree(left, leftI);
    root.right = buildTree(right, rightI);
    
    return root;
};
