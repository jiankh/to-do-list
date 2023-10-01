import {setSelected, saveAndRenderProject} from "./LocalStorageHandler"

// SELECTED ELEMENT
const projectList = document.querySelector("[data-projects-list]");

projectList.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
        setSelected(e.target.dataset.projectId);    
        saveAndRenderProject();

    }
})

