"use strict";

const btnDelete = document.querySelector(".js-button--delete");
const handleReset = function() {
  console.log("escuchar click");
  deleteData();
  changeCard();
};
//funcion para borra los datos del form

const deleteData = function() {
  changeColorPalette1();
  //
  nameValue = "";
  phoneValue = "";
  emailValue = "";
  linkedinValue = "";
  githubValue = "";
  changeCard();
  console.log("borrar datos");
};

//Creamos un objeto que incluye todos los campos de card-result

// function paintCardAfterReset() {
//   cardNameEle.innerHTML = cardFieldsObject.name;
//   cardJobEle.innerHTML = cardFieldsObject.job;
//   cardPhoneEle.href = cardFieldsObject.phone;
//   cardEmailEle.href = cardFieldsObject.email;
//   cardLinkedinEle.href = cardFieldsObject.linkedin;
//   cardGithubEle.href = cardFieldsObject.github;

//   const liCardElements = document.querySelectorAll(".js-card__item");
//   for (const element of liCardElements) {
//     element.classList.add("opacity");
//   }
// }

//funcion restaurar valores de la tarjeta

//funcion para restablecer color por defecto

btnDelete.addEventListener("click", handleReset);
