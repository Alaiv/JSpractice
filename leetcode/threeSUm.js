var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let mid = i + 1;
    let right = nums.length - 1;

    while (mid < right) {
      const res = nums[i] + nums[mid] + nums[right];
      if (res < 0) {
        mid += 1;
      } else if (res > 0) {
        right -= 1;
      } else {
        result.push([nums[i], nums[mid], nums[right]]);
        while (mid < right && nums[mid] === nums[mid + 1]) {
          console.log(nums[mid])
          console.log(nums[mid + 1])
          mid += 1;
        }
        while (mid < right && nums[right] === nums[right - 1]) {
          console.log(nums[right])
          console.log(nums[right - 1])
          right -= 1;
        }
        mid += 1;
        right -= 1;
      }
    }
  }

  return result;
};

threeSum([-2,0,0,2,2])