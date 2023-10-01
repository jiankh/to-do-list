import EventListenerModule from './NewTaskModule';
import { NewProjectModule } from "./NewProjectModule";
import { initialize } from "./LocalStorageHandler";
import NewTaskModule from './NewTaskModule';

EventListenerModule.init();

initialize();
NewProjectModule.init(); //contains the listener for new
NewTaskModule.init();


// //TASK RENDER

// const newTaskForm = document.querySelector(".new-task-form");
// const newTaskTitle = document.querySelector("#task-title");
// const newTaskDescription = document.querySelector("#description");
// const newTaskDate = document.querySelector("#date");
// const newTaskPriority = document.querySelector("#priority");

// newTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const taskName = newTaskTitle.value;
//     const taskDescription = newTaskDescription.value;
//     const taskDate = newTaskDate.value;
//     const taskPriority = newTaskPriority.value;

//     task = new Todos(taskName,taskDescription,taskDate,taskPriority)
//     toDoArray.push(task);
//     saveAndRenderTask();
// })


// const main = document.querySelector(".main-content");

// function renderTask() {
//     clearElement(main);
//     toDoArray.forEach((task) => {
//         createCard(task.title, task.dueDate, task.priority, task.id);
//     })
// }

// function saveTask() {
//     localStorage.setItem(LOCAL_STORAGE_TASK_KEY, JSON.stringify(toDoArray))
// }

// function saveAndRenderTask() {
//     renderTask()
//     saveTask()
// }

// renderTask()