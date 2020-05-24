import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaSeusDadosPageRoutingModule } from './conta-seus-dados-routing.module';

import { ContaSeusDadosPage } from './conta-seus-dados.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaSeusDadosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContaSeusDadosPage]
})
export class ContaSeusDadosPageModule {}
