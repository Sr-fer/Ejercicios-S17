function tamnio_fuente() {
preload();
var radio = document.getElementsByClassName("tamTexto");
for (var i = 0; i < radio.length; i++) {
radio[i].addEventListener("click", (event) => {
cambiaTexto(event);
});
}
}
function cambiaTexto(event) {
var cuerpo = document.getElementById("cuerpo");
cuerpo.style.fontSize = event.currentTarget.value;
console.log(event.currentTarget.value);
localStorage.setItem("tamFuente", event.currentTarget.value);
}
function preload() {
var cuerpo = document.getElementById("cuerpo");
var tamFuente = localStorage.getItem("tamFuente");
cuerpo.style.fontSize = tamFuente;
var radio = document.getElementsByClassName("tamTexto");
for (var i = 0; i < radio.length; i++) {
if (radio[i].value == tamFuente) {
radio[i].checked = true;
} else {
radio[i].checked = false;
}
}
}