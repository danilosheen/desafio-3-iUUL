import { Cliente } from "./classes/cliente";
import { ContaCorrente } from "./classes/contaCorrente";
import { ContaPoupanca } from "./classes/contaPoupanca";

//Crie um cliente que possua uma ContaCorrente
const cc1 = new ContaCorrente(1, 0);
const cliente1 = new Cliente("999999", "Danilo", "88888888", true, cc1);

//Efetue um depósito de 1000 nessa ContaCorrente
cc1.depositar(1000, new Date());

//Crie um cliente que possua uma ContaPoupanca
const cp1 = new ContaPoupanca(1);
const cliente2 = new Cliente("999999", "Maria", "88888888", true, cp1);

//Efetue um depósito de 1000 reais nesta ContaPoupanca
cp1.depositar(1000, new Date());

//Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca
cc1.transferir(cp1, 500);

//Exiba o saldo das duas contas
console.log(cc1.verLimite());
console.log(cp1.verSaldo());

console.log("-----------------------------------");
console.log(cc1);
console.log(cp1);
