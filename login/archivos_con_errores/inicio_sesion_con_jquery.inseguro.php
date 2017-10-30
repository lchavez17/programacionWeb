<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <script type="text/javascript"src="js/jquery.js"></script>
    <script type="text/javascript"src="valida.js"></script>
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
    <?php
    if(!$_POST){
      header('Location: index.php');
    }
    $mail= $_POST['mail'];
    $pass= $_POST['password'];
    session_start();
    $_SESSION['bsd1'] = $mail;
    echo '<input type="password" id="mail" value="'.$mail.'">';
    echo '<input type="password" id="password" value="'.$pass.'">';
     ?>
  </body>
</html>
