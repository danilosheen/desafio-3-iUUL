"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const pessoa_1 = require("../abstract/pessoa");
class Cliente extends pessoa_1.Pessoa {
    constructor(cpf, nome, telefone, vip, conta) {
        super(cpf, nome, telefone);
        this._enderecos = [];
        this._conta = [];
        this._vip = vip;
        this._conta.push(conta);
    }
    //métodos
    adicionarEndereco(endereco) {
        this._enderecos.push(endereco);
    }
    autenticar() {
        return true;
    }
    adicionarConta(conta) {
        this._conta.push(conta);
    }
    //getters and setters
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
        return this._conta;
    }
}
exports.Cliente = Cliente;
