var isHappy = function(n, counter = 0) {
  if (counter >= 20) return false;
  const num = (n + '').split('');
  const newNum = num.reduce((acc, val) => acc += val ** 2,0)
  return newNum === 1 ? true : isHappy(newNum, counter + 1);
};