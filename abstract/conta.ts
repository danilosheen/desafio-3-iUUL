import { Cliente } from "../classes/cliente";
import { Credito } from "../classes/credito";
import { Debito } from "../classes/debito";

export abstract class Conta {
  private _nConta: number;
  private _creditos: Credito[] = [];
  private _debitos: Debito[] = [];
  private _cliente: Cliente;

  constructor(nConta: number, cliente: Cliente) {
    this._nConta = nConta;
    this._cliente = cliente;
  }

  //metodos
  public depositar(valor: number, data: Date) {
    this._creditos.push(new Credito(valor, data));
  }
  protected sacar(valor: number, data: Date) {
    this._debitos.push(new Debito(valor, data));
  }

  protected calcularSaldo(): number {
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
  public get nConta(): number {
    return this._nConta;
  }

  public set nConta(nConta: number) {
    this._nConta = nConta;
  }

  //creditos
  public get creditos(): Credito[] {
    return this._creditos;
  }

  //debitos
  public get debitos(): Debito[] {
    return this._debitos;
  }

  //idCliente
  public get idCliente(): string {
    return this._cliente.idCliente;
  }
  //nomeCliente
  public get nomeCliente(): string {
    return this._cliente.nome;
  }
}
