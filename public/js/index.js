const editButtons = document.querySelectorAll(".edit-button");

function replaceContentWithForm(e) {
  const editButton = e.target;
  const li = e.target.parentNode;
  const contentEl = li.querySelector(".content");
  const { id } = li;
  const content = contentEl.textContent;

  editButton.setAttribute("disabled", "true");
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
}

editButtons.forEach((editButton) => {
  editButton.addEventListener("click", replaceContentWithForm);
});
