var merge = function(intervals) {
    intervals.sort((a, b) => {
        const [first] = a;
        const [second] = b;
        return first - second;
    })
    const res = [intervals[0]];
    let currRes = 0;

    for (const [cur1, cur2] of intervals.slice(1)) {
        const [prev1, prev2] = res[currRes];

        if (cur1 > prev2) {
            res.push([cur1, cur2]);
            currRes++;
        } else {
            res[currRes] = [Math.min(cur1, prev1), Math.max(cur2, prev2)];
        }
    }

    return res;
};
