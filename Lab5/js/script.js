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
            <input type="checkbox" class="check" name="todo">
            <label> ${item}</label>
            </div>`);
        }
    };

    function deleteAll(){
        let todos = document.getElementsByName("todo")
        for(let i = 0; i< todos.length; i++){
            if (todos[i].checked){
                $(todos[i]).parent().remove()
            }
        }
    }

    function clearAll(){
        $(".check").prop("checked", false);
    }

    function markAll(){
        $(".check").prop("checked", true);
    }

  

});