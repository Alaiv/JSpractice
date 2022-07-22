function stockList(listOfArt, listOfCat) {
    let arr = [];
    let overallSum = 0;
    for (let i in listOfCat) {
        let sum = 0;
        for (let j in listOfArt) {
            let numForSum = Number(listOfArt[j].match(/\d/g).join(""))
            if (listOfCat[i] === listOfArt[j][0]) {
                sum += numForSum;
                overallSum += numForSum;
            }
        }
        arr.push(`(${listOfCat[i]} : ${sum})`)
    }
    if(overallSum === 0) {
        return ""
    }
    return arr.join(" - ")
}


 console.log(stockList( ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],["x", "s"]))
// console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]))