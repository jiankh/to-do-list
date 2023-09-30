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
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var _parseForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseForm */ "./src/parseForm.js");



// Define the EventListenerModule
const EventListenerModule = {
  init() {
    _addTask__WEBPACK_IMPORTED_MODULE_0__["default"].createDialog();

    const addTaskBtn = document.querySelector(".add-task-btn");
    const allTaskBtn = document.querySelector(".all-task-btn");
    const todayTaskBtn = document.querySelector(".today-task-btn");
    const priorityTaskBtn = document.querySelector(".priority-task-btn");
    const form = document.querySelector(".new-task-form")
    let closeTaskDialog = document.querySelector(".close-window");
    let submitTaskBtn = document.querySelector(".add-task-button");


    addTaskBtn.addEventListener("click", () => {
      // AddTask.showDialog();
      const dialog = document.querySelector("#newTaskDialog")
      dialog.show()
    });

    closeTaskDialog.addEventListener("click", (e) => {
      e.preventDefault();
      form.reset();
      _addTask__WEBPACK_IMPORTED_MODULE_0__["default"].hideDialog();
    });

    submitTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
      (0,_parseForm__WEBPACK_IMPORTED_MODULE_1__["default"])();
      form.reset();
      _addTask__WEBPACK_IMPORTED_MODULE_0__["default"].hideDialog();
    });
  },
};
  
  // Export the EventListenerModule so it can be used elsewhere
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

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class AddTask {

    static createDialog() {
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

    static showDialog() {
        const dialog = document.querySelector("#newTaskDialog")
        dialog.show()
    }

    static hideDialog() {
        const dialog = document.querySelector("#newTaskDialog")
        dialog.close()
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTask);





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

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractForm: () => (/* binding */ extractForm)
/* harmony export */ });


function insertDOM(string) {
    const main = document.querySelector(".main-content");

    const title = document.createElement("div");
    title.classList.add('title');
    title.innerHTML = string;

    const mainContainer = document.createElement('div');
    mainContainer.classList.add("main-container");

    main.appendChild(title);
    main.appendChild(mainContainer);
}

function extractForm() {
    const title = document.querySelector('#task-title').value
    const description = document.querySelector('#description').value
    const date = document.querySelector('#date').value
    const isPriority = document.querySelector('#priority').checked

    return {title,description,date,isPriority}
}



/***/ }),

/***/ "./src/parseForm.js":
/*!**************************!*\
  !*** ./src/parseForm.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todos */ "./src/Todos.js");



function parseForm() {
    const newTaskInfo = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.extractForm)()

    const newTask = new _Todos__WEBPACK_IMPORTED_MODULE_1__["default"](newTaskInfo.title, newTaskInfo.description, newTaskInfo.date, newTaskInfo.isPriority)
    newTask.displayCard()
} 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseForm);

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
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos */ "./src/Todos.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _EventListenerModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventListenerModule */ "./src/EventListenerModule.js");




const LOCAL_STORAGE_PROJECT_KEY = "task.project";
let projectArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];

const LOCAL_STORAGE_TASK_KEY = "task.todos";
let toDoArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || [];


let newTodo = new _Todos__WEBPACK_IMPORTED_MODULE_0__["default"]("bookTitle", "blblab", "feb 27", 1);
newTodo.displayCard();

_EventListenerModule__WEBPACK_IMPORTED_MODULE_2__["default"].init();


//project section

const projectContainer = document.querySelector("[data-projects-list]");

// let projectArray = [];

function saveProject() {
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectArray))
}

function saveAndRenderProject() {
    saveProject()
    renderProject()
}

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
    return new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](name)
}

renderProject()


// TASK RENDER

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

    task = new _Todos__WEBPACK_IMPORTED_MODULE_0__["default"](taskName,taskDescription,taskDate,taskPriority)
    toDoArray.push(task);
    saveAndRenderTask();
})


const main = document.querySelector(".main-content");

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
    renderTask()
    saveTask()
}

