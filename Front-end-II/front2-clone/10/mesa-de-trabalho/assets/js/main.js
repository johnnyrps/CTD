
// 1. Selecione o formulário
var formulario = document.querySelector("#formularioDeCadastro");
var campo = document.querySelector('.c-form__campo');
var li = document.querySelector('.c-lista__item');
formulario.addEventListener("submit", function (evento) {
evento.preventDefault();
    
    var SemTratamento = evento.target[0].value;
    var SemEspacos = SemTratamento.replace(/\d+/g, '');
    alert("Texto sem Tratamento:" + SemTratamento);
    var SemEspacos = SemTratamento.replace(/\s+/g, '');

// 2.1. Remova todos os números permitindo apenas texto
    var SemEspacos = SemTratamento.replace(/\d+/g, "");

// 3. Capture o evento de envio do formulário e disparar a rotina
li.innerText = SemEspacos;
});

