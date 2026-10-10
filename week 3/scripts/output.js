export function setTitle(course) {
  document.querySelector("h1").textContent = course.name;
  document.querySelector("h2").textContent = course.code;
}

export function renderSections(sections) {
  const tbody = document.querySelector("#sections");

  tbody.innerHTML = sections
    .map(
      (section) => `
        <tr>
          <td>${section.sectionNum}</td>
          <td>${section.enrolled}</td>
          <td>${section.instructor}</td>
        </tr>
      `
    )
    .join("");
}
