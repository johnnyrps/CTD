// // exercicio 1
// let filmes = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];

// for (i = 0; i < filmes.length; i++) {
//     filmes[i] = filmes[i].toUpperCase();
//     console.log(filmes);
// };

// exercicio 2
// let filmes = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];

// function converteMaiuscula (lista) {
//     for (i = 0; i < lista.length; i++) {
//         lista[i] = lista[i].toUpperCase();
//     }
//     return lista;
// }

// console.log(converteMaiuscula(filmes));

// Exercicio 3

// let animacoes = ['kungfupanda', 'toystory', 'toystory2', 'toystory3'];

// function passagemDeElementos(lista1, lista2) {
//     let tamanhoLista = lista2.length
//     for (i = 0; i < tamanhoLista; i++) {
//         lista1.push(lista2.pop().toUpperCase());
//     }
//     return lista1;
// }
// console.log(passagemDeElementos(filmes, animacoes));

//EXERCICIO 3

let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let animacoes = ["toy story", "finding nemo", "kung-fu panda", "wally", "fortnite"];

function passagemDeElementos(lista1, lista2) {
        let invalido = lista2.pop();
        let tamanhoLista = lista2.length
        
        for (i = 0; i < tamanhoLista; i++) {
            lista1.push(lista2.pop().toUpperCase());
        }
        console.log("esse filme é inválido ", invalido);
        return lista1;
    }
    // console.log(passagemDeElementos(filmes, animacoes));


// Exercicio 4

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparaNotas(asia, europa) {
    let comparaAsiaEuropa = [];
    
    for (i = 0; i<asia.length; i++){
        comparaAsiaEuropa[i] = asia[i]===europa[i];
    }
    return comparaAsiaEuropa;
};

console.log(comparaNotas(asiaScores, euroScores));
