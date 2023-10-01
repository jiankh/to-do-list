import createCard from "./createCard";

const LOCAL_STORAGE_PROJECT_KEY = "task.project";
const LOCAL_STORAGE_TASK_KEY = "task.todos";
const projectContainer = document.querySelector("[data-projects-list]");
const main = document.querySelector(".main-content");

let toDoArray = [];
let projectArray =[];


function initialize() {
    toDoArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || [];
    projectArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

    renderProject();
    renderTask();
}


function saveProject() {
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectArray))
}

function saveAndRenderProject() {
    saveProject();
    renderProject();
};

function renderProject() {
    clearElement(projectContainer);
    projectArray.forEach((project) => {
        const projectElement = document.createElement("li");
        projectElement.dataset.projectId = project.id;
        projectElement.classList.add("project-name");
        projectElement.innerText = project.name;
        projectContainer.appendChild(projectElement)
    })
}

function pushToProjectStorage(string) {
    projectArray.push(string);
};

function clearElement(element) {
    element.innerHTML = "";
};

// TASKS 

function renderTask() {
    clearElement(main);
    toDoArray.forEach((task) => {
        createCard(task.title, task.dueDate, task.priority, task.id);
    })
}

function saveTask() {
    localStorage.setItem(LOCAL_STORAGE_TASK_KEY, JSON.stringify(toDoArray))
}

function saveAndRenderTask() {
    saveTask();
    renderTask();
};

function pushToTaskStorage(string) {
    toDoArray.push(string);
}


export {saveAndRenderProject, 
        pushToProjectStorage, 
        renderProject, 
        initialize, 
        renderTask, 
        saveAndRenderTask,
        pushToTaskStorage    
    }
