const upButton = document.querySelector(".table__button_type_up");
const downButton = document.querySelector(".table__button_type_down");
const tableTop = document.querySelector("#tableTop");

const handlerButtonUp = () => {
  tableTop.classList.add("table__img_type_elevate");
};

const handlerButtonDown = () => {
  tableTop.classList.remove("table__img_type_elevate");
};

upButton.addEventListener("click", handlerButtonUp);

downButton.addEventListener("click", handlerButtonDown);
