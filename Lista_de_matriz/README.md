# Lista de exercicios de TPA - Matrizes

O uso do Node é nescessario para rodar os arquivos. 
Baixe o Node.js em: <https://nodejs.org/>

#### Exercicio 1:
```
node .\ex1_charCodeParaString.js
```
Resultado:  
A  B  C  D  E  F  G  H

I  J  K  L  M  N  O  P

Q  R  S  T  U  V  W  X

Y  Z  [  \  ]  ^  _  `



#### Exercicio 2:
```
node .\ex2_textoSemAcento.js amanhã tu irá
```
Resultado:
Com acento:  amanhã tu irá
Sem acento:  amanha tu ira



#### Exercicio 3:
```
node .\ex3_matrixTransposta.js
```
Resultado:
9  6  8  8

8  4  3  9

2  4  7  4

7  2  8  1

2  3  6  9

7  8  9  4


Transpose:


9  8  2  7  2  7

6  4  4  2  3  8

8  3  7  8  6  9

8  9  4  1  9  4



#### Exercicio 4:

.\ex4_inteiroParaBinario.js (NUMERO DECIMAL)

```
node .\ex4_inteiroParaBinario.js 100
```
Resultado:  
Decimal to Binary: 1100100
Binary to Decimal: 100



#### Exercicio 5:

.\ex5_cilindroVolume.js (ALTURA) (RAIO)

```
node .\ex5_cilindroVolume.js 10 1
```
Resultado:
31.41592653589793 (VOLUME)



#### Exercicio 6:
```
node .\ex6_produtos.js
```
Resultado:
```
┌─────────┬────────────┐
│ (index) │   Values   │
├─────────┼────────────┤
│  nome   │ 'Borracha' │
│  peso   │    0.8     │
│  preco  │    0.6     │
│   cor   │  'Branco'  │
└─────────┴────────────┘
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│  nome   │  'lapis'  │
│  peso   │    0.5    │
│  preco  │    1.2    │
│   cor   │ 'Amarelo' │
└─────────┴───────────┘
```
Media dos pesos:  0.65
Soma de precos:  1.7999999999999998



#### Exercicio 7:
```
node .\ex7_matrixEmL.js
```
Resultado:  
·  ·  ·  ·  ·  ·  ·  ·  ·  ·  X

·  ·  ·  ·  ·  ·  ·  ·  ·  ·  X

·  ·  ·  ·  ·  ·  ·  ·  ·  ·  X

·  ·  ·  ·  ·  ·  ·  ·  ·  ·  X

·  ·  ·  ·  ·  ·  ·  ·  ·  ·  X

·  ·  ·  ·  ·  ·  ·  ·  ·  ·  X

·  ·  ·  ·  ·  ·  ·  ·  ·  ·  X

·  ·  ·  ·  ·  ·  ·  ·  ·  ·  X

·  ·  ·  ·  ·  ·  ·  ·  ·  ·  X

·  ·  ·  ·  ·  ·  ·  ·  ·  ·  X

X  X  X  X  X  X  X  X  X  X  X



#### Exercicio 8:
```
node .\ex8_matrixEmX.js
```
Resultado:  
X  ·  ·  ·  ·  ·  ·  ·  ·  ·  X

·  X  ·  ·  ·  ·  ·  ·  ·  X  ·

·  ·  X  ·  ·  ·  ·  ·  X  ·  ·

·  ·  ·  X  ·  ·  ·  X  ·  ·  ·

·  ·  ·  ·  X  ·  X  ·  ·  ·  ·

·  ·  ·  ·  ·  X  ·  ·  ·  ·  ·

·  ·  ·  ·  X  ·  X  ·  ·  ·  ·

·  ·  ·  X  ·  ·  ·  X  ·  ·  ·

·  ·  X  ·  ·  ·  ·  ·  X  ·  ·

·  X  ·  ·  ·  ·  ·  ·  ·  X  ·

X  ·  ·  ·  ·  ·  ·  ·  ·  ·  X



#### Exercicio 9:
```
node .\ex9_situacaoAlunos.js
```
Resultado:
```
┌──────────┬─────────────┐ 
│ (index)  │   Values    │ 
├──────────┼─────────────┤ 
│   nome   │  'Alberto'  │ 
│  faltas  │     40      │ 
│   nota   │     10      │ 
│ situacao │ 'Reprovado' │ 
└──────────┴─────────────┘ 
```


#### Exercicio 10:

Para testar o exercicio 10 é preciso adicionar numeros, e ele retornará os numeros organizados.

```
node .\ex10_sort.js 1 19 1 3
```
Resultado:  [1, 1, 3, 19]
