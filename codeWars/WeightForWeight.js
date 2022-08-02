function orderWeight(strng) {

	const strArr = strng.trim().split(" ")
	const newArr = [];
	const finalArr = [];
	let counter = 0
	for(let i of strArr) {
		for(let j of i) {
			counter += Number(j)
		}
		newArr.push([i, counter])
		counter = 0;
	}

	let sortedArr = newArr.sort((a, b) => {
		return a[1] - b[1] || (a[0] < b[0] ? - 1 : a[0] > b[0] ? 1 : 0)
	})
	
	sortedArr.forEach(val => finalArr.push(val[0]))	
	return finalArr.join(' ')
}

console.log(orderWeight("372009 48 389307 176 384026 64 9005 90 412284 154 114529 134 264586 6 77377 193 104242 97 63014 94 80"));

//===================second======================

function calc(num) {
	return num.split('').reduce((prev, curr) => prev + +curr ,0)
}

function orderWeight2(strng) {
	return strng.split(' ').sort((a, b) => {
		return calc(a) - calc(b) || (a < b ? -1 : a > b ? 1 : 0)
	}).join(' ')
	
}

console.log(orderWeight2("372009 48 389307 176 384026 64 9005 90 412284 154 114529 134 264586 6 77377 193 104242 97 63014 94 80"));
