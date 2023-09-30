/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/LocalStorageHandler.js":
/*!************************************!*\
  !*** ./src/LocalStorageHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialize: () => (/* binding */ initialize),
/* harmony export */   pushToProjectStorage: () => (/* binding */ pushToProjectStorage),
/* harmony export */   renderProject: () => (/* binding */ renderProject),
/* harmony export */   saveAndRenderProject: () => (/* binding */ saveAndRenderProject)
/* harmony export */ });
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




/***/ }),

/***/ "./src/NewProjectModule.js":
/*!*********************************!*\
  !*** ./src/NewProjectModule.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewProjectModule: () => (/* binding */ NewProjectModule)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorageHandler */ "./src/LocalStorageHandler.js");



const NewProjectModule = {
    init() {
        (0,_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_1__.renderProject)();
        
        const newProjectForm = document.querySelector("[data-new-project-form]")
        const newProjectInput = document.querySelector("[data-new-project-input]")

        newProjectForm.addEventListener("submit", (e) => {
            e.preventDefault()
            const projectName = newProjectInput.value;
            if (projectName == null || projectName === "") return //if empty name dont make the project
            const project = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](projectName);
            newProjectInput.value = null; //clear the form
            (0,_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_1__.pushToProjectStorage)(project);
            (0,_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_1__.saveAndRenderProject)()
        })
    },
};




/***/ }),

/***/ "./src/NewTaskModule.js":
/*!******************************!*\
  !*** ./src/NewTaskModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const NewTaskModule = {
  init() {
    createDialog();

    const addTaskBtn = document.querySelector(".add-task-btn");
    const form = document.querySelector(".new-task-form")
    let closeTaskDialog = document.querySelector(".close-window");
    let submitTaskBtn = document.querySelector(".add-task-button");

    addTaskBtn.addEventListener("click", () => {
      createDialog();
      showDialog();
    });

    closeTaskDialog.addEventListener("click", (e) => {
      e.preventDefault();
      form.reset();
      hideDialog();
    });

    submitTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
      parseForm();
      form.reset();
      hideDialog();
    });
  },
};


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

  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTaskModule);

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
/* harmony import */ var _NewTaskModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewTaskModule */ "./src/NewTaskModule.js");
/* harmony import */ var _NewProjectModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewProjectModule */ "./src/NewProjectModule.js");
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocalStorageHandler */ "./src/LocalStorageHandler.js");
// import Todos from "./Todos";






// const LOCAL_STORAGE_PROJECT_KEY = "task.project";
// let projectArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

// const LOCAL_STORAGE_TASK_KEY = "task.todos";
// let toDoArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || [];

_NewTaskModule__WEBPACK_IMPORTED_MODULE_1__["default"].init();


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

