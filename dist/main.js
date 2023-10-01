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
/* harmony export */   saveAndRenderTask: () => (/* binding */ saveAndRenderTask),
/* harmony export */   setSelected: () => (/* binding */ setSelected)
/* harmony export */ });
/* harmony import */ var _createCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCard */ "./src/createCard.js");


const LOCAL_STORAGE_PROJECT_KEY = "task.project";
const LOCAL_STORAGE_TASK_KEY = "task.todos";
const LOCAL_STORAGE_SELECTED_ID = "item.selected"


const projectContainer = document.querySelector("[data-projects-list]");
const main = document.querySelector(".main-content");


let toDoArray = [];
let projectArray =[];
let selectedItem; 


function initialize() {
    selectedItem = localStorage.getItem(LOCAL_STORAGE_SELECTED_ID);
    toDoArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || [];
    projectArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

    renderProject();
    renderTask();
}


// PROJECT

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

        if (project.id === selectedItem) { projectElement.classList.add("selected") }

        projectContainer.appendChild(projectElement)
    })
}

function pushToProjectStorage(string) {
    projectArray.push(string);
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

// OTHER GENERAL FUNCTIONS

function setSelected(id) {
    selectedItem = id;
}

function clearElement(element) {
    element.innerHTML = "";
};




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






// SELECTED ELEMENT
const projectList = document.querySelector("[data-projects-list]");

projectList.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
        (0,_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_2__.setSelected)(e.target.dataset.projectId);    
        (0,_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_2__.saveAndRenderProject)();

    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFVO0FBQ2xCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNLOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHMEI7QUFDZ0U7QUFDL0Y7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdEQUFPO0FBQ3ZDLDBDQUEwQztBQUMxQyxZQUFZLDBFQUFvQjtBQUNoQyxZQUFZLDBFQUFvQjtBQUNoQyxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCNEI7QUFDOEM7QUFDL0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhDQUFLO0FBQzlCO0FBQ0EsUUFBUSx1RUFBaUI7QUFDekIsUUFBUSx1RUFBaUI7QUFDekIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUMzSzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7OztBQ1RlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7QUNqQnBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7O0FDcERFO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUFLO0FBQzdCO0FBQ0E7QUFDQTs7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0Q7QUFDSTtBQUNIO0FBQ1A7QUFDNUM7QUFDQSxzREFBbUI7QUFDbkI7QUFDQSxnRUFBVTtBQUNWLCtEQUFnQixTQUFTO0FBQ3pCLHNEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBVztBQUNuQixRQUFRLDBFQUFvQjtBQUM1QjtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Mb2NhbFN0b3JhZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvTmV3UHJvamVjdE1vZHVsZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL05ld1Rhc2tNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGVDYXJkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9ybUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNhcmQgZnJvbSBcIi4vY3JlYXRlQ2FyZFwiO1xyXG5cclxuY29uc3QgTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSA9IFwidGFzay5wcm9qZWN0XCI7XHJcbmNvbnN0IExPQ0FMX1NUT1JBR0VfVEFTS19LRVkgPSBcInRhc2sudG9kb3NcIjtcclxuY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9JRCA9IFwiaXRlbS5zZWxlY3RlZFwiXHJcblxyXG5cclxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0cy1saXN0XVwiKTtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG5cclxuXHJcbmxldCB0b0RvQXJyYXkgPSBbXTtcclxubGV0IHByb2plY3RBcnJheSA9W107XHJcbmxldCBzZWxlY3RlZEl0ZW07IFxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgICBzZWxlY3RlZEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0lEKTtcclxuICAgIHRvRG9BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9UQVNLX0tFWSkpIHx8IFtdO1xyXG4gICAgcHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZKSkgfHwgW107XHJcblxyXG4gICAgcmVuZGVyUHJvamVjdCgpO1xyXG4gICAgcmVuZGVyVGFzaygpO1xyXG59XHJcblxyXG5cclxuLy8gUFJPSkVDVFxyXG5cclxuZnVuY3Rpb24gc2F2ZVByb2plY3QoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlQW5kUmVuZGVyUHJvamVjdCgpIHtcclxuICAgIHNhdmVQcm9qZWN0KCk7XHJcbiAgICByZW5kZXJQcm9qZWN0KCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KCkge1xyXG4gICAgY2xlYXJFbGVtZW50KHByb2plY3RDb250YWluZXIpO1xyXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcclxuICAgICAgICBwcm9qZWN0RWxlbWVudC5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBzZWxlY3RlZEl0ZW0pIHsgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpIH1cclxuXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudClcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hUb1Byb2plY3RTdG9yYWdlKHN0cmluZykge1xyXG4gICAgcHJvamVjdEFycmF5LnB1c2goc3RyaW5nKTtcclxufTtcclxuXHJcblxyXG4vLyBUQVNLUyBcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRhc2soKSB7XHJcbiAgICBjbGVhckVsZW1lbnQobWFpbik7XHJcbiAgICB0b0RvQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgIGNyZWF0ZUNhcmQodGFzay50aXRsZSwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5LCB0YXNrLmlkKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVUYXNrKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9UQVNLX0tFWSwgSlNPTi5zdHJpbmdpZnkodG9Eb0FycmF5KSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZUFuZFJlbmRlclRhc2soKSB7XHJcbiAgICBzYXZlVGFzaygpO1xyXG4gICAgcmVuZGVyVGFzaygpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcHVzaFRvVGFza1N0b3JhZ2Uoc3RyaW5nKSB7XHJcbiAgICB0b0RvQXJyYXkucHVzaChzdHJpbmcpO1xyXG59XHJcblxyXG4vLyBPVEhFUiBHRU5FUkFMIEZVTkNUSU9OU1xyXG5cclxuZnVuY3Rpb24gc2V0U2VsZWN0ZWQoaWQpIHtcclxuICAgIHNlbGVjdGVkSXRlbSA9IGlkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IHtzYXZlQW5kUmVuZGVyUHJvamVjdCwgXHJcbiAgICAgICAgcHVzaFRvUHJvamVjdFN0b3JhZ2UsIFxyXG4gICAgICAgIHJlbmRlclByb2plY3QsIFxyXG4gICAgICAgIGluaXRpYWxpemUsIFxyXG4gICAgICAgIHJlbmRlclRhc2ssIFxyXG4gICAgICAgIHNhdmVBbmRSZW5kZXJUYXNrLFxyXG4gICAgICAgIHB1c2hUb1Rhc2tTdG9yYWdlLFxyXG4gICAgICAgIHNldFNlbGVjdGVkLCAgIFxyXG4gICAgfVxyXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCJcclxuaW1wb3J0IHtzYXZlQW5kUmVuZGVyUHJvamVjdCwgcHVzaFRvUHJvamVjdFN0b3JhZ2UsIHJlbmRlclByb2plY3R9IGZyb20gXCIuL0xvY2FsU3RvcmFnZUhhbmRsZXJcIlxyXG5cclxuY29uc3QgTmV3UHJvamVjdE1vZHVsZSA9IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgcmVuZGVyUHJvamVjdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctcHJvamVjdC1mb3JtXVwiKVxyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctcHJvamVjdC1pbnB1dF1cIilcclxuXHJcbiAgICAgICAgbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PSBudWxsIHx8IHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm4gLy9pZiBlbXB0eSBuYW1lIGRvbnQgbWFrZSB0aGUgcHJvamVjdFxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBudWxsOyAvL2NsZWFyIHRoZSBmb3JtXHJcbiAgICAgICAgICAgIHB1c2hUb1Byb2plY3RTdG9yYWdlKHByb2plY3QpO1xyXG4gICAgICAgICAgICBzYXZlQW5kUmVuZGVyUHJvamVjdCgpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQge05ld1Byb2plY3RNb2R1bGV9IiwiaW1wb3J0IFRvZG9zIGZyb20gXCIuL1RvZG9zXCI7XHJcbmltcG9ydCB7cHVzaFRvVGFza1N0b3JhZ2UsIHNhdmVBbmRSZW5kZXJUYXNrfSBmcm9tIFwiLi9Mb2NhbFN0b3JhZ2VIYW5kbGVyXCJcclxuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2Zvcm1IYW5kbGVyXCI7XHJcblxyXG5jb25zdCBOZXdUYXNrTW9kdWxlID0ge1xyXG4gIGluaXQoKSB7XHJcbiAgICAvL0RJQUxPRyBQT1BVUCBTRUNUSU9OXHJcbiAgICBjcmVhdGVEaWFsb2coKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ0blwiKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWZvcm1cIilcclxuICAgIGxldCBjbG9zZVRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLXdpbmRvd1wiKTtcclxuICAgIGxldCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XHJcblxyXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjcmVhdGVEaWFsb2coKTtcclxuICAgICAgc2hvd0RpYWxvZygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2VUYXNrRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgaGlkZURpYWxvZygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICBjcmVhdGVUYXNrKCk7XHJcbiAgICAvLyAgIGZvcm0ucmVzZXQoKTtcclxuICAgIC8vICAgaGlkZURpYWxvZygpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy9IQU5ETElORyBUSEUgTkVXIFRBU0sgU1VCTUlTU0lPTlxyXG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWZvcm1cIik7XHJcbiAgICBjb25zdCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIik7XHJcbiAgICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xyXG4gICAgY29uc3QgbmV3VGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XHJcbiAgICBjb25zdCBuZXdUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xyXG5cclxuICAgIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBuZXdUYXNrVGl0bGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gbmV3VGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3VGFza0RhdGUudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gbmV3VGFza1ByaW9yaXR5LnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRvZG9zKHRhc2tOYW1lLHRhc2tEZXNjcmlwdGlvbix0YXNrRGF0ZSx0YXNrUHJpb3JpdHkpXHJcbiAgICAgICAgY29uc29sZS5sb2codGFzayk7XHJcbiAgICAgICAgcHVzaFRvVGFza1N0b3JhZ2UodGFzayk7XHJcbiAgICAgICAgc2F2ZUFuZFJlbmRlclRhc2soKTtcclxuICAgIH0pXHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGlhbG9nKCkge1xyXG4gIGNvbnN0IG5ld1Rhc2tEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xyXG4gIG5ld1Rhc2tEaWFsb2cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdUYXNrRGlhbG9nXCIpO1xyXG5cclxuICAvLyBDcmVhdGUgYSBkaXYgZWxlbWVudCB3aXRoIHRoZSAnZm9ybS1jb250YWluZXInIGNsYXNzXHJcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImZvcm0tY29udGFpbmVyXCI7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGRpdiBlbGVtZW50IGZvciB0aGUgZm9ybSB0aXRsZVxyXG4gIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9ybVRpdGxlLmNsYXNzTmFtZSA9IFwiZm9ybS10aXRsZVwiO1xyXG4gIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IHRhc2tcIjtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgZm9ybSBlbGVtZW50IHdpdGggdGhlICduZXctdGFzay1mb3JtJyBjbGFzc1xyXG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgbmV3VGFza0Zvcm0uY2xhc3NOYW1lID0gXCJuZXctdGFzay1mb3JtXCI7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGRpdiBlbGVtZW50IGZvciB0aGUgdGFzayB0aXRsZSBjb250YWluZXJcclxuICBjb25zdCB0YXNrVGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAvLyBDcmVhdGUgYW4gaW5wdXQgZWxlbWVudCBmb3IgdGhlIHRhc2sgdGl0bGVcclxuICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICB0YXNrVGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgdGFza1RpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2tcIjtcclxuICB0YXNrVGl0bGVJbnB1dC5uYW1lID0gXCJ0YXNrLXRpdGxlXCI7XHJcbiAgdGFza1RpdGxlSW5wdXQuaWQgPSBcInRhc2stdGl0bGVcIjtcclxuICB0YXNrVGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gIC8vIEFwcGVuZCB0aGUgdGFzayB0aXRsZSBpbnB1dCB0byBpdHMgY29udGFpbmVyXHJcbiAgdGFza1RpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgZm9yIHRoZSBkZXNjcmlwdGlvbiBjb250YWluZXJcclxuICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIC8vIENyZWF0ZSBhbiBpbnB1dCBlbGVtZW50IGZvciB0aGUgZGVzY3JpcHRpb25cclxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCI7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uXCI7XHJcblxyXG4gIC8vIEFwcGVuZCB0aGUgZGVzY3JpcHRpb24gaW5wdXQgdG8gaXRzIGNvbnRhaW5lclxyXG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG5cclxuICAvLyBDcmVhdGUgYSBkaXYgZWxlbWVudCBmb3IgdGhlIGR1ZSBkYXRlIGNvbnRhaW5lclxyXG4gIGNvbnN0IGR1ZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAvLyBDcmVhdGUgYW4gaW5wdXQgZWxlbWVudCBmb3IgdGhlIGR1ZSBkYXRlXHJcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XHJcbiAgZHVlRGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gXCJEdWUgRGF0ZVwiO1xyXG4gIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkYXRlXCI7XHJcbiAgZHVlRGF0ZUlucHV0LmlkID0gXCJkYXRlXCI7XHJcblxyXG4gIC8vIEFwcGVuZCB0aGUgZHVlIGRhdGUgaW5wdXQgdG8gaXRzIGNvbnRhaW5lclxyXG4gIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgZm9yIHRoZSBwcmlvcml0eSBjb250YWluZXJcclxuICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWNvbnRhaW5lclwiKVxyXG5cclxuICAvLyBDcmVhdGUgYSBsYWJlbCBlbGVtZW50IGZvciB0aGUgcHJpb3JpdHkgY2hlY2tib3hcclxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIkhpZ2ggcHJpb3JpdHk/XCI7XHJcbiAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuIGlucHV0IGVsZW1lbnQgZm9yIHRoZSBwcmlvcml0eSBjaGVja2JveFxyXG4gIGNvbnN0IHByaW9yaXR5Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgcHJpb3JpdHlDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gIHByaW9yaXR5Q2hlY2tib3gubmFtZSA9IFwicHJpb3JpdHlcIjtcclxuICBwcmlvcml0eUNoZWNrYm94LmlkID0gXCJwcmlvcml0eVwiO1xyXG5cclxuICAvLyBBcHBlbmQgdGhlIGxhYmVsIGFuZCBjaGVja2JveCB0byB0aGUgcHJpb3JpdHkgY29udGFpbmVyXHJcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlDaGVja2JveCk7XHJcblxyXG4gIC8vIENyZWF0ZSBhIGRpdiBlbGVtZW50IGZvciB0aGUgZGlhbG9nIGJ1dHRvbiBjb250YWluZXJcclxuICBjb25zdCBkaWFsb2dCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRpYWxvZ0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlhbG9nLWJ0bi1jb250YWluZXJcIilcclxuXHJcbiAgLy8gQ3JlYXRlIGEgYnV0dG9uIGVsZW1lbnQgZm9yIGFkZGluZyB0aGUgdGFza1xyXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGFkZFRhc2tCdXR0b24uY2xhc3NOYW1lID0gXCJhZGQtdGFzay1idXR0b25cIjtcclxuICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xyXG5cclxuICAvLyBDcmVhdGUgYSBidXR0b24gZWxlbWVudCBmb3IgY2xvc2luZyB0aGUgZGlhbG9nXHJcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2xvc2Utd2luZG93XCI7XHJcbiAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XHJcblxyXG4gIC8vIEFwcGVuZCB0aGUgYnV0dG9ucyB0byB0aGUgZGlhbG9nIGJ1dHRvbiBjb250YWluZXJcclxuICBkaWFsb2dCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XHJcbiAgZGlhbG9nQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuXHJcbiAgLy8gQXBwZW5kIGFsbCBlbGVtZW50cyB0byB0aGUgcmVzcGVjdGl2ZSBwYXJlbnQgZWxlbWVudHNcclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XHJcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlQ29udGFpbmVyKTtcclxuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUNvbnRhaW5lcik7XHJcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xyXG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGRpYWxvZ0J0bkNvbnRhaW5lcik7XHJcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XHJcbiAgbmV3VGFza0RpYWxvZy5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpXHJcbiAgbWFpbi5hcHBlbmRDaGlsZChuZXdUYXNrRGlhbG9nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0RpYWxvZygpIHtcclxuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Rhc2tEaWFsb2dcIilcclxuICBkaWFsb2cuc2hvdygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVEaWFsb2coKSB7XHJcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdUYXNrRGlhbG9nXCIpXHJcbiAgZGlhbG9nLmNsb3NlKClcclxufVxyXG5cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgTmV3VGFza01vZHVsZTsiLCJcclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcm9qZWN0TGlzdCA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJpbXBvcnQgY3JlYXRlQ2FyZCBmcm9tIFwiLi9jcmVhdGVDYXJkXCJcclxuXHJcbmNsYXNzIFRvZG9zIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRpc3BsYXlDYXJkKCkge1xyXG4gICAgICAgIGNyZWF0ZUNhcmQodGhpcy50aXRsZSwgdGhpcy5kdWVEYXRlLCB0aGlzLnByaW9yaXR5KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvczsiLCJcclxuZnVuY3Rpb24gY3JlYXRlQ2FyZCh0aXRsZSxkdWVEYXRlLCBwcmlvcml0eSxpZCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwidG9kby1jYXJkXCIpXHJcbiAgICBjYXJkLmRhdGFzZXQudGFza2lkID0gaWQ7XHJcbiAgICBpZiAocHJpb3JpdHkgPT09IHRydWUpIHtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIGNoZWNrYm94IFxyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgY2hlY2tib3gubmFtZSA9IFwiaXNDb21wbGV0ZVwiO1xyXG4gICAgY2hlY2tib3guaWQgPSBcImlzQ29tcGxldGVcIjtcclxuXHJcbiAgICAvLyBjYXJkLXRpdGxlXHJcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZFRpdGxlLmNsYXNzTmFtZSA9IFwiY2FyZC10aXRsZVwiO1xyXG4gICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgLy8gY2FyZC1kZXRhaWxzXHJcbiAgICBjb25zdCBjYXJkRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkRGV0YWlscy5jbGFzc05hbWUgPSBcImNhcmQtZGV0YWlsc1wiO1xyXG4gICAgY29uc3QgZGV0YWlsc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBkZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gXCJkZXRhaWxcIjtcclxuICAgIGNhcmREZXRhaWxzLmFwcGVuZENoaWxkKGRldGFpbHNCdXR0b24pO1xyXG5cclxuICAgIC8vIGNhcmQtZGF0ZVxyXG4gICAgY29uc3QgY2FyZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZERhdGUuY2xhc3NOYW1lID0gXCJjYXJkLWRhdGVcIjtcclxuICAgIGNhcmREYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcclxuXHJcbiAgICAvLyBkZWxldGUtY2FyZFxyXG4gICAgY29uc3QgZGVsZXRlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkZWxldGVDYXJkLmNsYXNzTmFtZSA9IFwiZGVsZXRlLWNhcmRcIjtcclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xyXG4gICAgZGVsZXRlQ2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGV0YWlscyk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREYXRlKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQ2FyZCk7XHJcblxyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkOyIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi9Ub2Rvc1wiXHJcblxyXG5mdW5jdGlvbiBleHRyYWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZVxyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWVcclxuICAgIGNvbnN0IGlzUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS5jaGVja2VkXHJcblxyXG4gICAgcmV0dXJuIHt0aXRsZSxkZXNjcmlwdGlvbixkYXRlLGlzUHJpb3JpdHl9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrSW5mbyA9IGV4dHJhY3RGb3JtKClcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kb3MobmV3VGFza0luZm8udGl0bGUsIG5ld1Rhc2tJbmZvLmRlc2NyaXB0aW9uLCBuZXdUYXNrSW5mby5kYXRlLCBuZXdUYXNrSW5mby5pc1ByaW9yaXR5KVxyXG4gICAgbmV3VGFzay5kaXNwbGF5Q2FyZCgpXHJcbn0gXHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBFdmVudExpc3RlbmVyTW9kdWxlIGZyb20gJy4vTmV3VGFza01vZHVsZSc7XHJcbmltcG9ydCB7IE5ld1Byb2plY3RNb2R1bGUgfSBmcm9tIFwiLi9OZXdQcm9qZWN0TW9kdWxlXCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tIFwiLi9Mb2NhbFN0b3JhZ2VIYW5kbGVyXCI7XHJcbmltcG9ydCBOZXdUYXNrTW9kdWxlIGZyb20gJy4vTmV3VGFza01vZHVsZSc7XHJcblxyXG5FdmVudExpc3RlbmVyTW9kdWxlLmluaXQoKTtcclxuXHJcbmluaXRpYWxpemUoKTtcclxuTmV3UHJvamVjdE1vZHVsZS5pbml0KCk7IC8vY29udGFpbnMgdGhlIGxpc3RlbmVyIGZvciBuZXdcclxuTmV3VGFza01vZHVsZS5pbml0KCk7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQge3NldFNlbGVjdGVkLCBzYXZlQW5kUmVuZGVyUHJvamVjdH0gZnJvbSBcIi4vTG9jYWxTdG9yYWdlSGFuZGxlclwiXHJcblxyXG4vLyBTRUxFQ1RFRCBFTEVNRU5UXHJcbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3RzLWxpc3RdXCIpO1xyXG5cclxucHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxpXCIpIHtcclxuICAgICAgICBzZXRTZWxlY3RlZChlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZCk7ICAgIFxyXG4gICAgICAgIHNhdmVBbmRSZW5kZXJQcm9qZWN0KCk7XHJcblxyXG4gICAgfVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==