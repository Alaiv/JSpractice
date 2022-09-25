function dontGiveMeFive(start, end){
	let count = 0;
	for(let i = start; i <= end; i++ ){
		count += 1;
		if(String(i).includes('5')){
			count -= 1;
		}
	}
  return count;
}

console.log(dontGiveMeFive(1, 22));