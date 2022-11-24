window.onload = function() {
    let cantidadDePersonas = document.getElementById('cantidadDePersonas');
    let calcularBtn = document.getElementById('calcularBtn');
    let resultadoTelaLbl = document.getElementById('resultadoTelaLbl');
    let resultadoPrecioLbl = document.getElementById('resultadoPrecioLbl');

    const METROSXPERSONA = 3;
    const PRECIOXMETRO = 3550;
    let cantidadDeTela = 0;
    let precioTotal = 0;

    calcularBtn.onclick = function() {
        cantidadDePersonas = +(cantidadDePersonas.value);
        cantidadDeTela = cantidadDePersonas * METROSXPERSONA;
        console.log('-->',cantidadDeTela)
        precioTotal = cantidadDeTela * PRECIOXMETRO;
        resultadoTelaLbl.innerHTML = `La cantidad de tela son ${cantidadDeTela.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} metros.` 
        resultadoPrecioLbl.innerHTML = `El precio total es c${precioTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.`
    }
}