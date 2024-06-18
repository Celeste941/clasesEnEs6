/**
 *  1- Definimos y exportamos la clase Cliente.
 * 
 * 2- El constructor recibe un parámetro nombre 
      y lo asigna a la propiedad privada _nombre.
 
 * 3- Método getNombre: devuelve el nombre del
      cliente.
 * 
 * 4- Método setNombre: permite cambiar el nombre
      del cliente
 */
export class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get getNombre() {
    return this._nombre;
  }

  set setNombre(nombre) {
    this._nombre = nombre;
  }
  impuestoCalculado() {
    return this._impuesto.calcularImpuesto();
}
}
