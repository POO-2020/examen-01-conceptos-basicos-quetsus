export default class Huesped {
    /**
     * 
     * @param {string} nombre 
     * @param {string} genero 
     */
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
    getDescripcion(){
        return `${this.nombre}, ${this.genero}`;
    }
}
let huesped1 = new Huesped ("Marian Ramírez", "Femenino");
console.log(huesped1.getDescripcion());