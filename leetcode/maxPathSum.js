var maxPathSum = function(root) {
    let result = root.val;

    const dfs = (tree) => {
        if (!tree) return 0;

        let leftMax = dfs(tree.left);
        let rightMax = dfs(tree.right);
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);

        const m = tree.val + leftMax + rightMax;
        result = Math.max(m, result);

        return tree.val + Math.max(leftMax, rightMax);
    };

    dfs(root);
    return result;
};
