//Loop de Pares

// const loopDePares = ((numero) => {
//     for (let i = 0; i <= 100; i++){
//         console.log(i);
//         if ((i + numero)%2 == 0) {
//           console.log('O número '+(i+numero)+ ' é '+ ' par.');   
//       }
//     }    
//   });

// // console.log(loopDePares(1));
// loopDePares(1);

//Loop de impares com palavras

const loopDeImpares = ((numero, palavra) => {
    for (let i = 0; i <= 100; i++){
        console.log(i);
        if ((i + numero)%2 != 0) {
          console.log(palavra);   
      }
    }    
  });

// console.log(loopDePares(1));
loopDeImpares(1, 'oi');