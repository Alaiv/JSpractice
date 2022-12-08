var lengthOfLIS = function(nums) {
    if (!nums.length) return 0;
    const LiS = new Array(nums.length).fill(1);
    let result = 1;
    
    for (let i = nums.length - 2; i >= 0; i--) {
        let max = 1;
        const arr = LiS.slice(i + 1);
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
              max = Math.max(max, 1 + LiS[j]);
            }
        }
        LiS[i] = max;
        if (max > result) result = max;
    }
    return result;
};
