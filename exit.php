<?php
          session_start();
          if    (empty($_SESSION['login']))
          {
        exit("<html><head><meta    http-equiv='Refresh' content='0;    URL=index.php'></head></html>");
          }

unset($_SESSION['password']);
            unset($_SESSION['login']);
            unset($_SESSION['fio']);
            unset($_SESSION['Auth']);
        exit("<html><head><meta    http-equiv='Refresh' content='0;    URL=/'></head></html>");
            // отправляем пользователя на главную страницу.
            ?>