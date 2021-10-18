import { Postagem } from "./Postagem"

export class User{
    public id : number
    public email : string
    public nome : string
	public senha: string
    public foto: string
    public postagem : Postagem[]
  tipo: string
}