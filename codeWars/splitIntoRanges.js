  function solution(list){
	const newArr = [];
	let counter = 0;

	for(let i = 0; i < list.length; i++) {
		if(list[i] - list[i + 1] !== -1) {
			if(counter === 0) newArr.push(list[i]);
			if(counter === 1) newArr.push(list[i - 1], list[i]), counter = 0;
			if(counter > 1) newArr.push(list[i - counter] + '-' + list[i]), counter = 0;
		}else {
			counter++
		}
	}

	return newArr.join();
  }

  console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));


//================rewiev solutions==========
//   function solution(individualIntegers) {
// 	return individualIntegers
// 	  .reduce(splitIntoRanges, [])
// 	  .map(convertToRange)
// 	  .join(",");
//  }
 
//  function splitIntoRanges(ranges, number) {
// 	if (!ranges.length) {
// 	  ranges.push([number]);
// 	  return ranges;
// 	}
 
// 	var lastRange = ranges[ranges.length - 1];
// 	var lastNumber = lastRange[lastRange.length - 1];
 
// 	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
// 	return ranges;
//  }
 
//  function convertToRange(range) {
// 	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];




// function solution(list){
// 	for(let i = 0; i < list.length; i++) {
// 		let j = i;
// 		while(list[j] - list[j + 1] === -1) j++;
// 		if(j !== i && j - i > 1) list.splice(i, j - i + 1, list[i] + '-' + list[j])
// 	}

// 	return list.join()
//   }

//   console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));