$(document).ready(function(){


$(".agregar").click(function(){
    var list = $(".lis");
    $("container").append(list); 
});

$(".lis").on('click','.del', function(){
    $(this).parent().remove()
    
} )

  
$(".lis").on('click','.checar', function(){
  
   $(this).prev().toggleClass('.chec')
} )



});