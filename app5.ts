import { Cliente } from "./classes/cliente";
import { ContaCorrente } from "./classes/contaCorrente";

//Crie um cliente que possua uma ContaCorrente
const cc1 = new ContaCorrente(1, 0);
const cliente1 = new Cliente("999999", "Danilo", "88888888", true, cc1);

// Efetue um depósito de 300 nessa ContaCorrente
cc1.depositar(300, new Date());

// Defina o valor do limite da ContaCorrete para 100 reais
cc1.limite = 100;

// Crie um cliente que possua uma ContaCorrente
const cc2 = new ContaCorrente(2, 0);
const cliente2 = new Cliente("999999", "Maria", "88888888", true, cc2);

// Efetue um depósito de 100 reais nesta ContaCorrente
cc2.depositar(100, new Date());

// Tente efetuar uma transferência de 1000 reais da primeira ContaCorrente para a segunda ContaPoupanca
cc1.transferir(cc2, 1000);

//Exiba o saldo das duas contas
console.log(cc1.verLimite());
console.log(cc2.verLimite());

console.log("-----------------------------------");
console.log(cc1);
console.log(cc2);
