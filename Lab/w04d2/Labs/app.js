document.addEventListener("DOMContentLoaded", () => {
  // DOM stuff

  const form = document.querySelector("form");
  const input = document.getElementById("input-box");
  const toDoList = document.getElementById("to-do-list");
  const completedList = document.getElementById("completed");

  const createToDoItem = (text) => {
    const item = document.createElement("div");
    item.className = "to-do-item";
    item.textContent = text;

    const button = document.createElement("button");
    button.textContent = "Completed";
    button.addEventListener("click", () => {
      moveItemToCompleted(item);
    });

    item.appendChild(button);
    return item;
  };

  const moveItemToCompleted = (item) => {
    item.classList.remove("to-do-item");
    item.classList.add("done-item");

    const button = item.querySelector("button");
    button.textContent = "Remove";
    button.removeEventListener("click", () => {
      moveItemToCompleted(item);
    });
    button.addEventListener("click", () => {
      removeItem(item);
    });

    completedList.appendChild(item);
  };

  const removeItem = (item) => {
    item.remove();
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== "") {
      const item = createToDoItem(text);
      toDoList.appendChild(item);
      input.value = "";
    }
  });
});
