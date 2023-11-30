import matrixUtils from "./matrix.js"

const utils = matrixUtils();
const random = () => Math.round(Math.random() * (9 - 1) + 1);

const matrix = utils.createMatrix({size: 6, sizeRow: 4}, (row, x, y) => {
    row[y] = random();
    return row
})


let transposeMatrix = []

for (let x in matrix) {
    for (let y in matrix[x]) {
        if (typeof transposeMatrix[y] == 'undefined') {
            transposeMatrix[y] = [];
        }

        transposeMatrix[y][x] = matrix[x][y]
    }
}

console.log('\nTranspose:\n\n');

for (let y in transposeMatrix)
    console.log(utils.join(transposeMatrix[y], '  '), '\n');