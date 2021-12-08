// 2a Parte Minha Primeira Aplicação II

// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

const dadosJson = require('./expec.json');
let listaExpectadores = []

function Expectadores(nome, idade, opiniao) {
    this.idade = idade,
        this.nome = nome,
        this.opiniao = opiniao;
}

function adicionarExpectadores(dadosJson, listaExpectadores) {
    for (let i = 0; i < dadosJson.length; i++) {
        listaExpectadores.push(new Expectadores(dadosJson[i].nome, dadosJson[i].idade, dadosJson[i].opiniao))
    }
    return listaExpectadores
};

adicionarExpectadores(dadosJson, listaExpectadores);

console.log(listaExpectadores)

function mediaIdadeOtimo(listaExpectadores) {

    let mediaIdadeOtimo = []

    for (let i = 0; i < listaExpectadores.length; i++) {
        if (listaExpectadores[i].opiniao == 3) {
            mediaIdadeOtimo.push(listaExpectadores[i].idade);

        }

    }

    let somaIdade = mediaIdadeOtimo.reduce((a, b) => a + b, 0);
    let mediaIdade = (somaIdade / mediaIdadeOtimo.length) || 0;
    return mediaIdade;
}

let mediaIdade = mediaIdadeOtimo(listaExpectadores)
console.log("A média arredondada da idade das pessoas que assistiram o filme é de " + Math.round(mediaIdade) + " anos.")


function qtdRegular(listaExpectadores) {

    let qtdRegular = 0

    for (let i = 0; i < listaExpectadores.length; i++) {
            if (listaExpectadores[i].opiniao == 1) {
                ++qtdRegular
        }
    }
    return qtdRegular
}

console.log("A quantidade de pessoas que acharam o seu filme regular é de: " + qtdRegular(listaExpectadores) + " pessoas")

function qtdBom(listaExpectadores) {

    let qtdBom = 0

    for (let i = 0; i < listaExpectadores.length; i++) {
            if (listaExpectadores[i].opiniao == 2) {
                ++qtdBom
        }
    }
    console.log(qtdBom + " de " + listaExpectadores.length + " pessoas, acharam o filme bom.")
    return ((listaExpectadores.length / qtdBom)*10 + "%")
}

console.log(qtdBom(listaExpectadores) + " do público achou seu filme bom")