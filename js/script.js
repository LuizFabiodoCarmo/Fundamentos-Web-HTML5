script.js

let nome = window.document.getElementById('nome')
let email= window.document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')


nome.style.width='80%'
email.style.width='80%'


function valideNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
     txtNome.innerHTML='Nome inválido! ❌'
     txtNome.style.color='red'
    } else{
    (nome.value.length > 3) 
        txtNome.innerHTML='Nome válido! ✔️'
        txtNome.style.color='green'
        nomeOk = true
    }    
    /*caso não digite nada como deixar sem a mensagem de "nome e email inválido??"*/
}
 
function valideEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf ('@') == -1) {
        txtEmail.innerHTML='E-mail inválido! ❌'
        txtEmail.style.color='red'
       } else{
           txtEmail.innerHTML='E-mail válido! ✔️'
           txtEmail.style.color='green'
           emailOk = true
       }    
}

function enviar(){
    if(nomeOk == true && emailOK == true){
        alert('Formulário enviado com sucesso!')
    } else{
        alert('Verifique se todos os campos foram preenchidos corretamente antes de enviar!')
    }
}
/*
function mapaZoom(){
mapa.style.width= '800px'
mapa.style.height= '600px'
}

function mapaNormal(){
mapa.style.width= '400px'
mapa.style.height= '250px'    

}corrigir o flexbox na html 
*/
