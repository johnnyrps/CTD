
// 1. Criar o elemento que desejos adicionar ao DOM
var botao = document.createElement("button");

// 2. Criamos o texto que iremos adicionar ao elemento
var botaoTexto = document.createTextNode("Abrir um alerta");

// 3. Adicionamos o texto ao elemento como um nó de texto
botao.appendChild(botaoTexto);

// 4. Adicionamos o elemento que contém um nó de texto no DOM
document.body.appendChild(botao);

// 5. Adicionamos atributo(s) e valores ao elemento
// Neste exemplo adicionaremos uma url de destino
//botao.setAttribute("href", "https://www.google.com");

// 6. Podemos aproveitar e adicionar uma classe para estilizar o elemento
botao.classList.add("botao");

// 7. Define qual tarefa você deseja realizar
function criarUmAlerta() {
    alert('Você clicou no botão...')
}

// 8. Capturar um evento específico do elemento e executa a tarefa
botao.addEventListener('click', criarUmAlerta);