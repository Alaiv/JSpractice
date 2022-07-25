function solution(a) {
    let index = 0;

    if (a.length === 1 && a[0] !== 0) {
        return 1
    } else if (a[0] < 0) {
        return 1
    } else if (a[0] === 0) {
        return -1
    }


    let newArr = []

    for (let i = 0; i < a.length; i += a[i]) {
        index++
        newArr.push(a[i])
        newArr.forEach((value, index) => {
            if (value[index] + value[index - 1] === 0) {
                return -1
            }
        })
        if (a[i] === 0) {
            return -1
        } else if (a[i] < 0 && (a[i] * -1) > i) {
            break
        } else if (index > a.length) {
            return -1
        }
    }
    return index
}

console.log(solution([5, 1, 5, 3, -2, 2, 2, 5, 8, -3, -4, -2, 9, 5, 3, 5, -4, -1, 9, 0, 8, 6, -3, 8, -2, 9, 7, 6, -4, 0]))
// console.log(solution([1, 1, -2, 1, 1]))