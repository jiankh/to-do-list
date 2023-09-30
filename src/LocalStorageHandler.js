const LOCAL_STORAGE_PROJECT_KEY = "task.project";
const LOCAL_STORAGE_TASK_KEY = "task.todos";

let toDoArray = [];
let projectArray =[];


function initialize() {
    toDoArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || [];
    projectArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

    renderProject();
}



const projectContainer = document.querySelector("[data-projects-list]");

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
}

export {saveAndRenderProject, pushToProjectStorage, renderProject, initialize}
