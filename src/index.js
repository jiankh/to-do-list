import Todos from "./Todos";
import AddTask from "./addTask";
import EventListenerModule from './EventListenerModule';


//Replace later with the localStorage
let toDoArray = [];

let newTodo = new Todos("bookTitle", "blblab", "feb 27", 1);
newTodo.displayCard()

EventListenerModule.init();
