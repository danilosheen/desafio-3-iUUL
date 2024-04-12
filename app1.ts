import { Cargo } from "./classes/cargo";
import { Funcionario } from "./classes/funcionario";

//Crie dois funcionários do banco, um gerente e um atendente.

const cargoGerente = new Cargo("Gerente");
const cargoAtendente = new Cargo("Atendente");

const func1 = new Funcionario(
  "99999999970",
  "Danilo",
  "8888-8888",
  5000,
  cargoGerente
);
const func2 = new Funcionario(
  "99999999990",
  "Felipe",
  "8888-8888",
  2000,
  cargoAtendente
);

console.log(
  func1.cpf,
  func1.nome,
  func1.telefone,
  func1.salario,
  func1.cargo,
  func1.autenticar()
);
console.log("----------------------------------");
console.log(
  func2.cpf,
  func2.nome,
  func2.telefone,
  func2.salario,
  func2.cargo,
  func2.autenticar()
);
console.log("----------------------------------");
console.log(cargoGerente);
console.log("----------------------------------");
console.log(cargoAtendente);
console.log("----------------------------------");
console.log(func1);
console.log("----------------------------------");
console.log(func2);
