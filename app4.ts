import { Cliente } from "./classes/cliente";
import { ContaCorrente } from "./classes/contaCorrente";
import { ContaPoupanca } from "./classes/contaPoupanca";

//Loop conta recebe cliente e cliente recebe conta
//Possível solução: passar o idCliente como parâmetro na instância da conta para associação

//Crie um cliente que possua uma ContaCorrente
const cliente1 = new Cliente("999999", "Danilo", "88888888", true);
const cc1 = new ContaCorrente(1, 0, cliente1);
cliente1.adicionarConta(cc1);

//Efetue um depósito de 1000 nessa ContaCorrente
cc1.depositar(1000, new Date());

//Crie um cliente que possua uma ContaPoupanca
const cliente2 = new Cliente("999999", "Maria", "88888888", true);
const cp1 = new ContaPoupanca(1, cliente2);
cliente2.adicionarConta(cp1);

//Efetue um depósito de 1000 reais nesta ContaPoupanca
cp1.depositar(1000, new Date());

//Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca
cc1.transferir(cp1, 500);

//Exiba o saldo das duas contas
console.log(cc1.verLimite());
console.log(cp1.verSaldo());

console.log("-------------------------------------");
console.log(cc1);
console.log(cp1);
console.log("-------------------------------------");
console.log("-------------------------------------");
console.log("--------------  EXTRA  --------------");
//tentar associar uma conta que já possui um cliente a um cliente secundário
//nesse caso a cc1 já pertece ao cliente1
cliente2.adicionarConta(cc1);
