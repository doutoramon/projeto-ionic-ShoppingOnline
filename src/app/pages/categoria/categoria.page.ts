import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  componentes: Componente[] = [
    {
      icone: 'imagem',
      nome:'Pedidos',
      link:'/conta-pedidos'
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
