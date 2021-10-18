import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../Model/Tema';


@Injectable({
  providedIn: 'root'
})
export class TemaService {
  getByCategoria(temaCategoria: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://boaacaopi.herokuapp.com/tema', this.token)
  }

  getAllByTema(categoria: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://boaacaopi.herokuapp.com/tema/categoria/${categoria}`, this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://boaacaopi.herokuapp.com/tema/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://boaacaopi.herokuapp.com/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://boaacaopi.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://boaacaopi.herokuapp.com/${id}`, this.token)
  }
}
