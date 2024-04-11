"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const credito_1 = require("../classes/credito");
const debito_1 = require("../classes/debito");
class Conta {
    constructor(nConta, idCliente) {
        this._creditos = [];
        this._debitos = [];
        this._nConta = nConta;
        this._idCliente = idCliente;
    }
    //metodos
    depositar(valor, data) {
        this._creditos.push(new credito_1.Credito(valor, data));
    }
    sacar(valor, data) {
        this._debitos.push(new debito_1.Debito(valor, data));
    }
    calcularSaldo() {
        let creditos = 0;
        let debitos = 0;
        for (let i = 0; i < this.creditos.length; i++) {
            creditos += this._creditos[i].valor;
        }
        for (let i = 0; i < this.debitos.length; i++) {
            debitos += this._debitos[i].valor;
        }
        return creditos - debitos;
    }
    //getters and setters
    //numero da conta
    get nConta() {
        return this._nConta;
    }
    set nConta(nConta) {
        this._nConta = nConta;
    }
    //creditos
    get creditos() {
        return this._creditos;
    }
    //debitos
    get debitos() {
        return this._debitos;
    }
    //idCliente
    get idCliente() {
        return this._idCliente;
    }
    set idCliente(idCliente) {
        this._idCliente = idCliente;
    }
}
exports.Conta = Conta;
