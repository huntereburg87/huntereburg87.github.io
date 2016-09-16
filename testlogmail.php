<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
include ("bd.php");
$login=$_POST['login'];
$mail=$_POST['mail'];


$login = stripslashes($login);
$login = htmlspecialchars($login);
$login = trim($login);


$mail = stripslashes($mail);
$mail = htmlspecialchars($mail);
$mail = trim($mail);

if (!empty($login))
  {
$result_login = mysql_query("SELECT * FROM  users WHERE login='$login'");
$myrow = mysql_fetch_array($result_login);
if (!empty($myrow['id'])){
    echo "no";
}
else{echo "yes";}
}

if (!empty($mail))
  {
$result_mail = mysql_query("SELECT * FROM  users WHERE email='$mail'");
$myrow1 = mysql_fetch_array($result_mail);
if (!empty($myrow1['id'])){
    echo "no";
}
else{echo "yes";}
}

}
  else
  {
    echo "<html><head><meta    http-equiv='Refresh' content='0;    URL=index.php'></head></html>";
  }
?>