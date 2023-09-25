
function createCard(title,dueDate, priority) {
    const main = document.querySelector(".main-content");

    const card = document.createElement("div");
    card.classList.add("todo-card")
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

export default createCard;