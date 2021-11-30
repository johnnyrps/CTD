// VERSÃO PADRÃO SEM ARROW FUNCTIONS
// function FizzBuzz (num1, num2){
//     for (let i = 1; i<=100; i++) {
//         if (i % num1 == 0 && i % num2 == 0) {
//         console.log("FizzBuzz");
//     } else {
//         if (i % num1 == 0) {
//             console.log("Fizz");
//         } else if (i % num2 == 0){
//             console.log("Buzz");
//         } else {
//             console.log(i);
//     }
// }
// }
// }
// console.log(FizzBuzz(10,5));


// versão com arrow functions e callbacks

//Exemplo1
let FizzBuzz1 = (num1, num2) => {
    for (i = 1; i <= 100; i++) {
        let fizzBuzz = ''
        if (i % num1 == 0) fizzBuzz += 'Fizz'
        if (i % num2 == 0) fizzBuzz += 'Buzz'
        console.log(fizzBuzz || i);
    }
}

FizzBuzz1(10,5);




//Exemplo2
let FizzBuzz = () => {
    for (n = 1; n <= 100; n++) {
      let fizzBuzz = ''
      if (n % 1 == 0) fizzBuzz += 'Fizz'
      if (n % 5 == 0) fizzBuzz += 'Buzz'
      console.log(fizzBuzz || n)
    }
  }
  
//   FizzBuzz()

  setTimeout(function () {
    console.log("------------Segundo Exemplo---------");
    console.log(FizzBuzz())
} , 1000*2); // em milesegundos