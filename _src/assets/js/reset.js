"use strict";
const btnDelete = document.querySelector(".js-button--delete");

const handleReset = function() {
  console.log("escuchar click");
  deleteData();
};
//funcion para borra los datos del form

const deleteData = function() {
  document.getElementById("js-form").reset();
  console.log("borrar datos");
};

//funcion restaurar valores de la tarjeta

//funcion para restablecer color por defecto

btnDelete.addEventListener("click", handleReset);
