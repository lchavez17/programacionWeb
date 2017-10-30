<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <script type="text/javascript"src="js/jquery.js"></script>
    <!-- <script type="text/javascript"src="valida.js"></script> -->
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
    <?php
    $msg="contraseña invalida";
    if(!$_POST){
      echo '<script type="text/javascript">
      alert("No esta permitido ingresar a esta web sin iniciar sesión");
      window.location.replace("index.php");//redirecciona al inicio
      </script>';
    //  header('Location: index.php');
    }
    $mail= $_POST['mail'];
    $pass= $_POST['password'];
    if($mail=="edgar_campos@ucol.mx" && $pass=="letsplay0#1"){
      session_start();
      $_SESSION['bsd1'] = $mail;
      header('Location: panel.php');
    }else {
      echo '<script type="text/javascript">
      alert("Contraseña o correo incorrecto.");
      window.location.replace("index.php");//redirecciona al inicio
      </script>';
    //  header('Location: index.php');
    }
     ?>
  </body>
</html>
