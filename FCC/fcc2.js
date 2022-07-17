function smallestCommons(arr) {
    let min;
    let max;

    if(arr[0] < arr[1]) {
        min = arr[0]
        max = arr[1]
    } else {
        min = arr[1];
        max = arr[0]
    }

    let numberDivisors = max - min + 1;

    let upperbounds = 1;
    for(let i = min; i <= max; i++) {
        upperbounds *= i;
    }

    for(let multi = 5; multi <= upperbounds; multi += 5) {
        let divisorCount = 0;
        for(let i = min; i <= max; i++) {
            if(multi % i === 0) {
                divisorCount += 1;
            }
        }
        if(divisorCount === numberDivisors) {
            return multi;
        }
    }
}

console.log(smallestCommons([1, 5]));



