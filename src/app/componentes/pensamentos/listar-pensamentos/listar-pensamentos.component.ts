import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {

  listaPensamentos = [
    {
      conteudo: 'passo informações para o componente filho',
      autoria: 'componente pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com @input()',
      autoria: 'Componente filho',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab minima ipsa sunt veniam, nisi laborum, nobis quos earum iusto praesentium esse ducimus ipsum molestiae, fugiat quod odio magnam libero!Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab minima ipsa sunt veniam, nisi laborum, nobis quos earum iusto praesentium esse ducimus ipsum molestiae, fugiat quod odio magnam libero!',
      autoria: 'Texto grande',
      modelo: 'modelo3'
    } 
  ];

  constructor(){ }

}
