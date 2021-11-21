// const alicia = [23, 69, 32];
// const bob = [12, 67, 43];

// function encontrarGanhador (p1, p2) {
//     let jogador1 = 0;
//     let jogador2 = 0;

//     for (let i = 0; i < p1.length; i++) {
//         if (p1[i] > p2[i]) {
//             jogador1++;
//         } else if (p2[i] > p1[i]) {
//             jogador2++;
//         }
//     }
//     if (jogador1 > jogador2) {
//         return "Participante 01";
//     } else if (jogador1 < jogador2) {
//         return "Participante 02"
//     } else {
//         return "Empate"
//     }
// }

// console.log("O ganhador é: " + encontrarGanhador(alicia, bob));

// function digitalHouse(x, y) {
//     for (let i = 1; i <= 100; i++) {
//         if (i % x == 0 && i % y == 0) {
//             console.log("DigitalHouse");
//         } else {
//             if (i % x == 0) {
//                 console.log("Digital");
//             } else if (i % y == 0) {
//                 console.log("House");
//             } else {
//                 console.log(i);
//             }
//         }
//     }
// }

// // console.log(digitalHouse(2, 9));


// let numeros = ["p", "y", "t", "h", "o","n"];

// let result = "";



// for (i = 0; i < numeros.length; i++) {
//     result = result + numeros[i];
// }

// // console.log(result);
// // console.log(typeof(result));


console.log("-----teste 2-------");

const alicia = [23, 69, 32]
const bob = [12, 67, 43]


function encontrarGanhador(a, b) {
  let pontosPrimeiroParticipante = 0
  let pontosSegundoParticipante = 0

  for (let i = 0; i < b.length; i++) {
    if (a[i] > b[i]) {
      return pontosPrimeiroParticipante++
    } else if (a[i] < b[i]) {
      return pontosSegundoParticipante++
    }
  }

  if (pontosPrimeiroParticipante > pontosSegundoParticipante) {
    return 'Primeiro Participante'
  } else if (pontosSegundoParticipante > pontosPrimeiroParticipante) {
    return 'Segundo Participante'
  } else {
    return 'Empate'
  }
}

console.log('O ganhador é: ' + encontrarGanhador(alicia, bob))


// resolução da mesa

// const alice = [23, 69, 32]
// const bob = [45, 69, 32]

function encontrarGanhador(a, b) {
  let ptsPrimeiroParticipante = 0
  let ptsSegundoParticipante = 0

  for (let i = 0; i < b.length; i++) {
    if (a[i] > b[i]) {
      ptsPrimeiroParticipante++
    } else if (a[i] < b[i]) {
      ptsSegundoParticipante++
    }
  }
  //return ptsPrimeiroParticipante > ptsSegundoParticipante ? "1o participante" : "2o participante";
  if (ptsPrimeiroParticipante > ptsSegundoParticipante) {
    return '1o participante'
  } else if (ptsSegundoParticipante > ptsPrimeiroParticipante) {
    return '2o participante'
  } else {
    return 'empate'
  }
}

console.log('O ganhador é: ' + encontrarGanhador(alicia, bob));

// Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve
// imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
// ● Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido,
// você deve exibir a string &quot;Digital&quot; em vez do número.
// ● Se o número a ser impresso for um múltiplo do segundo parâmetro inserido,
// você deve exibir a string &quot;House&quot; em vez disso.
// ● Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você
// deve exibir a string &quot;Digital House&quot; em vez do número.










// function digitalHouse(a, b) {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i)
//     if (i % a == 0 && i % b == 0) {
//       console.log('Digital House')
//     } else if (i % a == 0) {
//       console.log('Digital')
//     } else if (i % b == 0) {
//       console.log('House')
//     } else {
//       console.log('Não é multiplo')
//     }
//   }
//   return ''
// }

// digitalHouse(4, 9)


// function encontrarGanhador(a, b) {
//   let pontosAlicia = 0
//   let pontosBob = 0

//   for (let i = 0; i < b.length; i++) {
//     if (a[i] > b[i]) {
//       return pontosAlicia++
//     } else if (a[i] < b[i]) {
//       return pontosBob++
//     }
//   }
//   // return pontosAlicia > pontosBob ? "Primeiro Participante" : "Segundo Participante";

//   if (pontosAlicia > pontosBob) {
//     return 'Primeiro Participante'
//   } else if (pontosBob > pontosAlicia) {
//     return 'Segundo Participante'
//   } else {
//     return 'Empate'
//   }
// }

// console.log(encontrarGanhador(bob,alicia))