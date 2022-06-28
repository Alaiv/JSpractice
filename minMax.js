function highAndLow(numbers) {
	const numbs = numbers.split(" ");
	let maxNum = numbs[0];
	let minNum = numbs[0];
	
	for(let num of numbs ){
	  if(+num < minNum){
		 minNum = num;
	  } else if(+num > maxNum){
		 maxNum = num;
	  }
	}
	return (maxNum + " " + minNum);
 }