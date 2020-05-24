import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'inicio', pathMatch:'full'},

  { path: 'inicio',loadChildren: './pages/inicio/inicio.module#InicioPageModule'},

  { path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./pages/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./pages/conta/conta.module').then( m => m.ContaPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./pages/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'conta-pedidos',
    loadChildren: () => import('./pages/conta-pedidos/conta-pedidos.module').then( m => m.ContaPedidosPageModule)
  },
  {
    path: 'conta-seus-dados',
    loadChildren: () => import('./pages/conta-seus-dados/conta-seus-dados.module').then( m => m.ContaSeusDadosPageModule)
  },
  {
    path: 'conta-endereco',
    loadChildren: () => import('./pages/conta-endereco/conta-endereco.module').then( m => m.ContaEnderecoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
