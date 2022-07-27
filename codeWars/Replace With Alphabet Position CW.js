// function alphabetPosition(text) {
//     const alphaNumeric = {
//         a: 1, b: 2, c: 3, d: 4,
//         e: 5, f: 6, g: 7, h: 8,
//         i: 9, j: 10, k: 11, l: 12,
//         m: 13, n: 14, o: 15, p: 16,
//         q: 17, r: 18, s: 19, t: 20,
//         u: 21, v: 22, w: 23, x: 24,
//         y: 25, z: 26
//     }
//
//     let arrString = text.toLowerCase().split("");
//     let numericString = ""
//
//     for (let index in arrString) {
//         for (let key in alphaNumeric) {
//             if (arrString[index] === key) {
//                 numericString += alphaNumeric[key] + " "
//             }
//         }
//     }
//
//     return numericString.trim();
// }
//
//
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))


//=====================second===================
// function alphabetPosition(text) {
//     return text
//         .toLowerCase()
//         .match(/[a-z]/gi)
//         .map( (c) => c.charCodeAt() - 96)
//         .join(' ');
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))
