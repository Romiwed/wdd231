const timestamp = document.querySelector("#timestamp");

if (timestamp) {
  timestamp.value = new Date().toISOString();
}

const modalLinks = document.querySelectorAll("[data-modal]");

modalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const modalId = link.dataset.modal;
    const modal = document.querySelector(`#${modalId}`);

    if (modal) {
      modal.showModal();
    }
  });
});

const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest("dialog");

    if (modal) {
      modal.close();
    }
  });
});

const dialogs = document.querySelectorAll("dialog");

dialogs.forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});