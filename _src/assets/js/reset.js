"use strict";

const btnDelete = document.querySelector(".js-button--delete");

//funcion para borra los datos del form
const deleteData = function() {
  changeColorPalette();
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

  changeCard();
};

//Funcion que se ejecuta al pulsar reset
const handleReset = function() {
  //Limpio los inputs
  deleteData();
  //Repinto la cardResult
  changeCard();
};
btnDelete.addEventListener("click", handleReset);
