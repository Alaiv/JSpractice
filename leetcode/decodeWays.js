function numDecodings(s: string): number {
    const dp = {[s.length]: 1};
    const digs = ['0', '1', '2', '3', '4', '5', '6'];
    const dfs = (i) => {
        if (dp[i] !== undefined) return dp[i];
        if (s[i] === '0') return 0;

        let res = dfs(i + 1);
        if ((i + 1 < s.length) && (s[i] === '1' || s[i] === '2' 
                && digs.includes(s[i + 1]))) {
            res += dfs(i + 2);
        }
        dp[i] = res;
        return res;
    }

    return dfs(0);
};
