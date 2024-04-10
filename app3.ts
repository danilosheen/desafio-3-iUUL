import { Cliente } from "./classes/cliente";
import { ContaCorrente } from "./classes/contaCorrente";

//Crie um cliente que possua uma ContaCorrente
const cc1 = new ContaCorrente(1, 0);
const cliente1 = new Cliente("999999", "Danilo", "88888888", true, cc1);

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
