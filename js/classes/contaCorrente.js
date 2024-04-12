"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const conta_1 = require("../abstract/conta");
class ContaCorrente extends conta_1.Conta {
    constructor(nConta, limite, cliente) {
        super(nConta, cliente);
        this._limiteSaque = 0;
        this._limite = limite;
        this._limiteSaque += this._limite;
    }
    atualizarLimiteSaque() {
        this._limiteSaque = super.calcularSaldo() + this._limite;
    }
    transferir(contaDestino, valor) {
        this.atualizarLimiteSaque();
        if (this._limiteSaque >= valor) {
            super.sacar(valor, new Date());
            contaDestino.depositar(valor, new Date());
            console.log(`Transferência realizada com sucesso!`);
        }
        else {
            console.log(`Saldo insuficiente para transferência!`);
        }
    }
    sacar(valor, data) {
        this.atualizarLimiteSaque();
        if (this._limiteSaque >= valor) {
            super.sacar(valor, data);
            console.log(`Saque realizado com sucesso!`);
        }
        else {
            console.log(`Limite de saque insuficiente!`);
        }
    }
    verLimite() {
        this.atualizarLimiteSaque();
        return `Conta CC ${super.nConta}: Seu limite de saque é de ${this._limiteSaque}`;
    }
    //getters and setters
    //limite
    get limite() {
        return this._limite;
    }
    set limite(value) {
        this._limite = value;
    }
}
exports.ContaCorrente = ContaCorrente;
