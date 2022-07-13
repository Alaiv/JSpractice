const array = [1, 4, 5, 6, 1, 2, 23, 10, 25];
let count = 0;

function linearSearch(array, item) {
    for(let i = 0; i < array.length; i++) {
        count++;
        if(array[i] === item) {
            return i;
        }
    }
    return null;
}


console.log(linearSearch(array, 23))
console.log("count = " + count)