// If ternário
let dia = "sexta";

let resultado = dia == "domingo"?"Vou a praia":"Fico em casa";
console.log(resultado);

// Switch
switch(dia){
    case "segunda":
        console.log("Vou tomar café");
        break;
    case "quarta":
        console.log("Vou no cinema");
        break;
    default:
        console.log("Eu não vou fazer nada");
}

// Exemplo de Switch 2

// let idade = 20;

// switch(idade) {
//     case 10:
//         console.log('Tem 10 anos');
//         break;
//     case 5:
//         console.log('Tem 5 anos');
//         break;
//     default:
//         console.log('Digite uma idade entre 5 e 10 anos');
// }


//Material extra
let temPao = true;
if(temPao) {
    console.log('não é necessário comprar');
} else {
    console.log('é necessário comprar');
}

//Imagine que queremos exibir se uma pessoa é maior ou menor de idade;
let idade = 10;

if(idade >= 18){
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

//Imagine que uma pessoa solicitou um empréstimo ao banco. O banco, por sua vez, para liberar o empréstimo, precisa verificar a renda mensal desta pessoa:
let pedidoDeEmprestimo = true;
let rendaMensal = 2188;

if(pedidoDeEmprestimo && rendaMensal >= 2500){
    console.log("Empréstimo liberado!");
} else {
    console.log("Infelizmente não podemos liberar seu empréstimo");
}

//Mas e se a situação precisar de três opções? Nesse caso podemos utilizar o else if.

//Imagine que uma pessoa precise lavar seu carro, e com base no seu dinheiro, existem três opções: lavar no lava rápido, lavar em casa ou não lavar o carro.

//Poderíamos criar essa estrutura com o if, desta forma:

let dinheiro = 5;

if(dinheiro >= 20){
    console.log("Vou lavar no lava rápido");
} else if (dinheiro >= 10 && dinheiro <= 20){
    console.log("Vou lavar em casa mesmo!");
} else {
    console.log("Melhor nem lavar!");
}

//Mais exemplos de if ternário
let idades = 15;
console.log(idades >= 18 ? "Maior de idade":"Menor de idade");

let pedidoDeEmprestimos = true;
let rendaMensais = 2800;

console.log(
    pedidoDeEmprestimos && rendaMensais >= 2500

    ? 'Empréstimo liberado!'
    : 'Infelizmente não podemos liberar seu empréstimo'
);