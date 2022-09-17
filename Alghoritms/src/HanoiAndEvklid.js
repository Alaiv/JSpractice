//hanoi alg
const hanoi = (height, from, to) => {
    if(height === 1) {
        console.log("с %d на %d", from, to);
        return;
    }

    const temp = 6 - from - to;
    hanoi(height - 1, from, temp);
    console.log("с %d на %d", from, to);
    hanoi(height - 1, temp, to);
}

console.log(hanoi(3, 1, 2))



// evlikd gcd
// const getGcd = (n1, n2) => {
//     if(n1 === n2) {
//         return n1;
//     }
//     let res = n1 > n2 ? n1 - n2 : n2 - n1;
//     return getGcd(n2, res)
// }
//
//evklid gcd ver 2
// const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

// console.log(getGcd(38,28))
