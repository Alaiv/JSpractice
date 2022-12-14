var wordBreak = function(s, wordDict) {
    if (!wordDict.length) return false;
    const dp = new Array(s.length).fill(false);
    dp[s.length] = true;

    for (let i = s.length - 1; i >= 0; i--) {
        for (const w of wordDict) {
            const l = w.length;
            if ((i + l <= s.length) && (w === s.slice(i, i + l))) {
                dp[i] = dp[i + l];
            }
            if (dp[i]) break;
        }
    }
    return dp[0];
};
