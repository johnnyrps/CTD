//Exercício 1
function conversor(pol) {
    return pol * 2.54
}

console.log(conversor(1));

//Exercício 2
function url(text) {
    return "https://www." + text + ".com.br"
}

console.log(url("rafael"));

//Exercício 3
function exclamacao(string) {
    console.log(string)
    return string + "!"
}

console.log (exclamacao("teste"));

//Exercício 4
function idadeDog(idade) {
    return idade * 7
}

console.log(idadeDog(3))

//Exercício 5
function valorDaHora(salario, horas) {
    return salario / horas
}

console.log(valorDaHora(500, 160))

//Exercício 6
function imc(peso, altura) {
    return peso / (altura*altura)
}

console.log(imc(100, 183))
console.log(imc(70, 172))
console.log(imc(70, 167))
console.log(imc(92, 175))

//Exercício 7
function capsLock(texto) {
    return texto.toUpperCase()
}

console.log(capsLock("beatriz"))


//Exercício 8
function tipo (x){
    return typeof x;
}

console.log(tipo("2"));


//Exercício 9
function circunferencia(r){
    return 2 * Math.PI * r;
}

console.log(circunferencia(10));