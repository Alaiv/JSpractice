var maxArea = function(height) {
  let result = 0;
  let start = 0;
  let end = height.length - 1;
  for (let i = 0; i < height.length; i++) {
    const value1 = height[start];
    const value2 = height[end];
    const length = Math.abs(end - start);
    const min = Math.min(value1, value2);
    const am = min * length

    if (am > result) {
      result = am;
    }

    if (value1 <= value2) {
      start++;
    } else {
      end--;
    }
  }

  return result;
};

console.log(maxArea(
  [1,3,2,5,25,24,5]))