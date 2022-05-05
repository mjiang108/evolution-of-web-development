const updateButtons = document.querySelectorAll(".update-button");

function replaceContentWithForm(e) {
  const li = e.target.parentNode;
  const contentEl = li.querySelector(".content");
  const { id } = li;
  const content = contentEl.textContent;

  updateButtons.forEach((updateButton) =>
    updateButton.setAttribute("disabled", "true")
  );
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

updateButtons.forEach((updateButton) => {
  updateButton.addEventListener("click", replaceContentWithForm);
});
