import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor () { }

  ngOnInit(): void {

  }

  editarPensamento(){

  }                                                   

  cancelar(){
    
  }
}
