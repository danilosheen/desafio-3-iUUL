export abstract class Pessoa{

  private _cpf: string;
  private _nome: string;
  private _telefone: string;

  constructor(cpf: string, nome: string, telefone: string){
    this._cpf = cpf;
    this._nome = nome
    this._telefone = telefone
  }

  //cpf
  public get cpf(): string{
    return this._cpf;
  }

  public set cpf(value: string){
    this._cpf = value;
  }

  //nome
  public get nome(): string{
    return this._nome;
  }

  public set nome(value: string){
    this._nome = value;
  }

  //telefone
  public get telefone(): string{
    return this._telefone;
  }

  public set telefone(value: string){
    this._telefone = value;
  }

}