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
/* harmony export */   pushToTaskStorage: () => (/* binding */ pushToTaskStorage),
/* harmony export */   renderProject: () => (/* binding */ renderProject),
/* harmony export */   renderTask: () => (/* binding */ renderTask),
/* harmony export */   saveAndRenderProject: () => (/* binding */ saveAndRenderProject),
/* harmony export */   saveAndRenderTask: () => (/* binding */ saveAndRenderTask)
/* harmony export */ });
/* harmony import */ var _createCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCard */ "./src/createCard.js");


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
        (0,_createCard__WEBPACK_IMPORTED_MODULE_0__["default"])(task.title, task.dueDate, task.priority, task.id);
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
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos */ "./src/Todos.js");
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorageHandler */ "./src/LocalStorageHandler.js");
/* harmony import */ var _formHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formHandler */ "./src/formHandler.js");




const NewTaskModule = {
  init() {
    //DIALOG POPUP SECTION
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

    // submitTaskBtn.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   createTask();
    //   form.reset();
    //   hideDialog();
    // });

    //HANDLING THE NEW TASK SUBMISSION
    const newTaskForm = document.querySelector(".new-task-form");
    const newTaskTitle = document.querySelector("#task-title");
    const newTaskDescription = document.querySelector("#description");
    const newTaskDate = document.querySelector("#date");
    const newTaskPriority = document.querySelector("#priority");

    newTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskName = newTaskTitle.value;
        const taskDescription = newTaskDescription.value;
        const taskDate = newTaskDate.value;
        const taskPriority = newTaskPriority.value;

        const task = new _Todos__WEBPACK_IMPORTED_MODULE_0__["default"](taskName,taskDescription,taskDate,taskPriority)
        console.log(task);
        (0,_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_1__.pushToTaskStorage)(task);
        (0,_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_1__.saveAndRenderTask)();
    })
  }
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

/***/ }),

/***/ "./src/Todos.js":
/*!**********************!*\
  !*** ./src/Todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCard */ "./src/createCard.js");


class Todos {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = Date.now().toString();
    }


    displayCard() {
        (0,_createCard__WEBPACK_IMPORTED_MODULE_0__["default"])(this.title, this.dueDate, this.priority)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todos);

/***/ }),

/***/ "./src/createCard.js":
/*!***************************!*\
  !*** ./src/createCard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createCard(title,dueDate, priority,id) {
    const main = document.querySelector(".main-content");

    const card = document.createElement("div");
    card.classList.add("todo-card")
    card.dataset.taskid = id;
    if (priority === true) {
        card.classList.add("priority");
    };


    // checkbox 
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "isComplete";
    checkbox.id = "isComplete";

    // card-title
    const cardTitle = document.createElement("div");
    cardTitle.className = "card-title";
    cardTitle.textContent = title;

    // card-details
    const cardDetails = document.createElement("div");
    cardDetails.className = "card-details";
    const detailsButton = document.createElement("button");
    detailsButton.textContent = "detail";
    cardDetails.appendChild(detailsButton);

    // card-date
    const cardDate = document.createElement("div");
    cardDate.className = "card-date";
    cardDate.textContent = dueDate;

    // delete-card
    const deleteCard = document.createElement("div");
    deleteCard.className = "delete-card";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteCard.appendChild(deleteButton);

    card.appendChild(checkbox);
    card.appendChild(cardTitle);
    card.appendChild(cardDetails);
    card.appendChild(cardDate);
    card.appendChild(deleteCard);


    main.appendChild(card);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCard);

/***/ }),

/***/ "./src/formHandler.js":
/*!****************************!*\
  !*** ./src/formHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos */ "./src/Todos.js");


function extractForm() {
    const title = document.querySelector('#task-title').value
    const description = document.querySelector('#description').value
    const date = document.querySelector('#date').value
    const isPriority = document.querySelector('#priority').checked

    return {title,description,date,isPriority}
}

function createTask() {
    const newTaskInfo = extractForm()
    const newTask = new _Todos__WEBPACK_IMPORTED_MODULE_0__["default"](newTaskInfo.title, newTaskInfo.description, newTaskInfo.date, newTaskInfo.isPriority)
    newTask.displayCard()
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
/* harmony import */ var _NewTaskModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewTaskModule */ "./src/NewTaskModule.js");
/* harmony import */ var _NewProjectModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewProjectModule */ "./src/NewProjectModule.js");
/* harmony import */ var _LocalStorageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalStorageHandler */ "./src/LocalStorageHandler.js");





