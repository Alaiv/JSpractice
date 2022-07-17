function truthCheck(collection, pre) {
    let newArr = [...collection];
    let count = 0;
    for(let i = 0; i < newArr.length; i++) {
        if(Boolean(newArr[i][pre]) === true) {
            count += 1;
        }
    }
    if(count === newArr.length) {
        return true;
    } else {
        return false;
    }
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: true},
    {name: "Camperbot", role: "Bot", isBot: true}], "name"));;