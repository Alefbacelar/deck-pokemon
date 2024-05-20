import { Component, OnInit } from '@angular/core';
import { DeckPokemonService } from '../services/deck-pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss']
})
export class DeckListComponent implements OnInit {
  baralhos: any[] = [];

  constructor(private router: Router,private deckService: DeckPokemonService) { }

  ngOnInit(): void {
    this.atualizarBaralhos();
  }

  atualizarBaralhos(): void {
    this.baralhos = this.deckService.getBaralhos();
  }

  removerBaralho(index: number): void {
    this.deckService.removerBaralho(index);
    this.atualizarBaralhos();
  }

  editarBaralho(index: number): void {
    this.router.navigate(['/editar', index]);
  }

  criarNovoBaralho(): void {
    this.router.navigate(['/criar']);
  }

  verDetalhes(index: number): void {
    this.router.navigate(['/detalhes', index]);
  }
}
