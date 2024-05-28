import { Component, OnInit } from '@angular/core';
import { DeckPokemonService } from '../services/deck-pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deck-new',
  templateUrl: './deck-new.component.html',
  styleUrls: ['./deck-new.component.scss']
})
export class DeckNewComponent implements OnInit {
  cards: any[] = [];
  nomeBaralho: string = '';
  cartasSelecionadas: any[] = [];
  editMode: boolean = false;
  editIndex: number | null = null;
  paginatedCards: any[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 12;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private deckService: DeckPokemonService) { }

  ngOnInit(): void {
    this.getCards();

    this.route.params.subscribe(params => {
      const index = params['index'];
      if (index !== undefined) {
        this.editMode = true;
        this.editIndex = parseInt(index);
        const baralho = this.deckService.getBaralho(this.editIndex);
        if (baralho) {
          this.nomeBaralho = baralho.nome;
          this.cartasSelecionadas = baralho.cartas;
        } else {
          console.error('Baralho não encontrado para o índice fornecido:', index);
        }
      } else {
        this.getCards();
      }
    });
  }

  criarBaralho(): void {
    if (this.nomeBaralho.trim() === '') {
      alert('Por favor, insira um nome para o baralho.');
      return;
    }

    if (this.cartasSelecionadas.length < 24 || this.cartasSelecionadas.length > 60) {
      alert('O baralho deve conter entre 24 e 60 cartas.');
      return;
    }

    const countMap = new Map<string, number>();
    for (const carta of this.cartasSelecionadas) {
      const nomeCarta = carta.name;
      const count = countMap.get(nomeCarta);
      if (count !== undefined && count >= 4) {
        alert('Você só pode ter no máximo 4 cartas com o mesmo nome no baralho.');
        return;
      }
      countMap.set(nomeCarta, (count || 0) + 1);
    }

    if (this.editMode) {
      this.deckService.atualizarBaralho(this.editIndex!, this.nomeBaralho, this.cartasSelecionadas);
    } else {
      this.deckService.criarBaralho(this.nomeBaralho, this.cartasSelecionadas);
    }

    this.nomeBaralho = '';
    this.cartasSelecionadas = [];
    this.router.navigate(['/list']);
  }

  getCards(): void {
    this.deckService.getCards().subscribe(
      (response) => {
        this.cards = response.data;
        this.updatePaginatedCards();
      },
      (error) => {
        console.error('Erro ao buscar cartas:', error);
      }
    );
  }

  adicionarCarta(carta: any): void {
    const nomeCarta = carta.name;
    const count = this.cartasSelecionadas.filter(c => c.name === nomeCarta).length;
    if (count >= 4) {
      alert('Você só pode ter no máximo 4 cartas com o mesmo nome no baralho.');
      return;
    }
    this.cartasSelecionadas.push(carta);
  }

  removerCarta(index: number): void {
    const cartaRemovida = this.cartasSelecionadas[index];
    this.cartasSelecionadas.splice(index, 1);
    const cartaIndex = this.paginatedCards.findIndex(carta => carta.id === cartaRemovida.id);
    if (cartaIndex !== -1) {
      this.paginatedCards[cartaIndex].selected = false;
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePaginatedCards();
  }

  onPerPageChange(perPage: number): void {
    this.itemsPerPage = perPage;
    this.updatePaginatedCards();
  }

  toggleSelecaoCarta(carta: any): void {
    const index = this.cartasSelecionadas.findIndex(c => c.id === carta.id);
    if (index !== -1) {
      this.cartasSelecionadas.splice(index, 1);
    } else {
      const nomeCarta = carta.name;
      const count = this.cartasSelecionadas.filter(c => c.name === nomeCarta).length;
      if (count >= 4) {
        alert('Você só pode ter no máximo 4 cartas com o mesmo nome no baralho.');
        return;
      }
      this.cartasSelecionadas.push(carta);
    }
    carta.selected = !carta.selected;
  }

  private updatePaginatedCards(): void {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedCards = this.cards.slice(start, end);
  }
}
