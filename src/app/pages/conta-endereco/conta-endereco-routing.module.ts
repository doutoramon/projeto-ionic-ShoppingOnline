import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaEnderecoPage } from './conta-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: ContaEnderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaEnderecoPageRoutingModule {}
