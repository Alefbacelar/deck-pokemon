import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeckPokemonService } from '../services/deck-pokemon.service';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.scss']
})
export class DeckDetailsComponent implements OnInit {
  baralho: any;
  numPokemon: number = 0;
  numTreinador: number = 0;
  tiposUnicos: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private deckService: DeckPokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const index = +params['index'];
      this.baralho = this.deckService.getBaralho(index);
      this.contarCartas();
      this.contarTipos();
    });
  }

  contarCartas(): void {
    this.numPokemon = this.baralho.cartas.filter((carta: { supertype: string; }) => carta.supertype === 'Pokémon').length;
    this.numTreinador = this.baralho.cartas.filter((carta: { supertype: string; }) => carta.supertype === 'Trainer').length;
  }

  contarTipos(): void {
    const tiposSet = new Set<string>();
    for (const carta of this.baralho.cartas) {
      if (carta.types) {
        for (const tipo of carta.types) {
          tiposSet.add(tipo);
        }
      }
    }
    this.tiposUnicos = Array.from(tiposSet);
  }

  voltar(): void {
    this.router.navigate(['/list']);
  }

  getIconPath(tipo: string): string {
    return `assets/images/icon.png`;
  }
}
