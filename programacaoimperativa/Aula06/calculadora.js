//parte1
function adicionar(x, y){
    return x + y;
}

function subtracao(x, y){
    return x - y;
}

function multiplicacao(x, y){
    return x * y;
}

function divisao(x, y){
    return x / y;
}

// parte2
    console.log("------ Teste de Operações / Calculadora --------");
console.log(adicionar(1, 4));
console.log(subtracao(10, 4));
console.log(multiplicacao(20, 5));
console.log(divisao(4, 4));
console.log(divisao(0, 4));

//parte3
//funções adicionais
//1 - Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
//Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().

function quadradoDoNumero(num){
    return multiplicacao(num, num);
};

console.log(quadradoDoNumero(18));
console.log(Math.pow(18, 2));

//2 - Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
//Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function mediaDeTresNumeros(numa, numb, numc){
    let somatorio = numa + numb + numc;
    return divisao(somatorio, 3);
};

console.log(mediaDeTresNumeros(8.5, 9, 10));

//3 - Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
//Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300).
//Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function calculaPorcentagem(numTotal, percentual){
let porcentagem = multiplicacao(numTotal, divisao(percentual,100));
return porcentagem
};

console.log(calculaPorcentagem(300, 15)+"%");

//4 - Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
//Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).

function geradorDePorcentagem(num, numTotal){
    let porcentagem = multiplicacao(divisao(num, numTotal), 100);
    return porcentagem + '%'
};

console.log(geradorDePorcentagem(50,200));