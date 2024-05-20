import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckNewComponent } from './deck-new.component';

describe('DeckNewComponent', () => {
  let component: DeckNewComponent;
  let fixture: ComponentFixture<DeckNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckNewComponent]
    });
    fixture = TestBed.createComponent(DeckNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
