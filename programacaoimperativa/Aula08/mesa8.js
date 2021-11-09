//função “pode subir”

// function podeSubir(altura, vemAcompanhado){
//     let podeSubir = false

//     if(altura <= 2.0 && altura >= 1.20){
//         podeSubir = true
// }

//     if(altura >= 1.20 && vemAcompanhado){
//         podeSubir = true
//     } 
//     return podeSubir

// }

// function podeSubir(altura,vemAcompanhado){
//     if((altura <= 2.0 && altura >= 1.20) || (altura >= 1.20 &&
// vemAcompanhado)){
//         return true
//     }
//     else{
//         return false
//     }
// }

// function podeSubir(altura,vemAcompanhado){
//     return (altura <= 2.0 && altura >= 1.20) || (altura >= 1.20 &&
// vemAcompanhado)

// }

// console.log(podeSubir(2.0, false));


function podeSubir(altura, acompanhada){
    if (altura >= 1.40 && altura <= 2.0) {
        // return true;
        console.log("Acesso autorizado");
        return true
    } else if (altura >= 1.20 && altura < 1.40 && acompanhada) {
        //return true;
        console.log("Acesso autorizado somente com acompanhante");
        return true
    }
    else if (acompanhada = "sim"){
            console.log("Se está acompanhada pode subir");
            return acompanhada
    } else {
        //return false;
        console.log("Acesso negado")
        return false
    }
}
let acompanhada = "sim";
console.log(`${podeSubir(1.30, acompanhada)} está acompanhada? ${acompanhada}`);