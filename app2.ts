import { Cliente } from "./classes/cliente";
import { ContaCorrente } from "./classes/contaCorrente";
import { Endereco } from "./classes/endereco";

const end1 = new Endereco(
  "63000000",
  "Rua José Horácio",
  "368A",
  "Casa",
  "Barbalha",
  "CE"
);
const end2 = new Endereco(
  "63000000",
  "Rua Joaquim Figueiredo",
  "368A",
  "Casa",
  "Juazeiro",
  "CE"
);
const end3 = new Endereco(
  "63000000",
  "Av. Castelo Branco",
  "368A",
  "Casa",
  "Juazeiro",
  "CE"
);

const cliente1 = new Cliente(
  99999999999,
  "Rafael",
  "8888-8888",
  true,
  new ContaCorrente(1, 0)
);

cliente1.adicionarEndereco(end1);
cliente1.adicionarEndereco(end2);
cliente1.adicionarEndereco(end3);
console.log(cliente1.enderecos);
