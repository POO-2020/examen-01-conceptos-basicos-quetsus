import Huesped from "./huesped.js";
export default class Reservacion {
    /**
     * 
     * @param {number} numeroHabitacion 
     * @param {number} noches  
     */
    constructor(numeroHabitacion, noches, año, mes, dia){
        this.numeroHabitacion = numeroHabitacion;
        this.fechaLlegada = new Date(año, mes-1, dia);
        this.noches = noches;
        this.huespedes = new Array ();
    }
    getFechaFormatoCorto(){
        return `${this.fecha.getDate()}/${this.fecha.getMonth() + 1}/${this.fecha.getFullYear()}`;
    }
    addHuesped(huesped){
        this.huespedes.push(huesped);
    }
    getNumHuespedes(){
        return `${this.huespedes}`;
    }
    print(){
        return `Habitación ${this.numeroHabitacion}, Fecha de llegada ${this.getFechaFormatoCorto()},
        ${this.noches} reservadas, Huespedes ${this.huespedes}`;
    }
}
let reservacion1 = new Reservacion(213, new Date (21, 1, 2020), 3, 2);
console.log(reservacion1.print());