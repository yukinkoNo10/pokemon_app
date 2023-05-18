import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonBattleComponent } from './pages/components/pokemon-battle/pokemon-battle.component';
import { PokemonBoxComponent } from './pages/components/pokemon-box/pokemon-box.component';
import { SignInPageComponent } from './pages/components/sign-in-page/sign-in-page.component';
import { TopPageComponent } from './pages/components/top-page/top-page.component';
import { UrlConst } from './pages/constants/url-const';

const routes: Routes = [
  { path: '', component: TopPageComponent },
  {
    path: UrlConst.PATH_SIGN_IN,
    component: SignInPageComponent,
  },
  {
    path: UrlConst.PATH_POKEMON_BOX,
    component: PokemonBoxComponent,
  },
  {
    // TODO 動的なルーティングが必要
    path: UrlConst.PATH_BATTLE + UrlConst.SLASH + ':pokemonId',
    component: PokemonBattleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
