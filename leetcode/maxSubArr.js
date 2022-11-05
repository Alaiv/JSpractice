const maxSubArr = (nums) => {
  let [max, sum] = [nums[0], nums[0]];

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    max = Math.max(max, sum);
  }
  return max;
}

const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArr(nums))