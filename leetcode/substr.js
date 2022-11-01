var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0;
  let check = {};
  let l = 0;
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    if (check[s[i]]) {
      l = Math.max(l, check[s[i]] + 1);
    }
    longest = Math.max(longest, i - l + 1);
    check[s[i]] = i;
  }
  return longest;
};

console.log(lengthOfLongestSubstring("abba"))