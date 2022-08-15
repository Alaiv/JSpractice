function modifyMultiply(str, loc, num) {
    //fill
    let word = str.split(' ')[loc]
    let result = '';
    for (let i = 0; i < num; i++) {
        result === '' ? result += word : result += '-' + word
    }
    return result
}

console.log(modifyMultiply("This is a string", 3, 5))