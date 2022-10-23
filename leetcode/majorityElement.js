var majorityElement = function(nums) {
    const check = {};
    for (const v of nums) {
      check[v] = (check[v] ?? 0) + 1;
      if (check[v] > nums.length / 2) {
        return v;
      }
    }
    return check;
};

console.log(majorityElement([2, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7]))