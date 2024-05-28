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
  tiposUnicos: Set<string> = new Set();

  constructor(
    private route: ActivatedRoute,
    private deckService: DeckPokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const index = +params['index'];
      this.baralho = this.deckService.getBaralho(index);
      if (this.baralho) {
        this.contarCartas();
        this.contarTipos();
      }
    });
  }

  contarCartas(): void {
    this.numPokemon = 0;
    this.numTreinador = 0;

    for (const carta of this.baralho.cartas) {
      if (carta.supertype === 'Pokémon') {
        this.numPokemon++;
      } else if (carta.supertype === 'Trainer') {
        this.numTreinador++;
      }
    }
  }

  contarTipos(): void {
    this.tiposUnicos.clear();

    for (const carta of this.baralho.cartas) {
      if (carta.types) {
        for (const tipo of carta.types) {
          this.tiposUnicos.add(tipo);
        }
      }
    }
  }

  voltar(): void {
    this.router.navigate(['/list']);
  }
}
