function checkCashRegister(price, cash, cid) {

    let object = {
        "ONE HUNDRED": 100,
        "TWENTY": 20,
        "TEN": 10,
        "FIVE": 5,
        "ONE": 1,
        "QUARTER": 0.25,
        "DIME": 0.1,
        "NICKEL": 0.05,
        "PENNY": 0.01,
    }

    let cashX = [];
    let nameX = [];
    let resultChange = [];
    let amount = 0;
    let newObj = []
    let finalCheckArr = []
    let countOfChangeLeft = 0;
    let moneyInDrawer = cid;
    let finalFinal = []
    let change = cash - price;
    let anotherChange = cash - price;


    for (let i in cid) {
        amount += cid[i][1]
    }

    if (amount === anotherChange) {
        return {status: "CLOSED", change: cid};
    } else if (amount < anotherChange) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    for (let i in object) {
        while (object[i] <= change.toFixed(2)) {
            cashX.push(object[i])
            nameX.push(i)
            change = change - object[i];
        }
    }

    for (let i in cashX) {
        newObj.push([nameX[i], cashX[i]])
    }

    let resuluto = newObj.reduce((a, c) => (a[c[0]] = (a[c[0]] || 0) + c[1], a), {})

    for (let i in resuluto) {
        resultChange.push([i, (resuluto[i])])
    }

    for (let i = resultChange.length - 1; i >= 0; i--) {
        for (let j in cid) {
            if (resultChange[i][0] === cid[j][0]) {
                countOfChangeLeft = cid[j][1] - resultChange[i][1];
                finalCheckArr.push([resultChange[i][0], countOfChangeLeft])
            }
        }
    }

    if (finalCheckArr[0][1] < 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    for (let i = finalCheckArr.length - 1; i >= 0; i--) {
        while (finalCheckArr[i][1] < 0) {
            finalCheckArr[i - 1][1] = finalCheckArr[i][1] + finalCheckArr[i - 1][1]
            finalCheckArr[i][1] = 0
        }
    }

    for (let i = moneyInDrawer.length - 1; i >= 0; i--) {
        for (let j = finalCheckArr.length - 1; j >= 0; j--) {
            if (moneyInDrawer[i][0] === finalCheckArr[j][0]) {
                let change = moneyInDrawer[i][1] - finalCheckArr[j][1]
                finalFinal.push([moneyInDrawer[i][0], Number(change.toFixed(2))])
            }
        }
    }

    return {status: "OPEN", change: finalFinal}
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));