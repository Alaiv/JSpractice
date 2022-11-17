var longestConsecutive = function (nums) {
    const setNums = new Set(nums);
    let max = 0;

    for (const n of nums) {
        if (!setNums.has(n - 1)) {
            let l = 0;
            while (setNums.has(n + l)) {
                l++
            }
            max = Math.max(max, l);
        }
    }
    return max;
};