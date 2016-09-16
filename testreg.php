<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
include ("bd.php");
$name=$_POST['name'];
$login=$_POST['login'];
$country=$_POST['country'];
$mail=$_POST['mail'];
$tel=$_POST['tel'];
$pass=$_POST['pass1'];

if (empty($name) or empty($login) or empty($country) or empty($tel) or empty($mail) or empty($pass))
  {
      echo "nd";
  }
  else {
$name = stripslashes($name);
$name = htmlspecialchars($name);
$name = trim($name);

$login = stripslashes($login);
$login = htmlspecialchars($login);
$login = trim($login);

$country = stripslashes($country);
$country = htmlspecialchars($country);
$country = trim($country);

$mail = stripslashes($mail);
$mail = htmlspecialchars($mail);
$mail = trim($mail);

$tel = stripslashes($tel);
$tel = htmlspecialchars($tel);
$tel = trim($tel);

$pass = stripslashes($pass);
$pass = htmlspecialchars($pass);
$pass = trim($pass);

$pass = md5($pass);//шифруем пароль
$pass = strrev($pass);// для надежности добавим реверс
$pass = $pass."b3p6f";

$result = mysql_query ("INSERT INTO users (fio,login,country,email,tel,password) VALUES('$name','$login','$country','$mail','$tel','$pass')");
if($result=='TRUE')
{echo "yes";}
else{echo "no";}
  }


}
  else
  {
    echo "<html><head><meta    http-equiv='Refresh' content='0;    URL=index.php'></head></html>";
  }
?>