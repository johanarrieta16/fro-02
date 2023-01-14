export class Estudiante {
    constructor(nombre) {
       this.nombre = nombre;
       this.energia = 100;
    }

    darleVueltasACancha (numeroDeVueltas) {
        console.log(this.energia)
        for (let i = 0; i < numeroDeVueltas; i++) {
            this.energia -= 5;
        }
        console.log(this.energia)
    }
}