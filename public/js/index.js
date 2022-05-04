const editButtons = document.querySelectorAll(".edit-button");
function changeContentToInput() {
  console.log("click");
}
editButtons.forEach((editButton) => {
  editButton.addEventListener("click", () => changeContentToInput());
});
