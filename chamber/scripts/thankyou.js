const params = new URLSearchParams(window.location.search);

const firstName = params.get("firstName");
const lastName = params.get("lastName");
const email = params.get("email");
const phone = params.get("phone");
const organization = params.get("organization");
const timestamp = params.get("timestamp");

document.querySelector("#submitted-first-name").textContent = firstName || "";
document.querySelector("#submitted-last-name").textContent = lastName || "";
document.querySelector("#submitted-email").textContent = email || "";
document.querySelector("#submitted-phone").textContent = phone || "";
document.querySelector("#submitted-organization").textContent = organization || "";
document.querySelector("#submitted-timestamp").textContent = timestamp || "";