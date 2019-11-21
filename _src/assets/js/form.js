"use strict";

const nameEle = document.querySelector(".js-name");
const cardNameEle = document.querySelector(".js-cardTitle");
const jobEle = document.querySelector(".js-job");
const cardJobEle = document.querySelector(".js-cardJob");
const emailEle = document.querySelector(".js-email");
let cardEmailEle = document.querySelector(".js-cardEmail");
const phoneEle = document.querySelector(".js-phone");
let cardPhoneEle = document.querySelector(".js-cardPhone");
const linkedinEle = document.querySelector(".js-linkedin");
let cardLinkedinEle = document.querySelector(".js-cardLinkedin");
const githubEle = document.querySelector(".js-github");
let cardGithubEle = document.querySelector(".js-cardGithub");
const liElePhone = document.querySelector(".itemPhone");
const liEleMail = document.querySelector(".itemEmail");
const liEleLinkedin = document.querySelector(".itemLinkedin");
const liEleGithub = document.querySelector(".itemGithub");
const empty = "";
function changeCard() {
  const nameValue = nameEle.value;
  if (nameValue !== empty) {
    cardNameEle.innerHTML = nameValue;
  } else {
    cardNameEle.innerHTML = "Nombre Apellido";
  }

  let jobValue = jobEle.value;

  if (jobValue !== empty) {
    cardJobEle.innerHTML = jobValue;
  } else {
    cardJobEle.innerHTML = "Front-end developer";
  }

  let phoneValue = phoneEle.value;
  if (phoneValue !== empty) {
    liElePhone.classList.remove("js-opacity");
    cardPhoneEle = phoneValue;
  } else {
    liElePhone.classList.add("js-opacity");
  }

  let emailValue = emailEle.value;

  if (emailValue !== empty) {
    liEleMail.classList.remove("js-opacity");
    cardEmailEle.href = `mailto: ${emailValue}`;
  } else {
    liEleMail.classList.add("js-opacity");
  }

  let linkedinValue = linkedinEle.value;
  if (linkedinValue !== empty) {
    liEleLinkedin.classList.remove("js-opacity");
    cardLinkedinEle.href = linkedinValue;
  } else {
    liEleLinkedin.classList.add("js-opacity");
  }

  let githubValue = githubEle.value;
  if (githubValue !== empty) {
    liEleGithub.classList.remove("js-opacity");
    cardGithubEle.href = githubValue;
  } else {
    liEleGithub.classList.add("js-opacity");
  }
}

nameEle.addEventListener("keyup", changeCard);
jobEle.addEventListener("keyup", changeCard);
emailEle.addEventListener("keyup", changeCard);
phoneEle.addEventListener("keyup", changeCard);
linkedinEle.addEventListener("keyup", changeCard);
githubEle.addEventListener("keyup", changeCard);
