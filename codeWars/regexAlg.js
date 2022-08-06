function incrementString (strng) {
    if(strng === '') {
        return '1'
    }
    if(strng.match(/\d/gi) === null) {
        return strng + '1'
    }

    let string = strng.split('')
    const strNum = strng.match(/\d/gi)
    let num = (+strng.match(/\d/gi).join('') + 1).toString()
    let count = 1

    if(num.length >= strNum.length) {
        return strng.match(/[a-z]/gi).join('') + num
    }
        for(let i = num.length - 1; i >= 0; i--) {
            string[(string.length - count)] = num[i]
            count++
        }
    return string.join('')
 }

// function incrementString(input) {
//     if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
//     return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
//         var up = parseInt(p2) + 1;
//         console.log(match)
//         console.log(p1)
//         console.log(p2)
//         return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
//     });
// }

console.log(incrementString('foobar00'))