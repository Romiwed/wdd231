const formData = document.querySelector("#form-data");

const params = new URLSearchParams(window.location.search);

const firstName = params.get("firstName");
const lastName = params.get("lastName");
const email = params.get("email");
const program = params.get("program");
const startDate = params.get("startDate");

formData.innerHTML = `
  <p><strong>First Name:</strong> ${firstName}</p>
  <p><strong>Last Name:</strong> ${lastName}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Study Program:</strong> ${program}</p>
  <p><strong>Start Date:</strong> ${startDate}</p>
`;