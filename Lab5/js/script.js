$(document).ready(function(){

    $(".submitButton").on('click', addNmae)

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


});