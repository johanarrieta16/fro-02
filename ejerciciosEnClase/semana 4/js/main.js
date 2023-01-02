"use strict";

window.addEventListener('load', init, false);
import { Car } from '../js/car/car.js';

function init() {
    var carsSlt = document.getElementById('carsSlt');
    var speedSlt = document.getElementById('speedSlt');
    var addBtn = document.getElementById('addBtn');

    addBtn.onclick = onAddCar;

    function onAddCar() {
        var type = carsSlt.value;
        var speed = Number(speedSlt.value);
        var car = new Car(type, speed);
    }

    //Agregar las siguientes clases
    //1. Street: Esta es una imagen que se mueve lentamente y es donde estan los caros
    //1. City : Esta es una imagen de fondo que se mueve lentamente.

    //Hacer el efecto que el escenario nunca termina.

}