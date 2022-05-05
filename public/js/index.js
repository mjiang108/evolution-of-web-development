const replaceContentWithForm = (e) => {
  const updateButton = e.target;
  const li = e.target.parentNode;
  const contentEl = li.querySelector(".content");
  const { id } = li;
  const content = contentEl.textContent;

  updateButton.setAttribute("disabled", "true");
  li.removeChild(contentEl);

  const form = document.createElement("form");
  form.setAttribute("action", `${id}/update`);
  form.setAttribute("method", "POST");
  const textInput = document.createElement("input");
  textInput.setAttribute("type", "text");
  textInput.setAttribute("name", "content");
  textInput.setAttribute("value", content);
  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Save");
  form.append(textInput, submitButton);

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
        li.id = todo._id;
        const p = document.createElement("p");
        p.setAttribute("class", "content");
        p.innerHTML = todo.content;
        const updateButton = document.createElement("button");
        updateButton.setAttribute("class", "update-button");
        updateButton.innerHTML = "Update";
        updateButton.addEventListener("click", replaceContentWithForm);
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete-button");
        deleteButton.innerHTML = "Delete";
        li.append(p, updateButton, deleteButton);
        todosUl.append(li);
      });
    });
};

populateTodos();
