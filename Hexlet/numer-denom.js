const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const makeRational = (num, den) => {
    const gcd = getGcd(num, den);

    const [n, d] = [num / gcd, den / gcd];
    return {num: n, den: d};
};

const getNumer = (rat) => {
    return rat.num;
}

const getDenom = (rat) => {
    return rat.den;
}

const getCommonDenom = (rat1, rat2) => {
    let num1 = getNumer(rat1);
    let num2 = getNumer(rat2);
    let common = getDenom(rat1);

    if (getDenom(rat1) !== getDenom(rat2)) {
        const den1 = getDenom(rat1);
        const den2 = getDenom(rat2);
        const com = den1 * den2;
        const [n1, n2] = [num1 * den2, num2 * den1];
        num1 = n1;
        num2 = n2;
        common = com;
    }
    return [num1, num2, common];
}

const add = (rat1, rat2) => {
   const [num1, num2, common] = getCommonDenom(rat1, rat2);
    return makeRational(num1 + num2, common);
}

const sub = (rat1, rat2) => {
    const [num1, num2, common] = getCommonDenom(rat1, rat2);
    return makeRational(num1 - num2, common);
}


const boi = makeRational(3, 4);
const boi2 = makeRational(2, 5);

console.log(add(boi, boi2));
const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

