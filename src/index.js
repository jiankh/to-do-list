import EventListenerModule from './NewTaskModule';
import { NewProjectModule } from "./NewProjectModule";
import { initialize, renderTask } from "./LocalStorageHandler";
import NewTaskModule from './NewTaskModule';

EventListenerModule.init();

initialize();
NewProjectModule.init(); //contains the listener for new
NewTaskModule.init();




import {setSelected, saveAndRenderProject} from "./LocalStorageHandler"

// SELECTED ELEMENT
const projectList = document.querySelector("[data-projects-list]");

projectList.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
        setSelected(e.target.dataset.projectId);    
        saveAndRenderProject();
    }
})


