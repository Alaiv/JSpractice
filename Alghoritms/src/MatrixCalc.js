const matrixCalc = {
    _sumSubHelper(minM1, minM2, type) {
        const result = [];
        for (let i = 0; i < minM1.length; i++) {
            result.push(
                type === '+'
                    ? minM1[i] + minM2[i]
                    : minM1[i] - minM2[i]
            )
        }
        return result
    },

    _multiplyHelper(v, p, arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += v[i] * arr[i][p]
        }
        return result
    },

    subSumMatrix(m1, m2, type = "+") {
        if (m1.length !== m2.length || m1[0].length !== m2[0].length) {
            return type === '+' ? 'Cложение невозможно' : 'Вычитание невозможно'
        }
        const resultMatrix = [];

        m1.forEach((v, i) => resultMatrix.push(this._sumSubHelper(m1[i], m2[i], type)))

        return resultMatrix
    },

    multiplyMatrix(m1, m2) {
        const result = [];
        const [firstM1Row] = m1
        const [firstM2Row] = m2
        let tempArr = [];
        let counter = 0;
        if (firstM1Row.length !== m2.length) return 'Матрицы не умножаются'

        for (let v of m1) {
            let p = 0;
            while (p !== firstM2Row.length) {
                counter = this._multiplyHelper(v, p, m2)
                tempArr.push(counter)
                p += 1;
            }
            result.push(tempArr)
            tempArr = [];
        }
        return result;
    },

    singleNumMulti(m, val = 1) {
        return m.map(n => n.map(r => r * val))
    }
}

const mx1 = [
    [50, 42, 18, 65],
    [65, 37, 25, 82],
    [120, 29, 23, 75],
    [42, 36, 19, 72],
]

const mx2 = [
    [12500],
    [31500],
    [40500],
    [37500],
]
const matrixC = matrixCalc.multiplyMatrix(mx1, mx2)

console.log(matrixC.flat().reduce((sum, val) => sum += val))








