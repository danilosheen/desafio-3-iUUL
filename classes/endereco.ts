import { Cliente } from "./cliente";

export class Endereco {
  private _cep: string;
  private _logradouro: string;
  private _numero: string;
  private _complemento: string;
  private _cidade: string;
  private _uf: string;
  private _idCliente: string;

  constructor(
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    cidade: string,
    uf: string,
    idCliente: string
  ) {
    this._cep = cep;
    this._logradouro = logradouro;
    this._numero = numero;
    this._complemento = complemento;
    this._cidade = cidade;
    this._uf = uf;
    this._idCliente = idCliente;
  }

  //cep
  public get cep(): string {
    return this._cep;
  }

  public set cep(value: string) {
    this._cep = value;
  }

  //logradouro
  public get logradouro(): string {
    return this._logradouro;
  }

  public set logradouro(value: string) {
    this._logradouro = value;
  }

  //numero
  public get numero(): string {
    return this._numero;
  }

  public set numero(value: string) {
    this._numero = value;
  }

  //complemento
  public get complemento(): string {
    return this._complemento;
  }

  public set complemento(value: string) {
    this._complemento = value;
  }

  //cidade
  public get cidade(): string {
    return this._cidade;
  }

  public set cidade(value: string) {
    this._cidade = value;
  }

  //uf
  public get uf(): string {
    return this._uf;
  }

  public set uf(value: string) {
    this._uf = value;
  }

  public get idCliente(): string {
    return this._idCliente;
  }
}
