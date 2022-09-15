//unique pairs
const solution = (arr1, k) => {
    const check = [];
    const arr = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = i + 1; j < arr1.length; j++) {
            check.push([arr1[i], arr1[j]])
        }
    }
    return check
        .filter(val => Math.abs(val[0] - val[1]) === k)
        .map(val => val.join(''))
        .reduce((acc, v) => {
            arr.indexOf(v) === -1 ? acc += 1 : 0;
            arr.push(v)
            return acc;
        }, 0);
}
console.log(solution([1,2,3,4,4,2,2,1], 0))

//missing num
const solution = (arr) => {
    for(let i = 1; i <= arr[arr.length - 1]; i++) {
        if(!arr.includes(i)) return i;
    }
    return 'we good'
};
console.log(solution(1,2,3,4,5,6,7,8,9,10))
