const magic = (...args) => {
  const res = args.reduce((acc ,v) => acc += v, 0)
  const sum = (...secArgs) => {
    return magic(...secArgs, res)
  }
  sum.valueOf = () => res;
  return sum;
};

console.log(magic(12, 3)(4, 6, 7)(3, 2, 1) == 38)