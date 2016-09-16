   <div class="row menu-nav">
     <div class="col-lg-8">
       <ul class="nav nav-pills">
         <li><a href="/">Главная</a></li>
<?
if (empty($_SESSION['login'])):
?>
         <li><a href="auth.php">Авторизация</a></li>
         <li><a href="reg.php">Регистрация</a></li>
<?endif;?>
       </ul>
     </div>
     <div class="col-lg-2 col-lg-offset-2">
<?
if (!empty($_SESSION['login'])){
  echo $_SESSION['login']." I<a href='exit.php''> Выход</a>";
}
?>
     </div>
   </div>




