'use strict';

let submitButton = document.querySelector('.js-button');
let responseURL = document.querySelector('.share__result__url');

submitButton.addEventListener('click', sendData);

function sendData(event) {
  event.preventDefault();
  let inputs = Array.from(containerForm.elements);
  let json = getJSONFromInputs(inputs);
  json.photo = picture;
  // Enviar la paleta seleccionada al servidor
  json.palette = document.querySelector(
    'input[name="color-options"]:checked'
  ).value;
  sendRequest(json);
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
      ' target=_blank>' +
      result.cardURL +
      '</a>';
    shareEle.classList.remove('share__result--hidden');
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}
