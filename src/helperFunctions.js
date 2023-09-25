

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

export {extractForm}