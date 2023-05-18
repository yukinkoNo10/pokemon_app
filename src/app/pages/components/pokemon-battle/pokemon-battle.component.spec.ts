import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBattleComponent } from './pokemon-battle.component';

describe('PokemonBattleComponent', () => {
  let component: PokemonBattleComponent;
  let fixture: ComponentFixture<PokemonBattleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonBattleComponent]
    });
    fixture = TestBed.createComponent(PokemonBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
