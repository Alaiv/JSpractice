var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
        const [f1,] = a;
        const [f2,] = b;
        return f1 - f2;
    })

// with reduce
    const res = intervals.slice(1).reduce((acc, [v1, v2]) => {
            const j = acc.length - 1;
            if ((acc[j][0] === v1 || acc[j][1] > v1)) {
                acc[j] = [v1, Math.min(v2, acc[j][1])];
            } else {
                acc.push([v1, v2])
            }
        return acc;
    }, [intervals[0]])

    return intervals.length - res.length;

// with fori cycle
    // const res = [intervals[0]];

    // for (let i = 1; i < intervals.length; i++) {
    //     const j = res.length - 1;

    //     if (res[j][0] === intervals[i][0] || res[j][1] > intervals[i][0]) {
    //         res[j] = [res[j][0], Math.min(res[j][1], intervals[i][1])];
    //     } else {
    //         res.push(intervals[i])
    //     }
    // }

    // return intervals.length - res.length;
};
