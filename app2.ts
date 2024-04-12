import { Cliente } from "./classes/cliente";
import { Endereco } from "./classes/endereco";

//Loop gerado endereço recebe cliente e cliente recebe endereço
//Possível solução: passar o idCliente como parâmetro na instância do endereço para associação

//Crie um cliente e adicione 3 endereços a ele
const cliente1 = new Cliente("99999999999", "Danilo", "8888-8888", true);

const end1 = new Endereco(
  "63000000",
  "Rua José Horácio",
  "368A",
  "Casa",
  "Barbalha",
  "CE",
  cliente1
);
const end2 = new Endereco(
  "63000000",
  "Rua Joaquim Figueiredo",
  "368A",
  "Casa",
  "Juazeiro",
  "CE",
  cliente1
);
const end3 = new Endereco(
  "63000000",
  "Av. Castelo Branco",
  "368A",
  "Casa",
  "Juazeiro",
  "CE",
  cliente1
);

cliente1.adicionarEndereco(end1);
cliente1.adicionarEndereco(end2);
cliente1.adicionarEndereco(end3);
console.log(cliente1);

console.log("-------------------------------------");
console.log("-------------------------------------");
console.log("--------------  EXTRA  --------------");
//tentar associar um endereço que já possui um cliente a um cliente secundário
//nesse caso o end1 já pertece ao cliente1

const cliente2 = new Cliente("99999999999", "Maria", "8888-8888", true);
cliente2.adicionarEndereco(end1);
