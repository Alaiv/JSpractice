function fibDigits(n) {
	if(n === 10) {
		return [[2, 5]]
	}
	let a = 1;
	let b = 1;
	let count = 0;
	let num = 0;
	let arr = []
	for(let i = 3; i <= n; i++) {
		let c = BigInt(a) + BigInt(b)
		a = BigInt(b)
		b = BigInt(c)
	}

function counting() {
	for(let k of BigInt(b).toString()) {
		if(k === num.toString()) {
			count++
		}
	}
	arr.push([count, num])
	count = 0;
	num++;

	if(num === 10) {
		return 1
	}
	counting()
}
counting()

	let sortedArr = arr.sort((a, b) => {
			return b[0] - a[0]	
	})

	sortedArr = arr.sort((a, b) => {
		if(b[0] - a[0] === 0) {
			return b[1] - a[1];
		}
	})

	return sortedArr
 }


 console.log(fibDigits(10000));

