const items = [
    { name: '4', weight: 4, cost: 4 },
    { name: '1', weight: 1, cost: 1.5 },
    { name: '3', weight: 3, cost: 2 },
];


const pocketDynamic = (w1, w2) => {
    const matrix = Array(w1.length + 1)
        .fill(null)
        .map(() => Array(w2 + 1).fill(null))

    for (let i = 0; i <= w2; i++) {
        matrix[0][i] = i;
    }

    for (let j = 0; j <= w1.length; j++) {
        matrix[j][0] = j;
    }

    for (let i = 1; i <= w1.length; i++) {
        for (let j = 1; j <= w2; j++) {
            if(w1[i - 1].weight > j) {
                matrix[i][j] = i - 1 === 0 ? 0 : matrix[i - 1][j]
            } else if(w1[i - 1].weight === j){
                matrix[i][j] = w1[i - 1].cost
            } else {
                let prev = matrix[i - 1][j];
                let formula = matrix[i - 1][j - w1[i - 1].weight] + w1[i - 1].cost;
                matrix[i][j] = Math.max(prev, formula)
            }
        }
    }


    return matrix[w1.length][w2]
}

console.log(pocketDynamic(items, 1))


