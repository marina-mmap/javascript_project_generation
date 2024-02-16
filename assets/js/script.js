/* Case Sensitive  = reconhece letra maiúsculas e minúsculas 

Por Tag: getElementByTagName()
Por Id: getElementById()
Por Nome: getElementsByName()
Por Classe: getElementsByClassName()
Por Seletor: querySelector ()
*/

let nome = window.document.getElementById('nome')
let email= document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.lenght<3){
      txtNome.innerHTML = "NOME INVÁLIDO"
      txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "NOME VÁLIDO" 
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.')){
      txtEmail.innerHTML = "Email INVÁLIDO"
      txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "Email VÁLIDO" 
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssuntos = document.querySelector('#txtAssunto')
    if(txtAssunto.value.lenght >=100){
      txtAssunto.innerHTML = "Texto muito extenso, digite no máximo 100 caracteres"
      txtAssunto.style.color = "red"
      txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assunto==true){
    alert('Formulario enviado com sucesso')
        }else{
    alert ('Corrija o formulario antes do envio')
    }
}
