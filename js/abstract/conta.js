"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const credito_1 = require("../classes/credito");
const debito_1 = require("../classes/debito");
class Conta {
    constructor(nConta) {
        this._creditos = [];
        this._debitos = [];
        this._nConta = nConta;
    }
    //numero
    get numero() {
        return this._nConta;
    }
    set numero(nConta) {
        this._nConta = nConta;
    }
    //creditos
    get creditos() {
        return this._creditos;
    }
    set creditos(value) {
        this._creditos.push(value);
    }
    //debitos
    get debitos() {
        return this._debitos;
    }
    set debitos(value) {
        this._debitos.push(value);
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
}
exports.Conta = Conta;
