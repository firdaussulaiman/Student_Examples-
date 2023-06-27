document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");
  const completedList = document.getElementById("completed-list");

  addBtn.addEventListener("click", () => {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      const todoItem = createTodoItem(todoText);
      todoList.appendChild(todoItem);
      todoInput.value = "";
    }
  });

  function createTodoItem(text) {
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";

    const todoText = document.createElement("span");
    todoText.textContent = text;
    todoItem.appendChild(todoText);

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.addEventListener("click", () => {
      moveTodoToCompleted(todoItem);
    });
    todoItem.appendChild(completeBtn);

    return todoItem;
  }

  function moveTodoToCompleted(todoItem) {
    todoList.removeChild(todoItem);
    todoItem.classList.add("completed-item");

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      completedList.removeChild(todoItem);
    });
    todoItem.removeChild(todoItem.lastChild);
    todoItem.appendChild(removeBtn);

    completedList.appendChild(todoItem);
  }
});
