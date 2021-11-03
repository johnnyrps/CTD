function conversor(pol) {
    return pol * 2.54
}

console.log(conversor(1));

function url(text) {
    return "https://www." + text + ".com.br"
}

console.log(url("rafael"));

function exclamacao(string) {
    console.log(string)
    return string + "!"
}

console.log (exclamacao("teste"));

function idadeDog(idade) {
    return idade * 7
}

console.log(idadeDog(3))

function valorDaHora(salario, horas) {
    return salario / horas
}

console.log(valorDaHora(500, 160))

function imc(peso, altura) {
    return peso / (altura*altura)
}

console.log(imc(100, 183))
console.log(imc(70, 172))
console.log(imc(70, 167))
console.log(imc(92, 175))

function capsLock(texto) {
    return texto.toUpperCase()
}

console.log(capsLock("beatriz"))