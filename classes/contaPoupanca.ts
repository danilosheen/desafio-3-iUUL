import { Conta } from "../abstract/conta";

export class ContaPoupanca extends Conta {
  private _saldo: number = 0;

  constructor(nConta: number) {
    super(nConta);
  }

  public atualizarSaldoSaque() {
    this._saldo = super.calcularSaldo();
  }

  public sacar(valor: number, data: Date): void {
    if (this._saldo >= valor) {
      super.sacar(valor, data);
      console.log(`Saque realizado com sucesso!`);
      this.atualizarSaldoSaque();
      console.log(`sacar: ${this._saldo}`);
    } else {
      console.log(`Limite de saque insuficiente!`);
    }
  }

  public verSaldo(): string {
    this.atualizarSaldoSaque();
    return `Conta PP ${super.nConta}: Seu saldo é de ${this._saldo}`;
  }
}
