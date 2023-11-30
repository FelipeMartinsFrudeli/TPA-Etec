
function createMatrix(params, callback) {

    if (params instanceof Object) {
        var {size, sizeRow} = params;
    } else {
        var size = params;
        var sizeRow = params;
    }

    
    let matrix = [];
    
    for (let x = 0; x < size; x++) {
        
        let row = []
        for (let y = 0; y < sizeRow; y++) {
            row = callback(row, x, y)

        }

        matrix.push(row)
        console.log(join(row, '  '), '\n');
    }

    return matrix;
}

function join(matrix, separator) {
    let matrixToString = '';
    for (let value of matrix) {
        matrixToString += `${value}${separator}`;
    }
    return matrixToString;
}

export default function matrixUtils() {
    return {
        createMatrix,
        join
    }
}