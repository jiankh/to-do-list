import Project from "./Project"
import {saveAndRenderProject, pushToProjectStorage, renderProject} from "./LocalStorageHandler"

const NewProjectModule = {
    init() {
        renderProject();

        const newProjectForm = document.querySelector("[data-new-project-form]")
        const newProjectInput = document.querySelector("[data-new-project-input]")

        newProjectForm.addEventListener("submit", (e) => {
            e.preventDefault()
            const projectName = newProjectInput.value;
            if (projectName == null || projectName === "") return //if empty name dont make the project
            const project = new Project(projectName);
            newProjectInput.value = null; //clear the form
            pushToProjectStorage(project);
            saveAndRenderProject()
        })
    },
};

export {NewProjectModule}