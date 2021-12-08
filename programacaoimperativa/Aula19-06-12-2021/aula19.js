// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas.
//  Faça um programa que calcule e escreva:

// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.

const pessoas = require("./pessoas");
let listaUsuarios = [];

function Pessoas(sexo, nome, altura) {
  this.sexo = sexo;
  this.nome = nome;
  this.altura = altura;
}

for (let i = 0; i < pessoas.length; i++) {
  listaUsuarios.push(new Pessoas(pessoas[i].sexo, pessoas[i].nome, pessoas[i].altura));
}

// console.log(listaUsuarios);

// a maior e a menor altura do grupo;

let alturas = []
for (let i = 0; i < pessoas.length; i++){
    alturas.push(listaUsuarios[i].altura)
}
  
// console.log(Math.max(...alturas));
// console.log(Math.min(...alturas));


// a média de altura das mulheres;

function mediaAlturaMulheres(listaUsuarios) {
    let listaMulheres = listaUsuarios
      .filter((item) => {
        return item.sexo === "F";
      })
      .map((item) => {
        return item.altura;
      });
  
    return (
      listaMulheres.reduce((acc, num) => {
        return acc + num;
      }) / listaMulheres.length
    );
  };
//   console.log(mediaAlturaMulheres(listaUsuarios));
  


// o número de homens.

function numeroHomens(listaUsuarios) {
    return listaUsuarios
      .filter((item) => {
        return item.sexo === "M";
      }).length;
  }
  // console.log(numeroHomens(listaUsuarios));







