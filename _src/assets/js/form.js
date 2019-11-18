"use strict";

const nameEle = document.querySelector(".js-name");
const cardNameEle = document.querySelector(".js-cardTitle");
const jobEle = document.querySelector(".js-job");
const cardJobEle = document.querySelector(".js-cardJob");
const emailEle = document.querySelector(".js-email");
const cardEmailEle = document.querySelector(".js-cardEmail");
const empty = "";
function changeCard() {
  const nameValue = nameEle.value;
  if (nameValue !== empty) {
    cardNameEle.innerHTML = nameValue;
  } else {
    cardNameEle.innerHTML = "Nombre Apellido";
  }

  const jobValue = jobEle.value;
  if (jobValue !== empty) {
    cardJobEle.innerHTML = jobValue;
  } else {
    cardJobEle.innerHTML = "Front-end developer";
  }
  const emailValue = emailEle.value;
  cardEmailEle.href = `mailto: ${emailValue}`;
}

nameEle.addEventListener("keyup", changeCard);
jobEle.addEventListener("keyup", changeCard);
emailEle.addEventListener("keyup", changeCard);
