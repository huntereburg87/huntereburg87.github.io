$(document).ready(function(){

var jVal = {
  'fullName' : function()
    {
        var name = $('#inputFio').val();
        if(name.length < 1) {
              jVal.errors = true;
              document.getElementById('fio-err').innerHTML="Введите ФИО";
              $('#fio-err').css("visibility","visible");
        }
          else
          {
                $('#fio-err').css("visibility","hidden");
               if(isValidFullName(name))
            {

              document.getElementById('fio-err').innerHTML="Верно";
              $('#fio-err').css("visibility","hidden");
            }
        else
        {
            jVal.errors = true;
            document.getElementById('fio-err').innerHTML="Неверный формат";
            $('#fio-err').css("visibility","visible");
        }
      }
    },

  'login' : function()
    {
        var login = $('#inputLogin').val();
        if(login.length < 1) {
              jVal.errors = true;
              document.getElementById('login-err').innerHTML="Введите логин";
              $('#login-err').css("visibility","visible");
        }
          else
          {
              $('#login-err').css("visibility","hidden");
               if(isValidLogin(login))
            {

        var login = $('#inputLogin').val();

      $.ajax({
       url: "testlogmail.php",
       type: "POST",
       dataType: "text",
       data: {'login': login},
       success: function(data){
         if(data=='no'){
              loginErr = true;
              document.getElementById('login-err').innerHTML="Логин занят";
              $('#login-err').css("visibility","visible");
         }
         if(data=='yes'){
              loginErr = false;
              document.getElementById('login-err').innerHTML="Верно";
              $('#login-err').css("visibility","hidden");

         }

}
});

            }
        else
        {
            jVal.errors = true;
            document.getElementById('login-err').innerHTML="Неверный формат";
            $('#login-err').css("visibility","visible");
        }
      }
    },

  'country' : function()
    {
        var country = $('#inputCount').val();
        if(country.length < 1) {
              jVal.errors = true;
              document.getElementById('country-err').innerHTML="Введите страну";
              $('#country-err').css("visibility","visible");
        }
          else
          {
              $('#country-err').css("visibility","hidden");
               if(isValidСountry(country))
            {

              document.getElementById('country-err').innerHTML="Верно";
              $('#country-err').css("visibility","hidden");
            }
        else
        {
            jVal.errors = true;
            document.getElementById('country-err').innerHTML="Неверный формат";
            $('#country-err').css("visibility","visible");
        }
      }
    },
  'eMail' : function()
    {
        var mail = $('#inputEmail').val();
        if(mail.length < 1) {
              jVal.errors = true;
              document.getElementById('email-err').innerHTML="Введите email";
              $('#email-err').css("visibility","visible");
        }
          else
          {
                $('#email-err').css("visibility","hidden");
               if(isValidEmail(mail))
            {
        var mail = $('#inputEmail').val();

      $.ajax({
       url: "testlogmail.php",
       type: "POST",
       dataType: "text",
       data: {'mail': mail},
       success: function(data){
         if(data=='no'){
              mailErr = true;
              document.getElementById('email-err').innerHTML="Email занят";
              $('#email-err').css("visibility","visible");
         }
         if(data=='yes'){
              mailErr = false;
              document.getElementById('email-err').innerHTML="Верно";
              $('#email-err').css("visibility","hidden");
         }

}
});
            }
        else
        {
            jVal.errors = true;
            document.getElementById('email-err').innerHTML="Неверный формат";
            $('#email-err').css("visibility","visible");
        }
      }
    },
  'tel' : function()
    {
        var tel = $('#inputTel').val();
        if(tel.length < 1) {
              jVal.errors = true;
              document.getElementById('tel-err').innerHTML="Введите номер телефона";
              $('#tel-err').css("visibility","visible");
        }
          else
          {
                $('#tel-err').css("visibility","hidden");
               if(isValidTel(tel))
            {

              document.getElementById('tel-err').innerHTML="Верно";
              $('#tel-err').css("visibility","hidden");
            }
        else
        {
            jVal.errors = true;
            document.getElementById('tel-err').innerHTML="Неверный формат";
            $('#tel-err').css("visibility","visible");
        }
      }
    },
  'passWord1' : function()
    {
        var pass1 = $('#inputPassword1').val();
        if(pass1.length < 1) {
              jVal.errors = true;
              document.getElementById('pass1-err').innerHTML="Введите пароль";
              $('#pass1-err').css("visibility","visible");
        }
          else
          {
                $('#pass1-err').css("visibility","hidden");
               if(isValidPass(pass1))
            {

              document.getElementById('pass1-err').innerHTML="Верно";
              $('#pass1-err').css("visibility","hidden");
            }
        else
        {
            jVal.errors = true;
            document.getElementById('pass1-err').innerHTML="Неверный формат";
            $('#pass1-err').css("visibility","visible");
        }
      }
    },
  'passWord2' : function() {
    var pass1 = $('#inputPassword1').val();
    var pass2 = $('#inputPassword2').val();
    if(pass2.length < 1){
              jVal.errors = true;
              document.getElementById('pass2-err').innerHTML="Подтвердите пароль";
              $('#pass2-err').css("visibility","visible");
    }
    else{
      $('#pass2-err').css("visibility","hidden");
  if(pass1 != pass2) {
      jVal.errors = true;
      document.getElementById('pass2-err').innerHTML="Пароли не совпадают";
        $('#pass2-err').css("visibility","visible");
    } else {
        $('#pass2-err').css("visibility","hidden");
    }}
  },
    'sendIt' : function (){
    if(!jVal.errors && !mailErr && !loginErr) {
        var pass1 = $('#inputPassword1').val();
        var tel = $('#inputTel').val();
        var mail = $('#inputEmail').val();
        var country = $('#inputCount').val();
        var login = $('#inputLogin').val();
        var name = $('#inputFio').val();

      $.ajax({
       url: "testreg.php",
       type: "POST",
       dataType: "text",
       data: {'name': name, 'login': login, 'country': country, 'mail': mail, 'tel': tel, 'pass1': pass1},
       success: function(data){
         if(data=='nd'){
document.getElementById('msg-err').innerHTML="Заполните поля";         }

         if(data=='no'){
document.getElementById('msg-err').innerHTML="Проверьте данные";
         }
         if(data=='yes'){
          $('#email-err').css("visibility","hidden");
$('#login-err').css("visibility","hidden");
document.getElementById('msg-err').innerHTML="Регистрация прошла успешно";

         }

}
});

    }
  }

};

$('#send').click(function (){
  var obj = $.browser.webkit ? $('body') : $('html');
  obj.animate({ scrollTop: $('#valid') }, 0, function (){
    jVal.errors = false;
    jVal.fullName();
    jVal.login();
    jVal.country();
    jVal.eMail();
    jVal.tel();
    jVal.passWord1();
    jVal.passWord2();
    jVal.sendIt();
  });
  return false;
});

$('#inputFio').keyup(jVal.fullName);
$('#inputFio').change(jVal.fullName);
$('#inputLogin').keyup(jVal.login);
$('#inputLogin').change(jVal.login);
$('#inputCount').keyup(jVal.country);
$('#inputCount').change(jVal.country);
$('#inputEmail').keyup(jVal.eMail);
$('#inputEmail').change(jVal.eMail);
$('#inputTel').keyup(jVal.tel);
$('#inputTel').change(jVal.tel);
$('#inputPassword1').keyup(jVal.passWord1);
$('#inputPassword1').change(jVal.passWord1);
$('#inputPassword2').keyup(jVal.passWord2);
$('#inputPassword2').change(jVal.passWord2);

  function isValidFullName(fullName) {
    var pattern = new RegExp(/^([а-яёА-ЯЁ]+\s+){2,3}[а-яёА-ЯЁ]+$/);
    return pattern.test(fullName);
  }
  function isValidLogin(login) {
    var pattern = new RegExp(/^[a-zA-Z0-9]{3,50}$/);
    return pattern.test(login);
  }
  function isValidСountry(country) {
    var pattern = new RegExp(/^[а-яёА-ЯЁ]{2,50}$/);
    return pattern.test(country);
  }
  function isValidEmail(mail) {
    var pattern = new RegExp(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/);
    return pattern.test(mail);
  }
  function isValidTel(tel) {
    var pattern = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
    return pattern.test(tel);
  }
  function isValidPass(pass1) {
    var pattern = new RegExp(/^[^а-яёА-ЯЁ]{6,50}$/);
    return pattern.test(pass1);
  }
  });
