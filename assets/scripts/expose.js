// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornimage = document.getElementById("horn-select");
  hornimage.addEventListener("change", addHornImage); //function calling
}

function addHornImage() {
  const horn = document.querySelector("img");
  const hornselect = (document.getElementById("horn-select")).value;
  if (hornselect === "air-horn") {
    horn.src = "assets/images/air-horn.svg";
  } else if (hornselect === "car-horn") {
    horn.src = "assets/images/car-horn.svg";
  } else if (hornselect === "party-horn") {
    horn.src = "assets/images/party-horn.svg";
  }
}

function addAudio() {
  const audio = document.getElementById("volume-controls: img");
  const audioselect = (document.getElementById("volume-controls")).value;
  if (audio === "0") {

  }
  else if (audio > "1" || audio < "33") {

  }
  else if (audio >= "33" || audio < "67") {

  }
  else if (audio >= "67") {

  }
}