$(function(){

    //Живой поиск
    $('#inputCount').bind("keyup", function() {
        if(this.value.length >= 2){
            $.ajax({
                type: 'post',
                url: "search.php", //Путь к обработчику
                data: {'referal':this.value},
                response: 'text',
                success: function(data){
                    $("#search_result").html(data).fadeIn(); //Выводим полученые данные в списке
                }
            })
        }
    })


    $("#search_result").click(function(){
inputCount.value = poisk.innerHTML;
$("#search_result").fadeOut();
return false;

    })

})