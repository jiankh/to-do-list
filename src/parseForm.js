import { extractForm } from "./helperFunctions";
import Todos from "./Todos";

function parseForm() {
    const newTaskInfo = extractForm()

    const newTask = new Todos(newTaskInfo.title, newTaskInfo.description, newTaskInfo.date, newTaskInfo.isPriority)
    newTask.displayCard()
} 

export default parseForm