(0,_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_3__.initialize)();
_NewProjectModule__WEBPACK_IMPORTED_MODULE_2__.NewProjectModule.init();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUMvQztBQUNnRTtBQUMvRjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0RBQU87QUFDdkMsMENBQTBDO0FBQzFDLFlBQVksMEVBQW9CO0FBQ2hDLFlBQVksMEVBQW9CO0FBQ2hDLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7OztBQ3JKOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7O1VDVHRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNnQztBQUNrQjtBQUNJO0FBQ0g7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxnRUFBVTtBQUNWLCtEQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvTG9jYWxTdG9yYWdlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL05ld1Byb2plY3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9OZXdUYXNrTW9kdWxlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZID0gXCJ0YXNrLnByb2plY3RcIjtcclxuY29uc3QgTE9DQUxfU1RPUkFHRV9UQVNLX0tFWSA9IFwidGFzay50b2Rvc1wiO1xyXG5cclxubGV0IHRvRG9BcnJheSA9IFtdO1xyXG5sZXQgcHJvamVjdEFycmF5ID1bXTtcclxuXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgdG9Eb0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1RBU0tfS0VZKSkgfHwgW107XHJcbiAgICBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkpKSB8fCBbXTtcclxuXHJcbiAgICByZW5kZXJQcm9qZWN0KCk7XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0cy1saXN0XVwiKTtcclxuXHJcbmZ1bmN0aW9uIHNhdmVQcm9qZWN0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZUFuZFJlbmRlclByb2plY3QoKSB7XHJcbiAgICBzYXZlUHJvamVjdCgpO1xyXG4gICAgcmVuZGVyUHJvamVjdCgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdCgpIHtcclxuICAgIGNsZWFyRWxlbWVudChwcm9qZWN0Q29udGFpbmVyKTtcclxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xyXG4gICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwdXNoVG9Qcm9qZWN0U3RvcmFnZShzdHJpbmcpIHtcclxuICAgIHByb2plY3RBcnJheS5wdXNoKHN0cmluZyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcblxyXG5leHBvcnQge3NhdmVBbmRSZW5kZXJQcm9qZWN0LCBwdXNoVG9Qcm9qZWN0U3RvcmFnZSwgcmVuZGVyUHJvamVjdCwgaW5pdGlhbGl6ZX1cclxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiXHJcbmltcG9ydCB7c2F2ZUFuZFJlbmRlclByb2plY3QsIHB1c2hUb1Byb2plY3RTdG9yYWdlLCByZW5kZXJQcm9qZWN0fSBmcm9tIFwiLi9Mb2NhbFN0b3JhZ2VIYW5kbGVyXCJcclxuXHJcbmNvbnN0IE5ld1Byb2plY3RNb2R1bGUgPSB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHJlbmRlclByb2plY3QoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctcHJvamVjdC1mb3JtXVwiKVxyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctcHJvamVjdC1pbnB1dF1cIilcclxuXHJcbiAgICAgICAgbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PSBudWxsIHx8IHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm4gLy9pZiBlbXB0eSBuYW1lIGRvbnQgbWFrZSB0aGUgcHJvamVjdFxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBudWxsOyAvL2NsZWFyIHRoZSBmb3JtXHJcbiAgICAgICAgICAgIHB1c2hUb1Byb2plY3RTdG9yYWdlKHByb2plY3QpO1xyXG4gICAgICAgICAgICBzYXZlQW5kUmVuZGVyUHJvamVjdCgpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHtOZXdQcm9qZWN0TW9kdWxlfSIsIlxyXG5jb25zdCBOZXdUYXNrTW9kdWxlID0ge1xyXG4gIGluaXQoKSB7XHJcbiAgICBjcmVhdGVEaWFsb2coKTtcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idG5cIik7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1mb3JtXCIpXHJcbiAgICBsZXQgY2xvc2VUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS13aW5kb3dcIik7XHJcbiAgICBsZXQgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpO1xyXG5cclxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY3JlYXRlRGlhbG9nKCk7XHJcbiAgICAgIHNob3dEaWFsb2coKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNsb3NlVGFza0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgIGhpZGVEaWFsb2coKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcGFyc2VGb3JtKCk7XHJcbiAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgaGlkZURpYWxvZygpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEaWFsb2coKSB7XHJcbiAgY29uc3QgbmV3VGFza0RpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XHJcbiAgbmV3VGFza0RpYWxvZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1Rhc2tEaWFsb2dcIik7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGRpdiBlbGVtZW50IHdpdGggdGhlICdmb3JtLWNvbnRhaW5lcicgY2xhc3NcclxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9ybS1jb250YWluZXJcIjtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgZm9yIHRoZSBmb3JtIHRpdGxlXHJcbiAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb3JtVGl0bGUuY2xhc3NOYW1lID0gXCJmb3JtLXRpdGxlXCI7XHJcbiAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgYSBuZXcgdGFza1wiO1xyXG5cclxuICAvLyBDcmVhdGUgYSBmb3JtIGVsZW1lbnQgd2l0aCB0aGUgJ25ldy10YXNrLWZvcm0nIGNsYXNzXHJcbiAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBuZXdUYXNrRm9ybS5jbGFzc05hbWUgPSBcIm5ldy10YXNrLWZvcm1cIjtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgZm9yIHRoZSB0YXNrIHRpdGxlIGNvbnRhaW5lclxyXG4gIGNvbnN0IHRhc2tUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIC8vIENyZWF0ZSBhbiBpbnB1dCBlbGVtZW50IGZvciB0aGUgdGFzayB0aXRsZVxyXG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHRhc2tUaXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICB0YXNrVGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFza1wiO1xyXG4gIHRhc2tUaXRsZUlucHV0Lm5hbWUgPSBcInRhc2stdGl0bGVcIjtcclxuICB0YXNrVGl0bGVJbnB1dC5pZCA9IFwidGFzay10aXRsZVwiO1xyXG4gIHRhc2tUaXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgLy8gQXBwZW5kIHRoZSB0YXNrIHRpdGxlIGlucHV0IHRvIGl0cyBjb250YWluZXJcclxuICB0YXNrVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpO1xyXG5cclxuICAvLyBDcmVhdGUgYSBkaXYgZWxlbWVudCBmb3IgdGhlIGRlc2NyaXB0aW9uIGNvbnRhaW5lclxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuIGlucHV0IGVsZW1lbnQgZm9yIHRoZSBkZXNjcmlwdGlvblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIjtcclxuICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwiZGVzY3JpcHRpb25cIjtcclxuXHJcbiAgLy8gQXBwZW5kIHRoZSBkZXNjcmlwdGlvbiBpbnB1dCB0byBpdHMgY29udGFpbmVyXHJcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGRpdiBlbGVtZW50IGZvciB0aGUgZHVlIGRhdGUgY29udGFpbmVyXHJcbiAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIC8vIENyZWF0ZSBhbiBpbnB1dCBlbGVtZW50IGZvciB0aGUgZHVlIGRhdGVcclxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcclxuICBkdWVEYXRlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkR1ZSBEYXRlXCI7XHJcbiAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImRhdGVcIjtcclxuICBkdWVEYXRlSW5wdXQuaWQgPSBcImRhdGVcIjtcclxuXHJcbiAgLy8gQXBwZW5kIHRoZSBkdWUgZGF0ZSBpbnB1dCB0byBpdHMgY29udGFpbmVyXHJcbiAgZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG5cclxuICAvLyBDcmVhdGUgYSBkaXYgZWxlbWVudCBmb3IgdGhlIHByaW9yaXR5IGNvbnRhaW5lclxyXG4gIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktY29udGFpbmVyXCIpXHJcblxyXG4gIC8vIENyZWF0ZSBhIGxhYmVsIGVsZW1lbnQgZm9yIHRoZSBwcmlvcml0eSBjaGVja2JveFxyXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaCBwcmlvcml0eT9cIjtcclxuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xyXG5cclxuICAvLyBDcmVhdGUgYW4gaW5wdXQgZWxlbWVudCBmb3IgdGhlIHByaW9yaXR5IGNoZWNrYm94XHJcbiAgY29uc3QgcHJpb3JpdHlDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBwcmlvcml0eUNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgcHJpb3JpdHlDaGVja2JveC5uYW1lID0gXCJwcmlvcml0eVwiO1xyXG4gIHByaW9yaXR5Q2hlY2tib3guaWQgPSBcInByaW9yaXR5XCI7XHJcblxyXG4gIC8vIEFwcGVuZCB0aGUgbGFiZWwgYW5kIGNoZWNrYm94IHRvIHRoZSBwcmlvcml0eSBjb250YWluZXJcclxuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUNoZWNrYm94KTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgZm9yIHRoZSBkaWFsb2cgYnV0dG9uIGNvbnRhaW5lclxyXG4gIGNvbnN0IGRpYWxvZ0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGlhbG9nQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaWFsb2ctYnRuLWNvbnRhaW5lclwiKVxyXG5cclxuICAvLyBDcmVhdGUgYSBidXR0b24gZWxlbWVudCBmb3IgYWRkaW5nIHRoZSB0YXNrXHJcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgYWRkVGFza0J1dHRvbi5jbGFzc05hbWUgPSBcImFkZC10YXNrLWJ1dHRvblwiO1xyXG4gIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGJ1dHRvbiBlbGVtZW50IGZvciBjbG9zaW5nIHRoZSBkaWFsb2dcclxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS13aW5kb3dcIjtcclxuICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcclxuXHJcbiAgLy8gQXBwZW5kIHRoZSBidXR0b25zIHRvIHRoZSBkaWFsb2cgYnV0dG9uIGNvbnRhaW5lclxyXG4gIGRpYWxvZ0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcclxuICBkaWFsb2dCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG5cclxuICAvLyBBcHBlbmQgYWxsIGVsZW1lbnRzIHRvIHRoZSByZXNwZWN0aXZlIHBhcmVudCBlbGVtZW50c1xyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcclxuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVDb250YWluZXIpO1xyXG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcclxuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlQ29udGFpbmVyKTtcclxuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcik7XHJcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGlhbG9nQnRuQ29udGFpbmVyKTtcclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcclxuICBuZXdUYXNrRGlhbG9nLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG5cclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIilcclxuICBtYWluLmFwcGVuZENoaWxkKG5ld1Rhc2tEaWFsb2cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RGlhbG9nKCkge1xyXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3VGFza0RpYWxvZ1wiKVxyXG4gIGRpYWxvZy5zaG93KClcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZURpYWxvZygpIHtcclxuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Rhc2tEaWFsb2dcIilcclxuICBkaWFsb2cuY2xvc2UoKVxyXG59XHJcblxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IE5ld1Rhc2tNb2R1bGU7IiwiXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdExpc3QgPSBbXSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnByb2plY3RMaXN0ID0gcHJvamVjdExpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgVG9kb3MgZnJvbSBcIi4vVG9kb3NcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xyXG5pbXBvcnQgRXZlbnRMaXN0ZW5lck1vZHVsZSBmcm9tICcuL05ld1Rhc2tNb2R1bGUnO1xyXG5pbXBvcnQgeyBOZXdQcm9qZWN0TW9kdWxlIH0gZnJvbSBcIi4vTmV3UHJvamVjdE1vZHVsZVwiO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSBcIi4vTG9jYWxTdG9yYWdlSGFuZGxlclwiO1xyXG5cclxuXHJcbi8vIGNvbnN0IExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkgPSBcInRhc2sucHJvamVjdFwiO1xyXG4vLyBsZXQgcHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZKSkgfHwgW107XHJcblxyXG4vLyBjb25zdCBMT0NBTF9TVE9SQUdFX1RBU0tfS0VZID0gXCJ0YXNrLnRvZG9zXCI7XHJcbi8vIGxldCB0b0RvQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfVEFTS19LRVkpKSB8fCBbXTtcclxuXHJcbkV2ZW50TGlzdGVuZXJNb2R1bGUuaW5pdCgpO1xyXG5cclxuXHJcbi8vcHJvamVjdCBzZWN0aW9uXHJcblxyXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3RzLWxpc3RdXCIpO1xyXG5cclxuZnVuY3Rpb24gc2F2ZVByb2plY3QoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlQW5kUmVuZGVyUHJvamVjdCgpIHtcclxuICAgIHNhdmVQcm9qZWN0KCk7XHJcbiAgICByZW5kZXJQcm9qZWN0KCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KCkge1xyXG4gICAgY2xlYXJFbGVtZW50KHByb2plY3RDb250YWluZXIpO1xyXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcclxuICAgICAgICBwcm9qZWN0RWxlbWVudC5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudClcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuXHJcblxyXG4vL05FVyBQUk9KRUNUIEJVVFRPTiBBRERcclxuLy8gY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtZm9ybV1cIilcclxuLy8gY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LWlucHV0XVwiKVxyXG5cclxuLy8gbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbi8vICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IG5ld1Byb2plY3RJbnB1dC52YWx1ZTtcclxuLy8gICAgIGlmIChwcm9qZWN0TmFtZSA9PSBudWxsIHx8IHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm4gLy9pZiBlbXB0eSBuYW1lIGRvbnQgbWFrZSB0aGUgcHJvamVjdFxyXG4vLyAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4vLyAgICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gbnVsbDsgLy9jbGVhciB0aGUgZm9ybVxyXG4vLyAgICAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdCk7XHJcbi8vICAgICBzYXZlQW5kUmVuZGVyUHJvamVjdCgpXHJcbi8vIH0pXHJcblxyXG5pbml0aWFsaXplKCk7XHJcbk5ld1Byb2plY3RNb2R1bGUuaW5pdCgpO1xyXG5cclxuXHJcblxyXG4vLyAvL1RBU0sgUkVOREVSXHJcblxyXG4vLyBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stZm9ybVwiKTtcclxuLy8gY29uc3QgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpO1xyXG4vLyBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xyXG4vLyBjb25zdCBuZXdUYXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKTtcclxuLy8gY29uc3QgbmV3VGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcclxuXHJcbi8vIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgIGNvbnN0IHRhc2tOYW1lID0gbmV3VGFza1RpdGxlLnZhbHVlO1xyXG4vLyAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gbmV3VGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xyXG4vLyAgICAgY29uc3QgdGFza0RhdGUgPSBuZXdUYXNrRGF0ZS52YWx1ZTtcclxuLy8gICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IG5ld1Rhc2tQcmlvcml0eS52YWx1ZTtcclxuXHJcbi8vICAgICB0YXNrID0gbmV3IFRvZG9zKHRhc2tOYW1lLHRhc2tEZXNjcmlwdGlvbix0YXNrRGF0ZSx0YXNrUHJpb3JpdHkpXHJcbi8vICAgICB0b0RvQXJyYXkucHVzaCh0YXNrKTtcclxuLy8gICAgIHNhdmVBbmRSZW5kZXJUYXNrKCk7XHJcbi8vIH0pXHJcblxyXG5cclxuLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG5cclxuLy8gZnVuY3Rpb24gcmVuZGVyVGFzaygpIHtcclxuLy8gICAgIGNsZWFyRWxlbWVudChtYWluKTtcclxuLy8gICAgIHRvRG9BcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbi8vICAgICAgICAgY3JlYXRlQ2FyZCh0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHksIHRhc2suaWQpO1xyXG4vLyAgICAgfSlcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gc2F2ZVRhc2soKSB7XHJcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1RBU0tfS0VZLCBKU09OLnN0cmluZ2lmeSh0b0RvQXJyYXkpKVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBzYXZlQW5kUmVuZGVyVGFzaygpIHtcclxuLy8gICAgIHJlbmRlclRhc2soKVxyXG4vLyAgICAgc2F2ZVRhc2soKVxyXG4vLyB9XHJcblxyXG4vLyByZW5kZXJUYXNrKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=