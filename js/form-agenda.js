////// ABRIR FORM //////

var btnAgenda = document.getElementById('btnAgenda'),
    formAgenda = document.getElementById('formAgenda'),
    consultaMedica = document.getElementById('consultaMedica'),
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
        consultaMedica.classList.remove('d-block');
        displayForm = 1;
    }
    else {
        consultaMedica.classList.remove('d-none');
        consultaMedica.classList.add('d-block');
        displayForm = 0;
    }

}

btnAgenda.addEventListener('click', mostrar, true);

