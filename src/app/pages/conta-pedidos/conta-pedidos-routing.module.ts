import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaPedidosPage } from './conta-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: ContaPedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaPedidosPageRoutingModule {}
