<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
include ("bd.php");
$res = mysql_query( "SELECT * FROM message ORDER BY date DESC");
while ($row = mysql_fetch_array($res)):?>
<div class="row">
<div class="col-lg-2">
  от <?echo $row['login'];?>
</div>
<div class="col-lg-4 col-lg-offset-6">
  <?echo $row['date'];?>
</div>
</div>
<div class="row">
  <div class="col-lg-12">
    <?echo $row['message'];?>
  </div>
</div>
<hr>
<?endwhile;?>
<?
}
  else
  {
    echo "<html><head><meta    http-equiv='Refresh' content='0;    URL=index.php'></head></html>";
  }
?>