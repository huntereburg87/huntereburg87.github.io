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
  <script type="text/javascript" src="./js/active.js"></script>
  <script type="text/javascript" src="./js/message.js"></script>
  <script type="text/javascript" src="./js/publ.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
 </head>
 <body>
 <div class="container">
 <?
require_once "./template/menu.php";
if (!empty($_SESSION['login'])):
?>
<div class="row">
  <div class="col-lg-6 col-lg-offset-3">
<form id="valid" action="" method="POST">
  <div class="form-group">
    <label for="inputMessage" class="control-label">Введите сообщение</label>
      <textarea name="fio" type="text" class="form-control" id="inputMessage" placeholder="Сообщение"></textarea><div id="message-err">&nbsp</div>
  </div>
   <div class="form-group">
      <input id="send" type="submit" class="btn btn-success" value="Отправить сообщение"><div id="msg-err">&nbsp</div>
  </div>
</form>
  </div>
</div>
<?endif;?>
<div class="row">
<div class="col-lg-12">
    <h1>Сообщения</h1>
</div>
</div>
<div class="row">
<div id="publ" class="col-lg-8 col-lg-offset-2">

</div>
</div>
 </div>
 <script type="text/javascript" src="./js/bootstrap.js"></script>
 </body>
</html>