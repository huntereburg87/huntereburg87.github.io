<?
session_start();
?>
<!doctype html>
<html lang="ru">
 <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Стена сообщений</title>
  <link href="css/bootstrap.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
  <script type="text/javascript" src="./js/bootstrap.js"></script>
  <script type="text/javascript" src="./js/active.js"></script>
  <script type="text/javascript" src="./js/auth.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
 </head>
 <body>
 <div class="container"">
 <?
require_once "./template/menu.php";
 ?>
<form id="valid" class="form-horizontal" action="" method="POST">
  <div class="form-group">
    <label for="inputLogin" class="col-lg-2 control-label">Логин</label>
    <div class="col-lg-9">
      <input name="login" type="text" class="form-control" id="inputLogin" placeholder="Логин"><div id="login-err">&nbsp</div>
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword1" class="col-lg-2 control-label">Пароль</label>
    <div class="col-lg-9">
      <input name="password1" type="password" class="form-control" id="inputPassword1" placeholder="Пароль"><div id="pass1-err">&nbsp</div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-lg-offset-2 col-lg-10">
      <input id="send" type="submit" class="btn btn-success" value="Войти"><div id="msg-err">&nbsp</div>
    </div>
  </div>
</form>
 </div>
 <script type="text/javascript" src="./js/bootstrap.js"></script>
 </body>
</html>