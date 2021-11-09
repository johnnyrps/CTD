let idade = 15;
//estrutura if / else if / else - if=se / else if=senão se / else=senão
if(idade > 18){
    console.log("entrou no if");
}else if(idade == 18){
    console.log("entrou no else if");
}else{
    console.log("entrou no else");

}

//Switch

switch(idade){
    case 15:
        console.log("idade igual a 15");
    break;
    case 16:
        console.log("idade igual a 16");
    break;
    case 17:
        console.log("idade igual a 17");
    break;
    case 18:
        console.log("idade igual a 18");
    break;
    case 19:
        console.log("idade igual a 19");
    break;
    default:
        console.log("Digite sua idade!");
}

//if simples
let status = false;

if (true){
    console.log("O valor é true - verdadeiro!");
}else{
    console.log("O valor é false - falso!");
}

// Igualdade, if e else

let linguagem = "php"

if (linguagem == "JavaScript"){
    console.log("Estou aprendendo!");
}else{
    console.log("Aprenderei mais tarde!");
}
