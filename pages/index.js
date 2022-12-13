const buttonToUp = document.querySelector(".table__button_type_up");
const buttonToDown = document.querySelector(".table__button_type_down");
const tableTop = document.querySelector("#tableTop");
const frameImg = document.querySelector(".voice__frame-img");
const hole = document.querySelector(".voice__hole");

buttonToUp.addEventListener("click", () => {
  tableTop.classList.add("table__img_type_elevate");
});

buttonToDown.addEventListener("click", () => {
  tableTop.classList.remove("table__img_type_elevate");
});

function setHoleClosed() {
  hole.classList.remove("voice__hole_type_opened");
}

function showFrame() {
  frameImg.classList.remove("voice__frame-img_type_hide");
}

function frameAnimation() {
  const currentPosition =
    window.pageYOffset + document.documentElement.clientHeight;
  const framePosition =
    frameImg.getBoundingClientRect().bottom + window.pageYOffset;

  if (currentPosition >= framePosition) {
    hole.classList.remove("voice__hole_type_hide");
    setTimeout(showFrame, 500);
    setTimeout(setHoleClosed, 3000);
  }
}

document.addEventListener("scroll", frameAnimation);
