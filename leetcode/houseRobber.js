var rob = function(nums) {
    let first = 0;
    let second = 0;
    
    for (const n of nums) {
        const temp = Math.max(n + first, second);
        first = second;
        second = temp;
    }
    
    return second;
};