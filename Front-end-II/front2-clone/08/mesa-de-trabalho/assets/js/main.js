
// Utilize esse documento para implementar seu algorítimo...

var telainicial =  document.querySelector('#telaInicial')
var body = document.querySelector('body')

let l1c1 = document.querySelector('#linha-1_coluna-1')
let l1c2 = document.querySelector('#linha-1_coluna-2')
let l1c3 = document.querySelector('#linha-1_coluna-3')
let l2c1 = document.querySelector('#linha-2_coluna-1')
let l2c2 = document.querySelector('#linha-2_coluna-2')
let l2c3 = document.querySelector('#linha-2_coluna-3')
let l3c1 = document.querySelector('#linha-3_coluna-1')
let l3c2= document.querySelector('#linha-3_coluna-2')
let l3c3 = document.querySelector('#linha-3_coluna-3')

//Eventos do mouse
function adicionarX(evento){
    evento.target.innerText = 'X'
   }
   
   function adicionarO(evento){
     evento.target.innerText = 'O'
   }

   l1c1.addEventListener('click' , adicionarX)
   l1c1.addEventListener('dblclick' , adicionarO)
   l1c2.addEventListener('click' , adicionarX)
   l1c2.addEventListener('dblclick' , adicionarO)
   l1c3.addEventListener('click' , adicionarX)
   l1c3.addEventListener('dblclick' , adicionarO)
   l2c1.addEventListener('click' , adicionarX)
   l2c1.addEventListener('dblclick' , adicionarO)
   l2c2.addEventListener('click' , adicionarX)
   l2c2.addEventListener('dblclick' , adicionarO)
   l2c3.addEventListener('click' , adicionarX)
   l2c3.addEventListener('dblclick' , adicionarO)
   l3c1.addEventListener('click' , adicionarX)
   l3c1.addEventListener('dblclick' , adicionarO)
   l3c2.addEventListener('click' , adicionarX)
   l3c2.addEventListener('dblclick' , adicionarO)
   l3c3.addEventListener('click' , adicionarX)
   l3c3.addEventListener('dblclick' , adicionarO)   

//Eventos do teclado

function removerTelaInicial(press){
    if(press.code == 'Space'){
    document.body.removeChild(telainicial)}
  }
  
  body.addEventListener('keydown' , removerTelaInicial)
  

    function adicionarTelaInicial(press){
        if(press.code == 'Escape'){
          document.body.appendChild(telainicial)}
          
        }
        body.addEventListener('keydown' , adicionarTelaInicial)