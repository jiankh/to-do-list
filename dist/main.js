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
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectArray));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_ID, selectedItem)
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

    renderInsideProject()
}

function pushToProjectStorage(string) {
    projectArray.push(string);
};

//INISDE PROJECTS
const contentContainer = document.querySelector(".main-content");
const titleContainer = document.querySelector(".main-title");

function renderInsideProject() {
    const selectedProject = projectArray.find((project) => project.id === selectedItem)

    if (selectedItem == null) {
        contentContainer.style.display = "none";
    } else {
        contentContainer.style.display = "";
        titleContainer.innerHTML = selectedProject.name;
    }
}
// We look for the item from the array by using find function first,
//we check if there is a selected item or not.
//if we do, set the title of the project into the html title






function addListenerToDelete() {
    const deleteTaskBtns = document.querySelectorAll(".delete-task-button");
    deleteTaskBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            deleteCard(btn.dataset.deleteId)})
    })
}

function deleteCard(id) {
    const temp = toDoArray.filter((task) => { 
        return task.id !== id;
    })
    toDoArray = temp;
    saveAndRenderTask()
} 

// TASKS 

function renderTask() {
    clearElement(main);
    toDoArray.forEach((task) => {
        (0,_createCard__WEBPACK_IMPORTED_MODULE_0__["default"])(task.title, task.dueDate, task.priority, task.id);
    })

    addListenerToDelete();
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
        ;(0,_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_1__.pushToTaskStorage)(task);
        (0,_LocalStorageHandler__WEBPACK_IMPORTED_MODULE_1__.saveAndRenderTask)();

    })
  }
};

