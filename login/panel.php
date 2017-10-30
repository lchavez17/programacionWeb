<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>panel</title>
    <!-- <script type="text/javascript" src="loginValida.js"></script> -->
    <link href="css/style.css" rel="stylesheet">

  </head>
  <body>
    <?php
    session_start();
    if(!$_SESSION['bsd1']){
      echo '<script type="text/javascript">
      alert("No esta permitido ingresar a esta web sin iniciar sesión");
      window.location.replace("index.php");//redirecciona al inicio
      </script>';
    }else{
    echo '<h1>Bienvenido: '.$_SESSION['bsd1'].'</h1>';

  }
    ?>
    <a href="info.php" target="_blank"> Checar informacion de servidor</a>
    <br>
    <a href="logout.php" >Salir</a>
  </body>
</html>
