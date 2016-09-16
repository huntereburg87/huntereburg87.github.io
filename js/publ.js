$(document).ready(function(){
              $.ajax({ type: 'POST', url: "publ.php", success: function(response){
                    $('#publ').html(response);
                 }
          });

      $('#send').click(function (){
              $.ajax({ type: 'POST', url: "publ.php", success: function(response){
                    $('#publ').html(response);
                 }
          });
      });
  });

