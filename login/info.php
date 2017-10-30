
<?php

// Show all information, defaults to INFO_ALL
session_start();
if(!$_SESSION['bsd1']){
  echo '<script type="text/javascript">
  alert("No esta permitido ingresar a esta web sin iniciar sesión");
  window.location.replace("index.php");//redirecciona al inicio
  </script>';
}else {
  phpinfo();

  // Show just the module information.
  // phpinfo(8) yields identical results.
  phpinfo(INFO_MODULES);
}

?>
