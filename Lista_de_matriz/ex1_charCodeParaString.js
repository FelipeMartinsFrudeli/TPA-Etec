import matrixUtils from "./matrix.js"

const utils = matrixUtils();
let counter = 0;

utils.createMatrix({size: 4, sizeRow: 8}, (row, x, y) => {
    
    const character = String.fromCharCode(65 + counter);
    counter++;
    
    row[y] = character;

    return row
})