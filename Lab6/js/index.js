$(document).ready(function(){

    $(".agregar").on('click', addNmae)

    function addNmae(e){
        e.preventDefault();
        let item =$("#newText").val();

        if(item != ""){
            $(".Lista").append(`
            <li class= "lis">
            <p class="itemShop"> ${item}</p>
            <button class="checar">  check </button>
            <button class="del"> delete </button>
            `);
        }

    };


    $(".Lista").on('click','.del', function(e){
        e.preventDefault();
        $(this).parent().remove()
        
    });

    
    $(".Lista").on('click','.checar', function(e){
      e.preventDefault();
      $(this).parent().toggleClass('chec')
    });

});