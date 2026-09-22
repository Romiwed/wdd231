const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    completed: true,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces basic programming concepts and problem solving.",
    technology: ["Python"]
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    completed: true,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to web design and development fundamentals.",
    technology: ["HTML", "CSS"]
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    completed: true,
    certificate: "Web and Computer Programming",
    description:
      "This course focuses on programming with functions and problem solving.",
    technology: ["Python"]
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    completed: true,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces object-oriented programming and classes.",
    technology: ["C#"]
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    completed: true,
    certificate: "Web and Computer Programming",
    description:
      "This course teaches students how to create dynamic and responsive web pages.",
    technology: ["HTML", "CSS", "JavaScript"]
  },
  {
    subject: "WDD",
    number: 231,
    title: "Web Frontend Development I",
    credits: 2,
    completed: false,
    certificate: "Web and Computer Programming",
    description:
      "This course focuses on modern frontend development using HTML, CSS, JavaScript, APIs, and JSON.",
    technology: ["HTML", "CSS", "JavaScript", "JSON", "APIs"]
  }
];

const courseList = document.querySelector("#course-list");
const totalCredits = document.querySelector("#total-credits");

const allButton = document.querySelector("#all");
const wddButton = document.querySelector("#wdd");
const cseButton = document.querySelector("#cse");

function displayCourses(courseArray) {
  courseList.innerHTML = "";

  courseArray.forEach((course) => {
    const card = document.createElement("div");

    card.classList.add("course-card");

    if (course.completed) {
      card.classList.add("completed");
    }

    card.textContent = `${course.subject} ${course.number}`;

    card.addEventListener("click", () => {
      displayCourseDetails(course);
    });

    courseList.appendChild(card);
  });

  const credits = courseArray.reduce(
    (total, course) => total + course.credits,
    0
  );

  totalCredits.textContent = credits;
}

allButton.addEventListener("click", () => {
  displayCourses(courses);
});

wddButton.addEventListener("click", () => {
  const filtered = courses.filter(
    (course) => course.subject === "WDD"
  );

  displayCourses(filtered);
});

cseButton.addEventListener("click", () => {
  const filtered = courses.filter(
    (course) => course.subject === "CSE"
  );

  displayCourses(filtered);
});

displayCourses(courses);