const matrix = [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
]

function perimetr(matrix) {
    let p = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 'X') {
                console.log(i + ' I')
                console.log(j + ' J')
                p += i === 0 || matrix[i - 1][j] === 'O'
                p += j === 0 || matrix[i][j - 1] === 'O'
                p += i === matrix.length - 1 || matrix[i + 1][j] === 'O'
                p += j === matrix[i].length - 1 || matrix[i][j + 1] === 'O'
            }
        }
    }

    return p;
}

console.log(perimetr(matrix))