var insert = function (intervals, newInterval) {
    if (!intervals.length) {
        return [newInterval];
    }
    const firstEnter = (f, first, s, second) => {
        return f >= first && f <= second || s >= first && s <= second;
    }

    const secondEnter = (f, first, s, second) => {
        return first >= f && first <= s || second >= f && second <= s
    }

    const result = [];
    let currentInterval = newInterval;


    for (let i = 0; i < intervals.length; i++) {
        const [f, s] = currentInterval;
        const [first, second] = intervals[i];

        if (currentInterval[1] < intervals[i][0]) {
            result.push(currentInterval);
            return [...result, ...intervals.slice(i)];
        } else if (currentInterval[0] > intervals[i][1]) {
            result.push(intervals[i]);
        } else if (firstEnter(f, first, s, second) || secondEnter(f, first, s, second)) {
            const newInt = [Math.min(f, first), Math.max(s, second)];
            currentInterval = newInt;
        }
        //or just use else without helpers
    }

    result.push(currentInterval);

    return result;
};