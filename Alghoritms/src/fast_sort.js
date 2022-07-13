const arr = [1, 7, 2, 3, 44, 52,  4, 5, 6, 8, -2, 113,  9, 10, 11, 21, 14, 20, 17];
let count = 0;

function quickSort(array) {
    if(array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        count++
        if(i === pivotIndex)
            continue
        if(array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))
console.log(count);