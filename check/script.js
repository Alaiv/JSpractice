var isPP = function (n) {
    let arr = [];

    for (let m = 2; m * m <= n; m++) {
        for (let k = 2; m ** k <= n; k++) {
            if (m ** k === n && m > 1 && k > 1) {
                if (arr.length < 2) {
                    arr.push(m, k)
                }
            }
        }
    }
    if(arr.length === 0) {
        return null
    }
    return arr
}

console.log(isPP(1908029761))