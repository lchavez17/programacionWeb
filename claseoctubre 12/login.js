function validar_campos(){
  //var input = document.getElementById('id');

 //var correo=document.getElementsByName('correo')[0];
// var clave=document.getElementsByName('contraseña')[0];
             // document.getElementsByName("correo")[0].style.border = "1px solid red";
             // document.getElementsByName("contraseña")[0].style.border = "1px solid red";
             var correo = $('#correo');
             var clave  = $('#clave');
            console.log(clave.val());
 var continuar=true;

 if(clave.val()!='')
 {
   console.log("entraste a clave");
   $('#clave').css("border","1px solid #ccc");
   $('#clave').css("backgroundColor","#fff");


 }else{
   console.log("entraste a null");
   continuar=false;
   $('#clave').css("border","1px solid red");
   $('#clave').css("backgroundColor","#fdf7f9");
 }
 if(correo.val().indexOf('@')!=-1)
 {
   console.log("entraste a correo");

   $('#correo').css("border","1px solid #ccc");
   $('#correo').css("backgroundColor","#fff");
 }else{
   console.log("entraste acorreo null");
   continuar=false;
   $('#correo').css("border","1px solid red");
   $('#correo').css("backgroundColor","#fdf7f9");
 }
 if(!continuar){
   $('.alert').css("display","block");
   //document.getElementsByClassName('alert')[0].style.display='block';
 }
 return continuar;
}
//leon
