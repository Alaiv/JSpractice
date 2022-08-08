
function helper(val) {
    for (let i = 2; i < val; i++) {
        if(val % i === 0 || (val + 4) % i === 0 || (val + 6) % i === 0 || (val + 10) % i === 0 || (val + 12) % i === 0 || (val + 16) % i === 0) {
            return false
        }
    }
    return true
}

function findPrimesSextuplet(sumLimit) {
    const formula = [];

    for (let i = 3; i < sumLimit; i++) {
        if(helper(i)) {
           formula[0] = i;
           formula[1] = i + 4;
           formula[2] = i + 6;
           formula[3] = i + 10;
           formula[4] = i + 12;
           formula[5] = i + 16;
            if(formula.reduce((a, v) => a + v) > sumLimit) {
                break;
            }
        }
    }
    return formula
}

console.log(findPrimesSextuplet(2000000))