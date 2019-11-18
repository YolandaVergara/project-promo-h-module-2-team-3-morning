"use strict";
const input = document.querySelector(".js-input");
const eleTitle = document.querySelector("js-cardTitle");

function changeCard(event) {
  eleTitle.innerHTML = input.value;
}
input.addEventListener("keydown", changeCard);
