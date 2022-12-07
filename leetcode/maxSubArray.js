var maxProduct = function(nums) {
    let res = -Infinity;
    let min = 1;
    let max = 1;

    for (const n of nums) {
        const tmp = max * n;
        max = Math.max(min * n, max * n, n);
        min = Math.min(min * n, tmp, n);
        res = Math.max(res, max)
    }
    return res;
};
