let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

const openModal = () => {
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};
