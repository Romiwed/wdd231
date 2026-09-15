
const currentTemp = document.querySelector("#current-temp");
const weatherDescription = document.querySelector("#weather-description");
const weatherIcon = document.querySelector("#weather-icon");
const forecastContainer = document.querySelector("#forecast");
const spotlightContainer = document.querySelector("#spotlights");

// ===============================
// WEATHER
// ===============================

// Coordinates for your Chamber location.
// Change these later if your Chamber is in another city.
const lat = 45.46;
const lon = 9.19;

// Paste your active OpenWeather API key here.
const apiKey = "3064bbd561b5ef59cffa97c5d557433c";

const currentWeatherURL =
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(currentWeatherURL);

        if (!response.ok) {
            throw new Error(`Weather error: ${response.status}`);
        }

        const data = await response.json();

        currentTemp.textContent = Math.round(data.main.temp);

        const description = data.weather[0].description;

        weatherDescription.textContent =
            description.charAt(0).toUpperCase() +
            description.slice(1);

        const icon = data.weather[0].icon;

        weatherIcon.src =
            `https://openweathermap.org/img/wn/${icon}@2x.png`;

        weatherIcon.alt = description;

    } catch (error) {
        console.error("Current weather error:", error);

        weatherDescription.textContent =
            "Weather unavailable.";
    }
}

// ===============================
// 3-DAY FORECAST
// ===============================

async function getForecast() {
    try {
        const response = await fetch(forecastURL);

        if (!response.ok) {
            throw new Error(`Forecast error: ${response.status}`);
        }

        const data = await response.json();

        forecastContainer.innerHTML = "";

        const dailyForecast = data.list
            .filter(item => item.dt_txt.includes("12:00:00"))
            .slice(0, 3);

        dailyForecast.forEach(day => {
            const date = new Date(day.dt * 1000);

            const dayName = date.toLocaleDateString("en-US", {
                weekday: "long"
            });

            const temperature = Math.round(day.main.temp);

            const paragraph = document.createElement("p");

            paragraph.innerHTML =
                `<strong>${dayName}:</strong> ${temperature}°C`;

            forecastContainer.appendChild(paragraph);
        });

    } catch (error) {
        console.error("Forecast error:", error);

        forecastContainer.innerHTML =
            "<p>Forecast unavailable.</p>";
    }
}

// ===============================
// COMPANY SPOTLIGHTS
// ===============================

async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error(`Members error: ${response.status}`);
        }

        const data = await response.json();

        displaySpotlights(data.members);

    } catch (error) {
        console.error("Members error:", error);

        spotlightContainer.innerHTML =
            "<p>Member information unavailable.</p>";
    }
}

function displaySpotlights(members) {
    spotlightContainer.innerHTML = "";

    // Only Silver (2) and Gold (3)
    const qualifiedMembers = members.filter(
        member =>
            member.membership === 2 ||
            member.membership === 3
    );

    // Randomize without changing original array
    const shuffledMembers = [...qualifiedMembers]
        .sort(() => Math.random() - 0.5);

    // Show 3 random members
    const selectedMembers = shuffledMembers.slice(0, 3);

    selectedMembers.forEach(member => {
        const membershipName =
            member.membership === 3
                ? "Gold Member"
                : "Silver Member";

        const card = document.createElement("article");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <img
                src="images/${member.image}"
                alt="${member.name}"
                width="120"
                height="100"
                loading="lazy">

            <h3>${member.name}</h3>

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <p><strong>${membershipName}</strong></p>

            <a
                href="${member.website}"
                target="_blank"
                rel="noopener">
                Visit Website
            </a>
        `;

        spotlightContainer.appendChild(card);
    });
}

// ===============================
// START
// ===============================

getWeather();
getForecast();
getMembers();