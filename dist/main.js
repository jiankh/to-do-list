/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/EventListenerModule.js":
/*!************************************!*\
  !*** ./src/EventListenerModule.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newTaskDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTaskDialog */ "./src/newTaskDialog.js");

// import parseForm from "./parseForm"

// Define the EventListenerModule
const EventListenerModule = {
  init() {
    (0,_newTaskDialog__WEBPACK_IMPORTED_MODULE_0__.createDialog)();

    const addTaskBtn = document.querySelector(".add-task-btn");
    const allTaskBtn = document.querySelector(".all-task-btn");
    const todayTaskBtn = document.querySelector(".today-task-btn");
    const priorityTaskBtn = document.querySelector(".priority-task-btn");
    const form = document.querySelector(".new-task-form")
    let closeTaskDialog = document.querySelector(".close-window");
    let submitTaskBtn = document.querySelector(".add-task-button");


    addTaskBtn.addEventListener("click", () => {
      (0,_newTaskDialog__WEBPACK_IMPORTED_MODULE_0__.createDialog)();
      const dialog = document.querySelector("#newTaskDialog")
      ;(0,_newTaskDialog__WEBPACK_IMPORTED_MODULE_0__.showDialog)()
    });

    closeTaskDialog.addEventListener("click", (e) => {
      e.preventDefault();
      form.reset();
      (0,_newTaskDialog__WEBPACK_IMPORTED_MODULE_0__.hideDialog)();
    });

    submitTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
      parseForm();
      form.reset();
      (0,_newTaskDialog__WEBPACK_IMPORTED_MODULE_0__.hideDialog)();
    });
  },
};
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventListenerModule);

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class Project {
    constructor(name, projectList = []) {
        this.id = Date.now().toString();
        this.name = name;
        this.projectList = projectList;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/newTaskDialog.js":
/*!******************************!*\
  !*** ./src/newTaskDialog.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDialog: () => (/* binding */ createDialog),
/* harmony export */   hideDialog: () => (/* binding */ hideDialog),
/* harmony export */   showDialog: () => (/* binding */ showDialog)
/* harmony export */ });


function createDialog() {
    const newTaskDialog = document.createElement("dialog");
    newTaskDialog.setAttribute("id", "newTaskDialog");

    // Create a div element with the 'form-container' class
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";

    // Create a div element for the form title
    const formTitle = document.createElement("div");
    formTitle.className = "form-title";
    formTitle.textContent = "Add a new task";

    // Create a form element with the 'new-task-form' class
    const newTaskForm = document.createElement("form");
    newTaskForm.className = "new-task-form";

    // Create a div element for the task title container
    const taskTitleContainer = document.createElement("div");

    // Create an input element for the task title
    const taskTitleInput = document.createElement("input");
    taskTitleInput.type = "text";
    taskTitleInput.placeholder = "Task";
    taskTitleInput.name = "task-title";
    taskTitleInput.id = "task-title";
    taskTitleInput.required = true;

    // Append the task title input to its container
    taskTitleContainer.appendChild(taskTitleInput);

    // Create a div element for the description container
    const descriptionContainer = document.createElement("div");

    // Create an input element for the description
    const descriptionInput = document.createElement("textarea");
    descriptionInput.placeholder = "Description";
    descriptionInput.name = "description";
    descriptionInput.id = "description";

    // Append the description input to its container
    descriptionContainer.appendChild(descriptionInput);

    // Create a div element for the due date container
    const dueDateContainer = document.createElement("div");

    // Create an input element for the due date
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.placeholder = "Due Date";
    dueDateInput.name = "date";
    dueDateInput.id = "date";

    // Append the due date input to its container
    dueDateContainer.appendChild(dueDateInput);

    // Create a div element for the priority container
    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("priority-container")

    // Create a label element for the priority checkbox
    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "High priority?";
    priorityLabel.setAttribute("for", "priority");

    // Create an input element for the priority checkbox
    const priorityCheckbox = document.createElement("input");
    priorityCheckbox.type = "checkbox";
    priorityCheckbox.name = "priority";
    priorityCheckbox.id = "priority";

    // Append the label and checkbox to the priority container
    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priorityCheckbox);

    // Create a div element for the dialog button container
    const dialogBtnContainer = document.createElement("div");
    dialogBtnContainer.classList.add("dialog-btn-container")

    // Create a button element for adding the task
    const addTaskButton = document.createElement("button");
    addTaskButton.className = "add-task-button";
    addTaskButton.textContent = "Add Task";

    // Create a button element for closing the dialog
    const closeButton = document.createElement("button");
    closeButton.className = "close-window";
    closeButton.textContent = "Close";

    // Append the buttons to the dialog button container
    dialogBtnContainer.appendChild(addTaskButton);
    dialogBtnContainer.appendChild(closeButton);

    // Append all elements to the respective parent elements
    formContainer.appendChild(formTitle);
    newTaskForm.appendChild(taskTitleContainer);
    newTaskForm.appendChild(descriptionContainer);
    newTaskForm.appendChild(dueDateContainer);
    newTaskForm.appendChild(priorityContainer);
    newTaskForm.appendChild(dialogBtnContainer);
    formContainer.appendChild(newTaskForm);
    newTaskDialog.appendChild(formContainer);

    const main = document.querySelector(".main-content")
    main.appendChild(newTaskDialog);
}

