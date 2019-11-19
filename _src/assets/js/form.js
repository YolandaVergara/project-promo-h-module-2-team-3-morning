"use strict";

const nameEle = document.querySelector(".js-name");
const cardNameEle = document.querySelector(".js-cardTitle");
const jobEle = document.querySelector(".js-job");
const cardJobEle = document.querySelector(".js-cardJob");
const emailEle = document.querySelector(".js-email");
const cardEmailEle = document.querySelector(".js-cardEmail");
const phoneEle = document.querySelector(".js-phone");
const cardPhoneEle = document.querySelector(".js-cardPhone");
const linkedinEle = document.querySelector(".js-linkedin");
const cardLinkedinEle = document.querySelector(".js-cardLinkedin");
const githubEle = document.querySelector(".js-github");
const cardGithubEle = document.querySelector(".js-cardGithub");
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

  const phoneValue = phoneEle.value;
  if (phoneValue !== empty) {
    cardPhoneEle = phoneValue;
  } else {
    //opacidad
  }

  const emailValue = emailEle.value;
  cardEmailEle.href = `mailto: ${emailValue}`;

  const linkedinValue = linkedinEle.value;
  cardLinkedinEle.href = linkedinValue;

  const githubValue = githubEle.value;
  cardGithubEle.href = githubValue;
}

nameEle.addEventListener("keyup", changeCard);
jobEle.addEventListener("keyup", changeCard);
emailEle.addEventListener("keyup", changeCard);
