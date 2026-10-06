const resourceContainer = document.querySelector("#resource-cards");
const searchInput = document.querySelector("#resource-search");
const categoryFilter = document.querySelector("#category-filter");
const resourceStatus = document.querySelector("#resource-status");

const modal = document.querySelector("#resource-modal");
const closeModalButton = document.querySelector("#close-modal");

const modalTitle = document.querySelector("#modal-title");
const modalCategory = document.querySelector("#modal-category");
const modalDifficulty = document.querySelector("#modal-difficulty");
const modalTime = document.querySelector("#modal-time");
const modalDescription = document.querySelector("#modal-description");
const modalTip = document.querySelector("#modal-tip");

let studyResources = [];

// Load resources from JSON
async function loadResources() {
    try {
        const response = await fetch("data/study-resources.json");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        studyResources = await response.json();

        displayResources(studyResources);
    } catch (error) {
        console.error("Error loading study resources:", error);

        resourceStatus.textContent =
            "Sorry, the study resources could not be loaded.";
    }
}

// Display resource cards
function displayResources(resources) {
    resourceContainer.innerHTML = "";

    resourceStatus.textContent =
        `${resources.length} study resources found.`;

    if (resources.length === 0) {
        resourceContainer.innerHTML =
            "<p>No resources match your search.</p>";
        return;
    }

    resources.forEach((resource) => {
        const card = document.createElement("article");
        card.classList.add("resource-card");

        card.innerHTML = `
            <p class="resource-category">${resource.category}</p>

            <h3>${resource.title}</h3>

            <p>${resource.description}</p>

            <div class="resource-meta">
                <span>
                    <strong>Difficulty:</strong>
                    ${resource.difficulty}
                </span>

                <span>
                    <strong>Time:</strong>
                    ${resource.time}
                </span>
            </div>

            <button
                class="resource-details-button"
                type="button"
            >
                Learn More
            </button>
        `;

        const detailsButton =
            card.querySelector(".resource-details-button");

        detailsButton.addEventListener("click", () => {
            openResourceModal(resource);
        });

        resourceContainer.appendChild(card);
    });
}

// Filter resources
function filterResources() {
    const searchValue =
        searchInput.value.toLowerCase().trim();

    const selectedCategory =
        categoryFilter.value;

    const filteredResources = studyResources.filter((resource) => {
        const matchesSearch =
            resource.title.toLowerCase().includes(searchValue) ||
            resource.description.toLowerCase().includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            resource.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayResources(filteredResources);
}

// Open modal
function openResourceModal(resource) {
    modalCategory.textContent = resource.category;
    modalTitle.textContent = resource.title;
    modalDifficulty.textContent = resource.difficulty;
    modalTime.textContent = resource.time;
    modalDescription.textContent = resource.description;
    modalTip.textContent = resource.tip;

    modal.showModal();
}

// Close modal
closeModalButton.addEventListener("click", () => {
    modal.close();
});

// Close modal when clicking outside
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

// Search and filter events
searchInput.addEventListener("input", filterResources);
categoryFilter.addEventListener("change", filterResources);

// Load data
loadResources();