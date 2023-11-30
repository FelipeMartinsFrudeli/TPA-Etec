
const alunos = [];

function registrarAluno(params) {
    alunos.push({
        nome: params.nome,
        faltas: params.faltas,
        nota: params.nota
    });
}

// export function getAlunos() {
//     return alunos;
// }

registrarAluno({
    nome: "Alberto",
    faltas: 40,
    nota: 10
})


const nota_de_corte = 7;
const dias_letivos = 100;

for (const aluno of alunos) {

    const percentFaltas = aluno.faltas / dias_letivos;
    const percentPresenca = 1 - percentFaltas;

    aluno.situacao = 'Reprovado';

    if (aluno.nota >= nota_de_corte && percentPresenca >= 0.75) {
        aluno.situacao = 'Aprovado';
    }

    console.table(aluno);
}