const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

async function getMembers() {
  try {
    const response = await fetch("./data/members.json");

    if (!response.ok) {
      throw new Error("Unable to load member data.");
    }

    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Error loading members:", error);

    membersContainer.innerHTML =
      "<p>Member information is currently unavailable.</p>";
  }
}

function getMembershipLevel(level) {
  if (level === 3) {
    return "Gold Member";
  }

  if (level === 2) {
    return "Silver Member";
  }

  return "Member";
}

function displayMembers(members) {
  membersContainer.innerHTML = "";

  members.forEach((member) => {
    const card = document.createElement("article");
    card.classList.add("member-card");

    const membershipLevel = getMembershipLevel(member.membership);

    card.innerHTML = `
      <img
        src="./images/${member.image}"
        alt="${member.name}"
        width="400"
        height="250"
        loading="lazy"
      >

      <div class="member-information">
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>${membershipLevel}</p>

        <a
          href="${member.website}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>
      </div>
    `;

    membersContainer.appendChild(card);
  });
}

gridButton.addEventListener("click", () => {
  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
  membersContainer.classList.add("list");
  membersContainer.classList.remove("grid");
});

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

getMembers();