"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./classes/cliente");
const contaCorrente_1 = require("./classes/contaCorrente");
//Crie um cliente que possua uma ContaCorrente
const cliente1 = new cliente_1.Cliente("999999", "Danilo", "88888888", true);
const cc1 = new contaCorrente_1.ContaCorrente(1, 0, cliente1.idCliente);
//Efetue três depósitos de 100 nessa ContaCorrente
cc1.depositar(100, new Date());
cc1.depositar(100, new Date());
cc1.depositar(100, new Date());
//Efetue um saque de 50 reais nessa ContaCorrente
cc1.sacar(50, new Date());
//Imprima o valor do saldo dessa ContaCorrente
console.log(cc1.verLimite());
console.log("-----------------------------------");
console.log(cc1);
