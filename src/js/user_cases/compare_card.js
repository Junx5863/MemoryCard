


const compareCards = (elementDescubierta) => {
  if (
    elementDescubierta[0].dataset.valor === elementDescubierta[1].dataset.valor
  ) {
    acierto(elementDescubierta);
  } else {
    error(elementDescubierta);
  }
};

/**
 *
 * @param {List<HTMLDivElement>} hideCards
 */

const acierto = (hideCards) => {
  hideCards.forEach((element) => {
    element.classList.add("acertada");
  });
  document.querySelector("#sonido-acierto").play();
};

const error = (notSameCards) => {
  notSameCards.forEach((element) => {
    element.classList.add("error");
  });

  document.querySelector("#sonido-error").play();

  setTimeout(() => {
    notSameCards.forEach((element) => {
      element.classList.remove("descubierta");
      element.classList.remove("error");
    });
  }, 1000);
};

export { compareCards };
