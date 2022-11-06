var searchRange = function(nums, target) {
  if (!nums.length) return [-1, -1];
  const min = b1(nums, target, 0, nums.length - 1);
  const max = b2(nums, target, 0, nums.length - 1);

  return [min, max];
};

const b1 = (nums, target, low, high) => {
  let lower = low;
  let higher = high;

  while(lower <= higher) {
    const mid = Math.floor((lower + higher) / 2);

    if (nums[mid] === target) {
      if (nums[mid - 1] === target) {
        higher = mid - 1;
      } else {
        return mid;
      }
    } else if (nums[mid] < target) {
      lower = mid + 1;
    } else {
      higher = mid - 1;
    }
  }
  return -1;
}

const b2 = (nums, target, low, high) => {
  let lower = low;
  let higher = high;

  while(lower <= higher) {
    const mid = Math.floor((lower + higher) / 2);

    if (nums[mid] === target) {
      if (nums[mid + 1] === target) {
        lower = mid + 1;
      } else {
        return mid;
      }
    } else if (nums[mid] < target) {
      lower = mid + 1;
    } else {
      higher = mid - 1;
    }
  }
  return -1;
}