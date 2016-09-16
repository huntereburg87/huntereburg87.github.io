$(document).ready(function(){

var jVal = {

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
      }
    },

    'sendIt' : function (){
    if(!jVal.errors) {
        var pass1 = $('#inputPassword1').val();
        var login = $('#inputLogin').val();
      $.ajax({
       url: "testauth.php",
       type: "POST",
       dataType: "text",
       data: {'login': login, 'pass1': pass1},
       success: function(data){
         if(data=='nd'){
document.getElementById('msg-err').innerHTML="Заполните все поля";
         }
         if(data=='no'){
document.getElementById('msg-err').innerHTML="Вход в систему с указанными данными невозможен";
         }
         if(data=='yes'){
window.location.href = "/"
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
    jVal.login();
    jVal.passWord1();
    jVal.sendIt();
  });
  return false;
});
$('#inputLogin').keyup(jVal.login);
$('#inputLogin').change(jVal.login);
$('#inputPassword1').keyup(jVal.passWord1);
$('#inputPassword1').change(jVal.passWord1);
  });
