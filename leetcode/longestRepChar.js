var characterReplacement = function(s, k) {
    const chars = {};
    let left = 0;
    let right = 0;
    let maxLen = 0;
    let result = 0;


    while (right < s.length) {
        chars[s[right]] = (chars[s[right]] ?? 0) + 1;
        for(let k in chars) {
            if (chars[k] > maxLen) {
                maxLen = chars[k];
            }
        }
        const len = (right - left + 1);
        if ((len - maxLen) <= k) {
            result += 1;
        } else {
            chars[s[left]] -= 1;
            left++;
        };
        right++;
    };
    return result;
};

const s = "BAABA", k = 0;

console.log(characterReplacement(s, k));