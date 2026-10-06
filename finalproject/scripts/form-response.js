const resultsContainer = document.querySelector("#form-results");

const params = new URLSearchParams(window.location.search);

const fieldLabels = {
    name: "Name",
    subject: "Subject",
    date: "Study Date",
    length: "Study Session Length",
    priority: "Priority",
    technique: "Study Technique",
    notes: "Study Notes",
    created: "Submitted"
};

function displayFormData() {
    if (!resultsContainer) {
        return;
    }

    if ([...params].length === 0) {
        resultsContainer.innerHTML = `
            <p>No study plan information was received.</p>
        `;
        return;
    }

    const details = document.createElement("div");
    details.classList.add("response-details");

    params.forEach((value, key) => {
        if (!value) {
            return;
        }

        const item = document.createElement("p");

        const label = fieldLabels[key] || key;

        item.innerHTML = `
            <strong>${label}:</strong>
            <span>${value}</span>
        `;

        details.appendChild(item);
    });

    resultsContainer.appendChild(details);
}

displayFormData();