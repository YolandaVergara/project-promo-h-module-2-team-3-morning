"use strict";

const btnDelete = document.querySelector(".js-button--delete");

//funcion para borra los datos del form
const deleteData = function() {
  // changeColorPalette();
  colorReset();
  const palette1 = document.getElementById("color-option1");
  palette1.checked = true;
  document.querySelector(".js-name").value = "";
  document.querySelector(".js-job").value = "";
  document.querySelector(".js-phone").value = "";
  document.querySelector(".js-email").value = "";
  document.querySelector(".js-linkedin").value = "";
  document.querySelector(".js-github").value = "";
  cardImage.style.backgroundImage = "url(../assets/images/placeholderImg.jpg)";
  imgPreview.style.backgroundImage = "url('')";

  submitEl.classList.remove("share__button--active");
  shareEle.classList.add("share__result--hidden");

  changeCard();
};

function colorReset() {
  card.classList.remove("js-card-palette2");
  card.classList.remove("js-card-palette3");
  card.classList.add("js-card-palette1");
}
//Funcion que se ejecuta al pulsar reset
const handleReset = function() {
  //Limpio los inputs
  deleteData();
  //Repinto la cardResult
  changeCard();
};
btnDelete.addEventListener("click", handleReset);
