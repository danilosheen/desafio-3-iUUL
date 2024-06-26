import { Conta } from "../abstract/conta";
import { Cliente } from "./cliente";

export class ContaCorrente extends Conta {
  private _limite: number;
  private _limiteSaque: number = 0;

  constructor(nConta: number, limite: number, cliente: Cliente) {
    super(nConta, cliente);
    this._limite = limite;
    this._limiteSaque += this._limite;
  }

  protected atualizarLimiteSaque() {
    this._limiteSaque = super.calcularSaldo() + this._limite;
  }

  public transferir(contaDestino: Conta, valor: number): void {
    this.atualizarLimiteSaque();
    if (this._limiteSaque >= valor) {
      super.sacar(valor, new Date());
      contaDestino.depositar(valor, new Date());
      console.log(`Transferência realizada com sucesso!`);
    } else {
      console.log(`Saldo insuficiente para transferência!`);
    }
  }

  public sacar(valor: number, data: Date): void {
    this.atualizarLimiteSaque();
    if (this._limiteSaque >= valor) {
      super.sacar(valor, data);
      console.log(`Saque realizado com sucesso!`);
    } else {
      console.log(`Limite de saque insuficiente!`);
    }
  }

  public verLimite(): string {
    this.atualizarLimiteSaque();
    return `Conta CC ${super.nConta}: Seu limite de saque é de ${
      this._limiteSaque
    }`;
  }

  //getters and setters
  //limite
  public get limite() {
    return this._limite;
  }

  public set limite(value: number) {
    this._limite = value;
  }
}
