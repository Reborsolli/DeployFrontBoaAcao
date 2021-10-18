import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../Model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  getByCategoria(temaCategoria: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://boaacaopi.herokuapp.com/postagem', this.token)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://boaacaopi.herokuapp.com/postagem/titulo/${titulo}`)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://boaacaopi.herokuapp.com/postagem', postagem, this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://boaacaopi.herokuapp.com/postagem/${id}`, this.token)
  }
  deletePostagem(id: number) {
    return this.http.delete(`https://boaacaopi.herokuapp.com/postagem/${id}`, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://boaacaopi.herokuapp.com/postagem', postagem, this.token)
  }

}

