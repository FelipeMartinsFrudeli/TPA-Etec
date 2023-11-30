
let altura = process.argv[2],
    raio = process.argv[3];

if (altura == undefined) altura = 0;
if (raio == undefined) raio = 0;

const volume = Math.PI * (raio**2) * altura;

console.log(volume);