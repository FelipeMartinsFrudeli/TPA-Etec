
const numbers = [];

for (let idx = 2; idx < process.argv.length; idx++) {
    numbers.push(Number(process.argv[idx]));
}

//  >3 (i),  >2 (k),    4,      
//  2,       >3 (i),   >4 (k)

for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
        if (numbers[i] > numbers[k]) { // 3 < 2
            let lastNumber = numbers[k];
            numbers[k] = numbers[i];
            numbers[i] = lastNumber;
        }  
    }
}

console.log(numbers);