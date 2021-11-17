

// valor padrão ini. // condição  // modificador
for (let volta = 1; volta <= 5; volta++) {
    console.log('Volta número: ' + volta);
}

// Exemplo - Estrutura de repetição "for"

for(let i=0; i<=5; i++){
    console.log(" Olá mundo! " +i);
}


for(let i=5; i>=0; i--){
    console.log(" Olá mundo! " +i);
}


// Exemplo - Estrutura de repetição "while" e "do while"
let volta = 1
while(volta <= 5) {
    console.log('Volta número ' + volta);
    volta ++ // ao final de cada volta somará 1 à variàvel
}

//Exemplo1 "while"

let contador= 0;
while (contador <=5) {
    // console.log(contador);
    contador++;
}
contador = 0;
do {
    console.log(contador);
    contador++;
}while (contador<=5);

// //imprimindo somente os números pares
// for (let i = 0; i <=10 i= i+2) {
//     console.log("contador == ", i);
// }

for (let i = 0; i <=10; i++) {
    if(i % 2 == 0){
        console.log("contador == ", i);
    }
}

console.log("----------------");

let nome = ["Marcos", "João", "Ciclano", "Fulano"];
for (let i = 0; i < 4; i++){
        console.log(nome[i]);
}