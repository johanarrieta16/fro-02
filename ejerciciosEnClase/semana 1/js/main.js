
window.onload = function() {
    let precioBrutoIn = document.getElementById('precioBrutoIn');
    let calcularBtn = document.getElementById('calcularBtn');
    let resultadoLbl = document.getElementById('resultadoLbl');
    
    let precioBruto = 0;
    let precioNeto = 0;
    let IMPUESTO = 13;
    let subtotal = 0;

    calcularBtn.onclick = function() {
        precioBruto = +(precioBrutoIn.value);
        subtotal = precioBruto * (IMPUESTO / 100);
        precioNeto = precioBruto + subtotal;
        resultadoLbl.innerHTML = 'Precio neto: '+ precioNeto;
    }
}