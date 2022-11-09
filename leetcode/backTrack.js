const b = (nums) => {
  const combinations = [];
  const length = nums.length

  const backTrack = (nums, path) => {
    if (path.length === length) {
      combinations.push(([...path]));
    } else {
      for (let i = 0; i < nums.length; i++) {
        path.push(nums[i]);
        backTrack(nums.filter((idk, v) => v !== i), path);
        path.pop();
      }
    }
  };
  backTrack(nums, []);
  return combinations;
};

b([1, 2, 3]);