"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debito = void 0;
class Debito {
    constructor(valor, data) {
        this._valor = valor;
        this._data = data;
    }
    get valor() {
        return this._valor;
    }
    get data() {
        return this._data;
    }
}
exports.Debito = Debito;
