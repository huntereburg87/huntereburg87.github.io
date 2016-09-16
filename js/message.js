$(document).ready(function(){

var jVal = {
  'textMessage' : function()
    {
      $('#msg-err').css("visibility","hidden");
if(!document.getElementById('inputMessage').value.replace(/\s+/g, '').length)
{
jVal.errors = true;
              document.getElementById('message-err').innerHTML="Сообщение не должно быть пустым";
              $('#message-err').css("visibility","visible");
}
else {
                document.getElementById('message-err').innerHTML="Верно";
              $('#message-err').css("visibility","hidden");
}
    },

    'sendIt' : function (){
    if(!jVal.errors) {

        var message = $('#inputMessage').val();

      $.ajax({
       url: "send.php",
       type: "POST",
       dataType: "text",
       data: {'message': message},
       success: function(data){
         if(data=='nd'){
$('#msg-err').css("visibility","visible");
document.getElementById('msg-err').innerHTML="Заполните поля";         }

         if(data=='no'){
$('#msg-err').css("visibility","visible");
document.getElementById('msg-err').innerHTML="Что то не так";
         }
         if(data=='yes'){
$('#msg-err').css("visibility","visible");
document.getElementById('msg-err').innerHTML="Сообщение отправлено";

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
    jVal.textMessage();
    jVal.sendIt();
  });
  return false;
});

$('#inputMessage').keyup(jVal.textMessage);
$('#inputMessage').change(jVal.textMessage);



  function isValidTextMessage(message) {
    var pattern = new RegExp(/^[a-zA-Z0-9]{1,50}$/);
    return pattern.test(message);
  }

  });
