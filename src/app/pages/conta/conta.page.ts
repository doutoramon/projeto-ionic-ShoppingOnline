import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  componentes: Componente[] = [
    {
      icone: 'imagem',
      nome:'Pedidos',
      link:'/conta-pedidos'
    },

    {
      icone: 'imagem',
      nome:'Seus dados',
      link:'/conta-seus-dados'
    },

    {
      icone: 'imagem',
      nome:'Endereços',
      link:'/conta-endereco'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icone: string;
  nome: string;
  link: string;
}
