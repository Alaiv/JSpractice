function oneTwoThree(n) {
    if(n === 0) {
        return ['0', '0']
    }
    let str = ''
    let strTwo = ''
    let num = n;
    if(n >= 10) {
        while (num >= 9) {
            num -= 9
            str += 9
        }
        str += num !== 0 ? num + '' : ''
    } else {
        str = n + ''
    }
    for(let i = 0; i < n; i++) {
        strTwo += 1
    }
    return [str, strTwo]
}

console.log(oneTwoThree(1))


// function oneTwoThree(n) {
//     console.log(n % 9)
//     return ["9".repeat(n / 9) + (n % 9 ? n % 9 : "") || "0", "1".repeat(n) || "0"]
// }
//
// console.log(oneTwoThree(40))