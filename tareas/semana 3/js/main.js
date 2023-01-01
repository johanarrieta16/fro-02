window.addEventListener('load', init, false);

function init() {
    //Variables Globales
    const precioNoche = 100;

    //Variables Globales para usar en ambas funciones
    let nombre = '';
    let apellido = '';
    let cantidadNoches = '';
    let tipoDeCliente = '';
    let precioFinal = 0;

    // Variables Input
    let nombreIn = document.getElementById('nombreIn');
    let apellidoIn = document.getElementById('apellidoIn');
    let cantidadNochesIn = document.getElementById('cantidadNochesIn');

    // Variables Select
    let descuentoInicialSlt = document.getElementById('descuentoInicialSlt');
    let tipoDeClienteSlt = document.getElementById('tipoDeClienteSlt');

    // Variables Button
    let calcularBtn = document.getElementById('calcularBtn');
    let historialBtn = document.getElementById('historialBtn');

    //Variables Label (Mostrar)
    let mostrarResultadoLbl = document.getElementById('mostrarResultadoLbl');
    let mostrarHistorial = document.getElementById('mostrarHistorial');

    calcularBtn.onclick = onCalcularBtn;
    historialBtn.onclick = onHistorialBtn;
    let historialArray = [];

    function onCalcularBtn() {
        
        //Código para la función onCalcularBtn
        let numSelected = 0;
        numSelected = +(tipoDeClienteSlt.value)
        let descuentoTipoDeCliente = 0;
        
        switch (numSelected) {
            case 1:
                descuentoTipoDeCliente = 0;
                break;
            case 2:
                descuentoTipoDeCliente = 5;
                break;
            case 3:
                descuentoTipoDeCliente = 10;
                break;
        }

        cantidadNoches = +(cantidadNochesIn.value);
        let precioBruto = (cantidadNoches * precioNoche);
        let descuentoInicial = +(descuentoInicialSlt.value);
        let descuentoTotal =  descuentoInicial + descuentoTipoDeCliente;

        let subtotal = precioBruto - (precioBruto * descuentoInicial / 100);
        let precioConDescuentoAdicional = precioBruto - (precioBruto * descuentoTotal / 100);
        
        nombre = nombreIn.value;
        apellido = apellidoIn.value;
        noche = cantidadNoches == 1 ? 'noche' : 'noches';

        if (tipoDeClienteSlt.value == 1) {
            tipoDeCliente = 'Regular';
        } else if (tipoDeClienteSlt.value == 2) {
            tipoDeCliente = 'VIP';
        } else if (tipoDeClienteSlt.value == 3) {
            tipoDeCliente = 'Premium';
        }

        
        if (tipoDeCliente == 'Regular') {
            precioFinal = subtotal;
        } else if (tipoDeCliente == 'VIP' || tipoDeCliente == 'Premium') {
            precioFinal = precioConDescuentoAdicional;
        }

        //Código para la función onCalcularBtn

        mostrarResultadoLbl.style.display = "flex";
        mostrarResultadoLbl.innerHTML = tipoDeCliente == 'Regular' ? `Estimado/a ${nombre.trim()} ${apellido.trim()}, el precio por ${cantidadNoches} ${noche} de hospedaje en nuestro hotel aplicando el ${descuentoInicial}% de descuento de la promoción de fin de año es de $${precioFinal}, esperamos que regrese muy pronto.` : 
        `Estimado/a ${nombre.trim()} ${apellido.trim()}, el precio por ${cantidadNoches} ${noche} de hospedaje en nuestro hotel aplicando el ${descuentoInicial}% de descuento de la promoción de fin de año es de $${subtotal}, sin embargo, por ser cliente "${tipoDeCliente}" se le aplicará un ${descuentoTipoDeCliente}% de descuento adicional, por lo que su factura final es de $${precioFinal}, esperamos que regrese muy pronto.`
        
        let historialGenerico = {
			nombre: nombre,
			apellido: apellido,
			cantidadNoches: cantidadNoches,
			tipoDeCliente: tipoDeCliente,
			descuentoTotal: descuentoTotal,
			precioFinal: precioFinal,
		};

		let historial = new Historial(nombre, apellido, cantidadNoches, tipoDeCliente, descuentoTotal, precioFinal);
		historialArray.push(historial);
        
        limpiarUI();
    }
    
    function limpiarUI() {
        nombreIn.value = '';
        apellidoIn.value = '';
        cantidadNochesIn.value = '';
        descuentoInicialSlt.value = '';
        tipoDeClienteSlt.value = '';
    }

    ////////////////////////////////////////////////////////////////////
    //Código para la parte de historial
    function onHistorialBtn() {

		let historialInfo = document.createElement('div');
		mostrarHistorial.innerHTML = '';
		mostrarHistorial.appendChild(historialInfo);

		for (let index = 0; index < historialArray.length; index++) {
			const historial = historialArray[index];
			historialInfo.innerHTML += historial.generarReporte();
		}
	}

}