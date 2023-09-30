

function createDialog() {
    const newTaskDialog = document.createElement("dialog");
    newTaskDialog.setAttribute("id", "newTaskDialog");

    // Create a div element with the 'form-container' class
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";

    // Create a div element for the form title
    const formTitle = document.createElement("div");
    formTitle.className = "form-title";
    formTitle.textContent = "Add a new task";

    // Create a form element with the 'new-task-form' class
    const newTaskForm = document.createElement("form");
    newTaskForm.className = "new-task-form";

    // Create a div element for the task title container
    const taskTitleContainer = document.createElement("div");

    // Create an input element for the task title
    const taskTitleInput = document.createElement("input");
    taskTitleInput.type = "text";
    taskTitleInput.placeholder = "Task";
    taskTitleInput.name = "task-title";
    taskTitleInput.id = "task-title";
    taskTitleInput.required = true;

    // Append the task title input to its container
    taskTitleContainer.appendChild(taskTitleInput);

    // Create a div element for the description container
    const descriptionContainer = document.createElement("div");

    // Create an input element for the description
    const descriptionInput = document.createElement("textarea");
    descriptionInput.placeholder = "Description";
    descriptionInput.name = "description";
    descriptionInput.id = "description";

    // Append the description input to its container
    descriptionContainer.appendChild(descriptionInput);

    // Create a div element for the due date container
    const dueDateContainer = document.createElement("div");

    // Create an input element for the due date
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.placeholder = "Due Date";
    dueDateInput.name = "date";
    dueDateInput.id = "date";

    // Append the due date input to its container
    dueDateContainer.appendChild(dueDateInput);

    // Create a div element for the priority container
    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("priority-container")

    // Create a label element for the priority checkbox
    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "High priority?";
    priorityLabel.setAttribute("for", "priority");

    // Create an input element for the priority checkbox
    const priorityCheckbox = document.createElement("input");
    priorityCheckbox.type = "checkbox";
    priorityCheckbox.name = "priority";
    priorityCheckbox.id = "priority";

    // Append the label and checkbox to the priority container
    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priorityCheckbox);

    // Create a div element for the dialog button container
    const dialogBtnContainer = document.createElement("div");
    dialogBtnContainer.classList.add("dialog-btn-container")

    // Create a button element for adding the task
    const addTaskButton = document.createElement("button");
    addTaskButton.className = "add-task-button";
    addTaskButton.textContent = "Add Task";

    // Create a button element for closing the dialog
    const closeButton = document.createElement("button");
    closeButton.className = "close-window";
    closeButton.textContent = "Close";

    // Append the buttons to the dialog button container
    dialogBtnContainer.appendChild(addTaskButton);
    dialogBtnContainer.appendChild(closeButton);

    // Append all elements to the respective parent elements
    formContainer.appendChild(formTitle);
    newTaskForm.appendChild(taskTitleContainer);
    newTaskForm.appendChild(descriptionContainer);
    newTaskForm.appendChild(dueDateContainer);
    newTaskForm.appendChild(priorityContainer);
    newTaskForm.appendChild(dialogBtnContainer);
    formContainer.appendChild(newTaskForm);
    newTaskDialog.appendChild(formContainer);

    const main = document.querySelector(".main-content")
    main.appendChild(newTaskDialog);
}

function showDialog() {
    const dialog = document.querySelector("#newTaskDialog")
    dialog.show()
}

function hideDialog() {
    const dialog = document.querySelector("#newTaskDialog")
    dialog.close()
}



export {createDialog, showDialog, hideDialog}



