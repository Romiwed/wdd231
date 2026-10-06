const studyForm = document.querySelector("#study-form");
const techniqueSelect = document.querySelector("#technique");
const savedTechnique = document.querySelector("#saved-technique");
const clearPreferenceButton = document.querySelector("#clear-preference");
const createdTime = document.querySelector("#created-time");

const storageKey = "preferredStudyTechnique";

// Show saved study technique when page loads
function displaySavedTechnique() {
    const technique = localStorage.getItem(storageKey);

    if (technique) {
        savedTechnique.textContent = `Your last selected technique was: ${technique}`;
        techniqueSelect.value = technique;
    } else {
        savedTechnique.textContent = "Choose a study technique in the form.";
    }
}

// Save preference when the user changes the technique
techniqueSelect.addEventListener("change", () => {
    const selectedTechnique = techniqueSelect.value;

    if (selectedTechnique) {
        localStorage.setItem(storageKey, selectedTechnique);

        savedTechnique.textContent =
            `Your last selected technique was: ${selectedTechnique}`;
    }
});

// Add timestamp before the form is submitted
studyForm.addEventListener("submit", () => {
    createdTime.value = new Date().toLocaleString();

    const selectedTechnique = techniqueSelect.value;

    if (selectedTechnique) {
        localStorage.setItem(storageKey, selectedTechnique);
    }
});

// Clear saved preference
clearPreferenceButton.addEventListener("click", () => {
    localStorage.removeItem(storageKey);

    techniqueSelect.value = "";

    savedTechnique.textContent =
        "Choose a study technique in the form.";
});

// Load saved preference
displaySavedTechnique();