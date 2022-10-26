var singleNumber = function(nums) {
  return nums.reduce((acc, v) => acc ^= v);
};