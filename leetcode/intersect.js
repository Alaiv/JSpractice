var intersect = function(nums1, nums2) {
  const result1 = [];
  const l = Math.max(nums1.length, nums2.length)
  for (let i = 0; i < l; i++) {
    if (nums1.includes(nums2[i])) {
      result1.push(nums2[i])
      nums1.splice(nums1.indexOf(nums2[i]), 1);
    }
  }
  return result1;
};

///using hashmap
const intersect2 = (nums1, nums2) => {
  if (nums1.length > nums2.length) return intersect2(nums2, nums1);
  const result = [];
  const n1Count = nums1.reduce((acc, val) => {
    acc[val] = (acc[val] ?? 0) + 1
    return acc;
  },{});
  for(const val of nums2) {
    if (n1Count[val] > 0) {
      result.push(val);
      n1Count[val] -= 1;
    }
  }
  return result;
};