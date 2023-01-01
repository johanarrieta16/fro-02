class Historial {
    constructor(nombre ,apellido , cantidadNoches, tipoDeCliente, descuentoTotal, precioFinal) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cantidadNoches = cantidadNoches;
        this.tipoDeCliente = tipoDeCliente;
        this.descuentoTotal = descuentoTotal;
        this.precioFinal = precioFinal;
    }
    generarReporte() {
        let datos = `<div class="fullNombre">Nombre: ${this.nombre} ${this.apellido} </div>
        <div class="cantidadNoches">Cantidad de noches: ${this.cantidadNoches} </div>
        <div class="tipoDeCliente">Tipo de cliente: ${this.tipoDeCliente.toUpperCase()} </div>
        <div class="descuentoTotal">Descuento: ${this.descuentoTotal} </div>
        <div class="precioFinal">Precio final: $${this.precioFinal}</div> <hr>`;
        return datos;
    }
}