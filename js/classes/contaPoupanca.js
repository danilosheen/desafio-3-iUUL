"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const conta_1 = require("../abstract/conta");
class ContaPoupanca extends conta_1.Conta {
    constructor(nConta) {
        super(nConta);
        this._saldo = 0;
    }
    atualizarSaldoSaque() {
        this._saldo = super.calcularSaldo();
    }
    sacar(valor, data) {
        if (this._saldo >= valor) {
            super.sacar(valor, data);
            console.log(`Saque realizado com sucesso!`);
            this.atualizarSaldoSaque();
            console.log(`sacar: ${this._saldo}`);
        }
        else {
            console.log(`Limite de saque insuficiente!`);
        }
    }
    verSaldo() {
        this.atualizarSaldoSaque();
        return `Conta PP ${super.nConta}: Seu saldo é de ${this._saldo}`;
    }
}
exports.ContaPoupanca = ContaPoupanca;
