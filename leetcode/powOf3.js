var isPowerOfThree = function(n) {
  if (n === 1 || n === 3) return true;
  if (n < 3 && n !== 1) return false;
  return isPowerOfThree(n / 9);
};