addButton.addEventListener("click", function () {
    // Get input value
    const inputValue = input.value;

    // Prevent empty items
    if (inputValue === "") {
        alert("Please enter some text");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Add text to li
    li.textContent = inputValue;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
    });


    li.appendChild(deleteButton);

    list.appendChild(li);

    input.value = "";
});
