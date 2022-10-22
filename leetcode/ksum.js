var numOfSubarrays = function(arr, k, threshold) {
  let result = 0;
  let count = 0;
  let pointer = 0;
  for (let i = 0; i <= arr.length ; i++) {
    if (i >= k) {
      if (result / k >= threshold) {
        count++;
      }
      result -= arr[pointer];
      pointer++;
    }
    if (i < arr.length) {
      result += arr[i];
    }
  }
  return count;
};


const arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4;

console.log(numOfSubarrays(arr, k, threshold));