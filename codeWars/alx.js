const check = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[arr.length - 1] === arr[i] && arr[i] === num) {
            return false;
        } else if (num < arr[i]) {
            return false;
        }
    }
    return true;
}

function pickPeaks(arr) {
    const result = {pos: [], peaks: []};
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            result["pos"].push(i);
            result["peaks"].push(arr[i]);
        }

        if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
            if (check(arr.slice(i), arr[i])) {
                result["pos"].push(i);
                result["peaks"].push(arr[i]);
            }
        }
    }
    return result;
}

console.log(pickPeaks([
    3, 2, 3, 6, 4, 1,
    2, 3, 2, 1, 2, 2,
    2, 1
]));