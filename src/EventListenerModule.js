import {createDialog, showDialog, hideDialog} from "./newTaskDialog"
// import parseForm from "./parseForm"

// Define the EventListenerModule
const EventListenerModule = {
  init() {
    createDialog();

    const addTaskBtn = document.querySelector(".add-task-btn");
    const allTaskBtn = document.querySelector(".all-task-btn");
    const todayTaskBtn = document.querySelector(".today-task-btn");
    const priorityTaskBtn = document.querySelector(".priority-task-btn");
    const form = document.querySelector(".new-task-form")
    let closeTaskDialog = document.querySelector(".close-window");
    let submitTaskBtn = document.querySelector(".add-task-button");


    addTaskBtn.addEventListener("click", () => {
      createDialog();
      const dialog = document.querySelector("#newTaskDialog")
      showDialog()
    });

    closeTaskDialog.addEventListener("click", (e) => {
      e.preventDefault();
      form.reset();
      hideDialog();
    });

    submitTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
      parseForm();
      form.reset();
      hideDialog();
    });
  },
};
  
  export default EventListenerModule;