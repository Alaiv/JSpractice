const arr = [1, 7, 2, 3, 44, 52,  4, 5, 6, 8, -2, 113,  9, 10, 11, 21, 14, 20, 17];
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length ; j++) {
            if(array[j+1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j+1]
                array[j+1] = tmp;
            }
            count++
        }
    }
    return array;
}

console.log(bubbleSort(arr))