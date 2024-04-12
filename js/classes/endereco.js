"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(cep, logradouro, numero, complemento, cidade, uf, cliente) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
        this._cliente = cliente;
    }
    //cep
    get cep() {
        return this._cep;
    }
    set cep(value) {
        this._cep = value;
    }
    //logradouro
    get logradouro() {
        return this._logradouro;
    }
    set logradouro(value) {
        this._logradouro = value;
    }
    //numero
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    //complemento
    get complemento() {
        return this._complemento;
    }
    set complemento(value) {
        this._complemento = value;
    }
    //cidade
    get cidade() {
        return this._cidade;
    }
    set cidade(value) {
        this._cidade = value;
    }
    //uf
    get uf() {
        return this._uf;
    }
    set uf(value) {
        this._uf = value;
    }
    //id
    get idCliente() {
        return this._cliente.idCliente;
    }
    //nomeCliente
    get nomeCliente() {
        return this._cliente.nome;
    }
}
exports.Endereco = Endereco;
