import { TestBed } from '@angular/core/testing';

import { DeckPokemonService } from './deck-pokemon.service';

describe('DeckPokemonService', () => {
  let service: DeckPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
