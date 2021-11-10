function microondas(prato, tempo){
    switch (prato) {
        case "pipoca":
            if (tempo < 10){
                console.log("Tempo insuficiente");
                break;
            }
            else if (tempo >= 10 && tempo < 20){
                console.log("Prato pronto, bom apetite");
                break;
            }
            else if (tempo >= 20 && tempo < 30){
                console.log("Comida queimou");
                break;
            }
            else {
                console.log("Kabuumm!!");
                break;
            }

        case "macarrão":
        case "brigadeiro":

            if (tempo < 8){
                console.log("Tempo insuficiente");
                break;
            }
            else if (tempo >= 8 && tempo < 16){
                console.log("Prato pronto, bom apetite");
                break;
            }
            else if (tempo >= 16 && tempo < 24){
                console.log("Comida queimou");
                break;
            }
            else {
                console.log("Kabuumm!!");
                break;
            }
        
        case "carne":
            if (tempo < 15){
                console.log("Tempo insuficiente");
                break;
            }
            else if (tempo >= 15 && tempo < 30){
                console.log("Prato pronto, bom apetite");
                break;
            }
            else if (tempo >= 30 && tempo < 45){
                console.log("Comida queimou");
                break;
            }
            else {
                console.log("Kabuumm!!");
                break;
            }
        case "feijão":
            if (tempo < 12){
                console.log("Tempo insuficiente");
                break;
            }
            else if (tempo >= 12 && tempo < 24){
                console.log("Prato pronto, bom apetite");
                break;
            }
            else if (tempo >= 24 && tempo < 36){
                console.log("Comida queimou");
                break;
            }
            else {
                console.log("Kabuumm!!");
                break;
            }

        default:
            console.log("Prato inexiste");
    }
}
microondas("feijão", 30);
microondas("feijão", 1);
microondas("feijão", 40);
microondas("feijão1", 15);
microondas("feijão", 15);
