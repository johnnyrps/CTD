let form = document.forms['formulario'];
let campo = document.querySelector('.c-form__campo');
let btn = document.querySelector('.c-form__botao');
let texto = document.querySelector('.texto');

if (form) {
    btn.disabled = false;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        usuario = campo.value;
        location.href = `http://127.0.0.1:5501/Front-end-II/front2-clone/14/mesa-de-trabalho/resultado/?nome=${usuario}`

    })
}

let parametro = location.search;

let consulta = new URLSearchParams(parametro);

if (consulta.has('nome')) {
    let nome = consulta.get('nome');
    document.documentElement.lang = "en-US"
    idioma = document.documentElement.lang = "en-US"
    texto.innerText += ` ${nome}`
    localStorage.setItem('nome', nome)
    localStorage.setItem('idioma', idioma)

} else {
    getStorage()
}

function getStorage() {
    if (texto) {
        if (localStorage.length > 0) {
            document.documentElement.lang = localStorage.getItem('idioma')
            texto.innerText += ` ${localStorage.getItem('nome')}`
        }
    }
}