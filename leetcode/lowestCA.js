var lowestCommonAncestor = function(root, p, q) {
    
    let res = null;
    
    const iter = (root) => {
      if (!root) return;
      if (p.val < root.val && q.val < root.val) {
            iter(root.left, p, q);
        } else if (p.val > root.val && q.val > root.val) {
            iter(root.right, p, q);
        } else {
            res = root;
            return;
        }   
    }
    iter(root);
    return res;
};