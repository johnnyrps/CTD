// let nome = ["Johnny", "Pecego", "Débora", "Mariana"];

// let primeiroValor = nome.shift(); // .shift() elimina da array o primeiro valor e me retorna o primeiro valor eliminado do array, e ele não recebe parâmetro
// console.log(nome);
// console.log(primeiroValor);

// //.push() - Adiciona um ou mais elementos ao final do array - recebe um ou mais elementos como parâmetros - retorna o novo comprimento do array

// Arrays

// Como podemos agrupar muitas informações em uma única variável? 

// Para isso, temos um tipo de dado um pouco mais estruturado, denominado array, que armazena uma coleção de elementos, de modo que cada um deles pode ser identificado por um índice ou uma chave.

// Esta estrutura também é conhecida como variável indexada, vetor (unidimensional) ou matriz (no caso de ser multidimensional).

// -------
// Métodos de Arrays


// Agora que entendemos sobre arrays, vamos conhecer algumas funções que podemos utilizar com eles.

// Com elas (funções), podemos interagir com os arrays, modificando seus valores e obtendo informações relacionadas a eles.

// As funções que veremos serão: Push, Pop, Shift, Unshift, Join, IndexOf, LastIndexOf, Includes.
//-------

//Exercício lista de compras

//Objetivo
//Entender e aplicar as funções auxiliares relacionadas ao array.

// Crie um array que contenha nomes de produtos para compra. 

// Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 

// Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

// console.log(“O método Join realiza tal coisa”)
// console.log(RESULTADO_DO_JOIN)



// let produtoCompras = ["Beleza", "Limpeza", "Frutas", "Verduras", "Carnes"];

// let juntaElemetos = produtoCompras.join("-")
// console.log("O método Join junta os elementos de um array usando um separador que especificamos caso não especificarmos ele vai usar vírgulas");
// console.log(produtoCompras);
// console.log(juntaElemetos);



// let eliminaUltimo = produtoCompras.pop()
// console.log("Elimina o último elemento de um array e retorna o elemento eliminado");
// console.log(produtoCompras);
// console.log(eliminaUltimo);

// let empurraUltimo = produtoCompras.push("Legumes")
// console.log("O Método Push adiciona um ou mais elementos ao final do array");
// console.log(empurraUltimo);
// console.log(produtoCompras);


// let eliminaPrimeiro = produtoCompras.shift("Legumes")
// console.log("O Método Shift elimina o primeiro elemento de um array");
// console.log(eliminaPrimeiro);
// console.log(produtoCompras);

// let adicionaElementos = produtoCompras.unshift("Legumes","Bebidas")
// console.log("O Método Unshift adiciona um ou mais elementos ao início de um array");
// console.log(adicionaElementos);
// console.log(produtoCompras);

//------Mesa 10-------

//O que esses códigos retornam?
// let numbers =[22, 33, 54, 66, 72]
// let numbers1 =[45, 46, 47, 48, 49]
// console.log(numbers[numbers.length])

// let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1][0])

// let str = "uma string qualquer”
// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])


//Array Invertido
// function invertido(){
//     let numbersinvert = numbers.slice(0).reverse();
// };
// console.log("O método reverse inverte os itens de um array. O Primeiro elemento do array se torna o último e o último torna-se o primeiro");
// console.log(invertido(numbers1));

// function imprimirInverso(){
//     let meuArray = [1, 2, 5, 7, 9, 4];
//     let meuArrayInvertido = meuArray.slice(0).reverse();
//     console.log(meuArray);
//     return meuArrayInvertido
    
// };

// function inverter(num){
//     let ret = new Array ;
//     for(let i = num.length-1; i >= 0; i--) {
//         ret.push(num[i]);
//     }
//    return ret;
// }
// let original = [1, 2, 3, 4, 5]
// let originals = [6, 7, 8, 9, 10]

// console.log(inverter(originals));

// function imprimirInverso(array) {
//     console.log(array.reverse());
//   }
  
//   function inverter(array) {
//     arrayNovo = array.reverse();
//     return arrayNovo;
//   }
  
