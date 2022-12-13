//crear varaibles para cada especialización
var especialidad_Cirugia_Infantil = ["Dra. Beatriz Quezada Kerr", "Dra. Francisca Moreno Oyarzo"];
var especialidad_Fonoaudiologia = ["Rodrigo Jara Morales"];
var especialidad_Gastroenterologia = ["Dra. Andrea Pinto Iriarte"];
var especialidad_Kinesiologia = ["Rodrigo Quezada Arias", "Sebastián Cares Guajardo"];
var especialidad_Medicina_General = ["Dr. Francisco Alarcón Alarcón", "Dra. Marianne Bustamante Pizarro"];
var especialidad_Neurologia_Infantil = ["Dra. Carolina Gutierrez Gúzman"];
var especialidad_Otorrinolaringologia = ["Dr. Alberto Landaida Cifuentes", "Dra. María Carolina Caulier", "Dr. Marcelo Pradenas", "Dra. Michelle Arroyo Dávila", "Dr. Patricio Vargas Farr", "Dr. Rafael Álvarez Mirabal", "Dr. René Sepúlveda Schulze", "Dr. Ricardo Quitral Cuevas"];
var especialidad_Pediatria = ["Dra. Claudia Díaz Alvear", "Dr. Jose Pacheco Hernández", "Dra. Mariabeatriz Bocaranda", "Dra. María Jesús Ponce"];
var especialidad_Psicologia = ["Katherine Osses Rojas", "Luilly Gomez Vargas", "Natalia Arce Díaz"];
var especialidad_Psiquitatria_Infantojuvenil = ["Dra. Carolina Caceres Iribarren"];
var especialidad_Traumatologia_General = ["Dr. Felipe Díaz Díaz", "Dr. Manuel Saavedra Castillo"];
var especialidad_Traumatologia_Hombro_Codo = ["Dr. Francisco Neumann Castañeda", "Dr. Rodrigo Vásquez Fuentealba"];
var especialidad_Traumatologia_Rodilla = ["Dr. Pedro Díaz Allende", "Dr. Manuel Saavedra"];
var especialidad_Traumatologia_Cadera = ["Dr. Andres Courtin Marambio"];
var especialidad_Quiropraxia = ["Rodrigo Quezada Arias"];


function cambia_especialidad() {

    //tomamos el valor del select de la espec elegida
    var esp         //esp=especialidad
    esp = document.getElementById('especialidad').value
    las_especialidades = acentos(esp)

    if (las_especialidades != 0) {
        los_profesionales = eval("especialidad_" + las_especialidades)
        
        num_profesionales = los_profesionales.length

        document.f1.profesionales.length = num_profesionales

        for (i = 0; i < num_profesionales; i++) {
            document.f1.profesionales.options[i].value = los_profesionales[i]
            document.f1.profesionales.options[i].text = los_profesionales[i]
        }
    } else {

        document.f1.profesionales.length = 1

        document.f1.profesionales.options[0].value = " "
        document.f1.profesionales.options[0].text = "SIN ASIGNAR"

    }
}

//FIN FUNCION cambia_especialidad


function acentos(esp) {
    var acentuada
    if (esp == "Cirugía Infantil") { acentuada = "Cirugia_Infantil"; }
    else {
        if (esp == "Fonoaudiología") { acentuada = "Fonoaudiologia"; }
        else {
            if (esp == "Gastroenterología") { acentuada = "Gastroenterologia"; }
            else {
                if (esp == "Kinesiología") { acentuada = "Kinesiologia"; }
                else {
                    if (esp == "Medicina General") { acentuada = "Medicina_General"; }
                    else {
                        if (esp == "Neurología Infantil") { acentuada = "Neurologia_Infantil"; }
                        else {
                            if (esp == "Otorrinolaringología") { acentuada = "Otorrinolaringologia"; }
                            else {
                                if (esp == "Pediatría") { acentuada = "Pediatria"; }
                                else {
                                    if (esp == "Psicología") { acentuada = "Psicologia"; }
                                    else {
                                        if (esp == "Psiquitatría Infantojuvenil") { acentuada = "Psiquitatria_Infantojuvenil"; }
                                        else {
                                            if (esp == "Traumatología General") { acentuada = "Traumatologia_General"; }
                                            else {
                                                if (esp == "Traumatología Hombro Codo") { acentuada = "Traumatologia_Hombro_Codo"; }
                                                else {
                                                    if (esp == "Traumatología Rodilla") { acentuada = "Traumatologia_Rodilla"; }
                                                    else {
                                                        if (esp == "Traumatología Cadera") { acentuada = "Traumatologia_Cadera"; }
                                                        else {
                                                            if (esp == "Quiropraxia") { acentuada = "Quiropraxia"; }
                                                            else {
                                                                acentuada = esp;


                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return acentuada
}

