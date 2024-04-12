import { Cliente } from "./classes/cliente";
import { Endereco } from "./classes/endereco";

const cliente1 = new Cliente("99999999999", "Danilo", "8888-8888", true);

const end1 = new Endereco(
  "63000000",
  "Rua José Horácio",
  "368A",
  "Casa",
  "Barbalha",
  "CE",
  cliente1.idCliente
);
const end2 = new Endereco(
  "63000000",
  "Rua Joaquim Figueiredo",
  "368A",
  "Casa",
  "Juazeiro",
  "CE",
  cliente1.idCliente
);
const end3 = new Endereco(
  "63000000",
  "Av. Castelo Branco",
  "368A",
  "Casa",
  "Juazeiro",
  "CE",
  cliente1.idCliente
);

cliente1.adicionarEndereco(end1);
cliente1.adicionarEndereco(end2);
cliente1.adicionarEndereco(end3);
console.log(cliente1);