//   const reducer = (previousValue, currentValue) => previousValue + currentValue;
  
//   function somarArray(array) {
//     return array.reduce(reducer);
//   }
  
//   function join(array) {
//     return array.reduce(reducer);
//   }
  
//   let filmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];
  
//   console.log(filmes[2]);
  
//   function letraMaiuscula(filmes) {
//     return filmes.toUpperCase();
//   }
  
//   let animacoes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
  
//   function funde(array, outrArray) {
//     arrayNovo = array.concat(outrArray);
//     return arrayNovo;
//   }
  
//   function modifica(array) {
//     let tirado;
  
//     tirado = array[array.length - 1];
  
//     console.log(tirado);
  
//     array.pop();
//   }
  
//   function notas(array1, array2) {
//     if (array1.toString() == array2.toString()) {
//       return "iguais";
//     } else {
//       return "nao iguais";
//     }
//   }
  
//   funde(filmes, animacoes);
//   modifica(arrayNovo);
//   console.log(notas(filmes, animacoes));

// 1.Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento
//  em ordem reversa no console (você não precisa inverter o Array).
// function imprimirInverso(array) {  
//     console.log(array.reverse());
//    }
//    imprimirInverso(["one","two","three"]);

//    // 2.Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

// function inverter(array){
//     let inverter = array.reverse();
//     console.log(inverter);
//    }
   
//    inverter(["one","two","three","four"])
   
//    // Neste exercício, você criará uma função somarArray() que aceita um array de números
//    // e retorna a soma de todos eles.
   
//    function somarArray(array){
     
//      console.log(array[0]+array[1]+array[2])
   
//    }
//    somarArray([1, 3, 5]);
   

/////
//Exercício Inverter array

// //----- Invertendo Arrays -----
// console.log('----- Invertendo arrays -----')

// function imprimirInverso(valor){
//     console.log(nomes.reverse());
// }

// var nomes = ['João','Carlos','Maria','Roberto','Francisca']

// imprimirInverso(nomes);

// // Exercício somar arrays
// console.log("\n----- Somando arrays -----")

// function somarArray(soma){
//     let result = 0
//     for (let index = 0; index < soma.length; index++) {
//         result += soma[index];
//     }
//     console.log('O resultado da soma é ' +result)
// }

// somarArray([29,1,5,2])
// somarArray([29,1,5,2,3,60])


// // Exercicio de juntar palavras
// console.log('\n ----- Unindo palavras -----')

// function somarPalavras(palavras){
//     let palavraSomada =  palavras[0]
//     for (let index = 1; index < palavras.length; index++) {
//         palavraSomada += ' ' + palavras[index];
//     }
//     console.log(palavraSomada)
// }

// somarPalavras(['Arroz','Doce','Abobora','Feijão'])
// somarPalavras(['Eu','Gosto','de','Pipoca'])

// //Exercicio Coleção de filmes
// //1 - 2
// console.log('\n ----- Deixando valores em upper case -----')
// var catalogo = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
// function capitalizar(valor){
//     return valor.toUpperCase()
// }

// console.log(capitalizar(catalogo[3]))

// //3
// var catalogo2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

// function combinarArrays(array1,array2){
//     return arraySomado = array1.concat(array2)
//     // console.log(arraySomado)
// }

// arraySomado = combinarArrays(catalogo,catalogo2)
// //4
// var removido = arraySomado.pop()

// //5
// console.log('\n----- Comparando Valores -----')

// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// for (let index = 0; index < asiaScores.length; index++) {
//     console.log(asiaScores[index] == euroScores[index] ? 'O valor '+asiaScores[index]+' é igual a ' + euroScores[index]  : 'O valor '+asiaScores[index]+' é difernte de ' + euroScores[index] )
    
// }


//
let arrayProdutos = ['Arroz', 'Feijão', 'Óleo', 'Tempero', 'Açucar', 'Tomate', 'Alface', 'Cenoura'];

console.log('Acessar elementos específicos de um array.');
console.log(arrayProdutos[1]);

