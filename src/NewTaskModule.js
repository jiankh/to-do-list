import Todos from "./Todos";
import {pushToTaskStorage, saveAndRenderTask} from "./LocalStorageHandler"
import { createTask } from "./formHandler";

const NewTaskModule = {
  init() {
    //DIALOG POPUP SECTION
    createDialog();
    const addTaskBtn = document.querySelector(".add-task-btn");
    const form = document.querySelector(".new-task-form")
    let closeTaskDialog = document.querySelector(".close-window");
    let submitTaskBtn = document.querySelector(".add-task-button");

    addTaskBtn.addEventListener("click", () => {
      showDialog();
    });

    closeTaskDialog.addEventListener("click", (e) => {
      e.preventDefault();
      form.reset();
      hideDialog();
    });

    // submitTaskBtn.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   createTask();
    //   form.reset();
    //   hideDialog();
    // });

    //HANDLING THE NEW TASK SUBMISSION
    const newTaskForm = document.querySelector(".new-task-form");
    const newTaskTitle = document.querySelector("#task-title");
    const newTaskDescription = document.querySelector("#description");
    const newTaskDate = document.querySelector("#date");
    const newTaskPriority = document.querySelector("#priority");

    newTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskName = newTaskTitle.value;
        const taskDescription = newTaskDescription.value;
        const taskDate = newTaskDate.value;
        const taskPriority = newTaskPriority.value;

        const task = new Todos(taskName,taskDescription,taskDate,taskPriority)
        pushToTaskStorage(task);
        saveAndRenderTask();

    })
  }
};

function createDialog() {
  const newTaskDialog = document.createElement("dialog");
  newTaskDialog.setAttribute("id", "newTaskDialog");

  const formContainer = document.createElement("div");
  formContainer.className = "form-container";

  const formTitle = document.createElement("div");
  formTitle.className = "form-title";
  formTitle.textContent = "Add a new task";

  const newTaskForm = document.createElement("form");
  newTaskForm.className = "new-task-form";

  const taskTitleContainer = document.createElement("div");

  const taskTitleInput = document.createElement("input");
  taskTitleInput.type = "text";
  taskTitleInput.placeholder = "Task";
  taskTitleInput.name = "task-title";
  taskTitleInput.id = "task-title";
  taskTitleInput.required = true;

  taskTitleContainer.appendChild(taskTitleInput);

  const descriptionContainer = document.createElement("div");

  const descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Description";
  descriptionInput.name = "description";
  descriptionInput.id = "description";

  descriptionContainer.appendChild(descriptionInput);

  const dueDateContainer = document.createElement("div");

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.placeholder = "Due Date";
  dueDateInput.name = "date";
  dueDateInput.id = "date";

  dueDateContainer.appendChild(dueDateInput);

  const priorityContainer = document.createElement("div");
  priorityContainer.classList.add("priority-container")

  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "High priority?";
  priorityLabel.setAttribute("for", "priority");

  const priorityCheckbox = document.createElement("input");
  priorityCheckbox.type = "checkbox";
  priorityCheckbox.name = "priority";
  priorityCheckbox.id = "priority";

  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(priorityCheckbox);

  const dialogBtnContainer = document.createElement("div");
  dialogBtnContainer.classList.add("dialog-btn-container")

  const addTaskButton = document.createElement("button");
  addTaskButton.className = "add-task-button";
  addTaskButton.textContent = "Add Task";

  const closeButton = document.createElement("button");
  closeButton.className = "close-window";
  closeButton.textContent = "Close";

  dialogBtnContainer.appendChild(addTaskButton);
  dialogBtnContainer.appendChild(closeButton);

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

  
export default NewTaskModule;