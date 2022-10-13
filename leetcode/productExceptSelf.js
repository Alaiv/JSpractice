var productExceptSelf = function(nums) {
    const result = [];
    const left = [1];
    const right = [1];
    let lastLEft = 1;
    let lastRight = 1;
    const len = nums.length;

    for (let i = 1; i < len; i++) {
        lastLEft *= nums[i - 1];
        left.push(lastLEft);

        lastRight *= nums[len - i];
        right.push(lastRight);
    }
    right.reverse();
    for (let i = 0; i < len; i++) {
        result.push(left[i] * right[i]);
    }
    return result;
};

console.log(productExceptSelf([1, 4, 6, 8, 2]))