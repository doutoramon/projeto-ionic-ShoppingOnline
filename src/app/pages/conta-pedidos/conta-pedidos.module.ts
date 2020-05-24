import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaPedidosPageRoutingModule } from './conta-pedidos-routing.module';

import { ContaPedidosPage } from './conta-pedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaPedidosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContaPedidosPage]
})
export class ContaPedidosPageModule {}
