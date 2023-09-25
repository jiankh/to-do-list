

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