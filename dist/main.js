"use strict";

var _cliente = require("../js/cliente.js");
var _impuesto = require("../js/impuesto.js");
var cliente1 = new _cliente.Cliente('Roimer Maestre');
var impuesto1 = new _impuesto.Impuesto(50500, 15200);
var cliente2 = new _cliente.Cliente('Celeste Oviedo');
var impuesto2 = new _impuesto.Impuesto(98500, 15200);
console.log("Nombre del cliente: ".concat(cliente1.getNombre(), " y su impuesto es: ").concat(impuesto1.calcularImpuesto()));
console.log("Nombre del cliente: ".concat(cliente2.getNombre(), " y su impuesto es: ").concat(impuesto2.calcularImpuesto()));