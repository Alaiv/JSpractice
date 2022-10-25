var nextGreatestLetter = function(letters, target) {
  let start = 0;
  let end = letters.length - 1;
  let result = [];

  while (start <= end) {
    let middle = Math.floor((end + start) / 2);

    if (target === letters[middle]) {
      start = middle + 1;
    }else if (target > letters[middle]) {
      start = middle + 1;
    } else if (target < letters[middle]) {
          result.push(letters[middle]);
      end = middle - 1;
    }
  }
  return result[result.length - 1] || letters[0];
};

console.log(nextGreatestLetter(['a', 'b', 'c', 'f', 'j'], 'a'))