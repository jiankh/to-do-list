import createCard from "./createCard"

class Todos {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    displayCard() {
        createCard(this.title, this.dueDate, this.priority)
    }
}

export default Todos;