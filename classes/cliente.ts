import { v4 as uuidv4 } from "uuid";
import { Conta } from "../abstract/conta";
import { Pessoa } from "../abstract/pessoa";
import { IUsuario } from "../interfaces/iusuario";
import { Endereco } from "./endereco";

export class Cliente extends Pessoa implements IUsuario {
  private _idCliente: string;
  private _vip: boolean;
  private _enderecos: Endereco[] = [];
  private _contas: Conta[] = [];

  constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
    super(cpf, nome, telefone);
    this._idCliente = uuidv4();
    this._vip = vip;
  }

  //métodos
  public adicionarEndereco(endereco: Endereco) {
    this._enderecos.push(endereco);
  }

  public autenticar(): boolean {
    return true;
  }

  public adicionarConta(conta: Conta) {
    if (conta.idCliente != this._idCliente) {
      console.error(`Você não pode associar o cliente ${this.nome} a essa conta.`);
      console.error(`A conta ${conta.nConta} pertence ao cliente ${conta.idCliente}`);
    } else{
      this._contas.push(conta);
    }
  }

  //getters and setters
  //uid
  public get idCliente(): string {
    return this._idCliente;
  }

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
    return this._contas;
  }
}
