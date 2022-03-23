
/* 

    1. Selecione o formulário e o botão do campo de entrada

    2. Crie uma rotina que será disparada a partir do evento de envio

        - 2.1. Remova todos os espaços vazios no início e no fim do texto

        - 2.2. Valide se existem caracteres especiais

            - Se o campo possuir caracteres especiais, apresente um alerta para o usuário com a seguinte mensagem `"Não é permitido o uso de caracteres especiais em sua lista."`. **Nota:** Pode ser utilizado o método `alert()` para simplificar a lógica.

        - 2.3. Caso passe na validacão, apresente o item no elemento DOM `<li class="c-lista__item">`.

    3. Crie uma rotina que será disparada sempre que o usuário tirar o foco da campo de entrada

        - 2.1. Valide se o campo esta vazio

            - Se o campo estiver vazio, desative o botão `<button class="c-form__botao u-my" type="submit">Adicionar item</button>`.

        - 2.2. Valide se existem caracteres especiais 

            - Se o campo possuir caracteres especiais, apresente a seguinte mensagem no console do navegador `"Não é permitido o uso de caracteres especiais em sua lista."`.
*/


//1. Selecione o formulário e o botão do campo de entrada
var formulario = document.querySelector("#formularioDeCadastro");
var campo = document.querySelector('.c-form__campo');
var li = document.querySelector('.c-lista__item');

//2. Crie uma rotina que será disparada a partir do evento de envio
formulario.addEventListener("submit", function (evento){evento.preventDefault()

var valorDoCampoTexto = evento.target[0].value.trim();

var campoVazio = estaVazio(valorDoCampoTexto);
var campoPossuiNumeros = possuiNumeros(valorDoCampoTexto);
var campoPossuiCaracteresEspeciais = possuiCaracteresEspeciais(valorDoCampoTexto);
var campoPossuiMaisDeVinteCaracteres = possuiMaisDeVinteCaracteres(valorDoCampoTexto)

    if(campoVazio) {
    console.log('Campo é obrigatório e precisa ser preenchido!')
    alert("Campo é obrigatório e precisa ser preenchido!");
    }
    else if (campoPossuiMaisDeVinteCaracteres) {
    console.log('Campo não pode ultrapassar vinte caracteres')
    alert("Campo não pode ultrapassar vinte caracteres");
    }
    else if(campoPossuiNumeros) {
    console.log('Campo não pode ter números!')
    alert("Campo não pode ter números!");
    }
    else if(campoPossuiCaracteresEspeciais) {
    console.log('Campo não pode conter caracteres especiais')
    alert("Campo não pode conter caracteres especiais");
    }
    else {
        li.innerText = valorDoCampoTexto;
    console.log('Está tudo ok para envio')
    alert("Enviado Obrigado!");
    } 

    

});

// 2.1. Implementação das validações

// 2.1.1. Verifica se o campo esta vazio
function estaVazio(valorDoCampo) {

var respostaDaValidacao = valorDoCampo === '';

return respostaDaValidacao;

}

// 2.1.2. Verifica se o campo possui números
function possuiNumeros(valorDoCampo) {

var expressaoRegular = /\d+/g;
    
var respostaDaValidacao = expressaoRegular.test(valorDoCampo);

return respostaDaValidacao;

}

// 2.1.3. Verifica se o campo possui alguns caracteres especiais
function possuiCaracteresEspeciais(valorDoCampo) {

    var expressaoRegular = /\W/g;
        
    var respostaDaValidacao = expressaoRegular.test(valorDoCampo);

    return respostaDaValidacao;
}

// 2.1.4. Verifica se o campo possui no máximo vinte caracteres
function possuiMaisDeVinteCaracteres(valorDoCampo) {

    var numeroDeCaracteres = valorDoCampo.length;

    var limiteDeCaracteres = 20;

    var respostaDaValidacao = numeroDeCaracteres > limiteDeCaracteres;

    return respostaDaValidacao;
    
}

// 3. 

campo.addEventListener('blur', formulario);

