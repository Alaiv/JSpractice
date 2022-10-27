var firstUniqChar = function(s) {
  const res = {}
  for (let i = 0; i < s.length; i++) {
    res[s[i]] = (res[s[i]] ?? 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (res[s[i]] === 1) return i;
  }
  return -1;
};
