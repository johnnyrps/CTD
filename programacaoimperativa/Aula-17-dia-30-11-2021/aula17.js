// Métodos Arrays avançados

let numeros = [1, 2, 3, 4];

let dobro = numeros.map(function(item){
    // console.log(item);
    return item * 2;
});

// console.log(dobro);


//Professor
// let numeros = [1,2,3,4];

// let dobro = numeros.map(function(item){
//     // console.log(item);
//     return item * 2;
// });

// console.log(dobro);

//----------------- Método do tipo .filter()

// let idades = [22, 25, 14, 19, 15];

// let maiores = idades.filter(function(item){
//     return item >=18;
// });
// console.log(maiores);

// Retornar somente números pares com Arrays
let idades = [22, 25, 14, 19, 15];

let pares = idades.filter(function(item){
    return item %2 ===0;
});
// console.log(pares);

// Método do tipo .reduce()

let soma = numeros.reduce(function(acumulador, item){
    // console.log(acumulador, item);

});

// Método .forEach()

let paises = ['Brasil', 'Cuba', 'Russia', 'EUA']
paises.forEach(function(item){
    console.log("Olá item " +item);

});
