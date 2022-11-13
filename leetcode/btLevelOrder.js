var levelOrder = function(root) {
    if (!root) return [];
    const result = [];
    
    const iter = (tree, level = 0) => {
        if (tree === null) return;
        result[level] 
            ? result[level].push(tree.val) 
            : result.push([tree.val]);
        iter(tree.left, level + 1);
        iter(tree.right, level + 1);
    }
    
    iter(root);
    return result;
};
