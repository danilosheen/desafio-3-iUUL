import { Conta } from "../abstract/conta";
import { Pessoa } from "../abstract/pessoa";
import { IUsuario } from "../interfaces/iusuario";
import { Endereco } from "./endereco";

export class Cliente extends Pessoa implements IUsuario {
  private _vip: boolean;
  private _enderecos: Endereco[] = [];
  private _conta: Conta[] = [];

  constructor(
    cpf: number,
    nome: string,
    telefone: string,
    vip: boolean,
    conta: Conta
  ) {
    super(cpf, nome, telefone);
    this._vip = vip;
    this._conta.push(conta);
  }

  //métodos
  public adicionarEndereco(endereco: Endereco) {
    this._enderecos.push(endereco);
  }

  public autenticar(): boolean {
    return true;
  }

  public adicionarConta(conta: Conta){
    this._conta.push(conta)
  }

  //getters and setters

  //endereco
  public get enderecos(): Endereco[] {
    return this._enderecos;
  }

  public set enderecos(value: Endereco[]) {
    this._enderecos = value;
  }

  //vip
  public get vip(): boolean {
    return this._vip;
  }

  public set vip(value: boolean) {
    this._vip = value;
  }

  //conta[
  public get conta(): Conta[] {
    return this._conta;
  }
}
