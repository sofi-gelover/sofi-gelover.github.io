var dinosaurio = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
  dinosaurio.classList.add("animate");
  setTimeout(function () {
    dinosaurio.classList.remove("animate");
  }, 500);
}

var sigueVivo = setInterval(function () {
  var posicionDinosaurio =
    parseInt(window.getComputedStyle(dinosaurio).getPropertyValue("top"));
  var posicionBloque =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));

  if (posicionBloque < 20 && posicionBloque > 0 && posicionDinosaurio >= 130) {
    alert("perdiste :c");
  }

}, 100);