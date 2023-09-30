// import AddTask from "./newTaskDialog";
// import parseForm from "./parseForm"

// Define the EventListenerModule
const EventListenerModule = {
  init() {
    AddTask.createDialog();

    const addTaskBtn = document.querySelector(".add-task-btn");
    const allTaskBtn = document.querySelector(".all-task-btn");
    const todayTaskBtn = document.querySelector(".today-task-btn");
    const priorityTaskBtn = document.querySelector(".priority-task-btn");
    const form = document.querySelector(".new-task-form")
    let closeTaskDialog = document.querySelector(".close-window");
    let submitTaskBtn = document.querySelector(".add-task-button");


    addTaskBtn.addEventListener("click", () => {
      // AddTask.showDialog();
      const dialog = document.querySelector("#newTaskDialog")
      dialog.show()
    });

    closeTaskDialog.addEventListener("click", (e) => {
      e.preventDefault();
      form.reset();
      AddTask.hideDialog();
    });

    submitTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
      parseForm();
      form.reset();
      AddTask.hideDialog();
    });
  },
};
  
  // Export the EventListenerModule so it can be used elsewhere
  export default EventListenerModule;