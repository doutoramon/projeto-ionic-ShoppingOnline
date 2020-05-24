import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetPage } from './action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetPage,
    children:[
      {
        path:'carrinho',
        loadChildren:'../carrinho/carrinho.module#CarrinhoPageModule'
      },
      {
        path:'conta',
        loadChildren:'../conta/conta.module#ContaPageModule'
      },
      {
        path:'categoria',
        loadChildren:'../categoria/categoria.module#CategoriaPageModule'
      },
      {
        path:'favoritos',
        loadChildren:'../favoritos/favoritos.module#FavoritosPageModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionSheetPageRoutingModule {}
