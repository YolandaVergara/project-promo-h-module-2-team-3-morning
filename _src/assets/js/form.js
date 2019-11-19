"use strict";

const nameEle = document.querySelector(".js-name");
const cardNameEle = document.querySelector(".js-cardTitle");
const jobEle = document.querySelector(".js-job");
const cardJobEle = document.querySelector(".js-cardJob");
const emailEle = document.querySelector(".js-email");
const cardEmailEle = document.querySelector(".js-cardEmail");
const phoneEle = document.querySelector(".js-phone");
let cardPhoneEle = document.querySelector(".js-cardPhone");
const linkedinEle = document.querySelector(".js-linkedin");
const cardLinkedinEle = document.querySelector(".js-cardLinkedin");
const githubEle = document.querySelector(".js-github");
const cardGithubEle = document.querySelector(".js-cardGithub");
const liEle = document.querySelector(".card__item");
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
    liEle.classList.remove("js-opacity");
    cardPhoneEle = phoneValue;
  } else {
    liEle.classList.add("js-opacity");
  }

  //   let emailValue = emailEle.value; {

  //   if (emailValue !== empty) {

  //   cardEmailEle.href = `mailto: ${emailValue}`;
  // }   else {
  //   }

  //   let linkedinValue = linkedinEle.value;
  //   cardLinkedinEle.href = linkedinValue;

  //   let githubValue = githubEle.value;
  //   cardGithubEle.href = githubValue;*/
}

nameEle.addEventListener("keyup", changeCard);
jobEle.addEventListener("keyup", changeCard);
emailEle.addEventListener("keyup", changeCard);
phoneEle.addEventListener("keyup", changeCard);
linkedinEle.addEventListener("keyup", changeCard);
githubEle.addEventListener("keyup", changeCard);
