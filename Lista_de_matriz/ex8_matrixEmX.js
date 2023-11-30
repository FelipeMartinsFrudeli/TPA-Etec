import matrixUtils from "./matrix.js"

const utils = matrixUtils();
let size = 11

utils.createMatrix(size, (row, x, y) => {
    row[y] = '·'

    let lastIndex = size - 1
    if (y === x || lastIndex - y === x) {
        row[y] = 'X'
    }

    return row
})