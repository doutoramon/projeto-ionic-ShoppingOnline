import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaEnderecoPageRoutingModule } from './conta-endereco-routing.module';

import { ContaEnderecoPage } from './conta-endereco.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaEnderecoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContaEnderecoPage]
})
export class ContaEnderecoPageModule {}
