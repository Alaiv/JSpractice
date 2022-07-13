function cashFunction(fn) {
    const cash = {}
    return function (n) {
        if(cash[n]) {
            console.log("Кеш", cash[n])
            return cash[n]
        }
        let result = fn(n);
        console.log("Функция", result)
        cash[n] = result;
        return result;
    }
}

function factorial(n) {
    let result = 1
    while (n != 1){
        result *= n
        n -= 1;
    }
    return result
}

const cashFact = cashFunction(factorial);

cashFact(5)
cashFact(4)
cashFact(3)
cashFact(5)
cashFact(3)
cashFact(1)



