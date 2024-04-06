"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const pessoa_1 = require("../abstract/pessoa");
const cargo_1 = require("./cargo");
class Funcionario extends pessoa_1.Pessoa {
    constructor(cpf, nome, telefone, salario, cargo) {
        super(cpf, nome, telefone);
        this._salario = salario;
        this._cargo = new cargo_1.Cargo(cargo);
    }
    //método
    autenticar() {
        return true;
    }
    //salario
    get salario() {
        return this._salario;
    }
    set salario(value) {
        this._salario = value;
    }
    //cargo
    get cargo() {
        return this._cargo;
    }
    set cargo(value) {
        this._cargo = value;
    }
}
exports.Funcionario = Funcionario;
