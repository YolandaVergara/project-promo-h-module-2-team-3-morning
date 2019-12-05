'use strict';

var submitButton = document.querySelector('.js-button');
var responseURL = document.querySelector('.share__result__url');
// var form = document.querySelector('form');

submitButton.addEventListener('click', loadPhoto);

function sendData() {
  var inputs = Array.from(containerForm.elements);
  var json = getJSONFromInputs(inputs);
  json.photo = fr.result;
  // Enviar la paleta seleccionada al servidor
  json.palette = document.querySelector(
    'input[name="color-options"]:checked'
  ).value;
  sendRequest(json);
}

function loadPhoto(event) {
  event.preventDefault();
  var myFile = document.querySelector('#img-selector').files[0];
  fr.addEventListener('load', sendData);
  fr.readAsDataURL(myFile);
}

function getJSONFromInputs(inputs) {
  return inputs.reduce(function(acc, val) {
    if (val.nodeName !== 'BUTTON') acc[val.name] = val.value;
    return acc;
  }, {});
}

function sendRequest(json) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(result) {
      showURL(result);
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Si los datos del servidor son correctos, obtenemos la URL y la pintamos
function showURL(result) {
  if (result.success) {
    responseURL.innerHTML =
      "<a class='share__result__url' href=" +
      result.cardURL +
      '>' +
      result.cardURL +
      '</a>';
    shareEle.classList.remove('share__result--hidden');
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}
