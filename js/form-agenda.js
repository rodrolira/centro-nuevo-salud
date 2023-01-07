////// ABRIR FORM //////

var btnAgenda = document.getElementById('btnAgenda'),
    formAgenda = document.getElementById('formAgenda'),
    consultaMedica = document.getElementById('consultaMedica'),
    formPaciente =document.getElementById('form-paciente')
    displayForm = 0;


function mostrar() {
    if (displayForm == 0) {
        formAgenda.classList.add('d-block');
        formAgenda.classList.remove('d-none');
        displayForm = 1;
    }
    else {
        formAgenda.classList.remove('d-block');
        formAgenda.classList.add('d-none');
        displayForm = 0;
    }

    if (displayForm == 1) {
        consultaMedica.classList.add('d-none');
        formPaciente.id.add('d-block');
        formPaciente.classList.remove('d-block');
        displayForm = 1;
    }
    else {
        formPaciente.id.add('d-block');
        consultaMedica.classList.add('d-none');
        displayForm = 0;
    }

}

btnAgenda.addEventListener('click', mostrar, true);