_NewTaskModule__WEBPACK_IMPORTED_MODULE_0__["default"].init();

(0,_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_2__.initialize)();
_NewProjectModule__WEBPACK_IMPORTED_MODULE_1__.NewProjectModule.init(); //contains the listener for new
_NewTaskModule__WEBPACK_IMPORTED_MODULE_0__["default"].init();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVU7QUFDbEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUUwQjtBQUNnRTtBQUMvRjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0RBQU87QUFDdkMsMENBQTBDO0FBQzFDLFlBQVksMEVBQW9CO0FBQ2hDLFlBQVksMEVBQW9CO0FBQ2hDLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckI0QjtBQUM4QztBQUMvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOENBQUs7QUFDOUI7QUFDQSxRQUFRLHVFQUFpQjtBQUN6QixRQUFRLHVFQUFpQjtBQUN6QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7OztBQzNLNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O0FDVGU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7OztBQ2pCcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNwREU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOENBQUs7QUFDN0I7QUFDQTtBQUNBOzs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNJO0FBQ0g7QUFDUDtBQUM1QztBQUNBLHNEQUFtQjtBQUNuQjtBQUNBLGdFQUFVO0FBQ1YsK0RBQWdCLFNBQVM7QUFDekIsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0xvY2FsU3RvcmFnZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9OZXdQcm9qZWN0TW9kdWxlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvTmV3VGFza01vZHVsZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Ub2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3JtSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ2FyZCBmcm9tIFwiLi9jcmVhdGVDYXJkXCI7XHJcblxyXG5jb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZID0gXCJ0YXNrLnByb2plY3RcIjtcclxuY29uc3QgTE9DQUxfU1RPUkFHRV9UQVNLX0tFWSA9IFwidGFzay50b2Rvc1wiO1xyXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3RzLWxpc3RdXCIpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcblxyXG5sZXQgdG9Eb0FycmF5ID0gW107XHJcbmxldCBwcm9qZWN0QXJyYXkgPVtdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgICB0b0RvQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfVEFTS19LRVkpKSB8fCBbXTtcclxuICAgIHByb2plY3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSkpIHx8IFtdO1xyXG5cclxuICAgIHJlbmRlclByb2plY3QoKTtcclxuICAgIHJlbmRlclRhc2soKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNhdmVQcm9qZWN0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZUFuZFJlbmRlclByb2plY3QoKSB7XHJcbiAgICBzYXZlUHJvamVjdCgpO1xyXG4gICAgcmVuZGVyUHJvamVjdCgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdCgpIHtcclxuICAgIGNsZWFyRWxlbWVudChwcm9qZWN0Q29udGFpbmVyKTtcclxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xyXG4gICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwdXNoVG9Qcm9qZWN0U3RvcmFnZShzdHJpbmcpIHtcclxuICAgIHByb2plY3RBcnJheS5wdXNoKHN0cmluZyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG59O1xyXG5cclxuLy8gVEFTS1MgXHJcblxyXG5mdW5jdGlvbiByZW5kZXJUYXNrKCkge1xyXG4gICAgY2xlYXJFbGVtZW50KG1haW4pO1xyXG4gICAgdG9Eb0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICBjcmVhdGVDYXJkKHRhc2sudGl0bGUsIHRhc2suZHVlRGF0ZSwgdGFzay5wcmlvcml0eSwgdGFzay5pZCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlVGFzaygpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfVEFTS19LRVksIEpTT04uc3RyaW5naWZ5KHRvRG9BcnJheSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVBbmRSZW5kZXJUYXNrKCkge1xyXG4gICAgc2F2ZVRhc2soKTtcclxuICAgIHJlbmRlclRhc2soKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHB1c2hUb1Rhc2tTdG9yYWdlKHN0cmluZykge1xyXG4gICAgdG9Eb0FycmF5LnB1c2goc3RyaW5nKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7c2F2ZUFuZFJlbmRlclByb2plY3QsIFxyXG4gICAgICAgIHB1c2hUb1Byb2plY3RTdG9yYWdlLCBcclxuICAgICAgICByZW5kZXJQcm9qZWN0LCBcclxuICAgICAgICBpbml0aWFsaXplLCBcclxuICAgICAgICByZW5kZXJUYXNrLCBcclxuICAgICAgICBzYXZlQW5kUmVuZGVyVGFzayxcclxuICAgICAgICBwdXNoVG9UYXNrU3RvcmFnZSAgICBcclxuICAgIH1cclxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiXHJcbmltcG9ydCB7c2F2ZUFuZFJlbmRlclByb2plY3QsIHB1c2hUb1Byb2plY3RTdG9yYWdlLCByZW5kZXJQcm9qZWN0fSBmcm9tIFwiLi9Mb2NhbFN0b3JhZ2VIYW5kbGVyXCJcclxuXHJcbmNvbnN0IE5ld1Byb2plY3RNb2R1bGUgPSB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHJlbmRlclByb2plY3QoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtZm9ybV1cIilcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtaW5wdXRdXCIpXHJcblxyXG4gICAgICAgIG5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmV3UHJvamVjdElucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdE5hbWUgPT0gbnVsbCB8fCBwcm9qZWN0TmFtZSA9PT0gXCJcIikgcmV0dXJuIC8vaWYgZW1wdHkgbmFtZSBkb250IG1ha2UgdGhlIHByb2plY3RcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gbnVsbDsgLy9jbGVhciB0aGUgZm9ybVxyXG4gICAgICAgICAgICBwdXNoVG9Qcm9qZWN0U3RvcmFnZShwcm9qZWN0KTtcclxuICAgICAgICAgICAgc2F2ZUFuZFJlbmRlclByb2plY3QoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHtOZXdQcm9qZWN0TW9kdWxlfSIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi9Ub2Rvc1wiO1xyXG5pbXBvcnQge3B1c2hUb1Rhc2tTdG9yYWdlLCBzYXZlQW5kUmVuZGVyVGFza30gZnJvbSBcIi4vTG9jYWxTdG9yYWdlSGFuZGxlclwiXHJcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9mb3JtSGFuZGxlclwiO1xyXG5cclxuY29uc3QgTmV3VGFza01vZHVsZSA9IHtcclxuICBpbml0KCkge1xyXG4gICAgLy9ESUFMT0cgUE9QVVAgU0VDVElPTlxyXG4gICAgY3JlYXRlRGlhbG9nKCk7XHJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idG5cIik7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1mb3JtXCIpXHJcbiAgICBsZXQgY2xvc2VUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS13aW5kb3dcIik7XHJcbiAgICBsZXQgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnV0dG9uXCIpO1xyXG5cclxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY3JlYXRlRGlhbG9nKCk7XHJcbiAgICAgIHNob3dEaWFsb2coKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNsb3NlVGFza0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgIGhpZGVEaWFsb2coKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgY3JlYXRlVGFzaygpO1xyXG4gICAgLy8gICBmb3JtLnJlc2V0KCk7XHJcbiAgICAvLyAgIGhpZGVEaWFsb2coKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vSEFORExJTkcgVEhFIE5FVyBUQVNLIFNVQk1JU1NJT05cclxuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1mb3JtXCIpO1xyXG4gICAgY29uc3QgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpO1xyXG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcclxuICAgIGNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xyXG4gICAgY29uc3QgbmV3VGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcclxuXHJcbiAgICBuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gbmV3VGFza1RpdGxlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IG5ld1Rhc2tEZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ld1Rhc2tEYXRlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IG5ld1Rhc2tQcmlvcml0eS52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUb2Rvcyh0YXNrTmFtZSx0YXNrRGVzY3JpcHRpb24sdGFza0RhdGUsdGFza1ByaW9yaXR5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xyXG4gICAgICAgIHB1c2hUb1Rhc2tTdG9yYWdlKHRhc2spO1xyXG4gICAgICAgIHNhdmVBbmRSZW5kZXJUYXNrKCk7XHJcbiAgICB9KVxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURpYWxvZygpIHtcclxuICBjb25zdCBuZXdUYXNrRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcclxuICBuZXdUYXNrRGlhbG9nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3VGFza0RpYWxvZ1wiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgd2l0aCB0aGUgJ2Zvcm0tY29udGFpbmVyJyBjbGFzc1xyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiO1xyXG5cclxuICAvLyBDcmVhdGUgYSBkaXYgZWxlbWVudCBmb3IgdGhlIGZvcm0gdGl0bGVcclxuICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvcm1UaXRsZS5jbGFzc05hbWUgPSBcImZvcm0tdGl0bGVcIjtcclxuICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyB0YXNrXCI7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGZvcm0gZWxlbWVudCB3aXRoIHRoZSAnbmV3LXRhc2stZm9ybScgY2xhc3NcclxuICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIG5ld1Rhc2tGb3JtLmNsYXNzTmFtZSA9IFwibmV3LXRhc2stZm9ybVwiO1xyXG5cclxuICAvLyBDcmVhdGUgYSBkaXYgZWxlbWVudCBmb3IgdGhlIHRhc2sgdGl0bGUgY29udGFpbmVyXHJcbiAgY29uc3QgdGFza1RpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuIGlucHV0IGVsZW1lbnQgZm9yIHRoZSB0YXNrIHRpdGxlXHJcbiAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdGFza1RpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIHRhc2tUaXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrXCI7XHJcbiAgdGFza1RpdGxlSW5wdXQubmFtZSA9IFwidGFzay10aXRsZVwiO1xyXG4gIHRhc2tUaXRsZUlucHV0LmlkID0gXCJ0YXNrLXRpdGxlXCI7XHJcbiAgdGFza1RpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAvLyBBcHBlbmQgdGhlIHRhc2sgdGl0bGUgaW5wdXQgdG8gaXRzIGNvbnRhaW5lclxyXG4gIHRhc2tUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGVJbnB1dCk7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGRpdiBlbGVtZW50IGZvciB0aGUgZGVzY3JpcHRpb24gY29udGFpbmVyXHJcbiAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAvLyBDcmVhdGUgYW4gaW5wdXQgZWxlbWVudCBmb3IgdGhlIGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcclxuICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvblwiO1xyXG5cclxuICAvLyBBcHBlbmQgdGhlIGRlc2NyaXB0aW9uIGlucHV0IHRvIGl0cyBjb250YWluZXJcclxuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgZm9yIHRoZSBkdWUgZGF0ZSBjb250YWluZXJcclxuICBjb25zdCBkdWVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuIGlucHV0IGVsZW1lbnQgZm9yIHRoZSBkdWUgZGF0ZVxyXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gIGR1ZURhdGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRHVlIERhdGVcIjtcclxuICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZGF0ZVwiO1xyXG4gIGR1ZURhdGVJbnB1dC5pZCA9IFwiZGF0ZVwiO1xyXG5cclxuICAvLyBBcHBlbmQgdGhlIGR1ZSBkYXRlIGlucHV0IHRvIGl0cyBjb250YWluZXJcclxuICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGRpdiBlbGVtZW50IGZvciB0aGUgcHJpb3JpdHkgY29udGFpbmVyXHJcbiAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1jb250YWluZXJcIilcclxuXHJcbiAgLy8gQ3JlYXRlIGEgbGFiZWwgZWxlbWVudCBmb3IgdGhlIHByaW9yaXR5IGNoZWNrYm94XHJcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJIaWdoIHByaW9yaXR5P1wiO1xyXG4gIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XHJcblxyXG4gIC8vIENyZWF0ZSBhbiBpbnB1dCBlbGVtZW50IGZvciB0aGUgcHJpb3JpdHkgY2hlY2tib3hcclxuICBjb25zdCBwcmlvcml0eUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHByaW9yaXR5Q2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICBwcmlvcml0eUNoZWNrYm94Lm5hbWUgPSBcInByaW9yaXR5XCI7XHJcbiAgcHJpb3JpdHlDaGVja2JveC5pZCA9IFwicHJpb3JpdHlcIjtcclxuXHJcbiAgLy8gQXBwZW5kIHRoZSBsYWJlbCBhbmQgY2hlY2tib3ggdG8gdGhlIHByaW9yaXR5IGNvbnRhaW5lclxyXG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5Q2hlY2tib3gpO1xyXG5cclxuICAvLyBDcmVhdGUgYSBkaXYgZWxlbWVudCBmb3IgdGhlIGRpYWxvZyBidXR0b24gY29udGFpbmVyXHJcbiAgY29uc3QgZGlhbG9nQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaWFsb2dCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpYWxvZy1idG4tY29udGFpbmVyXCIpXHJcblxyXG4gIC8vIENyZWF0ZSBhIGJ1dHRvbiBlbGVtZW50IGZvciBhZGRpbmcgdGhlIHRhc2tcclxuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhZGRUYXNrQnV0dG9uLmNsYXNzTmFtZSA9IFwiYWRkLXRhc2stYnV0dG9uXCI7XHJcbiAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgYnV0dG9uIGVsZW1lbnQgZm9yIGNsb3NpbmcgdGhlIGRpYWxvZ1xyXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNsb3NlLXdpbmRvd1wiO1xyXG4gIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xyXG5cclxuICAvLyBBcHBlbmQgdGhlIGJ1dHRvbnMgdG8gdGhlIGRpYWxvZyBidXR0b24gY29udGFpbmVyXHJcbiAgZGlhbG9nQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xyXG4gIGRpYWxvZ0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcblxyXG4gIC8vIEFwcGVuZCBhbGwgZWxlbWVudHMgdG8gdGhlIHJlc3BlY3RpdmUgcGFyZW50IGVsZW1lbnRzXHJcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xyXG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRsZUNvbnRhaW5lcik7XHJcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xyXG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVDb250YWluZXIpO1xyXG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKTtcclxuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChkaWFsb2dCdG5Db250YWluZXIpO1xyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0Zvcm0pO1xyXG4gIG5ld1Rhc2tEaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKVxyXG4gIG1haW4uYXBwZW5kQ2hpbGQobmV3VGFza0RpYWxvZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dEaWFsb2coKSB7XHJcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdUYXNrRGlhbG9nXCIpXHJcbiAgZGlhbG9nLnNob3coKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlRGlhbG9nKCkge1xyXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3VGFza0RpYWxvZ1wiKVxyXG4gIGRpYWxvZy5jbG9zZSgpXHJcbn1cclxuXHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1Rhc2tNb2R1bGU7IiwiXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdExpc3QgPSBbXSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnByb2plY3RMaXN0ID0gcHJvamVjdExpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiaW1wb3J0IGNyZWF0ZUNhcmQgZnJvbSBcIi4vY3JlYXRlQ2FyZFwiXHJcblxyXG5jbGFzcyBUb2RvcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkaXNwbGF5Q2FyZCgpIHtcclxuICAgICAgICBjcmVhdGVDYXJkKHRoaXMudGl0bGUsIHRoaXMuZHVlRGF0ZSwgdGhpcy5wcmlvcml0eSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb3M7IiwiXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQodGl0bGUsZHVlRGF0ZSwgcHJpb3JpdHksaWQpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuXHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInRvZG8tY2FyZFwiKVxyXG4gICAgY2FyZC5kYXRhc2V0LnRhc2tpZCA9IGlkO1xyXG4gICAgaWYgKHByaW9yaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBjaGVja2JveCBcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNoZWNrYm94Lm5hbWUgPSBcImlzQ29tcGxldGVcIjtcclxuICAgIGNoZWNrYm94LmlkID0gXCJpc0NvbXBsZXRlXCI7XHJcblxyXG4gICAgLy8gY2FyZC10aXRsZVxyXG4gICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmRUaXRsZS5jbGFzc05hbWUgPSBcImNhcmQtdGl0bGVcIjtcclxuICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgIC8vIGNhcmQtZGV0YWlsc1xyXG4gICAgY29uc3QgY2FyZERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZERldGFpbHMuY2xhc3NOYW1lID0gXCJjYXJkLWRldGFpbHNcIjtcclxuICAgIGNvbnN0IGRldGFpbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZGV0YWlsc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiZGV0YWlsXCI7XHJcbiAgICBjYXJkRGV0YWlscy5hcHBlbmRDaGlsZChkZXRhaWxzQnV0dG9uKTtcclxuXHJcbiAgICAvLyBjYXJkLWRhdGVcclxuICAgIGNvbnN0IGNhcmREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmREYXRlLmNsYXNzTmFtZSA9IFwiY2FyZC1kYXRlXCI7XHJcbiAgICBjYXJkRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XHJcblxyXG4gICAgLy8gZGVsZXRlLWNhcmRcclxuICAgIGNvbnN0IGRlbGV0ZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGVsZXRlQ2FyZC5jbGFzc05hbWUgPSBcImRlbGV0ZS1jYXJkXCI7XHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcclxuICAgIGRlbGV0ZUNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZERldGFpbHMpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGF0ZSk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUNhcmQpO1xyXG5cclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNhcmQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FyZDsiLCJpbXBvcnQgVG9kb3MgZnJvbSBcIi4vVG9kb3NcIlxyXG5cclxuZnVuY3Rpb24gZXh0cmFjdEZvcm0oKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWVcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWVcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlXHJcbiAgICBjb25zdCBpc1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykuY2hlY2tlZFxyXG5cclxuICAgIHJldHVybiB7dGl0bGUsZGVzY3JpcHRpb24sZGF0ZSxpc1ByaW9yaXR5fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xyXG4gICAgY29uc3QgbmV3VGFza0luZm8gPSBleHRyYWN0Rm9ybSgpXHJcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG9zKG5ld1Rhc2tJbmZvLnRpdGxlLCBuZXdUYXNrSW5mby5kZXNjcmlwdGlvbiwgbmV3VGFza0luZm8uZGF0ZSwgbmV3VGFza0luZm8uaXNQcmlvcml0eSlcclxuICAgIG5ld1Rhc2suZGlzcGxheUNhcmQoKVxyXG59IFxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFzayB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRXZlbnRMaXN0ZW5lck1vZHVsZSBmcm9tICcuL05ld1Rhc2tNb2R1bGUnO1xyXG5pbXBvcnQgeyBOZXdQcm9qZWN0TW9kdWxlIH0gZnJvbSBcIi4vTmV3UHJvamVjdE1vZHVsZVwiO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSBcIi4vTG9jYWxTdG9yYWdlSGFuZGxlclwiO1xyXG5pbXBvcnQgTmV3VGFza01vZHVsZSBmcm9tICcuL05ld1Rhc2tNb2R1bGUnO1xyXG5cclxuRXZlbnRMaXN0ZW5lck1vZHVsZS5pbml0KCk7XHJcblxyXG5pbml0aWFsaXplKCk7XHJcbk5ld1Byb2plY3RNb2R1bGUuaW5pdCgpOyAvL2NvbnRhaW5zIHRoZSBsaXN0ZW5lciBmb3IgbmV3XHJcbk5ld1Rhc2tNb2R1bGUuaW5pdCgpO1xyXG5cclxuXHJcbi8vIC8vVEFTSyBSRU5ERVJcclxuXHJcbi8vIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1mb3JtXCIpO1xyXG4vLyBjb25zdCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIik7XHJcbi8vIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XHJcbi8vIGNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xyXG4vLyBjb25zdCBuZXdUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xyXG5cclxuLy8gbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgY29uc3QgdGFza05hbWUgPSBuZXdUYXNrVGl0bGUudmFsdWU7XHJcbi8vICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBuZXdUYXNrRGVzY3JpcHRpb24udmFsdWU7XHJcbi8vICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ld1Rhc2tEYXRlLnZhbHVlO1xyXG4vLyAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gbmV3VGFza1ByaW9yaXR5LnZhbHVlO1xyXG5cclxuLy8gICAgIHRhc2sgPSBuZXcgVG9kb3ModGFza05hbWUsdGFza0Rlc2NyaXB0aW9uLHRhc2tEYXRlLHRhc2tQcmlvcml0eSlcclxuLy8gICAgIHRvRG9BcnJheS5wdXNoKHRhc2spO1xyXG4vLyAgICAgc2F2ZUFuZFJlbmRlclRhc2soKTtcclxuLy8gfSlcclxuXHJcblxyXG4vLyBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcblxyXG4vLyBmdW5jdGlvbiByZW5kZXJUYXNrKCkge1xyXG4vLyAgICAgY2xlYXJFbGVtZW50KG1haW4pO1xyXG4vLyAgICAgdG9Eb0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcclxuLy8gICAgICAgICBjcmVhdGVDYXJkKHRhc2sudGl0bGUsIHRhc2suZHVlRGF0ZSwgdGFzay5wcmlvcml0eSwgdGFzay5pZCk7XHJcbi8vICAgICB9KVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBzYXZlVGFzaygpIHtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfVEFTS19LRVksIEpTT04uc3RyaW5naWZ5KHRvRG9BcnJheSkpXHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHNhdmVBbmRSZW5kZXJUYXNrKCkge1xyXG4vLyAgICAgcmVuZGVyVGFzaygpXHJcbi8vICAgICBzYXZlVGFzaygpXHJcbi8vIH1cclxuXHJcbi8vIHJlbmRlclRhc2soKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==