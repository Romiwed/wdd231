function displayCourseDetails(course) {
  const modal = document.querySelector("#course-details");

  const technologies = Array.isArray(course.technology)
    ? course.technology.join(", ")
    : course.technology || "Not listed";

  modal.innerHTML = `
    <button id="close-modal" aria-label="Close course details">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Certificate:</strong> ${course.certificate || "Web and Computer Programming"}</p>
    <p>${course.description || "Course description not available."}</p>
    <p><strong>Technology:</strong> ${technologies}</p>
  `;

  modal.showModal();

  const closeButton = modal.querySelector("#close-modal");

  closeButton.addEventListener("click", () => {
    modal.close();
  });
}

const modal = document.querySelector("#course-details");

modal.addEventListener("click", (event) => {
  const rectangle = modal.getBoundingClientRect();

  const clickedOutside =
    event.clientX < rectangle.left ||
    event.clientX > rectangle.right ||
    event.clientY < rectangle.top ||
    event.clientY > rectangle.bottom;

  if (clickedOutside) {
    modal.close();
  }
});