'use strict';

var submitButton = document.querySelector('.js-button');
var responseURL = document.querySelector('.share__result__url');
// var form = document.querySelector('form');


submitButton.addEventListener('click', loadPhoto);

function sendData() {
  var inputs = Array.from(containerForm.elements);
  var json = getJSONFromInputs(inputs);
  json.skills = ['JavaScript', 'React'];
  json.photo = fr.result;
  sendRequest(json);
}

function loadPhoto() {
  var myFile = new Blob(document.querySelector('#img-selector').files[0]);
  fr.addEventListener('load', sendData);
  fr.readAsDataURL(myFile);
}

function getJSONFromInputs(inputs) {
  return inputs.reduce(function (acc, val) {
    if (val.nodeName !== 'BUTTON')
      acc[val.name] = val.value;
    return acc;
  }, {})
}

function sendRequest(json) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/', {
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  if (result.success) {
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}
