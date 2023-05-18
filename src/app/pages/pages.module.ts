import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PokemonBoxComponent } from './components/pokemon-box/pokemon-box.component';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { TopPageComponent } from './components/top-page/top-page.component';
import { PokemonBattleComponent } from './components/pokemon-battle/pokemon-battle.component';

@NgModule({
  declarations: [TopPageComponent, PokemonBoxComponent, SignInPageComponent, PokemonBattleComponent],
  imports: [CommonModule],
})
export class PagesModule {}
