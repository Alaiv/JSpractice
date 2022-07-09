function gimme (triplet) {

    for(let i in triplet) {
        if(triplet[0] > triplet[1] && triplet[0] < triplet[2]
           || triplet[0] < triplet[1] && triplet[0] > triplet[2]) {
            return 0;
        } else if (triplet[1] > triplet[0] && triplet[1] < triplet[2]
            || triplet[1] < triplet[0] && triplet[1] > triplet[2]) {
            return 1;
        } else {
            return 2;
        }
    }
}

// console.log(gimme([3, 2, 1]))
//
//
// function gimme(a) {
//     return a.indexOf(a.slice().sort(function (a, b) {
//         return a - b;
//     })[1])
//
//
// }
//
// console.log(gimme([2, 4, 3]))