// import Todos from "./Todos";
import Project from "./Project";
import EventListenerModule from './NewTaskModule';
import { NewProjectModule } from "./NewProjectModule";
import { initialize } from "./LocalStorageHandler";


// const LOCAL_STORAGE_PROJECT_KEY = "task.project";
// let projectArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

// const LOCAL_STORAGE_TASK_KEY = "task.todos";
// let toDoArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || [];

EventListenerModule.init();


//project section

// const projectContainer = document.querySelector("[data-projects-list]");

// function saveProject() {
//     localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectArray))
// }

// function saveAndRenderProject() {
//     saveProject();
//     renderProject();
// };

// function renderProject() {
//     clearElement(projectContainer);
//     projectArray.forEach((project) => {
//         const projectElement = document.createElement("li");
//         projectElement.dataset.projectId = project.id;
//         projectElement.classList.add("project-name");
//         projectElement.innerText = project.name;
//         projectContainer.appendChild(projectElement)
//     })
// }

// function clearElement(element) {
//     element.innerHTML = "";
// }


//NEW PROJECT BUTTON ADD
// const newProjectForm = document.querySelector("[data-new-project-form]")
// const newProjectInput = document.querySelector("[data-new-project-input]")

// newProjectForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const projectName = newProjectInput.value;
//     if (projectName == null || projectName === "") return //if empty name dont make the project
//     const project = createProject(projectName);
//     newProjectInput.value = null; //clear the form
//     projectArray.push(project);
//     saveAndRenderProject()
// })

initialize();
NewProjectModule.init();



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