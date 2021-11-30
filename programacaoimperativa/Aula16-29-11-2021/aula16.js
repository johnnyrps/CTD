// ARROW FUNCTIONS

// let bemVindo = () => 'Olá Mundo!';

// let dobro = numero => numero * 2;

// let soma = (a, b) => a + b;

// let horaAtual = () => {
//     let data = new Date();
//     return data.getHours() + ':' +
//     data.getMinutes();
// }

// console.log(horaAtual());

// console.log(bemVindo());

// console.log(dobro(2));

// console.log(soma(4, 5));



// CALLBACKS

// setTimeout(function () {
//     console.log('Olá Mundo!')
// } , 1000); // em milesegundos

// setInterval( () => { //chamando a função com Arrow function
//     console.log('Olá Mundo!');
// }, 1000); //milesegundos

// let print = () => {
//     console.log('Ólá Mundo!');

// }
// setInterval(print, 1000);

// function nomeCompleto(nome, sobrenome){
//     return nome+ ' ' +sobrenome //colocando aspas simples com espaço no meio ele retorna com espaço entre as strings
// }

// function nc(nome, sobrenome){
//     return nome[0]+ ' - ' +sobrenome[0] //colocando aspas simples com espaço no meio ele retorna com espaço entre as strings
// }

// console.log(nomeCompleto("Johnny", "Pecego"));

// function bomDia(nome, sobrenome, callback) {
//     return 'Olá '+callback(nome, sobrenome)
// }

// console.log(bomDia('Johnny', 'Pecego', nomeCompleto));
// console.log(bomDia('Johnny', 'Pecego', nc));

//MICRO DESAFIO

// function acaoCarro(callback){
//     return callback();
// }
// //debugando testando a callback
// console.log(acaoCarro(function(){
//     return 'olá'
// }));

// function andar(){
//     console.log('carro andando');
// }

// function parar(){
//     console.log('carro parou');
// }

// acaoCarro(andar);
// acaoCarro(parar);

// andar();
// parar();