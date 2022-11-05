var strStr = function(haystack, needle) {
  let i = 0;
  let l = needle.length;

  while(i < haystack.length) {
    if (haystack.length - i < needle.length) return - 1;

    if (haystack.substring(i, l) === needle) {
      return i;
    }
    l++;
    i++;
  }
  return -1;
};
const haystack = "aabaaabaaac", needle = "aabaaac";
console.log(strStr(haystack, needle))