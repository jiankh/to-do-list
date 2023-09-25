import AddTask from "./addTask";

// Define the EventListenerModule
const EventListenerModule = {
    init() {
      const addTaskBtn = document.querySelector(".add-task-btn");
      const allTaskBtn = document.querySelector(".all-task-btn");
      const todayTaskBtn = document.querySelector(".today-task-btn");
      const priorityTaskBtn = document.querySelector(".priority-task-btn");
      const closeTaskDialog = document.querySelector(".close-window")
  
      addTaskBtn.addEventListener("click", () => {
        AddTask.createDialog();
        AddTask.showDialog();
      });

      closeTaskDialog.addEventListener("click", (e) => {
        e.preventDefault()
        AddTask.hideDialog()
        });
    },
  };
  
  // Export the EventListenerModule so it can be used elsewhere
  export default EventListenerModule;