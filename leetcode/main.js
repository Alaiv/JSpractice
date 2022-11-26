var invertTree = function(root) {
    
    const iter = (tree) => {
        if (!tree) return;
        
        let temp = tree.right;
        tree.right = tree.left;
        tree.left = temp;
        iter(tree.left)
        iter(tree.right);
    };
    iter(root);
    return root;
};