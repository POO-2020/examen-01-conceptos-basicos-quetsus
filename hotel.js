import Reservacion from "./reservacion.js";
export default  class Hotel {
    /**
     * 
     * @param {string} nombre 
     * @param {number} reservaciones 
     */
    constructor(nombre, reservaciones){
        this.nombre = nombre;
        this.reservaciones = reservaciones;
    }
    getNumHuespedes() {

    }
    listarReservaciones() {
        this.reservacion.forEach((reservacion, i) => {
            console.log(`${i} ${reservacion.print()}`);
        });
    }

}