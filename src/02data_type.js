const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = parseInt(document.getElementById("edad").value);
  let primercorte = parseFloat(document.getElementById("primerCorte").value);
  let segundocorte = parseFloat(document.getElementById("segundoCorte").value);
  let tercercorte = parseFloat(document.getElementById("tercerCorte").value);
  let promedio = (primercorte + segundocorte + tercercorte) / 3;
     
    if (nombre === "juan" && apellido === "murillo" && edad === 18) {

  resultado.innerHTML = 
    `<p>Nombre: ${nombre.toUpperCase()}</p>
     <p>Apellido: ${apellido.toUpperCase()}</p>
     <p>Edad: ${edad}</p>
     <p>Promedio: ${promedio.toFixed(2)}</p>`;

} else {
  resultado.innerHTML = "<p>Estudiante no encontrado.</p>";
}
});