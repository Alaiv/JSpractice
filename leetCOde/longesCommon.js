var longestCommonPrefix = function(strs) {
    let word = strs[0];
    let subs = strs[0].length;
    let i = 1;

    while (i < strs.length && subs > 0) {
        const substr = strs[i].substring(0, subs);
        if (word.startsWith(substr)) {
            word = substr;
            i++;
        } else {
            subs -= 1;
        }
    }
    return word.substring(0, subs);
};

console.log(longestCommonPrefix(["ab", "a"]))