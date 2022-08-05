// function addAll() {
//     // let sum = 0;
//     // for(let i of arguments) {
//     //     sum += i
//     // }
//     // return sum
//
//
// }
//
// console.log(addAll(2, 5, 6, 7, 2, 3, 4))
//

// function sumAllPrimes(v) {
//     // let sum = 0;
//     // for(let i = 2; i <= v; i++) {
//     //     let check = true
//     //     for(let j = 2; j < v; j++) {
//     //         if(i % j === 0 && j !== i) {
//     //             check = false
//     //         }
//     //     }
//     //     if(check === true) {
//     //         sum += i
//     //     }
//     // }
//     // return sum
//
//     function checkForPrime(i) {
//         for(let j = 2; j < i; j++) {
//             if(i % j === 0) {
//                 return false
//             }
//         }
//         return true
//     }
//
//     let total = 0;
//     for (let i = 2; i <= v; i++) {
//         if(checkForPrime(i)) {
//             total += i
//         }
//     }
//     return total
// }
//
// console.log(sumAllPrimes(10))




// function seekAndDestroy(arr) {
//
//     // function helper(a, args) {
//     //       for(let i of args) {
//     //           if(a === i) {
//     //               return  false
//     //           }
//     //       }
//     //     return true
//     // }
//
//     // let cheker = [...arguments][0]
//     let args = [...arguments]
//     //
//     // return cheker.filter(a => {
//     //     if(args.indexOf(a) === -1) {
//     //         return true
//     //     }
//     //     return false
//     // })
//     function filterArr(arr) {
//         return args.indexOf(arr) === -1
//     }
//
//    return arr.filter(filterArr)
// }
//
// console.log(seekAndDestroy([1, 2, 3, 2, 6, 5, 'hello'], 2, 6))


// function sortByHeight(arr) {
//     // return arr.sort((a, b) => {
//     //     if(a !== -1 && b !== -1) {
//     //         return a - b
//     //     }
//     // })
//
//     const arr1 = []
//     const arr2 = []
//     arr.forEach((val, i) => {
//         if(val === -1) {
//             arr1.push(i)
//         } else {
//             arr2.push(val)
//         }
//     })
//
//     const sortArr = arr2.sort((a, b) => {
//         return a - b;
//     })
//
//    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, arr[val]))
//     return sortArr
// }
//
// console.log(sortByHeight([-1, 170, 160, 150, -1, -1, 180]))


// function missLetters(qw) {
//     // let char = '';
//     // for (let i = 0; i < qw.length; i++) {
//     //     if(qw.charCodeAt(i) - qw.charCodeAt(i + 1) === -2) {
//     //         return char = String.fromCharCode(qw.charCodeAt(i) + 1);
//     //     }
//     // }
//     // return undefined
//
//     //===============Second==========
//     // let compare = qw.charCodeAt(0)
//     // let missing;
//     //
//     //     qw.split('').map((char, i) => {
//     //      if(qw.charCodeAt(i) === compare) {
//     //          compare++
//     //      } else {
//     //          missing = String.fromCharCode(compare)
//     //      }
//     //  })
//     //
//     // return missing
//
// }
//
// console.log(missLetters('abcdeg'))


function evenOddSums(arr) {
    let even = 0;
    let odd = 0;

    arr.forEach((a) => {
        a % 2 === 0 ? even += a : odd += a
    })
    return [].concat(even, odd)

}

console.log(evenOddSums([50, 60, 60, 33, 45, 71, 6]))