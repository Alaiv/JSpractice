//Model
let todos;
// document.querySelector(".clicker").addEventListener("click", addTodo)
const savedTodos = JSON.parse(localStorage.getItem("todos"));
if (Array.isArray(savedTodos)) {
    todos = savedTodos;
} else {
    todos = [{
        title: 'Get groceries',
        dueDate: '2010-10-04',
        id: "id1"
    }, {
        title: 'Wash car',
        dueDate: '2010-12-04',
        id: "id2"
    }, {
        title: 'Make dinner',
        dueDate: '2010-11-04',
        id: "id3"
    }];
}


function createTodo(title, dueDate) {
    let id = "" + new Date().getTime();

    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });

    saveTodos()
}

function removeTodo(idToDelete) {
    todos = todos.filter(todo => {
        if (todo.id === idToDelete.id) {
            return false;
        } else {
            return true;
        }
    });

    saveTodos()
}



function setEditing(todoId) {
    todos.forEach(todo => {
        if (todo.id === todoId) {
            todo.isEditing = true;
        }
    });
saveTodos();
}

function updateTodo(todoId, newTitle, newDate) {
    todos.forEach(todo => {
        if(todo.id === todoId) {
            todo.title = newTitle;
            todo.dueDate = newDate;
            todo.isEditing = false;
        }
    });

    saveTodos()
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

//controller

function addTodo() {
    const textbox = document.getElementById("txt");
    const title = textbox.value;
    const datePicker = document.getElementById("datePicker")
    const dueDate = datePicker.value;

    createTodo(title, dueDate);
    render();
}



function onDelete(todoToDelete) {

    return () => {
        removeTodo(todoToDelete);
        render();
    }
}



function onEdit(event) {
    const updateButton = event.target;
    const todoId = updateButton.dataset.todoId;

    setEditing(todoId);
    render();
}

function onUpdate(event) {
    const updateButton = event.target;
    const todoId = updateButton.dataset.todoId;

    const textbox = document.getElementById("title" + todoId);
    const newTitle = textbox.value;

    const datePicker = document.getElementById("date" + todoId);
    const newDate = datePicker.value;


    updateTodo(todoId, newTitle, newDate);
    render();
}




//View
function render() {
    document.getElementById("todo-list").innerHTML = "";

    todos.forEach(function (todo) {
        const element = document.createElement("div");

        if (todo.isEditing === true) {

            const textBox = document.createElement("input");
            textBox.type = "text";
            textBox.id = 'title' + todo.id
            element.appendChild(textBox);

            const datePicker = document.createElement("input")
            datePicker.type = "date";
            datePicker.id = "date" + todo.id
            element.appendChild(datePicker);

            const updateBtn = document.createElement("button");
            updateBtn.dataset.todoId = todo.id;
            updateBtn.innerText = "Update";
            updateBtn.onclick = onUpdate;
            element.appendChild(updateBtn);


        } else {

            element.innerText = todo.title + " " + todo.dueDate;

            let editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.style = "margin-left: 12px"
            editBtn.onclick = onEdit;
            editBtn.dataset.todoId = todo.id;
            element.appendChild(editBtn)

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.style = "margin-left: 12px"
            deleteBtn.onclick = onDelete(todo);
            element.appendChild(deleteBtn)

        }

        const todoList = document.getElementById("todo-list");
        todoList.appendChild(element);
    })
}

render();


