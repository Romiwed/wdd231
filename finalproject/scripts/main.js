const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#main-navigation");
const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

// Mobile navigation
if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.textContent = isOpen ? "✕" : "☰";
    });

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "☰";
        });
    });
}

// Current year
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Last modified date
if (lastModified) {
    lastModified.textContent = `Last modified: ${document.lastModified}`;
}