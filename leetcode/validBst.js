var isValidBST = function(root, val) {
    if (!root) return false;
    const rootValue = root.val;
    let leftBound = -Infinity;
    let rightBound = Infinity;
    
    const iter = (tree, lb, rb, type = null) => {
        if (!tree) return true;
        if (tree.val <= lb || tree.val >= rb) return false;
        
        return iter(tree.left, lb, tree.val) && iter(tree.right, tree.val, rb);
    };
    
    return iter(root, leftBound, rightBound);
}