import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckPokemonService {

  private apiUrl = 'https://api.pokemontcg.io/v2/cards';
  private apiKey = '3775fd96-c22b-43e5-a243-1ce889305a65';
  private baralhos: any[] = [];

  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);
    return this.http.get(this.apiUrl, { headers });
  }

  criarBaralho(nome: string, cartasSelecionadas: any[]): void {
    const novoBaralho = { nome: nome, cartas: cartasSelecionadas };
    this.baralhos.push(novoBaralho);
  }

  getBaralhos(): any[] {
    return this.baralhos;
  }

  getBaralho(index: number): any {
    return this.baralhos[index];
  }

  atualizarBaralho(index: number, nome: string, cartasSelecionadas: any[]): void {
    this.baralhos[index] = { nome: nome, cartas: cartasSelecionadas };
  }

  removerBaralho(index: number): void {
    this.baralhos.splice(index, 1);
  }
}
