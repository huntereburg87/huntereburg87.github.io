<?php
include ("bd.php");

if(!empty($_POST["referal"])){ //Принимаем данные

    $referal = trim(strip_tags(stripcslashes(htmlspecialchars($_POST["referal"]))));

    $db_referal = mysql_query("SELECT * from `country` WHERE country LIKE '%$referal%'");


    while ($row = mysql_fetch_array($db_referal)) {
        echo "\n<li id='poisk'>".$row["country"]."</li>"; //$row["name"] - имя таблицы
    }

}


?>