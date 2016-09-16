<?php
session_start();
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
include ("bd.php");
$message=$_POST['message'];
$login=$_SESSION['login'];

if (empty($login) or empty($message))
  {
      echo "nd";
  }
  else {


$message = stripslashes($message);
$message = htmlspecialchars($message);
$message = trim($message);

$result = mysql_query ("INSERT INTO message (login,message,date) VALUES('$login','$message',NOW())");
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