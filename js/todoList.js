const todoContainer = document.querySelector(".todo-container");
const slideIn = () => {
    todoContainer.style.right = "-200px";
    todoContainer.style.animation = "slide 1s ease-out "
}
const slideOut = () => {
    todoContainer.style.right = "-450px";
    todoContainer.style.animation = "disappear 1s ease-out "
}
todoContainer.addEventListener("mouseover", slideIn);
todoContainer.addEventListener("mouseout", slideOut);



const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_NAME = "todos"
let todos = [];

const saveTodos = () => { localStorage.setItem(TODOS_NAME, JSON.stringify(todos)) }

const deleteTodo = (e) => {
    const li = e.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

const paintTodo = (newTodo) => {
    const li = document.createElement("li")
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.addEventListener('click',deleteTodo)
    button.innerText = '❌';
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    todoList.appendChild(li);
}

const handleTodoSUbmit = (e) => {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text : newTodo,
    }
    paintTodo(newTodoObj);
    todos.push(newTodoObj)
    saveTodos();
};

todoForm.addEventListener("submit", handleTodoSUbmit);

const savedTodos = localStorage.getItem(TODOS_NAME)
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    todos.forEach(paintTodo);
    // console.log(parsedTodos)
}