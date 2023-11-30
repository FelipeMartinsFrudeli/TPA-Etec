
let input = '';

for (let idx in process.argv) {
    if (idx > 1) {
        input += process.argv[idx]
        if (idx < process.argv.length) input += ' '
    }
}

console.log("Com acento: ", input);


const wordList = {
    'á': "a",
    'ã': "a",
    'é': "e",
    'ê': "e",
    'ó': "o",
    'ô': "o",
    'õ': "o",
    'ú': "u",
    'í': "i"
}

let str = '';

if (input) {
    for (const word of input) {
        str += wordList[word] ? wordList[word] : word
    }
}

console.log("Sem acento: ", str);


// METODO COM FUNCAO

// let normalizedString = ""

// // NFD - canonical decomposition and ordering
// // NFC - composition after canonical decomposition and ordering

// // ç -> \u00C7
// // ç -> \u0043\u0327  c + acento

// if (input) {
//     for (const word of input) {
//         normalizedString += String.fromCodePoint(word.normalize("NFD").codePointAt(0));
//     }
// }

// console.log(normalizedString);