renderTask()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BhcnNlRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRkVGFzayBmcm9tIFwiLi9hZGRUYXNrXCI7XHJcbmltcG9ydCBwYXJzZUZvcm0gZnJvbSBcIi4vcGFyc2VGb3JtXCJcclxuXHJcbi8vIERlZmluZSB0aGUgRXZlbnRMaXN0ZW5lck1vZHVsZVxyXG5jb25zdCBFdmVudExpc3RlbmVyTW9kdWxlID0ge1xyXG4gIGluaXQoKSB7XHJcbiAgICBBZGRUYXNrLmNyZWF0ZURpYWxvZygpO1xyXG5cclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ0blwiKTtcclxuICAgIGNvbnN0IGFsbFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC10YXNrLWJ0blwiKTtcclxuICAgIGNvbnN0IHRvZGF5VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktdGFzay1idG5cIik7XHJcbiAgICBjb25zdCBwcmlvcml0eVRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5LXRhc2stYnRuXCIpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stZm9ybVwiKVxyXG4gICAgbGV0IGNsb3NlVGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2Utd2luZG93XCIpO1xyXG4gICAgbGV0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKTtcclxuXHJcblxyXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvLyBBZGRUYXNrLnNob3dEaWFsb2coKTtcclxuICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdUYXNrRGlhbG9nXCIpXHJcbiAgICAgIGRpYWxvZy5zaG93KClcclxuICAgIH0pO1xyXG5cclxuICAgIGNsb3NlVGFza0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgIEFkZFRhc2suaGlkZURpYWxvZygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwYXJzZUZvcm0oKTtcclxuICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICBBZGRUYXNrLmhpZGVEaWFsb2coKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcbiAgXHJcbiAgLy8gRXhwb3J0IHRoZSBFdmVudExpc3RlbmVyTW9kdWxlIHNvIGl0IGNhbiBiZSB1c2VkIGVsc2V3aGVyZVxyXG4gIGV4cG9ydCBkZWZhdWx0IEV2ZW50TGlzdGVuZXJNb2R1bGU7IiwiXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdExpc3QgPSBbXSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnByb2plY3RMaXN0ID0gcHJvamVjdExpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiaW1wb3J0IGNyZWF0ZUNhcmQgZnJvbSBcIi4vY3JlYXRlQ2FyZFwiXHJcblxyXG5jbGFzcyBUb2RvcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGRpc3BsYXlDYXJkKCkge1xyXG4gICAgICAgIGNyZWF0ZUNhcmQodGhpcy50aXRsZSwgdGhpcy5kdWVEYXRlLCB0aGlzLnByaW9yaXR5KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvczsiLCJjbGFzcyBBZGRUYXNrIHtcclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlRGlhbG9nKCkge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaWFsb2cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdUYXNrRGlhbG9nXCIpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgd2l0aCB0aGUgJ2Zvcm0tY29udGFpbmVyJyBjbGFzc1xyXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRhaW5lclwiO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgZm9yIHRoZSBmb3JtIHRpdGxlXHJcbiAgICAgICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmb3JtVGl0bGUuY2xhc3NOYW1lID0gXCJmb3JtLXRpdGxlXCI7XHJcbiAgICAgICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgYSBuZXcgdGFza1wiO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgZm9ybSBlbGVtZW50IHdpdGggdGhlICduZXctdGFzay1mb3JtJyBjbGFzc1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uY2xhc3NOYW1lID0gXCJuZXctdGFzay1mb3JtXCI7XHJcbiAgICBcclxuICAgICAgICAvLyBDcmVhdGUgYSBkaXYgZWxlbWVudCBmb3IgdGhlIHRhc2sgdGl0bGUgY29udGFpbmVyXHJcbiAgICAgICAgY29uc3QgdGFza1RpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIFxyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBpbnB1dCBlbGVtZW50IGZvciB0aGUgdGFzayB0aXRsZVxyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRhc2tUaXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICB0YXNrVGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFza1wiO1xyXG4gICAgICAgIHRhc2tUaXRsZUlucHV0Lm5hbWUgPSBcInRhc2stdGl0bGVcIjtcclxuICAgICAgICB0YXNrVGl0bGVJbnB1dC5pZCA9IFwidGFzay10aXRsZVwiO1xyXG4gICAgICAgIHRhc2tUaXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgdGFzayB0aXRsZSBpbnB1dCB0byBpdHMgY29udGFpbmVyXHJcbiAgICAgICAgdGFza1RpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcclxuICAgIFxyXG4gICAgICAgIC8vIENyZWF0ZSBhIGRpdiBlbGVtZW50IGZvciB0aGUgZGVzY3JpcHRpb24gY29udGFpbmVyXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuIGlucHV0IGVsZW1lbnQgZm9yIHRoZSBkZXNjcmlwdGlvblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIjtcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwiZGVzY3JpcHRpb25cIjtcclxuICAgIFxyXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZGVzY3JpcHRpb24gaW5wdXQgdG8gaXRzIGNvbnRhaW5lclxyXG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgZm9yIHRoZSBkdWUgZGF0ZSBjb250YWluZXJcclxuICAgICAgICBjb25zdCBkdWVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIFxyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBpbnB1dCBlbGVtZW50IGZvciB0aGUgZHVlIGRhdGVcclxuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcclxuICAgICAgICBkdWVEYXRlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkR1ZSBEYXRlXCI7XHJcbiAgICAgICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImRhdGVcIjtcclxuICAgICAgICBkdWVEYXRlSW5wdXQuaWQgPSBcImRhdGVcIjtcclxuICAgIFxyXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZHVlIGRhdGUgaW5wdXQgdG8gaXRzIGNvbnRhaW5lclxyXG4gICAgICAgIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuICAgIFxyXG4gICAgICAgIC8vIENyZWF0ZSBhIGRpdiBlbGVtZW50IGZvciB0aGUgcHJpb3JpdHkgY29udGFpbmVyXHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1jb250YWluZXJcIilcclxuICAgIFxyXG4gICAgICAgIC8vIENyZWF0ZSBhIGxhYmVsIGVsZW1lbnQgZm9yIHRoZSBwcmlvcml0eSBjaGVja2JveFxyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiSGlnaCBwcmlvcml0eT9cIjtcclxuICAgICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuIGlucHV0IGVsZW1lbnQgZm9yIHRoZSBwcmlvcml0eSBjaGVja2JveFxyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgcHJpb3JpdHlDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIHByaW9yaXR5Q2hlY2tib3gubmFtZSA9IFwicHJpb3JpdHlcIjtcclxuICAgICAgICBwcmlvcml0eUNoZWNrYm94LmlkID0gXCJwcmlvcml0eVwiO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBsYWJlbCBhbmQgY2hlY2tib3ggdG8gdGhlIHByaW9yaXR5IGNvbnRhaW5lclxyXG4gICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5Q2hlY2tib3gpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgZGl2IGVsZW1lbnQgZm9yIHRoZSBkaWFsb2cgYnV0dG9uIGNvbnRhaW5lclxyXG4gICAgICAgIGNvbnN0IGRpYWxvZ0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGlhbG9nQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaWFsb2ctYnRuLWNvbnRhaW5lclwiKVxyXG4gICAgXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgYnV0dG9uIGVsZW1lbnQgZm9yIGFkZGluZyB0aGUgdGFza1xyXG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NOYW1lID0gXCJhZGQtdGFzay1idXR0b25cIjtcclxuICAgICAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgYnV0dG9uIGVsZW1lbnQgZm9yIGNsb3NpbmcgdGhlIGRpYWxvZ1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSBcImNsb3NlLXdpbmRvd1wiO1xyXG4gICAgICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBidXR0b25zIHRvIHRoZSBkaWFsb2cgYnV0dG9uIGNvbnRhaW5lclxyXG4gICAgICAgIGRpYWxvZ0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcclxuICAgICAgICBkaWFsb2dCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQXBwZW5kIGFsbCBlbGVtZW50cyB0byB0aGUgcmVzcGVjdGl2ZSBwYXJlbnQgZWxlbWVudHNcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlQ29udGFpbmVyKTtcclxuICAgICAgICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xyXG4gICAgICAgIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGRpYWxvZ0J0bkNvbnRhaW5lcik7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XHJcbiAgICAgICAgbmV3VGFza0RpYWxvZy5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobmV3VGFza0RpYWxvZyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dEaWFsb2coKSB7XHJcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdUYXNrRGlhbG9nXCIpXHJcbiAgICAgICAgZGlhbG9nLnNob3coKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaWRlRGlhbG9nKCkge1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3VGFza0RpYWxvZ1wiKVxyXG4gICAgICAgIGRpYWxvZy5jbG9zZSgpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRUYXNrO1xyXG5cclxuXHJcblxyXG4iLCJcclxuZnVuY3Rpb24gY3JlYXRlQ2FyZCh0aXRsZSxkdWVEYXRlLCBwcmlvcml0eSxpZCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwidG9kby1jYXJkXCIpXHJcbiAgICBjYXJkLmRhdGFzZXQudGFza2lkID0gaWQ7XHJcbiAgICBpZiAocHJpb3JpdHkgPT09IHRydWUpIHtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIGNoZWNrYm94IFxyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgY2hlY2tib3gubmFtZSA9IFwiaXNDb21wbGV0ZVwiO1xyXG4gICAgY2hlY2tib3guaWQgPSBcImlzQ29tcGxldGVcIjtcclxuXHJcbiAgICAvLyBjYXJkLXRpdGxlXHJcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZFRpdGxlLmNsYXNzTmFtZSA9IFwiY2FyZC10aXRsZVwiO1xyXG4gICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgLy8gY2FyZC1kZXRhaWxzXHJcbiAgICBjb25zdCBjYXJkRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkRGV0YWlscy5jbGFzc05hbWUgPSBcImNhcmQtZGV0YWlsc1wiO1xyXG4gICAgY29uc3QgZGV0YWlsc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBkZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gXCJkZXRhaWxcIjtcclxuICAgIGNhcmREZXRhaWxzLmFwcGVuZENoaWxkKGRldGFpbHNCdXR0b24pO1xyXG5cclxuICAgIC8vIGNhcmQtZGF0ZVxyXG4gICAgY29uc3QgY2FyZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZERhdGUuY2xhc3NOYW1lID0gXCJjYXJkLWRhdGVcIjtcclxuICAgIGNhcmREYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcclxuXHJcbiAgICAvLyBkZWxldGUtY2FyZFxyXG4gICAgY29uc3QgZGVsZXRlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkZWxldGVDYXJkLmNsYXNzTmFtZSA9IFwiZGVsZXRlLWNhcmRcIjtcclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xyXG4gICAgZGVsZXRlQ2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGV0YWlscyk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREYXRlKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQ2FyZCk7XHJcblxyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkOyIsIlxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0RE9NKHN0cmluZykge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBzdHJpbmc7XHJcblxyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZVxyXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWVcclxuICAgIGNvbnN0IGlzUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS5jaGVja2VkXHJcblxyXG4gICAgcmV0dXJuIHt0aXRsZSxkZXNjcmlwdGlvbixkYXRlLGlzUHJpb3JpdHl9XHJcbn1cclxuXHJcbmV4cG9ydCB7ZXh0cmFjdEZvcm19IiwiaW1wb3J0IHsgZXh0cmFjdEZvcm0gfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcclxuaW1wb3J0IFRvZG9zIGZyb20gXCIuL1RvZG9zXCI7XHJcblxyXG5mdW5jdGlvbiBwYXJzZUZvcm0oKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrSW5mbyA9IGV4dHJhY3RGb3JtKClcclxuXHJcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRvZG9zKG5ld1Rhc2tJbmZvLnRpdGxlLCBuZXdUYXNrSW5mby5kZXNjcmlwdGlvbiwgbmV3VGFza0luZm8uZGF0ZSwgbmV3VGFza0luZm8uaXNQcmlvcml0eSlcclxuICAgIG5ld1Rhc2suZGlzcGxheUNhcmQoKVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFyc2VGb3JtIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVG9kb3MgZnJvbSBcIi4vVG9kb3NcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xyXG5pbXBvcnQgRXZlbnRMaXN0ZW5lck1vZHVsZSBmcm9tICcuL0V2ZW50TGlzdGVuZXJNb2R1bGUnO1xyXG5cclxuY29uc3QgTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSA9IFwidGFzay5wcm9qZWN0XCI7XHJcbmxldCBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkpKSB8fCBbXTtcclxuXHJcbmNvbnN0IExPQ0FMX1NUT1JBR0VfVEFTS19LRVkgPSBcInRhc2sudG9kb3NcIjtcclxubGV0IHRvRG9BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9UQVNLX0tFWSkpIHx8IFtdO1xyXG5cclxuXHJcbmxldCBuZXdUb2RvID0gbmV3IFRvZG9zKFwiYm9va1RpdGxlXCIsIFwiYmxibGFiXCIsIFwiZmViIDI3XCIsIDEpO1xyXG5uZXdUb2RvLmRpc3BsYXlDYXJkKCk7XHJcblxyXG5FdmVudExpc3RlbmVyTW9kdWxlLmluaXQoKTtcclxuXHJcblxyXG4vL3Byb2plY3Qgc2VjdGlvblxyXG5cclxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0cy1saXN0XVwiKTtcclxuXHJcbi8vIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHNhdmVQcm9qZWN0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZUFuZFJlbmRlclByb2plY3QoKSB7XHJcbiAgICBzYXZlUHJvamVjdCgpXHJcbiAgICByZW5kZXJQcm9qZWN0KClcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdCgpIHtcclxuICAgIGNsZWFyRWxlbWVudChwcm9qZWN0Q29udGFpbmVyKTtcclxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xyXG4gICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XHJcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcblxyXG5cclxuLy9ORVcgUFJPSkVDVCBCVVRUT04gQUREXHJcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LWZvcm1dXCIpXHJcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctcHJvamVjdC1pbnB1dF1cIilcclxuXHJcbm5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWU7XHJcbiAgICBpZiAocHJvamVjdE5hbWUgPT0gbnVsbCB8fCBwcm9qZWN0TmFtZSA9PT0gXCJcIikgcmV0dXJuIC8vaWYgZW1wdHkgbmFtZSBkb250IG1ha2UgdGhlIHByb2plY3RcclxuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9IG51bGw7IC8vY2xlYXIgdGhlIGZvcm1cclxuICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xyXG4gICAgc2F2ZUFuZFJlbmRlclByb2plY3QoKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSlcclxufVxyXG5cclxucmVuZGVyUHJvamVjdCgpXHJcblxyXG5cclxuLy8gVEFTSyBSRU5ERVJcclxuXHJcbmNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1mb3JtXCIpO1xyXG5jb25zdCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIik7XHJcbmNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XHJcbmNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xyXG5jb25zdCBuZXdUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xyXG5cclxubmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdGFza05hbWUgPSBuZXdUYXNrVGl0bGUudmFsdWU7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBuZXdUYXNrRGVzY3JpcHRpb24udmFsdWU7XHJcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ld1Rhc2tEYXRlLnZhbHVlO1xyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gbmV3VGFza1ByaW9yaXR5LnZhbHVlO1xyXG5cclxuICAgIHRhc2sgPSBuZXcgVG9kb3ModGFza05hbWUsdGFza0Rlc2NyaXB0aW9uLHRhc2tEYXRlLHRhc2tQcmlvcml0eSlcclxuICAgIHRvRG9BcnJheS5wdXNoKHRhc2spO1xyXG4gICAgc2F2ZUFuZFJlbmRlclRhc2soKTtcclxufSlcclxuXHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUYXNrKCkge1xyXG4gICAgY2xlYXJFbGVtZW50KG1haW4pO1xyXG4gICAgdG9Eb0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICBjcmVhdGVDYXJkKHRhc2sudGl0bGUsIHRhc2suZHVlRGF0ZSwgdGFzay5wcmlvcml0eSwgdGFzay5pZCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlVGFzaygpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfVEFTS19LRVksIEpTT04uc3RyaW5naWZ5KHRvRG9BcnJheSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVBbmRSZW5kZXJUYXNrKCkge1xyXG4gICAgcmVuZGVyVGFzaygpXHJcbiAgICBzYXZlVGFzaygpXHJcbn1cclxuXHJcbnJlbmRlclRhc2soKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==