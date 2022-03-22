
// 1. Selecione o formulário
var formulario = document.querySelector("#formularioDeCadastro");
var campo = document.querySelector('.c-form__campo');
var li = document.querySelector('.c-lista__item');
formulario.addEventListener("submit", function (evento) {
evento.preventDefault()

// 2. Crie da rotina que será disparada a partir do evento de envio
    var SemTratamento = evento.target[0].value.trim();
    
// 2.1. Remova todos os números permitindo apenas texto
    var SemTratamento = campo.value.replace(/\d+/g,'');

// 2.2. Remova todos os espaços vazios
    var SemEspacos = SemTratamento.replace(/\s+/g,'');

// 3. Capture o evento de envio do formulário e disparar a rotina
    li.innerText = SemEspacos;


});

