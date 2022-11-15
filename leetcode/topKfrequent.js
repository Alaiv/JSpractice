var topKFrequent = function (nums, k) {
    const frequency = {};
    const values = [];

    for (const val of nums) {
        frequency[val] = (frequency[val] ?? 0) + 1;
    };

    for (const [i, v] of Object.entries(frequency)) {
        values[v] = values[v] ? [...values[v], +i] : [+i];
    }

    const result = [];

    while (k > 0) {
        const res = values.pop();
        if (res) {
            result.push(...res);
            k -= res.length;
        }
    }
    return result;
};