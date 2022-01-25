$(document).ready(function() {

// Start your code from here
var tema=["France","Spain","Germany","Sweden","Denmark"]

for (let i = 0; i< tema.length;i++){
      let a = $("<button>")
    a.addClass("newBut")
    a.attr("data-type",tema[i])
    a.text(tema[i])
    $("#animal-buttons").append(a)
 }

$("#add-animal").on('click', addBut)

function addBut(e){
  e.preventDefault();
  let item =$("#animal-input").val();
  
  if(item != ""){
    $("#animal-buttons").append(`
    <button id="newBut" data-type=${item}>
    ${item}
    `);
}

}


$("#animal-buttons").on("click", ".newBut", function(e){
   $("#animals").empty()
    e.preventDefault();
    let item =$(this).attr("data-type")
    //let item = $('#newBut').attr('data-value');
    let peticion = {
        url:` https://api.giphy.com/v1/gifs/search?q=${item}&api_key=Pm36nbkA2E80pwabtZBC7GGT2c9K88MH&limit=10`,
        success: function (respuesta) {
          
          let gifList = $("#animals")
          
          respuesta.data.forEach(element => {
            gifList.append(`
            <div> 
            <p> ratng: ${element.rating} </p>
            <img src = '${element.images.original.url}' /> 
            </div>`  )
          })
          
          
        } ,
        error: function () {
         console.log("No se ha podido obtener la información")   
        }
      }
      
      
      $.ajax(peticion)

})


// https://api.giphy.com/v1/gifs/search?q=dog&api_key=Pm36nbkA2E80pwabtZBC7GGT2c9K88MH&limit=10

});
