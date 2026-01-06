const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("itemList");

addBtn.addEventListener("click", function () {
  const inputValue = input.value.trim();

  if (inputValue === "") {
    alert("Please enter some text");
    return;
  }

  const li = document.createElement("li");
  li.textContent = inputValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  li.appendChild(deleteBtn);

  list.appendChild(li);

  input.value = "";
});
