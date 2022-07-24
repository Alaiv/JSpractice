const numbers = {
    "zero": 0, "one": 1,
    "two": 2, "three": 3,
    "four": 4, "five": 5,
    "six": 6, "seven": 7,
    "eight": 8, "nine": 9,
    "ten": 10, "eleven": 11,
    "twelve": 12, "thirteen": 13,
    "fourteen": 14, "fifteen": 15,
    "sixteen": 16, "seventeen": 17,
    "eighteen": 18, "nineteen": 19,
    "twenty": 20, "thirty": 30,
    "forty": 40, "fifty": 50,
    "sixty": 60, "seventy": 70,
    "eighty":80, "ninety": 90,
    "hundred": 100, "thousand": 1000,
    "million": 1000000
}
let finalNum = 0;

function parseInt(string) {
    let arr = []
    let strArr = string.split(/[\s-]/)
    for(let index in strArr) {
        for(let key in numbers) {
            if(strArr[index] === key) {
                arr.push(numbers[key])
            }
        }
    }
    if(arr[1] === 1000000) {
        return 1000000
    }
    console.log(arr)
    if(arr.length === 1) {
        return arr[0]
    } else if (arr.length === 2 && arr[1] !== 100 && arr[1] !== 1000) {
        return  arr[0] + arr[1]
    } else if(arr.length === 2 && arr[1] === 100 || arr.length === 2 && arr[1] === 1000) {
        return arr[0] * arr[1]
    } else if(arr.length === 3 && arr[2] !== 1000 && arr[2] !== 100) {
        return arr[0] * arr[1] + arr[2]
    } else if(arr.length === 4 && arr[2] !== 100 && arr[2] !== 1000 && arr[3] !== 100 && arr[3] !== 1000) {
        return arr[0] * arr[1] + arr[2] + arr[3]
    }else if(arr.length === 5 && arr[1] === 1000 && arr[4] === 100) {
        return (arr[0] * arr[1]) + arr[2] + arr[3] * arr[4]
    } else if (arr.length === 5 && arr[1] === 100 && arr[4] === 1000) {
        return (arr[0] * arr[1] + arr[2] + arr[3]) * arr[4]
    } else if(arr.length === 6 && arr[1] === 100 && arr[4] === 1000) {
        return (arr[0] * arr[1] + arr[2] + arr[3]) * arr[4] + arr[5]
    } else if (arr.length === 6 && arr[1] === 1000 && arr[4] === 100) {
        return (arr[0] * arr[1]) + arr[2] + arr[3] * (arr[4] + arr[5])
    } else if ((arr.length === 7 && arr[1] === 1000 && arr[4] === 100)) {
        return (arr[0] * arr[1]) + arr[2] + arr[3] * arr[4] + (arr[5] * arr[6])
    }else if(arr.length === 7 && arr[1] === 100 && arr[4] === 1000) {
        return (arr[0] * arr[1] + arr[2] + arr[3]) * arr[4] + (arr[5] * arr[6])
    } else if(arr.length === 8 || arr.length === 9 && arr[7] === "and" && arr[1] === 100 && arr[4] === 1000) {
        return (arr[0] * arr[1] + arr[2] + arr[3]) * arr[4] + (arr[5] * arr[6]) + arr[7]
    } else if (arr.length === 8 || arr.length === 9 && arr[7] === "and" && arr[1] === 1000 && arr[4] === 100) {
        return (arr[0] * arr[1]) + arr[2] + arr[3] * arr[4] + (arr[5] * arr[6]) + arr[7]
    } else if (arr.length === 6 && arr[1] === 1000 && arr[3] === 100) {
        return (arr[0] * arr[1]) + arr[2] * arr[3] + arr[4] + arr[5]
    } else if (arr.length === 6 && arr[1] === 100 && arr[3] === 1000) {
        return  (arr[0] * arr[1] + arr[2]) * arr[3] + arr[4] + arr[5]
    } else if (arr.length === 7 && arr[2] === 1000) {
        return (arr[0] + arr[1]) * arr[2] + (arr[3] * arr[4] + arr[5] + arr[6])
    } if (arr.length === 3 && arr[2] === 1000 && arr[1] !== 100|| arr.length === 3 && arr[2] === 100 && arr[1] !== 1000) {
        return (arr[0] + arr[1]) * arr[2]
    } else if (arr.length === 10 && arr[7] === "and" || arr.length === 9 && arr[7] !== "and") {
        return (arr[0] * arr[1] + arr[2] + arr[3]) * arr[4] + (arr[5] * arr[6]) + arr[7] + arr[8]
    } else if (arr.length === 3 && arr[1] === 100 && arr[2] === 1000) {
        return arr[0] * arr[1] * arr[2]
    }else if (arr.length === 4 && arr[1] === 100 && arr[2] === 1000) {
        return arr[0] * arr[1] * arr[2] + arr[3]
    }else if (arr.length === 4 && arr[1] === 100 && arr[3] === 1000) {
        return (arr[0] * arr[1] + arr[2]) * arr[3]
    }else if (arr.length === 5 && arr[1] === 100 && arr[2] === 1000) {
        return arr[0] * arr[1] * arr[2] + arr[3] * arr[4]
    }
}

console.log(parseInt('one million'));



//===============================Second==========================

// function parseInt(string) {
//     var arr = string.split(/[\s-]/);
//     var result = 0;
//     var helper = {
//         zero: 0,
//         one: 1,
//         two: 2,
//         three: 3,
//         four: 4,
//         five: 5,
//         six: 6,
//         seven: 7,
//         eight: 8,
//         nine: 9,
//         ten: 10,
//         eleven: 11,
//         twelve: 12,
//         thirteen: 13,
//         fourteen: 14,
//         fifteen: 15,
//         sixteen: 16,
//         seventeen: 17,
//         eighteen: 18,
//         nineteen: 19,
//         twenty: 20,
//         thirty: 30,
//         forty: 40,
//         fifty: 50,
//         sixty: 60,
//         seventy: 70,
//         eighty: 80,
//         ninety: 90,
//         million: function (num) {
//             result = num * 1000000;
//             return 0;
//         },
//         thousand: function (num) {
//             result = num * 1000;
//             return 0;
//         },
//         hundred: function (num) {
//             return num * 100;
//         },
//         and: 0
//     };
//     var lastNum = arr.reduce(function (previousValue, currentValue) {
//         if (typeof helper[currentValue] === 'number') {
//             console.log(currentValue)
//             return previousValue += helper[currentValue];
//         } else {
//             return helper[currentValue](previousValue);
//         }
//     }, 0);
//     return lastNum
// }
//
// console.log(parseInt('seven hundred twenty thousand one'));

