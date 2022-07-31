function maxSumDig(nmax, maxsm) {
    const numArr = [];
    const plusArr = [];
    const minusArr = []
    let minNumber = 0;

    for (let i = 1000; i <= nmax; i++) {
        if (i < 10000) {
            if ((+i.toString()[0] + +i.toString()[1] + +i.toString()[2] + +i.toString()[3]) <= maxsm) {
                numArr.push(Number(i.toString()[0] + i.toString()[1] + i.toString()[2] + i.toString()[3]))
            }
        } else {
            if ((+i.toString()[0] + +i.toString()[1] + +i.toString()[2] + +i.toString()[3]) <= maxsm
                && (+i.toString()[1] + +i.toString()[2] + +i.toString()[3] + +i.toString()[4]) <= maxsm) {
                numArr.push(Number(i.toString()[0] + i.toString()[1] + i.toString()[2] + i.toString()[3] + i.toString()[4]))
            }
        }
    }

    const sum = numArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    let avg = Math.ceil(sum / numArr.length)

    for (let i of numArr) {
        if (i - avg < 0) {
            minusArr.push(i - avg)
        } else if (i - avg > 0) {
            plusArr.push(i - avg)
        }
    }

    const minPlus = (Math.min(...plusArr))
    const minMinus = (Math.max(...minusArr))
    if (minPlus < (minMinus * -1)) {
        minNumber = minPlus
    } else {
        minNumber = minMinus
    }

    let minNum = avg + minNumber

    return [numArr.length, minNum, sum]

}

console.log(maxSumDig(5000, 6))