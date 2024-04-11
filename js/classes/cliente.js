"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const uuid_1 = require("uuid");
const pessoa_1 = require("../abstract/pessoa");
class Cliente extends pessoa_1.Pessoa {
    constructor(cpf, nome, telefone, vip) {
        super(cpf, nome, telefone);
        this._enderecos = [];
        this._contas = [];
        this._idCliente = (0, uuid_1.v4)();
        this._vip = vip;
    }
    //métodos
    adicionarEndereco(endereco) {
        this._enderecos.push(endereco);
    }
    autenticar() {
        return true;
    }
    adicionarConta(conta) {
        if (conta.idCliente != this._idCliente) {
            console.error(`Você não pode associar o cliente ${this.nome} a essa conta.`);
            console.error(`A conta ${conta.nConta} pertence ao cliente ${conta.idCliente}`);
        }
        else {
            this._contas.push(conta);
        }
    }
    //getters and setters
    //uid
    get idCliente() {
        return this._idCliente;
    }
    //endereco
    get enderecos() {
        return this._enderecos;
    }
    set enderecos(value) {
        this._enderecos = value;
    }
    //vip
    get vip() {
        return this._vip;
    }
    set vip(value) {
        this._vip = value;
    }
    //conta[
    get conta() {
        return this._contas;
    }
}
exports.Cliente = Cliente;
