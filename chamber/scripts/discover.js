import { places } from "../data/places.mjs";

const cardsContainer = document.querySelector("#discover-cards");
const visitMessage = document.querySelector("#visit-message");

// Create the eight discover cards
places.forEach((place) => {
    const card = document.createElement("article");
    card.classList.add("discover-card");

    const title = document.createElement("h2");
    title.textContent = place.name;

    const figure = document.createElement("figure");

    const image = document.createElement("img");
    image.src = `images/${place.image}`;
    image.alt = place.name;
    image.width = 300;
    image.height = 200;
    image.loading = "lazy";

    figure.appendChild(image);

    const address = document.createElement("address");
    address.textContent = place.address;

    const description = document.createElement("p");
    description.textContent = place.description;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Learn More";
    button.classList.add("learn-more");

    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);

    cardsContainer.appendChild(card);
});

// Visit message using localStorage
const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();
const millisecondsPerDay = 1000 * 60 * 60 * 24;

if (!lastVisit) {
    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";
} else {
    const difference = currentVisit - Number(lastVisit);
    const daysBetweenVisits = Math.floor(difference / millisecondsPerDay);

    if (difference < millisecondsPerDay) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysBetweenVisits === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent =
            `You last visited ${daysBetweenVisits} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);