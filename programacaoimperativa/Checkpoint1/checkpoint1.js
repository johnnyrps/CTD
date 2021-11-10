let pipoca = 10;
let macarrão = 8;
let carne = 15;
let feijão = 12;
let brigadeiro = 8;

function microondas(tempo, prato){
    if(tempo > prato *2){
        console.log("A comida queimou!");
    
    } else if (tempo > prato *3){
        console.log("Kabuuumm")
    
    }else if (tempo < prato){
        console.log("Tempo insuficiente!")
    
}else {
        console.log("Prato pronto, bom apetite !!!");
    }

};
microondas(45, carne);