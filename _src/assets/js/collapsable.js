// "use strict";


// const colorsCollapsable = document.querySelector('.js-colors-collapse');
// const formCollapsable = document.querySelector('.js-form-collapse');
// const shareCollapsable = document.querySelector('.js-share-collapse');

// const boxColor = document.querySelector('.box-color');
// const boxForm = document.querySelector('.box-form');
// const boxShare = document.querySelector('.box-share');

// function collapsableOption1() {
//   if (boxColor.classList.contains('js-hidden')) {
//     boxColor.classList.remove('js-hidden');
//   } else {
//     boxColor.classList.add('js-hidden');
//   };
//   boxForm.classList.add('js-hidden');
//   boxShare.classList.add('js-hidden');
// };

// function collapsableOption2() {
//   if (boxForm.classList.contains('js-hidden')) {
//     boxForm.classList.remove('js-hidden');
//   } else {
//     boxForm.classList.add('js-hidden');
//   };
//   boxColor.classList.add('js-hidden');
//   boxShare.classList.add('js-hidden');
// };

// function collapsableOption3() {
//   if (boxShare.classList.contains('js-hidden')) {
//     boxShare.classList.remove('js-hidden');
//   } else {
//     boxShare.classList.add('js-hidden');
//   };
//   boxColor.classList.add('js-hidden');
//   boxForm.classList.add('js-hidden');
// };

// colorsCollapsable.addEventListener('click', collapsableOption1);
// formCollapsable.addEventListener('click', collapsableOption2);
// shareCollapsable.addEventListener('click', collapsableOption3);


//=====================================================================================================================


'use strict';
const collapsibleTriggers = document.querySelectorAll('.js-collapsible__tigger');


function updateCollapsible(event) {
  //parentElement nos dice quien es la madre del elemento que se esta escuchando

  const currentCollapsible = event.currentTarget.parentElement;
  //Compruebo si esta abieto
  if (currentCollapsible.classList.contains('content-collapsible')) {
    //Si esta abierto, lo puedo cerrar
    currentCollapsible.classList.remove('content-collapsible');
  } else {
    //Si esta cerrado:
    // Los cierro todos
    for (const item of collapsibleTriggers) {
      item.parentElement.classList.remove('content-collapsible');
    }
    // Abro el correcto
    currentCollapsible.classList.add('content-collapsible');
  }
}

for (const item of collapsibleTriggers) {
  item.addEventListener('click', updateCollapsible);
}
