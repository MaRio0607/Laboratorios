$(document).ready(function() {

// Start your code from here
var tema=[
    "France","Spain","Germany","Sweden","Denmark"
]


$("#add-animal").on('click', addGif)

function addGif(e){
    e.preventDefault();
    let item =$("#animal-input").val();
    let peticion = {
        url:` https://api.giphy.com/v1/gifs/search?q=${item}&api_key=Pm36nbkA2E80pwabtZBC7GGT2c9K88MH&limit=10`,
        success: function (respuesta) {
          
          let giflist = $("#animals")
          
          respuesta.data.forEach(element => {
            giflist.append(` <div> 
                              <img src = '${element.images.original.url}' /> 
                              </div>`  )
          })
          
          
        } ,
        error: function () {
         console.log("No se ha podido obtener la información")   
        }
      }
      
      
      $.ajax(peticion)
      



//     let item =$("#animal-input").val();
//    // var query=`q=${item}`
//     url:`https://api.giphy.com/v1/gifs/search?q=${item}&api_key=Pm36nbkA2E80pwabtZBC7GGT2c9K88MH&limit=10`
//     let gifList=$(#animals)
    


}
//     e.preventDefault();
//     let item =$("#animal-input").val();

//     let peticion = {
//         url:'https://api.giphy.com/v1/gifs/search?api_key=Pm36nbkA2E80pwabtZBC7GGT2c9K88MH&limit=10',
//         success: function (respuesta) {
          
//           let userlist = $("#animals")
          
//           respuesta.data.forEach(element => {
//             userlist.append(` <div>  <p>  ${element.first_name} ${element.last_name} </p>
//                               <img src = '${element.avatar}' /> 
//                               </div>`  )
//           })
          
          
//         } ,
//         error: function () {
//          console.log("No se ha podido obtener la información")   
//         }
//       }
      
      
//       $.ajax(peticion)    
//     // if(item != ""){
//     //     $("#animal-buttons").append(`
//     //     <input id="butList" type="submit" value=${item}>
//     //     `);
//     // }

// };

// https://api.giphy.com/v1/gifs/search?q=dog&api_key=Pm36nbkA2E80pwabtZBC7GGT2c9K88MH&limit=10

});
