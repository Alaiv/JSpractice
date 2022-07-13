const arr = [1, 7, 2, 3, 44, 52,  4, 5, 6, 8, -2, 113,  9, 10, 11, 21, 14, 20, 17];
let count = 0;


function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if(array[j] < array[indexMin]) {
                indexMin = j;
            }
            count++;
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array;
}


console.log(selectionSort(arr))
console.log("count: " + count);
