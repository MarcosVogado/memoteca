import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  constructor(private service: PensamentoService){}

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe()
  }

  cancelarPensamento() {
    window.alert('Pensamento cancelado!')
  }

  pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

}
