
const produtos = [];

function cadastrar(params) {
    produtos.push({
        nome: params.nome,
        peso: params.peso,
        preco: params.preco,
        cor: params.cor
    });
}


cadastrar({
    nome: 'Borracha',
    peso: 0.8,
    preco: 0.60,
    cor: 'Branco'
});

cadastrar({
    nome: 'lapis',
    peso: 0.5,
    preco: 1.20,
    cor: 'Amarelo'
});

let sum_pesos = 0;
let sum_precos = 0;

for (const produto of produtos) {

    sum_pesos += produto.peso;
    sum_precos += produto.preco;

    console.table(produto);
}

let avarage_pesos = sum_pesos / produtos.length

console.log("Media dos pesos: ", avarage_pesos);
console.log("Soma de precos: ", sum_precos);