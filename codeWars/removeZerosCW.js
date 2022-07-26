function removeZeros(array) {

    const length = array.length - 1;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] === "0" || array[j] === 0) {
                if(array[j + 1] === 0 || array[j + 1] === "0") {
                    continue
                }
                let temp = array[j + 1];
                array[j + 1] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}


console.log(removeZeros([1, null, '5', '0', '2', "0", 0, 8, 6, null, false]))