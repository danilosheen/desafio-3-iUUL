"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./classes/cliente");
const contaCorrente_1 = require("./classes/contaCorrente");
const endereco_1 = require("./classes/endereco");
const end1 = new endereco_1.Endereco("63000000", "Rua José Horácio", "368A", "Casa", "Barbalha", "CE");
const end2 = new endereco_1.Endereco("63000000", "Rua Joaquim Figueiredo", "368A", "Casa", "Juazeiro", "CE");
const end3 = new endereco_1.Endereco("63000000", "Av. Castelo Branco", "368A", "Casa", "Juazeiro", "CE");
const cliente1 = new cliente_1.Cliente("99999999999", "Rafael", "8888-8888", true, new contaCorrente_1.ContaCorrente(1, 0));
cliente1.adicionarEndereco(end1);
cliente1.adicionarEndereco(end2);
cliente1.adicionarEndereco(end3);
console.log(cliente1.enderecos);
