window.addEventListener('load', init, false);

function init() {
    //Variables Globales
    const precioNoche = 100;

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
    let mostrarHistorialLbl1 = document.getElementById('mostrarHistorialLbl1');
    let mostrarHistorialLbl2 = document.getElementById('mostrarHistorialLbl2');
    let historialNombre = document.getElementById('historialNombre');
    let historialNoches = document.getElementById('historialNoches');
    let historialTipoCliente = document.getElementById('historialTipoCliente');
    let historialPrecioFinal = document.getElementById('historialPrecioFinal');


    //Variables Globales para usar en ambas funciones
    let nombre = '';
    let apellido = '';
    let cantidadNoches = '';
    let tipoDeCliente = '';
    let precioFinal = 0;

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
    }
    // historialArr.push(clientesObj)

    ////////////////////////////////////////////////////////////////////
    //Código para la parte de historial
    let clientesObj = {}
    let historialArr = []
    
    function onHistorialBtn() {
        clientesObj = {
            'nombre'        : nombre,
            'apellido'      : apellido,
            'noches'        : cantidadNoches,
            'tipoDeCliente' : tipoDeCliente,
            'precioFinal'   : precioFinal
        }

        historialArr = historialArr.push(clientesObj)
        console.log('values -->',nombre,apellido,cantidadNoches,tipoDeCliente,precioFinal)
        console.log('historialArr',historialArr)
        
        mostrarHistorialLbl1.style.display = "flex";
        mostrarHistorialLbl2.style.display = "flex";
        mostrarHistorialLbl2.style.flexDirection = "column";

        historialNombre.innerHTML      = `Nombre: ${clientesObj.nombre} ${clientesObj.apellido}`;
        historialNoches.innerHTML      = `Cantidad de noches: ${clientesObj.noches}`;
        historialTipoCliente.innerHTML = `Tipo de cliente: ${clientesObj.tipoDeCliente}`;
        historialPrecioFinal.innerHTML = `Precio final: ${clientesObj.precioFinal}`
    }

    calcularBtn.onclick = onCalcularBtn;
    historialBtn.onclick = onHistorialBtn;

}