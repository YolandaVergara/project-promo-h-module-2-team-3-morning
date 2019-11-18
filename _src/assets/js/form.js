"use strict";

const input = document.querySelector(".js-input");

function changeCard(event) {
  const eleTitle = document.querySelector(".js-cardTitle");

  //   debugger;
  eleTitle.innerHTML = event.currentTarget.value;
  const eleJob = document.querySelector(".js-cardJob");
  eleJob.innerHTML = event.currentTarget.value;
}
input.addEventListener("keyup", changeCard);
