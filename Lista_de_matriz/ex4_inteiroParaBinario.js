
let integer = process.argv[2], 
    maxInteger = integer,
    powers = [],
    binary = '',
    idx = 0;

let maxIdx = 0;

while (maxInteger > 0) {

    idx = 0;

    while (maxInteger >= (2**idx)) idx += 1;
    let power = 2**(idx-1);
    if (maxIdx < (idx-1)) maxIdx = (idx-1);
    
    maxInteger = maxInteger - power;

    powers.push(power);
}


let currentPower = 0;
idx = maxIdx;

do {
    var power = 2**(idx);
    idx--;

    if (powers[currentPower] === power) {
        binary += '1';
        currentPower++;
    } else {
        binary += '0';
    }

} while (idx >= 0);

console.log('\nDecimal to Binary:', binary);



let sum = 0;
for (let idx in binary) {
    let currentNumber = (binary.length - 1) - idx;
    sum += binary.charAt(currentNumber) * (2**idx);
}

console.log('\nBinary to Decimal:', sum);