////// ABRIR FORM //////

var btnProfesional = document.getElementById('profesionales'),
    formPaciente = document.getElementById('formPaciente'),
    displayFormDatos = 0;


function mostrar() {
    if (displayFormDatos == 0) {
        formPaciente.classList.add('d-block');
        formPaciente.classList.remove('d-none');
        displayFormDatos = 1;
    }
    else {
        formPaciente.classList.remove('d-block');
        formPaciente.classList.add('d-none');
        displayFormDatos = 0;
    }
}

btnProfesional.addEventListener('click', mostrar, true);
