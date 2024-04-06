"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(cpf, nome, telefone) {
        this._cpf = cpf;
        this._nome = nome;
        this._telefone = telefone;
    }
    //cpf
    get cpf() {
        return this._cpf;
    }
    set cpf(value) {
        this._cpf = value;
    }
    //nome
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    //telefone
    get telefone() {
        return this._telefone;
    }
    set telefone(value) {
        this._telefone = value;
    }
}
exports.Pessoa = Pessoa;