function createDialog() {
  const newTaskDialog = document.createElement("dialog");
  newTaskDialog.setAttribute("id", "newTaskDialog");

  const formContainer = document.createElement("div");
  formContainer.className = "form-container";

  const formTitle = document.createElement("div");
  formTitle.className = "form-title";
  formTitle.textContent = "Add a new task";

  const newTaskForm = document.createElement("form");
  newTaskForm.className = "new-task-form";

  const taskTitleContainer = document.createElement("div");

  const taskTitleInput = document.createElement("input");
  taskTitleInput.type = "text";
  taskTitleInput.placeholder = "Task";
  taskTitleInput.name = "task-title";
  taskTitleInput.id = "task-title";
  taskTitleInput.required = true;

  taskTitleContainer.appendChild(taskTitleInput);

  const descriptionContainer = document.createElement("div");

  const descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Description";
  descriptionInput.name = "description";
  descriptionInput.id = "description";

  descriptionContainer.appendChild(descriptionInput);

  const dueDateContainer = document.createElement("div");

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.placeholder = "Due Date";
  dueDateInput.name = "date";
  dueDateInput.id = "date";

  dueDateContainer.appendChild(dueDateInput);

  const priorityContainer = document.createElement("div");
  priorityContainer.classList.add("priority-container")

  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "High priority?";
  priorityLabel.setAttribute("for", "priority");

  const priorityCheckbox = document.createElement("input");
  priorityCheckbox.type = "checkbox";
  priorityCheckbox.name = "priority";
  priorityCheckbox.id = "priority";

  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(priorityCheckbox);

  const dialogBtnContainer = document.createElement("div");
  dialogBtnContainer.classList.add("dialog-btn-container")

  const addTaskButton = document.createElement("button");
  addTaskButton.className = "add-task-button";
  addTaskButton.textContent = "Add Task";

  const closeButton = document.createElement("button");
  closeButton.className = "close-window";
  closeButton.textContent = "Close";

  dialogBtnContainer.appendChild(addTaskButton);
  dialogBtnContainer.appendChild(closeButton);

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
    deleteButton.dataset.deleteId = id;
    deleteButton.classList.add("delete-task-button")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBVTtBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0s7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0kwQjtBQUNnRTtBQUMvRjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0RBQU87QUFDdkMsMENBQTBDO0FBQzFDLFlBQVksMEVBQW9CO0FBQ2hDLFlBQVksMEVBQW9CO0FBQ2hDLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCNEI7QUFDOEM7QUFDL0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBSztBQUM5QixRQUFRLHdFQUFpQjtBQUN6QixRQUFRLHVFQUFpQjtBQUN6QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7O0FDcko1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNUZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7O0FDakJwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZERTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBSztBQUM3QjtBQUNBO0FBQ0E7Ozs7Ozs7VUNoQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ0k7QUFDUztBQUNuQjtBQUM1QztBQUNBLHNEQUFtQjtBQUNuQjtBQUNBLGdFQUFVO0FBQ1YsK0RBQWdCLFNBQVM7QUFDekIsc0RBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUN1RTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFXO0FBQ25CLFFBQVEsMEVBQW9CO0FBQzVCO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0xvY2FsU3RvcmFnZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9OZXdQcm9qZWN0TW9kdWxlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvTmV3VGFza01vZHVsZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Ub2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3JtSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ2FyZCBmcm9tIFwiLi9jcmVhdGVDYXJkXCI7XHJcblxyXG5jb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZID0gXCJ0YXNrLnByb2plY3RcIjtcclxuY29uc3QgTE9DQUxfU1RPUkFHRV9UQVNLX0tFWSA9IFwidGFzay50b2Rvc1wiO1xyXG5jb25zdCBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0lEID0gXCJpdGVtLnNlbGVjdGVkXCJcclxuXHJcblxyXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3RzLWxpc3RdXCIpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcblxyXG5cclxubGV0IHRvRG9BcnJheSA9IFtdO1xyXG5sZXQgcHJvamVjdEFycmF5ID1bXTtcclxubGV0IHNlbGVjdGVkSXRlbTsgXHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgIHNlbGVjdGVkSXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfU0VMRUNURURfSUQpO1xyXG4gICAgdG9Eb0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1RBU0tfS0VZKSkgfHwgW107XHJcbiAgICBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkpKSB8fCBbXTtcclxuXHJcbiAgICByZW5kZXJQcm9qZWN0KCk7XHJcbiAgICByZW5kZXJUYXNrKCk7XHJcbn1cclxuXHJcblxyXG4vLyBQUk9KRUNUXHJcblxyXG5mdW5jdGlvbiBzYXZlUHJvamVjdCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVksIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9JRCwgc2VsZWN0ZWRJdGVtKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlQW5kUmVuZGVyUHJvamVjdCgpIHtcclxuICAgIHNhdmVQcm9qZWN0KCk7XHJcbiAgICByZW5kZXJQcm9qZWN0KCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KCkge1xyXG4gICAgY2xlYXJFbGVtZW50KHByb2plY3RDb250YWluZXIpO1xyXG4gICAgXHJcblxyXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcclxuICAgICAgICBwcm9qZWN0RWxlbWVudC5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBzZWxlY3RlZEl0ZW0pIHsgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpIH1cclxuXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudClcclxuICAgIH0pXHJcblxyXG4gICAgcmVuZGVySW5zaWRlUHJvamVjdCgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hUb1Byb2plY3RTdG9yYWdlKHN0cmluZykge1xyXG4gICAgcHJvamVjdEFycmF5LnB1c2goc3RyaW5nKTtcclxufTtcclxuXHJcbi8vSU5JU0RFIFBST0pFQ1RTXHJcbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tdGl0bGVcIik7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJJbnNpZGVQcm9qZWN0KCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5LmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkSXRlbSlcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRJdGVtID09IG51bGwpIHtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29udGVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgICAgICB0aXRsZUNvbnRhaW5lci5pbm5lckhUTUwgPSBzZWxlY3RlZFByb2plY3QubmFtZTtcclxuICAgIH1cclxufVxyXG4vLyBXZSBsb29rIGZvciB0aGUgaXRlbSBmcm9tIHRoZSBhcnJheSBieSB1c2luZyBmaW5kIGZ1bmN0aW9uIGZpcnN0LFxyXG4vL3dlIGNoZWNrIGlmIHRoZXJlIGlzIGEgc2VsZWN0ZWQgaXRlbSBvciBub3QuXHJcbi8vaWYgd2UgZG8sIHNldCB0aGUgdGl0bGUgb2YgdGhlIHByb2plY3QgaW50byB0aGUgaHRtbCB0aXRsZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMaXN0ZW5lclRvRGVsZXRlKCkge1xyXG4gICAgY29uc3QgZGVsZXRlVGFza0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10YXNrLWJ1dHRvblwiKTtcclxuICAgIGRlbGV0ZVRhc2tCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGVDYXJkKGJ0bi5kYXRhc2V0LmRlbGV0ZUlkKX0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVDYXJkKGlkKSB7XHJcbiAgICBjb25zdCB0ZW1wID0gdG9Eb0FycmF5LmZpbHRlcigodGFzaykgPT4geyBcclxuICAgICAgICByZXR1cm4gdGFzay5pZCAhPT0gaWQ7XHJcbiAgICB9KVxyXG4gICAgdG9Eb0FycmF5ID0gdGVtcDtcclxuICAgIHNhdmVBbmRSZW5kZXJUYXNrKClcclxufSBcclxuXHJcbi8vIFRBU0tTIFxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGFzaygpIHtcclxuICAgIGNsZWFyRWxlbWVudChtYWluKTtcclxuICAgIHRvRG9BcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlQ2FyZCh0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHksIHRhc2suaWQpO1xyXG4gICAgfSlcclxuXHJcbiAgICBhZGRMaXN0ZW5lclRvRGVsZXRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVUYXNrKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9UQVNLX0tFWSwgSlNPTi5zdHJpbmdpZnkodG9Eb0FycmF5KSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZUFuZFJlbmRlclRhc2soKSB7XHJcbiAgICBzYXZlVGFzaygpO1xyXG4gICAgcmVuZGVyVGFzaygpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcHVzaFRvVGFza1N0b3JhZ2Uoc3RyaW5nKSB7XHJcbiAgICB0b0RvQXJyYXkucHVzaChzdHJpbmcpO1xyXG59XHJcblxyXG4vLyBPVEhFUiBHRU5FUkFMIEZVTkNUSU9OU1xyXG5cclxuZnVuY3Rpb24gc2V0U2VsZWN0ZWQoaWQpIHtcclxuICAgIHNlbGVjdGVkSXRlbSA9IGlkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IHtzYXZlQW5kUmVuZGVyUHJvamVjdCwgXHJcbiAgICAgICAgcHVzaFRvUHJvamVjdFN0b3JhZ2UsIFxyXG4gICAgICAgIHJlbmRlclByb2plY3QsIFxyXG4gICAgICAgIGluaXRpYWxpemUsIFxyXG4gICAgICAgIHJlbmRlclRhc2ssIFxyXG4gICAgICAgIHNhdmVBbmRSZW5kZXJUYXNrLFxyXG4gICAgICAgIHB1c2hUb1Rhc2tTdG9yYWdlLFxyXG4gICAgICAgIHNldFNlbGVjdGVkLCAgIFxyXG4gICAgfVxyXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCJcclxuaW1wb3J0IHtzYXZlQW5kUmVuZGVyUHJvamVjdCwgcHVzaFRvUHJvamVjdFN0b3JhZ2UsIHJlbmRlclByb2plY3R9IGZyb20gXCIuL0xvY2FsU3RvcmFnZUhhbmRsZXJcIlxyXG5cclxuY29uc3QgTmV3UHJvamVjdE1vZHVsZSA9IHtcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgcmVuZGVyUHJvamVjdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctcHJvamVjdC1mb3JtXVwiKVxyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctcHJvamVjdC1pbnB1dF1cIilcclxuXHJcbiAgICAgICAgbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PSBudWxsIHx8IHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm4gLy9pZiBlbXB0eSBuYW1lIGRvbnQgbWFrZSB0aGUgcHJvamVjdFxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBudWxsOyAvL2NsZWFyIHRoZSBmb3JtXHJcbiAgICAgICAgICAgIHB1c2hUb1Byb2plY3RTdG9yYWdlKHByb2plY3QpO1xyXG4gICAgICAgICAgICBzYXZlQW5kUmVuZGVyUHJvamVjdCgpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7TmV3UHJvamVjdE1vZHVsZX0iLCJpbXBvcnQgVG9kb3MgZnJvbSBcIi4vVG9kb3NcIjtcclxuaW1wb3J0IHtwdXNoVG9UYXNrU3RvcmFnZSwgc2F2ZUFuZFJlbmRlclRhc2t9IGZyb20gXCIuL0xvY2FsU3RvcmFnZUhhbmRsZXJcIlxyXG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vZm9ybUhhbmRsZXJcIjtcclxuXHJcbmNvbnN0IE5ld1Rhc2tNb2R1bGUgPSB7XHJcbiAgaW5pdCgpIHtcclxuICAgIC8vRElBTE9HIFBPUFVQIFNFQ1RJT05cclxuICAgIGNyZWF0ZURpYWxvZygpO1xyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnRuXCIpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stZm9ybVwiKVxyXG4gICAgbGV0IGNsb3NlVGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2Utd2luZG93XCIpO1xyXG4gICAgbGV0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKTtcclxuXHJcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHNob3dEaWFsb2coKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNsb3NlVGFza0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgIGhpZGVEaWFsb2coKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgY3JlYXRlVGFzaygpO1xyXG4gICAgLy8gICBmb3JtLnJlc2V0KCk7XHJcbiAgICAvLyAgIGhpZGVEaWFsb2coKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vSEFORExJTkcgVEhFIE5FVyBUQVNLIFNVQk1JU1NJT05cclxuICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1mb3JtXCIpO1xyXG4gICAgY29uc3QgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpO1xyXG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKTtcclxuICAgIGNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xyXG4gICAgY29uc3QgbmV3VGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcclxuXHJcbiAgICBuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gbmV3VGFza1RpdGxlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IG5ld1Rhc2tEZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ld1Rhc2tEYXRlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IG5ld1Rhc2tQcmlvcml0eS52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUb2Rvcyh0YXNrTmFtZSx0YXNrRGVzY3JpcHRpb24sdGFza0RhdGUsdGFza1ByaW9yaXR5KVxyXG4gICAgICAgIHB1c2hUb1Rhc2tTdG9yYWdlKHRhc2spO1xyXG4gICAgICAgIHNhdmVBbmRSZW5kZXJUYXNrKCk7XHJcblxyXG4gICAgfSlcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEaWFsb2coKSB7XHJcbiAgY29uc3QgbmV3VGFza0RpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XHJcbiAgbmV3VGFza0RpYWxvZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1Rhc2tEaWFsb2dcIik7XHJcblxyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvcm1UaXRsZS5jbGFzc05hbWUgPSBcImZvcm0tdGl0bGVcIjtcclxuICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyB0YXNrXCI7XHJcblxyXG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgbmV3VGFza0Zvcm0uY2xhc3NOYW1lID0gXCJuZXctdGFzay1mb3JtXCI7XHJcblxyXG4gIGNvbnN0IHRhc2tUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHRhc2tUaXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICB0YXNrVGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFza1wiO1xyXG4gIHRhc2tUaXRsZUlucHV0Lm5hbWUgPSBcInRhc2stdGl0bGVcIjtcclxuICB0YXNrVGl0bGVJbnB1dC5pZCA9IFwidGFzay10aXRsZVwiO1xyXG4gIHRhc2tUaXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgdGFza1RpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCI7XHJcbiAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xyXG4gIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uXCI7XHJcblxyXG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG5cclxuICBjb25zdCBkdWVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XHJcbiAgZHVlRGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gXCJEdWUgRGF0ZVwiO1xyXG4gIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkYXRlXCI7XHJcbiAgZHVlRGF0ZUlucHV0LmlkID0gXCJkYXRlXCI7XHJcblxyXG4gIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1jb250YWluZXJcIilcclxuXHJcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJIaWdoIHByaW9yaXR5P1wiO1xyXG4gIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgcHJpb3JpdHlDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gIHByaW9yaXR5Q2hlY2tib3gubmFtZSA9IFwicHJpb3JpdHlcIjtcclxuICBwcmlvcml0eUNoZWNrYm94LmlkID0gXCJwcmlvcml0eVwiO1xyXG5cclxuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUNoZWNrYm94KTtcclxuXHJcbiAgY29uc3QgZGlhbG9nQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaWFsb2dCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpYWxvZy1idG4tY29udGFpbmVyXCIpXHJcblxyXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGFkZFRhc2tCdXR0b24uY2xhc3NOYW1lID0gXCJhZGQtdGFzay1idXR0b25cIjtcclxuICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xyXG5cclxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZS13aW5kb3dcIjtcclxuICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcclxuXHJcbiAgZGlhbG9nQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xyXG4gIGRpYWxvZ0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcblxyXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcclxuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrVGl0bGVDb250YWluZXIpO1xyXG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcclxuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlQ29udGFpbmVyKTtcclxuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcik7XHJcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGlhbG9nQnRuQ29udGFpbmVyKTtcclxuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcclxuICBuZXdUYXNrRGlhbG9nLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG5cclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIilcclxuICBtYWluLmFwcGVuZENoaWxkKG5ld1Rhc2tEaWFsb2cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RGlhbG9nKCkge1xyXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3VGFza0RpYWxvZ1wiKVxyXG4gIGRpYWxvZy5zaG93KClcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZURpYWxvZygpIHtcclxuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1Rhc2tEaWFsb2dcIilcclxuICBkaWFsb2cuY2xvc2UoKVxyXG59XHJcblxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBOZXdUYXNrTW9kdWxlOyIsIlxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3RMaXN0ID0gW10pIHtcclxuICAgICAgICB0aGlzLmlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImltcG9ydCBjcmVhdGVDYXJkIGZyb20gXCIuL2NyZWF0ZUNhcmRcIlxyXG5cclxuY2xhc3MgVG9kb3Mge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5pZCA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZGlzcGxheUNhcmQoKSB7XHJcbiAgICAgICAgY3JlYXRlQ2FyZCh0aGlzLnRpdGxlLCB0aGlzLmR1ZURhdGUsIHRoaXMucHJpb3JpdHkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zOyIsIlxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKHRpdGxlLGR1ZURhdGUsIHByaW9yaXR5LGlkKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNhcmRcIilcclxuICAgIGNhcmQuZGF0YXNldC50YXNraWQgPSBpZDtcclxuICAgIGlmIChwcmlvcml0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gY2hlY2tib3ggXHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBjaGVja2JveC5uYW1lID0gXCJpc0NvbXBsZXRlXCI7XHJcbiAgICBjaGVja2JveC5pZCA9IFwiaXNDb21wbGV0ZVwiO1xyXG5cclxuICAgIC8vIGNhcmQtdGl0bGVcclxuICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkVGl0bGUuY2xhc3NOYW1lID0gXCJjYXJkLXRpdGxlXCI7XHJcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICAvLyBjYXJkLWRldGFpbHNcclxuICAgIGNvbnN0IGNhcmREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmREZXRhaWxzLmNsYXNzTmFtZSA9IFwiY2FyZC1kZXRhaWxzXCI7XHJcbiAgICBjb25zdCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGRldGFpbHNCdXR0b24udGV4dENvbnRlbnQgPSBcImRldGFpbFwiO1xyXG4gICAgY2FyZERldGFpbHMuYXBwZW5kQ2hpbGQoZGV0YWlsc0J1dHRvbik7XHJcblxyXG4gICAgLy8gY2FyZC1kYXRlXHJcbiAgICBjb25zdCBjYXJkRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkRGF0ZS5jbGFzc05hbWUgPSBcImNhcmQtZGF0ZVwiO1xyXG4gICAgY2FyZERhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xyXG5cclxuICAgIC8vIGRlbGV0ZS1jYXJkXHJcbiAgICBjb25zdCBkZWxldGVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRlbGV0ZUNhcmQuY2xhc3NOYW1lID0gXCJkZWxldGUtY2FyZFwiO1xyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XHJcbiAgICBkZWxldGVCdXR0b24uZGF0YXNldC5kZWxldGVJZCA9IGlkO1xyXG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1idXR0b25cIilcclxuICAgIGRlbGV0ZUNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICAgIFxyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGV0YWlscyk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREYXRlKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQ2FyZCk7XHJcblxyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkOyIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi9Ub2Rvc1wiXHJcblxyXG5mdW5jdGlvbiBleHRyYWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZVxyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWVcclxuICAgIGNvbnN0IGlzUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS5jaGVja2VkXHJcblxyXG4gICAgcmV0dXJuIHt0aXRsZSxkZXNjcmlwdGlvbixkYXRlLGlzUHJpb3JpdHl9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrSW5mbyA9IGV4dHJhY3RGb3JtKClcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVG9kb3MobmV3VGFza0luZm8udGl0bGUsIG5ld1Rhc2tJbmZvLmRlc2NyaXB0aW9uLCBuZXdUYXNrSW5mby5kYXRlLCBuZXdUYXNrSW5mby5pc1ByaW9yaXR5KVxyXG4gICAgbmV3VGFzay5kaXNwbGF5Q2FyZCgpXHJcbn0gXHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBFdmVudExpc3RlbmVyTW9kdWxlIGZyb20gJy4vTmV3VGFza01vZHVsZSc7XHJcbmltcG9ydCB7IE5ld1Byb2plY3RNb2R1bGUgfSBmcm9tIFwiLi9OZXdQcm9qZWN0TW9kdWxlXCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemUsIHJlbmRlclRhc2sgfSBmcm9tIFwiLi9Mb2NhbFN0b3JhZ2VIYW5kbGVyXCI7XHJcbmltcG9ydCBOZXdUYXNrTW9kdWxlIGZyb20gJy4vTmV3VGFza01vZHVsZSc7XHJcblxyXG5FdmVudExpc3RlbmVyTW9kdWxlLmluaXQoKTtcclxuXHJcbmluaXRpYWxpemUoKTtcclxuTmV3UHJvamVjdE1vZHVsZS5pbml0KCk7IC8vY29udGFpbnMgdGhlIGxpc3RlbmVyIGZvciBuZXdcclxuTmV3VGFza01vZHVsZS5pbml0KCk7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQge3NldFNlbGVjdGVkLCBzYXZlQW5kUmVuZGVyUHJvamVjdH0gZnJvbSBcIi4vTG9jYWxTdG9yYWdlSGFuZGxlclwiXHJcblxyXG4vLyBTRUxFQ1RFRCBFTEVNRU5UXHJcbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3RzLWxpc3RdXCIpO1xyXG5cclxucHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxpXCIpIHtcclxuICAgICAgICBzZXRTZWxlY3RlZChlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZCk7ICAgIFxyXG4gICAgICAgIHNhdmVBbmRSZW5kZXJQcm9qZWN0KCk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9