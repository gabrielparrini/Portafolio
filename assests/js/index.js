var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

$(document).ready(function () {
  $("#boton").click(function () {
    alert("El correo fue enviado correctamente...");
  });
});

$("#repertorio").click(function () {
  window.location.href = "https://gabrielparrini.github.io/mi-repertorio/";
});

$("#repertorio2").click(function () {
  window.location.href = "https://gabrielparrini.github.io/Ricomida/";
});

$("#repertorio3").click(function () {
  window.location.href =
    "https://gabrielparrini.github.io/sugerencia-de-videos/";
});

$(".instagram").click(function () {
  window.location.href = "https://www.instagram.com/gabriel.parrini/";
});
