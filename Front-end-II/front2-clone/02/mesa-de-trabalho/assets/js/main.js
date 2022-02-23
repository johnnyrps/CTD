//1 passo
var nomeUsuario = prompt('Digite seu nome completo');


//2 passo

if (nomeUsuario) {
    
}else {
    alert("O nome é obrigatório")
    nomeUsuario = prompt('Digite seu nome completo')
    
}

var telefoneAluno = prompt('Digite seu telefone com DDD')

if (telefoneAluno){
    
}else {
    alert("O telefone é obrigatório")
    telefoneAluno = prompt('Digite seu telefone com DDD')
};

var ehWahtsapp = confirm ("Seu telefone aceita mensagens via WhatsApp?")

alert(`Muito obrigado ${nomeUsuario}, um de nossos consultores entrará em contato com você através do número ${telefoneAluno}.`)

console.log(`nome:${nomeUsuario} telefone:${telefoneAluno} aceita receber mensagens por WhatsApp? ${ehWahtsapp}`);