function showDialog() {
    const dialog = document.querySelector("#newTaskDialog")
    dialog.show()
}

function hideDialog() {
    const dialog = document.querySelector("#newTaskDialog")
    dialog.close()
}









/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _EventListenerModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventListenerModule */ "./src/EventListenerModule.js");
// import Todos from "./Todos";



const LOCAL_STORAGE_PROJECT_KEY = "task.project";
let projectArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

const LOCAL_STORAGE_TASK_KEY = "task.todos";
let toDoArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || [];

_EventListenerModule__WEBPACK_IMPORTED_MODULE_1__["default"].init();


//project section

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

function clearElement(element) {
    element.innerHTML = "";
}


//NEW PROJECT BUTTON ADD
const newProjectForm = document.querySelector("[data-new-project-form]")
const newProjectInput = document.querySelector("[data-new-project-input]")

newProjectForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const projectName = newProjectInput.value;
    if (projectName == null || projectName === "") return //if empty name dont make the project
    const project = createProject(projectName);
    newProjectInput.value = null; //clear the form
    projectArray.push(project);
    saveAndRenderProject()
})

function createProject(name) {
    return new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](name)
}

renderProject()


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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0V2ZW50TGlzdGVuZXJNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmV3VGFza0RpYWxvZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZURpYWxvZywgc2hvd0RpYWxvZywgaGlkZURpYWxvZ30gZnJvbSBcIi4vbmV3VGFza0RpYWxvZ1wiXHJcbi8vIGltcG9ydCBwYXJzZUZvcm0gZnJvbSBcIi4vcGFyc2VGb3JtXCJcclxuXHJcbi8vIERlZmluZSB0aGUgRXZlbnRMaXN0ZW5lck1vZHVsZVxyXG5jb25zdCBFdmVudExpc3RlbmVyTW9kdWxlID0ge1xyXG4gIGluaXQoKSB7XHJcbiAgICBjcmVhdGVEaWFsb2coKTtcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idG5cIik7XHJcbiAgICBjb25zdCBhbGxUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtdGFzay1idG5cIik7XHJcbiAgICBjb25zdCB0b2RheVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LXRhc2stYnRuXCIpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS10YXNrLWJ0blwiKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWZvcm1cIilcclxuICAgIGxldCBjbG9zZVRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLXdpbmRvd1wiKTtcclxuICAgIGxldCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XHJcblxyXG5cclxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY3JlYXRlRGlhbG9nKCk7XHJcbiAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3VGFza0RpYWxvZ1wiKVxyXG4gICAgICBzaG93RGlhbG9nKClcclxuICAgIH0pO1xyXG5cclxuICAgIGNsb3NlVGFza0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgIGhpZGVEaWFsb2coKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcGFyc2VGb3JtKCk7XHJcbiAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgaGlkZURpYWxvZygpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBFdmVudExpc3RlbmVyTW9kdWxlOyIsIlxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3RMaXN0ID0gW10pIHtcclxuICAgICAgICB0aGlzLmlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsIlxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGlhbG9nKCkge1xyXG4gICAgY29uc3QgbmV3VGFza0RpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XHJcbiAgICBuZXdUYXNrRGlhbG9nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3VGFza0RpYWxvZ1wiKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBkaXYgZWxlbWVudCB3aXRoIHRoZSAnZm9ybS1jb250YWluZXInIGNsYXNzXHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIGRpdiBlbGVtZW50IGZvciB0aGUgZm9ybSB0aXRsZVxyXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvcm1UaXRsZS5jbGFzc05hbWUgPSBcImZvcm0tdGl0bGVcIjtcclxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IHRhc2tcIjtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBmb3JtIGVsZW1lbnQgd2l0aCB0aGUgJ25ldy10YXNrLWZvcm0nIGNsYXNzXHJcbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgbmV3VGFza0Zvcm0uY2xhc3NOYW1lID0gXCJuZXctdGFzay1mb3JtXCI7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgZm9yIHRoZSB0YXNrIHRpdGxlIGNvbnRhaW5lclxyXG4gICAgY29uc3QgdGFza1RpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW4gaW5wdXQgZWxlbWVudCBmb3IgdGhlIHRhc2sgdGl0bGVcclxuICAgIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGFza1RpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgdGFza1RpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2tcIjtcclxuICAgIHRhc2tUaXRsZUlucHV0Lm5hbWUgPSBcInRhc2stdGl0bGVcIjtcclxuICAgIHRhc2tUaXRsZUlucHV0LmlkID0gXCJ0YXNrLXRpdGxlXCI7XHJcbiAgICB0YXNrVGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gQXBwZW5kIHRoZSB0YXNrIHRpdGxlIGlucHV0IHRvIGl0cyBjb250YWluZXJcclxuICAgIHRhc2tUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGVJbnB1dCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgZm9yIHRoZSBkZXNjcmlwdGlvbiBjb250YWluZXJcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW4gaW5wdXQgZWxlbWVudCBmb3IgdGhlIGRlc2NyaXB0aW9uXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIjtcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uXCI7XHJcblxyXG4gICAgLy8gQXBwZW5kIHRoZSBkZXNjcmlwdGlvbiBpbnB1dCB0byBpdHMgY29udGFpbmVyXHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBkaXYgZWxlbWVudCBmb3IgdGhlIGR1ZSBkYXRlIGNvbnRhaW5lclxyXG4gICAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGFuIGlucHV0IGVsZW1lbnQgZm9yIHRoZSBkdWUgZGF0ZVxyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcclxuICAgIGR1ZURhdGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRHVlIERhdGVcIjtcclxuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkYXRlXCI7XHJcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSBcImRhdGVcIjtcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIGR1ZSBkYXRlIGlucHV0IHRvIGl0cyBjb250YWluZXJcclxuICAgIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBkaXYgZWxlbWVudCBmb3IgdGhlIHByaW9yaXR5IGNvbnRhaW5lclxyXG4gICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWNvbnRhaW5lclwiKVxyXG5cclxuICAgIC8vIENyZWF0ZSBhIGxhYmVsIGVsZW1lbnQgZm9yIHRoZSBwcmlvcml0eSBjaGVja2JveFxyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIkhpZ2ggcHJpb3JpdHk/XCI7XHJcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhbiBpbnB1dCBlbGVtZW50IGZvciB0aGUgcHJpb3JpdHkgY2hlY2tib3hcclxuICAgIGNvbnN0IHByaW9yaXR5Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBwcmlvcml0eUNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBwcmlvcml0eUNoZWNrYm94Lm5hbWUgPSBcInByaW9yaXR5XCI7XHJcbiAgICBwcmlvcml0eUNoZWNrYm94LmlkID0gXCJwcmlvcml0eVwiO1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgbGFiZWwgYW5kIGNoZWNrYm94IHRvIHRoZSBwcmlvcml0eSBjb250YWluZXJcclxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlDaGVja2JveCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgZm9yIHRoZSBkaWFsb2cgYnV0dG9uIGNvbnRhaW5lclxyXG4gICAgY29uc3QgZGlhbG9nQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpYWxvZ0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlhbG9nLWJ0bi1jb250YWluZXJcIilcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBidXR0b24gZWxlbWVudCBmb3IgYWRkaW5nIHRoZSB0YXNrXHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZFRhc2tCdXR0b24uY2xhc3NOYW1lID0gXCJhZGQtdGFzay1idXR0b25cIjtcclxuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgYnV0dG9uIGVsZW1lbnQgZm9yIGNsb3NpbmcgdGhlIGRpYWxvZ1xyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS13aW5kb3dcIjtcclxuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgYnV0dG9ucyB0byB0aGUgZGlhbG9nIGJ1dHRvbiBjb250YWluZXJcclxuICAgIGRpYWxvZ0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcclxuICAgIGRpYWxvZ0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcblxyXG4gICAgLy8gQXBwZW5kIGFsbCBlbGVtZW50cyB0byB0aGUgcmVzcGVjdGl2ZSBwYXJlbnQgZWxlbWVudHNcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcclxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRsZUNvbnRhaW5lcik7XHJcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbiAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlQ29udGFpbmVyKTtcclxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKTtcclxuICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGRpYWxvZ0J0bkNvbnRhaW5lcik7XHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcclxuICAgIG5ld1Rhc2tEaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG5ld1Rhc2tEaWFsb2cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RGlhbG9nKCkge1xyXG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdUYXNrRGlhbG9nXCIpXHJcbiAgICBkaWFsb2cuc2hvdygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVEaWFsb2coKSB7XHJcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Rhc2tEaWFsb2dcIilcclxuICAgIGRpYWxvZy5jbG9zZSgpXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHtjcmVhdGVEaWFsb2csIHNob3dEaWFsb2csIGhpZGVEaWFsb2d9XHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IFRvZG9zIGZyb20gXCIuL1RvZG9zXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcclxuaW1wb3J0IEV2ZW50TGlzdGVuZXJNb2R1bGUgZnJvbSAnLi9FdmVudExpc3RlbmVyTW9kdWxlJztcclxuXHJcbmNvbnN0IExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkgPSBcInRhc2sucHJvamVjdFwiO1xyXG5sZXQgcHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZKSkgfHwgW107XHJcblxyXG5jb25zdCBMT0NBTF9TVE9SQUdFX1RBU0tfS0VZID0gXCJ0YXNrLnRvZG9zXCI7XHJcbmxldCB0b0RvQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfVEFTS19LRVkpKSB8fCBbXTtcclxuXHJcbkV2ZW50TGlzdGVuZXJNb2R1bGUuaW5pdCgpO1xyXG5cclxuXHJcbi8vcHJvamVjdCBzZWN0aW9uXHJcblxyXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3RzLWxpc3RdXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNhdmVQcm9qZWN0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZUFuZFJlbmRlclByb2plY3QoKSB7XHJcbiAgICBzYXZlUHJvamVjdCgpO1xyXG4gICAgcmVuZGVyUHJvamVjdCgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdCgpIHtcclxuICAgIGNsZWFyRWxlbWVudChwcm9qZWN0Q29udGFpbmVyKTtcclxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xyXG4gICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcblxyXG5cclxuLy9ORVcgUFJPSkVDVCBCVVRUT04gQUREXHJcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LWZvcm1dXCIpXHJcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctcHJvamVjdC1pbnB1dF1cIilcclxuXHJcbm5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWU7XHJcbiAgICBpZiAocHJvamVjdE5hbWUgPT0gbnVsbCB8fCBwcm9qZWN0TmFtZSA9PT0gXCJcIikgcmV0dXJuIC8vaWYgZW1wdHkgbmFtZSBkb250IG1ha2UgdGhlIHByb2plY3RcclxuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9IG51bGw7IC8vY2xlYXIgdGhlIGZvcm1cclxuICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xyXG4gICAgc2F2ZUFuZFJlbmRlclByb2plY3QoKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSlcclxufVxyXG5cclxucmVuZGVyUHJvamVjdCgpXHJcblxyXG5cclxuLy8gLy9UQVNLIFJFTkRFUlxyXG5cclxuLy8gY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWZvcm1cIik7XHJcbi8vIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKTtcclxuLy8gY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcclxuLy8gY29uc3QgbmV3VGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XHJcbi8vIGNvbnN0IG5ld1Rhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XHJcblxyXG4vLyBuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tUaXRsZS52YWx1ZTtcclxuLy8gICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IG5ld1Rhc2tEZXNjcmlwdGlvbi52YWx1ZTtcclxuLy8gICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3VGFza0RhdGUudmFsdWU7XHJcbi8vICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBuZXdUYXNrUHJpb3JpdHkudmFsdWU7XHJcblxyXG4vLyAgICAgdGFzayA9IG5ldyBUb2Rvcyh0YXNrTmFtZSx0YXNrRGVzY3JpcHRpb24sdGFza0RhdGUsdGFza1ByaW9yaXR5KVxyXG4vLyAgICAgdG9Eb0FycmF5LnB1c2godGFzayk7XHJcbi8vICAgICBzYXZlQW5kUmVuZGVyVGFzaygpO1xyXG4vLyB9KVxyXG5cclxuXHJcbi8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuXHJcbi8vIGZ1bmN0aW9uIHJlbmRlclRhc2soKSB7XHJcbi8vICAgICBjbGVhckVsZW1lbnQobWFpbik7XHJcbi8vICAgICB0b0RvQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4vLyAgICAgICAgIGNyZWF0ZUNhcmQodGFzay50aXRsZSwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5LCB0YXNrLmlkKTtcclxuLy8gICAgIH0pXHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHNhdmVUYXNrKCkge1xyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9UQVNLX0tFWSwgSlNPTi5zdHJpbmdpZnkodG9Eb0FycmF5KSlcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gc2F2ZUFuZFJlbmRlclRhc2soKSB7XHJcbi8vICAgICByZW5kZXJUYXNrKClcclxuLy8gICAgIHNhdmVUYXNrKClcclxuLy8gfVxyXG5cclxuLy8gcmVuZGVyVGFzaygpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9