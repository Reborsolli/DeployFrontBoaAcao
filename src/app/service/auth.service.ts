import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../Model/User';
import { UserLogin } from '../Model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getByUser: any;


  constructor(
    private http: HttpClient
  ) {}


  entrar(userLogin:UserLogin):Observable<UserLogin>{
    return this.http.post<UserLogin>('https://boaacaopi.herokuapp.com/usuario/logar', userLogin)
  }

  cadastrar(email:User):Observable<User>{
    return this.http.post<User>('https://boaacaopi.herokuapp.com/usuario/cadastrar',email)
  }

  atualizar(user: User): Observable<User> {
    return this.http.put<User>('https://boaacaopi.herokuapp.com/usuario/atualizar', user)}

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://boaacaopi.herokuapp.com/usuario/${id}`)
  }

  getByEmailUser(email: string): Observable<User>{
    return this.http.get<User>(`https://boaacaopi.herokuapp.com/usuario/email/${email}`)
  }

  getByNomeUser(nome: string): Observable<User>{
    return this.http.get<User>(`https://boaacaopi.herokuapp.com/usuario/nome/${nome}`)
  }

  logado(){
    let ok: boolean = false
    if (environment.token != ''){
      ok = true
    }
    return ok
  }

  naoLogado(){
    let ok: boolean = true
    if (environment.token != ""){
      ok = false
    }
    return ok
  }
}
