/**1-Definimos y exportamos la clase Impuesto.
  
2- El constructor recibe dos parámetros: 
montoBrutoAnual y deducciones, y los asigna
a sus respectivas propiedades privadas.
  
3- Método getMontoBrutoAnual: devuelve el
monto bruto anual.

4- Método setMontoBrutoAnual: permite cambiar
 el monto bruto anual.

5- Método getDeducciones: devuelve las 
deducciones

6- Método setDeducciones: permite cambiar 
las deducciones

7Método calcularImpuesto: calcula el impuesto
 a pagar basado en la fórmula (montoBrutoAnual - deducciones) * 0.21.
 */

export class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  get getMontoBrutoAnual(){
   return this._montoBrutoAnual; 
  }

  set setMontoBrutoAnual(montoBrutoAnual){
    this._montoBrutoAnual = montoBrutoAnual;
  }

  get getDeducciones(){
    return this._deducciones; 
   }
 
   set setDeducciones(deducciones){
     this._deducciones = deducciones;
   }

   calcularImpuesto() {
    return (this._montoBrutoAnual - this._deducciones) * 0.21;
  }

}
