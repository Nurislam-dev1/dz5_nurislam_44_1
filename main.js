const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todoList = document.getElementById("todo_list");

const createTodo = () => {
  if (!input.value.trim()) return alert("напиши что нибудь");

  const div = document.createElement("div");
  const text = document.createElement("h3");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  div.setAttribute("class", "block_text");
  deleteBtn.setAttribute("class", "delete_button");
  editBtn.setAttribute("class", "edit_button");

  text.innerHTML = input.value;
  deleteBtn.innerHTML = "DELETE";
  editBtn.innerHTML = "EDIT";

  deleteBtn.onclick = () => div.remove();
  editBtn.onclick = () => {
    const editedText = prompt("Edit: $(text.innerHTML)").trim();
    if (editedText) text.innerHTML = editedText;
  }

  div.append(text, deleteBtn, editBtn);
  todoList.append(div);

  input.value = "";
};


createButton.onclick = () => createTodo();

// createButton.addEventListener("click", createTodo);

// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") createTodo();
// });

input.onkeydown = (e) => {
  if (e.key === "Enter") createTodo();
};
