var pivotIndex = function(nums) {
    let sum = nums.reduce((acc, val) => acc += val);
    let pivot = 0;
    for (let i = 0; i < nums.length; i++) {
        const check = sum - nums[i]
        if (sum - nums[i] === pivot) {
            return i;
        }
        pivot += nums[i];
        sum -= nums[i];
    }
    return -1;
};