console.log('Modificar cada um dos elementos de um array e imprimi-los no console.');
arrayProdutos[1] = 'Sorvete';
arrayProdutos[3] = 'Café';
arrayProdutos[4] = 'Balão';
console.log(arrayProdutos);

console.log('Adicionar elementos a um array.');
arrayProdutos.push('Salsa', 'Detergente', 'Escova de dente');
arrayProdutos.unshift('Chocolate', 'Frango', 'Sabão em Pó');
console.log(arrayProdutos);

console.log('Comparar elementos de um array com os elementos de outro.');
let arraySupermercado = ['Detergente', 'Palha de aço', 'Papel higiênico', 'Pasta Dental', 'Chocolate', 'Bala', 'Açucar'];
console.log(arrayProdutos.indexOf(arraySupermercado[0]));
console.log(arrayProdutos.indexOf(arraySupermercado[1]));

// Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.
let numbers =[22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);
//-1

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ];
console.log(grupoDeAmigos[1][0]);
//Spiderman

let str = 'una string qualquer';
let grupoDeAmigosI = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ];
console.log(grupoDeAmigosI[2][grupoDeAmigosI[2].length - 1]);
//una string qualquer

// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

function inverter(arrayInverter){

    return arrayInverter.reverse();

}

function imprimirInverso(arrayRecebido){
    console.log(inverter(arrayRecebido));
}

console.log('Meu array:');
console.log(arrayProdutos);
console.log('Meu array Invertido:');
imprimirInverso(arrayProdutos);

function soma(total, num) {
    return total + num;
  }
  
  function somarArray(arrayEntrada){
  
      return arrayEntrada.reduce(soma);
  }

console.log('Somas do meus arrays:');
console.log('somarArray([1,2,3]');
console.log(somarArray([1, 2, 3]));


console.log('somarArray([10, 3, 10, 4]');
console.log(somarArray([10, 3, 10, 4]));

console.log('somarArray([-5,100]');
console.log(somarArray([-5,100]));

let texto = '';
function agrupaString(item) {
    texto += item;
}

function meuJoin(arrayEntrada){
    texto = '';
    arrayEntrada.forEach(agrupaString); 
    return texto;   
}

console.log('Unindo o array sem o método Join:');
console.log('["O","l","á"]');
console.log(meuJoin(['O','l','á']));
console.log('["t","c","h","a,"u"]');
console.log(meuJoin(['t','c','h','a','u']));


//Coleções de filmes
let arrayFilmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];

console.log('Consultando meu array no início:');
console.log(arrayFilmes[0]);
console.log(arrayFilmes[3]);
console.log(arrayFilmes);

//Array convertido em maiúscula
function maiusculo(item, index){
    arrayFilmes[index] = item.toUpperCase();
}

function arrayMaiusculo(arrayEntrada){
    arrayEntrada.forEach(maiusculo);
    return arrayEntrada;
}
console.log('Meu array maiúsculo:')
console.log(arrayMaiusculo(arrayFilmes));

//Criação de outra estrutura
let novosFilmes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
console.log('Meus novos filmes:');
console.log(novosFilmes);

//Concatena os arrays
//Deletar o filme errado e grava na variável
let novoArrayFilmes = [];
let filmeErrado = '';
function concatArray(arrayEntrada, arrayConcat){
    filmeErrado = arrayConcat.pop();
    novoArrayFilmes = arrayEntrada.concat(arrayConcat);
    return novoArrayFilmes;
}

console.log('Concatenando os arrays: arrayFilmes e novosFilmes');
console.log(concatArray(arrayFilmes, novosFilmes));
console.log('Filme errado: ' + filmeErrado);

//classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
let compara = [];

function compareNotas(item, index){
    compara[index] = compara[index] == item ? 'Igual' : 'Diferente';
}

function compareArrays(arrayEntrada, arrayCompara){
    compara = arrayCompara;
    arrayEntrada.forEach(compareNotas);
    return compara;
}
console.log('Classificação dos filmes por bloco');
console.log('Asia: ' + asiaScores);
console.log('Europa: ' + euroScores);
console.log(compareArrays(asiaScores,euroScores));