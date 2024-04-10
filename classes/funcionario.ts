import { Pessoa } from "../abstract/pessoa";
import { IUsuario } from "../interfaces/iusuario";
import { Cargo } from "./cargo";

export class Funcionario extends Pessoa implements IUsuario {
  private _salario: number;
  private _cargo: Cargo;

  constructor(
    cpf: string,
    nome: string,
    telefone: string,
    salario: number,
    cargo: string
  ) {
    super(cpf, nome, telefone);
    this._salario = salario;
    this._cargo = new Cargo(cargo);
  }

  //método
  public autenticar(): boolean {
    return true;
  }

  //salario
  public get salario(): number {
    return this._salario;
  }

  public set salario(value: number) {
    this._salario = value;
  }

  //cargo
  public get cargo(): Cargo {
    return this._cargo;
  }

  public set cargo(value: Cargo) {
    this._cargo = value;
  }
}
