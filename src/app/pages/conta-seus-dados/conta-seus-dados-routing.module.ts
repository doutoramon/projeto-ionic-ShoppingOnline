import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaSeusDadosPage } from './conta-seus-dados.page';

const routes: Routes = [
  {
    path: '',
    component: ContaSeusDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaSeusDadosPageRoutingModule {}
