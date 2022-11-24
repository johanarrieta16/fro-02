window.onload = function() {
    let precioCocaCola = document.getElementById('precioCocaCola');
    let precioPapiOndasTosty = document.getElementById('precioPapiOndasTosty');
    let precioBolsaDeHielo = document.getElementById('precioBolsaDeHielo');
    
    let calcularBtn = document.getElementById('calcularBtn');
    let resultadoLbl = document.getElementById('resultadoLbl');
    const IMPUESTO = 13;
    let precioBruto = 0;
    let subtotal = 0;

    calcularBtn.onclick = function() {
        precioCocaCola = +(precioCocaCola.value);
        precioPapiOndasTosty = +(precioPapiOndasTosty.value);
        precioBolsaDeHielo = +(precioBolsaDeHielo.value);
        precioBruto = precioCocaCola + precioPapiOndasTosty + precioBolsaDeHielo;
        subtotal = precioBruto * (IMPUESTO / 100);
        precioNeto = precioBruto + subtotal;
        console.log(`El precio bruto es: ${precioBruto} y el precio neto es: ${precioNeto}`);
        resultadoLbl.innerHTML = 'Precio neto: '+ precioNeto.toFixed(2);
    }
}