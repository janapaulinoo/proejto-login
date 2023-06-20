/*
codigo de validacao de formulario de login
*/
function validar(){
    let email = document.getElementById("email").value; 
    let senha = document.getElementById('subject').value; 
    
    if(!email|| !senha){
        alert("campos de preenchimento obrigatorio. favor preencher")
    }else {
        alert("campo preenchido com sucesso")
    }
}