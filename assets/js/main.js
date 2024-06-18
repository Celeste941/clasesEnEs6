/* 1- Importamos las clases Cliente e Impuesto 
   desde sus respectivos archivos
   
* 2- Creamos una instancia de la clase Cliente 
  con el nombre 'Ana Celeste Perez'
  
  3- Creamos una instancia de la clase Impuesto 
  con un monto bruto anual de 50500 y deducciones 
  de 15200 como ejemplo.
  
  4- Utilizamos el método getNombre() en consola 
  para obtener el nombre del cliente1 y el método 
  calcularImpuesto() para calcular su impuesto.*/


import {Cliente} from '../js/cliente.js';
import {Impuesto} from '../js/impuesto.js';

/*Cliente 1 */
const impuesto1 = new Impuesto(50500, 15200);
const cliente1 = new Cliente('Ana Celeste Perez', impuesto1);

/*Cliente 2 */
const impuesto2 = new Impuesto(98500, 18200);
const cliente2 = new Cliente('Celeste Oviedo', impuesto2);



//Datos en la consola
console.log(`Nombre del cliente: ${cliente1.getNombre} y su impuesto es de: $${cliente1.impuestoCalculado()}`);
console.log(`Nombre del cliente: ${cliente2.getNombre} y su impuesto es de: $${cliente2.impuestoCalculado()}`);



