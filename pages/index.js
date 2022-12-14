const buttonToUp = document.querySelector(".table__button_type_up");
const buttonToDown = document.querySelector(".table__button_type_down");
const tableTop = document.querySelector("#tableTop");
const frameImg = document.querySelector(".voice__frame-img");
const hole = document.querySelector(".voice__hole");
const frameContainer = document.querySelector(".voice__frame-container");

buttonToUp.addEventListener("click", () => {

  tableTop.classList.add("table__img_type_elevate");
});

buttonToDown.addEventListener("click", () => {
  tableTop.classList.remove("table__img_type_elevate");
});

function setHoleOpened() {
  hole.classList.add("voice__hole_type_opened");
}

function setHoleClosed() {
  hole.classList.add("voice__hole_type_closed");
}

function showFrame() {
  frameImg.classList.remove("voice__frame-img_type_hide");
}

function frameLevitation() {
  frameImg.classList.add("voice__frame-img_type_levitation");
}

function frameAnimation() {
  const currentPosition =
    window.pageYOffset + document.documentElement.clientHeight;
  const framePosition =
    frameContainer.getBoundingClientRect().bottom + window.pageYOffset;

  if (currentPosition >= framePosition) {
    setHoleOpened();
    setTimeout(showFrame, 500);
    setTimeout(frameLevitation, 4500);
    setTimeout(setHoleClosed, 4500);
  }
}

document.addEventListener("scroll", frameAnimation);
