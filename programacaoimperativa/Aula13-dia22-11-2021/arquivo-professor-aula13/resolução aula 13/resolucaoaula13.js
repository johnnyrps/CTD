// 	Número da conta (somente números)

// 	Tipo de conta (conta corrente ou poupança em $)

// 	Saldo em $ (valor apenas)

// 	Titular da conta (nome completo)

// 1.Pense na melhor forma de representar tais contas, e por quê ? 
// (discutir coma equipe sobre as diferentes estruturas e qual é a mais conveniente)

// 2.Uma vez decidido qual será o tipo de dados para representar as contas das contas, 
// crie uma conta de teste e verifique se as propriedades mencionadas acima são criadas corretamente.

let ContaTeste = {
    numero: 123,
    tipo: 'conta corrente',
    saldo: 100,
    titular: 'João da Silva',
    Conta: function () {
        return `Conta: ${this.numero} - Tipo: ${this.tipo} - Saldo: ${this.saldo} - Titular: ${this.titular}`;
    }
}
console.log(ContaTeste.Conta());

// numero	tipo	saldo	titular
// 5486273622	Conta Corrente	27771	Abigael Natte
// 1183971869	Conta Poupança	8675	Ramon Connell
// 9582019689	Conta Poupança	27363	Jarret Lafuente
// 1761924656	Conta Poupança	32415	Ansel Ardley
// 7401971607	Conta Poupança	18789	Jacki Shurmer
// 630841470	Conta Corrente	28776	Jobi Mawtus
// 4223508636	Conta Corrente	2177	Thomasin Latour
// 185979521	Conta Poupança	25994	Lonnie Verheijden
// 3151956165	Conta Corrente	7601	Alonso Wannan
// 2138105881	Conta Poupança	33196	Bendite Huggett
// o cliente nos forneceu uma lista de contas que devemos ser capazes de criar. 
// Para isso, devemos gerar 
// uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente.

function Conta(numero, tipo, saldo, titular) {
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}
let contas = [];
contas.push(new Conta(5486273622, "Conta Corrente", 27771, "Abigael Natte"));
contas.push(new Conta(1183971869, "Conta Poupança", 8675, "Ramon Connell"));
contas.push(new Conta(9582019689, "Conta Poupança", 27363, "Jarret Lafuente"));
contas.push(new Conta(1761924656, "Conta Poupança", 32415, "Ansel Ardley"));
contas.push(new Conta(7401971607, "Conta Poupança", 18789, "Jacki Shurmer"));
contas.push(new Conta(630841470, "Conta Corrente", 28776, "Jobi Mawtus"));
contas.push(new Conta(4223508636, "Conta Corrente", 2177, "Thomasin Latour"));
contas.push(new Conta(185979521, "Conta Poupança", 25994, "Lonnie Verheijden"));
contas.push(new Conta(3151956165, "Conta Corrente", 7601, "Alonso Wannan"));
contas.push(new Conta(2138105881, "Conta Poupança", 33196, "Bendite Huggett"));
// a criação de um objeto literal chamado banco que terá uma propriedade chamada 
// clientes, ele será composto pela lista de objetos gerados no ponto anterior.

// o objeto do banco criará um método chamado consultarCliente que receberá um nome (titular)
// por parâmetro e deve pesquisar na lista de contas e retornar ao objeto do cliente que corresponde a esse nome inserido

// Crie outro método chamado depósito que receberá como parâmetros,
// o titular da conta e 
// uma quantidade de dinheiro para depositar.
// O método deve chegar à conta correspondente e, em seguida, 
// adicionar a quantidade de dinheiro para depositar o saldo da conta, 
// então você deve dar um aviso pelo console com a mensagem "Depósito realizado, seu novo saldo é: xxx".

// Crie um último método chamado saque que também receberá dois parâmetros,
// titular da conta e o valor a ser extraído.
// O método deve obter a conta correspondente e subtrair o valor do saldo atual.
// Caso o resultado seja inferior a 0, 
// você deve imprimir uma mensagem através do console de "Fundos insuficientes", 
// caso contrário você deve imprimir "Extração feita com sucesso, seu novo saldo é: xxx"
let banco = {
    clientes: contas,
    consultarCliente: function (titular) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titular == titular) {
                return this.clientes[i];
            }
        }
    },
    deposito: function (titular, valor) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titular == titular) {
                this.clientes[i].saldo += valor;
                console.log(`Depósito realizado, seu novo saldo é: ${this.clientes[i].saldo}`);
            }
        }
    },
    saque: function (titular, valor) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titular == titular) {
                if (this.clientes[i].saldo >= valor) {
                    this.clientes[i].saldo -= valor;
                    console.log(`Extração feita com sucesso, seu novo saldo é: ${this.clientes[i].saldo}`);
                } else {
                    console.log("Fundos insuficientes");
                }
            }
        }
    }
}