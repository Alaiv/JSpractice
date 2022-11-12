var runningSum = function(nums) {
    if (!nums.length) return [];
    
    return nums.reduce((acc, num) => {
        acc.length 
            ? acc.push(acc[acc.length - 1] + num)
            : acc.push(num);
        return acc;
    }, [])
};
