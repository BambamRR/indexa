import { Injectable } from '@angular/core';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Contato[] = [
    { id: 20, nome: 'Juliana', telefone: '86 121042222' },
    { id: 21, nome: 'Kleber', telefone: '16 333519686' },
    { id: 22, nome: 'Karina', telefone: '74 580566400' },
    { id: 23, nome: 'Lucas', telefone: '89 371256434' },
    { id: 24, nome: 'Lúcia', telefone: '65 716464295' },
    { id: 25, nome: 'Marcelo', telefone: '45 973219600' },
    { id: 4, nome: 'Beatriz', telefone: '25 854986459' },
    { id: 5, nome: 'Carlos', telefone: '94 543197849' },
    { id: 6, nome: 'Cláudia', telefone: '31 176437098' },
    { id: 7, nome: 'Daniel', telefone: '56 613692441' },
  ];

  constructor() {
    //Tentar obetr os dados do LocalStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString
      ? JSON.parse(contatosLocalStorageString)
      : null;

    this.contatos = contatosLocalStorage || null;
    // salvar os contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
  obterContatos() {
    return this.contatos;
  }
}
