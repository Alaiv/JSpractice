var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    let min = Infinity;
    
    while(l <= r) {
        const mid = Math.floor((l + r) / 2);
        
        min = Math.min(nums[mid], min);

        if (nums[l] > nums[r]) {
            if (nums[mid] >= nums[l]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        } else {
            return nums[l];
        }
    }
    
    return min;
};