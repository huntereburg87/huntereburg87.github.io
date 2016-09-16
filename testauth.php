<?php
session_start();
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
include ("bd.php");
$login=$_POST['login'];
$pass=$_POST['pass1'];

if (empty($login) or empty($pass))
  {
      echo "nd";
  }
  else {


$login = stripslashes($login);
$login = htmlspecialchars($login);
$login = trim($login);

$pass = stripslashes($pass);
$pass = htmlspecialchars($pass);
$pass = trim($pass);

$pass = md5($pass);//шифруем пароль
$pass = strrev($pass);// для надежности добавим реверс
$pass = $pass."b3p6f";

            $result = mysql_query("SELECT * FROM  users WHERE login='$login' AND  password='$pass'");
            $myrow = mysql_fetch_array($result);
            if (empty($myrow['id']))
              {
                  $_SESSION['Auth']=false;
                  echo "no";
              }
            else{
                  $_SESSION['login']=$myrow['login'];
                  $_SESSION['fio']=$myrow['fio'];
                  $_SESSION['Auth']=true;
                  echo "yes";
            }




}
}
  else
  {
    echo "<html><head><meta    http-equiv='Refresh' content='0;    URL=index.php'></head></html>";
  }
?>