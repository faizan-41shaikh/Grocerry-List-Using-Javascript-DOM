var MainTodoContainer=document.getElementById('todos');
var input=document.querySelector('.todo_input')
var addingButton = document.querySelector('.add-item')
var deleteAllBtn = document.querySelector('.deleteBtn')



addingButton.addEventListener('click', function(e){
    if (input.value.trim()){
        var ultag= document.createElement('ul')
        ultag.classList.add('todo-list-container')

        var todolist = document.createElement('div')
        todolist.classList.add('todo-list')
        var liTag = document.createElement('li')
        liTag.innerHTML = input.value
        
        liTag.classList.add('todo-item')
        var buttonDiv= document.createElement('div')
        buttonDiv.classList.add('button');
         var completeButton = document.createElement('button');
         completeButton.classList.add('completed');
         completeButton.innerHTML = '<i class = "fas fa-check">purchased</i>'
         var editBtn = document.createElement('button');
         editBtn.classList.add('editBtn');
         editBtn.innerHTML = '<i class = "far fa-edit">edit</i>'


         var trashbutton = document.createElement('button');
         trashbutton.classList.add('trash');
         trashbutton.innerHTML = '<i class = "fas fa-trash">trash</i>'

         ultag.appendChild(todolist)
         todolist.appendChild(liTag)
         todolist.appendChild(buttonDiv)
         buttonDiv.appendChild(completeButton)
         buttonDiv.appendChild(editBtn)
         buttonDiv.appendChild(trashbutton)
         console.log(ultag)

         MainTodoContainer.appendChild(ultag);
         todolist.addEventListener('click',function (e) {
             var items = e.target
             if (items.classList[0]==='completed') {
                 var todo = items.parentElement
                 var todo2 = todo.parentElement;
                 todo2.classList.add('line_through')
             } 
             else if (items.classList[0]==='trash') {
                var todo = items.parentElement
                var todo2 = todo.parentElement;
                var todo3 = todo2.parentElement;
                todo3.classList.add('fall');
                todo3.addEventListener('transitionend', function(){
                    todo3.remove();
                }) 
            } 
             
         })



         input.value = " "

        
    }
})
function deleteAllElements(){
    var geetingUItag = document.querySelectorAll('.todo-list-container')
    for (var i = 0; i < geetingUItag.length; i++) {
        geetingUItag[i].remove();
        
    }

    
}