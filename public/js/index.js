const replaceContentWithForm = (e) => {
  const li = e.target.parentNode;
  const contentEl = li.querySelector(".todo-content");
  const { id } = li;
  const content = contentEl.textContent;
  const updateButtons = document.querySelectorAll(".update-button");

  // disable all update buttons and remove content
  updateButtons.forEach((updateButton) =>
    updateButton.setAttribute("disabled", "true")
  );
  li.removeChild(contentEl);

  // build up form
  const form = document.createElement("form");
  const textInput = document.createElement("input");
  textInput.setAttribute("type", "text");
  textInput.setAttribute("name", "content");
  textInput.setAttribute("value", content);
  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Save");
  submitButton.addEventListener("click", (event) =>
    handleUpdate(event, textInput, id)
  );
  form.append(textInput, submitButton);

  // prepend form
  li.prepend(form);
};

const populateTodos = () => {
  fetch("todos")
    .then((res) => res.json())
    .then((todos) => {
      const todosUl = document.querySelector(".todos-ul");
      // clear any existing todos
      while (todosUl.firstChild) {
        todosUl.firstChild.remove();
      }
      // populate todos
      todos.forEach((todo) => {
        const li = document.createElement("li");
        // eslint-disable-next-line
        const id = todo._id;
        li.id = id;
        const p = document.createElement("p");
        p.setAttribute("class", "todo-content");
        p.innerHTML = todo.content;
        const updateButton = document.createElement("button");
        updateButton.setAttribute("class", "update-button");
        updateButton.innerHTML = "Update";
        updateButton.addEventListener("click", replaceContentWithForm);
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete-button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => handleDelete(id));
        li.append(p, updateButton, deleteButton);
        todosUl.append(li);
      });
    });
};

const handleUpdate = (e, textInput, id) => {
  e.preventDefault();
  const updatedTodo = {
    content: textInput.value,
  };
  fetch(`todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  })
    .then(() => {
      populateTodos();
    })
    .catch((err) => console.error(err));
};

const handleDelete = (id) => {
  fetch(`todos/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      populateTodos();
    })
    .catch((err) => console.error(err));
};

const handleCreate = (e) => {
  e.preventDefault();
  const formData = new FormData(document.querySelector("#create-form"));
  const todo = Object.fromEntries(formData);
  fetch("todos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then(() => {
      const createTextInput = document.querySelector("#create-text-input");
      createTextInput.value = "";
      populateTodos();
    })
    .catch((err) => console.error(err));
};

const createButton = document.querySelector("#create-button");
createButton.addEventListener("click", handleCreate);

populateTodos();
