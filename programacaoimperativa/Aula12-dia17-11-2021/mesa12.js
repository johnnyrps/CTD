const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador (a, b) {
let pontosPrimeiroParticipante = 0;
let pontosSegundoParticipante = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
        pontosPrimeiroParticipante++;
    }else if (a[i] < b[i]){
        pontosSegundoParticipante++;
    }

    }
    if (pontosPrimeiroParticipante > pontosSegundoParticipante) {
        console.log("alicia");
        return alicia;
    }else {
        console.log("bob");
        return bob;
}


}


console.log("O ganhador é:" + encontrarGanhador (alicia, bob));