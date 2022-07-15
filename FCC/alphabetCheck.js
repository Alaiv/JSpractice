function fearNotLetter(str) {
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let firstIndex = alpha.indexOf(str[0])
    let secondIndex = alpha.indexOf(str[str.length - 1]);
    let sliced = alpha.slice(firstIndex, secondIndex + 1);
    for (let i of sliced) {
        if (str.includes(i)) {
            continue
        } else {
            return i;
        }
    }
}

console.log(fearNotLetter("bcdf"));