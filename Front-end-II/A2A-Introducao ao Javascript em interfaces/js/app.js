// alert('Olá visitante');

// alert('que bom que clicou em ok');

// let resultado = confirm('Deseja realmente excluir este cliente?');

// console.log(resultado);

// let nome = prompt('Digite seu nome: ');

// // alert('Olá ' + nome + ' ! ');



// let nomeUsuario = prompt("Por favor, digite seu login")
// console.log(nomeUsuario);

// let DigiteSuaSenha = confirm("Deseja digitar a sua senha agora?")

// if(DigiteSuaSenha) {
//     let nome = prompt("Por favor Digite sua senha");
//     alert("Bem-vindo ao nossso site " + nomeUsuario + " Muito obrigado pelo seu login");
//     document.querySelector('h1').innerText += ' ' + nomeUsuario + " ! ";
// } else {
//     alert("Obrigado por tentar se conectar")
//     document.querySelector('h2').innerText += ' ' + nomeUsuario + " você não se logou !"; 
// }


// let tratamentoPersonalizado = confirm("Deseja um tratamento personalizado?")

// if(tratamentoPersonalizado) {
//   let nome = prompt("Por favor, digite seu nome");
//    alert("Bem-vindo ao nosso site "+ nome +". \n Muito obrigado pela sua visita, estamos à sua disposição! ");
// } else {
//    alert("Obrigado por conectar.")
// }

// parseInt("37");
// parseInt(prompt("Digite sua idade"));

// let a = parseInt("22");
// let b = parseInt(prompt("Digite sua idade"));
// let c = parseInt("22"+"150");
// let d = parseInt(22+150);
// let e = parseInt(22+parseInt("150"));
// let f = parseInt(22.55);


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// let idade = parseInt(prompt("Digite sua idade"));


// if(idade>18){
//     console.log("É maior de idade!");

// }else if(idade<18){
                
// console.log("é menor de idade!");

// }else{
//  isNaN = alert("isso não é um numero!");
//  console.log("Digite um número!");
// }


// console.log(Math.PI);

//Método Math.random()
// let aleatorioSimples = Math.random();
// let aleatorioEscalado = Math.random()*(100-1)+1;

// parseInt(aleatorioEscalado);

// console.log(aleatorioSimples);
// console.log(aleatorioEscalado);
// console.log(parseInt(aleatorioEscalado));

//--------------------

//Método Math.round()
// let num = Math.round(20.49);
// let aleatorio = Math.random()*(100-1)+1;
// Math.round(aleatorio);

// console.log(num);
// // console.log(aleatorio);
// // console.log(Math.round(aleatorio));

// //-----------------------

// //Método Math.max()
// let numUm = Math.max(10, 20);
// let numDois = Math.max(10, 20, 30.58);
// let numTres = Math.max(10, 20, 30.58, "No");

// console.log(numUm, numDois, numTres);

//Método for in
// let pessoa = {
//     nome: "Johnny Pecego",
//     idade: 37,
//     profissao: "programador"
// }

// for (let característica in pessoa) {
//     console.log(pessoa[característica]);
// }

// let carro = {
//     nome: "Siena",
//     ano: "2007"
// }

// for(let prop in carro){
//     console.log(prop, carro[prop])
// }

// var pessoa = {
//     nome: 'Johnny',
//     idade: 37
// };

// for(let dado in pessoa) {
//     console.log(dado, pessoa[dado]);
// };

//---------------------------------
//Método for of
// let series = ["Friends", "Game of Thrones", "Breaking Bad"];

// for(let valor of series){
//     console.log(valor);
// }

//-----------------------------------

//For of

var artistas = ['Juana Molina', 'Luis Alberto Spinetta', 'Gustavo Ceratti'];

for(var artista of artistas){
    console.log(artista);
}
