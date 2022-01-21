$(document).ready(function(){

    $(".submitButton").on('click', addNmae)
    $("#ButtonDelete").on('click', deleteAll)
    $("#ButtonClear").on('click', clearAll)
    $("#ButtonMark").on('click', markAll)



    function addNmae(e){
        e.preventDefault();
        let item =$("#todoText").val();

        if(item != ""){
            $("#todoList").append(`
            <div>
            <input type="checkbox" name="todo">
            <label> ${item}</label>
            </div>`);
        }
    };

    function deleteAll(){
        let todos = document.getElementsByName("todo")
        for(let i = 0; i< todos.length; i++){
            if (todos[i].checked){
                //todos[i].parentElement.remove()
                $(todos[i]).parent().remove()
            }
        }
    }

    function clearAll(){
        let todos = document.getElementsByName("todo")
        for(let i = 0; i< todos.length; i++){
            todos[i].checked = false
        }
    }

    function markAll(){
        let todos = document.getElementsByName("todo")
        for(let i = 0; i< todos.length; i++){
            todos[i].checked = true
        }
    }

  

});