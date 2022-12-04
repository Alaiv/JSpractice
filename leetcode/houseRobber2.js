const calcMax = (nums) => {
    let first = 0;
    let second = 0;
    
    for (const n of nums) {
        const t = Math.max(n + first, second);
        first = second;
        second = t;
    }
    
    return second;
}


var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    
    return Math.max(calcMax(nums.slice(1)), calcMax(nums.slice(0, nums.length - 1)));
};