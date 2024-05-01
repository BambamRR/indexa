import { Injectable } from '@angular/core';
import { Contato } from '../contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService{

  constructor(private http: HttpClient) {}

  private readonly API = "http://localhost:3000/contatos"
  obterContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API)
  }

  salvarContato(contato: Contato) {

  }
}
