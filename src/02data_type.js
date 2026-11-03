const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    
    let nombres = document.querySelector("#nombre").value;
    let apellidos = document.querySelector("#apellido").value;
    let edad = parseInt(document.querySelector("#edad").value);

    let primerCorte = parseFloat(document.querySelector("#primerCorte").value);
    let segundoCorte = parseFloat(document.querySelector("#segundoCorte").value);
    let tercerCorte = parseFloat(document.querySelector("#tercerCorte").value);

    
    nombres = nombres.trim().toUpperCase();
    apellidos = apellidos.trim().toUpperCase();

 
    const notas = [primerCorte, segundoCorte, tercerCorte];

    let suma = notas[0] + notas[1] + notas[2]   ;

    let promedio = suma / notas.length;

    
    let estado = "";

    if (promedio >= 3) {
        estado = "APROBADO";
    } else {
        estado = "REPROBADO";
    }


    resultado.innerHTML = `
    <div class="datos">
        <h3>Datos del estudiante</h3>

        <p>Nombres: ${nombres}</p>
        <p>Apellidos: ${apellidos}</p>
        <p>Edad: ${edad}</p>

        <h3>Notas</h3>

        <p>Primer corte: ${notas[0]}</p>
        <p>Segundo corte: ${notas[1]}</p>
        <p>Tercer corte: ${notas[2]}</p>
        <h3>Resultados académicos</h3>

        <p>Promedio: ${promedio.toFixed(2)}</p>
        <p>Estado: ${estado}</p>
    </div>
`;

});
