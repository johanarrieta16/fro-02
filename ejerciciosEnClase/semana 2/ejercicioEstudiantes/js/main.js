//Ejercicio Estudiantes

window.addEventListener('load', init, false);

function init() {
    let nombreIn = document.getElementById('nombreIn');
    let apellidoIn = document.getElementById('apellidoIn');
    let notaIn = document.getElementById('notaIn');
    let emailIn = document.getElementById('emailIn');
    let agregarBtn = document.getElementById('agregarBtn');
    let estudiantesSlt = document.getElementById('estudiantesSlt');

    let mostrarEstudiantesBtn = document.getElementById('mostrarEstudiantesBtn');
    let mostrarEstudianteTxt = document.getElementById('mostrarEstudianteTxt');

    agregarBtn.onclick = onAgregarBtn;
    let nombres = ['Johan','Adriana']
    let apellidos = ['Arrieta','Montero']
    let notas = ['90','100']
    let emails = ['ja@mail.com','am@mail.com']
    

    mostrarEstudiantesBtn.onclick = mostrarEstudiante;
    nombres.forEach(llenarEstudiantesSlt);

    function onAgregarBtn() {

        let nombre = nombreIn.value;
        let apellido = apellidoIn.value;
        let nota = notaIn.value;
        let email = emailIn.value;

        nombres.push(nombre);
        apellidos.push(apellido);
        notas.push(nota);
        emails.push(email);

        nombreIn.value = '';
        apellidoIn.value = '';
        notaIn.value = '';
        emailIn.value = '';

        estudiantesSlt.innerHTML = '';
        nombres.forEach(llenarEstudiantesSlt);
        console.log(nombres);
        console.log(apellidos);
        console.log(notas);
        console.log(emails);

        let value = estudiantesSlt.value;
        console.log(value);
    }

    function llenarEstudiantesSlt(elemento, indice) {
        let option = document.createElement('option');
        estudiantesSlt.appendChild(option)
        option.innerHTML = `${nombres[indice]} ${apellidos[indice]}`;
        option.value = indice; 
    }

    function mostrarEstudiante() {
        let indice = estudiantesSlt.value;
        console.log('-->',indice);
        let nombre = nombres[indice];
        let apellido = apellidos[indice];
        let nota = notas[indice];
        let email = emails[indice];

        mostrarEstudianteTxt.innerHTML = `El nombre del estudiante es ${nombre} ${apellido}, la nota es ${nota} y el email es ${email}`;

    }
}

