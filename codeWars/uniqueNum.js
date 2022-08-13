const arr = [1, 1, 2, 2, 3, 4, 4];


function returnMap(arr) {
    let newArr = arr.filter(val => {
        let x = new RegExp(val, 'g')
        return arr.join('').match(x).length <= 1
    })
    return +newArr[0]
}

// function returnMap(arr) {
//  return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))
//}


// function returnMap(arr) {
//     const array = [];
//     const dictionary = {};
//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         dictionary[num] = dictionary[num] ? dictionary[num] + 1 : 1
//     }
//     for(let key in dictionary) {
//         if(dictionary[key] === 1) {
//             array.push(key)
//         }
//     }
//     return +array.join()
// }

console.log(returnMap(arr))