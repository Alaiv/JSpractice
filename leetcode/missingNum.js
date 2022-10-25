const s = (arr) => {
  const val = new Array(arr.length + 1).fill(-1);
  for (let i = 0; i <= arr.length ; i++) {
    val[arr[i]] = 1;
  }
  return val.indexOf(-1);
};

console.log(s([0, 1, 2, 3, 5, 6, 7]))