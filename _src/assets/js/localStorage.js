'use strict';
//Empezamos trayendo el formulario del html y creando un objeto con los inputs del formulario
const containerForm = document.querySelector(".js-containerForm")
const handleInput = () => {
  const data = {
    name: nameEle.value,
    job: jobEle.value,
    phone: phoneEle.value,
    email: emailEle.value,
    linkedin: linkedinEle.value,
    github: githubEle.value

  };
  //convertimos (con setItem) el objeto en un JSON (que tiene formato string)
  localStorage.setItem("userData", JSON.stringify(data));
}

//Para cogerlos datos al iniciar la página convertimos los datos del JSON con parse (pasa de string a objeto)
const getFromLocalStorage = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData !== null) {
    nameEle.value = userData.name;

  }
}

//Escucho el formulario con keyup para que, cada vez que escribo, vaya guardando en el objeto todos los values
containerForm.addEventListener("keyup", handleInput);
getFromLocalStorage();


//Llamamos a la función que pinta los datos en la tarjeta