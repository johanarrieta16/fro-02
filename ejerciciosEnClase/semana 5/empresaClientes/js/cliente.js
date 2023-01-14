export class Cliente {
    constructor(nombre, apellido, email, fondos, mensualidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.fondos = fondos;
        this.mensualidad = mensualidad;
    }

    pagar() {
        if (this.fondos >= this.mensualidad) {
            this.fondos -= this.mensualidad;
            return true;
        }
        return false;
    }
}