
const formulario = document.querySelector("#formulario");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let edad = Number(document.querySelector("#edad").value);
    let genero = document.querySelector("#genero").value;
    let calificacion = Number(document.querySelector("#calificacion").value);
    
    let estudiante = true;

    let edadFutura = edad + 1;

    
    let nombreMayuscula = nombre.toUpperCase();
    let apellidoMayuscula = apellido.toUpperCase();


    if (nombre === "juan" && apellido === "murillo" && edad === 18 && genero === "masculino") {

        let resultado = document.querySelector("#resultado");

        resultado.innerHTML = `
            <h2>Información del estudiante</h2>
            <p>Estudiante: ${nombre.toUpperCase()} ${apellido.toUpperCase()}</p>
            <p>Edad: ${edad}</p>
            <p>Registro correcto</p>
        `;

    } else {

        document.querySelector("#resultado").innerHTML = `
            <h2>Datos incorrectos</h2>
            <p>Verifica el nombre, apellido y edad.</p>
        `;

    }

});