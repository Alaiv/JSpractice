// function longestWord(wrd) {
// 	let count = 0;
// 	let word = ''
// 	const wArr = wrd.replace(',', '').split(' ');
// 	for(let text of wArr) {
// 		if(text.length > count) {
// 			count = text.length;
// 			word = text
// 		}
// 	}
// 	return word;
// }

// console.log(longestWord('Hellqweqweqwo there, man whatsup'));


// function longestWord(wrd) {
// 	const wordArr = wrd.toLowerCase().match(/[a-z0-9]+/g);

// 	const sorted = wordArr.sort((a, b) => {
// 		return b.length - a.length;
// 	})

// 	const longestWordArr = sorted.filter(word => {
// 		return word.length === sorted[0].length;
// 	})

// 	if(longestWordArr.length > 1) {
// 		return longestWordArr;
// 	} else {
// 		return longestWordArr[0]
// 	}
// }

// console.log(longestWord('Hellqweqweqwo there, man whatsup'));





//chunking

// function chunkArray(arr, split) {
	//=========first
	// const chunkedArr = [];

	// let i = 0;

	// while(i < arr.length) {
	// 	chunkedArr.push(arr.slice(i, i + split))
	// 	i += split;
	// }
	// return chunkedArr;

	//===========second
// 	const chunkedArr = [];

// 	arr.forEach(val => {
// 		const last = chunkedArr[chunkedArr.length - 1];
// 		if(!last || last.length === split) {
// 			console.log(chunkedArr);
// 			chunkedArr.push([val])
// 		} else {
// 			last.push(val)

// 		}
// 		// console.log(last)

// 	})
// 	return chunkedArr
// }


// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));





// function flattenArray(arrays) {
// 	const newArr = [];
// 	let count = 0;
// 	for(let i of arrays) {
// 		for(let j of i) {
// 			newArr.push(j);
// 		}
// 	}

// 	return newArr
// }

// console.log(flattenArray([[1, 2], [3, 4], [5, 6, 7]]));

// function flattenArray(arrays) {
// 	// return arrays.reduce((a, b) => {
// 	// 	return a.concat(b);
// 	// })

// 	//second
// 	// return [].concat.apply([], arrays)

// 	//third
// 	return [].concat(...arrays)
// }

// console.log(flattenArray([[1, 2], [3, 4], [5, 6, 7]]));


//Anagram=============

// function isInagram(str1, str2) {
// 	// const firstWord = str1.toLowerCase().match(/[a-z]/gi)
// 	// const secondWord = str2.toLowerCase().match(/[a-z]/gi)
// 	// let check = true;

// 	// for(let i in firstWord) {
// 	// 	if(secondWord.includes(firstWord[i]) && firstWord.includes(secondWord[i]) && secondWord.length === firstWord.length) {
// 	// 		check = true;
// 	// 	} else {
// 	// 		check = false;
// 	// 	}
// 	// }
// 	// return check;


// 	//=============second


// 	if(formatStr(str1) === formatStr(str2)) {
// 		return true
// 	} else {
// 		return false
// 	}

// }
// //helper func
// function formatStr(str) {
// 	return str
// 		.replace(/[^\w]/g, '')
// 		.toLowerCase()
// 		.split('')
// 		.sort()
// 		.join('')
// }

// console.log(isInagram('Dormitory', 'dirty room###'));


//letter changer

function letterChanges(str) {
	const alpha = ['abcdefghijklmnopqrstuvwxyz'].join('').split('')

	return str.split('').map(a => {
		const alphaChar = alpha.indexOf(a) + 1;

		return a === 'z' ?  a = 'A' : a.match(/[a-z]/)
		 ? alpha[alphaChar].match(/[aeoui]/ig) ? a = alpha[alphaChar].toUpperCase()
		 : a = alpha[alphaChar] :  a = a

	}).join('')

	//===========second=============
	// let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
	// 	if(char === 'z' || char === 'Z') return 'a'
	// 	else {
	// 		return String.fromCharCode(char.charCodeAt() + 1)
	// 	}
	// })

	// newStr = newStr.replace(/[aeiou]/gi, vowel => vowel.toUpperCase());

	// return newStr
}

console.log(letterChanges('hello therz'));