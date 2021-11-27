/*
SEGUINDO A MESA DE TRABALHO DA AULA 13. DESENVOLVA ESSE ALGORITMO 
1 - CRIE UMA FUNÇÃO CONSTRUTORA PARA O OBJETO CONTA BANCARIA COM AS SEGUINTES PROPRIEDADES:

● Número da conta (somente números)
● Tipo de conta (conta corrente ou poupança em $)
● Saldo em $ (valor apenas)
● Titular da conta (nome completo)



2 - MOLDE AS INFORMAÇÕES DO ARQUIVO https://drive.google.com/file/d/16L2NejZU49mCLbo6RTmSKtuElOTOYUXv/view
PARA O FORMATO JSON, E EXPORTE ESSE JSON COMO MODULO

3 - DESENVOLVA UM ALGORITOMO QUE IRA RECEBER O MODULO ARRAY DE JSON E CRIE DINAMICAMENTE OS 
OBJETOS CONTA BANCARIA EM UM SEGUNDO ARRAY LISTA USUARIOS ARMAZENE ESSE OBJETOS 

4 - CRIE DE UM OBJETO LITERAL CHAMADO BANCO QUE TERÁ UMA PROPRIEDADE CHAMADA CLIENTES, ELE SERÁ COMPOSTO 
PELA LISTA DE OBJETOS GERADOS NO PONTO ANTERIOR.

5 - O OBJETO DO BANCO CRIARÁ UM MÉTODO CHAMADO CONSULTARCLIENTE QUE RECEBERÁ UM
NOME (TITULAR) POR PARÂMETRO E DEVE PESQUISAR NA LISTA DE CONTAS E RETORNAR AO
OBJETO DO CLIENTE QUE CORRESPONDE A ESSE NOME INSERIDO.


*/

// 1

// let ContaBancaria = {
//     numero: 123,
//     tipo: 'conta corrente',
//     saldo: 100,
//     titular: 'João da Silva',
//     Conta: function () {
//         return `Conta: ${this.numero} - Tipo: ${this.tipo} - Saldo: ${this.saldo} - Titular: ${this.titular}`;
//     }
// }
// // console.log(ContaBancaria.Conta());

function ContaBancaria(numero, tipo, saldo, titular) {
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}

//2

const data = require('./clientes')
let contas = JSON.parse(data);
contas = contas.data;

// console.log(contas);

// 3

function criaListaContas(contas) {
    let bdContas = [];
    let size = contas.length;
    for (i = 0; i < size; i++) {
      bdContas.push(new ContaBancaria(contas[i].numero, contas[i].tipo, contas[i].saldo, contas[i].titular))
    }
    return bdContas
  }

  let listaContas = criaListaContas(contas);
  
//   console.log(listaContas);

  //4 e 5

  let banco = {
    clientes: listaContas,
    consultarCliente: function (nome) {
      for (let i = 0; i < this.clientes.length; i++) {
        if (nome == this.clientes[i].titular) {
          console.log(this.clientes[i])
          return " "
        }
      }
    }
  }
//   console.log(banco.clientes);

  function appendListaContas(numero, tipo, saldo, titular) {
    let novaConta = new ContaBancaria(numero, tipo, saldo, titular);
    banco.clientes.push(novaConta);
    return banco
  }
  
  appendListaContas(40430,'Conta Corrente', 10000, 'Johnny Pecego');

  console.log(banco.clientes);

//   console.log(banco.consultarCliente("Jarret Lafuente"));