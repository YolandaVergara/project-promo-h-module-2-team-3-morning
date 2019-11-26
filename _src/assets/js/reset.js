"use strict";

const btnDelete = document.querySelector(".js-button--delete");

//funcion para borra los datos del form
const deleteData = function() {
  changeColorPalette1();
  document.querySelector(".js-name").value = "";
  document.querySelector(".js-job").value = "";
  document.querySelector(".js-phone").value = "";
  document.querySelector(".js-email").value = "";
  document.querySelector(".js-linkedin").value = "";
  document.querySelector(".js-github").value = "";
  //
  cardImage.style.backgroundImage = "url(../assets/images/placeholderImg.jpg)";
  imgPreview.style.backgroundImage = "url('')";

  changeCard();
  console.log("borrar datos");
};

//Funcion que se ejecuta al pulsar reset
const handleReset = function() {
  console.log("escuchar click");
  //Limpio los inputs
  deleteData();
  //Repinto la cardResult
  changeCard();
};
btnDelete.addEventListener("click", handleReset);
