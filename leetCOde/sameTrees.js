const sameTrees = (t1, t2) => {
    if (t1 === null || t2 === null) return t1 === t2;

    return t1.value === t2.value && sameTrees(t1.left, t2.left) && sameTrees(t1.right, t2.right);
}