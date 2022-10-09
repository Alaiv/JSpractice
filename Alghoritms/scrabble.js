const scrabble = (str, word) => {
    if (str.length < word.length) return false;
    const obj1 = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        obj1[char] = (obj1[char] ?? 0) + 1;
    }

    for (const char of word.toLowerCase()) {
        if (obj1[char] === 0 || obj1[char] === undefined) {
            return false;
        }
        obj1[char] = obj1[char] - 1;
    }
    return true;
};

console.log(scrabble('scriptingjava', 'JavaScript'))