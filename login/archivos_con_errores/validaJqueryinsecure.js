$(document).ready(function() {
  var mail=$('#mail');
  var password=$('#password');
    if(mail.val()=="edgar_campos@ucol.mx" && password.val()=="letsplay0#1"){
      console.log("entraste");
      window.location.replace("panel.php");   //redirecciona a la pagina formulario


    }else {
      console.log("no entraste");
      alert("correo o contraseña invalido.");
      window.location.replace("index.php");//redirecciona al inicio
    }
});

// if(mail.val()=="leon@ucol.mx" && password.val()=="asdf"){
