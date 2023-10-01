import Todos from "./Todos"

function extractForm() {
    const title = document.querySelector('#task-title').value
    const description = document.querySelector('#description').value
    const date = document.querySelector('#date').value
    const isPriority = document.querySelector('#priority').checked

    return {title,description,date,isPriority}
}

function createTask() {
    const newTaskInfo = extractForm()
    const newTask = new Todos(newTaskInfo.title, newTaskInfo.description, newTaskInfo.date, newTaskInfo.isPriority)
    newTask.displayCard()
} 

export { createTask }